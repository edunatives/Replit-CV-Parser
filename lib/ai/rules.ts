/**
 * @fileoverview EduNatives AI Rules & Forensic CV Engine - Merged Module
 * @version 10.0
 * @description Unified module combining:
 * - Forensic CV Engine v9.0 prompt structure (unified parse+audit)
 * - Security guidelines (injection protection, sanitization)
 * - Token control and rate limiting
 * - Retry logic with exponential backoff
 * - Response cleaning and JSON repair utilities
 * 
 * This module provides:
 * - Prompt builders for CV parsing, assessment, JD matching, and advisor
 * - Forensic audit with weighted scoring and highlight extraction
 * - Security utilities for prompt injection prevention
 * - Robust API communication patterns
 */

import type { ParsedCV } from "@/types/cv";

// ============================================================================
// SECURITY GUIDELINES
// ============================================================================

/**
 * TOKEN CONSUMPTION CONTROL
 * Rules to keep AI API token usage under control:
 * 
 * 1. INPUT LIMITS:
 *    - Max CV text: 30,000 characters (optimized for combined parse+audit prompts)
 *    - Max job description: 10,000 characters
 *    - Max chat message: 2,000 characters
 *    - Max conversation history: 20 messages (older messages dropped)
 * 
 * 2. RESPONSE LIMITS:
 *    - Set maxOutputTokens in API calls (e.g., 4096 for forensic, 1024 for chat)
 *    - Truncate AI responses over 8,000 characters before display
 * 
 * 3. CACHING STRATEGY:
 *    - Cache identical CV assessments for 24 hours (hash CV content)
 *    - Cache JD match results for same CV+JD pair for 1 hour
 *    - Use in-memory cache or Redis for production
 * 
 * 4. RATE LIMITING:
 *    - Max 10 AI requests per user per minute
 *    - Max 100 AI requests per user per hour
 *    - Circuit breaker: pause if token usage exceeds daily budget
 * 
 * 5. MONITORING:
 *    - Log usageMetadata (promptTokens, completionTokens) from each request
 *    - Alert when daily token usage exceeds 80% of budget
 */
export const TOKEN_LIMITS = {
  maxCVTextLength: 30000, // Optimized for combined prompts
  maxJobDescriptionLength: 10000,
  maxChatMessageLength: 2000,
  maxConversationHistory: 20,
  maxOutputTokens: {
    forensic: 4096, // Combined parse+audit needs more tokens
    parsing: 2048,
    assessment: 1024,
    jdMatch: 1024,
    advisor: 512,
  },
  rateLimit: {
    perMinute: 10,
    perHour: 100,
  },
  retryConfig: {
    maxRetries: 3,
    baseDelayMs: 1000,
  },
} as const;

/**
 * AI PROMPT INJECTION PREVENTION
 * Rules to prevent prompt attacks and malicious content:
 * 
 * 1. INPUT SANITIZATION:
 *    - Strip control characters (except newlines/tabs)
 *    - Remove potential prompt injection patterns
 *    - Normalize unicode to prevent homograph attacks
 *    - Redact detected secrets/API keys before sending to AI
 * 
 * 2. OUTPUT VALIDATION:
 *    - Validate AI responses against expected JSON schema
 *    - Reject responses containing executable code patterns
 *    - Filter URLs/emails that weren't in original input
 *    - Scan for toxic/offensive content before display
 * 
 * 3. PROMPT STRUCTURE:
 *    - Always use immutable system prompts (user cannot override)
 *    - Clearly delimit user content with markers
 *    - Never interpolate user input directly into instruction sections
 */
