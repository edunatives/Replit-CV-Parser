import { Injectable, Inject } from "@nestjs/common";
import type { ParsedCV, Experience, Education, Certification } from "../../types/cv";
import { LangchainService } from "../assessment/langchain.service";
import { detectCVType, isHighConfidence, HIGH_CONFIDENCE_THRESHOLD, type CVTypeResult } from "./cv-type-detection";

type PdfParseResult = { text: string; numpages: number };
type PdfParseFunction = (buffer: Buffer, options?: object) => Promise<PdfParseResult>;

const BULLET_CHARS = /[•\-\*\u2022\u25CF\u25CB\u25AA\u25AB\u2023\u2043\u204C\u204D\u2219\u25E6]/g;
const MULTIPLE_SPACES = /[ \t]+/g;
const MULTIPLE_NEWLINES = /\n{3,}/g;
const DASHES = /[–—―‐‑‒]/g;

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_PATTERNS = [
  /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
  /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g,
];
const LINKEDIN_REGEX = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i;
const GITHUB_REGEX = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i;
const DATE_RANGE_REGEX = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}\s*[-–—to]+\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}|(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\d{4}\s*[-–—to]+\s*(?:Present|Current|Now)|Since\s+\d{4}|\d{4}\s*[-–]\s*\d{4}|\d{4}\s*[-–]\s*(?:Present|Current)/gi;

const SECTION_ALIASES: Record<string, string[]> = {
  experience: ["experience", "work experience", "professional experience", "employment", "employment history", "work history", "career history", "professional background"],
  education: ["education", "academic background", "educational background", "qualifications", "academic qualifications", "academic history"],
  skills: ["skills", "technical skills", "core competencies", "competencies", "technologies", "expertise", "tools & technologies", "programming languages", "technical expertise"],
  certifications: ["certifications", "certificates", "credentials", "licenses", "professional certifications", "professional credentials", "professional qualifications"],
  summary: ["summary", "profile", "professional summary", "career summary", "about me", "about", "objective", "career objective", "overview"],
};

const MONTH_MAP: Record<string, string> = {
  january: "Jan", february: "Feb", march: "Mar", april: "Apr",
  may: "May", june: "Jun", july: "Jul", august: "Aug",
  september: "Sep", october: "Oct", november: "Nov", december: "Dec",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr",
  jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", sept: "Sep",
  oct: "Oct", nov: "Nov", dec: "Dec"
};

const MONTH_NAMES = Object.keys(MONTH_MAP);

const TITLE_KEYWORDS = [
  "engineer", "developer", "architect", "consultant", "manager", "analyst",
  "designer", "specialist", "director", "lead", "administrator", "coordinator",
  "executive", "officer", "scientist", "technician", "expert", "strategist"
];

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

@Injectable()
export class ParseService {
  constructor(
    @Inject(LangchainService) private readonly langchainService: LangchainService
  ) {}

  async parseCV(buffer: Buffer, fileName: string, fileId: string): Promise<{ cv: ParsedCV; rawText: string }> {
    console.log(`[ParseService] parseCV called - File: ${fileName}, Size: ${buffer.length}, ID: ${fileId}`);
    let text = "";
    const extension = fileName.toLowerCase().split(".").pop();
    console.log(`[ParseService] File extension: ${extension}`);

    try {
      if (extension === "pdf") {
        console.log(`[ParseService] Parsing PDF: ${fileName}, size: ${buffer.length}`);
        const data = await this.parsePdfBuffer(buffer);
        text = this.normalizeText(data.text);
        console.log(`[ParseService] PDF parsed: ${text.length} chars, ${data.numpages} pages`);
      } else if (extension === "docx" || extension === "doc") {
        console.log(`[ParseService] Parsing Word: ${fileName}, size: ${buffer.length}`);
        text = this.normalizeText(await this.parseDocxBuffer(buffer));
        console.log(`[ParseService] Word parsed: ${text.length} chars`);
      } else {
        console.log(`[ParseService] Parsing text: ${fileName}`);
        text = this.normalizeText(buffer.toString("utf-8"));
        console.log(`[ParseService] Text parsed: ${text.length} chars`);
      }
    } catch (error) {
      console.error(`[ParseService] Parse error for ${fileName}:`, error);
      text = this.normalizeText(buffer.toString("utf-8"));
    }
    
    console.log(`[ParseService] Starting extraction for ${fileName}`);

    // Run pre-LLM heuristic CV type detection
    const typeDetection = detectCVType(text);
    const useHeuristicType = isHighConfidence(typeDetection);
    console.log(`[ParseService] Heuristic CV type detection: ${typeDetection.cvType} (${typeDetection.confidence}% confidence, threshold: ${HIGH_CONFIDENCE_THRESHOLD}%)`);
    console.log(`[ParseService] ${useHeuristicType ? 'Using heuristic type (high confidence)' : 'Will let LLM decide (low confidence)'}`);

    // Try AI-powered extraction first, fall back to regex
    let rawCv: ParsedCV;
    const aiResult = await this.extractWithAI(text, fileId, useHeuristicType ? typeDetection : null);
    
    if (aiResult) {
      console.log(`[ParseService] Using AI-powered extraction`);
      rawCv = aiResult;
    } else {
      console.log(`[ParseService] Using regex-based extraction (AI unavailable)`);
      const experience = this.extractExperience(text, fileId);
      // Use heuristic detection result since AI is unavailable
      const cvType = typeDetection.cvType;
      console.log(`[ParseService] Using heuristic cvType: ${cvType} (${typeDetection.reason})`);
      rawCv = {
        id: fileId,
        name: this.extractName(text),
        title: this.extractTitle(text),
        email: this.extractEmail(text),
        phone: this.extractPhone(text),
        location: this.extractLocation(text),
        website: this.extractWebsite(text),
        linkedin: this.extractLinkedIn(text),
        github: this.extractGithub(text),
        summary: this.extractSummary(text),
        cvType,
        experience,
        education: this.extractEducation(text, fileId),
        certifications: this.extractCertifications(text, fileId),
        skills: this.extractSkills(text),
        originalFilename: fileName,
        uploadedAt: new Date(),
        rawText: text,
      };
    }

    const cv = this.validateAndNormalizeCV(rawCv);
    console.log(`[ParseService] Extraction complete - Name: "${cv.name}", Email: "${cv.email}", Experience: ${cv.experience.length}, Skills: ${cv.skills.length}`);
    return { cv, rawText: text };
  }

  /**
   * AI-powered CV extraction using multi-provider LangchainService
   * Uses OpenAI by default, falls back to Gemini if unavailable
   * @param preDetectedType - If provided with high confidence, skip LLM type inference
   */
  private async extractWithAI(text: string, fileId: string, preDetectedType: CVTypeResult | null): Promise<ParsedCV | null> {
    const providers = this.langchainService.getAvailableProviders();
    
    if (providers.length === 0) {
      console.log(`[ParseService] No AI provider available`);
      return null;
    }

    const provider = providers.includes("openai") ? "openai" : providers[0];
    console.log(`[ParseService] Using ${provider} for CV extraction (available: ${providers.join(", ")})`);

    try {
      const systemPrompt = `You are a CV/resume parser. Extract structured information and return ONLY valid JSON.`;
      
      // Build cvType instruction based on whether we have high-confidence pre-detection
      let cvTypeValue: string;
      let preDetectionNote = "";
      if (preDetectedType) {
        // High confidence: instruct LLM to use pre-detected type
        cvTypeValue = preDetectedType.cvType;
        preDetectionNote = `\nNOTE: The cvType has been pre-determined as "${preDetectedType.cvType}" (${preDetectedType.reason}). Use this exact value.`;
        console.log(`[ParseService] Skipping LLM type inference, using pre-detected: ${preDetectedType.cvType}`);
      } else {
        // Low confidence: let LLM determine the type
        cvTypeValue = "student, fresh_grad, researcher, or professional";
      }
      
      const userPrompt = `Extract structured data from this CV/resume. Return ONLY valid JSON with this exact structure:${preDetectionNote}
{
  "name": "Full name",
  "title": "Professional title or current role",
  "email": "Email address",
  "phone": "Phone number",
  "location": "Location/city",
  "website": "Personal website URL if any",
  "linkedin": "LinkedIn URL if any",
  "github": "GitHub URL if any",
  "summary": "Professional summary or objective",
  "cvType": "${cvTypeValue}",
  "experience": [
    {
      "company": "Company name",
      "role": "Job title",
      "duration": "Date range (e.g., 'Jan 2020 - Present')",
      "description": "Job responsibilities and achievements as bullet points joined with newlines"
    }
  ],
  "education": [
    {
      "institution": "School/university name",
      "degree": "Degree or qualification",
      "year": "Graduation year or date range"
    }
  ],
  "certifications": [
    {
      "name": "Certification name",
      "issuer": "Issuing organization",
      "year": "Year obtained"
    }
  ],
  "skills": ["skill1", "skill2"],
  "strengths": ["strength1", "strength2"]
}

IMPORTANT: 
- Extract ALL work experiences, not just the first one
- Include the full job description with all bullet points
- If a field is not found, use empty string "" or empty array []${preDetectedType ? '' : `
- For cvType, determine based on these criteria:
  * "student": Currently enrolled in education, no or only internship/part-time work experience
  * "fresh_grad": Graduated within last 2 years, limited professional experience (0-2 years)
  * "researcher": PhD candidate, postdoc, research fellow, or academic role with publications/research focus
  * "professional": 3+ years of professional work experience in industry`}

CV TEXT:
${text}`;

      console.log(`[ParseService] Calling ${provider} for CV extraction...`);
      const response = await this.langchainService.generate(systemPrompt, userPrompt, {
        provider,
        temperature: 0.1,
        maxOutputTokens: 8000,
      });

      const responseText = response.text?.trim() || "";
      if (!responseText) {
        console.log(`[ParseService] Empty AI response`);
        return null;
      }

      // Clean and parse JSON
      let cleanedText = responseText.trim();
      if (cleanedText.startsWith("```json")) cleanedText = cleanedText.slice(7);
      else if (cleanedText.startsWith("```")) cleanedText = cleanedText.slice(3);
      if (cleanedText.endsWith("```")) cleanedText = cleanedText.slice(0, -3);
      cleanedText = cleanedText.trim();

      const parsed = JSON.parse(cleanedText);
      
      // Parse experience first for heuristic fallback
      const experiences = (parsed.experience || []).map((exp: { company?: string; role?: string; duration?: string; description?: string; location?: string }, i: number) => ({
        id: this.generateStableId("exp", i, fileId),
        company: exp.company || "",
        role: exp.role || "",
        duration: exp.duration || "",
        description: exp.description || "",
        location: exp.location || "",
      }));
      
      // Use pre-detected type if we had high confidence, otherwise use AI response or fallback
      let cvType: "student" | "fresh_grad" | "researcher" | "professional";
      if (preDetectedType) {
        // We provided the type to AI, use it
        cvType = preDetectedType.cvType;
        console.log(`[ParseService] Using pre-detected cvType: ${cvType} (${preDetectedType.confidence}% confidence)`);
      } else if (parsed.cvType && parsed.cvType !== "") {
        // AI determined the type
        cvType = this.normalizeCVType(parsed.cvType);
        console.log(`[ParseService] Using AI-detected cvType: ${cvType}`);
      } else {
        // Fallback to old heuristic (shouldn't happen often)
        cvType = this.detectCVTypeLegacy(text, experiences);
        console.log(`[ParseService] AI omitted cvType, using legacy heuristic: ${cvType}`);
      }
      console.log(`[ParseService] AI extraction successful - found ${experiences.length} experiences, cvType: ${cvType}`);

      return {
        id: fileId,
        name: parsed.name || "",
        title: parsed.title || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        location: parsed.location || "",
        website: parsed.website || "",
        linkedin: parsed.linkedin || "",
        github: parsed.github || "",
        summary: parsed.summary || "",
        cvType,
        experience: experiences,
        education: (parsed.education || []).map((edu: { institution?: string; degree?: string; year?: string }, i: number) => ({
          id: this.generateStableId("edu", i, fileId),
          institution: edu.institution || "",
          degree: edu.degree || "",
          year: edu.year || "",
        })),
        certifications: (parsed.certifications || []).map((cert: { name?: string; issuer?: string; year?: string }, i: number) => ({
          id: this.generateStableId("cert", i, fileId),
          name: cert.name || "",
          issuer: cert.issuer || "",
          year: cert.year || "",
        })),
        skills: parsed.skills || [],
        strengths: parsed.strengths || [],
        originalFilename: "",
        uploadedAt: new Date(),
        rawText: text,
      };
    } catch (error) {
      console.error(`[ParseService] AI extraction failed:`, error);
      return null;
    }
  }

  private async parsePdfBuffer(buffer: Buffer): Promise<PdfParseResult> {
    const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
    const uint8 = new Uint8Array(buffer);
    
    const doc = await pdfjsLib.getDocument({ data: uint8 }).promise;
    
    let fullText = "";
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      
      type TextItem = { str: string; transform: number[]; width: number; height: number };
      const items = content.items as TextItem[];
      
      if (items.length === 0) continue;
      
      // Sort by Y position (descending = top to bottom), then X position
      const sorted = items
        .filter(item => item.str.trim().length > 0)
        .sort((a, b) => {
          const yA = a.transform[5];
          const yB = b.transform[5];
          // Group items within 5 units as same line
          if (Math.abs(yA - yB) > 5) return yB - yA;
          return a.transform[4] - b.transform[4];
        });
      
      let lastY: number | null = null;
      let lineText = "";
      
      for (const item of sorted) {
        const y = item.transform[5];
        
        if (lastY !== null && Math.abs(y - lastY) > 5) {
          // New line detected
          if (lineText.trim()) {
            fullText += lineText.trim() + "\n";
          }
          lineText = item.str;
        } else {
          // Same line - add space if needed
          if (lineText && !lineText.endsWith(" ") && !item.str.startsWith(" ")) {
            lineText += " ";
          }
          lineText += item.str;
        }
        lastY = y;
      }
      
      if (lineText.trim()) {
        fullText += lineText.trim() + "\n";
      }
      fullText += "\n"; // Page break
    }
    
    return {
      numpages: doc.numPages,
      text: fullText,
    };
  }

  private async parseDocxBuffer(buffer: Buffer): Promise<string> {
    const mammothModule = await import("mammoth");
    const mammoth = mammothModule.default ?? mammothModule;
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  }

  /**
   * Normalize CV type string from AI response to valid CVType
   */
  private normalizeCVType(cvType: string | undefined): "student" | "fresh_grad" | "researcher" | "professional" {
    if (!cvType) return "professional";
    const normalized = cvType.toLowerCase().trim();
    if (normalized === "student" || normalized.includes("student")) return "student";
    if (normalized === "fresh_grad" || normalized.includes("fresh") || normalized.includes("graduate")) return "fresh_grad";
    if (normalized === "researcher" || normalized.includes("research") || normalized.includes("phd") || normalized.includes("postdoc")) return "researcher";
    return "professional";
  }

  /**
   * Legacy CV type detection using regex-based heuristics
   * Used as fallback when AI parsing is unavailable and new module fails
   * @deprecated Use detectCVType from cv-type-detection.ts instead
   */
  private detectCVTypeLegacy(text: string, experience: { duration: string }[]): "student" | "fresh_grad" | "researcher" | "professional" {
    const lowerText = text.toLowerCase();
    
    // Check for researcher indicators (check first as researchers may also have student indicators)
    const researcherIndicators = [
      /\bphd\b|\bph\.?d\.?\b/i,
      /\bpostdoc(?:toral)?\b/i,
      /research\s+(?:fellow|scientist|assistant|associate)/i,
      /\bpublications?\b/i,
      /\bjournal\s+(?:article|paper)/i,
      /\bconference\s+(?:paper|proceeding)/i,
      /\bdissertation\b/i,
      /\bthesis\b/i,
      /principal\s+investigator/i,
      /\blab(?:oratory)?\s+(?:director|manager|head)/i,
      /academic\s+(?:position|role|career)/i,
    ];
    
    const hasResearcherIndicators = researcherIndicators.some(regex => regex.test(lowerText));
    
    // Check for student indicators
    const studentIndicators = [
      /currently\s+(?:enrolled|studying|pursuing)/i,
      /expected\s+graduation/i,
      /undergraduate|postgraduate/i,
      /(?:freshman|sophomore|junior|senior)\s+(?:year|student)/i,
      /gpa\s*[:;]\s*\d/i,
      /student\s+(?:at|of)/i,
      /pursuing\s+(?:a\s+)?(?:bachelor|master|degree)/i,
    ];
    
    const hasStudentIndicators = studentIndicators.some(regex => regex.test(lowerText));
    
    // Check for fresh grad indicators
    const freshGradIndicators = [
      /recent(?:ly)?\s+graduat/i,
      /new\s+graduat/i,
      /entry[\s-]level/i,
      /fresh\s+graduat/i,
      /class\s+of\s+202[3-5]/i,
      /graduated?\s+(?:in\s+)?202[3-5]/i,
    ];
    
    const hasFreshGradIndicators = freshGradIndicators.some(regex => regex.test(lowerText));
    
    // Calculate total experience duration
    let totalYears = 0;
    const currentYear = new Date().getFullYear();
    
    for (const exp of experience) {
      const duration = exp.duration || "";
      const yearMatch = duration.match(/(\d{4})\s*[-–—to]+\s*(?:(\d{4})|present|current|now)/i);
      if (yearMatch) {
        const startYear = parseInt(yearMatch[1]);
        const endYear = yearMatch[2] ? parseInt(yearMatch[2]) : currentYear;
        totalYears += Math.max(0, endYear - startYear);
      }
    }
    
    // Decision logic - researcher takes priority if indicators are strong
    if (hasResearcherIndicators) {
      return "researcher";
    }
    
    if (hasStudentIndicators && experience.length <= 2 && totalYears <= 1) {
      return "student";
    }
    
    if (hasFreshGradIndicators || (experience.length <= 2 && totalYears <= 2)) {
      return "fresh_grad";
    }
    
    if (totalYears >= 3 || experience.length >= 3) {
      return "professional";
    }
    
    // Default based on experience count
    if (experience.length === 0) return "student";
    if (experience.length <= 2) return "fresh_grad";
    return "professional";
  }

  private normalizeText(text: string): string {
    return text
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .replace(BULLET_CHARS, "-")
      .replace(DASHES, "-")
      .replace(MULTIPLE_SPACES, " ")
      .replace(MULTIPLE_NEWLINES, "\n\n")
      .trim();
  }

  private normalizeWhitespace(str: string): string {
    return str.replace(/\s+/g, " ").trim();
  }

  private generateStableId(prefix: string, index: number, fileId: string): string {
    return `${prefix}-${fileId}-${index}`;
  }

  private normalizeDateRange(dateStr: string): string {
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

  private normalizeEmail(email: string): string {
    return email.toLowerCase().trim();
  }

  private normalizePhone(phone: string): string {
    const cleaned = phone.replace(/[^\d+\-.\s()]/g, "").trim();
    return cleaned.replace(/\s+/g, " ");
  }

  private normalizeUrl(url: string): string {
    let normalized = url.trim().toLowerCase();
    normalized = normalized.replace(/^https?:\/\//, "");
    normalized = normalized.replace(/^www\./, "");
    normalized = normalized.replace(/\/$/, "");
    return normalized;
  }

  private normalizeSkills(skills: string[]): string[] {
    const seen = new Set<string>();
    const result: string[] = [];

    for (const skill of skills) {
      const normalized = this.normalizeWhitespace(skill);
      const key = normalized.toLowerCase();

      if (normalized.length >= 2 && normalized.length <= 50 && !seen.has(key)) {
        seen.add(key);
        result.push(normalized);
      }
    }

    return result.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }

  private extractEmail(text: string): string {
    const matches = text.match(EMAIL_REGEX);
    return matches ? this.normalizeEmail(matches[0]) : "";
  }

  private extractPhone(text: string): string {
    for (const pattern of PHONE_PATTERNS) {
      const matches = text.match(pattern);
      if (matches) {
        const phone = matches[0].trim();
        if (phone.length >= 8 && phone.length <= 20) {
          return this.normalizePhone(phone);
        }
      }
    }
    return "";
  }

  private extractLinkedIn(text: string): string {
    const match = text.match(LINKEDIN_REGEX);
    return match ? `linkedin.com/in/${match[1]}` : "";
  }

  private extractGithub(text: string): string {
    const match = text.match(GITHUB_REGEX);
    return match && match[1] !== "in" && match[1] !== "www" ? `github.com/${match[1]}` : "";
  }

  private extractWebsite(text: string): string {
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
      return filtered.length > 0 ? this.normalizeUrl(filtered[0]) : "";
    }
    return "";
  }

  private extractLocation(text: string): string {
    const patterns = [
      /(?:Location|Address|Based in|City):?\s*([A-Za-z\s,]+(?:,\s*[A-Za-z]+)?)/i,
      /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*(?:[A-Z]{2}|[A-Z][a-z]+))/,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const loc = this.normalizeWhitespace(match[1]);
        if (loc.length > 3 && loc.length < 50) {
          return loc;
        }
      }
    }
    return "";
  }

  private extractName(text: string): string {
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
          return this.normalizeWhitespace(line);
        }
      }
    }

    const namePattern = /^([A-Z][a-z]+\s+(?:[A-Z][a-z]+\s*)+)/m;
    const match = text.match(namePattern);
    return match ? this.normalizeWhitespace(match[1]) : "";
  }

  private extractTitle(text: string): string {
    const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    const name = this.extractName(text).toLowerCase();

    for (let i = 0; i < Math.min(lines.length, 10); i++) {
      const line = lines[i];
      const lineLower = line.toLowerCase();
      if (lineLower === name) continue;
      if (/@/.test(line) || /\d{3}/.test(line)) continue;

      if (TITLE_KEYWORDS.some(k => lineLower.includes(k))) {
        return this.normalizeWhitespace(line);
      }
    }
    return "";
  }

  private extractSummary(text: string): string {
    const sectionText = this.extractSection(text, "summary");

    if (sectionText) {
      const cleaned = sectionText
        .split("\n")
        .filter(l => l.trim().length > 0)
        .slice(0, 6)
        .join(" ");

      const summary = this.normalizeWhitespace(cleaned);
      if (summary.length > 30 && summary.length < 1500) {
        return summary;
      }
    }
    return "";
  }

  private extractExperience(text: string, fileId: string): Experience[] {
    const sectionText = this.extractSection(text, "experience");
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
          id: this.generateStableId("exp", experiences.length, fileId),
          role: this.normalizeWhitespace(currentRole),
          company: this.normalizeWhitespace(currentCompany),
          duration: this.normalizeDateRange(currentDuration),
          description: this.normalizeWhitespace(currentDescription.join(" ").substring(0, 500)),
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

  private extractEducation(text: string, fileId: string): Education[] {
    const sectionText = this.extractSection(text, "education");
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
        degrees.push(...matches.map(m => this.normalizeWhitespace(m)));
      }
    }

    for (const pattern of institutionPatterns) {
      const matches = textToProcess.match(pattern);
      if (matches) {
        institutions.push(...matches.map(m => this.normalizeWhitespace(m)));
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
          id: this.generateStableId("edu", i, fileId),
          degree: degrees[i] || "",
          institution: institutions[i] || "",
          year: years[i] || "",
        });
      }
    }

    return education;
  }

  private extractSkills(text: string): string[] {
    const sectionText = this.extractSection(text, "skills");
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

    return this.normalizeSkills(skills);
  }

  private extractCertifications(text: string, fileId: string): Certification[] {
    const sectionText = this.extractSection(text, "certifications");
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
            issuer = this.normalizeWhitespace(issuerMatch[1]);
            name = name.replace(issuerMatch[0], "").trim();
          }

          name = this.normalizeWhitespace(name.replace(/[-–—,]\s*$/, ""));
          const key = name.toLowerCase();

          if (name.length > 3 && !seen.has(key)) {
            seen.add(key);
            certifications.push({
              id: this.generateStableId("cert", certifications.length, fileId),
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
          const name = this.normalizeWhitespace(match);
          const key = name.toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            certifications.push({
              id: this.generateStableId("cert", certifications.length, fileId),
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

  private findSectionBoundaries(text: string): Map<string, { start: number; end: number }> {
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

  private extractSection(text: string, section: string): string {
    const boundaries = this.findSectionBoundaries(text);
    const bounds = boundaries.get(section);

    if (!bounds) return "";

    return text.substring(bounds.start, bounds.end).trim();
  }

  private validateAndNormalizeCV(cv: ParsedCV): ParsedCV {
    return {
      id: cv.id || this.generateStableId("cv", 0, Date.now().toString()),
      name: this.normalizeWhitespace(cv.name || ""),
      title: this.normalizeWhitespace(cv.title || ""),
      email: this.normalizeEmail(cv.email || ""),
      phone: this.normalizePhone(cv.phone || ""),
      location: this.normalizeWhitespace(cv.location || ""),
      website: cv.website ? this.normalizeUrl(cv.website) : "",
      linkedin: cv.linkedin ? this.normalizeUrl(cv.linkedin) : "",
      github: cv.github ? this.normalizeUrl(cv.github) : "",
      summary: this.normalizeWhitespace(cv.summary || ""),
      experience: this.normalizeExperience(cv.experience || [], cv.id),
      education: this.normalizeEducation(cv.education || [], cv.id),
      certifications: this.normalizeCertifications(cv.certifications || [], cv.id),
      skills: this.normalizeSkills(cv.skills || []),
      originalFilename: cv.originalFilename,
      mimeType: cv.mimeType,
      size: cv.size,
      uploadedAt: cv.uploadedAt,
      rawText: cv.rawText,
    };
  }

  private normalizeExperience(experiences: Experience[], fileId: string): Experience[] {
    return experiences.map((exp, index) => ({
      id: exp.id || this.generateStableId("exp", index, fileId),
      role: this.normalizeWhitespace(exp.role || ""),
      company: this.normalizeWhitespace(exp.company || ""),
      duration: this.normalizeDateRange(exp.duration || ""),
      description: this.normalizeWhitespace(exp.description || ""),
    })).filter(exp => exp.role || exp.company);
  }

  private normalizeEducation(education: Education[], fileId: string): Education[] {
    return education.map((edu, index) => ({
      id: edu.id || this.generateStableId("edu", index, fileId),
      degree: this.normalizeWhitespace(edu.degree || ""),
      institution: this.normalizeWhitespace(edu.institution || ""),
      year: edu.year?.trim() || "",
    })).filter(edu => edu.degree || edu.institution);
  }

  private normalizeCertifications(certs: Certification[], fileId: string): Certification[] {
    const seen = new Set<string>();

    return certs.map((cert, index) => ({
      id: cert.id || this.generateStableId("cert", index, fileId),
      name: this.normalizeWhitespace(cert.name || ""),
      issuer: this.normalizeWhitespace(cert.issuer || ""),
      year: cert.year?.trim() || "",
    })).filter(cert => {
      if (!cert.name) return false;
      const key = cert.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
}
