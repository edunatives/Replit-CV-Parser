/**
 * @fileoverview CV Data Normalization Module
 * @description Provides deterministic normalization functions for CV data.
 * Ensures consistent formatting across all parsed CVs regardless of source format.
 * Handles text cleanup, date normalization, URL formatting, and data deduplication.
 */

import type { ParsedCV, Experience, Education, Certification } from "@/types/cv";

const BULLET_CHARS = /[•\-\*\u2022\u25CF\u25CB\u25AA\u25AB\u2023\u2043\u204C\u204D\u2219\u25E6]/g;
const MULTIPLE_SPACES = /[ \t]+/g;
const MULTIPLE_NEWLINES = /\n{3,}/g;
const DASHES = /[–—―‐‑‒]/g;

/**
 * Normalize raw text by standardizing line endings, bullets, and whitespace
 * 
 * @param {string} text - Raw text extracted from document
 * @returns {string} Cleaned and normalized text
 * 
 * @example
 * normalizeText("Hello•World\r\n\r\n\r\nTest") // "Hello-World\n\nTest"
 */
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

/**
 * Collapse all whitespace into single spaces
 * 
 * @param {string} str - Input string with potential extra whitespace
 * @returns {string} String with normalized whitespace
 * 
 * @example
 * normalizeWhitespace("John    Doe\n\t") // "John Doe"
 */
export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}

/**
 * Normalize description text while preserving bullet point formatting
 * Converts inline bullets to newlined bullets for proper display
 * 
 * @param {string} str - Description text with potential bullet points
 * @returns {string} Normalized text with bullets on separate lines
 * 
 * @example
 * normalizeDescription("• point1 • point2") // "• point1\n• point2"
 */
export function normalizeDescription(str: string): string {
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
  normalized = normalized.split("\n").map(line => line.replace(/[ \t]+/g, " ").trim()).join("\n");
  
  // Remove empty lines at start/end
  normalized = normalized.replace(/^\n+|\n+$/g, "");
  
  return normalized;
}

/**
 * Generate a stable, deterministic ID for CV sections
 * 
 * @param {string} prefix - Type prefix (e.g., 'exp', 'edu', 'cert')
 * @param {number} index - Position index in array
 * @param {string} fileId - Parent CV file identifier
 * @returns {string} Stable unique identifier
 * 
 * @example
 * generateStableId('exp', 0, 'file-123') // "exp-file-123-0"
 */
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

/**
 * Normalize date ranges into consistent format "Mon YYYY - Mon YYYY" or "Mon YYYY - Present"
 * 
 * @param {string} dateStr - Raw date range string in various formats
 * @returns {string} Normalized date range
 * 
 * @example
 * normalizeDateRange("January 2020 to December 2023") // "Jan 2020 - Dec 2023"
 * normalizeDateRange("2019 - present") // "2019 - Present"
 * normalizeDateRange("since 2021") // "2021 - Present"
 */
export function normalizeDateRange(dateStr: string): string {
  if (!dateStr) return "";
  
  let normalized = dateStr.trim();
  
  normalized = normalized.replace(/\b(present|current|now|ongoing)\b/gi, "PRESENT_MARKER");
  
  normalized = normalized.toLowerCase();
  
  for (const month of MONTH_NAMES) {
    const regex = new RegExp(`\\b${month}\\.?\\b`, "gi");
    normalized = normalized.replace(regex, MONTH_MAP[month] || month);
  }
  
  normalized = normalized.replace(/\s*[-–—]+\s*/g, " - ");
  normalized = normalized.replace(/\s+to\s+/gi, " - ");
  
  normalized = normalized.replace(/present_marker/gi, "Present");
  normalized = normalized.replace(/since\s+(\d{4})/gi, "$1 - Present");
  
  const words = normalized.split(/\s+/);
  const result: string[] = [];
  
  for (const word of words) {
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

/**
 * Normalize email to lowercase
 * 
 * @param {string} email - Email address
 * @returns {string} Lowercase trimmed email
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Clean phone number by removing invalid characters
 * 
 * @param {string} phone - Raw phone number
 * @returns {string} Cleaned phone number with standard formatting characters
 */
export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[^\d+\-.\s()]/g, "").trim();
  return cleaned.replace(/\s+/g, " ");
}

