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
    "JD_MATCH_WEIGHTS",
    ()=>JD_MATCH_WEIGHTS,
    "RESPONSE_GUIDELINES",
    ()=>RESPONSE_GUIDELINES,
    "SCORING_RUBRIC",
    ()=>SCORING_RUBRIC,
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
- skills: Array of technical and soft skills as strings
- strengths: Array of key professional strengths (e.g., "Strategic Leadership", "Cross-functional Collaboration", "Results-Driven Execution"). Extract 3-5 high-level strengths that summarize the candidate's core value proposition.

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
    hardSkills: 40,
    experience: 25,
    responsibilities: 20,
    softSkills: 10,
    education: 5
};
function buildJDMatchPrompt(cvSummary, jobDescription) {
    const sanitizedJD = sanitizeAIInput(jobDescription, TOKEN_LIMITS.maxJobDescriptionLength);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitizedJD)) {
        throw new Error("Security: Suspicious content detected in job description");
    }
    return `You are the EduNatives Recruitment Match Engine.

Act as an ATS (Applicant Tracking System) and Senior Recruiter to determine the fit.

--- INPUTS ---
CANDIDATE CV:
"""
${cvSummary}
"""

JOB DESCRIPTION:
"""
${sanitizedJD}
"""

--- SCORING RUBRIC (Strict) ---
Calculate 'overall_match_score' based on these ranges:
- 85-100: Excellent Match
- 70-84: Good Match
- 55-69: Partial Match
- Below 55: Limited Match

Weights: Hard Skills (${JD_MATCH_WEIGHTS.hardSkills}%), Experience (${JD_MATCH_WEIGHTS.experience}%), Responsibilities (${JD_MATCH_WEIGHTS.responsibilities}%), Soft Skills (${JD_MATCH_WEIGHTS.softSkills}%), Education (${JD_MATCH_WEIGHTS.education}%).

--- OUTPUT SCHEMA ---
Return ONLY a valid JSON object:
{
  "jd_parsing": {
    "role_title": "<extracted job title>",
    "company": "<company name if mentioned>",
    "mandatory_skills": ["<required skill 1>", "<skill 2>", ...],
    "nice_to_have_skills": ["<preferred skill 1>", "<skill 2>", ...]
  },
  "match_analysis": {
    "overall_match_score": <number 0-100>,
    "verdict": "<Excellent Match / Good Match / Partial Match / Limited Match>",
    "summary": "<2-3 sentences explaining the fit>",
    "matched_skills": ["<skill from CV that matches>", ...],
    "missing_skills": ["<required skill not in CV>", ...],
    "experience_match": {
        "score": <0-100>,
        "feedback": "<specific feedback about experience alignment>"
    },
    "education_match": {
        "score": <0-100>,
        "feedback": "<specific feedback about education requirements>"
    },
    "keyword_optimizations": [
        "<keyword from JD to add to CV for ATS>",
        "<keyword 2>",
        "<keyword 3>"
    ],
    "suggestions": [
        "<actionable advice 1>",
        "<advice 2>",
        "<advice 3>"
    ]
  },
  "evidence_map": [
    {
      "jd_requirement": "<e.g., '5+ years React'>",
      "cv_evidence": "<e.g., 'Senior Frontend Dev 2018-2023'>",
      "status": "Match"
    },
    {
      "jd_requirement": "<requirement from JD>",
      "cv_evidence": "<partial evidence or 'Not found'>",
      "status": "Weak"
    },
    {
      "jd_requirement": "<missing requirement>",
      "cv_evidence": "Not found in CV",
      "status": "Missing"
    }
  ]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks
- Parse the JD to extract mandatory vs nice-to-have skills
- Build evidence_map with at least 5 key requirement-to-evidence mappings
- Be specific about which skills match and which are missing
- Consider both hard skills and soft skills
- Provide actionable suggestions for improving the match`;
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
    return cleaned.trim();
}
function repairJSON(jsonStr) {
    let repaired = jsonStr.trim();
    // Fix unterminated strings by finding the last proper JSON structure
    // Count quotes to detect unterminated strings (outside of escaped quotes)
    let inString = false;
    let lastValidPos = 0;
    let i = 0;
    while(i < repaired.length){
        const char = repaired[i];
        const prevChar = i > 0 ? repaired[i - 1] : "";
        if (char === '"' && prevChar !== "\\") {
            inString = !inString;
            if (!inString) {
                lastValidPos = i + 1;
            }
        } else if (!inString && (char === "}" || char === "]" || char === ",")) {
            lastValidPos = i + 1;
        }
        i++;
    }
    // If we're still in a string at the end, truncate to last valid position and close
    if (inString && lastValidPos > 0) {
        repaired = repaired.slice(0, lastValidPos);
    } else if (inString) {
        // Try to close the string by adding a quote
        repaired = repaired.replace(/,?\s*"[^"]*$/, "");
    }
    // Remove trailing incomplete key-value pairs and dangling structures
    repaired = repaired.replace(/,?\s*"[^"]*":\s*$/, ""); // key with no value
    repaired = repaired.replace(/,?\s*"[^"]*":\s*"[^"]*$/, ""); // key with unterminated string value
    repaired = repaired.replace(/,?\s*"[^"]*$/, ""); // incomplete key
    repaired = repaired.replace(/:\s*$/, ": null"); // dangling colon
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
    },
    "hr_view": {
      "executive_summary": {
        "candidate_name": "String",
        "target_role": "String",
        "overall_assessment": "String",
        "recommendation": "Strong Recommend|Recommend|Consider|Do Not Recommend",
        "confidence": Number (0-1)
      },
      "scores": {"raw_score": Number, "risk_score": Number, "validation_rate": "String", "integrity_rating": "String", "nature_fit_score": Number},
      "risk_summary": {"critical_flags": ["String"], "high_flags": ["String"], "medium_flags": ["String"], "low_flags": ["String"], "nature_flags": ["String"]},
      "verification_suggestions": [{"area": "String", "question": "String", "why": "String"}],
      "hiring_notes": "String"
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

//# sourceMappingURL=%5Broot-of-the-server%5D__bf929776._.js.map