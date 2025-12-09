import * as mammoth from "mammoth";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export interface ParsedCV {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  education: {
    id: string;
    institution: string;
    degree: string;
    year: string;
  }[];
  skills: string[];
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
      .filter(s => s.length > 1 && s.length < 30 && !/^\d+$/.test(s));
    
    if (skillsList.length > 0) {
      return skillsList.slice(0, 15);
    }
  }
  
  const commonSkills = [
    "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Ruby", "PHP",
    "React", "Vue", "Angular", "Node.js", "Express", "Django", "Flask", "Spring",
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git", "Linux", "SQL", "MongoDB",
    "Machine Learning", "Data Science", "Agile", "Scrum", "REST", "GraphQL",
  ];
  
  const foundSkills = commonSkills.filter(skill => 
    new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text)
  );
  
  return foundSkills.slice(0, 12);
}

export async function parseCV(buffer: Buffer, fileName: string, fileId: string): Promise<{ cv: ParsedCV; rawText: string }> {
  let text = "";
  
  const extension = fileName.toLowerCase().split(".").pop();
  
  try {
    if (extension === "pdf") {
      const data = await pdf(buffer);
      text = data.text;
    } else if (extension === "docx" || extension === "doc") {
      const result = await mammoth.extractRawText({ buffer });
      text = result.value;
    } else {
      text = buffer.toString("utf-8");
    }
  } catch (error) {
    console.error("Error parsing file:", error);
    text = buffer.toString("utf-8");
  }
  
  const cv: ParsedCV = {
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
  };
  
  return { cv, rawText: text };
}
