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
"[externals]/pdf-parse [external] (pdf-parse, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("pdf-parse", () => require("pdf-parse"));

module.exports = mod;
}),
"[externals]/mammoth [external] (mammoth, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mammoth", () => require("mammoth"));

module.exports = mod;
}),
"[project]/lib/parse/parseCv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCV",
    ()=>parseCV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfParse = __turbopack_context__.r("[externals]/pdf-parse [external] (pdf-parse, cjs)");
// eslint-disable-next-line @typescript-eslint/no-require-imports  
const mammoth = __turbopack_context__.r("[externals]/mammoth [external] (mammoth, cjs)");
function getOpenAIClient() {
    const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
    if (!apiKey || !baseURL) {
        return null;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
        apiKey,
        baseURL
    });
}
async function extractWithAI(text) {
    const openai = getOpenAIClient();
    if (!openai) {
        console.log("OpenAI credentials not available, using regex fallback");
        return null;
    }
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a CV/resume parser. Extract structured information from the CV text provided. Return a valid JSON object with these fields:
- name: Full name of the candidate
- title: Current or most recent job title
- email: Email address
- phone: Phone number
- location: City/State or location
- website: Personal website (not LinkedIn or GitHub)
- linkedin: LinkedIn profile URL or username
- github: GitHub profile URL or username
- summary: Brief professional summary (2-3 sentences max)
- experience: Array of up to 5 most recent jobs with {role, company, duration, description}
- education: Array of educational qualifications with {degree, institution, year}
- skills: Array of technical and professional skills (up to 15)

If a field cannot be found, use an empty string or empty array. Return ONLY valid JSON, no markdown.`
                },
                {
                    role: "user",
                    content: text.slice(0, 8000)
                }
            ],
            temperature: 0.1,
            max_tokens: 2000
        });
        const content = response.choices[0]?.message?.content;
        if (!content) return null;
        const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        return JSON.parse(cleaned);
    } catch (error) {
        console.error("AI extraction failed:", error);
        return null;
    }
}
function extractEmail(text) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = text.match(emailRegex);
    return matches ? matches[0] : "";
}
function extractPhone(text) {
    const phoneRegex = /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g;
    const matches = text.match(phoneRegex);
    return matches ? matches[0] : "";
}
function extractLinkedIn(text) {
    const linkedinRegex = /(?:linkedin\.com\/in\/|linkedin:?\s*)([a-zA-Z0-9_-]+)/i;
    const matches = text.match(linkedinRegex);
    return matches ? `linkedin.com/in/${matches[1]}` : "";
}
function extractGithub(text) {
    const githubRegex = /(?:github\.com\/|github:?\s*)([a-zA-Z0-9_-]+)/i;
    const matches = text.match(githubRegex);
    return matches ? `github.com/${matches[1]}` : "";
}
function extractWebsite(text) {
    const websiteRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;
    const matches = text.match(websiteRegex);
    if (matches) {
        const filtered = matches.filter((m)=>!m.includes("linkedin.com") && !m.includes("github.com") && !m.includes("@"));
        return filtered.length > 0 ? filtered[0] : "";
    }
    return "";
}
function extractLocation(text) {
    const locationPatterns = [
        /(?:Location|Address|Based in|City):?\s*([A-Za-z\s,]+(?:,\s*[A-Z]{2})?)/i,
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*[A-Z]{2})/
    ];
    for (const pattern of locationPatterns){
        const match = text.match(pattern);
        if (match && match[1]) {
            return match[1].trim();
        }
    }
    return "";
}
function extractName(text) {
    const lines = text.split("\n").filter((l)=>l.trim());
    for (const line of lines.slice(0, 5)){
        const trimmed = line.trim();
        if (trimmed.length > 2 && trimmed.length < 50) {
            if (!/[@\d]/.test(trimmed) && !/^(resume|cv|curriculum|vitae)/i.test(trimmed)) {
                const words = trimmed.split(/\s+/);
                if (words.length >= 2 && words.length <= 4) {
                    const allCapitalized = words.every((w)=>/^[A-Z]/.test(w));
                    if (allCapitalized) {
                        return trimmed;
                    }
                }
            }
        }
    }
    const namePattern = /^([A-Z][a-z]+\s+(?:[A-Z][a-z]+\s*)+)/m;
    const match = text.match(namePattern);
    return match ? match[1].trim() : "Unknown Name";
}
function extractTitle(text) {
    const titlePatterns = [
        /(?:title|position|role):?\s*([^\n]+)/i,
        /(?:senior|junior|lead|principal|staff)?\s*(?:software|web|full[- ]?stack|front[- ]?end|back[- ]?end|data|ml|devops|cloud|systems?)\s*(?:engineer|developer|scientist|architect|analyst)/i,
        /(?:product|project|program)\s*manager/i,
        /(?:ui|ux|ui\/ux|product)\s*designer/i
    ];
    for (const pattern of titlePatterns){
        const match = text.match(pattern);
        if (match) {
            return match[1]?.trim() || match[0].trim();
        }
    }
    return "";
}
function extractSummary(text) {
    const summaryPatterns = [
        /(?:summary|profile|about|objective):?\s*\n?([\s\S]*?)(?=\n\s*(?:experience|education|skills|employment|work|projects|certifications|$))/i
    ];
    for (const pattern of summaryPatterns){
        const match = text.match(pattern);
        if (match && match[1]) {
            const summary = match[1].trim().split("\n").slice(0, 3).join(" ").trim();
            if (summary.length > 20 && summary.length < 500) {
                return summary;
            }
        }
    }
    return "";
}
function extractExperience(text, fileId) {
    const experienceSection = text.match(/(?:experience|employment|work\s*history):?\s*\n([\s\S]*?)(?=\n\s*(?:education|skills|projects|certifications|languages|references|$))/i);
    if (!experienceSection) return [];
    const sectionText = experienceSection[1];
    const experiences = [];
    const jobPattern = /([A-Z][a-zA-Z\s,]+(?:Engineer|Developer|Manager|Designer|Analyst|Consultant|Specialist|Director|Lead|Coordinator|Administrator|Executive|Intern)[\w\s]*)\s*(?:at|@|[-–])\s*([A-Za-z\s&,\.]+?)(?:\s*[|,]\s*|\s+)?(?:(\d{4}\s*[-–]\s*(?:\d{4}|present|current)|\w+\s+\d{4}\s*[-–]\s*(?:\w+\s+\d{4}|present|current)))?/gi;
    let match;
    let count = 0;
    while((match = jobPattern.exec(sectionText)) !== null && count < 5){
        experiences.push({
            id: `exp-${fileId}-${count}`,
            role: match[1]?.trim() || "Role",
            company: match[2]?.trim() || "Company",
            duration: match[3]?.trim() || "",
            description: ""
        });
        count++;
    }
    if (experiences.length === 0) {
        const lines = sectionText.split("\n").filter((l)=>l.trim().length > 0);
        for(let i = 0; i < Math.min(lines.length, 2); i++){
            experiences.push({
                id: `exp-${fileId}-${i}`,
                role: lines[i]?.trim().slice(0, 50) || "Position",
                company: lines[i + 1]?.trim().slice(0, 50) || "",
                duration: "",
                description: ""
            });
        }
    }
    return experiences;
}
function extractEducation(text, fileId) {
    const educationSection = text.match(/(?:education|academic|qualifications):?\s*\n([\s\S]*?)(?=\n\s*(?:experience|skills|projects|certifications|work|employment|$))/i);
    if (!educationSection) return [];
    const sectionText = educationSection[1];
    const education = [];
    const degreePattern = /((?:B\.?S\.?|M\.?S\.?|Ph\.?D\.?|Bachelor|Master|Doctor|Associate|MBA|B\.?A\.?|M\.?A\.?)[^,\n]*)/gi;
    const yearPattern = /(\d{4})/g;
    const institutionPattern = /(?:University|College|Institute|School|Academy)[^\n,]*/gi;
    const degrees = sectionText.match(degreePattern) || [];
    const institutions = sectionText.match(institutionPattern) || [];
    const years = sectionText.match(yearPattern) || [];
    for(let i = 0; i < Math.max(degrees.length, institutions.length, 1); i++){
        if (i >= 3) break;
        education.push({
            id: `edu-${fileId}-${i}`,
            degree: degrees[i]?.trim() || "",
            institution: institutions[i]?.trim() || "",
            year: years[i] || ""
        });
    }
    return education.filter((e)=>e.degree || e.institution);
}
function extractSkills(text) {
    const skillsSection = text.match(/(?:skills|technologies|technical\s*skills|competencies):?\s*\n?([\s\S]*?)(?=\n\s*(?:experience|education|projects|certifications|languages|references|$))/i);
    if (skillsSection) {
        const sectionText = skillsSection[1];
        const skillsList = sectionText.split(/[,\n•|·]/).map((s)=>s.trim()).filter((s)=>s.length > 1 && s.length < 30 && !/^\d+$/.test(s));
        if (skillsList.length > 0) {
            return skillsList.slice(0, 15);
        }
    }
    const commonSkills = [
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
        "React",
        "Vue",
        "Angular",
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "Spring",
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Git",
        "Linux",
        "SQL",
        "MongoDB",
        "Machine Learning",
        "Data Science",
        "Agile",
        "Scrum",
        "REST",
        "GraphQL"
    ];
    const foundSkills = commonSkills.filter((skill)=>new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text));
    return foundSkills.slice(0, 12);
}
async function parseCV(buffer, fileName, fileId) {
    let text = "";
    const extension = fileName.toLowerCase().split(".").pop();
    try {
        if (extension === "pdf") {
            const data = await pdfParse(buffer);
            text = data.text;
        } else if (extension === "docx" || extension === "doc") {
            const result = await mammoth.extractRawText({
                buffer
            });
            text = result.value;
        } else {
            text = buffer.toString("utf-8");
        }
    } catch (error) {
        console.error("Error parsing file:", error);
        text = buffer.toString("utf-8");
    }
    const aiData = await extractWithAI(text);
    let cv;
    if (aiData) {
        cv = {
            id: fileId,
            name: aiData.name || extractName(text),
            title: aiData.title || extractTitle(text),
            email: aiData.email || extractEmail(text),
            phone: aiData.phone || extractPhone(text),
            location: aiData.location || extractLocation(text),
            website: aiData.website || extractWebsite(text),
            linkedin: aiData.linkedin || extractLinkedIn(text),
            github: aiData.github || extractGithub(text),
            summary: aiData.summary || extractSummary(text),
            experience: aiData.experience?.map((exp, i)=>({
                    id: `exp-${fileId}-${i}`,
                    role: exp.role,
                    company: exp.company,
                    duration: exp.duration,
                    description: exp.description
                })) || extractExperience(text, fileId),
            education: aiData.education?.map((edu, i)=>({
                    id: `edu-${fileId}-${i}`,
                    degree: edu.degree,
                    institution: edu.institution,
                    year: edu.year
                })) || extractEducation(text, fileId),
            skills: aiData.skills || extractSkills(text),
            originalFilename: fileName,
            uploadedAt: new Date(),
            rawText: text
        };
    } else {
        cv = {
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
            skills: extractSkills(text),
            originalFilename: fileName,
            uploadedAt: new Date(),
            rawText: text
        };
    }
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

//# sourceMappingURL=%5Broot-of-the-server%5D__f23fc052._.js.map