export const DANGEROUS_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions?/i,
  /system\s*:/i,
  /\[\[.*?\]\]/,
  /<\/?script/i,
  /javascript:/i,
  /data:text\/html/i,
  /eval\s*\(/i,
  /exec\s*\(/i,
  /disregard\s+(all\s+)?above/i,
  /forget\s+(everything|all)/i,
  /new\s+instructions?:/i,
  /override\s+prompt/i,
];

/**
 * Check if text contains potential prompt injection
 * @param text - Text to check
 * @returns True if suspicious patterns found
 */
export function containsInjectionAttempt(text: string): boolean {
  return DANGEROUS_PATTERNS.some(pattern => pattern.test(text));
}

/**
 * Sanitize user input before sending to AI
 * Removes control characters, normalizes unicode, and enforces length limits
 * @param text - Raw user input
 * @param maxLength - Maximum allowed length (defaults to CV limit)
 * @returns Sanitized text
 */
export function sanitizeAIInput(text: string, maxLength: number = TOKEN_LIMITS.maxCVTextLength): string {
  let sanitized = text;
  // Remove control characters except newlines and tabs
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
  // Normalize unicode to prevent homograph attacks
  sanitized = sanitized.normalize("NFKC");
  // Enforce length limit
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  return sanitized;
}

/**
 * CODE SECURITY GUIDELINES
 * Rules to prevent vulnerabilities in the application
 */
export const UPLOAD_LIMITS = {
  maxFileSize: 3 * 1024 * 1024, // 3MB
  allowedMimeTypes: [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "text/plain",
  ],
  allowedExtensions: [".pdf", ".docx", ".doc", ".txt"],
} as const;

// ============================================================================
// SCORING CONSTANTS (from Forensic Engine v9.0)
// ============================================================================

/**
 * Weighted scoring breakdown for CV audit
 * Total weights must sum to 100
 */
export const AUDIT_WEIGHTS = {
  workExperience: 30,
  summary: 20,
  education: 15,
  skills: 15,
  contactInfo: 10,
  presentation: 10,
} as const;

/**
 * Scoring rubric for CV assessment
 */
export const SCORING_RUBRIC = {
  exceptional: { min: 90, max: 100, label: "Exceptional", description: "No improvements needed" },
  strong: { min: 80, max: 89, label: "Strong", description: "Minor refinements" },
  good: { min: 70, max: 79, label: "Good", description: "Some improvements needed" },
  fair: { min: 60, max: 69, label: "Fair", description: "Needs attention" },
  needsWork: { min: 0, max: 59, label: "Needs Work", description: "Significant improvements required" },
} as const;

/**
 * Assessment section definitions with scoring criteria
 */
export const ASSESSMENT_SECTIONS = [
  { name: "Contact Information", weight: AUDIT_WEIGHTS.contactInfo },
  { name: "Professional Summary", weight: AUDIT_WEIGHTS.summary },
  { name: "Work Experience", weight: AUDIT_WEIGHTS.workExperience },
  { name: "Education", weight: AUDIT_WEIGHTS.education },
  { name: "Skills", weight: AUDIT_WEIGHTS.skills },
  { name: "Overall Presentation", weight: AUDIT_WEIGHTS.presentation },
] as const;

/**
 * Developer role keywords for conditional GitHub display
 */
export const DEVELOPER_KEYWORDS = [
  "developer", "engineer", "programmer", "software", "frontend", "backend",
  "full stack", "fullstack", "devops", "sre", "coding", "web dev", "mobile dev",
  "ios", "android", "react", "node", "python", "java", "javascript", "typescript",
  "golang", "rust", "c++", "data engineer", "ml engineer", "machine learning", "ai engineer"
];

/**
 * Tone and style guidelines for AI responses
 */
export const RESPONSE_GUIDELINES = {
  tone: "professional, encouraging, and actionable",
  format: "concise with bullet points where appropriate",
  focus: "specific, data-driven recommendations",
  atsConsideration: "always factor in ATS compatibility",
};

// ============================================================================
// FORENSIC SCHEMA TYPES
// ============================================================================

/**
 * Highlight annotation for inline CV markup
 */
export interface ForensicHighlight {
  snippet: string;  // Exact text from CV to highlight
  type: "red" | "green" | "yellow";  // Critical / Strength / Warning
  comment: string;  // Explanation for the highlight
}

/**
 * Section-level audit result
 */
export interface ForensicSection {
  name: string;
  score: number;
  feedback: string;
}

/**
 * Complete forensic audit result
 */
export interface ForensicResult {
  parsed_cv: {
    basics: {
      name: string;
      label: string;
      email: string;
      phone: string;
      location: string;
      links: string[];
    };
    summary: string;
    experience: Array<{
      company: string;
      position: string;
      date: string;
      location: string;
      highlights: string[];
    }>;
    education: Array<{
      institution: string;
      area: string;
      studyType: string;
      date: string;
    }>;
    skills: string[];
  };
  forensic: {
    score: number;
    level: string;
    inflation: boolean;
    sections: ForensicSection[];
    verdict: string;
  };
  structure: {
    issues: string[];
    fixes: string[];
  };
  highlights: ForensicHighlight[];
}

// ============================================================================
// CV SUMMARY FORMATTER
// ============================================================================

/**
 * Format a ParsedCV into a text summary for AI context
 * @param cv - Parsed CV data
 * @param includeHeader - Whether to include section headers
 * @returns Formatted text summary
 */
export function formatCVSummary(cv: ParsedCV, includeHeader = true): string {
  const header = includeHeader ? "CANDIDATE'S CV:\n" : "";
  
  return `${header}Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Email: ${cv.email || "Not provided"}
Phone: ${cv.phone || "Not provided"}
Location: ${cv.location || "Not provided"}
LinkedIn: ${cv.linkedin || "Not provided"}
GitHub: ${cv.github || "Not provided"}
Website: ${cv.website || "Not provided"}

Summary:
${cv.summary || "Not provided"}

Experience (${cv.experience?.length || 0} positions):
${cv.experience?.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None listed"}

Education (${cv.education?.length || 0} entries):
${cv.education?.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None listed"}

Skills (${cv.skills?.length || 0}):
${cv.skills?.join(", ") || "None listed"}

Certifications (${cv.certifications?.length || 0}):
${cv.certifications?.map(cert => `- ${cert.name} by ${cert.issuer} (${cert.year})`).join("\n") || "None listed"}`;
}

/**
 * Format CV summary for JD matching (condensed version)
 */
export function formatCVForJDMatch(cv: ParsedCV): string {
  return `CANDIDATE'S CV:
Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Summary: ${cv.summary || "Not provided"}

Experience:
${cv.experience?.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None"}

Education:
${cv.education?.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None"}

Skills: ${cv.skills?.join(", ") || "None"}

Certifications:
${cv.certifications?.map(cert => `- ${cert.name} by ${cert.issuer}`).join("\n") || "None"}`;
}

// ============================================================================
// FORENSIC PROMPT BUILDER (Combined Parse + Audit)
// ============================================================================

/**
 * Build the unified forensic prompt that combines parsing and auditing
 * This is more efficient than separate API calls
 * @param rawText - Raw text extracted from CV document
 * @returns Complete forensic prompt
 */
export function buildForensicPrompt(rawText: string): string {
  const sanitized = sanitizeAIInput(rawText);
  
  // Check for injection attempts
  if (containsInjectionAttempt(sanitized)) {
    throw new Error("Security: Suspicious content detected in CV text");
  }
  
  return `You are the EduNatives Forensic CV Engine (v10.0).

I will provide a resume text. You must perform TWO distinct tasks in one output:
1. PARSE it into a clean JSON structure suitable for professional templates.
2. AUDIT it using the Strict Scoring Rubric provided below.

RESUME TEXT:
"""
${sanitized}
"""

--- TASK 1: SCORING RUBRIC & WEIGHTS ---
Calculate a 'weighted_score' based on the following breakdown:
- Work Experience (Weight: ${AUDIT_WEIGHTS.workExperience})
- Professional Summary (Weight: ${AUDIT_WEIGHTS.summary})
- Education (Weight: ${AUDIT_WEIGHTS.education})
- Skills (Weight: ${AUDIT_WEIGHTS.skills})
- Contact Information (Weight: ${AUDIT_WEIGHTS.contactInfo})
- Overall Presentation (Weight: ${AUDIT_WEIGHTS.presentation})

Score Interpretation:
- ${SCORING_RUBRIC.exceptional.min}-${SCORING_RUBRIC.exceptional.max}: ${SCORING_RUBRIC.exceptional.label} (${SCORING_RUBRIC.exceptional.description})
- ${SCORING_RUBRIC.strong.min}-${SCORING_RUBRIC.strong.max}: ${SCORING_RUBRIC.strong.label} (${SCORING_RUBRIC.strong.description})
- ${SCORING_RUBRIC.good.min}-${SCORING_RUBRIC.good.max}: ${SCORING_RUBRIC.good.label} (${SCORING_RUBRIC.good.description})
- ${SCORING_RUBRIC.fair.min}-${SCORING_RUBRIC.fair.max}: ${SCORING_RUBRIC.fair.label} (${SCORING_RUBRIC.fair.description})
- Below ${SCORING_RUBRIC.fair.min}: ${SCORING_RUBRIC.needsWork.label} (${SCORING_RUBRIC.needsWork.description})

--- TASK 2: OUTPUT SCHEMA ---
You must return ONLY a valid JSON object matching this structure exactly:
{
    "parsed_cv": {
        "basics": { 
            "name": "String", 
            "label": "String (Job Title)", 
            "email": "String", 
            "phone": "String", 
            "location": "String", 
            "links": ["String (URLs for LinkedIn, GitHub, Portfolio, etc.)"] 
        },
        "summary": "String (Professional summary or objective)",
        "experience": [
            { 
                "company": "String", 
                "position": "String", 
                "date": "String (e.g., Jan 2020 - Present)", 
                "location": "String", 
                "highlights": ["String (Key achievements with bullet points)"] 
            }
        ],
        "education": [
            { 
                "institution": "String", 
                "area": "String (Field of study)", 
                "studyType": "String (e.g., Bachelor's, Master's)", 
                "date": "String" 
            }
        ],
        "skills": ["String"]
    },
    "forensic": {
        "score": Number (0-100, strictly calculated based on weights above),
        "level": "String (Exceptional/Strong/Good/Fair/Needs Work)",
        "inflation": Boolean (true if claims appear exaggerated or unverifiable),
        "sections": [
            { "name": "Contact Information", "score": 0-100, "feedback": "String" },
            { "name": "Professional Summary", "score": 0-100, "feedback": "String" },
            { "name": "Work Experience", "score": 0-100, "feedback": "String" },
            { "name": "Education", "score": 0-100, "feedback": "String" },
            { "name": "Skills", "score": 0-100, "feedback": "String" },
            { "name": "Overall Presentation", "score": 0-100, "feedback": "String" }
        ],
        "verdict": "String (A concise 2-3 sentence summary of the findings)"
    },
    "structure": { 
        "issues": ["String (List of specific Red Flags or problems found)"], 
        "fixes": ["String (List of actionable Recommendations)"] 
    },
    "highlights": [
        { 
            "snippet": "EXACT TEXT snippet from the input CV to be highlighted in the UI", 
            "type": "red (critical issue) / green (strength) / yellow (warning)", 
            "comment": "Why this specific text was flagged" 
        }
    ]
}

IMPORTANT INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Extract ALL information from the CV text accurately
- Be specific and actionable in feedback
- Consider ATS (Applicant Tracking System) compatibility
- Flag any claims that seem inflated or unverifiable
- Include 3-5 highlights for UI annotation (mix of strengths and issues)`;
}

// ============================================================================
// STANDARD PROMPT BUILDERS (for backward compatibility)
// ============================================================================

/**
 * Build prompt for CV parsing/extraction (standalone version)
 * @param rawText - Raw text extracted from CV document
 * @returns Complete prompt for AI extraction
 */
export function buildCVParsingPrompt(rawText: string): string {
  const sanitized = sanitizeAIInput(rawText);
  
  if (containsInjectionAttempt(sanitized)) {
    throw new Error("Security: Suspicious content detected in CV text");
  }
  
  return `You are an expert CV/Resume parser. Extract structured information from the following CV text and return it as a valid JSON object.

IMPORTANT: Return ONLY a valid JSON object, no markdown formatting, no code blocks, no explanations.

Extract the following fields:
- name: Full name of the candidate
- title: Professional title or current job title
- email: Email address
- phone: Phone number (include country code if present)
- location: City, State/Country
- website: Personal website URL (not LinkedIn or GitHub)
- linkedin: LinkedIn profile URL or username
- github: GitHub profile URL or username
- summary: Professional summary or objective (combine multiple paragraphs if needed)
- experience: Array of work experiences, each with:
  - company: Company name
  - role: Job title/role
  - duration: Date range (e.g., "Jan 2020 - Present")
  - description: Key responsibilities and achievements. IMPORTANT: Preserve bullet points using "• " prefix and separate each bullet with a newline character. Example format: "• Led team of 5 engineers\\n• Increased revenue by 20%\\n• Implemented CI/CD pipeline"
- education: Array of education entries, each with:
  - institution: School/University name
  - degree: Degree type and field (e.g., "Bachelor of Science in Computer Science")
  - year: Graduation year or date range
- certifications: Array of certifications, each with:
  - name: Certification name
  - issuer: Issuing organization
  - year: Year obtained
- skills: Array of technical and soft skills as strings
- strengths: Array of key professional strengths (e.g., "Strategic Leadership", "Cross-functional Collaboration", "Results-Driven Execution"). Extract 3-5 high-level strengths that summarize the candidate's core value proposition.

If a field is not found in the CV, use an empty string for text fields or an empty array for array fields.

CV TEXT:
${sanitized}

Return ONLY the JSON object:`;
}

/**
 * Build prompt for CV assessment
 * @param cvSummary - Formatted CV summary text
 * @returns Complete prompt for AI assessment
 */
export function buildAssessmentPrompt(cvSummary: string): string {
  // Sanitize input for security
  const sanitized = sanitizeAIInput(cvSummary);
  
  // Check for injection attempts
  if (containsInjectionAttempt(sanitized)) {
    throw new Error("Security: Suspicious content detected in CV text");
  }
  
  return `You are the EduNatives Forensic CV Analyst (v10.0). Analyze the following CV using our strict weighted scoring system.

CV DATA:
"""
${sanitized}
"""

--- WEIGHTED SCORING SYSTEM ---
Calculate the overall score as a WEIGHTED AVERAGE based on these exact weights:
- Work Experience: ${AUDIT_WEIGHTS.workExperience}% weight
- Professional Summary: ${AUDIT_WEIGHTS.summary}% weight
- Education: ${AUDIT_WEIGHTS.education}% weight
- Skills: ${AUDIT_WEIGHTS.skills}% weight
- Contact Information: ${AUDIT_WEIGHTS.contactInfo}% weight
- Overall Presentation: ${AUDIT_WEIGHTS.presentation}% weight

Formula: overallScore = (section1Score * ${AUDIT_WEIGHTS.workExperience} + section2Score * ${AUDIT_WEIGHTS.summary} + ...) / 100

--- SCORING RUBRIC (apply strictly) ---
- ${SCORING_RUBRIC.exceptional.min}-${SCORING_RUBRIC.exceptional.max}: ${SCORING_RUBRIC.exceptional.label} (${SCORING_RUBRIC.exceptional.description})
- ${SCORING_RUBRIC.strong.min}-${SCORING_RUBRIC.strong.max}: ${SCORING_RUBRIC.strong.label} (${SCORING_RUBRIC.strong.description})
- ${SCORING_RUBRIC.good.min}-${SCORING_RUBRIC.good.max}: ${SCORING_RUBRIC.good.label} (${SCORING_RUBRIC.good.description})
- ${SCORING_RUBRIC.fair.min}-${SCORING_RUBRIC.fair.max}: ${SCORING_RUBRIC.fair.label} (${SCORING_RUBRIC.fair.description})
- Below ${SCORING_RUBRIC.fair.min}: ${SCORING_RUBRIC.needsWork.label} (${SCORING_RUBRIC.needsWork.description})

--- FORENSIC ANALYSIS CRITERIA ---
For each section, evaluate:
1. COMPLETENESS: Is all expected information present?
2. CLARITY: Is the content clear, concise, and well-organized?
3. IMPACT: Are achievements quantified? Are action verbs used?
4. ATS COMPATIBILITY: Will it pass Applicant Tracking Systems?
5. AUTHENTICITY: Do claims seem realistic and verifiable? Flag any inflation.

--- OUTPUT FORMAT ---
Return ONLY a valid JSON object with this exact structure:
{
  "overallScore": <number 0-100, calculated using weighted average>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<detailed forensic feedback on completeness, professional email, LinkedIn presence, etc.>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<forensic analysis of clarity, impact, quantified achievements, keyword optimization>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<forensic review of job progression, achievement quantification, action verbs, gaps analysis>"},
    {"name": "Education", "score": <0-100>, "feedback": "<analysis of relevance, completeness, certifications, honors>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<review of skill relevance, categorization, proficiency indicators>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<assessment of formatting, consistency, length, visual organization>"}
  ],
  "strengths": ["<specific strength with evidence from CV>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<specific weakness with recommendation>", "<weakness 2>", "<weakness 3>"],
  "recommendations": [
    "<specific actionable recommendation with example>",
    "<recommendation 2>",
    "<recommendation 3>",
    "<recommendation 4>",
    "<recommendation 5>"
  ]
}

CRITICAL INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Calculate overallScore using the weighted formula above - do NOT just average
- Be forensically specific - cite actual content from the CV in feedback
- Flag any claims that appear inflated or unverifiable
- Consider ATS keyword optimization in recommendations
- Each recommendation should be immediately actionable`;
}

/**
 * Build prompt for JD matching analysis
 * @param cvSummary - Formatted CV summary text
 * @param jobDescription - Job description text
 * @returns Complete prompt for AI JD matching
 */
export function buildJDMatchPrompt(cvSummary: string, jobDescription: string): string {
  const sanitizedJD = sanitizeAIInput(jobDescription, TOKEN_LIMITS.maxJobDescriptionLength);
  
  return `You are an expert recruiter and ATS (Applicant Tracking System) specialist. Compare the candidate's CV against the job description and provide a detailed match analysis.

${cvSummary}

JOB DESCRIPTION:
${sanitizedJD}

Analyze the match and provide your assessment as a valid JSON object with this exact structure:
{
  "matchScore": <number 0-100 representing overall match percentage>,
  "matchedSkills": ["<skill from CV that matches JD>", "<skill 2>", ...],
  "missingSkills": ["<required skill not in CV>", "<skill 2>", ...],
  "experienceMatch": {
    "score": <0-100>,
    "feedback": "<specific feedback about experience alignment>"
  },
  "educationMatch": {
    "score": <0-100>,
    "feedback": "<specific feedback about education requirements>"
  },
  "overallFeedback": "<2-3 sentence summary of how well the candidate matches>",
  "suggestions": [
    "<specific suggestion to improve match>",
    "<suggestion 2>",
    "<suggestion 3>"
  ],
  "keywordOptimizations": [
    "<keyword from JD to add to CV>",
    "<keyword 2>",
    "<keyword 3>"
  ]
}

MATCH SCORE INTERPRETATION:
- 85-100: Excellent match - Strong candidate
- 70-84: Good match - Meets most requirements
- 55-69: Partial match - Has transferable skills
- Below 55: Limited match - Significant skill gaps

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks
- Be specific about which skills match and which are missing
- Consider both hard skills and soft skills
- Factor in experience level requirements
- Provide actionable suggestions for improving the match
- List keywords that should be added to the CV for ATS optimization`;
}

/**
 * Build prompt for career advisor chat
 * @param cvContext - Formatted CV context
 * @param conversationHistory - Previous messages formatted as text
 * @param userMessage - Current user message
 * @returns Complete prompt for AI advisor
 */
export function buildAdvisorPrompt(
  cvContext: string,
  conversationHistory: string,
  userMessage: string
): string {
  const sanitizedMessage = sanitizeAIInput(userMessage, TOKEN_LIMITS.maxChatMessageLength);
  
  return `You are an expert career advisor and CV consultant helping a job seeker improve their resume. You have access to their CV information and should provide personalized, actionable advice.

${cvContext}

PREVIOUS CONVERSATION:
${conversationHistory}

GUIDELINES:
- Be friendly, encouraging, and professional
- Provide specific, actionable advice based on their actual CV content
- Reference specific sections of their CV when giving feedback
- Consider industry best practices and ATS optimization
- Keep responses concise but helpful (2-3 paragraphs max)
- If asked about something not in the CV, suggest they add it
- Focus on practical improvements they can make immediately

USER'S QUESTION: ${sanitizedMessage}

Provide a helpful response:`;
}

// ============================================================================
// RESPONSE UTILITIES
// ============================================================================

/**
 * Clean AI response by removing markdown code blocks
 * @param responseText - Raw response from AI
 * @returns Cleaned text suitable for JSON parsing
 */
export function cleanAIResponse(responseText: string): string {
  let cleaned = responseText.trim();
  
  // Remove various markdown code fence formats
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.slice(7);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.slice(3);
  }
  
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.slice(0, -3);
  }
  
  return cleaned.trim();
}

