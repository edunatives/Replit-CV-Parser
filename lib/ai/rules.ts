/**
 * @fileoverview AI Rules and Prompt Builders Module
 * @description Centralized module for all AI-related prompts, scoring rubrics,
 * and response formatting rules. This module provides:
 * - Prompt builders for CV parsing, assessment, JD matching, and advisor
 * - Shared constants for scoring criteria and field definitions
 * - CV summary formatters for consistent AI context
 * - Response cleaning utilities
 */

import type { ParsedCV } from "@/types/cv";

// ============================================================================
// SHARED CONSTANTS
// ============================================================================

/**
 * Assessment section definitions with scoring criteria
 */
export const ASSESSMENT_SECTIONS = [
  { name: "Contact Information", weight: 10 },
  { name: "Professional Summary", weight: 20 },
  { name: "Work Experience", weight: 30 },
  { name: "Education", weight: 15 },
  { name: "Skills", weight: 15 },
  { name: "Overall Presentation", weight: 10 },
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
// PROMPT BUILDERS
// ============================================================================

/**
 * Build prompt for CV parsing/extraction
 * @param rawText - Raw text extracted from CV document
 * @returns Complete prompt for AI extraction
 */
export function buildCVParsingPrompt(rawText: string): string {
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
${rawText}

Return ONLY the JSON object:`;
}

/**
 * Build prompt for CV assessment
 * @param cvSummary - Formatted CV summary text
 * @returns Complete prompt for AI assessment
 */
export function buildAssessmentPrompt(cvSummary: string): string {
  const sectionList = ASSESSMENT_SECTIONS.map(s => s.name).join(", ");
  
  return `You are an expert CV/Resume analyst and career advisor. Analyze the following CV and provide a comprehensive assessment.

CV DATA:
${cvSummary}

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
  "recommendations": ["<actionable recommendation 1>", "<actionable recommendation 2>", "<actionable recommendation 3>", "<actionable recommendation 4>", "<actionable recommendation 5>"]
}

SCORING RUBRIC:
- 90-100: Exceptional - Industry-leading, no improvements needed
- 80-89: Strong - Minor refinements could enhance
- 70-79: Good - Some improvements recommended
- 60-69: Fair - Needs attention in key areas
- Below 60: Needs Work - Significant improvements required

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks, no explanations
- Be specific and actionable in your feedback
- Consider ATS (Applicant Tracking System) compatibility
- Score based on completeness, clarity, impact, and professional presentation
- Recommendations should be specific and actionable`;
}

/**
 * Build prompt for JD matching analysis
 * @param cvSummary - Formatted CV summary text
 * @param jobDescription - Job description text
 * @returns Complete prompt for AI JD matching
 */
export function buildJDMatchPrompt(cvSummary: string, jobDescription: string): string {
  return `You are an expert recruiter and ATS (Applicant Tracking System) specialist. Compare the candidate's CV against the job description and provide a detailed match analysis.

${cvSummary}

JOB DESCRIPTION:
${jobDescription}

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

USER'S QUESTION: ${userMessage}

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
