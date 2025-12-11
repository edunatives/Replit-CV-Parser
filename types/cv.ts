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

export interface ColorScheme {
  id: string;
  name: string;
  primary: string;    // For name, section headers
  secondary: string;  // For subtitle, company names
}

export const COLOR_SCHEME_PRESETS: ColorScheme[] = [
  { id: "navy-blue", name: "Navy Blue", primary: "#1b4f72", secondary: "#2874a6" },
  { id: "dark-slate", name: "Dark Slate", primary: "#1a1a2e", secondary: "#4a4a6a" },
  { id: "forest-green", name: "Forest Green", primary: "#1e5631", secondary: "#2e7d32" },
  { id: "burgundy", name: "Burgundy", primary: "#6b1c23", secondary: "#922b3e" },
  { id: "charcoal", name: "Charcoal", primary: "#2d3436", secondary: "#636e72" },
  { id: "royal-purple", name: "Royal Purple", primary: "#4a148c", secondary: "#7b1fa2" },
  { id: "black-lightblue", name: "Black & Light Blue", primary: "#1a1a1a", secondary: "#0ea5e9" },
  { id: "black-purple", name: "Black & Purple", primary: "#1a1a1a", secondary: "#8b5cf6" },
];

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
  colorScheme?: ColorScheme;
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

export type TemplateType = "modern-dark" | "classic-light" | "executive" | "minimal" | "creative" | "professional" | "corporate" | "business" | "classic-underline";

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

// ============================================================================
// JD MATCH v2.2 - EXPERIENCE FACTORS + NATURE FIT (Student View)
// ============================================================================

export interface ExperienceFactorIssue {
  code: string; // H1-H9
  type: string;
  message: string; // Student-friendly encouraging message
  cv_value: string;
  jd_requirement: string;
  gap_severity: "minor" | "moderate" | "significant";
}

export interface NatureFitIssue {
  code: string; // G1-G9
  type: string;
  message: string; // Student-friendly encouraging message
  cv_nature: string;
  jd_expects: string;
  transferable: boolean;
}

export interface ExperienceYearsAnalysis {
  total_years: number;
  relevant_domain_years: number;
  recency_score: number; // 0-100
  meets_requirement: boolean;
  student_message: string;
}

export interface ExperienceDepthAnalysis {
  depth_level: "Entry" | "Developing" | "Proficient" | "Expert";
  scope_score: number; // 0-100
  impact_score: number; // 0-100
  complexity_handled: string;
  student_message: string;
}

export interface JDNature {
  role_level: "Junior" | "Mid" | "Senior" | "Lead" | "Staff" | "Principal" | "Director" | "VP" | "C-Level";
  domain_required: string;
  industry_preferred: string | null;
  education_required: string | null;
  years_required: number | null;
  work_arrangement: "Remote" | "On-site" | "Hybrid" | "Flexible" | null;
  company_stage: "Startup" | "Growth" | "Enterprise" | null;
}

export interface EnhancedJDMatchResult extends JDMatchResult {
  jd_nature?: JDNature;
  experience_factors?: {
    years_analysis: ExperienceYearsAnalysis;
    depth_analysis: ExperienceDepthAnalysis;
    issues: ExperienceFactorIssue[];
  };
  nature_fit?: {
    overall_fit: "Excellent" | "Good" | "Partial" | "Challenging";
    fit_score: number;
    issues: NatureFitIssue[];
    strengths: string[];
  };
  student_summary?: {
    headline: string;
    encouragement: string;
    quick_wins: string[];
  };
}

// ============================================================================
// FORENSIC ENGINE v2.11 TYPES
// ============================================================================

export interface AnalysisMetadata {
  cv_name: string;
  analysis_date: string;
  engine_version: string;
  professional_age_years: number;
  inferred_seniority: string;
}

export interface CVNature {
  education_nature: {
    field: string;
    field_specific: string;
    level: string;
    technical_degree: boolean;
    stem_degree: boolean;
    relevance_to_career: string;
  };
  domain_nature: {
    primary_domain: string;
    secondary_domains: string[];
    specialization: string;
    domain_depth: string;
  };
  industry_nature: {
    current_industry: string;
    industry_history: string[];
    industry_depth: string;
  };
  work_style_nature: {
    employment_pattern: string;
    work_arrangement: string;
    company_size_history: string;
    geographic_pattern: string;
  };
  career_path_nature: {
    trajectory: string;
    stability: string;
    gaps_present: boolean;
    career_stage: string;
    is_career_changer: boolean;
    pivot_from: string | null;
    pivot_to: string | null;
  };
  candidate_profile: {
    type: string;
    learning_style: string;
    risk_profile: string;
  };
}

export interface CategoryIssue {
  code: string;
  type: string;
  detail: string;
  severity: "critical" | "high" | "medium" | "low";
  location?: string;
  evidence?: string;
  skill?: string;
}

