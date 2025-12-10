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

__turbopack_context__.s([
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
    // First, normalize "Present", "Current", etc. before lowercasing
    normalized = normalized.replace(/\b(present|current|now|ongoing)\b/gi, "PRESENT_MARKER");
    normalized = normalized.toLowerCase();
    // Normalize months
    for (const month of MONTH_NAMES){
        const regex = new RegExp(`\\b${month}\\.?\\b`, "gi");
        normalized = normalized.replace(regex, MONTH_MAP[month] || month);
    }
    // Normalize dashes and "to" (but not individual t/o chars)
    normalized = normalized.replace(/\s*[-–—]+\s*/g, " - ");
    normalized = normalized.replace(/\s+to\s+/gi, " - ");
    // Restore Present marker
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
    // Clean up double dashes
    let final = result.join(" ").replace(/\s+/g, " ").trim();
    final = final.replace(/\s*-\s*-\s*/g, " - ");
    final = final.replace(/\s*-\s*$/g, ""); // Remove trailing dash
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
        rawText: cv.rawText
    };
}
function normalizeExperience(experiences, fileId) {
    return experiences.map((exp, index)=>({
            id: exp.id || generateStableId("exp", index, fileId),
            role: normalizeWhitespace(exp.role || ""),
            company: normalizeWhitespace(exp.company || ""),
            duration: normalizeDateRange(exp.duration || ""),
            description: normalizeWhitespace(exp.description || "")
        })).filter((exp)=>exp.role || exp.company);
}
function normalizeEducation(education, fileId) {
    return education.map((edu, index)=>({
            id: edu.id || generateStableId("edu", index, fileId),
            degree: normalizeWhitespace(edu.degree || ""),
            institution: normalizeWhitespace(edu.institution || ""),
            year: String(edu.year || "").trim()
        })).filter((edu)=>edu.degree || edu.institution);
}
function normalizeCertifications(certs, fileId) {
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
"[project]/lib/parse/parseCv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCV",
    ()=>parseCV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parse/normalize.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-route] (ecmascript)");
;
;
async function parsePdfBuffer(buffer) {
    const pdfModule = await __turbopack_context__.A("[externals]/pdf-parse [external] (pdf-parse, esm_import, async loader)");
    let pdfParse;
    if (typeof pdfModule === "function") {
        pdfParse = pdfModule;
    } else if (typeof pdfModule.default === "function") {
        pdfParse = pdfModule.default;
    } else if (pdfModule.default && typeof pdfModule.default.default === "function") {
        pdfParse = pdfModule.default.default;
    }
    if (!pdfParse || typeof pdfParse !== "function") {
        const keys = Object.keys(pdfModule);
        console.error("pdf-parse module structure:", JSON.stringify(keys));
        throw new Error(`pdf-parse module not callable. Keys: ${keys.join(", ")}`);
    }
    return pdfParse(buffer, {
        max: 0
    });
}
async function parseDocxBuffer(buffer) {
    const mammothModule = await __turbopack_context__.A("[externals]/mammoth [external] (mammoth, cjs, async loader)");
    const mammoth = mammothModule.default ?? mammothModule;
    const result = await mammoth.extractRawText({
        buffer
    });
    return result.value;
}
async function extractWithGemini(text) {
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
        const prompt = `You are an expert CV/Resume parser. Extract structured information from the following CV text and return it as a valid JSON object.

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
  - description: Key responsibilities and achievements (combine bullet points)
- education: Array of education entries, each with:
  - institution: School/University name
  - degree: Degree type and field (e.g., "Bachelor of Science in Computer Science")
  - year: Graduation year or date range
- certifications: Array of certifications, each with:
  - name: Certification name
  - issuer: Issuing organization
  - year: Year obtained
- skills: Array of technical and soft skills as strings

If a field is not found in the CV, use an empty string for text fields or an empty array for array fields.

CV TEXT:
${text}

Return ONLY the JSON object:`;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
        const responseText = response.text?.trim() || "";
        // Clean up response - remove markdown code blocks if present
        let jsonText = responseText;
        if (jsonText.startsWith("```json")) {
            jsonText = jsonText.slice(7);
        } else if (jsonText.startsWith("```")) {
            jsonText = jsonText.slice(3);
        }
        if (jsonText.endsWith("```")) {
            jsonText = jsonText.slice(0, -3);
        }
        jsonText = jsonText.trim();
        const parsed = JSON.parse(jsonText);
        console.log("Gemini extraction successful");
        return parsed;
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
        text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeText"])(buffer.toString("utf-8"));
    }
    // Try Gemini AI extraction first
    const geminiData = await extractWithGemini(text);
    let rawCv;
    if (geminiData) {
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
            originalFilename: fileName,
            uploadedAt: new Date(),
            rawText: text
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

__turbopack_context__.s([
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

__turbopack_context__.s([
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
        if (file.size > 10 * 1024 * 1024) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "File too large. Maximum size is 10MB."
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

//# sourceMappingURL=%5Broot-of-the-server%5D__a35a4267._.js.map