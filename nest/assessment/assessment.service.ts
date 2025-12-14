import { Injectable, Inject } from "@nestjs/common";
import { LangchainService, ProviderType } from "./langchain.service";
import type { ParsedCV } from "../../types/cv";

export type OutputMode = "LITE" | "STANDARD" | "FULL";
export type AudienceType = "STUDENT" | "HR";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AssessmentConfig {
  provider?: ProviderType;
  model?: string;
  outputMode?: OutputMode;
  audience?: AudienceType;
  version?: "2.3" | "2.4";
  jd?: string;
  includeFullRewrite?: boolean;
}

const SYSTEM_PROMPT = `You are CV Intelligence Analyst v2.4.

CORE PRINCIPLES:
1. HONEST - Never inflate scores. A 52% is a 52%.
2. SECTION-BASED - Every finding belongs to its source section.
3. ACTIONABLE - Every issue has a specific fix with effort estimate.
4. SPECIFIC - Use exact quotes (sourceText), numbers, and issue codes.
5. BALANCED - Acknowledge strengths before issues.
6. REWRITE-READY - Provide improved text for every weak element.

ISSUE CODES:
- A1-A9: ATS & Structure
- A10-A13: Bullet Analysis
- B1-B8: Content Realism
- C1-C6: Formatting & Polish
- D1-D5: Career Narrative

SCORING:
- Overall CV Score: 0-100 based on weighted factors
- Individual bullets: 0-100 based on action verb, quantification, results
- Provide letter grade: A+, A, A-, B+, B, B-, C+, C, C-, D, F

OUTPUT FORMAT: Return valid JSON only, no markdown.`;

@Injectable()
export class AssessmentService {
  constructor(
    @Inject(LangchainService) private readonly langchainService: LangchainService
  ) {}

  getAvailableProviders(): ProviderType[] {
    return this.langchainService.getAvailableProviders();
  }

  async assessCV(cv: ParsedCV, config: AssessmentConfig = {}) {
    const {
      provider,
      model,
      outputMode = "STANDARD",
      audience = "STUDENT",
      version = "2.3",
      jd,
      includeFullRewrite = false,
    } = config;

    const cvText = this.formatCVText(cv);
    const startTime = Date.now();

    const userPrompt = this.buildUserPrompt(cvText, outputMode, audience, jd, includeFullRewrite);

    try {
      const response = await this.langchainService.generate(
        SYSTEM_PROMPT,
        userPrompt,
        {
          provider,
          model,
          temperature: 0.2,
          maxOutputTokens: 8192,
        }
      );

      const parsed = this.parseResponse(response.text);

      return {
        success: true,
        data: {
          ...parsed,
          version,
          mode: outputMode,
        },
        meta: {
          audience,
          processingTimeMs: Date.now() - startTime,
          tokensUsed: response.usage,
        },
      };
    } catch (error) {
      console.error("Assessment error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Assessment failed",
      };
    }
  }

  private formatCVText(cv: ParsedCV): string {
    const sections: string[] = [];
    
    if (cv.name) sections.push(`NAME: ${cv.name}`);
    if (cv.title) sections.push(`TITLE: ${cv.title}`);
    if (cv.email) sections.push(`EMAIL: ${cv.email}`);
    if (cv.phone) sections.push(`PHONE: ${cv.phone}`);
    if (cv.location) sections.push(`LOCATION: ${cv.location}`);
    if (cv.linkedin) sections.push(`LINKEDIN: ${cv.linkedin}`);
    if (cv.github) sections.push(`GITHUB: ${cv.github}`);
    if (cv.website) sections.push(`WEBSITE: ${cv.website}`);
    
    if (cv.summary) sections.push(`\nPROFESSIONAL SUMMARY:\n${cv.summary}`);
    
    if (cv.experience && cv.experience.length > 0) {
      sections.push("\nEXPERIENCE:");
      cv.experience.forEach((exp, i) => {
        sections.push(`\n${i + 1}. ${exp.role} at ${exp.company}`);
        if (exp.duration) sections.push(`   Duration: ${exp.duration}`);
        if (exp.location) sections.push(`   Location: ${exp.location}`);
        if (exp.description) sections.push(`   ${exp.description}`);
      });
    }
    
    if (cv.education && cv.education.length > 0) {
      sections.push("\nEDUCATION:");
      cv.education.forEach((edu, i) => {
        sections.push(`${i + 1}. ${edu.degree} - ${edu.institution} (${edu.year || "N/A"})`);
      });
    }
    
    if (cv.certifications && cv.certifications.length > 0) {
      sections.push("\nCERTIFICATIONS:");
      cv.certifications.forEach((cert, i) => {
        sections.push(`${i + 1}. ${cert.name} - ${cert.issuer} (${cert.year || "N/A"})`);
      });
    }
    
    if (cv.skills && cv.skills.length > 0) {
      sections.push(`\nSKILLS: ${cv.skills.join(", ")}`);
    }
    
    return sections.join("\n");
  }

