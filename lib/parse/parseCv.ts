import type { ParsedCV, Experience, Education, Certification } from "@/types/cv";
import {
  normalizeText,
  normalizeWhitespace,
  generateStableId,
  normalizeDateRange,
  normalizeEmail,
  normalizePhone,
  normalizeUrl,
  normalizeSkills,
  validateAndNormalizeCV,
  extractSection,
  SECTION_ALIASES,
} from "./normalize";

type PdfParseResult = { text: string; numpages: number };
type PdfParseFunction = (buffer: Buffer, options?: object) => Promise<PdfParseResult>;

async function parsePdfBuffer(buffer: Buffer): Promise<PdfParseResult> {
  const pdfModule = await import("pdf-parse") as unknown as 
    | PdfParseFunction 
    | { default: PdfParseFunction | { default: PdfParseFunction } };
  
  let pdfParse: PdfParseFunction | undefined;
  
  if (typeof pdfModule === "function") {
    pdfParse = pdfModule;
  } else if (typeof (pdfModule as { default: unknown }).default === "function") {
    pdfParse = (pdfModule as { default: PdfParseFunction }).default;
  } else if (
    (pdfModule as { default: { default: unknown } }).default && 
    typeof (pdfModule as { default: { default: PdfParseFunction } }).default.default === "function"
  ) {
    pdfParse = (pdfModule as { default: { default: PdfParseFunction } }).default.default;
  }
  
  if (!pdfParse || typeof pdfParse !== "function") {
    const keys = Object.keys(pdfModule as object);
    console.error("pdf-parse module structure:", JSON.stringify(keys));
    throw new Error(`pdf-parse module not callable. Keys: ${keys.join(", ")}`);
  }
  
  return pdfParse(buffer, { max: 0 });
}

async function parseDocxBuffer(buffer: Buffer): Promise<string> {
  const mammothModule = await import("mammoth");
  const mammoth = mammothModule.default ?? mammothModule;
  const result = await mammoth.extractRawText({ buffer });
  return result.value;
}

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_PATTERNS = [
  /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
  /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g,
];
const LINKEDIN_REGEX = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i;
const GITHUB_REGEX = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i;
const DATE_RANGE_REGEX = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}\s*[-–—to]+\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}|(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}\s*[-–—to]+\s*(?:Present|Current|Now)|Since\s+\d{4}|\d{4}\s*[-–]\s*\d{4}|\d{4}\s*[-–]\s*(?:Present|Current)/gi;

function extractEmail(text: string): string {
  const matches = text.match(EMAIL_REGEX);
  return matches ? normalizeEmail(matches[0]) : "";
}

function extractPhone(text: string): string {
  for (const pattern of PHONE_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) {
      const phone = matches[0].trim();
      if (phone.length >= 8 && phone.length <= 20) {
        return normalizePhone(phone);
      }
    }
  }
  return "";
}

function extractLinkedIn(text: string): string {
  const match = text.match(LINKEDIN_REGEX);
  return match ? `linkedin.com/in/${match[1]}` : "";
}

function extractGithub(text: string): string {
  const match = text.match(GITHUB_REGEX);
  return match && match[1] !== "in" && match[1] !== "www" ? `github.com/${match[1]}` : "";
}

function extractWebsite(text: string): string {
  const websiteRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;
  const matches = text.match(websiteRegex);
  if (matches) {
    const filtered = matches.filter(m => 
      !m.includes("linkedin.com") && 
      !m.includes("github.com") &&
      !m.includes("@") &&
      !m.includes("gmail.com") &&
      !m.includes("yahoo.com") &&
      !m.includes("hotmail.com")
    );
    return filtered.length > 0 ? normalizeUrl(filtered[0]) : "";
  }
  return "";
}

function extractLocation(text: string): string {
  const patterns = [
    /(?:Location|Address|Based in|City):?\s*([A-Za-z\s,]+(?:,\s*[A-Za-z]+)?)/i,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*(?:[A-Z]{2}|[A-Z][a-z]+))/,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      const loc = normalizeWhitespace(match[1]);
      if (loc.length > 3 && loc.length < 50) {
        return loc;
      }
    }
  }
  return "";
}

