module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/ai/rules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "ASSESSMENT_SECTIONS",
    ()=>ASSESSMENT_SECTIONS,
    "AUDIT_WEIGHTS",
    ()=>AUDIT_WEIGHTS,
    "DANGEROUS_PATTERNS",
    ()=>DANGEROUS_PATTERNS,
    "DEVELOPER_KEYWORDS",
    ()=>DEVELOPER_KEYWORDS,
    "ForensicAuditor",
    ()=>ForensicAuditor,
    "JD_HARD_GATES",
    ()=>JD_HARD_GATES,
    "JD_MATCH_WEIGHTS",
    ()=>JD_MATCH_WEIGHTS,
    "JD_SCORING_TIERS",
    ()=>JD_SCORING_TIERS,
    "RESPONSE_GUIDELINES",
    ()=>RESPONSE_GUIDELINES,
    "SCORING_RUBRIC",
    ()=>SCORING_RUBRIC,
    "TEI_LEVELS",
    ()=>TEI_LEVELS,
    "TOKEN_LIMITS",
    ()=>TOKEN_LIMITS,
    "UPLOAD_LIMITS",
    ()=>UPLOAD_LIMITS,
    "V211_WEIGHTS",
    ()=>V211_WEIGHTS,
    "buildAdvisorPrompt",
    ()=>buildAdvisorPrompt,
    "buildAssessmentPrompt",
    ()=>buildAssessmentPrompt,
    "buildCVParsingPrompt",
    ()=>buildCVParsingPrompt,
    "buildForensicPrompt",
    ()=>buildForensicPrompt,
    "buildJDMatchPrompt",
    ()=>buildJDMatchPrompt,
    "buildV211AssessmentPrompt",
    ()=>buildV211AssessmentPrompt,
    "cleanAIResponse",
    ()=>cleanAIResponse,
    "containsInjectionAttempt",
    ()=>containsInjectionAttempt,
    "formatCVForJDMatch",
    ()=>formatCVForJDMatch,
    "formatCVSummary",
    ()=>formatCVSummary,
    "formatConversationHistory",
    ()=>formatConversationHistory,
    "getScoreLevel",
    ()=>getScoreLevel,
    "isDeveloperRole",
    ()=>isDeveloperRole,
    "parseAIResponse",
    ()=>parseAIResponse,
    "repairJSON",
    ()=>repairJSON,
    "sanitizeAIInput",
    ()=>sanitizeAIInput,
    "validateCVDocument",
    ()=>validateCVDocument
]);
const TOKEN_LIMITS = {
    maxCVTextLength: 30000,
    maxJobDescriptionLength: 10000,
    maxChatMessageLength: 2000,
    maxConversationHistory: 20,
    maxOutputTokens: {
        forensic: 4096,
        parsing: 2048,
        assessment: 1024,
        jdMatch: 1024,
        advisor: 512
    },
    rateLimit: {
        perMinute: 10,
        perHour: 100
    },
    retryConfig: {
        maxRetries: 3,
        baseDelayMs: 1000
    }
};
const DANGEROUS_PATTERNS = [
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
    /override\s+prompt/i
];
function containsInjectionAttempt(text) {
    return DANGEROUS_PATTERNS.some((pattern)=>pattern.test(text));
}
function sanitizeAIInput(text, maxLength = TOKEN_LIMITS.maxCVTextLength) {
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
const UPLOAD_LIMITS = {
    maxFileSize: 3 * 1024 * 1024,
    allowedMimeTypes: [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        "text/plain"
    ],
    allowedExtensions: [
        ".pdf",
        ".docx",
        ".doc",
        ".txt"
    ]
};
const AUDIT_WEIGHTS = {
    workExperience: 30,
    summary: 20,
    education: 15,
    skills: 15,
    contactInfo: 10,
    presentation: 10
};
const SCORING_RUBRIC = {
    exceptional: {
        min: 90,
        max: 100,
        label: "Exceptional",
        description: "No improvements needed"
    },
    strong: {
        min: 80,
        max: 89,
        label: "Strong",
        description: "Minor refinements"
    },
    good: {
        min: 70,
        max: 79,
        label: "Good",
        description: "Some improvements needed"
    },
    fair: {
        min: 60,
        max: 69,
        label: "Fair",
        description: "Needs attention"
    },
    needsWork: {
        min: 0,
        max: 59,
        label: "Needs Work",
        description: "Significant improvements required"
    }
};
const ASSESSMENT_SECTIONS = [
    {
        name: "Contact Information",
        weight: AUDIT_WEIGHTS.contactInfo
    },
    {
        name: "Professional Summary",
        weight: AUDIT_WEIGHTS.summary
    },
    {
        name: "Work Experience",
        weight: AUDIT_WEIGHTS.workExperience
    },
    {
        name: "Education",
        weight: AUDIT_WEIGHTS.education
    },
    {
        name: "Skills",
        weight: AUDIT_WEIGHTS.skills
    },
    {
        name: "Overall Presentation",
        weight: AUDIT_WEIGHTS.presentation
    }
];
const DEVELOPER_KEYWORDS = [
    "developer",
    "engineer",
    "programmer",
    "software",
    "frontend",
    "backend",
    "full stack",
    "fullstack",
    "devops",
    "sre",
    "coding",
    "web dev",
    "mobile dev",
    "ios",
    "android",
    "react",
    "node",
    "python",
    "java",
    "javascript",
    "typescript",
    "golang",
    "rust",
    "c++",
    "data engineer",
    "ml engineer",
    "machine learning",
    "ai engineer"
];
const RESPONSE_GUIDELINES = {
    tone: "professional, encouraging, and actionable",
    format: "concise with bullet points where appropriate",
    focus: "specific, data-driven recommendations",
    atsConsideration: "always factor in ATS compatibility"
};
function formatCVSummary(cv, includeHeader = true) {
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
${cv.experience?.map((exp)=>`- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None listed"}

Education (${cv.education?.length || 0} entries):
${cv.education?.map((edu)=>`- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None listed"}

Skills (${cv.skills?.length || 0}):
${cv.skills?.join(", ") || "None listed"}

Certifications (${cv.certifications?.length || 0}):
${cv.certifications?.map((cert)=>`- ${cert.name} by ${cert.issuer} (${cert.year})`).join("\n") || "None listed"}`;
}
function formatCVForJDMatch(cv) {
    return `CANDIDATE'S CV:
Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Summary: ${cv.summary || "Not provided"}

Experience:
${cv.experience?.map((exp)=>`- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None"}

Education:
${cv.education?.map((edu)=>`- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None"}

Skills: ${cv.skills?.join(", ") || "None"}

Certifications:
${cv.certifications?.map((cert)=>`- ${cert.name} by ${cert.issuer}`).join("\n") || "None"}`;
}
function buildForensicPrompt(rawText) {
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
function buildCVParsingPrompt(rawText) {
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
- skills: Array of technical and soft skills as strings. CRITICAL: ONLY extract skills that are EXPLICITLY listed in a dedicated "Skills", "Technical Skills", "Core Competencies", or similar skills section of the CV. DO NOT infer or add skills from job descriptions, responsibilities, or project descriptions. DO NOT add skills that are not explicitly stated by the candidate. If no skills section exists, return an empty array. Only include what the candidate has directly listed as their skills.
- strengths: Array of key professional strengths (e.g., "Strategic Leadership", "Cross-functional Collaboration", "Results-Driven Execution"). Extract 3-5 high-level strengths ONLY from explicitly stated summary, objective, or strengths sections. DO NOT infer strengths from job descriptions.

If a field is not found in the CV, use an empty string for text fields or an empty array for array fields.

CV TEXT:
${sanitized}

Return ONLY the JSON object:`;
}
function buildAssessmentPrompt(cvSummary) {
    // Sanitize input for security
    const sanitized = sanitizeAIInput(cvSummary);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitized)) {
        throw new Error("Security: Suspicious content detected in CV text");
    }
    return `You are the EduNatives Forensic CV Engine (v9.3).

AUDIT this CV using the Strict Scoring Rubric below.

CV DATA:
"""
${sanitized}
"""

--- TASK 1: SCORING RUBRIC & WEIGHTS ---
Calculate a 'weighted_score' based on the following breakdown:
- Work Experience (Weight: ${AUDIT_WEIGHTS.workExperience}%)
- Professional Summary (Weight: ${AUDIT_WEIGHTS.summary}%)
- Education (Weight: ${AUDIT_WEIGHTS.education}%)
- Skills (Weight: ${AUDIT_WEIGHTS.skills}%)
- Contact Information (Weight: ${AUDIT_WEIGHTS.contactInfo}%)
- Overall Presentation (Weight: ${AUDIT_WEIGHTS.presentation}%)

Formula: overallScore = (workExpScore * ${AUDIT_WEIGHTS.workExperience} + summaryScore * ${AUDIT_WEIGHTS.summary} + eduScore * ${AUDIT_WEIGHTS.education} + skillsScore * ${AUDIT_WEIGHTS.skills} + contactScore * ${AUDIT_WEIGHTS.contactInfo} + presentationScore * ${AUDIT_WEIGHTS.presentation}) / 100

--- SCORING LEVELS ---
- 90-100: Exceptional
- 80-89: Strong
- 70-79: Good
- 60-69: Fair
- Below 60: Needs Work

--- FORENSIC ANALYSIS CRITERIA ---
For each section, evaluate:
1. COMPLETENESS: Is all expected information present?
2. CLARITY: Is the content clear, concise, and well-organized?
3. IMPACT: Are achievements quantified? Are action verbs used?
4. ATS COMPATIBILITY: Will it pass Applicant Tracking Systems?
5. AUTHENTICITY: Do claims seem realistic and verifiable? Flag any inflation.

--- TASK 2: OUTPUT SCHEMA ---
Return ONLY a valid JSON object matching this structure exactly:
{
    "overallScore": <number 0-100, weighted>,
    "level": "<Exceptional/Strong/Good/Fair/Needs Work>",
    "inflation": <boolean - true if claims appear exaggerated>,
    "verdict": "<A concise 2-3 sentence summary of the CV quality>",
    "sections": [
        { "name": "Contact Information", "score": 0-100, "feedback": "<Evaluate Completeness, Clarity, and Online Presence>" },
        { "name": "Professional Summary", "score": 0-100, "feedback": "<Evaluate Impact, Quantification, and ATS keywords>" },
        { "name": "Work Experience", "score": 0-100, "feedback": "<Evaluate Action Verbs, Metrics/Results, and Career Progression>" },
        { "name": "Education", "score": 0-100, "feedback": "<analysis of relevance, completeness>" },
        { "name": "Skills", "score": 0-100, "feedback": "<Evaluate Relevance and Hard/Soft balance>" },
        { "name": "Overall Presentation", "score": 0-100, "feedback": "<Evaluate Formatting, Length, and consistency>" }
    ],
    "strengths": ["<top strength with evidence from CV>", "<strength 2>", "<strength 3>", "<strength 4>", "<strength 5>"],
    "weaknesses": ["<specific weakness found>", "<weakness 2>", "<weakness 3>", "<weakness 4>", "<weakness 5>"],
    "recommendations": ["<actionable fix 1>", "<fix 2>", "<fix 3>", "<fix 4>", "<fix 5>"],
    "highlights": [
        { "snippet": "<EXACT TEXT snippet from the CV to highlight>", "type": "green", "comment": "<Why this is a strength>" },
        { "snippet": "<EXACT TEXT snippet from the CV>", "type": "red", "comment": "<Why this is a critical issue>" },
        { "snippet": "<EXACT TEXT snippet from the CV>", "type": "yellow", "comment": "<Why this is a warning>" }
    ]
}

CRITICAL INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Calculate overallScore using the weighted formula - do NOT just average
- Be forensically specific - cite actual content from the CV in feedback
- Set inflation=true if ANY claims appear exaggerated or unverifiable
- Include 3-5 highlights with EXACT text snippets from the CV
- Each recommendation should be immediately actionable
- Verdict should summarize overall quality in 2-3 sentences`;
}
const JD_MATCH_WEIGHTS = {
    mustHaveSkills: 25,
    domainExperience: 20,
    totalExperience: 10,
    depthScope: 15,
    natureFit: 15,
    shouldHaveSkills: 10,
    niceToHaveSkills: 5
};
const JD_HARD_GATES = {
    mustHaveSkillsBelow50: 50,
    domainYearsBelow50: 55,
    seniorityGapOver2: 45,
    educationNotMet: 40,
    industryNotMet: 50
};
const JD_SCORING_TIERS = {
    excellent: {
        min: 90,
        max: 100,
        grade: "A",
        label: "Excellent Match",
        meaning: "Direct fit. Could start tomorrow."
    },
    strong: {
        min: 80,
        max: 89,
        grade: "A-",
        label: "Strong Match",
        meaning: "Minor gaps easily bridged."
    },
    good: {
        min: 70,
        max: 79,
        grade: "B+",
        label: "Good Match",
        meaning: "Some gaps but competitive candidate."
    },
    moderate: {
        min: 60,
        max: 69,
        grade: "B",
        label: "Moderate Match",
        meaning: "Notable gaps. Worth applying with strategy."
    },
    stretch: {
        min: 50,
        max: 59,
        grade: "C+",
        label: "Stretch Match",
        meaning: "Significant gaps. Uphill battle."
    },
    weak: {
        min: 40,
        max: 49,
        grade: "C",
        label: "Weak Match",
        meaning: "Major gaps. Low probability without transformation."
    },
    poor: {
        min: 30,
        max: 39,
        grade: "D",
        label: "Poor Match",
        meaning: "Fundamental misalignment. Consider alternatives."
    },
    noMatch: {
        min: 0,
        max: 29,
        grade: "F",
        label: "No Match",
        meaning: "Wrong role. Do not apply."
    }
};
const TEI_LEVELS = {
    minimal: {
        level: 1,
        label: "Minimal",
        description: "CV reformatting, keyword optimization",
        timeline: "1-2 days"
    },
    light: {
        level: 2,
        label: "Light",
        description: "Repositioning language, adding context",
        timeline: "1 week"
    },
    moderate: {
        level: 3,
        label: "Moderate",
        description: "Significant reframing, skill evidence gathering",
        timeline: "2-4 weeks"
    },
    heavy: {
        level: 4,
        label: "Heavy",
        description: "Gap-filling required (courses, projects, certs)",
        timeline: "1-6 months"
    },
    majorPivot: {
        level: 5,
        label: "Major Pivot",
        description: "Fundamental reskilling or experience building",
        timeline: "6+ months"
    }
};
function buildJDMatchPrompt(cvSummary, jobDescription) {
    const sanitizedJD = sanitizeAIInput(jobDescription, TOKEN_LIMITS.maxJobDescriptionLength);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitizedJD)) {
        throw new Error("Security: Suspicious content detected in job description");
    }
    return `You are EduNatives JD Match Engine v2.2 - Honest Assessment Framework.

PHILOSOPHY: HONEST OVER ENCOURAGING
Raw scores reflect actual fit, not potential. Be truthful about gaps while remaining constructive.

--- INPUTS ---
CV:
"""
${cvSummary}
"""

JD:
"""
${sanitizedJD}
"""

--- THREE-SCORE SYSTEM ---

1. RAW COMPATIBILITY (0-100) - How well CV matches JD RIGHT NOW
   Weights: Must-Have Skills ${JD_MATCH_WEIGHTS.mustHaveSkills}%, Domain Exp ${JD_MATCH_WEIGHTS.domainExperience}%, Total Exp ${JD_MATCH_WEIGHTS.totalExperience}%, Depth/Scope ${JD_MATCH_WEIGHTS.depthScope}%, Nature Fit ${JD_MATCH_WEIGHTS.natureFit}%, Should-Have ${JD_MATCH_WEIGHTS.shouldHaveSkills}%, Nice-to-Have ${JD_MATCH_WEIGHTS.niceToHaveSkills}%

   HARD GATES (apply caps):
   - Missing >50% must-have skills → Cap at 50
   - Domain years <50% of required → Cap at 55
   - Seniority gap >2 levels → Cap at 45
   - Education hard requirement not met → Cap at 40

   TIERS: 90-100=Excellent(A), 80-89=Strong(A-), 70-79=Good(B+), 60-69=Moderate(B), 50-59=Stretch(C+), 40-49=Weak(C), 30-39=Poor(D), 0-29=No Match(F)

2. TRANSFORMATION EFFORT INDEX (TEI) 1-5
   1=Minimal (1-2 days): CV tweaks
   2=Light (1 week): Repositioning
   3=Moderate (2-4 weeks): Significant reframing
   4=Heavy (1-6 months): Gap-filling courses/certs
   5=Major Pivot (6+ months): Reskilling needed

3. RISK ASSESSMENT (0-100 each)
   Candidate Risk: rejection likelihood, opportunity cost, interview exposure
   Employer Risk: performance risk, ramp-up time, verification concerns

--- OUTPUT (JSON only) ---
{
  "jd_parsing": {
    "role_title": "<title>",
    "company": "<company or null>",
    "mandatory_skills": ["skill1", "skill2"],
    "nice_to_have_skills": ["skill1"],
    "years_required": <number or null>,
    "education_required": "<degree or null>",
    "seniority_level": "<Junior|Mid|Senior|Lead|Principal|Director|VP|C-Level>"
  },
  "raw_compatibility": {
    "score": <0-100>,
    "grade": "<A|A-|B+|B|C+|C|D|F>",
    "label": "<Excellent|Strong|Good|Moderate|Stretch|Weak|Poor|No Match>",
    "hard_gate_applied": "<gate name or null>",
    "uncapped_score": <0-100>,
    "component_scores": {
      "must_have_skills": {"score": <0-100>, "matched": ["skill"], "missing": ["skill"]},
      "domain_experience": {"score": <0-100>, "cv_years": <num>, "required_years": <num>},
      "total_experience": {"score": <0-100>, "cv_years": <num>, "required_years": <num>},
      "depth_scope": {"score": <0-100>, "cv_level": "<level>", "required_level": "<level>"},
      "nature_fit": {"score": <0-100>, "alignment": "<description>"},
      "should_have_skills": {"score": <0-100>, "matched": ["skill"], "missing": ["skill"]},
      "nice_to_have_skills": {"score": <0-100>, "matched": ["skill"]}
    }
  },
  "transformation_effort": {
    "tei_score": <1-5>,
    "tei_label": "<Minimal|Light|Moderate|Heavy|Major Pivot>",
    "timeline": "<estimated time>",
    "gap_breakdown": [
      {"area": "<gap area>", "points": <contribution>, "fixable_by_cv": <true|false>}
    ],
    "honest_assessment": "<1-2 sentences on what it would actually take>"
  },
  "risk_assessment": {
    "candidate_risk": {
      "score": <0-100>,
      "level": "<Low|Moderate|High|Critical>",
      "factors": [
        {"factor": "<rejection likelihood|opportunity cost|interview exposure>", "score": <0-100>, "detail": "<explanation>"}
      ]
    },
    "employer_risk": {
      "score": <0-100>,
      "level": "<Low|Moderate|High|Critical>",
      "factors": [
        {"factor": "<performance|ramp-up|verification>", "score": <0-100>, "detail": "<explanation>"}
      ]
    }
  },
  "honest_verdict": {
    "headline": "<one honest sentence about the match>",
    "reality_check": "<2-3 sentences of honest truth about this application>",
    "should_apply": "<Yes - strong fit|Yes - with strategy|Maybe - stretch role|Probably not|No - wrong role>",
    "success_probability": "<percentage estimate>",
    "better_fit_roles": [
      {"role": "<alternative role 1>", "fit_score": <70-95>, "reason": "<why this fits better>"},
      {"role": "<alternative role 2>", "fit_score": <70-95>, "reason": "<why this fits better>"},
      {"role": "<alternative role 3>", "fit_score": <70-95>, "reason": "<why this fits better>"}
    ]
  },
  "strengths_reality_check": [
    {"strength": "<candidate strength>", "reality": "<honest assessment>", "helps": "<how it helps>", "doesnt_help": "<why it doesn't fully translate>"}
  ],
  "critical_gaps": [
    {"area": "<gap area>", "severity": "<critical|high|moderate>", "you_have": "<what CV shows>", "jd_requires": "<what JD needs>", "match_percent": <0-100>, "fixable_by_cv": <true|false>, "what_would_help": "<real solution>"}
  ],
  "real_options": {
    "apply_if": ["<condition when applying makes sense>"],
    "dont_apply_if": ["<condition when they should not apply>"],
    "bottom_line": {
      "your_profile": "<honest description of who they are>",
      "target_role": "<what role they're applying for>",
      "reality": "<honest assessment of the gap>",
      "option_a": {"title": "<high-probability option>", "action": "<what to do>"},
      "option_b": {"title": "<long-term pivot option>", "action": "<what to do>"}
    }
  },
  "student_guidance": {
    "if_dream_role": "<advice if this is their dream pivot>",
    "if_practical": "<advice if they want high-probability success>",
    "quick_wins": ["<immediate action 1>", "<action 2>", "<action 3>"],
    "long_term_path": "<what would actually help in 6-12 months>"
  },
  "evidence_map": [
    {"jd_requirement": "<req>", "cv_evidence": "<evidence or 'Not found'>", "status": "<Match|Weak|Missing>", "gap_severity": "<none|minor|moderate|critical>"}
  ]
}

TONE GUIDELINES:
- Raw Score >70%: Encouraging with actionable improvements
- Raw Score 50-70%: Honest about stretch, provide transformation roadmap
- Raw Score 40-50%: Direct about low probability, suggest alternatives
- Raw Score <40%: Advise against applying, redirect to better fits
- TEI >=4: Be clear this isn't a "CV fix" - it's a career gap
- Risk >60%: Explicitly state risks before any encouragement

CRITICAL:
- Return ONLY valid JSON, no markdown
- Be HONEST first, constructive second
- Apply hard gates before final score
- Limit evidence_map to top 5 requirements
- better_fit_roles: suggest 3 roles that match their actual profile better`;
}
function buildAdvisorPrompt(cvContext, conversationHistory, userMessage) {
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
function cleanAIResponse(responseText) {
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
    cleaned = cleaned.trim();
    // Remove control characters except \n, \r, \t (which are valid in JSON strings)
    cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
    // Fix trailing commas before } or ] (common AI mistake)
    cleaned = cleaned.replace(/,\s*}/g, "}");
    cleaned = cleaned.replace(/,\s*]/g, "]");
    // Fix double commas
    cleaned = cleaned.replace(/,\s*,/g, ",");
    return cleaned;
}
function repairJSON(jsonStr) {
    let repaired = jsonStr.trim();
    // Fix unterminated strings by finding the last proper JSON structure
    // Count quotes to detect unterminated strings (handling escaped quotes properly)
    let inString = false;
    let lastValidPos = 0;
    let lastClosedStringPos = 0;
    let i = 0;
    while(i < repaired.length){
        const char = repaired[i];
        // Handle escaped characters inside strings
        if (inString && char === "\\") {
            i += 2; // Skip escaped character
            continue;
        }
        if (char === '"') {
            inString = !inString;
            if (!inString) {
                lastClosedStringPos = i + 1;
                lastValidPos = i + 1;
            }
        } else if (!inString && (char === "}" || char === "]" || char === "," || char === ":")) {
            lastValidPos = i + 1;
        }
        i++;
    }
    // If we're still in a string at the end, truncate to last valid closed string
    if (inString) {
        if (lastClosedStringPos > 0) {
            repaired = repaired.slice(0, lastClosedStringPos);
        } else if (lastValidPos > 0) {
            repaired = repaired.slice(0, lastValidPos);
        }
        // Remove any dangling incomplete property
        repaired = repaired.replace(/,?\s*"[^"]*$/, "");
        repaired = repaired.replace(/,?\s*"[^"]*":\s*$/, "");
    }
    // Remove trailing incomplete key-value pairs and dangling structures
    repaired = repaired.replace(/,?\s*"[^"]*":\s*$/, ""); // key with no value
    repaired = repaired.replace(/,?\s*"[^"]*":\s*"[^"]*$/, ""); // key with unterminated string value
    repaired = repaired.replace(/,?\s*"[^"]*$/, ""); // incomplete key
    repaired = repaired.replace(/:\s*$/, ": null"); // dangling colon
    repaired = repaired.replace(/,\s*$/, ""); // trailing comma
    // Fix unbalanced brackets - count properly outside strings
    let braceCount = 0;
    let bracketCount = 0;
    inString = false;
    i = 0;
    while(i < repaired.length){
        const char = repaired[i];
        if (inString && char === "\\") {
            i += 2;
            continue;
        }
        if (char === '"') {
            inString = !inString;
        } else if (!inString) {
            if (char === "{") braceCount++;
            else if (char === "}") braceCount--;
            else if (char === "[") bracketCount++;
            else if (char === "]") bracketCount--;
        }
        i++;
    }
    // Add missing closing brackets/braces in correct order
    if (bracketCount > 0 || braceCount > 0) {
        // Remove trailing comma before closing
        repaired = repaired.replace(/,\s*$/, "");
        // Add closures - brackets first (inner), then braces (outer)
        repaired += "]".repeat(Math.max(0, bracketCount));
        repaired += "}".repeat(Math.max(0, braceCount));
    }
    return repaired;
}
function parseAIResponse(responseText) {
    const cleaned = cleanAIResponse(responseText);
    try {
        return JSON.parse(cleaned);
    } catch (firstError) {
        // Attempt repair
        const repaired = repairJSON(cleaned);
        try {
            return JSON.parse(repaired);
        } catch (secondError) {
            // Try more aggressive cleaning - remove any text before first { or after last }
            const jsonStart = cleaned.indexOf("{");
            const jsonEnd = cleaned.lastIndexOf("}");
            if (jsonStart >= 0 && jsonEnd > jsonStart) {
                const extracted = cleaned.slice(jsonStart, jsonEnd + 1);
                const cleanedExtracted = cleanAIResponse(extracted);
                try {
                    return JSON.parse(cleanedExtracted);
                } catch  {
                    const repairedExtracted = repairJSON(cleanedExtracted);
                    try {
                        return JSON.parse(repairedExtracted);
                    } catch  {
                    // Fall through to final error
                    }
                }
            }
            throw new Error(`Failed to parse AI response: ${firstError.message}`);
        }
    }
}
function formatConversationHistory(history, maxMessages = 10) {
    if (!history || history.length === 0) return "";
    return history.slice(-maxMessages).map((msg)=>`${msg.role === "user" ? "User" : "Advisor"}: ${msg.content}`).join("\n\n");
}
function isDeveloperRole(title, summary) {
    const titleLower = (title || "").toLowerCase();
    const summaryLower = (summary || "").toLowerCase();
    return DEVELOPER_KEYWORDS.some((kw)=>titleLower.includes(kw) || summaryLower.includes(kw));
}
function getScoreLevel(score) {
    if (score >= SCORING_RUBRIC.exceptional.min) return SCORING_RUBRIC.exceptional.label;
    if (score >= SCORING_RUBRIC.strong.min) return SCORING_RUBRIC.strong.label;
    if (score >= SCORING_RUBRIC.good.min) return SCORING_RUBRIC.good.label;
    if (score >= SCORING_RUBRIC.fair.min) return SCORING_RUBRIC.fair.label;
    return SCORING_RUBRIC.needsWork.label;
}
class ForensicAuditor {
    modelEndpoint;
    constructor(endpoint){
        this.modelEndpoint = endpoint || "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";
    }
    /**
   * Execute API request with retry logic
   * @param apiKey - Google Gemini API Key
   * @param prompt - Complete prompt to send
   * @returns Parsed JSON response
   */ async executeWithRetry(apiKey, prompt) {
        const url = `${this.modelEndpoint}?key=${apiKey}`;
        const { maxRetries, baseDelayMs } = TOKEN_LIMITS.retryConfig;
        let attempt = 0;
        let lastError = null;
        while(attempt <= maxRetries){
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: prompt
                                    }
                                ]
                            }
                        ],
                        generationConfig: {
                            responseMimeType: "application/json",
                            maxOutputTokens: TOKEN_LIMITS.maxOutputTokens.forensic
                        }
                    })
                });
                if (!response.ok) {
                    const errBody = await response.json().catch(()=>({}));
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
                return parseAIResponse(rawJson);
            } catch (error) {
                attempt++;
                lastError = error;
                console.warn(`Attempt ${attempt} failed:`, lastError.message);
                // Don't retry on 400 errors or if max retries exceeded
                if (lastError.message.includes("400") || attempt > maxRetries) {
                    break;
                }
                // Exponential backoff
                const delay = Math.pow(2, attempt) * baseDelayMs;
                await new Promise((resolve)=>setTimeout(resolve, delay));
            }
        }
        throw lastError || new Error("Max retries exceeded");
    }
    /**
   * Run forensic analysis on CV text
   * @param apiKey - Google Gemini API Key
   * @param cvText - Raw text extracted from CV
   * @returns Complete forensic result
   */ async analyze(apiKey, cvText) {
        const prompt = buildForensicPrompt(cvText);
        return this.executeWithRetry(apiKey, prompt);
    }
}
const V211_WEIGHTS = {
    A_ats_structure: 15,
    B_content_realism: 20,
    C_skill_validation: 20,
    D_strengths_discovery: 10,
    E_tone_clarity: 10,
    F_timeline_plausibility: 15,
    G_nature_fit: 10
};
function buildV211AssessmentPrompt(cvSummary, cvFilename = "cv.pdf") {
    const sanitized = sanitizeAIInput(cvSummary);
    if (containsInjectionAttempt(sanitized)) {
        throw new Error("Security: Suspicious content detected in CV text");
    }
    return `You are the EduNatives Forensic CV Engine (v2.11).

Analyze this CV using seven scoring categories (A-G) and produce comprehensive assessment data for both student and HR audiences.

CV DATA:
"""
${sanitized}
"""

=== SCORING CATEGORIES (Weights) ===
A. ATS Structure (${V211_WEIGHTS.A_ats_structure}%): Contact info completeness, formatting, layout, length, typos
B. Content Realism (${V211_WEIGHTS.B_content_realism}%): Claims believability, evidence quality, quantification
C. Skill Validation (${V211_WEIGHTS.C_skill_validation}%): Skills backed by experience, ghost skills detection, proficiency levels 1-5
D. Strengths Discovery (${V211_WEIGHTS.D_strengths_discovery}%): Key achievements, unique value propositions
E. Tone & Clarity (${V211_WEIGHTS.E_tone_clarity}%): Readability, jargon levels, bullet length, repetition
F. Timeline Plausibility (${V211_WEIGHTS.F_timeline_plausibility}%): Career gaps, seniority alignment, progression logic
G. Nature Fit (${V211_WEIGHTS.G_nature_fit}%): Education-career alignment, domain depth, candidate profile

=== ISSUE SEVERITY LEVELS ===
- critical: Disqualifying issues (fake credentials, major red flags)
- high: Significant problems that hurt candidacy (multiple typos, ghost skills)
- medium: Notable issues worth fixing (missing LinkedIn, formatting issues)
- low: Minor polish items (wordiness, minor improvements)

=== OUTPUT SCHEMA ===
Return ONLY valid JSON matching this structure:

{
  "version": "2.11",
  "input": {
    "cv_filename": "${cvFilename}",
    "jd_provided": false,
    "jd_title": null
  },
  "analysis_metadata": {
    "cv_name": "String (extracted name)",
    "analysis_date": "${new Date().toISOString()}",
    "engine_version": "2.11",
    "professional_age_years": Number (years since first job),
    "inferred_seniority": "String (Entry/Mid/Senior/Lead/Principal/Executive)"
  },
  "cv_nature": {
    "education_nature": {
      "field": "String (IT/CS, Business, Engineering, Arts, Science, etc.)",
      "field_specific": "String (specific major/field)",
      "level": "String (High School/Associate/Bachelors/Masters/PhD)",
      "technical_degree": Boolean,
      "stem_degree": Boolean,
      "relevance_to_career": "String (Direct/Related/Tangential/Unrelated)"
    },
    "domain_nature": {
      "primary_domain": "String (Software Dev/Infrastructure/Data/Security/Product/Design/etc.)",
      "secondary_domains": ["String"],
      "specialization": "String",
      "domain_depth": "String (Generalist/Specialist/Expert)"
    },
    "industry_nature": {
      "current_industry": "String",
      "industry_history": ["String"],
      "industry_depth": "String (Single/Multi-Industry)"
    },
    "work_style_nature": {
      "employment_pattern": "String (Full-time/Contract/Freelance/Mixed)",
      "work_arrangement": "String (On-site/Remote/Hybrid)",
      "company_size_history": "String (Startup/SMB/Enterprise/Mixed)",
      "geographic_pattern": "String (Local/National/International)"
    },
    "career_path_nature": {
      "trajectory": "String (Linear Progression/Career Change/Lateral/Entrepreneurial)",
      "stability": "String (Stable/Moderate/Job Hopper)",
      "gaps_present": Boolean,
      "career_stage": "String (Entry/Early-Mid/Mid/Senior/Executive)",
      "is_career_changer": Boolean,
      "pivot_from": "String or null",
      "pivot_to": "String or null"
    },
    "candidate_profile": {
      "type": "String (Fresh Graduate/Rising Star/Industry Veteran/Career Changer/Specialist)",
      "learning_style": "String (Self-Taught/Certification-Based/Formal Education/Mixed)",
      "risk_profile": "String (Low Risk/Moderate Risk/High Risk)"
    }
  },
  "category_scores": {
    "A_ats_structure": {
      "score": Number (0-100),
      "grade": "String (A/A-/B+/B/B-/C+/C/D/F)",
      "issues": [{"code": "A1-A9", "type": "String", "detail": "String", "severity": "critical|high|medium|low", "location": "String"}]
    },
    "B_content_realism": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "B1-B9", "type": "String", "detail": "String", "severity": "String", "evidence": "String"}]
    },
    "C_skill_validation": {
      "score": Number,
      "grade": "String",
      "validation_rate": "String (e.g., 85%)",
      "skills": {
        "validated": [{"skill": "String", "level": 1-5, "raw_level": 1-5, "evidence": ["String"], "penalty": "String or null", "cap_applied": Boolean}],
        "implied": [{"skill": "String", "level": 1-5, "reason": "String"}],
        "ghost": ["String (skills listed but no evidence)"]
      },
      "issues": [{"code": "C1-C9", "type": "String", "skill": "String", "detail": "String", "severity": "String"}]
    },
    "D_strengths_discovery": {
      "score": Number,
      "strengths": [{"code": "D1-D9", "type": "String", "detail": "String", "evidence": "String"}]
    },
    "E_tone_clarity": {
      "score": Number,
      "grade": "String",
      "metrics": {"avg_bullet_length_words": Number, "technical_density": "String", "repeated_words": [{"word": "String", "count": Number}], "readability": "String"},
      "issues": [{"code": "E1-E9", "type": "String", "detail": "String", "severity": "String"}]
    },
    "F_timeline_plausibility": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "F1-F9", "type": "String", "detail": "String", "severity": "String"}]
    },
    "G_nature_fit": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "G1-G9", "type": "String", "detail": "String", "severity": "String"}]
    }
  },
  "ui_output": {
    "overallScore": Number (weighted average of all category scores),
    "level": "Exceptional|Strong|Good|Fair|Needs Work",
    "inflation": Boolean,
    "verdict": "String (2-3 sentence summary)",
    "sections": [{"name": "String", "code": "A-G", "score": Number, "status": "good|warning|critical", "summary": "String"}],
    "strengths": [{"code": "D1-D9", "icon": "check", "text": "String"}],
    "weaknesses": [{"code": "String", "icon": "x", "severity": "critical|high|medium|low", "text": "String"}],
    "recommendations": [{"priority": "high|medium|low", "icon": "lightbulb", "text": "String", "impact": "String (+X pts)"}],
    "highlights": [{"type": "achievement|skill|concern|gap|education", "color": "green|blue|yellow|red|purple", "text": "String", "source": "String", "note": "String or null"}],
    "quickStats": {
      "professionalYears": Number,
      "validatedSkills": Number,
      "ghostSkills": Number,
      "validationRate": Number (percentage),
      "quantificationRate": Number (percentage of bullets with metrics),
      "issueCount": {"critical": Number, "high": Number, "medium": Number, "low": Number}
    }
  },
  "reports": {
    "student_view": {
      "headline": "String (encouraging headline)",
      "overall_score": {"score": Number, "grade": "String", "message": "String"},
      "your_strengths": [{"title": "String", "detail": "String", "icon": "trophy|star|sparkle|rocket"}],
      "your_background": {"summary": "String", "unique_value": "String", "growth_areas": ["String"]},
      "quick_wins": [{"action": "String", "impact": "String", "time": "String (e.g., 15 minutes)", "priority": "do_first|do_soon|do_later"}],
      "improvement_roadmap": {
        "this_week": {"actions": ["String"], "projected_gain": Number},
        "this_month": {"actions": ["String"], "projected_gain": Number},
        "long_term": {"actions": ["String"], "projected_gain": Number}
      },
      "encouragement": "String (positive closing message)"
    }
  },
  "recommended_rewrites": [{"type": "remove|evidence|add|reword", "location": "String", "original": "String", "suggested": "String", "impact": "String", "related_codes": ["String"]}]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown code blocks
- Be thorough and specific in feedback
- Calculate weighted overall score: A(15%) + B(20%) + C(20%) + D(10%) + E(10%) + F(15%) + G(10%)
- Include 5-8 highlights mixing achievements, skills, concerns, and gaps
- Provide actionable, specific recommendations with point impacts`;
}
// ============================================================================
// CV DOCUMENT VALIDATION
// ============================================================================
/**
 * CV validation keywords - documents should contain several of these to be considered a CV
 */ const CV_KEYWORDS = [
    // Section headers
    'experience',
    'education',
    'skills',
    'summary',
    'objective',
    'profile',
    'work history',
    'employment',
    'qualifications',
    'certifications',
    'training',
    'professional background',
    'career',
    'achievements',
    'accomplishments',
    // Contact info patterns
    'email',
    'phone',
    'linkedin',
    'github',
    'portfolio',
    // Common CV terms
    'resume',
    'curriculum vitae',
    'cv',
    'responsibilities',
    'achievements',
    'managed',
    'developed',
    'led',
    'implemented',
    'created',
    'designed',
    'bachelor',
    'master',
    'degree',
    'university',
    'college',
    'graduated',
    'certified',
    'license',
    'award'
];
/**
 * Non-CV document patterns - these indicate the document is NOT a CV
 */ const NON_CV_PATTERNS = [
    /^dear\s+(sir|madam|hiring|manager)/i,
    /^\s*invoice\s*(#|number|no\.?)?/i,
    /^\s*receipt\s*(#|number|no\.?)?/i,
    /^\s*contract\s*/i,
    /^\s*agreement\s*/i,
    /^\s*terms\s+(and|&)\s+conditions/i,
    /^\s*privacy\s+policy/i,
    /^\s*chapter\s+\d/i,
    /^\s*table\s+of\s+contents/i,
    /once upon a time/i,
    /^\s*article\s+\d/i
];
function validateCVDocument(text) {
    const lowerText = text.toLowerCase();
    const textLength = text.length;
    // Too short to be a CV (less than 200 chars)
    if (textLength < 200) {
        return {
            isCV: false,
            confidence: 0.9,
            reason: "Document is too short to be a valid CV/resume. Please upload a complete document."
        };
    }
    // Check for non-CV patterns first
    for (const pattern of NON_CV_PATTERNS){
        if (pattern.test(text)) {
            return {
                isCV: false,
                confidence: 0.85,
                reason: "This document appears to be a cover letter, contract, or other non-CV document. Please upload your CV/resume instead."
            };
        }
    }
    // Count CV keywords
    let keywordCount = 0;
    const foundKeywords = [];
    for (const keyword of CV_KEYWORDS){
        if (lowerText.includes(keyword)) {
            keywordCount++;
            foundKeywords.push(keyword);
        }
    }
    // Check for email pattern (strong CV indicator)
    const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text);
    // Check for phone pattern
    const hasPhone = /[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]{6,}/.test(text);
    // Check for common section patterns
    const hasSectionHeaders = /\b(experience|education|skills|summary|work\s+history|employment)\s*[:|\n]/i.test(text);
    // Calculate confidence score
    const keywordScore = Math.min(keywordCount / 8, 1) * 0.4; // Max 40% from keywords
    const emailScore = hasEmail ? 0.2 : 0;
    const phoneScore = hasPhone ? 0.15 : 0;
    const sectionScore = hasSectionHeaders ? 0.25 : 0;
    const totalScore = keywordScore + emailScore + phoneScore + sectionScore;
    // Threshold: at least 0.4 confidence to be considered a CV
    if (totalScore >= 0.4) {
        return {
            isCV: true,
            confidence: Math.min(totalScore, 1),
            reason: "Valid CV/resume detected"
        };
    }
    // Low confidence - likely not a CV
    return {
        isCV: false,
        confidence: 1 - totalScore,
        reason: "This document doesn't appear to be a CV/resume. A CV should include sections like Experience, Education, Skills, and contact information. Please upload a valid CV/resume document."
    };
}
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/lib/langchain/assessor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview LangChain-style CV Assessment Module
 * @description Uses Google GenAI SDK with Zod for structured output parsing.
 * Provides reliable JSON parsing through Zod validation.
 * Uses Replit's Gemini integration with custom base URL.
 */ __turbopack_context__.s([
    "CVAssessmentSchema",
    ()=>CVAssessmentSchema,
    "CategoryScoreSchema",
    ()=>CategoryScoreSchema,
    "ForensicHighlightSchema",
    ()=>ForensicHighlightSchema,
    "ImprovementSchema",
    ()=>ImprovementSchema,
    "LangChainAssessor",
    ()=>LangChainAssessor,
    "SectionScoreSchema",
    ()=>SectionScoreSchema,
    "assessCVWithLangChain",
    ()=>assessCVWithLangChain,
    "getAssessor",
    ()=>getAssessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
;
const ForensicHighlightSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    snippet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The exact text snippet from the CV"),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "red",
        "green",
        "yellow"
    ]).describe("Highlight type: red=issue, green=strength, yellow=caution"),
    comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Brief explanation of the highlight")
});
const SectionScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Section name"),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Section score 0-100"),
    feedback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Specific feedback for this section")
});
const CategoryScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Category name"),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Category score 0-100"),
    weight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().describe("Weight multiplier"),
    weighted_contribution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().describe("Score * weight contribution"),
    feedback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Specific feedback"),
    issues: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("List of specific issues found")
});
const ImprovementSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "high",
        "medium",
        "low"
    ]).describe("Priority level"),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Which category this affects"),
    suggestion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The improvement suggestion"),
    impact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Expected impact if implemented")
});
const CVAssessmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    overallScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Overall CV quality score 0-100"),
    level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Exceptional",
        "Strong",
        "Good",
        "Fair",
        "Needs Work"
    ]).describe("Quality level"),
    inflation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().describe("True if claims appear inflated or exaggerated"),
    verdict: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("2-3 sentence summary of the CV quality"),
    categories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(CategoryScoreSchema).describe("Detailed category breakdown"),
    strengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1).max(5).describe("Top 3-5 CV strengths"),
    weaknesses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1).max(5).describe("Top 3-5 CV weaknesses"),
    recommendations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ImprovementSchema).min(1).max(5).describe("Priority-ranked improvements"),
    highlights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ForensicHighlightSchema).describe("Text snippets for inline highlighting"),
    studentAdvice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        headline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("One-line summary for the candidate"),
        quickWins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe("Easy fixes they can do today"),
        longTermPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("6-12 month improvement strategy")
    }).optional().describe("Student-friendly advice section")
});
// ============================================================================
// HELPER: Parse and Repair JSON
// ============================================================================
function repairAndParseJSON(text) {
    let cleanedText = text.trim();
    if (cleanedText.startsWith("```json")) {
        cleanedText = cleanedText.slice(7);
    } else if (cleanedText.startsWith("```")) {
        cleanedText = cleanedText.slice(3);
    }
    if (cleanedText.endsWith("```")) {
        cleanedText = cleanedText.slice(0, -3);
    }
    cleanedText = cleanedText.trim();
    try {
        return JSON.parse(cleanedText);
    } catch  {
        cleanedText = cleanedText.replace(/,(\s*[}\]])/g, '$1').replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
        return JSON.parse(cleanedText);
    }
}
class LangChainAssessor {
    ai;
    constructor(){
        const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
        const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
        if (!apiKey) {
            throw new Error("AI_INTEGRATIONS_GEMINI_API_KEY not configured");
        }
        this.ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
            apiKey,
            httpOptions: {
                apiVersion: "",
                baseUrl: baseUrl || undefined
            }
        });
    }
    /**
   * Assess a CV using structured output with Zod validation
   * @param cvSummary - Formatted CV text summary
   * @param filename - Original filename for context
   * @returns Structured CV assessment validated by Zod
   */ async assessCV(cvSummary, filename) {
        const prompt = this.buildAssessmentPrompt(cvSummary, filename);
        const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                maxOutputTokens: 16000,
                temperature: 0.3
            }
        });
        const responseText = response.text?.trim() || "";
        if (!responseText) {
            throw new Error("Empty response from AI");
        }
        const parsed = repairAndParseJSON(responseText);
        const validated = CVAssessmentSchema.parse(parsed);
        return validated;
    }
    /**
   * Build the assessment prompt requesting JSON output
   */ buildAssessmentPrompt(cvSummary, filename) {
        return `You are a Forensic CV Auditor v2.11. Analyze this CV with brutal honesty.
Return your analysis as a valid JSON object matching this exact structure.

DOCUMENT: ${filename}

CV CONTENT:
${cvSummary}

SCORING RUBRIC (must use these weights):
1. Contact & LinkedIn (10%): Complete info, professional email, LinkedIn URL
2. Summary/Objective (15%): Clear value proposition, no clichés
3. Work Experience (30%): Quantified achievements, STAR format, career progression
4. Education & Certifications (15%): Relevant degrees, certifications, courses
5. Skills & Technologies (15%): Industry-relevant, balanced hard/soft skills
6. Formatting & Structure (15%): Consistent style, ATS-friendly, scannable

RESPONSE FORMAT - Return this exact JSON structure:
{
  "overallScore": <number 0-100>,
  "level": "<Exceptional|Strong|Good|Fair|Needs Work>",
  "inflation": <true|false>,
  "verdict": "<2-3 sentence summary>",
  "categories": [
    {
      "category": "<category name>",
      "score": <number 0-100>,
      "weight": <decimal weight>,
      "weighted_contribution": <score * weight>,
      "feedback": "<specific feedback>",
      "issues": ["<issue 1>", "<issue 2>"]
    }
  ],
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "recommendations": [
    {
      "priority": "<high|medium|low>",
      "category": "<affected category>",
      "suggestion": "<what to do>",
      "impact": "<expected result>"
    }
  ],
  "highlights": [
    {
      "snippet": "<exact text from CV>",
      "type": "<red|green|yellow>",
      "comment": "<brief explanation>"
    }
  ],
  "studentAdvice": {
    "headline": "<one-line summary>",
    "quickWins": ["<easy fix 1>", "<easy fix 2>"],
    "longTermPath": "<6-12 month strategy>"
  }
}

IMPORTANT:
- Return ONLY the JSON object, no markdown code blocks
- Ensure all JSON is valid with proper quotes and commas
- Skills should only come from explicit Skills sections in the CV
- Be honest but constructive in feedback`;
    }
}
// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================
let assessorInstance = null;
function getAssessor() {
    if (!assessorInstance) {
        assessorInstance = new LangChainAssessor();
    }
    return assessorInstance;
}
async function assessCVWithLangChain(cvSummary, filename) {
    const assessor = getAssessor();
    return assessor.assessCV(cvSummary, filename);
}
}),
"[project]/app/api/assess/langchain/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview LangChain CV Assessment API
 * @description CV assessment using LangChain.js with structured output for reliable parsing.
 * 
 * @endpoint POST /api/assess/langchain
 * @accepts application/json with { cv: ParsedCV }
 * @returns {Object} { assessment: CVAssessment }
 */ __turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/rules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$assessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain/assessor.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { cv } = body;
        if (!cv) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "CV data is required"
            }, {
                status: 400
            });
        }
        const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
        if (!apiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "AI service not configured"
            }, {
                status: 500
            });
        }
        const cvSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCVSummary"])(cv);
        const filename = cv.originalFilename || "cv.pdf";
        console.log("LangChain assessment starting for:", filename);
        const assessment = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$assessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assessCVWithLangChain"])(cvSummary, filename);
        console.log("LangChain assessment complete, score:", assessment.overallScore);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            assessment,
            engine: "langchain",
            version: "2.11"
        });
    } catch (error) {
        console.error("LangChain CV Assessment error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Failed to assess CV with LangChain"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b49a98f9._.js.map