/**
 * Normalize URL by removing protocol and www prefix
 * 
 * @param {string} url - Full or partial URL
 * @returns {string} Clean URL without protocol or www
 * 
 * @example
 * normalizeUrl("https://www.linkedin.com/in/johndoe/") // "linkedin.com/in/johndoe"
 */
export function normalizeUrl(url: string): string {
  let normalized = url.trim().toLowerCase();
  normalized = normalized.replace(/^https?:\/\//, "");
  normalized = normalized.replace(/^www\./, "");
  normalized = normalized.replace(/\/$/, "");
  return normalized;
}

/**
 * Normalize skills array by deduplicating and sorting
 * 
 * @param {string[]} skills - Array of skill strings
 * @returns {string[]} Deduplicated, sorted skills (2-50 chars each)
 * 
 * @example
 * normalizeSkills(["Python", "python", "JavaScript", ""]) // ["JavaScript", "Python"]
 */
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

/**
 * Validate and normalize all fields of a ParsedCV
 * Master normalization function that processes entire CV
 * 
 * @param {ParsedCV} cv - Raw parsed CV data
 * @returns {ParsedCV} Fully normalized CV
 */
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
    tokenUsage: cv.tokenUsage,
  };
}

/**
 * Normalize experience entries with stable IDs
 * @internal
 */
function normalizeExperience(experiences: Experience[], fileId: string): Experience[] {
  return experiences.map((exp, index) => ({
    id: exp.id || generateStableId("exp", index, fileId),
    role: normalizeWhitespace(exp.role || ""),
    company: normalizeWhitespace(exp.company || ""),
    duration: normalizeDateRange(exp.duration || ""),
    description: normalizeDescription(exp.description || ""),
    location: exp.location ? normalizeWhitespace(exp.location) : undefined,
  })).filter(exp => exp.role || exp.company);
}

/**
 * Normalize education entries with stable IDs
 * @internal
 */
function normalizeEducation(education: Education[], fileId: string): Education[] {
  return education.map((edu, index) => ({
    id: edu.id || generateStableId("edu", index, fileId),
    degree: normalizeWhitespace(edu.degree || ""),
    institution: normalizeWhitespace(edu.institution || ""),
    year: String(edu.year || "").trim(),
  })).filter(edu => edu.degree || edu.institution);
}

/**
 * Normalize and deduplicate certification entries
 * @internal
 */
function normalizeCertifications(certs: Certification[], fileId: string): Certification[] {
  const seen = new Set<string>();
  
  return certs.map((cert, index) => ({
    id: cert.id || generateStableId("cert", index, fileId),
    name: normalizeWhitespace(cert.name || ""),
    issuer: normalizeWhitespace(cert.issuer || ""),
    year: String(cert.year || "").trim(),
  })).filter(cert => {
    if (!cert.name) return false;
    const key = cert.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Section name aliases for detecting CV sections in raw text
 * Used by findSectionBoundaries for section detection
 */
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

/**
 * Find section boundaries in raw CV text
 * Used for fallback regex-based extraction
 * 
 * @param {string} text - Raw CV text
 * @returns {Map<string, {start: number, end: number}>} Map of section names to text positions
 */
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

/**
 * Extract text content of a specific section
 * 
 * @param {string} text - Full CV text
 * @param {string} section - Section name to extract (e.g., 'experience', 'education')
 * @returns {string} Extracted section content or empty string if not found
 */
export function extractSection(text: string, section: string): string {
  const boundaries = findSectionBoundaries(text);
  const bounds = boundaries.get(section);
  
  if (!bounds) return "";
  
  return text.substring(bounds.start, bounds.end).trim();
}
