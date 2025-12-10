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
        summary: normalizeWhitespace(cv.summary || ""),
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
"[project]/lib/ai/rules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview AI Rules and Prompt Builders Module
 * @description Centralized module for all AI-related prompts, scoring rubrics,
 * and response formatting rules. This module provides:
 * - Prompt builders for CV parsing, assessment, JD matching, and advisor
 * - Shared constants for scoring criteria and field definitions
 * - CV summary formatters for consistent AI context
 * - Response cleaning utilities
 * - Security guidelines for token control, prompt safety, and code security
 */ __turbopack_context__.s([
    "ASSESSMENT_SECTIONS",
    ()=>ASSESSMENT_SECTIONS,
    "DANGEROUS_PATTERNS",
    ()=>DANGEROUS_PATTERNS,
    "DEVELOPER_KEYWORDS",
    ()=>DEVELOPER_KEYWORDS,
    "RESPONSE_GUIDELINES",
    ()=>RESPONSE_GUIDELINES,
    "TOKEN_LIMITS",
    ()=>TOKEN_LIMITS,
    "UPLOAD_LIMITS",
    ()=>UPLOAD_LIMITS,
    "buildAdvisorPrompt",
    ()=>buildAdvisorPrompt,
    "buildAssessmentPrompt",
    ()=>buildAssessmentPrompt,
    "buildCVParsingPrompt",
    ()=>buildCVParsingPrompt,
    "buildJDMatchPrompt",
    ()=>buildJDMatchPrompt,
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
    "isDeveloperRole",
    ()=>isDeveloperRole,
    "sanitizeAIInput",
    ()=>sanitizeAIInput
]);
const TOKEN_LIMITS = {
    maxCVTextLength: 50000,
    maxJobDescriptionLength: 10000,
    maxChatMessageLength: 2000,
    maxConversationHistory: 20,
    maxOutputTokens: {
        parsing: 2048,
        assessment: 1024,
        jdMatch: 1024,
        advisor: 512
    },
    rateLimit: {
        perMinute: 10,
        perHour: 100
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
    /exec\s*\(/i
];
function containsInjectionAttempt(text) {
    return DANGEROUS_PATTERNS.some((pattern)=>pattern.test(text));
}
function sanitizeAIInput(text) {
    let sanitized = text;
    sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
    sanitized = sanitized.normalize("NFKC");
    if (sanitized.length > TOKEN_LIMITS.maxCVTextLength) {
        sanitized = sanitized.substring(0, TOKEN_LIMITS.maxCVTextLength);
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
const ASSESSMENT_SECTIONS = [
    {
        name: "Contact Information",
        weight: 10
    },
    {
        name: "Professional Summary",
        weight: 20
    },
    {
        name: "Work Experience",
        weight: 30
    },
    {
        name: "Education",
        weight: 15
    },
    {
        name: "Skills",
        weight: 15
    },
    {
        name: "Overall Presentation",
        weight: 10
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
function buildCVParsingPrompt(rawText) {
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
function buildAssessmentPrompt(cvSummary) {
    const sectionList = ASSESSMENT_SECTIONS.map((s)=>s.name).join(", ");
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
function buildJDMatchPrompt(cvSummary, jobDescription) {
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
function buildAdvisorPrompt(cvContext, conversationHistory, userMessage) {
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
function cleanAIResponse(responseText) {
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
function formatConversationHistory(history, maxMessages = 10) {
    if (!history || history.length === 0) return "";
    return history.slice(-maxMessages).map((msg)=>`${msg.role === "user" ? "User" : "Advisor"}: ${msg.content}`).join("\n\n");
}
function isDeveloperRole(title, summary) {
    const titleLower = (title || "").toLowerCase();
    const summaryLower = (summary || "").toLowerCase();
    return DEVELOPER_KEYWORDS.some((kw)=>titleLower.includes(kw) || summaryLower.includes(kw));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/rules.ts [app-route] (ecmascript)");
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
 * Extract structured CV data using Gemini 2.5 Flash AI
 * Sends CV text to Gemini for intelligent parsing and returns structured JSON
 * 
 * @internal
 * @param {string} text - Raw text extracted from CV document
 * @returns {Promise<GeminiExtractionResult | null>} Parsed data with token usage, or null if AI unavailable
 */ async function extractWithGemini(text) {
    const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
    const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;
    if (!apiKey) {
        console.log("Gemini API key not available, falling back to regex extraction");
        return null;
    }
    try {
        const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
            apiKey,
            httpOptions: {
                apiVersion: "",
                baseUrl: baseUrl
            }
        });
        const prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCVParsingPrompt"])(text);
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
        const responseText = response.text?.trim() || "";
        // Extract token usage from response metadata
        const usageMetadata = response.usageMetadata;
        const tokenUsage = {
            promptTokens: usageMetadata?.promptTokenCount || 0,
            completionTokens: usageMetadata?.candidatesTokenCount || 0,
            totalTokens: usageMetadata?.totalTokenCount || 0
        };
        console.log(`Gemini token usage - Prompt: ${tokenUsage.promptTokens}, Completion: ${tokenUsage.completionTokens}, Total: ${tokenUsage.totalTokens}`);
        // Clean up response - remove markdown code blocks if present
        const jsonText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cleanAIResponse"])(responseText);
        const parsed = JSON.parse(jsonText);
        console.log("Gemini extraction successful");
        return {
            data: parsed,
            tokenUsage
        };
    } catch (error) {
        console.error("Gemini extraction error:", error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__bf929776._.js.map