import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import type { ParsedCV, Experience, Education, Certification } from "../../types/cv";

@Injectable()
export class OpenAIService {
  private openai: OpenAI | null = null;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY || process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    if (apiKey) {
      this.openai = new OpenAI({ apiKey });
    }
  }

  async extractWithAI(text: string, fileId: string): Promise<Partial<ParsedCV> | null> {
    if (!this.openai) {
      console.log("OpenAI not configured, skipping AI extraction");
      return null;
    }

    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a CV/resume parser. Extract structured information from the provided CV text. 
Return a JSON object with the following fields:
- name: string (full name)
- title: string (professional title/role)
- email: string
- phone: string
- location: string
- website: string (personal website if any)
- linkedin: string (LinkedIn profile URL)
- github: string (GitHub profile URL)
- summary: string (professional summary/objective)
- experience: array of {role, company, duration, description}
- education: array of {degree, institution, year}
- certifications: array of {name, issuer, year}
- skills: array of strings

Be precise and only include information that is clearly present in the CV.`
          },
          {
            role: "user",
            content: text.substring(0, 8000)
          }
        ],
        response_format: { type: "json_object" },
        temperature: 0.1,
        max_tokens: 2000,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) return null;

      const parsed = JSON.parse(content);
      
      const experience: Experience[] = (parsed.experience || []).map((exp: Record<string, string>, i: number) => ({
        id: `exp-${fileId}-${i}`,
        role: exp.role || "",
        company: exp.company || "",
        duration: exp.duration || "",
        description: exp.description || "",
      }));

      const education: Education[] = (parsed.education || []).map((edu: Record<string, string>, i: number) => ({
        id: `edu-${fileId}-${i}`,
        degree: edu.degree || "",
        institution: edu.institution || "",
        year: edu.year || "",
      }));

      const certifications: Certification[] = (parsed.certifications || []).map((cert: Record<string, string>, i: number) => ({
        id: `cert-${fileId}-${i}`,
        name: cert.name || "",
        issuer: cert.issuer || "",
        year: cert.year || "",
      }));

      return {
        name: parsed.name || "",
        title: parsed.title || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        location: parsed.location || "",
        website: parsed.website || "",
        linkedin: parsed.linkedin || "",
        github: parsed.github || "",
        summary: parsed.summary || "",
        experience,
        education,
        certifications,
        skills: Array.isArray(parsed.skills) ? parsed.skills : [],
      };
    } catch (error) {
      console.error("OpenAI extraction failed:", error);
      return null;
    }
  }

  isAvailable(): boolean {
    return this.openai !== null;
  }
}
