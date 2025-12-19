/**
 * CV Type Detection Module
 * Pre-LLM detection of CV type with 6 categories:
 * - student: Currently enrolled in education
 * - fresh_grad: Graduated within 2 years, 0-2 years experience
 * - researcher: PhD/postdoc/academic with publications
 * - professional: 3-7 years industry experience
 * - expert: 8+ years deep specialist/senior IC track
 * - executive: C-level, VP, Director, management track
 * 
 * @version 2.0.0
 * @author EduNatives
 * 
 * Usage:
 *   import { detectCVType, getCVType } from './cv-type-detection';
 *   
 *   const result = detectCVType(cvText);
 *   console.log(result.cvType);      // "executive"
 *   console.log(result.confidence);  // 85
 *   console.log(result.reason);      // "VP title, 15+ years, P&L responsibility"
 */

export const HIGH_CONFIDENCE_THRESHOLD = 70;

export type CVType = 
  | 'student'       
  | 'fresh_grad'    
  | 'researcher'    
  | 'professional'  
  | 'expert'        
  | 'executive';    

export interface DetectionSignals {
  isCurrentlyEnrolled: boolean;
  graduationYear: number | null;
  yearsSinceGraduation: number | null;
  highestDegree: 'high_school' | 'bachelors' | 'masters' | 'phd' | 'postdoc' | null;
  hasGPA: boolean;
  hasCoursework: boolean;
  
  totalYearsExperience: number;
  hasFullTimeRoles: boolean;
  hasOnlyInternships: boolean;
  roleCount: number;
  
  isPhDCandidate: boolean;
  isPostdoc: boolean;
  isResearchFellow: boolean;
  hasAcademicRole: boolean;
  hasPublications: boolean;
  publicationIndicators: number;
  hasResearchFocus: boolean;
  hasResearchAssistantRole: boolean;
  hasGrants: boolean;
  
  hasSeniorICTitle: boolean;
  hasPrincipalStaffTitle: boolean;
  hasArchitectTitle: boolean;
  hasSpecialistTitle: boolean;
  hasTechnicalLeadTitle: boolean;
  hasPatents: boolean;
  hasTechnicalPublications: boolean;
  hasConferenceSpeaker: boolean;
  hasDeepExpertiseIndicators: boolean;
  expertiseYears: number;
  
  hasCLevelTitle: boolean;
  hasVPTitle: boolean;
  hasDirectorTitle: boolean;
  hasManagementTitle: boolean;
  hasPLResponsibility: boolean;
  hasRevenueResponsibility: boolean;
  hasBudgetResponsibility: boolean;
  hasTeamSize: boolean;
  teamSizeMax: number | null;
  hasBoardExperience: boolean;
  hasStrategyKeywords: boolean;
  hasTransformationKeywords: boolean;
  hasExecutiveEducation: boolean;
  managementYears: number;
}

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
    expert: number;
    executive: number;
  };
  alternativeType: {
    type: CVType;
    confidence: number;
  } | null;
}

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

const EXPERT_KEYWORDS = [
  'principal', 'staff', 'distinguished', 'fellow', 'architect',
  'specialist', 'expert', 'guru', 'evangelist', 'thought leader',
  'technical lead', 'tech lead', 'domain expert', 'subject matter expert',
  'sme', 'deep expertise', 'recognized expert', 'industry expert'
];

const EXECUTIVE_KEYWORDS = [
  'ceo', 'cto', 'cfo', 'coo', 'cio', 'cmo', 'cpo', 'cro', 'chro',
  'chief', 'president', 'vice president', 'vp', 'svp', 'evp', 'avp',
  'managing director', 'general manager', 'gm', 'partner',
  'board', 'director', 'head of', 'founder', 'co-founder',
  'c-suite', 'c-level', 'executive'
];

const STRATEGY_KEYWORDS = [
  'strategy', 'strategic', 'vision', 'roadmap', 'transformation',
  'turnaround', 'growth', 'scale', 'expansion', 'acquisition',
  'm&a', 'merger', 'ipo', 'fundraising', 'investor',
  'enterprise', 'global', 'international', 'regional'
];

const PROFESSIONAL_TITLE_PATTERNS: RegExp[] = [
  /\b(software|data|product|project|program|business|sales|marketing)\s+(engineer|manager|analyst|scientist)/i,
  /\b(engineer|developer|analyst|consultant|specialist|coordinator)\b/i,
];

