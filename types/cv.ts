export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

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
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: string[];
  originalFilename?: string;
  mimeType?: string;
  size?: number;
  uploadedAt?: Date;
  rawText?: string;
}

export interface CVFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "pending" | "processing" | "done" | "error";
  error?: string;
}

export type TemplateType = "modern-dark" | "classic-light" | "executive" | "minimal" | "creative" | "professional";
