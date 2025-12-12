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
"[project]/lib/parse/normalize.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview CV Data Normalization Module
 * @description Provides deterministic normalization functions for CV data.
 * Ensures consistent formatting across all parsed CVs regardless of source format.
 * Handles text cleanup, date normalization, URL formatting, and data deduplication.
 */ __turbopack_context__.s([
    "SECTION_ALIASES",
    ()=>SECTION_ALIASES,
    "extractSection",
    ()=>extractSection,
    "findSectionBoundaries",
    ()=>findSectionBoundaries,
    "generateStableId",
    ()=>generateStableId,
    "normalizeDateRange",
    ()=>normalizeDateRange,
    "normalizeDescription",
    ()=>normalizeDescription,
    "normalizeEmail",
    ()=>normalizeEmail,
    "normalizePhone",
    ()=>normalizePhone,
    "normalizeSkills",
    ()=>normalizeSkills,
    "normalizeText",
    ()=>normalizeText,
    "normalizeUrl",
    ()=>normalizeUrl,
    "normalizeWhitespace",
    ()=>normalizeWhitespace,
    "validateAndNormalizeCV",
    ()=>validateAndNormalizeCV
]);
const BULLET_CHARS = /[•\-\*\u2022\u25CF\u25CB\u25AA\u25AB\u2023\u2043\u204C\u204D\u2219\u25E6]/g;
const MULTIPLE_SPACES = /[ \t]+/g;
const MULTIPLE_NEWLINES = /\n{3,}/g;
const DASHES = /[–—―‐‑‒]/g;
function normalizeText(text) {
    return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(BULLET_CHARS, "-").replace(DASHES, "-").replace(MULTIPLE_SPACES, " ").replace(MULTIPLE_NEWLINES, "\n\n").trim();
}
function normalizeWhitespace(str) {
    return str.replace(/\s+/g, " ").trim();
}
function normalizeDescription(str) {
    if (!str) return "";
    let normalized = str.trim();
    // Standardize different bullet characters to •
    normalized = normalized.replace(/[•\u2022\u25CF\u25CB\u25AA\u25AB\u2023\u2043\u204C\u204D\u2219\u25E6]/g, "•");
    normalized = normalized.replace(/^\s*[-*]\s+/gm, "• ");
    // Convert inline bullets to newlined bullets (• at start of line is fine, but • mid-text should get newline)
    normalized = normalized.replace(/\s+•\s*/g, "\n• ");
    // Clean up multiple consecutive newlines
    normalized = normalized.replace(/\n{3,}/g, "\n\n");
    // Clean up spaces within lines (but preserve newlines)
    normalized = normalized.split("\n").map((line)=>line.replace(/[ \t]+/g, " ").trim()).join("\n");
    // Remove empty lines at start/end
    normalized = normalized.replace(/^\n+|\n+$/g, "");
    return normalized;
}
function generateStableId(prefix, index, fileId) {
    return `${prefix}-${fileId}-${index}`;
}
const MONTH_NAMES = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "jan",
    "feb",
    "mar",
    "apr",
    "jun",
    "jul",
    "aug",
    "sep",
    "sept",
    "oct",
    "nov",
    "dec"
];
const MONTH_MAP = {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sep",
    october: "Oct",
    november: "Nov",
    december: "Dec",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    sept: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec"
};
function normalizeDateRange(dateStr) {
    if (!dateStr) return "";
    let normalized = dateStr.trim();
    normalized = normalized.replace(/\b(present|current|now|ongoing)\b/gi, "PRESENT_MARKER");
    normalized = normalized.toLowerCase();
    for (const month of MONTH_NAMES){
        const regex = new RegExp(`\\b${month}\\.?\\b`, "gi");
        normalized = normalized.replace(regex, MONTH_MAP[month] || month);
    }
    normalized = normalized.replace(/\s*[-–—]+\s*/g, " - ");
    normalized = normalized.replace(/\s+to\s+/gi, " - ");
    normalized = normalized.replace(/present_marker/gi, "Present");
    normalized = normalized.replace(/since\s+(\d{4})/gi, "$1 - Present");
    const words = normalized.split(/\s+/);
    const result = [];
    for (const word of words){
        const cleanWord = word.trim();
        if (!cleanWord) continue;
        if (cleanWord === "-") {
            result.push("-");
        } else if (/^\d{4}$/.test(cleanWord)) {
            result.push(cleanWord);
        } else if (cleanWord.toLowerCase() === "present") {
            result.push("Present");
        } else if (MONTH_MAP[cleanWord.toLowerCase()]) {
            result.push(MONTH_MAP[cleanWord.toLowerCase()]);
        } else if (/^[A-Z][a-z]{2}$/.test(cleanWord)) {
            result.push(cleanWord);
        }
    }
    let final = result.join(" ").replace(/\s+/g, " ").trim();
    final = final.replace(/\s*-\s*-\s*/g, " - ");
    final = final.replace(/\s*-\s*$/g, "");
    return final || dateStr.trim();
}
function normalizeEmail(email) {
    return email.toLowerCase().trim();
}
function normalizePhone(phone) {
    const cleaned = phone.replace(/[^\d+\-.\s()]/g, "").trim();
    return cleaned.replace(/\s+/g, " ");
}
function normalizeUrl(url) {
    let normalized = url.trim().toLowerCase();
    normalized = normalized.replace(/^https?:\/\//, "");
    normalized = normalized.replace(/^www\./, "");
    normalized = normalized.replace(/\/$/, "");
    return normalized;
}
function normalizeSkills(skills) {
    const seen = new Set();
    const result = [];
    for (const skill of skills){
        const normalized = normalizeWhitespace(skill);
        const key = normalized.toLowerCase();
        if (normalized.length >= 2 && normalized.length <= 50 && !seen.has(key)) {
            seen.add(key);
            result.push(normalized);
        }
    }
    return result.sort((a, b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
}
function validateAndNormalizeCV(cv) {
    return {
        id: cv.id || generateStableId("cv", 0, Date.now().toString()),
        name: normalizeWhitespace(cv.name || ""),
        title: normalizeWhitespace(cv.title || ""),
        email: normalizeEmail(cv.email || ""),
        phone: normalizePhone(cv.phone || ""),
        location: normalizeWhitespace(cv.location || ""),
        website: cv.website ? normalizeUrl(cv.website) : "",
        linkedin: cv.linkedin ? normalizeUrl(cv.linkedin) : "",
        github: cv.github ? normalizeUrl(cv.github) : "",
        summary: normalizeDescription(cv.summary || ""),
        experience: normalizeExperience(cv.experience || [], cv.id),
        education: normalizeEducation(cv.education || [], cv.id),
        certifications: normalizeCertifications(cv.certifications || [], cv.id),
        skills: normalizeSkills(cv.skills || []),
        originalFilename: cv.originalFilename,
        mimeType: cv.mimeType,
        size: cv.size,
        uploadedAt: cv.uploadedAt,
        rawText: cv.rawText,
        tokenUsage: cv.tokenUsage
    };
}
/**
 * Normalize experience entries with stable IDs
 * @internal
 */ function normalizeExperience(experiences, fileId) {
    return experiences.map((exp, index)=>({
            id: exp.id || generateStableId("exp", index, fileId),
            role: normalizeWhitespace(exp.role || ""),
            company: normalizeWhitespace(exp.company || ""),
            duration: normalizeDateRange(exp.duration || ""),
            description: normalizeDescription(exp.description || ""),
            location: exp.location ? normalizeWhitespace(exp.location) : undefined
        })).filter((exp)=>exp.role || exp.company);
}
/**
 * Normalize education entries with stable IDs
 * @internal
 */ function normalizeEducation(education, fileId) {
    return education.map((edu, index)=>({
            id: edu.id || generateStableId("edu", index, fileId),
            degree: normalizeWhitespace(edu.degree || ""),
            institution: normalizeWhitespace(edu.institution || ""),
            year: String(edu.year || "").trim()
        })).filter((edu)=>edu.degree || edu.institution);
}
/**
 * Normalize and deduplicate certification entries
 * @internal
 */ function normalizeCertifications(certs, fileId) {
    const seen = new Set();
    return certs.map((cert, index)=>({
            id: cert.id || generateStableId("cert", index, fileId),
            name: normalizeWhitespace(cert.name || ""),
            issuer: normalizeWhitespace(cert.issuer || ""),
            year: String(cert.year || "").trim()
        })).filter((cert)=>{
        if (!cert.name) return false;
        const key = cert.name.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}
const SECTION_ALIASES = {
    experience: [
        "experience",
        "work experience",
        "professional experience",
        "employment",
        "employment history",
        "work history",
        "career history",
        "professional background"
    ],
    education: [
        "education",
        "academic background",
        "educational background",
        "qualifications",
        "academic qualifications",
        "academic history"
    ],
    skills: [
        "skills",
        "technical skills",
        "core competencies",
        "competencies",
        "technologies",
        "expertise",
        "tools & technologies",
        "programming languages",
        "technical expertise"
    ],
    certifications: [
        "certifications",
        "certificates",
        "credentials",
        "licenses",
        "professional certifications",
        "professional credentials",
        "professional qualifications"
    ],
    summary: [
        "summary",
        "profile",
        "professional summary",
        "career summary",
        "about me",
        "about",
        "objective",
        "career objective",
        "overview"
    ]
};
function findSectionBoundaries(text) {
    const boundaries = new Map();
    const lines = text.split("\n");
    const sectionStarts = [];
    let position = 0;
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim().toLowerCase();
        const lineStart = position;
        for (const [section, aliases] of Object.entries(SECTION_ALIASES)){
            for (const alias of aliases){
                const aliasLower = alias.toLowerCase();
                if (line === aliasLower || line === aliasLower + ":" || line.startsWith(aliasLower + ":")) {
                    if (!sectionStarts.some((s)=>s.section === section)) {
                        sectionStarts.push({
                            section,
                            lineIndex: i,
                            position: lineStart
                        });
                    }
                    break;
                }
            }
        }
        position += lines[i].length + 1;
    }
    sectionStarts.sort((a, b)=>a.position - b.position);
    for(let i = 0; i < sectionStarts.length; i++){
        const current = sectionStarts[i];
        const next = sectionStarts[i + 1];
        const contentStart = text.indexOf("\n", current.position) + 1;
        const end = next ? next.position : text.length;
        boundaries.set(current.section, {
            start: contentStart,
            end
        });
    }
    return boundaries;
}
function extractSection(text, section) {
    const boundaries = findSectionBoundaries(text);
    const bounds = boundaries.get(section);
    if (!bounds) return "";
    return text.substring(bounds.start, bounds.end).trim();
}
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
"[project]/lib/langchain/cv-parser.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview LangChain-style CV Parser Module
 * @description Uses Google GenAI SDK with Zod for structured CV parsing output.
 * Provides reliable JSON parsing through Zod validation.
 * Uses user's Google API key or falls back to Replit's Gemini integration.
 */ __turbopack_context__.s([
    "CertificationSchema",
    ()=>CertificationSchema,
    "EducationSchema",
    ()=>EducationSchema,
    "ExperienceSchema",
    ()=>ExperienceSchema,
    "LangChainCVParser",
    ()=>LangChainCVParser,
    "ParsedCVSchema",
    ()=>ParsedCVSchema,
    "getParser",
    ()=>getParser,
    "parseCVWithLangChain",
    ()=>parseCVWithLangChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
;
const ExperienceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Company name"),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Job title/role"),
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Employment duration (e.g., 'Jan 2020 - Present')"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Job description and responsibilities"),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Work location")
});
const EducationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    institution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("School/university name"),
    degree: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Degree or qualification"),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Graduation year or date range")
});
const CertificationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Certification name"),
    issuer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Issuing organization"),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Year obtained")
});
const ParsedCVSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Full name of the candidate"),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Professional title or current role"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Email address"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Phone number"),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Location/address"),
    website: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Personal website URL"),
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("LinkedIn profile URL"),
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("GitHub profile URL"),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("").describe("Professional summary or objective"),
    experience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ExperienceSchema).default([]).describe("Work experience entries"),
    education: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(EducationSchema).default([]).describe("Education entries"),
    certifications: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(CertificationSchema).default([]).describe("Certifications"),
    skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]).describe("Technical and professional skills"),
    strengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]).describe("Key strengths or competencies")
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
class LangChainCVParser {
    ai;
    constructor(){
        const userApiKey = process.env.GOOGLE_API_KEY;
        const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
        const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
        if (userApiKey) {
            this.ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
                apiKey: userApiKey
            });
        } else if (replitApiKey) {
            this.ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
                apiKey: replitApiKey,
                httpOptions: {
                    apiVersion: "",
                    baseUrl: baseUrl || undefined
                }
            });
        } else {
            throw new Error("No Gemini API key configured (GOOGLE_API_KEY or AI_INTEGRATIONS_GEMINI_API_KEY)");
        }
    }
    /**
   * Parse raw CV text into structured data with Zod validation
   * @param rawText - Raw text extracted from CV document
   * @returns Structured CV data validated by Zod
   */ async parseCV(rawText) {
        const prompt = this.buildParsingPrompt(rawText);
        const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                maxOutputTokens: 8000,
                temperature: 0.1
            }
        });
        const responseText = response.text?.trim() || "";
        if (!responseText) {
            throw new Error("Empty response from AI");
        }
        const parsed = repairAndParseJSON(responseText);
        const validated = ParsedCVSchema.parse(parsed);
        const tokenUsage = {
            promptTokens: response.usageMetadata?.promptTokenCount || 0,
            completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
            totalTokens: response.usageMetadata?.totalTokenCount || 0
        };
        return {
            data: validated,
            tokenUsage
        };
    }
    /**
   * Build the CV parsing prompt requesting JSON output
   */ buildParsingPrompt(rawText) {
        return `You are a CV/Resume parser. Extract structured information from the following CV text.
Return your extraction as a valid JSON object matching this exact structure.

CV TEXT:
${rawText}

RESPONSE FORMAT - Return this exact JSON structure:
{
  "name": "<full name>",
  "title": "<professional title or current role>",
  "email": "<email address or empty string>",
  "phone": "<phone number or empty string>",
  "location": "<location/city or empty string>",
  "website": "<personal website URL or empty string>",
  "linkedin": "<LinkedIn URL or empty string>",
  "github": "<GitHub URL or empty string>",
  "summary": "<professional summary or objective>",
  "experience": [
    {
      "company": "<company name>",
      "role": "<job title>",
      "duration": "<date range, e.g., 'Jan 2020 - Present'>",
      "description": "<job description and achievements>",
      "location": "<work location or empty string>"
    }
  ],
  "education": [
    {
      "institution": "<school/university name>",
      "degree": "<degree or qualification>",
      "year": "<graduation year or date range>"
    }
  ],
  "certifications": [
    {
      "name": "<certification name>",
      "issuer": "<issuing organization>",
      "year": "<year obtained>"
    }
  ],
  "skills": ["<skill1>", "<skill2>", "..."],
  "strengths": ["<strength1>", "<strength2>", "..."]
}

EXTRACTION RULES:
1. Return ONLY the JSON object, no markdown code blocks
2. Use empty string "" for missing fields, not null
3. Extract skills ONLY from explicit Skills sections - do not infer or add skills
4. Preserve original text as much as possible
5. For experience, extract all work history entries found
6. For education, extract all educational qualifications
7. If no certifications found, return empty array []
8. If no strengths section exists, extract key competencies mentioned or return empty array

Parse the CV and return the structured JSON.`;
    }
}
// ============================================================================
// SINGLETON & CONVENIENCE FUNCTIONS
// ============================================================================
let parserInstance = null;
function getParser() {
    if (!parserInstance) {
        parserInstance = new LangChainCVParser();
    }
    return parserInstance;
}
async function parseCVWithLangChain(rawText) {
    const parser = getParser();
    return parser.parseCV(rawText);
}
}),
"[project]/lib/parse/parseCv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview CV Parsing Engine
 * @description Core parsing module for extracting structured data from CV documents.
 * Supports PDF, DOCX, DOC, and TXT file formats.
 * Uses AI-powered extraction (Gemini 2.5 Flash) with regex-based fallback.
 * 
 * @exports parseCV - Main parsing function
 * 
 * @example
 * const buffer = fs.readFileSync('resume.pdf');
 * const { cv, rawText } = await parseCV(buffer, 'resume.pdf', 'file-123');
 */ __turbopack_context__.s([
    "parseCV",
    ()=>parseCV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parse/normalize.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/rules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$cv$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain/cv-parser.ts [app-route] (ecmascript)");
;
;
;
/**
 * Parse PDF file buffer using pdf-parse v2 API
 * @internal
 * @param {Buffer} buffer - PDF file buffer
 * @returns {Promise<PdfParseResult>} Extracted text and page count
 */ async function parsePdfBuffer(buffer) {
    const pdfModule = await __turbopack_context__.A("[externals]/pdf-parse [external] (pdf-parse, esm_import, async loader)");
    const PDFParse = pdfModule.PDFParse;
    if (!PDFParse) {
        throw new Error("PDFParse class not found in pdf-parse module");
    }
    const parser = new PDFParse({
        data: buffer,
        verbosity: 0
    });
    const result = await parser.getText();
    await parser.destroy();
    return {
        text: result.text || "",
        numpages: result.total || 1
    };
}
/**
 * Parse Word document (DOCX) buffer using mammoth
 * @internal
 * @param {Buffer} buffer - DOCX file buffer
 * @returns {Promise<string>} Extracted text content
 */ async function parseDocxBuffer(buffer) {
    const mammothModule = await __turbopack_context__.A("[externals]/mammoth [external] (mammoth, cjs, async loader)");
    const mammoth = mammothModule.default ?? mammothModule;
    const result = await mammoth.extractRawText({
        buffer
    });
    return result.value;
}
/**
 * Extract structured CV data using LangChain-style Zod-validated parsing
 * Uses the LangChain module for reliable structured output with validation
 * 
 * @internal
 * @param {string} text - Raw text extracted from CV document
 * @returns {Promise<GeminiExtractionResult | null>} Parsed data with token usage, or null if AI unavailable
 */ async function extractWithGemini(text) {
    const userApiKey = process.env.GOOGLE_API_KEY;
    const replitApiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    if (!userApiKey && !replitApiKey) {
        console.log("No Gemini API key available, falling back to regex extraction");
        return null;
    }
    try {
        console.log("Using LangChain-style Zod-validated CV parsing");
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2f$cv$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCVWithLangChain"])(text);
        console.log(`LangChain CV parsing - Token usage: Prompt: ${result.tokenUsage.promptTokens}, Completion: ${result.tokenUsage.completionTokens}, Total: ${result.tokenUsage.totalTokens}`);
        const data = {
            name: result.data.name,
            title: result.data.title,
            email: result.data.email,
            phone: result.data.phone,
            location: result.data.location,
            website: result.data.website,
            linkedin: result.data.linkedin,
            github: result.data.github,
            summary: result.data.summary,
            experience: result.data.experience.map((exp)=>({
                    company: exp.company,
                    role: exp.role,
                    duration: exp.duration,
                    description: exp.description
                })),
            education: result.data.education.map((edu)=>({
                    institution: edu.institution,
                    degree: edu.degree,
                    year: edu.year
                })),
            certifications: result.data.certifications.map((cert)=>({
                    name: cert.name,
                    issuer: cert.issuer,
                    year: cert.year
                })),
            skills: result.data.skills,
            strengths: result.data.strengths
        };
        console.log("LangChain CV extraction successful");
        return {
            data,
            tokenUsage: result.tokenUsage
        };
    } catch (error) {
        console.error("LangChain CV extraction error:", error);
        return null;
    }
}
// Fallback regex-based extraction (commented out AI, using basic regex)
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_PATTERNS = [
    /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
    /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g
];
const LINKEDIN_REGEX = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i;
const GITHUB_REGEX = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i;
function extractEmailFallback(text) {
    const matches = text.match(EMAIL_REGEX);
    return matches ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(matches[0]) : "";
}
function extractPhoneFallback(text) {
    for (const pattern of PHONE_PATTERNS){
        const matches = text.match(pattern);
        if (matches) {
            const phone = matches[0].trim();
            if (phone.length >= 8 && phone.length <= 20) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhone"])(phone);
            }
        }
    }
    return "";
}
function extractLinkedInFallback(text) {
    const match = text.match(LINKEDIN_REGEX);
    return match ? `linkedin.com/in/${match[1]}` : "";
}
function extractGithubFallback(text) {
    const match = text.match(GITHUB_REGEX);
    return match && match[1] !== "in" && match[1] !== "www" ? `github.com/${match[1]}` : "";
}
function extractNameFallback(text) {
    const lines = text.split("\n").map((l)=>l.trim()).filter((l)=>l.length > 0);
    const skipPatterns = [
        /^(resume|cv|curriculum|vitae|profile|contact|email|phone|address)/i,
        /[@\d]/,
        /\.(com|org|net|edu)/i
    ];
    for (const line of lines.slice(0, 8)){
        if (line.length < 3 || line.length > 60) continue;
        if (skipPatterns.some((p)=>p.test(line))) continue;
        const words = line.split(/\s+/).filter((w)=>w.length > 0);
        if (words.length >= 2 && words.length <= 5) {
            const allCapitalized = words.every((w)=>/^[A-Z]/.test(w));
            const noSymbols = words.every((w)=>/^[A-Za-z'-]+$/.test(w));
            if (allCapitalized && noSymbols) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(line);
            }
        }
    }
    return "";
}
async function parseCV(buffer, fileName, fileId) {
    let text = "";
    const extension = fileName.toLowerCase().split(".").pop();
    try {
        if (extension === "pdf") {
            console.log(`Parsing PDF: ${fileName}, size: ${buffer.length}`);
            const data = await parsePdfBuffer(buffer);
            text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeText"])(data.text);
            console.log(`PDF parsed: ${text.length} chars, ${data.numpages} pages`);
            if (text.length < 50) {
                throw new Error(`PDF text extraction returned insufficient content (${text.length} chars)`);
            }
        } else if (extension === "docx" || extension === "doc") {
            console.log(`Parsing Word: ${fileName}, size: ${buffer.length}`);
            text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeText"])(await parseDocxBuffer(buffer));
            console.log(`Word parsed: ${text.length} chars`);
        } else {
            console.log(`Parsing text: ${fileName}`);
            text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeText"])(buffer.toString("utf-8"));
        }
    } catch (error) {
        console.error(`Parse error for ${fileName}:`, error);
        if (extension === "pdf") {
            throw new Error(`Failed to extract text from PDF: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeText"])(buffer.toString("utf-8"));
    }
    // Validate that the document is actually a CV
    const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCVDocument"])(text);
    if (!validationResult.isCV) {
        throw new Error(validationResult.reason);
    }
    // Try Gemini AI extraction first
    const geminiResult = await extractWithGemini(text);
    let rawCv;
    let tokenUsage;
    if (geminiResult) {
        const geminiData = geminiResult.data;
        tokenUsage = geminiResult.tokenUsage;
        // Use Gemini-extracted data
        rawCv = {
            id: fileId,
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(geminiData.name || ""),
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(geminiData.title || ""),
            email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(geminiData.email || ""),
            phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhone"])(geminiData.phone || ""),
            location: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(geminiData.location || ""),
            website: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeUrl"])(geminiData.website || ""),
            linkedin: geminiData.linkedin ? geminiData.linkedin.includes("linkedin.com") ? geminiData.linkedin : `linkedin.com/in/${geminiData.linkedin}` : "",
            github: geminiData.github ? geminiData.github.includes("github.com") ? geminiData.github : `github.com/${geminiData.github}` : "",
            summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(geminiData.summary || ""),
            experience: (geminiData.experience || []).map((exp, i)=>({
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("exp", i, fileId),
                    company: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(exp.company || ""),
                    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(exp.role || ""),
                    duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDateRange"])(exp.duration || ""),
                    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(exp.description || "")
                })),
            education: (geminiData.education || []).map((edu, i)=>({
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("edu", i, fileId),
                    institution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(edu.institution || ""),
                    degree: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(edu.degree || ""),
                    year: edu.year || ""
                })),
            certifications: (geminiData.certifications || []).map((cert, i)=>({
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("cert", i, fileId),
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(cert.name || ""),
                    issuer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(cert.issuer || ""),
                    year: cert.year || ""
                })),
            skills: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeSkills"])(geminiData.skills || []),
            strengths: (geminiData.strengths || []).map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(s)),
            originalFilename: fileName,
            uploadedAt: new Date(),
            rawText: text,
            tokenUsage: tokenUsage
        };
    } else {
        // Fallback to basic regex extraction
        console.log("Using fallback regex extraction");
        rawCv = {
            id: fileId,
            name: extractNameFallback(text),
            title: "",
            email: extractEmailFallback(text),
            phone: extractPhoneFallback(text),
            location: "",
            website: "",
            linkedin: extractLinkedInFallback(text),
            github: extractGithubFallback(text),
            summary: "",
            experience: [],
            education: [],
            certifications: [],
            skills: [],
            strengths: [],
            originalFilename: fileName,
            uploadedAt: new Date(),
            rawText: text
        };
    }
    const cv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAndNormalizeCV"])(rawCv);
    return {
        cv,
        rawText: text
    };
}
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/lib/db/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview MongoDB Database Connection Module
 * @description Manages MongoDB connection with connection pooling and graceful fallback.
 * Uses singleton pattern for connection caching to avoid multiple connections.
 * Designed to fail gracefully - returns null if connection unavailable.
 * 
 * @requires MONGODB_URI - MongoDB connection string (environment variable)
 * @requires MONGODB_DB - Database name (defaults to 'cv_parser')
 */ __turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase,
    "getCollection",
    ()=>getCollection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "cv_parser";
let cachedClient = null;
let cachedDb = null;
let connectionFailed = false;
async function connectToDatabase() {
    if (connectionFailed || !MONGODB_URI) {
        return null;
    }
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    try {
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](MONGODB_URI, {
            serverSelectionTimeoutMS: 2000,
            connectTimeoutMS: 2000
        });
        await client.connect();
        const db = client.db(DB_NAME);
        cachedClient = client;
        cachedDb = db;
        return {
            client,
            db
        };
    } catch (error) {
        console.log("MongoDB connection failed, continuing without persistence");
        connectionFailed = true;
        return null;
    }
}
async function getCollection(collectionName) {
    const connection = await connectToDatabase();
    if (!connection) {
        return null;
    }
    return connection.db.collection(collectionName);
}
}),
"[project]/app/api/parse/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview Single CV File Parse API
 * @description Handles parsing of individual CV/resume files (PDF, DOCX, TXT).
 * Uses AI-powered extraction via Gemini 2.5 Flash for intelligent field parsing.
 * Saves parsed CVs to MongoDB for persistence.
 * 
 * @endpoint POST /api/parse
 * @accepts multipart/form-data with 'file' field
 * @returns {Object} { cv: ParsedCV, rawText: string }
 */ __turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$parseCv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parse/parseCv.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/mongodb.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");
        const fileId = formData.get("fileId") || `file-${Date.now()}`;
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No file uploaded"
            }, {
                status: 400
            });
        }
        const allowedTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "text/plain"
        ];
        if (!allowedTypes.includes(file.type)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid file type. Only PDF, DOCX, and TXT files are allowed."
            }, {
                status: 400
            });
        }
        if (file.size > 3 * 1024 * 1024) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "File too large. Maximum size is 3MB."
            }, {
                status: 400
            });
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const { cv, rawText } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$parseCv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCV"])(buffer, file.name, fileId);
        cv.mimeType = file.type;
        cv.size = file.size;
        const collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])("cvs");
        if (collection) {
            try {
                await collection.insertOne({
                    ...cv,
                    createdAt: new Date()
                });
            } catch (dbError) {
                console.log("Failed to save to MongoDB:", dbError);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            cv,
            rawText
        });
    } catch (error) {
        console.error("Error parsing CV:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to parse CV"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab39bbc9._.js.map