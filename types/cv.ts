export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  location?: string;
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

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export type CVSection = "summary" | "experience" | "education" | "skills" | "certifications" | "strengths";

export const DEFAULT_SECTION_ORDER: CVSection[] = ["summary", "experience", "education", "skills", "certifications", "strengths"];

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
  strengths?: string[];
  sectionOrder?: CVSection[];
  originalFilename?: string;
  mimeType?: string;
  size?: number;
  uploadedAt?: Date;
  rawText?: string;
  tokenUsage?: TokenUsage;
}

export interface CVFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "pending" | "processing" | "done" | "error";
  error?: string;
}

export type TemplateType = "modern-dark" | "classic-light" | "executive" | "minimal" | "creative" | "professional" | "corporate" | "business";

// ============================================================================
// FORENSIC ASSESSMENT TYPES (v9.3)
// ============================================================================

export interface ForensicHighlight {
  snippet: string;
  type: "red" | "green" | "yellow";
  comment: string;
}

export interface ForensicSection {
  name: string;
  score: number;
  feedback: string;
}

export interface ForensicResult {
  score: number;
  level: "Exceptional" | "Strong" | "Good" | "Fair" | "Needs Work";
  inflation: boolean;
  sections: ForensicSection[];
  verdict: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

export interface AssessmentResult {
  overallScore: number;
  level: string;
  inflation: boolean;
  verdict: string;
  sections: ForensicSection[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  highlights: ForensicHighlight[];
}

// ============================================================================
// JD MATCH TYPES (v9.3)
// ============================================================================

export interface JDParsing {
  role_title: string;
  company: string;
  mandatory_skills: string[];
  nice_to_have_skills: string[];
}

export interface EvidenceMapEntry {
  jd_requirement: string;
  cv_evidence: string;
  status: "Match" | "Weak" | "Missing";
}

export interface MatchAnalysis {
  overall_match_score: number;
  verdict: "Excellent Match" | "Good Match" | "Partial Match" | "Limited Match";
  summary: string;
  matched_skills: string[];
  missing_skills: string[];
  experience_match: {
    score: number;
    feedback: string;
  };
  education_match: {
    score: number;
    feedback: string;
  };
  keyword_optimizations: string[];
  suggestions: string[];
}

export interface JDMatchResult {
  jd_parsing: JDParsing;
  match_analysis: MatchAnalysis;
  evidence_map: EvidenceMapEntry[];
}