/**
 * Attempt to repair truncated or malformed JSON
 * @param jsonStr - Potentially malformed JSON string
 * @returns Repaired JSON string or original if repair fails
 */
export function repairJSON(jsonStr: string): string {
  let repaired = jsonStr.trim();
  
  // Count brackets to detect truncation
  const openBraces = (repaired.match(/{/g) || []).length;
  const closeBraces = (repaired.match(/}/g) || []).length;
  const openBrackets = (repaired.match(/\[/g) || []).length;
  const closeBrackets = (repaired.match(/]/g) || []).length;
  
  // Add missing closing brackets/braces
  const missingBrackets = openBrackets - closeBrackets;
  const missingBraces = openBraces - closeBraces;
  
  if (missingBrackets > 0 || missingBraces > 0) {
    // Remove trailing comma if present
    repaired = repaired.replace(/,\s*$/, "");
    // Add missing closures
    repaired += "]".repeat(Math.max(0, missingBrackets));
    repaired += "}".repeat(Math.max(0, missingBraces));
  }
  
  return repaired;
}

/**
 * Parse JSON response with repair fallback
 * @param responseText - Raw AI response
 * @returns Parsed JSON object
 */
export function parseAIResponse<T>(responseText: string): T {
  const cleaned = cleanAIResponse(responseText);
  
  try {
    return JSON.parse(cleaned) as T;
  } catch (firstError) {
    // Attempt repair
    const repaired = repairJSON(cleaned);
    try {
      return JSON.parse(repaired) as T;
    } catch (secondError) {
      throw new Error(`Failed to parse AI response: ${(firstError as Error).message}`);
    }
  }
}

