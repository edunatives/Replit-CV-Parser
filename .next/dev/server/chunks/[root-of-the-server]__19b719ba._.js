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
    let normalized = dateStr.toLowerCase().trim();
    for (const month of MONTH_NAMES){
        const regex = new RegExp(`\\b${month}\\.?\\b`, "gi");
        normalized = normalized.replace(regex, MONTH_MAP[month] || month);
    }
    normalized = normalized.replace(/\s*[-–—to]+\s*/gi, " - ");
    normalized = normalized.replace(/\b(present|current|now|ongoing)\b/gi, "Present");
    normalized = normalized.replace(/since\s+(\d{4})/gi, "$1 - Present");
    const words = normalized.split(" ");
    const result = [];
    for (const word of words){
        if (word === "-" || /^\d{4}$/.test(word) || MONTH_MAP[word.toLowerCase()] || word === "Present") {
            result.push(word.charAt(0).toUpperCase() + word.slice(1));
        } else if (/^[A-Z][a-z]{2}$/.test(word)) {
            result.push(word);
        }
    }
    return result.join(" ").replace(/\s+/g, " ").trim() || dateStr.trim();
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
            year: edu.year?.trim() || ""
        })).filter((edu)=>edu.degree || edu.institution);
}
function normalizeCertifications(certs, fileId) {
    const seen = new Set();
    return certs.map((cert, index)=>({
            id: cert.id || generateStableId("cert", index, fileId),
            name: normalizeWhitespace(cert.name || ""),
            issuer: normalizeWhitespace(cert.issuer || ""),
            year: cert.year?.trim() || ""
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
"[project]/lib/parse/parseCv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCV",
    ()=>parseCV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parse/normalize.ts [app-route] (ecmascript)");
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
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_PATTERNS = [
    /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
    /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g
];
const LINKEDIN_REGEX = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i;
const GITHUB_REGEX = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i;
const DATE_RANGE_REGEX = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}\s*[-–—to]+\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}|(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}\s*[-–—to]+\s*(?:Present|Current|Now)|Since\s+\d{4}|\d{4}\s*[-–]\s*\d{4}|\d{4}\s*[-–]\s*(?:Present|Current)/gi;
function extractEmail(text) {
    const matches = text.match(EMAIL_REGEX);
    return matches ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(matches[0]) : "";
}
function extractPhone(text) {
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
function extractLinkedIn(text) {
    const match = text.match(LINKEDIN_REGEX);
    return match ? `linkedin.com/in/${match[1]}` : "";
}
function extractGithub(text) {
    const match = text.match(GITHUB_REGEX);
    return match && match[1] !== "in" && match[1] !== "www" ? `github.com/${match[1]}` : "";
}
function extractWebsite(text) {
    const websiteRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;
    const matches = text.match(websiteRegex);
    if (matches) {
        const filtered = matches.filter((m)=>!m.includes("linkedin.com") && !m.includes("github.com") && !m.includes("@") && !m.includes("gmail.com") && !m.includes("yahoo.com") && !m.includes("hotmail.com"));
        return filtered.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeUrl"])(filtered[0]) : "";
    }
    return "";
}
function extractLocation(text) {
    const patterns = [
        /(?:Location|Address|Based in|City):?\s*([A-Za-z\s,]+(?:,\s*[A-Za-z]+)?)/i,
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*(?:[A-Z]{2}|[A-Z][a-z]+))/
    ];
    for (const pattern of patterns){
        const match = text.match(pattern);
        if (match && match[1]) {
            const loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(match[1]);
            if (loc.length > 3 && loc.length < 50) {
                return loc;
            }
        }
    }
    return "";
}
function extractName(text) {
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
    const namePattern = /^([A-Z][a-z]+\s+(?:[A-Z][a-z]+\s*)+)/m;
    const match = text.match(namePattern);
    return match ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(match[1]) : "";
}
const TITLE_KEYWORDS = [
    "engineer",
    "developer",
    "architect",
    "consultant",
    "manager",
    "analyst",
    "designer",
    "specialist",
    "director",
    "lead",
    "administrator",
    "coordinator",
    "executive",
    "officer",
    "scientist",
    "technician",
    "expert",
    "strategist"
];
function extractTitle(text) {
    const lines = text.split("\n").map((l)=>l.trim()).filter((l)=>l.length > 0);
    const name = extractName(text).toLowerCase();
    for(let i = 0; i < Math.min(lines.length, 10); i++){
        const line = lines[i];
        const lineLower = line.toLowerCase();
        if (lineLower === name) continue;
        if (/@/.test(line) || /\d{3}/.test(line)) continue;
        if (TITLE_KEYWORDS.some((k)=>lineLower.includes(k))) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(line);
        }
    }
    return "";
}
function extractSummary(text) {
    const sectionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractSection"])(text, "summary");
    if (sectionText) {
        const cleaned = sectionText.split("\n").filter((l)=>l.trim().length > 0).slice(0, 6).join(" ");
        const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(cleaned);
        if (summary.length > 30 && summary.length < 1500) {
            return summary;
        }
    }
    return "";
}
function extractExperience(text, fileId) {
    const sectionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractSection"])(text, "experience");
    const textToProcess = sectionText || text;
    const experiences = [];
    const lines = textToProcess.split("\n").map((l)=>l.trim()).filter((l)=>l.length > 0);
    let currentRole = "";
    let currentCompany = "";
    let currentDuration = "";
    let currentDescription = [];
    const rolePatterns = [
        /^(Senior|Junior|Lead|Principal|Staff|Associate|Chief|Head|VP|Vice\s*President)\s+[A-Za-z\s]+/i,
        /^[A-Z][a-zA-Z\s&\/,]+(Engineer|Developer|Architect|Consultant|Manager|Analyst|Designer|Specialist|Director|Lead|Coordinator|Administrator|Executive|Intern|Officer|Scientist)/i
    ];
    const companyPatterns = [
        /^(?:at\s+)?([A-Z][A-Za-z\s&,\.]+(?:Inc|LLC|Ltd|Corp|Company|Co|Group|Technologies|Solutions|Services|Systems)?)$/i,
        /^([A-Z][A-Za-z\s&]+),?\s*(?:[A-Z][a-z]+,?\s*[A-Z]{0,2})?$/
    ];
    const saveExperience = ()=>{
        if (currentRole && (currentCompany || currentDescription.length > 0)) {
            experiences.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("exp", experiences.length, fileId),
                role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(currentRole),
                company: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(currentCompany),
                duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDateRange"])(currentDuration),
                description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(currentDescription.join(" ").substring(0, 500))
            });
        }
    };
    for (const line of lines){
        const dateMatch = line.match(DATE_RANGE_REGEX);
        let matchedRole = false;
        for (const pattern of rolePatterns){
            if (pattern.test(line)) {
                saveExperience();
                currentRole = line.replace(DATE_RANGE_REGEX, "").trim();
                currentDuration = dateMatch ? dateMatch[0] : "";
                currentCompany = "";
                currentDescription = [];
                matchedRole = true;
                break;
            }
        }
        if (!matchedRole && currentRole) {
            let matchedCompany = false;
            if (!currentCompany) {
                for (const pattern of companyPatterns){
                    const match = line.match(pattern);
                    if (match && match[1] && match[1].length > 2 && match[1].length < 60) {
                        const potential = match[1].trim();
                        const isSection = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTION_ALIASES"].experience.some((a)=>potential.toLowerCase().includes(a.toLowerCase()));
                        if (!isSection) {
                            currentCompany = potential;
                            if (dateMatch && !currentDuration) {
                                currentDuration = dateMatch[0];
                            }
                            matchedCompany = true;
                            break;
                        }
                    }
                }
            }
            if (!matchedCompany && line.length > 10) {
                if (/^[-]\s*/.test(line) || line.length > 30) {
                    currentDescription.push(line.replace(/^[-]\s*/, ""));
                }
            }
        }
    }
    saveExperience();
    return experiences.slice(0, 15);
}
function extractEducation(text, fileId) {
    const sectionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractSection"])(text, "education");
    const textToProcess = sectionText || text;
    const education = [];
    const degreePatterns = [
        /((?:Bachelor|Master|Doctor|Ph\.?D\.?|M\.?B\.?A\.?|B\.?S\.?|M\.?S\.?|B\.?A\.?|M\.?A\.?|B\.?E\.?|M\.?E\.?|B\.?Tech|M\.?Tech|Associate|Diploma)[^\n,]*)/gi
    ];
    const institutionPatterns = [
        /((?:University|College|Institute|School|Academy|Polytechnic)[^\n,]*)/gi
    ];
    const yearPattern = /\b(19|20)\d{2}\b/g;
    const degrees = [];
    const institutions = [];
    const years = [];
    for (const pattern of degreePatterns){
        const matches = textToProcess.match(pattern);
        if (matches) {
            degrees.push(...matches.map((m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(m)));
        }
    }
    for (const pattern of institutionPatterns){
        const matches = textToProcess.match(pattern);
        if (matches) {
            institutions.push(...matches.map((m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(m)));
        }
    }
    const yearMatches = textToProcess.match(yearPattern);
    if (yearMatches) {
        years.push(...yearMatches);
    }
    const maxEntries = Math.max(degrees.length, institutions.length, 1);
    for(let i = 0; i < Math.min(maxEntries, 5); i++){
        if (degrees[i] || institutions[i]) {
            education.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("edu", i, fileId),
                degree: degrees[i] || "",
                institution: institutions[i] || "",
                year: years[i] || ""
            });
        }
    }
    return education;
}
const COMMON_SKILLS = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "React",
    "Vue",
    "Angular",
    "Next.js",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "Spring",
    "Laravel",
    "AWS",
    "Azure",
    "GCP",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Git",
    "Linux",
    "Unix",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "Oracle",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "NLP",
    "Agile",
    "Scrum",
    "Kanban",
    "DevOps",
    "CI/CD",
    "Jenkins",
    "GitLab",
    "REST",
    "GraphQL",
    "API",
    "Microservices",
    "Serverless",
    "TOGAF",
    "ITIL",
    "COBIT",
    "CISA",
    "CISSP",
    "PMP",
    "PRINCE2",
    "SAP",
    "Salesforce",
    "ServiceNow",
    "Jira",
    "Confluence",
    "Power BI",
    "Tableau",
    "Excel",
    "HTML",
    "CSS",
    "SASS",
    "Tailwind",
    "Bootstrap",
    "Terraform",
    "Ansible"
];
function extractSkills(text) {
    const sectionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractSection"])(text, "skills");
    const skills = [];
    if (sectionText) {
        const lines = sectionText.split("\n").filter((l)=>l.trim().length > 0);
        for (const line of lines){
            const items = line.split(/[,;|]/).map((s)=>s.trim());
            for (const item of items){
                const cleaned = item.replace(/^[-]\s*/, "").trim();
                if (cleaned.length > 1 && cleaned.length < 40 && !/^\d+$/.test(cleaned)) {
                    skills.push(cleaned);
                }
            }
        }
    }
    for (const skill of COMMON_SKILLS){
        if (!skills.some((s)=>s.toLowerCase() === skill.toLowerCase())) {
            const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
            if (regex.test(text)) {
                skills.push(skill);
            }
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeSkills"])(skills);
}
const CERT_PATTERNS = [
    {
        pattern: /\b(TOGAF[\s\d.]*(?:Certified|Foundation|Practitioner)?)\b/gi,
        issuer: "The Open Group"
    },
    {
        pattern: /\b(IT4IT[\s\d.]*(?:Certified|Foundation)?)\b/gi,
        issuer: "The Open Group"
    },
    {
        pattern: /\b(ITIL[\s\d.v]*(?:Foundation|Practitioner|Expert|Master)?)\b/gi,
        issuer: "Axelos"
    },
    {
        pattern: /\b(PMP|Project Management Professional)\b/gi,
        issuer: "PMI"
    },
    {
        pattern: /\b(COBIT[\s\d.]*(?:Foundation)?)\b/gi,
        issuer: "ISACA"
    },
    {
        pattern: /\b(CISA|Certified Information Systems Auditor)\b/gi,
        issuer: "ISACA"
    },
    {
        pattern: /\b(AWS[\s\w-]*(?:Certified|Architect|Developer|SysOps)?)\b/gi,
        issuer: "Amazon"
    },
    {
        pattern: /\b(Azure[\s\w-]*(?:Certified|Administrator|Developer)?)\b/gi,
        issuer: "Microsoft"
    },
    {
        pattern: /\b(Google Cloud[\s\w-]*(?:Certified)?)\b/gi,
        issuer: "Google"
    },
    {
        pattern: /\b(Lean[\s\w]*Six Sigma[\s\w]*(?:Green|Black|Yellow)?[\s\w]*Belt)\b/gi,
        issuer: ""
    },
    {
        pattern: /\b(Six Sigma[\s\w]*(?:Green|Black|Yellow)?[\s\w]*Belt)\b/gi,
        issuer: ""
    },
    {
        pattern: /\b(CSM|Certified Scrum Master)\b/gi,
        issuer: "Scrum Alliance"
    },
    {
        pattern: /\b(PRINCE2[\s\w]*(?:Foundation|Practitioner)?)\b/gi,
        issuer: "Axelos"
    },
    {
        pattern: /\b(CISSP)\b/gi,
        issuer: "ISC2"
    }
];
function extractCertifications(text, fileId) {
    const sectionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractSection"])(text, "certifications");
    const certifications = [];
    const seen = new Set();
    if (sectionText) {
        const lines = sectionText.split("\n").filter((l)=>l.trim().length > 3);
        for (const line of lines){
            const cleaned = line.replace(/^[-]\s*/, "").trim();
            if (cleaned.length > 5 && cleaned.length < 150) {
                const yearMatch = cleaned.match(/\b(19|20)\d{2}\b/);
                const issuerMatch = cleaned.match(/[-–—]\s*([A-Za-z\s]+)(?:,|\(|$)/);
                let name = cleaned.replace(/\b(19|20)\d{2}\b/, "").trim();
                let issuer = "";
                if (issuerMatch) {
                    issuer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(issuerMatch[1]);
                    name = name.replace(issuerMatch[0], "").trim();
                }
                name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(name.replace(/[-–—,]\s*$/, ""));
                const key = name.toLowerCase();
                if (name.length > 3 && !seen.has(key)) {
                    seen.add(key);
                    certifications.push({
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("cert", certifications.length, fileId),
                        name,
                        issuer,
                        year: yearMatch ? yearMatch[0] : ""
                    });
                }
            }
        }
    }
    for (const { pattern, issuer } of CERT_PATTERNS){
        const matches = text.match(pattern);
        if (matches) {
            for (const match of matches){
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeWhitespace"])(match);
                const key = name.toLowerCase();
                if (!seen.has(key)) {
                    seen.add(key);
                    certifications.push({
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$normalize$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStableId"])("cert", certifications.length, fileId),
                        name,
                        issuer,
                        year: ""
                    });
                }
            }
        }
    }
    return certifications.slice(0, 20);
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
    const rawCv = {
        id: fileId,
        name: extractName(text),
        title: extractTitle(text),
        email: extractEmail(text),
        phone: extractPhone(text),
        location: extractLocation(text),
        website: extractWebsite(text),
        linkedin: extractLinkedIn(text),
        github: extractGithub(text),
        summary: extractSummary(text),
        experience: extractExperience(text, fileId),
        education: extractEducation(text, fileId),
        certifications: extractCertifications(text, fileId),
        skills: extractSkills(text),
        originalFilename: fileName,
        uploadedAt: new Date(),
        rawText: text
    };
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

//# sourceMappingURL=%5Broot-of-the-server%5D__19b719ba._.js.map