/**
 * CV Type Detection Module
 * Pre-LLM detection of CV type: student | fresh_grad | researcher | professional
 * 
 * @version 1.0.0
 * @author EduNatives
 * 
 * Usage:
 *   import { detectCVType, getCVType } from './cv-type-detection';
 *   
 *   const result = detectCVType(cvText);
 *   console.log(result.cvType);      // "researcher"
 *   console.log(result.confidence);  // 80
 *   console.log(result.reason);      // "PhD holder, 3 publications..."
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

export const HIGH_CONFIDENCE_THRESHOLD = 70;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * CV Type - matches Replit schema
 */
export type CVType = 'student' | 'fresh_grad' | 'researcher' | 'professional';

/**
 * Detection signals extracted from CV
 */
export interface DetectionSignals {
  // Education signals
  isCurrentlyEnrolled: boolean;
  graduationYear: number | null;
  yearsSinceGraduation: number | null;
  highestDegree: 'high_school' | 'bachelors' | 'masters' | 'phd' | 'postdoc' | null;
  hasGPA: boolean;
  hasCoursework: boolean;
  
  // Experience signals
  totalYearsExperience: number;
  hasFullTimeRoles: boolean;
  hasOnlyInternships: boolean;
  roleCount: number;
  
  // Research signals
  isPhDCandidate: boolean;
  isPostdoc: boolean;
  isResearchFellow: boolean;
  hasAcademicRole: boolean;
  hasPublications: boolean;
  publicationIndicators: number;
  hasResearchFocus: boolean;
  hasResearchAssistantRole: boolean;
  hasGrants: boolean;
}

/**
 * Complete detection result
 */
export interface CVTypeResult {
  cvType: CVType;
  confidence: number;
  reason: string;
  signals: DetectionSignals;
  scores: {
    student: number;
    fresh_grad: number;
    researcher: number;
    professional: number;
  };
  alternativeType: {
    type: CVType;
    confidence: number;
  } | null;
}

// ============================================================================
// KEYWORD DICTIONARIES
// ============================================================================

const STUDENT_KEYWORDS = [
  'student', 'undergraduate', 'pursuing', 'expected graduation', 'anticipated',
  'candidate for', 'currently enrolled', 'class of', 'freshman', 'sophomore',
  'junior', 'senior year', 'coursework', 'gpa', 'dean\'s list', 'honors student'
];

const RESEARCH_KEYWORDS = [
  'phd', 'ph.d', 'doctoral', 'dissertation', 'postdoc', 'postdoctoral',
  'research fellow', 'research assistant', 'research associate', 'researcher',
  'principal investigator', 'pi', 'co-pi', 'publications', 'published',
  'peer-reviewed', 'journal', 'conference paper', 'proceedings',
  'citations', 'h-index', 'grant', 'nsf', 'nih', 'lab', 'laboratory',
  'professor', 'lecturer', 'faculty', 'tenure', 'academic'
];

const INTERNSHIP_KEYWORDS = [
  'intern', 'internship', 'co-op', 'summer analyst', 'summer associate',
  'trainee', 'apprentice', 'placement', 'work experience'
];

const PROFESSIONAL_TITLE_PATTERNS: RegExp[] = [
  /\b(senior|lead|principal|staff|manager|director|head|chief|vp|president)\s+\w+/i,
  /\b(software|data|product|project|program|business|sales|marketing)\s+(engineer|manager|analyst|director)/i,
  /\b(ceo|cto|cfo|coo|cio)\b/i,
];

// ============================================================================
// SIGNAL EXTRACTION FUNCTIONS
// ============================================================================

/**
 * Count keyword matches in text
 */
function countKeywords(text: string, keywords: string[]): number {
  const lowerText = text.toLowerCase();
  return keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length;
}

/**
 * Extract graduation year from text
 */
function extractGraduationYear(text: string): number | null {
  const currentYear = new Date().getFullYear();
  
  const patterns = [
    // "Expected May 2025", "Anticipated graduation December 2024"
    /(?:expected|anticipated|graduating?)\s*(?:in\s*)?(?:may|june|dec|january|spring|fall|summer|winter|december|august)?\s*,?\s*(\d{4})/i,
    // "Class of 2024", "Class of '24"
    /class of\s*['"]?(\d{4}|\d{2})/i,
    // "Ph.D. Dec. 2017", "PhD 2020"
    /ph\.?d\.?\s*(?:dec\.?|december|may|june|august)?\s*(\d{4})/i,
    // "- Ph.D. Dec. 2017"
    /[-]\s*ph\.?d\.?\s*(?:dec\.?)?\s*(\d{4})/i,
    // "M.S. 2018", "B.S. 2016"
    /[bm]\.?s\.?\s*(?:in\s+\w+\s+)?(\d{4})/i,
    // "Graduated 2020", "Graduation: 2021"
    /graduat(?:ed|ion)[:.]?\s*(\d{4})/i,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      let year = parseInt(match[1]);
      if (year < 100) year += 2000; // '24 -> 2024
      if (year >= 1980 && year <= currentYear + 10) {
        return year;
      }
    }
  }
  
  return null;
}