/**
 * Format conversation history for advisor context
 * @param history - Array of chat messages
 * @param maxMessages - Maximum messages to include (default 10)
 * @returns Formatted conversation string
 */
export function formatConversationHistory(
  history: Array<{ role: "user" | "assistant"; content: string }>,
  maxMessages = 10
): string {
  if (!history || history.length === 0) return "";
  
  return history
    .slice(-maxMessages)
    .map(msg => `${msg.role === "user" ? "User" : "Advisor"}: ${msg.content}`)
    .join("\n\n");
}

/**
 * Check if a role/title indicates a developer profile
 * @param title - Job title or role
 * @param summary - Professional summary
 * @returns True if developer-related
 */
export function isDeveloperRole(title: string, summary: string): boolean {
  const titleLower = (title || "").toLowerCase();
  const summaryLower = (summary || "").toLowerCase();
  return DEVELOPER_KEYWORDS.some(kw => titleLower.includes(kw) || summaryLower.includes(kw));
}

/**
 * Get score level label from numeric score
 * @param score - Numeric score 0-100
 * @returns Score level label
 */
export function getScoreLevel(score: number): string {
  if (score >= SCORING_RUBRIC.exceptional.min) return SCORING_RUBRIC.exceptional.label;
  if (score >= SCORING_RUBRIC.strong.min) return SCORING_RUBRIC.strong.label;
  if (score >= SCORING_RUBRIC.good.min) return SCORING_RUBRIC.good.label;
  if (score >= SCORING_RUBRIC.fair.min) return SCORING_RUBRIC.fair.label;
  return SCORING_RUBRIC.needsWork.label;
}