  private buildUserPrompt(
    cvText: string,
    outputMode: OutputMode,
    audience: AudienceType,
    jd?: string,
    includeFullRewrite?: boolean
  ): string {
    let prompt = `Analyze this CV for a ${audience} audience using ${outputMode} depth.\n\n`;
    prompt += `CV:\n${cvText}\n\n`;
    
    if (jd) {
      prompt += `JOB DESCRIPTION:\n${jd}\n\n`;
    }

    prompt += `Return JSON with structure:
{
  "scores": { "overall": 0-100, "grade": "A-F", "breakdown": {...} },
  "verdict": "one-line summary",
  "strengths": [{ "code": "S1", "text": "...", "impact": "high|medium|low" }],
  "issues": [{ "code": "A1", "severity": "critical|high|medium|low", "text": "...", "fix": "..." }],
  "improvements": [{ "priority": 1-5, "action": "...", "effort": "quick|moderate|major" }]
}`;

    if (includeFullRewrite) {
      prompt += `\n\nAlso include:
{
  "fullRewrite": { "available": true, "currentScore": X, "projectedScore": Y, "completeRewrittenCV": "..." }
}`;
    }

    return prompt;
  }

  private parseResponse(text: string): Record<string, unknown> {
    let cleaned = text.trim();
    
    if (cleaned.startsWith("```json")) {
      cleaned = cleaned.slice(7);
    } else if (cleaned.startsWith("```")) {
      cleaned = cleaned.slice(3);
    }
    if (cleaned.endsWith("```")) {
      cleaned = cleaned.slice(0, -3);
    }
    
    cleaned = cleaned.trim();

    try {
      return JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse response:", cleaned.substring(0, 500));
      return {
        scores: { overall: 50, grade: "C" },
        verdict: "Analysis failed to parse properly",
        strengths: [],
        issues: [],
        improvements: [],
      };
    }
  }