const SENIOR_IC_TITLE_PATTERNS: RegExp[] = [
  /\b(senior|sr\.?)\s+(software|data|product|cloud|platform|devops|ml|ai)\s+(engineer|architect|scientist)/i,
  /\b(senior|sr\.?)\s+(engineer|developer|analyst|consultant|specialist)/i,
  /\blead\s+(engineer|developer|architect|scientist)/i,
];

const PRINCIPAL_STAFF_TITLE_PATTERNS: RegExp[] = [
  /\b(principal|staff|distinguished|fellow)\s+\w+/i,
  /\bprincipal\b/i,
  /\bstaff\s+(engineer|scientist|architect)/i,
  /\bdistinguished\s+(engineer|scientist|architect)/i,
  /\btechnical\s+fellow\b/i,
];

const ARCHITECT_TITLE_PATTERNS: RegExp[] = [
  /\b(chief|principal|lead|senior|enterprise|solution|technical|software|cloud|data|security)\s*architect/i,
  /\barchitect\b/i,
];

const EXECUTIVE_TITLE_PATTERNS: RegExp[] = [
  /\b(ceo|cto|cfo|coo|cio|cmo|cpo|cro|chro)\b/i,
  /\bchief\s+\w+\s+officer\b/i,
  /\b(president|vice\s*president|vp|svp|evp|avp)\b/i,
  /\bmanaging\s+director\b/i,
  /\bgeneral\s+manager\b/i,
  /\bpartner\b/i,
];

const DIRECTOR_TITLE_PATTERNS: RegExp[] = [
  /\b(senior\s+)?director\s+(of\s+)?\w+/i,
  /\bdirector\b/i,
  /\bhead\s+of\s+\w+/i,
  /\bvp\s+of\s+\w+/i,
];

const MANAGEMENT_TITLE_PATTERNS: RegExp[] = [
  /\b(engineering|product|program|project|operations|sales|marketing)\s+manager/i,
  /\bmanager\s+(of\s+)?\w+/i,
  /\bteam\s+lead\b/i,
  /\bpeople\s+manager\b/i,
];

function countKeywords(text: string, keywords: string[]): number {
  const lowerText = text.toLowerCase();
  return keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length;
}

function extractGraduationYear(text: string): number | null {
  const currentYear = new Date().getFullYear();
  
  const patterns = [
    /(?:expected|anticipated|graduating?)\s*(?:in\s*)?(?:may|june|dec|january|spring|fall|summer|winter|december|august)?\s*,?\s*(\d{4})/i,
    /class of\s*['"]?(\d{4}|\d{2})/i,
    /ph\.?d\.?\s*(?:dec\.?|december|may|june|august)?\s*(\d{4})/i,
    /[—–-]\s*ph\.?d\.?\s*(?:dec\.?)?\s*(\d{4})/i,
    /[bm]\.?s\.?\s*(?:in\s+\w+\s+)?(\d{4})/i,
    /graduat(?:ed|ion)[:.]?\s*(\d{4})/i,
    /mba\s*[,.]?\s*(\d{4})/i,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      let year = parseInt(match[1]);
      if (year < 100) year += 2000;
      if (year >= 1980 && year <= currentYear + 10) {
        return year;
      }
    }
  }
  
  return null;
}

function extractYearsExperience(text: string): number {
  const patterns = [
    /(\d+)\+?\s*years?\s*(?:of\s*)?(?:experience|expertise)/i,
    /(?:over|more than)\s*(\d+)\s*years/i,
    /(\d+)\s*years?\s*(?:of\s*)?(?:academic|professional|industry|work)/i,
    /(\d+)\s*years?\s*(?:in|of|working)/i,
    /career\s+spanning\s+(\d+)\s*years/i,
  ];
  
  let maxYears = 0;
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const years = parseInt(match[1]);
      maxYears = Math.max(maxYears, years);
    }
  }
  
  return maxYears;
}

