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
"[externals]/pdf-parse [external] (pdf-parse, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pdf-parse");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/mammoth [external] (mammoth, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mammoth", () => require("mammoth"));

module.exports = mod;
}),
"[project]/lib/parse/parseCv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "parseCV",
    ()=>parseCV
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pdf-parse [external] (pdf-parse, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mammoth__$5b$external$5d$__$28$mammoth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mammoth [external] (mammoth, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function extractEmail(text) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = text.match(emailRegex);
    return matches ? matches[0] : "";
}
function extractPhone(text) {
    const phonePatterns = [
        /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
        /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g,
        /\+\d{10,15}/g
    ];
    for (const pattern of phonePatterns){
        const matches = text.match(pattern);
        if (matches) {
            const phone = matches[0].trim();
            if (phone.length >= 8 && phone.length <= 20) {
                return phone;
            }
        }
    }
    return "";
}
function extractLinkedIn(text) {
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i,
        /linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i,
        /linkedin:?\s*:?\s*([a-zA-Z0-9_-]+)/i
    ];
    for (const pattern of patterns){
        const match = text.match(pattern);
        if (match) {
            return `linkedin.com/in/${match[1]}`;
        }
    }
    return "";
}
function extractGithub(text) {
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i,
        /github\.com\/([a-zA-Z0-9_-]+)/i,
        /github:?\s*:?\s*([a-zA-Z0-9_-]+)/i
    ];
    for (const pattern of patterns){
        const match = text.match(pattern);
        if (match && match[1] !== "in" && match[1] !== "www") {
            return `github.com/${match[1]}`;
        }
    }
    return "";
}
function extractWebsite(text) {
    const websiteRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;
    const matches = text.match(websiteRegex);
    if (matches) {
        const filtered = matches.filter((m)=>!m.includes("linkedin.com") && !m.includes("github.com") && !m.includes("@") && !m.includes("gmail.com") && !m.includes("yahoo.com") && !m.includes("hotmail.com"));
        return filtered.length > 0 ? filtered[0] : "";
    }
    return "";
}
function extractLocation(text) {
    const locationPatterns = [
        /(?:Location|Address|Based in|City|Location:)\s*[:\-]?\s*([A-Za-z\s,]+(?:,\s*[A-Za-z]+)?)/i,
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*(?:[A-Z]{2}|[A-Z][a-z]+))/,
        /(?:^|\n)([A-Z][a-z]+,\s*[A-Z][a-z]+)(?:\s|$|\n)/m
    ];
    for (const pattern of locationPatterns){
        const match = text.match(pattern);
        if (match && match[1]) {
            const loc = match[1].trim();
            if (loc.length > 3 && loc.length < 50) {
                return loc;
            }
        }
    }
    return "";
}
function extractName(text) {
    const lines = text.split("\n").map((l)=>l.trim()).filter((l)=>l.length > 0);
    for (const line of lines.slice(0, 8)){
        if (line.length < 3 || line.length > 60) continue;
        if (/[@\d]/.test(line)) continue;
        if (/^(resume|cv|curriculum|vitae|profile|contact|email|phone|address)/i.test(line)) continue;
        if (/\.(com|org|net|edu)/i.test(line)) continue;
        const words = line.split(/\s+/).filter((w)=>w.length > 0);
        if (words.length >= 2 && words.length <= 5) {
            const allCapitalized = words.every((w)=>/^[A-Z]/.test(w));
            const noSymbols = words.every((w)=>/^[A-Za-z'-]+$/.test(w));
            if (allCapitalized && noSymbols) {
                return line;
            }
        }
    }
    const namePattern = /^([A-Z][a-z]+\s+(?:[A-Z][a-z]+\s*)+)/m;
    const match = text.match(namePattern);
    return match ? match[1].trim() : "";
}
function extractTitle(text) {
    const lines = text.split("\n").map((l)=>l.trim()).filter((l)=>l.length > 0);
    const name = extractName(text);
    const titleKeywords = [
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
    for(let i = 0; i < Math.min(lines.length, 10); i++){
        const line = lines[i].toLowerCase();
        if (line === name.toLowerCase()) continue;
        if (/@/.test(line) || /\d{3}/.test(line)) continue;
        for (const keyword of titleKeywords){
            if (line.includes(keyword)) {
                return lines[i];
            }
        }
    }
    const titlePatterns = [
        /(?:^|\n)([A-Za-z\s&\/]+(?:Engineer|Developer|Architect|Consultant|Manager|Analyst|Designer|Specialist|Director|Lead|Executive|Scientist))(?:\s|$|\n)/m
    ];
    for (const pattern of titlePatterns){
        const match = text.match(pattern);
        if (match && match[1] && match[1].trim().length > 5) {
            return match[1].trim();
        }
    }
    return "";
}
function extractSummary(text) {
    const summaryPatterns = [
        /(?:summary|profile|about\s*me|objective|professional\s*summary|career\s*summary):?\s*\n?([\s\S]*?)(?=\n\s*(?:experience|education|skills|employment|work\s*history|professional\s*experience|projects|certifications|technical|core\s*competencies|$))/i
    ];
    for (const pattern of summaryPatterns){
        const match = text.match(pattern);
        if (match && match[1]) {
            let summary = match[1].trim();
            summary = summary.split("\n").filter((l)=>l.trim().length > 0).slice(0, 6).join(" ").trim();
            summary = summary.replace(/\s+/g, " ");
            if (summary.length > 30 && summary.length < 1500) {
                return summary;
            }
        }
    }
    return "";
}
function findSection(text, sectionNames) {
    const pattern = new RegExp(`(?:^|\\n)\\s*(?:${sectionNames.join("|")})\\s*:?\\s*\\n([\\s\\S]*?)(?=\\n\\s*(?:experience|education|skills|projects|certifications|languages|references|work\\s*history|employment|professional|summary|profile|awards|publications|interests|hobbies|$))`, "i");
    const match = text.match(pattern);
    return match ? match[1].trim() : "";
}
function extractExperience(text, fileId) {
    const sectionText = findSection(text, [
        "experience",
        "work\\s*experience",
        "professional\\s*experience",
        "employment",
        "work\\s*history",
        "career\\s*history"
    ]);
    if (!sectionText) {
        const altMatch = text.match(/(?:experience|employment|work\s*history):?\s*\n([\s\S]*?)(?=\n\s*(?:education|skills|projects|certifications|languages|references|$))/i);
        if (!altMatch) return [];
    }
    const textToProcess = sectionText || text;
    const experiences = [];
    const datePattern = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+)?\d{4}\s*[-–—to]+\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+)?\d{4}|(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+)?\d{4}\s*[-–—to]+\s*(?:Present|Current|Now)|Since\s+\d{4}|\d{4}\s*[-–]\s*\d{4}|\d{4}\s*[-–]\s*(?:Present|Current)/gi;
    const blocks = textToProcess.split(/\n(?=\s*[A-Z])/);
    let currentRole = "";
    let currentCompany = "";
    let currentDuration = "";
    let currentDescription = [];
    for (const block of blocks){
        const lines = block.split("\n").map((l)=>l.trim()).filter((l)=>l.length > 0);
        for (const line of lines){
            const dateMatch = line.match(datePattern);
            const rolePatterns = [
                /^([A-Z][a-zA-Z\s&\/,]+(?:Engineer|Developer|Architect|Consultant|Manager|Analyst|Designer|Specialist|Director|Lead|Coordinator|Administrator|Executive|Intern|Officer|Scientist))/i,
                /^(Senior|Junior|Lead|Principal|Staff|Associate|Chief|Head|VP|Vice\s*President)[\s]+[A-Za-z\s]+/i
            ];
            let isRole = false;
            for (const pattern of rolePatterns){
                if (pattern.test(line)) {
                    if (currentRole && (currentCompany || currentDescription.length > 0)) {
                        experiences.push({
                            id: `exp-${fileId}-${experiences.length}`,
                            role: currentRole,
                            company: currentCompany,
                            duration: currentDuration,
                            description: currentDescription.join(" ").substring(0, 500)
                        });
                    }
                    currentRole = line.replace(datePattern, "").trim();
                    currentDuration = dateMatch ? dateMatch[0] : "";
                    currentCompany = "";
                    currentDescription = [];
                    isRole = true;
                    break;
                }
            }
            if (!isRole && currentRole) {
                const companyPatterns = [
                    /^(?:at\s+)?([A-Z][A-Za-z\s&,\.]+(?:Inc|LLC|Ltd|Corp|Company|Co|Group|Technologies|Solutions|Services|Systems)?)/i,
                    /^([A-Z][A-Za-z\s&]+),?\s*(?:[A-Z][a-z]+,?\s*[A-Z]{0,2})?$/
                ];
                let isCompany = false;
                if (!currentCompany) {
                    for (const pattern of companyPatterns){
                        const match = line.match(pattern);
                        if (match && match[1] && match[1].length > 2 && match[1].length < 60) {
                            const potential = match[1].trim();
                            if (!/^(experience|education|skills|summary|profile)/i.test(potential)) {
                                currentCompany = potential;
                                if (dateMatch && !currentDuration) {
                                    currentDuration = dateMatch[0];
                                }
                                isCompany = true;
                                break;
                            }
                        }
                    }
                }
                if (!isCompany && line.length > 10) {
                    if (/^[•\-\*\u2022\u25CF\u25CB]\s*/.test(line) || line.length > 30) {
                        currentDescription.push(line.replace(/^[•\-\*\u2022\u25CF\u25CB]\s*/, ""));
                    }
                }
            }
        }
    }
    if (currentRole && (currentCompany || currentDescription.length > 0)) {
        experiences.push({
            id: `exp-${fileId}-${experiences.length}`,
            role: currentRole,
            company: currentCompany,
            duration: currentDuration,
            description: currentDescription.join(" ").substring(0, 500)
        });
    }
    if (experiences.length === 0) {
        const simplePattern = /([A-Z][a-zA-Z\s]+(?:Engineer|Developer|Manager|Analyst|Designer|Consultant|Architect|Director|Lead))\s*(?:at|@|[-–,])\s*([A-Za-z\s&,\.]+?)(?:\s*[|,]\s*|\s+)?(\d{4}\s*[-–]\s*(?:\d{4}|present|current))?/gi;
        let match;
        while((match = simplePattern.exec(textToProcess)) !== null && experiences.length < 10){
            experiences.push({
                id: `exp-${fileId}-${experiences.length}`,
                role: match[1]?.trim() || "",
                company: match[2]?.trim() || "",
                duration: match[3]?.trim() || "",
                description: ""
            });
        }
    }
    return experiences.slice(0, 15);
}
function extractEducation(text, fileId) {
    const sectionText = findSection(text, [
        "education",
        "academic",
        "qualifications",
        "educational\\s*background"
    ]);
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
            degrees.push(...matches.map((m)=>m.trim()));
        }
    }
    for (const pattern of institutionPatterns){
        const matches = textToProcess.match(pattern);
        if (matches) {
            institutions.push(...matches.map((m)=>m.trim()));
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
                id: `edu-${fileId}-${i}`,
                degree: degrees[i] || "",
                institution: institutions[i] || "",
                year: years[i] || ""
            });
        }
    }
    return education;
}
function extractSkills(text) {
    const sectionText = findSection(text, [
        "skills",
        "technical\\s*skills",
        "technologies",
        "competencies",
        "core\\s*competencies",
        "technical\\s*competencies",
        "expertise",
        "tools\\s*&\\s*technologies",
        "programming\\s*languages"
    ]);
    const skills = [];
    if (sectionText) {
        const lines = sectionText.split("\n").filter((l)=>l.trim().length > 0);
        for (const line of lines){
            const items = line.split(/[,;•|·\u2022\u25CF\u25CB]/).map((s)=>s.trim());
            for (const item of items){
                const cleaned = item.replace(/^[-\*]\s*/, "").trim();
                if (cleaned.length > 1 && cleaned.length < 40 && !/^\d+$/.test(cleaned)) {
                    if (!skills.includes(cleaned)) {
                        skills.push(cleaned);
                    }
                }
            }
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
        "Windows Server",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Oracle",
        "SQL Server",
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "PyTorch",
        "NLP",
        "Computer Vision",
        "Data Science",
        "Data Analysis",
        "Big Data",
        "Hadoop",
        "Spark",
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
        "ITIL",
        "TOGAF",
        "Enterprise Architecture",
        "Business Architecture",
        "Solution Architecture",
        "Project Management",
        "Program Management",
        "PMO",
        "PRINCE2",
        "PMP",
        "Six Sigma",
        "Lean",
        "Kaizen",
        "Business Process",
        "BPM",
        "COBIT",
        "CISA",
        "CISSP",
        "Security",
        "Cybersecurity",
        "SAP",
        "Salesforce",
        "ServiceNow",
        "Jira",
        "Confluence",
        "Power BI",
        "Tableau",
        "Excel",
        "PowerPoint",
        "Visio",
        "HTML",
        "CSS",
        "SASS",
        "Tailwind",
        "Bootstrap",
        "Terraform",
        "Ansible",
        "Chef",
        "Puppet"
    ];
    for (const skill of commonSkills){
        if (!skills.some((s)=>s.toLowerCase() === skill.toLowerCase())) {
            const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (regex.test(text)) {
                skills.push(skill);
            }
        }
    }
    return skills.slice(0, 50);
}
function extractCertifications(text, fileId) {
    const sectionText = findSection(text, [
        "certifications?",
        "certificates?",
        "credentials?",
        "licenses?",
        "professional\\s*certifications?",
        "professional\\s*qualifications?"
    ]);
    const certifications = [];
    if (sectionText) {
        const lines = sectionText.split("\n").filter((l)=>l.trim().length > 3);
        for (const line of lines){
            const cleaned = line.replace(/^[•\-\*\u2022\u25CF\u25CB]\s*/, "").trim();
            if (cleaned.length > 5 && cleaned.length < 150) {
                const yearMatch = cleaned.match(/\b(19|20)\d{2}\b/);
                const issuerMatch = cleaned.match(/[-–—]\s*([A-Za-z\s]+)(?:,|\(|$)/);
                let name = cleaned.replace(/\b(19|20)\d{2}\b/, "").trim();
                let issuer = "";
                if (issuerMatch) {
                    issuer = issuerMatch[1].trim();
                    name = name.replace(issuerMatch[0], "").trim();
                }
                if (name.length > 3) {
                    certifications.push({
                        id: `cert-${fileId}-${certifications.length}`,
                        name: name.replace(/[-–—,]\s*$/, "").trim(),
                        issuer,
                        year: yearMatch ? yearMatch[0] : ""
                    });
                }
            }
        }
    }
    const certPatterns = [
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
            pattern: /\b(CGEIT)\b/gi,
            issuer: "ISACA"
        },
        {
            pattern: /\b(CRISC)\b/gi,
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
            pattern: /\b(Kaizen[\s\w]*(?:Certified|Practitioner)?)\b/gi,
            issuer: ""
        },
        {
            pattern: /\b(Scrum[\s\w]*(?:Master|Owner|Developer)?)\b/gi,
            issuer: ""
        },
        {
            pattern: /\b(CSM|Certified Scrum Master)\b/gi,
            issuer: "Scrum Alliance"
        },
        {
            pattern: /\b(PSM[\s\w]*(?:I|II|III)?|Professional Scrum Master)\b/gi,
            issuer: "Scrum.org"
        },
        {
            pattern: /\b(PRINCE2[\s\w]*(?:Foundation|Practitioner)?)\b/gi,
            issuer: "Axelos"
        },
        {
            pattern: /\b(CISSP)\b/gi,
            issuer: "ISC2"
        },
        {
            pattern: /\b(CompTIA[\s\w]+)\b/gi,
            issuer: "CompTIA"
        }
    ];
    for (const { pattern, issuer } of certPatterns){
        const matches = text.match(pattern);
        if (matches) {
            for (const match of matches){
                const exists = certifications.some((c)=>c.name.toLowerCase().includes(match.toLowerCase()) || match.toLowerCase().includes(c.name.toLowerCase()));
                if (!exists) {
                    certifications.push({
                        id: `cert-${fileId}-${certifications.length}`,
                        name: match.trim(),
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
            console.log(`Parsing PDF file: ${fileName}, buffer size: ${buffer.length}`);
            const data = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__["default"])(buffer, {
                max: 0
            });
            text = data.text;
            text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/[ \t]+/g, ' ').trim();
            console.log(`PDF parsed successfully, extracted ${text.length} characters, ${data.numpages} pages`);
        } else if (extension === "docx" || extension === "doc") {
            console.log(`Parsing Word file: ${fileName}, buffer size: ${buffer.length}`);
            const result = await __TURBOPACK__imported__module__$5b$externals$5d2f$mammoth__$5b$external$5d$__$28$mammoth$2c$__cjs$29$__["default"].extractRawText({
                buffer
            });
            text = result.value;
            console.log(`Word file parsed successfully, extracted ${text.length} characters`);
        } else {
            console.log(`Parsing text file: ${fileName}`);
            text = buffer.toString("utf-8");
        }
    } catch (error) {
        console.error(`Error parsing ${extension} file (${fileName}):`, error);
        text = buffer.toString("utf-8");
    }
    const cv = {
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
    return {
        cv,
        rawText: text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$parseCv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parse/parseCv.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/mongodb.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$parseCv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parse$2f$parseCv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ef53d3a._.js.map