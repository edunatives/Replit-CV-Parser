import type { ParsedCV, Experience, Education, Certification } from "@/types/cv";

const BULLET_CHARS = /[•\-\*\u2022\u25CF\u25CB\u25AA\u25AB\u2023\u2043\u204C\u204D\u2219\u25E6]/g;
const MULTIPLE_SPACES = /[ \t]+/g;
const MULTIPLE_NEWLINES = /\n{3,}/g;
const DASHES = /[–—―‐‑‒]/g;

export function normalizeText(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(BULLET_CHARS, "-")
    .replace(DASHES, "-")
    .replace(MULTIPLE_SPACES, " ")
    .replace(MULTIPLE_NEWLINES, "\n\n")
    .trim();
}

export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}

export function generateStableId(prefix: string, index: number, fileId: string): string {
  return `${prefix}-${fileId}-${index}`;
}

const MONTH_NAMES = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
  "jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec"
];

const MONTH_MAP: Record<string, string> = {
  january: "Jan", february: "Feb", march: "Mar", april: "Apr",
  may: "May", june: "Jun", july: "Jul", august: "Aug",
  september: "Sep", october: "Oct", november: "Nov", december: "Dec",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr",
  jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", sept: "Sep",
  oct: "Oct", nov: "Nov", dec: "Dec"
};

export function normalizeDateRange(dateStr: string): string {
  if (!dateStr) return "";
  
  let normalized = dateStr.toLowerCase().trim();
  
  for (const month of MONTH_NAMES) {
    const regex = new RegExp(`\\b${month}\\.?\\b`, "gi");
    normalized = normalized.replace(regex, MONTH_MAP[month] || month);
  }
  
  normalized = normalized.replace(/\s*[-–—to]+\s*/gi, " - ");
  normalized = normalized.replace(/\b(present|current|now|ongoing)\b/gi, "Present");
  normalized = normalized.replace(/since\s+(\d{4})/gi, "$1 - Present");
  
  const words = normalized.split(" ");
  const result: string[] = [];
  for (const word of words) {
    if (word === "-" || /^\d{4}$/.test(word) || MONTH_MAP[word.toLowerCase()] || word === "Present") {
      result.push(word.charAt(0).toUpperCase() + word.slice(1));
    } else if (/^[A-Z][a-z]{2}$/.test(word)) {
      result.push(word);
    }
  }
  
  return result.join(" ").replace(/\s+/g, " ").trim() || dateStr.trim();
}

export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[^\d+\-.\s()]/g, "").trim();
  return cleaned.replace(/\s+/g, " ");
}

export function normalizeUrl(url: string): string {
  let normalized = url.trim().toLowerCase();
  normalized = normalized.replace(/^https?:\/\//, "");
  normalized = normalized.replace(/^www\./, "");
  normalized = normalized.replace(/\/$/, "");
  return normalized;
}

export function normalizeSkills(skills: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  
  for (const skill of skills) {
    const normalized = normalizeWhitespace(skill);
    const key = normalized.toLowerCase();
    
    if (normalized.length >= 2 && normalized.length <= 50 && !seen.has(key)) {
      seen.add(key);
      result.push(normalized);
    }
  }
  
  return result.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

export function validateAndNormalizeCV(cv: ParsedCV): ParsedCV {
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
  };
}

function normalizeExperience(experiences: Experience[], fileId: string): Experience[] {
  return experiences.map((exp, index) => ({
    id: exp.id || generateStableId("exp", index, fileId),
    role: normalizeWhitespace(exp.role || ""),
    company: normalizeWhitespace(exp.company || ""),
    duration: normalizeDateRange(exp.duration || ""),
    description: normalizeWhitespace(exp.description || ""),
  })).filter(exp => exp.role || exp.company);
}

function normalizeEducation(education: Education[], fileId: string): Education[] {
  return education.map((edu, index) => ({
    id: edu.id || generateStableId("edu", index, fileId),
    degree: normalizeWhitespace(edu.degree || ""),
    institution: normalizeWhitespace(edu.institution || ""),
    year: edu.year?.trim() || "",
  })).filter(edu => edu.degree || edu.institution);
}

function normalizeCertifications(certs: Certification[], fileId: string): Certification[] {
  const seen = new Set<string>();
  
  return certs.map((cert, index) => ({
    id: cert.id || generateStableId("cert", index, fileId),
    name: normalizeWhitespace(cert.name || ""),
    issuer: normalizeWhitespace(cert.issuer || ""),
    year: cert.year?.trim() || "",
  })).filter(cert => {
    if (!cert.name) return false;
    const key = cert.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const SECTION_ALIASES: Record<string, string[]> = {
  experience: [
    "experience", "work experience", "professional experience", 
    "employment", "employment history", "work history", 
    "career history", "professional background"
  ],
  education: [
    "education", "academic background", "educational background",
    "qualifications", "academic qualifications", "academic history"
  ],
  skills: [
    "skills", "technical skills", "core competencies", "competencies",
    "technologies", "expertise", "tools & technologies", 
    "programming languages", "technical expertise"
  ],
  certifications: [
    "certifications", "certificates", "credentials", "licenses",
    "professional certifications", "professional credentials",
    "professional qualifications"
  ],
  summary: [
    "summary", "profile", "professional summary", "career summary",
    "about me", "about", "objective", "career objective", "overview"
  ]
};

export function findSectionBoundaries(text: string): Map<string, { start: number; end: number }> {
  const boundaries = new Map<string, { start: number; end: number }>();
  const lines = text.split("\n");
  
  const sectionStarts: Array<{ section: string; lineIndex: number; position: number }> = [];
  
  let position = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    const lineStart = position;
    
    for (const [section, aliases] of Object.entries(SECTION_ALIASES)) {
      for (const alias of aliases) {
        const aliasLower = alias.toLowerCase();
        if (line === aliasLower || line === aliasLower + ":" || line.startsWith(aliasLower + ":")) {
          if (!sectionStarts.some(s => s.section === section)) {
            sectionStarts.push({ section, lineIndex: i, position: lineStart });
          }
          break;
        }
      }
    }
    
    position += lines[i].length + 1;
  }
  
  sectionStarts.sort((a, b) => a.position - b.position);
  
  for (let i = 0; i < sectionStarts.length; i++) {
    const current = sectionStarts[i];
    const next = sectionStarts[i + 1];
    
    const contentStart = text.indexOf("\n", current.position) + 1;
    const end = next ? next.position : text.length;
    
    boundaries.set(current.section, { start: contentStart, end });
  }
  
  return boundaries;
}

export function extractSection(text: string, section: string): string {
  const boundaries = findSectionBoundaries(text);
  const bounds = boundaries.get(section);
  
  if (!bounds) return "";
  
  return text.substring(bounds.start, bounds.end).trim();
}
