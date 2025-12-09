import type { ParsedCV } from "@/types/cv";
import OpenAI from "openai";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfParse = require("pdf-parse");
// eslint-disable-next-line @typescript-eslint/no-require-imports  
const mammoth = require("mammoth");

function getOpenAIClient(): OpenAI | null {
  const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
  const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
  
  if (!apiKey || !baseURL) {
    return null;
  }
  
  return new OpenAI({ apiKey, baseURL });
}

interface AIExtractedData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Array<{
    role: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
  skills: string[];
}

async function extractWithAI(text: string): Promise<AIExtractedData | null> {
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
          content: `You are an expert CV/resume parser. The text may come from a PDF and might have unusual formatting, missing spaces, or jumbled sections due to PDF text extraction. Be thorough and intelligent about parsing.

Extract ALL structured information and return a valid JSON object with these fields:
- name: Full name of the candidate (usually at the top)
- title: Current or most recent job title/position
- email: Email address (look for @ symbol)
- phone: Phone number (include country code if present, look for patterns like +XX, (XXX), etc.)
- location: City, Country or full location
- website: Personal website URL (not LinkedIn or GitHub)
- linkedin: LinkedIn profile URL or username
- github: GitHub profile URL or username
- summary: Professional summary, profile, or objective section (keep full text, up to 1000 characters)
- experience: Array of ALL jobs/positions found with {role, company, duration, description}. Extract EVERY job listed, not just recent ones. Include bullet points as description. Duration should be in format like "Jan 2020 - Present" or "2018 - 2022".
- education: Array of ALL educational qualifications with {degree, institution, year}. Include degrees, diplomas, courses.
- certifications: Array of ALL certifications, licenses, and professional credentials with {name, issuer, year}. Look for: TOGAF, ITIL, PMP, AWS, Azure, COBIT, CISA, CGEIT, Scrum, Six Sigma, Lean, Kaizen, Prince2, CISSP, etc.
- skills: Array of ALL technical and professional skills mentioned (extract ALL, do not limit). Look for skills sections, but also extract skills mentioned in job descriptions.

CRITICAL INSTRUCTIONS:
1. Extract EVERYTHING - do not limit or truncate any arrays
2. If text seems jumbled, use context to understand sections
3. Look for section headers like "Experience", "Work History", "Education", "Skills", "Certifications" even if formatting is off
4. For experience descriptions, combine multiple lines/bullets into the description field
5. If a field cannot be found, use empty string or empty array
6. Return ONLY valid JSON, no markdown code blocks`
        },
        {
          role: "user",
          content: text.slice(0, 30000)
        }
      ],
      temperature: 0.1,
      max_tokens: 8000,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) return null;

    const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned) as AIExtractedData;
  } catch (error) {
    console.error("AI extraction failed:", error);
    return null;
  }
}

function extractEmail(text: string): string {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const matches = text.match(emailRegex);
  return matches ? matches[0] : "";
}

function extractPhone(text: string): string {
  const phoneRegex = /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g;
  const matches = text.match(phoneRegex);
  return matches ? matches[0] : "";
}

function extractLinkedIn(text: string): string {
  const linkedinRegex = /(?:linkedin\.com\/in\/|linkedin:?\s*)([a-zA-Z0-9_-]+)/i;
  const matches = text.match(linkedinRegex);
  return matches ? `linkedin.com/in/${matches[1]}` : "";
}

function extractGithub(text: string): string {
  const githubRegex = /(?:github\.com\/|github:?\s*)([a-zA-Z0-9_-]+)/i;
  const matches = text.match(githubRegex);
  return matches ? `github.com/${matches[1]}` : "";
}

function extractWebsite(text: string): string {
  const websiteRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;
  const matches = text.match(websiteRegex);
  if (matches) {
    const filtered = matches.filter(m => 
      !m.includes("linkedin.com") && 
      !m.includes("github.com") &&
      !m.includes("@")
    );
    return filtered.length > 0 ? filtered[0] : "";
  }
  return "";
}

function extractLocation(text: string): string {
  const locationPatterns = [
    /(?:Location|Address|Based in|City):?\s*([A-Za-z\s,]+(?:,\s*[A-Z]{2})?)/i,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*[A-Z]{2})/,
  ];
  
  for (const pattern of locationPatterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }
  return "";
}

