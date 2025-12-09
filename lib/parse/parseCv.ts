import type { ParsedCV } from "@/types/cv";

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

function extractEmail(text: string): string {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const matches = text.match(emailRegex);
  return matches ? matches[0] : "";
}

function extractPhone(text: string): string {
  const phonePatterns = [
    /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
    /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g,
    /\+\d{10,15}/g,
  ];
  
  for (const pattern of phonePatterns) {
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

function extractLinkedIn(text: string): string {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i,
    /linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i,
    /linkedin:?\s*:?\s*([a-zA-Z0-9_-]+)/i,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      return `linkedin.com/in/${match[1]}`;
    }
  }
  return "";
}

function extractGithub(text: string): string {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i,
    /github\.com\/([a-zA-Z0-9_-]+)/i,
    /github:?\s*:?\s*([a-zA-Z0-9_-]+)/i,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1] !== "in" && match[1] !== "www") {
      return `github.com/${match[1]}`;
    }
  }
  return "";
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
    return filtered.length > 0 ? filtered[0] : "";
  }
  return "";
}

function extractLocation(text: string): string {
  const locationPatterns = [
    /(?:Location|Address|Based in|City|Location:)\s*[:\-]?\s*([A-Za-z\s,]+(?:,\s*[A-Za-z]+)?)/i,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*(?:[A-Z]{2}|[A-Z][a-z]+))/,
    /(?:^|\n)([A-Z][a-z]+,\s*[A-Z][a-z]+)(?:\s|$|\n)/m,
  ];
  
  for (const pattern of locationPatterns) {
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

function extractName(text: string): string {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  
  for (const line of lines.slice(0, 8)) {
    if (line.length < 3 || line.length > 60) continue;
    if (/[@\d]/.test(line)) continue;
    if (/^(resume|cv|curriculum|vitae|profile|contact|email|phone|address)/i.test(line)) continue;
    if (/\.(com|org|net|edu)/i.test(line)) continue;
    
    const words = line.split(/\s+/).filter(w => w.length > 0);
    if (words.length >= 2 && words.length <= 5) {
      const allCapitalized = words.every(w => /^[A-Z]/.test(w));
      const noSymbols = words.every(w => /^[A-Za-z'-]+$/.test(w));
      if (allCapitalized && noSymbols) {
        return line;
      }
    }
  }
  
  const namePattern = /^([A-Z][a-z]+\s+(?:[A-Z][a-z]+\s*)+)/m;
  const match = text.match(namePattern);
  return match ? match[1].trim() : "";
}

function extractTitle(text: string): string {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  const name = extractName(text);
  
  const titleKeywords = [
    "engineer", "developer", "architect", "consultant", "manager", "analyst",
    "designer", "specialist", "director", "lead", "administrator", "coordinator",
    "executive", "officer", "scientist", "technician", "expert", "strategist"
  ];
  
  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const line = lines[i].toLowerCase();
    if (line === name.toLowerCase()) continue;
    if (/@/.test(line) || /\d{3}/.test(line)) continue;
    
    for (const keyword of titleKeywords) {
      if (line.includes(keyword)) {
        return lines[i];
      }
    }
  }
  
  const titlePatterns = [
    /(?:^|\n)([A-Za-z\s&\/]+(?:Engineer|Developer|Architect|Consultant|Manager|Analyst|Designer|Specialist|Director|Lead|Executive|Scientist))(?:\s|$|\n)/m,
  ];
  
  for (const pattern of titlePatterns) {
    const match = text.match(pattern);
    if (match && match[1] && match[1].trim().length > 5) {
      return match[1].trim();
    }
  }
  
  return "";
}

function extractSummary(text: string): string {
  const summaryPatterns = [
    /(?:summary|profile|about\s*me|objective|professional\s*summary|career\s*summary):?\s*\n?([\s\S]*?)(?=\n\s*(?:experience|education|skills|employment|work\s*history|professional\s*experience|projects|certifications|technical|core\s*competencies|$))/i,
  ];
  
  for (const pattern of summaryPatterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      let summary = match[1].trim();
      summary = summary.split("\n").filter(l => l.trim().length > 0).slice(0, 6).join(" ").trim();
      summary = summary.replace(/\s+/g, " ");
      if (summary.length > 30 && summary.length < 1500) {
        return summary;
      }
    }
  }
  return "";
}

function findSection(text: string, sectionNames: string[]): string {
  const pattern = new RegExp(
    `(?:^|\\n)\\s*(?:${sectionNames.join("|")})\\s*:?\\s*\\n([\\s\\S]*?)(?=\\n\\s*(?:experience|education|skills|projects|certifications|languages|references|work\\s*history|employment|professional|summary|profile|awards|publications|interests|hobbies|$))`,
    "i"
  );
  
  const match = text.match(pattern);
  return match ? match[1].trim() : "";
}

function extractExperience(text: string, fileId: string): ParsedCV["experience"] {
  const sectionText = findSection(text, [
    "experience", "work\\s*experience", "professional\\s*experience", 
    "employment", "work\\s*history", "career\\s*history"
  ]);
  
  if (!sectionText) {
    const altMatch = text.match(
      /(?:experience|employment|work\s*history):?\s*\n([\s\S]*?)(?=\n\s*(?:education|skills|projects|certifications|languages|references|$))/i
    );
    if (!altMatch) return [];
  }
  
  const textToProcess = sectionText || text;
  const experiences: ParsedCV["experience"] = [];
  
  const datePattern = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+)?\d{4}\s*[-–—to]+\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+)?\d{4}|(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+)?\d{4}\s*[-–—to]+\s*(?:Present|Current|Now)|Since\s+\d{4}|\d{4}\s*[-–]\s*\d{4}|\d{4}\s*[-–]\s*(?:Present|Current)/gi;
  
  const blocks = textToProcess.split(/\n(?=\s*[A-Z])/);
  let currentRole = "";
  let currentCompany = "";
  let currentDuration = "";
  let currentDescription: string[] = [];
  
  for (const block of blocks) {
    const lines = block.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    
    for (const line of lines) {
      const dateMatch = line.match(datePattern);
      
      const rolePatterns = [
        /^([A-Z][a-zA-Z\s&\/,]+(?:Engineer|Developer|Architect|Consultant|Manager|Analyst|Designer|Specialist|Director|Lead|Coordinator|Administrator|Executive|Intern|Officer|Scientist))/i,
        /^(Senior|Junior|Lead|Principal|Staff|Associate|Chief|Head|VP|Vice\s*President)[\s]+[A-Za-z\s]+/i,
      ];
      
      let isRole = false;
      for (const pattern of rolePatterns) {
        if (pattern.test(line)) {
          if (currentRole && (currentCompany || currentDescription.length > 0)) {
            experiences.push({
              id: `exp-${fileId}-${experiences.length}`,
              role: currentRole,
              company: currentCompany,
              duration: currentDuration,
              description: currentDescription.join(" ").substring(0, 500),
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
          /^([A-Z][A-Za-z\s&]+),?\s*(?:[A-Z][a-z]+,?\s*[A-Z]{0,2})?$/,
        ];
        
        let isCompany = false;
        if (!currentCompany) {
          for (const pattern of companyPatterns) {
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
      description: currentDescription.join(" ").substring(0, 500),
    });
  }
  
  if (experiences.length === 0) {
    const simplePattern = /([A-Z][a-zA-Z\s]+(?:Engineer|Developer|Manager|Analyst|Designer|Consultant|Architect|Director|Lead))\s*(?:at|@|[-–,])\s*([A-Za-z\s&,\.]+?)(?:\s*[|,]\s*|\s+)?(\d{4}\s*[-–]\s*(?:\d{4}|present|current))?/gi;
    
    let match;
    while ((match = simplePattern.exec(textToProcess)) !== null && experiences.length < 10) {
      experiences.push({
        id: `exp-${fileId}-${experiences.length}`,
        role: match[1]?.trim() || "",
        company: match[2]?.trim() || "",
        duration: match[3]?.trim() || "",
        description: "",
      });
    }
  }
  
  return experiences.slice(0, 15);
}

function extractEducation(text: string, fileId: string): ParsedCV["education"] {
  const sectionText = findSection(text, [
    "education", "academic", "qualifications", "educational\\s*background"
  ]);
  
  const textToProcess = sectionText || text;
  const education: ParsedCV["education"] = [];
  
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
      degrees.push(...matches.map(m => m.trim()));
    }
  }
  
  for (const pattern of institutionPatterns) {
    const matches = textToProcess.match(pattern);
    if (matches) {
      institutions.push(...matches.map(m => m.trim()));
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
        id: `edu-${fileId}-${i}`,
        degree: degrees[i] || "",
        institution: institutions[i] || "",
        year: years[i] || "",
      });
    }
  }
  
  return education;
}