/**
 * Extract years of experience from text
 */
function extractYearsExperience(text: string): number {
  const patterns = [
    // "10+ years of experience", "15 years experience"
    /(\d+)\+?\s*years?\s*(?:of\s*)?(?:experience|expertise)/i,
    // "over 10 years", "more than 8 years"
    /(?:over|more than)\s*(\d+)\s*years/i,
    // "8 years of academic lab experience"
    /(\d+)\s*years?\s*(?:of\s*)?(?:academic|professional|industry|work)/i,
    // "5 years in software development"
    /(\d+)\s*years?\s*(?:in|of|working)/i,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      return parseInt(match[1]);
    }
  }
  
  return 0;
}

/**
 * Count number of roles/positions by date patterns
 */
function countRoles(text: string): number {
  // Match date range patterns like "Jun 2020 - Present", "2018 - 2020"
  const datePatterns = [
    /(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{4}\s*[-\u2013\u2014]\s*(?:present|current|now|\d{4}|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/gi,
    /\d{4}\s*[-\u2013\u2014]\s*(?:present|current|now|\d{4})/gi,
    /\d{1,2}\/\d{4}\s*[-\u2013\u2014]\s*(?:present|current|\d{1,2}\/\d{4})/gi,
  ];
  
  let maxCount = 0;
  for (const pattern of datePatterns) {
    const matches = text.match(pattern);
    if (matches) {
      maxCount = Math.max(maxCount, matches.length);
    }
  }
  
  return maxCount;
}

/**
 * Detect highest degree level
 */
function detectHighestDegree(text: string): DetectionSignals['highestDegree'] {
  const lowerText = text.toLowerCase();
  
  if (/\b(postdoc|post-doc|postdoctoral)\b/.test(lowerText)) return 'postdoc';
  if (/\b(ph\.?d|doctorate|doctoral)\b/.test(lowerText)) return 'phd';
  if (/\b(master|m\.?s\.?|m\.?a\.?|mba|m\.?eng|m\.?sc)\b/.test(lowerText)) return 'masters';
  if (/\b(bachelor|b\.?s\.?|b\.?a\.?|b\.?eng|b\.?sc|undergraduate degree)\b/.test(lowerText)) return 'bachelors';
  if (/\b(high school|diploma|ged|secondary school)\b/.test(lowerText)) return 'high_school';
  
  return null;
}

/**
 * Count publication indicators
 */
function countPublicationIndicators(text: string): number {
  const indicators = [
    /\bet al\.\b/gi,                    // "et al."
    /\(\d{4}\)/g,                       // (2023) year citations
    /\bjournal of\b/gi,                 // Journal of...
    /\bproceedings of\b/gi,             // Proceedings of...
    /\bdoi:/gi,                         // DOI references
    /\barxiv\b/gi,                      // arXiv
    /\bieee\b|\bacm\b|\bspringer\b/gi,  // Publishers
    /\bnature\b|\bscience\b/gi,         // Top journals
    /\bbiophys\b|\bplos\b/gi,           // Other journals
    /\bacta cryst/gi,                   // Crystallography
  ];
  
  let count = 0;
  for (const pattern of indicators) {
    const matches = text.match(pattern);
    if (matches) count += matches.length;
  }
  
  return count;
}

/**
 * Check if has only internship experience (no full-time roles)
 */
function hasOnlyInternshipExperience(text: string, roleCount: number): boolean {
  const hasInternship = INTERNSHIP_KEYWORDS.some(kw => 
    text.toLowerCase().includes(kw.toLowerCase())
  );
  
  const hasProfessionalTitle = PROFESSIONAL_TITLE_PATTERNS.some(p => p.test(text));
  const hasFullTimeIndicator = /full.?time|permanent position|employed at/i.test(text);
  
  // Also check for research roles which are not internships
  const hasResearchRole = /research assistant|research associate|research scientist/i.test(text);
  
  return hasInternship && !hasProfessionalTitle && !hasFullTimeIndicator && !hasResearchRole && roleCount <= 2;
}

/**
 * Check for full-time/professional roles
 */
function hasFullTimeRolesCheck(text: string): boolean {
  // Check for professional title patterns
  if (PROFESSIONAL_TITLE_PATTERNS.some(p => p.test(text))) {
    return true;
  }
  
  // Check for explicit full-time indicators
  if (/full.?time|permanent|staff\s+(?:engineer|scientist|analyst)/i.test(text)) {
    return true;
  }
  
  return false;
}

// ============================================================================
// MAIN DETECTION FUNCTION
// ============================================================================

/**
 * Detect CV type from text
 * @param cvText - The full CV text content
 * @returns CVTypeResult with type, confidence, reason, and signals
 */
export function detectCVType(cvText: string): CVTypeResult {
  const currentYear = new Date().getFullYear();
  
  // ============================================
  // EXTRACT ALL SIGNALS
  // ============================================
  
  const graduationYear = extractGraduationYear(cvText);
  const yearsSinceGraduation = graduationYear ? currentYear - graduationYear : null;
  const roleCount = countRoles(cvText);
  
  const signals: DetectionSignals = {
    // Education signals
    isCurrentlyEnrolled: /currently enrolled|pursuing|expected|anticipated graduation|candidate for degree/i.test(cvText),
    graduationYear,
    yearsSinceGraduation,
    highestDegree: detectHighestDegree(cvText),
    hasGPA: /\bgpa\b|grade point average/i.test(cvText),
    hasCoursework: /relevant coursework|courses:|coursework:/i.test(cvText),
    
    // Experience signals
    totalYearsExperience: extractYearsExperience(cvText),
    hasFullTimeRoles: hasFullTimeRolesCheck(cvText),
    hasOnlyInternships: hasOnlyInternshipExperience(cvText, roleCount),
    roleCount,
    
    // Research signals
    isPhDCandidate: /ph\.?d\.?\s*(?:candidate|student)|doctoral\s*(?:candidate|student)/i.test(cvText),
    isPostdoc: /postdoc|post-doc|postdoctoral/i.test(cvText),
    isResearchFellow: /research fellow|research associate/i.test(cvText),
    hasAcademicRole: /professor|lecturer|faculty|tenure|teaching assistant|instructor/i.test(cvText),
    hasPublications: /\bpublications?\b|published|peer-reviewed|journal article/i.test(cvText),
    publicationIndicators: countPublicationIndicators(cvText),
    hasResearchFocus: countKeywords(cvText, RESEARCH_KEYWORDS) >= 3,
    hasResearchAssistantRole: /research assistant/i.test(cvText),
    hasGrants: /\bgrant\b|nsf|nih|fellowship|principal investigator|\bpi\b/i.test(cvText),
  };
  
  // Estimate years if not explicitly stated
  if (signals.totalYearsExperience === 0) {
    // Try to estimate from graduation year
    if (yearsSinceGraduation && yearsSinceGraduation > 0) {
      signals.totalYearsExperience = Math.min(yearsSinceGraduation, 20);
    } 
    // Or from role count (rough estimate: 2 years per role)
    else if (roleCount > 0) {
      signals.totalYearsExperience = Math.min(roleCount * 2, 15);
    }
  }
  
  // ============================================
  // CALCULATE SCORES
  // ============================================
  
  const scores = {
    student: 0,
    fresh_grad: 0,
    researcher: 0,
    professional: 0
  };
  
  // ----- STUDENT SCORING -----
  // Criteria: Currently enrolled, no or only internship/part-time experience
  
  if (signals.isCurrentlyEnrolled) scores.student += 50;
  if (signals.graduationYear && signals.graduationYear >= currentYear) scores.student += 30;
  if (signals.hasGPA) scores.student += 15;
  if (signals.hasCoursework) scores.student += 10;
  if (signals.hasOnlyInternships) scores.student += 20;
  if (!signals.hasFullTimeRoles && !signals.hasResearchAssistantRole) scores.student += 15;
  if (signals.roleCount <= 1) scores.student += 10;
  if (countKeywords(cvText, STUDENT_KEYWORDS) >= 2) scores.student += 15;
  
  // Penalties
  if (signals.totalYearsExperience >= 3) scores.student -= 40;
  if (signals.hasFullTimeRoles) scores.student -= 30;
  if (signals.yearsSinceGraduation && signals.yearsSinceGraduation > 2) scores.student -= 30;
  if (signals.hasResearchAssistantRole) scores.student -= 20;
  
  // ----- FRESH_GRAD SCORING -----
  // Criteria: Graduated within last 2 years, 0-2 years experience
  
  if (signals.yearsSinceGraduation !== null && signals.yearsSinceGraduation >= 0 && signals.yearsSinceGraduation <= 2) {
    scores.fresh_grad += 40;
  }
  if (signals.totalYearsExperience >= 0 && signals.totalYearsExperience <= 2) {
    scores.fresh_grad += 30;
  }
  if (signals.roleCount >= 1 && signals.roleCount <= 3) scores.fresh_grad += 15;
  if (signals.hasGPA) scores.fresh_grad += 10;
  if (!signals.isCurrentlyEnrolled && signals.graduationYear && signals.graduationYear <= currentYear) {
    scores.fresh_grad += 15;
  }
  
  // Penalties
  if (signals.isCurrentlyEnrolled) scores.fresh_grad -= 30;
  if (signals.totalYearsExperience > 2) scores.fresh_grad -= 40;
  if (signals.yearsSinceGraduation && signals.yearsSinceGraduation > 2) scores.fresh_grad -= 30;
  
  // ----- RESEARCHER SCORING -----
  // Criteria: PhD candidate, postdoc, research fellow, or academic role with publications
  
  if (signals.isPhDCandidate) scores.researcher += 50;
  if (signals.isPostdoc) scores.researcher += 50;
  if (signals.isResearchFellow) scores.researcher += 40;
  if (signals.hasAcademicRole) scores.researcher += 45;
  if (signals.hasPublications) scores.researcher += 25;
  if (signals.publicationIndicators >= 3) scores.researcher += 20;
  if (signals.publicationIndicators >= 6) scores.researcher += 10; // Bonus for many publications
  if (signals.hasResearchFocus) scores.researcher += 20;
  if (signals.hasResearchAssistantRole) scores.researcher += 25;
  if (signals.hasGrants) scores.researcher += 15;
  if (signals.highestDegree === 'phd' || signals.highestDegree === 'postdoc') {
    scores.researcher += 30;
  }
  if (signals.highestDegree === 'masters' && signals.hasPublications) {
    scores.researcher += 15;
  }
  
  // ----- PROFESSIONAL SCORING -----
  // Criteria: 3+ years of professional work experience in industry
  
  if (signals.totalYearsExperience >= 3) scores.professional += 40;
  if (signals.totalYearsExperience >= 5) scores.professional += 15;
  if (signals.totalYearsExperience >= 10) scores.professional += 15;
  if (signals.hasFullTimeRoles) scores.professional += 25;
  if (signals.roleCount >= 3) scores.professional += 15;
  if (signals.roleCount >= 5) scores.professional += 10;
  if (PROFESSIONAL_TITLE_PATTERNS.some(p => p.test(cvText))) scores.professional += 20;
  if (!signals.isCurrentlyEnrolled && !signals.hasGPA) scores.professional += 10;
  
  // Penalties
  if (signals.isCurrentlyEnrolled) scores.professional -= 30;
  if (signals.totalYearsExperience < 3) scores.professional -= 40;
  if (signals.hasOnlyInternships) scores.professional -= 30;
  
  // ============================================
  // ENSURE NO NEGATIVE SCORES
  // ============================================
  
  (Object.keys(scores) as CVType[]).forEach(key => {
    scores[key] = Math.max(0, scores[key]);
  });
  
  // ============================================
  // DETERMINE WINNER
  // ============================================
  
  const sorted = (Object.entries(scores) as [CVType, number][])
    .sort(([, a], [, b]) => b - a);
  
  const winner = sorted[0][0];
  const winnerScore = sorted[0][1];
  const runnerUp = sorted[1][0];
  const runnerUpScore = sorted[1][1];
  
  // Calculate confidence
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const confidence = totalScore > 0 
    ? Math.min(95, Math.round((winnerScore / totalScore) * 100) + 10)
    : 50;
  
  // Generate reason
  const reason = generateReason(winner, signals);
  
  // Alternative type if close
  const alternativeType = (runnerUpScore > winnerScore * 0.5 && runnerUpScore > 20)
    ? { type: runnerUp, confidence: Math.round((runnerUpScore / totalScore) * 100) }
    : null;
  
  return {
    cvType: winner,
    confidence,
    reason,
    signals,
    scores,
    alternativeType
  };
}

// ============================================================================
// REASON GENERATOR
// ============================================================================

function generateReason(type: CVType, signals: DetectionSignals): string {
  const reasons: string[] = [];
  
  switch (type) {
    case 'student':
      if (signals.isCurrentlyEnrolled) reasons.push('currently enrolled');
      if (signals.graduationYear && signals.graduationYear >= new Date().getFullYear()) {
        reasons.push(`expected graduation ${signals.graduationYear}`);
      }
      if (signals.hasOnlyInternships) reasons.push('internship experience only');
      if (signals.hasGPA) reasons.push('GPA listed');
      if (reasons.length === 0) reasons.push('student indicators detected');
      break;
      
    case 'fresh_grad':
      if (signals.yearsSinceGraduation !== null && signals.yearsSinceGraduation <= 2) {
        reasons.push(`graduated ${signals.yearsSinceGraduation} year(s) ago`);
      }
      if (signals.totalYearsExperience <= 2) {
        reasons.push(`${signals.totalYearsExperience} years experience`);
      }
      if (reasons.length === 0) reasons.push('recent graduate profile');
      break;
      
    case 'researcher':
      if (signals.highestDegree === 'phd') reasons.push('PhD holder');
      if (signals.isPhDCandidate) reasons.push('PhD candidate');
      if (signals.isPostdoc) reasons.push('Postdoc');
      if (signals.hasPublications) reasons.push(`${Math.ceil(signals.publicationIndicators / 2)} publications`);
      if (signals.hasAcademicRole) reasons.push('teaching experience');
      if (signals.hasResearchAssistantRole) reasons.push('Research Assistant role');
      if (signals.hasGrants) reasons.push('grant funding');
      if (reasons.length === 0) reasons.push('research focus detected');
      break;
      
    case 'professional':
      reasons.push(`${signals.totalYearsExperience}+ years experience`);
      if (signals.roleCount >= 3) reasons.push(`${signals.roleCount} roles`);
      if (signals.hasFullTimeRoles) reasons.push('professional titles');
      break;
  }
  
  return reasons.slice(0, 4).join(', ');
}

// ============================================================================
// CONVENIENCE FUNCTIONS
// ============================================================================

/**
 * Quick CV type detection - returns just the type
 */
export function getCVType(cvText: string): CVType {
  return detectCVType(cvText).cvType;
}

/**
 * Get CV type with confidence
 */
export function getCVTypeWithConfidence(cvText: string): { 
  type: CVType; 
  confidence: number; 
  reason: string 
} {
  const result = detectCVType(cvText);
  return {
    type: result.cvType,
    confidence: result.confidence,
    reason: result.reason
  };
}

/**
 * Check if detection is confident enough to skip LLM
 */
export function isHighConfidence(result: CVTypeResult): boolean {
  return result.confidence >= HIGH_CONFIDENCE_THRESHOLD;
}

/**
 * Generate cvType field for prompt
 */
export function getCVTypeForPrompt(cvText: string): string {
  const result = detectCVType(cvText);
  return `"cvType": "${result.cvType}"  // ${result.reason} (${result.confidence}% confidence)`;
}

/**
 * Get scoring weights based on CV type
 */
export function getScoringWeights(cvType: CVType): Record<string, number> {
  switch (cvType) {
    case 'student':
      return {
        education: 30,
        projects: 25,
        skills: 20,
        experience: 15,
        certifications: 10
      };
      
    case 'fresh_grad':
      return {
        experience: 30,
        skills: 25,
        education: 20,
        projects: 15,
        certifications: 10
      };
      
    case 'researcher':
      return {
        publications: 25,
        research: 20,
        education: 20,
        experience: 15,
        grants: 10,
        teaching: 10
      };
      
    case 'professional':
    default:
      return {
        experience: 40,
        skills: 25,
        education: 10,
        certifications: 10,
        summary: 10,
        contact: 5
      };
  }
}

/**
 * Get focus areas for analysis based on CV type
 */
export function getFocusAreas(cvType: CVType): string[] {
  switch (cvType) {
    case 'student':
      return [
        'Education quality and relevance',
        'Projects demonstrating skills',
        'Internship impact and learning',
        'Extracurricular leadership',
        'Skills with evidence from projects'
      ];
      
    case 'fresh_grad':
      return [
        'Entry-level role achievements',
        'Education-to-work transition',
        'Skill validation from first roles',
        'Growth trajectory',
        'Quantified internship impact'
      ];
      
    case 'researcher':
      return [
        'Publication quality and impact',
        'Research methodology expertise',
        'Grant funding history',
        'Teaching effectiveness',
        'Academic collaborations'
      ];
      
    case 'professional':
    default:
      return [
        'Career progression trajectory',
        'Achievement quantification',
        'Skill validation with evidence',
        'Leadership and management',
        'Industry impact and expertise'
      ];
  }
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default {
  detectCVType,
  getCVType,
  getCVTypeWithConfidence,
  isHighConfidence,
  getCVTypeForPrompt,
  getScoringWeights,
  getFocusAreas,
  HIGH_CONFIDENCE_THRESHOLD
};
