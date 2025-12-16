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
    let prompt = `Analyze this CV for a ${audience} audience.\n\nCV:\n${cvText}\n\n`;
    
    if (jd) {
      prompt += `JOB DESCRIPTION:\n${jd}\n\n`;
    }

    if (outputMode === "LITE") {
      prompt += `Return JSON matching this LITE schema:
{
  "version": "2.3",
  "mode": "LITE",
  "audience": "${audience}",
  "generatedAt": "<ISO timestamp>",
  "candidate": "<full name>",
  "hasJd": ${jd ? "true" : "false"},
  "scores": {
    "overall": <0-100>,
    "grade": "<A|A-|B+|B|B-|C+|C|D|F>",
    "rawCompatibility": ${jd ? "<0-100>" : "null"},
    "tei": ${jd ? "<1-5>" : "null"},
    "candidateRisk": null,
    "employerRisk": null
  },
  "verdict": "<one sentence assessment>",
  "topIssues": [{"code": "A1", "issue": "...", "severity": "high|medium|low", "count": 1, "fix": "..."}],
  "topStrengths": [{"code": "D1", "strength": "..."}],
  "bestFitRole": "<suggested role or null>",
  "nextAction": "<most important next step>"
}`;
    } else if (outputMode === "STANDARD") {
      prompt += `Return JSON matching this STANDARD schema:
{
  "version": "2.3",
  "mode": "STANDARD",
  "audience": "${audience}",
  "generatedAt": "<ISO timestamp>",
  "cvSummary": {
    "candidateName": "<full name>",
    "totalYears": <number>,
    "currentRole": "<current/most recent role>",
    "seniorityLevel": "<Entry|Mid|Senior|Lead|Principal|Director|VP|C-Level>",
    "topSkills": ["skill1", "skill2", "skill3"],
    "certificationCount": <number>
  },
  "scores": {
    "overall": <0-100>,
    "grade": "<A|A-|B+|B|B-|C+|C|D|F>",
    "rawCompatibility": ${jd ? "<0-100>" : "null"},
    "tei": ${jd ? "<1-5>" : "null"},
    "candidateRisk": null,
    "employerRisk": null
  },
  "bulletHealth": {
    "totalBullets": <count of bullet points>,
    "averageScore": <0-100>,
    "distribution": {"excellent": <n>, "good": <n>, "fair": <n>, "poor": <n>},
    "topIssue": "<most common bullet issue>",
    "topFix": "<how to fix>"
  },
  "topIssues": [{"code": "A1", "issue": "...", "severity": "high|medium|low", "count": 1, "fix": "..."}],
  "topStrengths": [{"code": "D1", "strength": "..."}],
  "improvements": {
    "critical": [{"code": "...", "priority": "critical", "action": "...", "impact": "...", "effort": "..."}],
    "high": [],
    "medium": [],
    "scorePotential": {"current": <score>, "afterCritical": <score>, "afterAll": <score>, "ceiling": 100}
  },
  "verdict": "<one sentence assessment>",
  "alternativeRoles": [{"role": "...", "fitScore": <0-100>, "reason": "..."}]
}`;
    } else {
      // FULL mode
      prompt += `Return JSON matching this FULL schema:
{
  "version": "2.3",
  "mode": "FULL",
  "audience": "${audience}",
  "generatedAt": "<ISO timestamp>",
  "cvAnalysis": {
    "metadata": {
      "candidateName": "<full name>",
      "email": "<email or null>",
      "phone": "<phone or null>",
      "location": "<location or null>",
      "linkedin": "<linkedin or null>",
      "documentStats": {"pages": 1, "wordCount": <approx>, "bulletCount": <count>}
    },
    "professionalSummary": {
      "text": "<summary text>",
      "yearsMentioned": <years mentioned or null>,
      "keyThemes": ["theme1", "theme2"],
      "qualityScore": <0-100>,
      "issues": []
    },
    "experience": {
      "totalYears": <total years of experience>,
      "roles": [
        {
          "title": "<job title>",
          "company": "<company>",
          "location": null,
          "startDate": "<start>",
          "endDate": "<end or Present>",
          "durationMonths": <months>,
          "seniorityLevel": "<Entry|Mid|Senior|Lead|Principal|Director|VP|C-Level>",
          "bullets": [],
          "bulletSummary": {"count": <n>, "averageScore": <0-100>, "excellent": 0, "good": 0, "fair": 0, "poor": 0}
        }
      ],
      "progression": {
        "pattern": "<Stagnant|Slow|Steady|Accelerated|Exceptional>",
        "isHealthy": <true|false>,
        "assessment": "<progression assessment>"
      },
      "gaps": []
    },
    "skills": {
      "validated": [{"skill": "<skill>", "evidence": "<where demonstrated>", "proficiency": <1-5>}],
      "implied": [],
      "ghost": [],
      "validationRate": <0-100>
    },
    "education": {
      "degrees": [{"degree": "<degree>", "field": "<field>", "institution": "<school>", "year": <year or null>}],
      "certifications": [{"name": "<cert>", "issuer": "<issuer>", "year": <year or null>, "status": "Active", "relevance": "High"}]
    },
    "experienceFactors": {
      "h1TotalYears": {"years": <n>, "score": <0-100>, "assessment": "<comment>"},
      "h2DomainYears": [{"domain": "<domain>", "years": <n>, "isPrimary": true, "score": <0-100>}],
      "h3IndustryYears": [{"industry": "<industry>", "years": <n>}],
      "h4Recency": {"recentRelevance": "<Current|Recent|Dated>", "score": <0-100>},
      "h5Scope": {"level": "<scope level>", "evidence": [], "score": <0-100>},
      "h6Complexity": {"level": "<complexity>", "evidence": [], "score": <0-100>},
      "h7Impact": {"quantifiedCount": <n>, "totalValue": "<value>", "score": <0-100>},
      "h8Progression": {"pattern": "<pattern>", "trajectory": "<trajectory>", "score": <0-100>},
      "h9Specialization": {"type": "<type>", "primaryArea": "<area>", "score": <0-100>}
    },
    "bulletAnalysis": {
      "totalBullets": <count>,
      "averageScore": <0-100>,
      "distribution": {"excellent": <n>, "good": <n>, "fair": <n>, "poor": <n>},
      "codeScores": {"A10": <0-100>, "A11": <0-100>, "A12": <0-100>, "A13": <0-100>},
      "rewritePriorities": []
    }
  },
  "studentAnalysis": {
    "overallCvQuality": {"score": <0-100>, "grade": "<A|A-|B+|B|B-|C+|C|D|F>"},
    "honestAssessment": "<honest 1-2 sentence assessment>",
    "topStrengths": [{"code": "D1", "strength": "..."}],
    "topIssues": [{"code": "A1", "issue": "...", "severity": "high", "count": 1, "fix": "..."}],
    "improvements": {
      "critical": [],
      "high": [],
      "medium": [],
      "scorePotential": {"current": <score>, "afterCritical": <score>, "afterAll": <score>, "ceiling": 100}
    },
    "alternatives": {"betterFitRoles": [{"role": "...", "fitScore": <0-100>, "reason": "..."}]}
  },
  "hrAnalysis": {
    "riskAssessment": {"summary": "<risk summary>", "level": "<LOW|MODERATE|HIGH|CRITICAL>"},
    "hireRecommendation": "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>"
  }
}`;
    }

    if (includeFullRewrite) {
      prompt += `\n\nAlso include "fullRewrite": {"available": true, "currentScore": <X>, "projectedScore": <Y>, "completeRewrittenCV": "<full rewritten CV text>"}`;
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