function extractSkills(text: string): string[] {
  const sectionText = findSection(text, [
    "skills", "technical\\s*skills", "technologies", "competencies",
    "core\\s*competencies", "technical\\s*competencies", "expertise",
    "tools\\s*&\\s*technologies", "programming\\s*languages"
  ]);
  
  const skills: string[] = [];
  
  if (sectionText) {
    const lines = sectionText.split("\n").filter(l => l.trim().length > 0);
    
    for (const line of lines) {
      const items = line.split(/[,;•|·\u2022\u25CF\u25CB]/).map(s => s.trim());
      for (const item of items) {
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
    "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Ruby", "PHP", "Swift", "Kotlin",
    "React", "Vue", "Angular", "Next.js", "Node.js", "Express", "Django", "Flask", "Spring", "Laravel",
    "AWS", "Azure", "GCP", "Google Cloud", "Docker", "Kubernetes", "Git", "Linux", "Unix", "Windows Server",
    "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Oracle", "SQL Server",
    "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision",
    "Data Science", "Data Analysis", "Big Data", "Hadoop", "Spark",
    "Agile", "Scrum", "Kanban", "DevOps", "CI/CD", "Jenkins", "GitLab",
    "REST", "GraphQL", "API", "Microservices", "Serverless",
    "ITIL", "TOGAF", "Enterprise Architecture", "Business Architecture", "Solution Architecture",
    "Project Management", "Program Management", "PMO", "PRINCE2", "PMP",
    "Six Sigma", "Lean", "Kaizen", "Business Process", "BPM",
    "COBIT", "CISA", "CISSP", "Security", "Cybersecurity",
    "SAP", "Salesforce", "ServiceNow", "Jira", "Confluence",
    "Power BI", "Tableau", "Excel", "PowerPoint", "Visio",
    "HTML", "CSS", "SASS", "Tailwind", "Bootstrap",
    "Terraform", "Ansible", "Chef", "Puppet",
  ];
  
  for (const skill of commonSkills) {
    if (!skills.some(s => s.toLowerCase() === skill.toLowerCase())) {
      const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(text)) {
        skills.push(skill);
      }
    }
  }
  
  return skills.slice(0, 50);
}

function extractCertifications(text: string, fileId: string): ParsedCV["certifications"] {
  const sectionText = findSection(text, [
    "certifications?", "certificates?", "credentials?", "licenses?",
    "professional\\s*certifications?", "professional\\s*qualifications?"
  ]);
  
  const certifications: ParsedCV["certifications"] = [];
  
  if (sectionText) {
    const lines = sectionText.split("\n").filter(l => l.trim().length > 3);
    
    for (const line of lines) {
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
            year: yearMatch ? yearMatch[0] : "",
          });
        }
      }
    }
  }
  
  const certPatterns = [
    { pattern: /\b(TOGAF[\s\d.]*(?:Certified|Foundation|Practitioner)?)\b/gi, issuer: "The Open Group" },
    { pattern: /\b(IT4IT[\s\d.]*(?:Certified|Foundation)?)\b/gi, issuer: "The Open Group" },
    { pattern: /\b(ITIL[\s\d.v]*(?:Foundation|Practitioner|Expert|Master)?)\b/gi, issuer: "Axelos" },
    { pattern: /\b(PMP|Project Management Professional)\b/gi, issuer: "PMI" },
    { pattern: /\b(COBIT[\s\d.]*(?:Foundation)?)\b/gi, issuer: "ISACA" },
    { pattern: /\b(CISA|Certified Information Systems Auditor)\b/gi, issuer: "ISACA" },
    { pattern: /\b(CGEIT)\b/gi, issuer: "ISACA" },
    { pattern: /\b(CRISC)\b/gi, issuer: "ISACA" },
    { pattern: /\b(AWS[\s\w-]*(?:Certified|Architect|Developer|SysOps)?)\b/gi, issuer: "Amazon" },
    { pattern: /\b(Azure[\s\w-]*(?:Certified|Administrator|Developer)?)\b/gi, issuer: "Microsoft" },
    { pattern: /\b(Google Cloud[\s\w-]*(?:Certified)?)\b/gi, issuer: "Google" },
    { pattern: /\b(Lean[\s\w]*Six Sigma[\s\w]*(?:Green|Black|Yellow)?[\s\w]*Belt)\b/gi, issuer: "" },
    { pattern: /\b(Six Sigma[\s\w]*(?:Green|Black|Yellow)?[\s\w]*Belt)\b/gi, issuer: "" },
    { pattern: /\b(Kaizen[\s\w]*(?:Certified|Practitioner)?)\b/gi, issuer: "" },
    { pattern: /\b(Scrum[\s\w]*(?:Master|Owner|Developer)?)\b/gi, issuer: "" },
    { pattern: /\b(CSM|Certified Scrum Master)\b/gi, issuer: "Scrum Alliance" },
    { pattern: /\b(PSM[\s\w]*(?:I|II|III)?|Professional Scrum Master)\b/gi, issuer: "Scrum.org" },
    { pattern: /\b(PRINCE2[\s\w]*(?:Foundation|Practitioner)?)\b/gi, issuer: "Axelos" },
    { pattern: /\b(CISSP)\b/gi, issuer: "ISC2" },
    { pattern: /\b(CompTIA[\s\w]+)\b/gi, issuer: "CompTIA" },
  ];
  
  for (const { pattern, issuer } of certPatterns) {
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
      console.log(`Parsing PDF file: ${fileName}, buffer size: ${buffer.length}`);
      const data = await parsePdfBuffer(buffer);
      text = data.text;
      
      text = text
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]+/g, ' ')
        .trim();
      
      console.log(`PDF parsed successfully, extracted ${text.length} characters, ${data.numpages} pages`);
    } else if (extension === "docx" || extension === "doc") {
      console.log(`Parsing Word file: ${fileName}, buffer size: ${buffer.length}`);
      text = await parseDocxBuffer(buffer);
      console.log(`Word file parsed successfully, extracted ${text.length} characters`);
    } else {
      console.log(`Parsing text file: ${fileName}`);
      text = buffer.toString("utf-8");
    }
  } catch (error) {
    console.error(`Error parsing ${extension} file (${fileName}):`, error);
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
    certifications: extractCertifications(text, fileId),
    skills: extractSkills(text),
    originalFilename: fileName,
    uploadedAt: new Date(),
    rawText: text,
  };
  
  return { cv, rawText: text };
}