function extractName(text: string): string {
  const lines = text.split("\n").filter(l => l.trim());
  for (const line of lines.slice(0, 5)) {
    const trimmed = line.trim();
    if (trimmed.length > 2 && trimmed.length < 50) {
      if (!/[@\d]/.test(trimmed) && !/^(resume|cv|curriculum|vitae)/i.test(trimmed)) {
        const words = trimmed.split(/\s+/);
        if (words.length >= 2 && words.length <= 4) {
          const allCapitalized = words.every(w => /^[A-Z]/.test(w));
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

function extractTitle(text: string): string {
  const titlePatterns = [
    /(?:title|position|role):?\s*([^\n]+)/i,
    /(?:senior|junior|lead|principal|staff)?\s*(?:software|web|full[- ]?stack|front[- ]?end|back[- ]?end|data|ml|devops|cloud|systems?)\s*(?:engineer|developer|scientist|architect|analyst)/i,
    /(?:product|project|program)\s*manager/i,
    /(?:ui|ux|ui\/ux|product)\s*designer/i,
  ];
  
  for (const pattern of titlePatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[1]?.trim() || match[0].trim();
    }
  }
  return "";
}

function extractSummary(text: string): string {
  const summaryPatterns = [
    /(?:summary|profile|about|objective):?\s*\n?([\s\S]*?)(?=\n\s*(?:experience|education|skills|employment|work|projects|certifications|$))/i,
  ];
  
  for (const pattern of summaryPatterns) {
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

function extractExperience(text: string, fileId: string): ParsedCV["experience"] {
  const experienceSection = text.match(
    /(?:experience|employment|work\s*history):?\s*\n([\s\S]*?)(?=\n\s*(?:education|skills|projects|certifications|languages|references|$))/i
  );
  
  if (!experienceSection) return [];
  
  const sectionText = experienceSection[1];
  const experiences: ParsedCV["experience"] = [];
  
  const jobPattern = /([A-Z][a-zA-Z\s,]+(?:Engineer|Developer|Manager|Designer|Analyst|Consultant|Specialist|Director|Lead|Coordinator|Administrator|Executive|Intern)[\w\s]*)\s*(?:at|@|[-–])\s*([A-Za-z\s&,\.]+?)(?:\s*[|,]\s*|\s+)?(?:(\d{4}\s*[-–]\s*(?:\d{4}|present|current)|\w+\s+\d{4}\s*[-–]\s*(?:\w+\s+\d{4}|present|current)))?/gi;
  
  let match;
  let count = 0;
  while ((match = jobPattern.exec(sectionText)) !== null && count < 5) {
    experiences.push({
      id: `exp-${fileId}-${count}`,
      role: match[1]?.trim() || "Role",
      company: match[2]?.trim() || "Company",
      duration: match[3]?.trim() || "",
      description: "",
    });
    count++;
  }
  
  if (experiences.length === 0) {
    const lines = sectionText.split("\n").filter(l => l.trim().length > 0);
    for (let i = 0; i < Math.min(lines.length, 2); i++) {
      experiences.push({
        id: `exp-${fileId}-${i}`,
        role: lines[i]?.trim().slice(0, 50) || "Position",
        company: lines[i + 1]?.trim().slice(0, 50) || "",
        duration: "",
        description: "",
      });
    }
  }
  
  return experiences;
}

function extractEducation(text: string, fileId: string): ParsedCV["education"] {
  const educationSection = text.match(
    /(?:education|academic|qualifications):?\s*\n([\s\S]*?)(?=\n\s*(?:experience|skills|projects|certifications|work|employment|$))/i
  );
  
  if (!educationSection) return [];
  
  const sectionText = educationSection[1];
  const education: ParsedCV["education"] = [];
  
  const degreePattern = /((?:B\.?S\.?|M\.?S\.?|Ph\.?D\.?|Bachelor|Master|Doctor|Associate|MBA|B\.?A\.?|M\.?A\.?)[^,\n]*)/gi;
  const yearPattern = /(\d{4})/g;
  const institutionPattern = /(?:University|College|Institute|School|Academy)[^\n,]*/gi;
  
  const degrees = sectionText.match(degreePattern) || [];
  const institutions = sectionText.match(institutionPattern) || [];
  const years = sectionText.match(yearPattern) || [];
  
  for (let i = 0; i < Math.max(degrees.length, institutions.length, 1); i++) {
    if (i >= 3) break;
    education.push({
      id: `edu-${fileId}-${i}`,
      degree: degrees[i]?.trim() || "",
      institution: institutions[i]?.trim() || "",
      year: years[i] || "",
    });
  }
  
  return education.filter(e => e.degree || e.institution);
}

function extractSkills(text: string): string[] {
  const skillsSection = text.match(
    /(?:skills|technologies|technical\s*skills|competencies):?\s*\n?([\s\S]*?)(?=\n\s*(?:experience|education|projects|certifications|languages|references|$))/i
  );
  
  if (skillsSection) {
    const sectionText = skillsSection[1];
    const skillsList = sectionText
      .split(/[,\n•|·]/)
      .map(s => s.trim())
      .filter(s => s.length > 1 && s.length < 50 && !/^\d+$/.test(s));
    
    if (skillsList.length > 0) {
      return skillsList;
    }
  }
  
  const commonSkills = [
    "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Ruby", "PHP",
    "React", "Vue", "Angular", "Node.js", "Express", "Django", "Flask", "Spring",
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git", "Linux", "SQL", "MongoDB",
    "Machine Learning", "Data Science", "Agile", "Scrum", "REST", "GraphQL",
    "ITSM", "ITIL", "Enterprise Architecture", "Business Architecture", "TOGAF",
  ];
  
  const foundSkills = commonSkills.filter(skill => 
    new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text)
  );
  
  return foundSkills;
}

function extractCertifications(text: string, fileId: string): ParsedCV["certifications"] {
  const certSection = text.match(
    /(?:certifications?|certificates?|credentials?|licenses?|professional\s*qualifications?):?\s*\n([\s\S]*?)(?=\n\s*(?:experience|education|skills|projects|languages|references|work|employment|$))/i
  );
  
  const certifications: ParsedCV["certifications"] = [];
  
  if (certSection) {
    const sectionText = certSection[1];
    const lines = sectionText.split("\n").filter(l => l.trim().length > 3);
    
    for (let i = 0; i < lines.length && certifications.length < 20; i++) {
      const line = lines[i].trim();
      if (line.length > 5 && line.length < 150) {
        const yearMatch = line.match(/(\d{4})/);
        certifications.push({
          id: `cert-${fileId}-${i}`,
          name: line.replace(/\d{4}/, "").trim(),
          issuer: "",
          year: yearMatch ? yearMatch[1] : "",
        });
      }
    }
  }
  
  const certPatterns = [
    /\b(TOGAF[\s\d.]*(?:Certified)?)\b/gi,
    /\b(IT4IT[\s\d.]*(?:Certified)?)\b/gi,
    /\b(ITIL[\s\d.v]*(?:Foundation|Practitioner|Expert)?)\b/gi,
    /\b(PMP|Project Management Professional)\b/gi,
    /\b(COBIT[\s\d.]*(?:Foundation)?)\b/gi,
    /\b(CISA|Certified Information Systems Auditor)\b/gi,
    /\b(CGEIT)\b/gi,
    /\b(AWS[\s\w-]*(?:Certified|Architect|Developer)?)\b/gi,
    /\b(Azure[\s\w-]*(?:Certified)?)\b/gi,
    /\b(Lean[\s\w]*(?:Six Sigma)?)\b/gi,
    /\b(Kaizen[\s\w]*(?:Certified)?)\b/gi,
    /\b(Scrum[\s\w]*(?:Master|Owner)?)\b/gi,
  ];
  
  for (const pattern of certPatterns) {
    const matches = text.match(pattern);
    if (matches) {
      for (const match of matches) {
        const exists = certifications.some(c => 
          c.name.toLowerCase().includes(match.toLowerCase()) || 
          match.toLowerCase().includes(c.name.toLowerCase())
        );
        if (!exists) {
          certifications.push({
            id: `cert-${fileId}-${certifications.length}`,
            name: match.trim(),
            issuer: "",
            year: "",
          });
        }
      }
    }
  }
  
  return certifications;
}

export async function parseCV(buffer: Buffer, fileName: string, fileId: string): Promise<{ cv: ParsedCV; rawText: string }> {
  let text = "";
  
  const extension = fileName.toLowerCase().split(".").pop();
  
  try {
    if (extension === "pdf") {
      console.log(`Parsing PDF file: ${fileName}, buffer size: ${buffer.length}`);
      const data = await pdfParse(buffer, {
        max: 0,
      });
      text = data.text;
      
      text = text
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]+/g, ' ')
        .trim();
      
      console.log(`PDF parsed successfully, extracted ${text.length} characters, ${data.numpages} pages`);
      console.log(`First 500 chars of extracted text: ${text.substring(0, 500)}`);
    } else if (extension === "docx" || extension === "doc") {
      console.log(`Parsing Word file: ${fileName}, buffer size: ${buffer.length}`);
      const result = await mammoth.extractRawText({ buffer });
      text = result.value;
      console.log(`Word file parsed successfully, extracted ${text.length} characters`);
    } else {
      console.log(`Parsing text file: ${fileName}`);
      text = buffer.toString("utf-8");
    }
  } catch (error) {
    console.error(`Error parsing ${extension} file (${fileName}):`, error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    text = buffer.toString("utf-8");
  }
  
  const aiData = await extractWithAI(text);
  
  let cv: ParsedCV;
  
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
      experience: aiData.experience?.map((exp, i) => ({
        id: `exp-${fileId}-${i}`,
        role: exp.role,
        company: exp.company,
        duration: exp.duration,
        description: exp.description,
      })) || extractExperience(text, fileId),
      education: aiData.education?.map((edu, i) => ({
        id: `edu-${fileId}-${i}`,
        degree: edu.degree,
        institution: edu.institution,
        year: edu.year,
      })) || extractEducation(text, fileId),
      certifications: aiData.certifications?.map((cert, i) => ({
        id: `cert-${fileId}-${i}`,
        name: cert.name,
        issuer: cert.issuer,
        year: cert.year,
      })) || extractCertifications(text, fileId),
      skills: aiData.skills || extractSkills(text),
      originalFilename: fileName,
      uploadedAt: new Date(),
      rawText: text,
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
      certifications: extractCertifications(text, fileId),
      skills: extractSkills(text),
      originalFilename: fileName,
      uploadedAt: new Date(),
      rawText: text,
    };
  }
  
  return { cv, rawText: text };
}