function extractName(text: string): string {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  
  const skipPatterns = [
    /^(resume|cv|curriculum|vitae|profile|contact|email|phone|address)/i,
    /[@\d]/,
    /\.(com|org|net|edu)/i,
  ];
  
  for (const line of lines.slice(0, 8)) {
    if (line.length < 3 || line.length > 60) continue;
    if (skipPatterns.some(p => p.test(line))) continue;
    
    const words = line.split(/\s+/).filter(w => w.length > 0);
    if (words.length >= 2 && words.length <= 5) {
      const allCapitalized = words.every(w => /^[A-Z]/.test(w));
      const noSymbols = words.every(w => /^[A-Za-z'-]+$/.test(w));
      if (allCapitalized && noSymbols) {
        return normalizeWhitespace(line);
      }
    }
  }
  
  const namePattern = /^([A-Z][a-z]+\s+(?:[A-Z][a-z]+\s*)+)/m;
  const match = text.match(namePattern);
  return match ? normalizeWhitespace(match[1]) : "";
}

const TITLE_KEYWORDS = [
  "engineer", "developer", "architect", "consultant", "manager", "analyst",
  "designer", "specialist", "director", "lead", "administrator", "coordinator",
  "executive", "officer", "scientist", "technician", "expert", "strategist"
];

function extractTitle(text: string): string {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  const name = extractName(text).toLowerCase();
  
  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const line = lines[i];
    const lineLower = line.toLowerCase();
    if (lineLower === name) continue;
    if (/@/.test(line) || /\d{3}/.test(line)) continue;
    
    if (TITLE_KEYWORDS.some(k => lineLower.includes(k))) {
      return normalizeWhitespace(line);
    }
  }
  
  return "";
}

function extractSummary(text: string): string {
  const sectionText = extractSection(text, "summary");
  
  if (sectionText) {
    const cleaned = sectionText
      .split("\n")
      .filter(l => l.trim().length > 0)
      .slice(0, 6)
      .join(" ");
    
    const summary = normalizeWhitespace(cleaned);
    if (summary.length > 30 && summary.length < 1500) {
      return summary;
    }
  }
  
  return "";
}

function extractExperience(text: string, fileId: string): Experience[] {
  const sectionText = extractSection(text, "experience");
  const textToProcess = sectionText || text;
  const experiences: Experience[] = [];
  
  const lines = textToProcess.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  
  let currentRole = "";
  let currentCompany = "";
  let currentDuration = "";
  let currentDescription: string[] = [];
  
  const rolePatterns = [
    /^(Senior|Junior|Lead|Principal|Staff|Associate|Chief|Head|VP|Vice\s*President)\s+[A-Za-z\s]+/i,
    /^[A-Z][a-zA-Z\s&\/,]+(Engineer|Developer|Architect|Consultant|Manager|Analyst|Designer|Specialist|Director|Lead|Coordinator|Administrator|Executive|Intern|Officer|Scientist)/i,
  ];
  
  const companyPatterns = [
    /^(?:at\s+)?([A-Z][A-Za-z\s&,\.]+(?:Inc|LLC|Ltd|Corp|Company|Co|Group|Technologies|Solutions|Services|Systems)?)$/i,
    /^([A-Z][A-Za-z\s&]+),?\s*(?:[A-Z][a-z]+,?\s*[A-Z]{0,2})?$/,
  ];
  
  const saveExperience = () => {
    if (currentRole && (currentCompany || currentDescription.length > 0)) {
      experiences.push({
        id: generateStableId("exp", experiences.length, fileId),
        role: normalizeWhitespace(currentRole),
        company: normalizeWhitespace(currentCompany),
        duration: normalizeDateRange(currentDuration),
        description: normalizeWhitespace(currentDescription.join(" ").substring(0, 500)),
      });
    }
  };
  
  for (const line of lines) {
    const dateMatch = line.match(DATE_RANGE_REGEX);
    let matchedRole = false;
    
    for (const pattern of rolePatterns) {
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
        for (const pattern of companyPatterns) {
          const match = line.match(pattern);
          if (match && match[1] && match[1].length > 2 && match[1].length < 60) {
            const potential = match[1].trim();
            const isSection = SECTION_ALIASES.experience.some(a => 
              potential.toLowerCase().includes(a.toLowerCase())
            );
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

function extractEducation(text: string, fileId: string): Education[] {
  const sectionText = extractSection(text, "education");
  const textToProcess = sectionText || text;
  const education: Education[] = [];
  
  const degreePatterns = [
    /((?:Bachelor|Master|Doctor|Ph\.?D\.?|M\.?B\.?A\.?|B\.?S\.?|M\.?S\.?|B\.?A\.?|M\.?A\.?|B\.?E\.?|M\.?E\.?|B\.?Tech|M\.?Tech|Associate|Diploma)[^\n,]*)/gi,
  ];
  
  const institutionPatterns = [
    /((?:University|College|Institute|School|Academy|Polytechnic)[^\n,]*)/gi,
  ];
  
  const yearPattern = /\b(19|20)\d{2}\b/g;
  
  const degrees: string[] = [];
  const institutions: string[] = [];
  const years: string[] = [];
  
  for (const pattern of degreePatterns) {
    const matches = textToProcess.match(pattern);
    if (matches) {
      degrees.push(...matches.map(m => normalizeWhitespace(m)));
    }
  }
  
  for (const pattern of institutionPatterns) {
    const matches = textToProcess.match(pattern);
    if (matches) {
      institutions.push(...matches.map(m => normalizeWhitespace(m)));
    }
  }
  
  const yearMatches = textToProcess.match(yearPattern);
  if (yearMatches) {
    years.push(...yearMatches);
  }
  
  const maxEntries = Math.max(degrees.length, institutions.length, 1);
  for (let i = 0; i < Math.min(maxEntries, 5); i++) {
    if (degrees[i] || institutions[i]) {
      education.push({
        id: generateStableId("edu", i, fileId),
        degree: degrees[i] || "",
        institution: institutions[i] || "",
        year: years[i] || "",
      });
    }
  }
  
  return education;
}

const COMMON_SKILLS = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Ruby", "PHP", "Swift", "Kotlin",
  "React", "Vue", "Angular", "Next.js", "Node.js", "Express", "Django", "Flask", "Spring", "Laravel",
  "AWS", "Azure", "GCP", "Google Cloud", "Docker", "Kubernetes", "Git", "Linux", "Unix",
  "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Oracle",
  "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP",
  "Agile", "Scrum", "Kanban", "DevOps", "CI/CD", "Jenkins", "GitLab",
  "REST", "GraphQL", "API", "Microservices", "Serverless",
  "TOGAF", "ITIL", "COBIT", "CISA", "CISSP", "PMP", "PRINCE2",
  "SAP", "Salesforce", "ServiceNow", "Jira", "Confluence",
  "Power BI", "Tableau", "Excel", "HTML", "CSS", "SASS", "Tailwind", "Bootstrap",
  "Terraform", "Ansible",
];

function extractSkills(text: string): string[] {
  const sectionText = extractSection(text, "skills");
  const skills: string[] = [];
  
  if (sectionText) {
    const lines = sectionText.split("\n").filter(l => l.trim().length > 0);
    
    for (const line of lines) {
      const items = line.split(/[,;|]/).map(s => s.trim());
      for (const item of items) {
        const cleaned = item.replace(/^[-]\s*/, "").trim();
        if (cleaned.length > 1 && cleaned.length < 40 && !/^\d+$/.test(cleaned)) {
          skills.push(cleaned);
        }
      }
    }
  }
  
  for (const skill of COMMON_SKILLS) {
    if (!skills.some(s => s.toLowerCase() === skill.toLowerCase())) {
      const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      if (regex.test(text)) {
        skills.push(skill);
      }
    }
  }
  
  return normalizeSkills(skills);
}

const CERT_PATTERNS = [
  { pattern: /\b(TOGAF[\s\d.]*(?:Certified|Foundation|Practitioner)?)\b/gi, issuer: "The Open Group" },
  { pattern: /\b(IT4IT[\s\d.]*(?:Certified|Foundation)?)\b/gi, issuer: "The Open Group" },
  { pattern: /\b(ITIL[\s\d.v]*(?:Foundation|Practitioner|Expert|Master)?)\b/gi, issuer: "Axelos" },
  { pattern: /\b(PMP|Project Management Professional)\b/gi, issuer: "PMI" },
  { pattern: /\b(COBIT[\s\d.]*(?:Foundation)?)\b/gi, issuer: "ISACA" },
  { pattern: /\b(CISA|Certified Information Systems Auditor)\b/gi, issuer: "ISACA" },
  { pattern: /\b(AWS[\s\w-]*(?:Certified|Architect|Developer|SysOps)?)\b/gi, issuer: "Amazon" },
  { pattern: /\b(Azure[\s\w-]*(?:Certified|Administrator|Developer)?)\b/gi, issuer: "Microsoft" },
  { pattern: /\b(Google Cloud[\s\w-]*(?:Certified)?)\b/gi, issuer: "Google" },
  { pattern: /\b(Lean[\s\w]*Six Sigma[\s\w]*(?:Green|Black|Yellow)?[\s\w]*Belt)\b/gi, issuer: "" },
  { pattern: /\b(Six Sigma[\s\w]*(?:Green|Black|Yellow)?[\s\w]*Belt)\b/gi, issuer: "" },
  { pattern: /\b(CSM|Certified Scrum Master)\b/gi, issuer: "Scrum Alliance" },
  { pattern: /\b(PRINCE2[\s\w]*(?:Foundation|Practitioner)?)\b/gi, issuer: "Axelos" },
  { pattern: /\b(CISSP)\b/gi, issuer: "ISC2" },
];

function extractCertifications(text: string, fileId: string): Certification[] {
  const sectionText = extractSection(text, "certifications");
  const certifications: Certification[] = [];
  const seen = new Set<string>();
  
  if (sectionText) {
    const lines = sectionText.split("\n").filter(l => l.trim().length > 3);
    
    for (const line of lines) {
      const cleaned = line.replace(/^[-]\s*/, "").trim();
      if (cleaned.length > 5 && cleaned.length < 150) {
        const yearMatch = cleaned.match(/\b(19|20)\d{2}\b/);
        const issuerMatch = cleaned.match(/[-–—]\s*([A-Za-z\s]+)(?:,|\(|$)/);
        
        let name = cleaned.replace(/\b(19|20)\d{2}\b/, "").trim();
        let issuer = "";
        
        if (issuerMatch) {
          issuer = normalizeWhitespace(issuerMatch[1]);
          name = name.replace(issuerMatch[0], "").trim();
        }
        
        name = normalizeWhitespace(name.replace(/[-–—,]\s*$/, ""));
        const key = name.toLowerCase();
        
        if (name.length > 3 && !seen.has(key)) {
          seen.add(key);
          certifications.push({
            id: generateStableId("cert", certifications.length, fileId),
            name,
            issuer,
            year: yearMatch ? yearMatch[0] : "",
          });
        }
      }
    }
  }
  
  for (const { pattern, issuer } of CERT_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) {
      for (const match of matches) {
        const name = normalizeWhitespace(match);
        const key = name.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          certifications.push({
            id: generateStableId("cert", certifications.length, fileId),
            name,
            issuer,
            year: "",
          });
        }
      }
    }
  }
  
  return certifications.slice(0, 20);
}

export async function parseCV(buffer: Buffer, fileName: string, fileId: string): Promise<{ cv: ParsedCV; rawText: string }> {
  let text = "";
  
  const extension = fileName.toLowerCase().split(".").pop();
  
  try {
    if (extension === "pdf") {
      console.log(`Parsing PDF: ${fileName}, size: ${buffer.length}`);
      const data = await parsePdfBuffer(buffer);
      text = normalizeText(data.text);
      console.log(`PDF parsed: ${text.length} chars, ${data.numpages} pages`);
    } else if (extension === "docx" || extension === "doc") {
      console.log(`Parsing Word: ${fileName}, size: ${buffer.length}`);
      text = normalizeText(await parseDocxBuffer(buffer));
      console.log(`Word parsed: ${text.length} chars`);
    } else {
      console.log(`Parsing text: ${fileName}`);
      text = normalizeText(buffer.toString("utf-8"));
    }
  } catch (error) {
    console.error(`Parse error for ${fileName}:`, error);
    text = normalizeText(buffer.toString("utf-8"));
  }
  
  const rawCv: ParsedCV = {
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
    rawText: text,
  };
  
  const cv = validateAndNormalizeCV(rawCv);
  
  return { cv, rawText: text };
}