function countRoles(text: string): number {
  const datePatterns = [
    /(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{4}\s*[-–—]\s*(?:present|current|now|\d{4}|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/gi,
    /\d{4}\s*[-–—]\s*(?:present|current|now|\d{4})/gi,
    /\d{1,2}\/\d{4}\s*[-–—]\s*(?:present|current|\d{1,2}\/\d{4})/gi,
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

function detectHighestDegree(text: string): DetectionSignals['highestDegree'] {
  const lowerText = text.toLowerCase();
  
  if (/\b(postdoc|post-doc|postdoctoral)\b/.test(lowerText)) return 'postdoc';
  if (/\b(ph\.?d|doctorate|doctoral)\b/.test(lowerText)) return 'phd';
  if (/\b(master|m\.?s\.?|m\.?a\.?|mba|m\.?eng|m\.?sc|emba)\b/.test(lowerText)) return 'masters';
  if (/\b(bachelor|b\.?s\.?|b\.?a\.?|b\.?eng|b\.?sc|undergraduate degree)\b/.test(lowerText)) return 'bachelors';
  if (/\b(high school|diploma|ged|secondary school)\b/.test(lowerText)) return 'high_school';
  
  return null;
}

function countPublicationIndicators(text: string): number {
  const indicators = [
    /\bet al\.\b/gi,
    /\(\d{4}\)/g,
    /\bjournal of\b/gi,
    /\bproceedings of\b/gi,
    /\bdoi:/gi,
    /\barxiv\b/gi,
    /\bieee\b|\bacm\b|\bspringer\b/gi,
    /\bnature\b|\bscience\b/gi,
    /\bbiophys\b|\bplos\b/gi,
    /\bacta cryst/gi,
  ];
  
  let count = 0;
  for (const pattern of indicators) {
    const matches = text.match(pattern);
    if (matches) count += matches.length;
  }
  
  return count;
}

function extractTeamSize(text: string): number | null {
  const patterns = [
    /(?:led|managed|oversaw|directing)\s+(?:a\s+)?(?:team\s+of\s+)?(\d+)[\+]?\s*(?:people|engineers|developers|members|employees|reports|staff)/i,
    /(\d+)[\+]?\s*(?:direct\s+reports|team\s+members)/i,
    /team\s+(?:of\s+)?(\d+)[\+]?/i,
    /(\d+)[\+]?\s*(?:person|member|people)\s+team/i,
    /managing\s+(\d+)[\+]?\s*(?:people|engineers|employees)/i,
  ];
  
  let maxSize = 0;
  for (const pattern of patterns) {
    const matches = text.matchAll(new RegExp(pattern, 'gi'));
    for (const match of matches) {
      const size = parseInt(match[1]);
      if (size > maxSize && size < 100000) {
        maxSize = size;
      }
    }
  }
  
  return maxSize > 0 ? maxSize : null;
}

function extractFinancialScope(text: string): { hasBudget: boolean; hasRevenue: boolean; hasPL: boolean } {
  const hasBudget = /budget\s+(?:of\s+)?\$?\d+[mkb]?|\$\d+[mkb]?\s+budget/i.test(text);
  const hasRevenue = /revenue\s+(?:of\s+)?\$?\d+[mkb]?|\$\d+[mkb]?\s+revenue|drove\s+\$?\d+[mkb]?\s+(?:in\s+)?revenue/i.test(text);
  const hasPL = /p&l|profit\s+(?:and|&)\s+loss|p\/l/i.test(text);
  
  return { hasBudget, hasRevenue, hasPL };
}

function hasOnlyInternshipExperience(text: string, roleCount: number): boolean {
  const hasInternship = INTERNSHIP_KEYWORDS.some(kw => 
    text.toLowerCase().includes(kw.toLowerCase())
  );
  
  const hasProfessionalTitle = PROFESSIONAL_TITLE_PATTERNS.some(p => p.test(text));
  const hasFullTimeIndicator = /full.?time|permanent position|employed at/i.test(text);
  const hasResearchRole = /research assistant|research associate|research scientist/i.test(text);
  
  return hasInternship && !hasProfessionalTitle && !hasFullTimeIndicator && !hasResearchRole && roleCount <= 2;
}

function hasFullTimeRolesCheck(text: string): boolean {
  if (PROFESSIONAL_TITLE_PATTERNS.some(p => p.test(text))) return true;
  if (/full.?time|permanent|staff\s+(?:engineer|scientist|analyst)/i.test(text)) return true;
  return false;
}

function extractExpertSignals(text: string): {
  hasSeniorICTitle: boolean;
  hasPrincipalStaffTitle: boolean;
  hasArchitectTitle: boolean;
  hasSpecialistTitle: boolean;
  hasTechnicalLeadTitle: boolean;
  hasPatents: boolean;
  hasTechnicalPublications: boolean;
  hasConferenceSpeaker: boolean;
  hasDeepExpertiseIndicators: boolean;
} {
  return {
    hasSeniorICTitle: SENIOR_IC_TITLE_PATTERNS.some(p => p.test(text)),
    hasPrincipalStaffTitle: PRINCIPAL_STAFF_TITLE_PATTERNS.some(p => p.test(text)),
    hasArchitectTitle: ARCHITECT_TITLE_PATTERNS.some(p => p.test(text)),
    hasSpecialistTitle: /\b(specialist|expert|guru|evangelist)\b/i.test(text),
    hasTechnicalLeadTitle: /\b(technical|tech)\s+lead\b/i.test(text),
    hasPatents: /\bpatent/i.test(text),
    hasTechnicalPublications: /\b(whitepaper|white paper|technical paper|blog post|published|authored)\b/i.test(text),
    hasConferenceSpeaker: /\b(keynote|speaker|presented at|spoke at|panelist|conference talk)\b/i.test(text),
    hasDeepExpertiseIndicators: countKeywords(text, EXPERT_KEYWORDS) >= 2,
  };
}

function extractExecutiveSignals(text: string): {
  hasCLevelTitle: boolean;
  hasVPTitle: boolean;
  hasDirectorTitle: boolean;
  hasManagementTitle: boolean;
  hasBoardExperience: boolean;
  hasStrategyKeywords: boolean;
  hasTransformationKeywords: boolean;
  hasExecutiveEducation: boolean;
} {
  return {
    hasCLevelTitle: EXECUTIVE_TITLE_PATTERNS.some(p => p.test(text)),
    hasVPTitle: /\b(vice\s*president|vp|svp|evp|avp)\b/i.test(text),
    hasDirectorTitle: DIRECTOR_TITLE_PATTERNS.some(p => p.test(text)),
    hasManagementTitle: MANAGEMENT_TITLE_PATTERNS.some(p => p.test(text)),
    hasBoardExperience: /\bboard\s+(of\s+)?(director|member|advisor)|advisory\s+board\b/i.test(text),
    hasStrategyKeywords: countKeywords(text, STRATEGY_KEYWORDS) >= 2,
    hasTransformationKeywords: /\b(transformation|turnaround|restructuring|change\s+management)\b/i.test(text),
    hasExecutiveEducation: /\b(emba|executive\s+mba|executive\s+education|executive\s+program)\b/i.test(text),
  };
}

export function detectCVType(cvText: string): CVTypeResult {
  const currentYear = new Date().getFullYear();
  
  const graduationYear = extractGraduationYear(cvText);
  const yearsSinceGraduation = graduationYear ? currentYear - graduationYear : null;
  const roleCount = countRoles(cvText);
  const teamSize = extractTeamSize(cvText);
  const financialScope = extractFinancialScope(cvText);
  const expertSignals = extractExpertSignals(cvText);
  const executiveSignals = extractExecutiveSignals(cvText);
  
  let totalYearsExperience = extractYearsExperience(cvText);
  
  if (totalYearsExperience === 0) {
    if (yearsSinceGraduation && yearsSinceGraduation > 0) {
      totalYearsExperience = Math.min(yearsSinceGraduation, 25);
    } else if (roleCount > 0) {
      totalYearsExperience = Math.min(roleCount * 2.5, 20);
    }
  }
  
  const signals: DetectionSignals = {
    isCurrentlyEnrolled: /currently enrolled|pursuing|expected|anticipated graduation|candidate for degree/i.test(cvText),
    graduationYear,
    yearsSinceGraduation,
    highestDegree: detectHighestDegree(cvText),
    hasGPA: /\bgpa\b|grade point average/i.test(cvText),
    hasCoursework: /relevant coursework|courses:|coursework:/i.test(cvText),
    
    totalYearsExperience,
    hasFullTimeRoles: hasFullTimeRolesCheck(cvText),
    hasOnlyInternships: hasOnlyInternshipExperience(cvText, roleCount),
    roleCount,
    
    isPhDCandidate: /ph\.?d\.?\s*(?:candidate|student)|doctoral\s*(?:candidate|student)/i.test(cvText),
    isPostdoc: /postdoc|post-doc|postdoctoral/i.test(cvText),
    isResearchFellow: /research fellow|research associate/i.test(cvText),
    hasAcademicRole: /professor|lecturer|faculty|tenure|teaching assistant|instructor/i.test(cvText),
    hasPublications: /\bpublications?\b|published|peer-reviewed|journal article/i.test(cvText),
    publicationIndicators: countPublicationIndicators(cvText),
    hasResearchFocus: countKeywords(cvText, RESEARCH_KEYWORDS) >= 3,
    hasResearchAssistantRole: /research assistant/i.test(cvText),
    hasGrants: /\bgrant\b|nsf|nih|fellowship|principal investigator|\bpi\b/i.test(cvText),
    
    ...expertSignals,
    expertiseYears: totalYearsExperience >= 8 && (expertSignals.hasPrincipalStaffTitle || expertSignals.hasArchitectTitle) 
      ? totalYearsExperience : 0,
    
    ...executiveSignals,
    hasPLResponsibility: financialScope.hasPL,
    hasRevenueResponsibility: financialScope.hasRevenue,
    hasBudgetResponsibility: financialScope.hasBudget,
    hasTeamSize: teamSize !== null && teamSize > 0,
    teamSizeMax: teamSize,
    managementYears: executiveSignals.hasCLevelTitle || executiveSignals.hasVPTitle || executiveSignals.hasDirectorTitle
      ? Math.max(totalYearsExperience - 5, 0) : 0,
  };
  
  const scores = {
    student: 0,
    fresh_grad: 0,
    researcher: 0,
    professional: 0,
    expert: 0,
    executive: 0,
  };
  
  if (signals.isCurrentlyEnrolled) scores.student += 50;
  if (signals.graduationYear && signals.graduationYear >= currentYear) scores.student += 30;
  if (signals.hasGPA) scores.student += 15;
  if (signals.hasCoursework) scores.student += 10;
  if (signals.hasOnlyInternships) scores.student += 20;
  if (!signals.hasFullTimeRoles && !signals.hasResearchAssistantRole) scores.student += 15;
  if (signals.roleCount <= 1) scores.student += 10;
  if (countKeywords(cvText, STUDENT_KEYWORDS) >= 2) scores.student += 15;
  
  if (signals.totalYearsExperience >= 3) scores.student -= 50;
  if (signals.hasFullTimeRoles) scores.student -= 30;
  if (signals.yearsSinceGraduation && signals.yearsSinceGraduation > 2) scores.student -= 40;
  if (signals.hasResearchAssistantRole) scores.student -= 20;
  
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
  
  if (signals.isCurrentlyEnrolled) scores.fresh_grad -= 30;
  if (signals.totalYearsExperience > 3) scores.fresh_grad -= 50;
  if (signals.yearsSinceGraduation && signals.yearsSinceGraduation > 3) scores.fresh_grad -= 40;
  
  if (signals.isPhDCandidate) scores.researcher += 50;
  if (signals.isPostdoc) scores.researcher += 50;
  if (signals.isResearchFellow) scores.researcher += 40;
  if (signals.hasAcademicRole) scores.researcher += 45;
  if (signals.hasPublications) scores.researcher += 25;
  if (signals.publicationIndicators >= 3) scores.researcher += 20;
  if (signals.publicationIndicators >= 6) scores.researcher += 15;
  if (signals.hasResearchFocus) scores.researcher += 20;
  if (signals.hasResearchAssistantRole) scores.researcher += 25;
  if (signals.hasGrants) scores.researcher += 20;
  if (signals.highestDegree === 'phd' || signals.highestDegree === 'postdoc') {
    scores.researcher += 30;
  }
  if (signals.highestDegree === 'masters' && signals.hasPublications) {
    scores.researcher += 15;
  }
  
  if (signals.totalYearsExperience >= 3 && signals.totalYearsExperience <= 7) {
    scores.professional += 50;
  } else if (signals.totalYearsExperience >= 2 && signals.totalYearsExperience < 3) {
    scores.professional += 30;
  }
  if (signals.hasFullTimeRoles) scores.professional += 25;
  if (signals.roleCount >= 2 && signals.roleCount <= 4) scores.professional += 20;
  if (PROFESSIONAL_TITLE_PATTERNS.some(p => p.test(cvText))) scores.professional += 20;
  if (!signals.isCurrentlyEnrolled && !signals.hasGPA) scores.professional += 10;
  
  if (signals.isCurrentlyEnrolled) scores.professional -= 30;
  if (signals.totalYearsExperience < 2) scores.professional -= 40;
  if (signals.hasOnlyInternships) scores.professional -= 30;
  if (signals.totalYearsExperience >= 10) scores.professional -= 30;
  if (signals.hasCLevelTitle || signals.hasVPTitle) scores.professional -= 40;
  if (signals.hasPrincipalStaffTitle) scores.professional -= 30;
  
  if (signals.totalYearsExperience >= 8) scores.expert += 40;
  if (signals.totalYearsExperience >= 12) scores.expert += 15;
  if (signals.totalYearsExperience >= 15) scores.expert += 10;
  
  if (signals.hasPrincipalStaffTitle) scores.expert += 50;
  if (signals.hasArchitectTitle) scores.expert += 45;
  if (signals.hasSeniorICTitle) scores.expert += 30;
  if (signals.hasTechnicalLeadTitle) scores.expert += 25;
  if (signals.hasSpecialistTitle) scores.expert += 20;
  
  if (signals.hasPatents) scores.expert += 25;
  if (signals.hasTechnicalPublications) scores.expert += 15;
  if (signals.hasConferenceSpeaker) scores.expert += 20;
  if (signals.hasDeepExpertiseIndicators) scores.expert += 15;
  
  if (signals.totalYearsExperience < 6) scores.expert -= 40;
  if (signals.hasCLevelTitle || signals.hasVPTitle) scores.expert -= 30;
  if (signals.hasManagementTitle && signals.teamSizeMax && signals.teamSizeMax > 20) scores.expert -= 25;
  if (signals.isCurrentlyEnrolled) scores.expert -= 50;
  
  if (signals.hasCLevelTitle) scores.executive += 60;
  if (signals.hasVPTitle) scores.executive += 50;
  if (signals.hasDirectorTitle) scores.executive += 40;
  if (signals.hasManagementTitle) scores.executive += 25;
  if (signals.hasBoardExperience) scores.executive += 30;
  
  if (signals.hasPLResponsibility) scores.executive += 35;
  if (signals.hasRevenueResponsibility) scores.executive += 30;
  if (signals.hasBudgetResponsibility) scores.executive += 25;
  
  if (signals.hasTeamSize) {
    if (signals.teamSizeMax && signals.teamSizeMax >= 50) scores.executive += 30;
    else if (signals.teamSizeMax && signals.teamSizeMax >= 20) scores.executive += 20;
    else if (signals.teamSizeMax && signals.teamSizeMax >= 5) scores.executive += 10;
  }
  
  if (signals.hasStrategyKeywords) scores.executive += 20;
  if (signals.hasTransformationKeywords) scores.executive += 15;
  if (signals.hasExecutiveEducation) scores.executive += 15;
  
  if (signals.totalYearsExperience >= 10) scores.executive += 25;
  if (signals.totalYearsExperience >= 15) scores.executive += 15;
  if (signals.totalYearsExperience >= 20) scores.executive += 10;
  
  if (signals.totalYearsExperience < 8) scores.executive -= 40;
  if (signals.isCurrentlyEnrolled) scores.executive -= 60;
  if (!signals.hasManagementTitle && !signals.hasDirectorTitle && !signals.hasVPTitle && !signals.hasCLevelTitle) {
    scores.executive -= 50;
  }
  
  (Object.keys(scores) as CVType[]).forEach(key => {
    scores[key] = Math.max(0, scores[key]);
  });
  
  const sorted = (Object.entries(scores) as [CVType, number][])
    .sort(([, a], [, b]) => b - a);
  
  const winner = sorted[0][0];
  const winnerScore = sorted[0][1];
  const runnerUp = sorted[1][0];
  const runnerUpScore = sorted[1][1];
  
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const confidence = totalScore > 0 
    ? Math.min(95, Math.round((winnerScore / totalScore) * 100) + 10)
    : 50;
  
  const reason = generateReason(winner, signals);
  
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
      if (signals.hasPublications) reasons.push(`publications`);
      if (signals.hasAcademicRole) reasons.push('academic role');
      if (signals.hasResearchAssistantRole) reasons.push('Research Assistant');
      if (signals.hasGrants) reasons.push('grant funding');
      if (reasons.length === 0) reasons.push('research focus detected');
      break;
      
    case 'professional':
      reasons.push(`${signals.totalYearsExperience} years experience`);
      if (signals.roleCount >= 2) reasons.push(`${signals.roleCount} roles`);
      if (signals.hasFullTimeRoles) reasons.push('professional roles');
      break;
      
    case 'expert':
      if (signals.hasPrincipalStaffTitle) reasons.push('Principal/Staff title');
      if (signals.hasArchitectTitle) reasons.push('Architect role');
      if (signals.hasSeniorICTitle) reasons.push('Senior IC');
      if (signals.hasTechnicalLeadTitle) reasons.push('Tech Lead');
      reasons.push(`${signals.totalYearsExperience}+ years`);
      if (signals.hasPatents) reasons.push('patents');
      if (signals.hasConferenceSpeaker) reasons.push('conference speaker');
      if (reasons.length === 0) reasons.push('deep technical expertise');
      break;
      
    case 'executive':
      if (signals.hasCLevelTitle) reasons.push('C-level title');
      if (signals.hasVPTitle) reasons.push('VP title');
      if (signals.hasDirectorTitle) reasons.push('Director');
      if (signals.hasPLResponsibility) reasons.push('P&L responsibility');
      if (signals.hasRevenueResponsibility) reasons.push('revenue responsibility');
      if (signals.teamSizeMax && signals.teamSizeMax >= 10) reasons.push(`${signals.teamSizeMax}+ team`);
      if (signals.hasBoardExperience) reasons.push('board experience');
      reasons.push(`${signals.totalYearsExperience}+ years`);
      if (reasons.length === 0) reasons.push('executive leadership profile');
      break;
  }
  
  return reasons.slice(0, 4).join(', ');
}

export function getCVType(cvText: string): CVType {
  return detectCVType(cvText).cvType;
}

export function isHighConfidence(result: CVTypeResult): boolean {
  return result.confidence >= HIGH_CONFIDENCE_THRESHOLD;
}

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

export function getCVTypeForPrompt(cvText: string): string {
  const result = detectCVType(cvText);
  return `"cvType": "${result.cvType}"  // ${result.reason} (${result.confidence}% confidence)`;
}

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
      return {
        experience: 40,
        skills: 25,
        education: 10,
        certifications: 10,
        summary: 10,
        contact: 5
      };
      
    case 'expert':
      return {
        experience: 35,
        technicalDepth: 25,
        skills: 20,
        publications: 10,
        certifications: 5,
        contact: 5
      };
      
    case 'executive':
      return {
        leadershipImpact: 30,
        experience: 25,
        strategyScope: 20,
        teamScale: 15,
        education: 5,
        contact: 5
      };
  }
}

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
      return [
        'Career progression trajectory',
        'Achievement quantification',
        'Skill validation with evidence',
        'Project impact and scope',
        'Industry expertise'
      ];
      
    case 'expert':
      return [
        'Deep technical expertise evidence',
        'Architecture/system design impact',
        'Technical leadership scope',
        'Patents and publications',
        'Conference speaking and thought leadership',
        'Mentorship and technical influence'
      ];
      
    case 'executive':
      return [
        'P&L and revenue responsibility',
        'Team size and organizational scope',
        'Strategic initiatives and outcomes',
        'Transformation and change leadership',
        'Board and stakeholder engagement',
        'Business impact quantification'
      ];
  }
}

export function getCVTypeDescription(cvType: CVType): string {
  switch (cvType) {
    case 'student':
      return 'Currently enrolled in education with no or only internship/part-time experience';
    case 'fresh_grad':
      return 'Graduated within the last 2 years with limited professional experience (0-2 years)';
    case 'researcher':
      return 'PhD candidate, postdoc, research fellow, or academic role with publications/research focus';
    case 'professional':
      return 'Mid-level professional with 3-7 years of industry experience';
    case 'expert':
      return 'Senior individual contributor or specialist with 8+ years of deep technical expertise';
    case 'executive':
      return 'Executive or senior management (C-level, VP, Director) with leadership and P&L responsibility';
  }
}

export default { detectCVType, getCVType, getCVTypeWithConfidence, getCVTypeForPrompt, getScoringWeights, getFocusAreas, getCVTypeDescription };