export interface ValidatedSkill {
  skill: string;
  level: number;
  raw_level: number;
  evidence: string[];
  penalty: string | null;
  cap_applied: boolean;
}

export interface ImpliedSkill {
  skill: string;
  level: number;
  reason: string;
}

export interface CategoryStrength {
  code: string;
  type: string;
  detail: string;
  evidence: string;
}

export interface CategoryScore {
  score: number;
  grade?: string;
  issues?: CategoryIssue[];
  validation_rate?: string;
  skills?: {
    validated: ValidatedSkill[];
    implied: ImpliedSkill[];
    ghost: string[];
  };
  strengths?: CategoryStrength[];
  metrics?: {
    avg_bullet_length_words?: number;
    technical_density?: string;
    repeated_words?: { word: string; count: number }[];
    readability?: string;
  };
}

export interface CategoryScores {
  A_ats_structure: CategoryScore;
  B_content_realism: CategoryScore;
  C_skill_validation: CategoryScore;
  D_strengths_discovery: CategoryScore;
  E_tone_clarity: CategoryScore;
  F_timeline_plausibility: CategoryScore;
  G_nature_fit: CategoryScore;
}

export interface UISection {
  name: string;
  code: string;
  score: number;
  status: "good" | "warning" | "critical";
  summary: string;
}

export interface UIStrength {
  code: string;
  icon: string;
  text: string;
}

export interface UIWeakness {
  code: string;
  icon: string;
  severity: "critical" | "high" | "medium" | "low";
  text: string;
}

export interface UIRecommendation {
  priority: "high" | "medium" | "low";
  icon: string;
  text: string;
  impact: string;
}

export interface UIHighlight {
  type: "achievement" | "skill" | "concern" | "gap" | "education";
  color: "green" | "blue" | "yellow" | "red" | "purple";
  text: string;
  source: string;
  note?: string;
}

export interface QuickStats {
  professionalYears: number;
  validatedSkills: number;
  ghostSkills: number;
  validationRate: number;
  quantificationRate: number;
  issueCount: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
}

export interface UIOutput {
  overallScore: number;
  level: "Exceptional" | "Strong" | "Good" | "Fair" | "Needs Work";
  inflation: boolean;
  verdict: string;
  sections: UISection[];
  strengths: UIStrength[];
  weaknesses: UIWeakness[];
  recommendations: UIRecommendation[];
  highlights: UIHighlight[];
  quickStats: QuickStats;
}

export interface QuickWin {
  action: string;
  impact: string;
  time: string;
  priority: "do_first" | "do_soon" | "do_later";
}

export interface StudentView {
  headline: string;
  overall_score: {
    score: number;
    grade: string;
    message: string;
  };
  your_strengths: {
    title: string;
    detail: string;
    icon: string;
  }[];
  your_background: {
    summary: string;
    unique_value: string;
    growth_areas: string[];
  };
  quick_wins: QuickWin[];
  category_feedback: {
    [key: string]: {
      score: number;
      summary: string;
      tips?: string[];
      validated_skills?: string[];
      skills_to_evidence?: string[];
      opportunities?: string[];
    };
  };
  improvement_roadmap: {
    this_week: { actions: string[]; projected_gain: number };
    this_month: { actions: string[]; projected_gain: number };
    long_term: { actions: string[]; projected_gain: number };
  };
  encouragement: string;
}

export interface HRView {
  executive_summary: {
    candidate_name: string;
    target_role: string;
    overall_assessment: string;
    recommendation: "Strong Recommend" | "Recommend" | "Consider" | "Do Not Recommend";
    confidence: number;
  };
  scores: {
    raw_score: number;
    risk_score: number;
    validation_rate: string;
    integrity_rating: string;
    nature_fit_score: number;
  };
  nature_fit_assessment: {
    overall_fit: string;
    education_match: { cv_has: string; role_expects: string; verdict: string; risk: string };
    domain_match: { cv_has: string; role_expects: string; verdict: string; risk: string };
    career_path_assessment: { trajectory: string; is_career_changer: boolean; stability: string; risk: string };
    verification_suggestions: string[];
  };
  risk_summary: {
    critical_flags: string[];
    high_flags: string[];
    medium_flags: string[];
    low_flags: string[];
    nature_flags: string[];
  };
  verification_suggestions: {
    area: string;
    question: string;
    why: string;
  }[];
  hiring_notes: string;
}

export interface RecommendedRewrite {
  type: "remove" | "evidence" | "add" | "reword";
  location: string;
  original: string;
  suggested: string;
  impact: string;
  related_codes: string[];
}

export interface ForensicAnalysisV211 {
  version: string;
  input: {
    cv_filename: string;
    jd_provided: boolean;
    jd_title: string | null;
  };
  analysis_metadata: AnalysisMetadata;
  cv_nature: CVNature;
  category_scores: CategoryScores;
  ui_output: UIOutput;
  reports: {
    student_view: StudentView;
    hr_view?: HRView;
  };
  recommended_rewrites: RecommendedRewrite[];
}