// ============================================================================
// FORENSIC AUDITOR CLASS (with retry logic)
// ============================================================================

/**
 * ForensicAuditor class for robust API communication
 * Includes retry logic with exponential backoff
 */
export class ForensicAuditor {
  private modelEndpoint: string;
  
  constructor(endpoint?: string) {
    this.modelEndpoint = endpoint || 
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";
  }
  
  /**
   * Execute API request with retry logic
   * @param apiKey - Google Gemini API Key
   * @param prompt - Complete prompt to send
   * @returns Parsed JSON response
   */
  async executeWithRetry<T>(apiKey: string, prompt: string): Promise<T> {
    const url = `${this.modelEndpoint}?key=${apiKey}`;
    const { maxRetries, baseDelayMs } = TOKEN_LIMITS.retryConfig;
    
    let attempt = 0;
    let lastError: Error | null = null;
    
    while (attempt <= maxRetries) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { 
              responseMimeType: "application/json",
              maxOutputTokens: TOKEN_LIMITS.maxOutputTokens.forensic,
            },
          }),
        });
        
        if (!response.ok) {
          const errBody = await response.json().catch(() => ({}));
          const msg = errBody.error?.message || response.statusText;
          
          // Don't retry on 400 Bad Request (prompt issue)
          if (response.status === 400) {
            throw new Error(`API Error 400: ${msg}`);
          }
          
          throw new Error(`${response.status}: ${msg}`);
        }
        
        const data = await response.json();
        const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!rawJson) {
          throw new Error("Empty response from API");
        }
        
        return parseAIResponse<T>(rawJson);
        
      } catch (error) {
        attempt++;
        lastError = error as Error;
        
        console.warn(`Attempt ${attempt} failed:`, lastError.message);
        
        // Don't retry on 400 errors or if max retries exceeded
        if (lastError.message.includes("400") || attempt > maxRetries) {
          break;
        }
        
        // Exponential backoff
        const delay = Math.pow(2, attempt) * baseDelayMs;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    throw lastError || new Error("Max retries exceeded");
  }
  
  /**
   * Run forensic analysis on CV text
   * @param apiKey - Google Gemini API Key
   * @param cvText - Raw text extracted from CV
   * @returns Complete forensic result
   */
  async analyze(apiKey: string, cvText: string): Promise<ForensicResult> {
    const prompt = buildForensicPrompt(cvText);
    return this.executeWithRetry<ForensicResult>(apiKey, prompt);
  }
}