  async comparePrompts(cv: ParsedCV): Promise<Record<string, unknown>> {
    const cvText = this.formatCVText(cv);

    const oldPrompt = `You are an expert CV/Resume analyst. Analyze the following CV and provide a comprehensive assessment.

CV DATA:
${cvText}

Provide your assessment as a valid JSON object with this exact structure:
{
  "overallScore": <number 0-100>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Education", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<specific feedback>"}
  ],
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "recommendations": ["<recommendation 1>", "<recommendation 2>", "<recommendation 3>", "<recommendation 4>", "<recommendation 5>"]
}

Return ONLY valid JSON, no markdown, no code blocks.`;

    const newPrompt = `You are the EduNatives Forensic CV Analyst (v10.0). Analyze the following CV using our strict weighted scoring system.

CV DATA:
"""
${cvText}
"""

--- WEIGHTED SCORING SYSTEM ---
Calculate the overall score as a WEIGHTED AVERAGE based on these exact weights:
- Work Experience: 30% weight
- Professional Summary: 20% weight
- Education: 15% weight
- Skills: 15% weight
- Contact Information: 10% weight
- Overall Presentation: 10% weight

Formula: overallScore = (section1Score * 30 + section2Score * 20 + ...) / 100

--- OUTPUT FORMAT ---
Return ONLY a valid JSON object with this structure:
{
  "overallScore": <number 0-100, calculated using weighted average>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<detailed feedback>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<forensic analysis>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<forensic review>"},
    {"name": "Education", "score": <0-100>, "feedback": "<analysis>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<review>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<assessment>"}
  ],
  "strengths": ["<specific strength with evidence>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<specific weakness with recommendation>", "<weakness 2>", "<weakness 3>"],
  "recommendations": ["<specific actionable recommendation>", "<recommendation 2>", "<recommendation 3>", "<recommendation 4>", "<recommendation 5>"]
}

Return ONLY valid JSON, no markdown code blocks.`;

    try {
      const [oldResponse, newResponse] = await Promise.all([
        this.langchainService.generate("", oldPrompt, { provider: "gemini", maxOutputTokens: 4096 }),
        this.langchainService.generate("", newPrompt, { provider: "gemini", maxOutputTokens: 4096 }),
      ]);

      const oldAssessment = this.parseResponse(oldResponse.text);
      const newAssessment = this.parseResponse(newResponse.text);

      return {
        comparison: {
          oldPrompt: {
            label: "OLD (Simple Generic)",
            assessment: oldAssessment,
            tokenUsage: {
              promptTokens: oldResponse.usage.inputTokens,
              completionTokens: oldResponse.usage.outputTokens,
            },
          },
          newPrompt: {
            label: "NEW (Forensic v10.0)",
            assessment: newAssessment,
            tokenUsage: {
              promptTokens: newResponse.usage.inputTokens,
              completionTokens: newResponse.usage.outputTokens,
            },
          },
          scoreDifference: {
            oldScore: (oldAssessment as { overallScore?: number }).overallScore || 0,
            newScore: (newAssessment as { overallScore?: number }).overallScore || 0,
            diff: ((newAssessment as { overallScore?: number }).overallScore || 0) - 
                  ((oldAssessment as { overallScore?: number }).overallScore || 0),
          },
        },
      };
    } catch (error) {
      console.error("Comparison error:", error);
      throw new Error("Failed to run comparison");
    }
  }

  async getAdvisorResponse(
    cv: ParsedCV,
    message: string,
    history: ChatMessage[] = []
  ): Promise<{ response: string; tokenUsage: Record<string, number> }> {
    const cvText = this.formatCVText(cv);
    
    const conversationHistory = history
      .slice(-10)
      .map(msg => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n");

    const systemPrompt = `You are an expert AI Career Advisor specializing in CV/resume improvement.
You have access to the candidate's CV and are having a conversation to help them improve it.

CANDIDATE'S CV:
${cvText}

CONVERSATION GUIDELINES:
1. Be specific and actionable in your advice
2. Reference specific sections of their CV when giving feedback
3. Provide examples and rewrites when helpful
4. Be encouraging but honest about areas for improvement
5. Consider ATS compatibility in your recommendations
6. Keep responses concise and focused`;

    const userPrompt = conversationHistory 
      ? `Previous conversation:\n${conversationHistory}\n\nUser's new message: ${message}`
      : message;

    try {
      const response = await this.langchainService.generate(
        systemPrompt,
        userPrompt,
        { provider: "gemini", maxOutputTokens: 1024, temperature: 0.7 }
      );

      return {
        response: response.text || "I apologize, but I couldn't generate a response. Please try again.",
        tokenUsage: {
          promptTokens: response.usage.inputTokens,
          completionTokens: response.usage.outputTokens,
          totalTokens: response.usage.inputTokens + response.usage.outputTokens,
        },
      };
    } catch (error) {
      console.error("Advisor error:", error);
      throw new Error(error instanceof Error ? error.message : "Failed to get advice");
    }
  }
}
