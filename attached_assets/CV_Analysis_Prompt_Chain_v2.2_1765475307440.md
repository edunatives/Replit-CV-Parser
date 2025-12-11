# EduNatives CV Intelligence Engine v2.2
## Complete Prompt Chain with Experience Factors Enhancement

---

# VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| v2.0 | 2024-11 | Initial 7-category system with STRICT MODE |
| v2.1 | 2024-11 | Added Nature Classification (Category G), Dual-Audience output |
| v2.11 | 2024-12 | Added ui_output block for frontend rendering |
| **v2.2** | **2024-12** | **Added Years of Experience (H1-H4) and Depth of Experience (H5-H9) factors** |

---

# TABLE OF CONTENTS

1. [System Overview](#system-overview)
2. [8-Category Analysis Framework](#8-category-analysis-framework)
3. [Issue Code Reference](#issue-code-reference)
4. [Nature Classification Framework](#nature-classification-framework)
5. [Experience Factors Framework (NEW)](#experience-factors-framework)
6. [Stage 0: Input Parsing](#stage-0-input-parsing)
7. [Stage 1: CV Analysis Engine](#stage-1-cv-analysis-engine)
8. [Stage 2: JD Analysis Engine](#stage-2-jd-analysis-engine)
9. [Stage 3: Match & Score Engine](#stage-3-match--score-engine)
10. [Stage 4: Dual-Audience Report Generator](#stage-4-dual-audience-report-generator)
11. [Output Schemas](#output-schemas)

---

# SYSTEM OVERVIEW

## Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                      EduNatives CV Intelligence Engine v2.2                       │
│              + Nature Classification + Experience Factors                         │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐   │
│  │   STAGE 0    │───▶│   STAGE 1    │───▶│   STAGE 2    │───▶│   STAGE 3    │   │
│  │ Input Parse  │    │ CV Analysis  │    │ JD Analysis  │    │ Match/Score  │   │
│  │              │    │ + CV Nature  │    │ + JD Nature  │    │ + Nature Fit │   │
│  │              │    │ + Experience │    │ + Experience │    │ + Exp Match  │   │
│  └──────────────┘    └──────────────┘    └──────────────┘    └──────┬───────┘   │
│                                                                      │           │
│                                                                      ▼           │
│                                                               ┌──────────────┐   │
│                                                               │   STAGE 4    │   │
│                                                               │ Dual Report  │   │
│                                                               │ + ui_output  │   │
│                                                               └──────┬───────┘   │
│                                                                      │           │
│                         ┌────────────────────────────────────────────┼───────────┤
│                         │                                            │           │
│                         ▼                                            ▼           │
│               ┌─────────────────┐                          ┌─────────────────┐   │
│               │  STUDENT VIEW   │                          │    HR VIEW      │   │
│               │  (Encouraging)  │                          │  (Forensic)     │   │
│               └─────────────────┘                          └─────────────────┘   │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

## What's New in v2.2

### Experience Factors Model

```
┌─────────────────────────────────────────────────────────────────┐
│                    EXPERIENCE ANALYSIS MODEL                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   FACTOR 1: YEARS OF EXPERIENCE (Quantitative)                  │
│   ─────────────────────────────────────────────                  │
│   H1: Total Professional Years                                   │
│   H2: Relevant Domain Years                                      │
│   H3: Relevant Industry Years                                    │
│   H4: Recency Score                                              │
│                                                                  │
│   FACTOR 2: DEPTH OF EXPERIENCE (Qualitative)                   │
│   ─────────────────────────────────────────────                  │
│   H5: Scope of Responsibility                                    │
│   H6: Complexity of Projects                                     │
│   H7: Impact Level Demonstrated                                  │
│   H8: Progression Pattern                                        │
│   H9: Specialization Profile                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

# 8-CATEGORY ANALYSIS FRAMEWORK

| Category | Code | Focus | Subcategories | Weight |
|----------|------|-------|---------------|--------|
| ATS Structure | A | Technical parseability | 9 | 10% |
| Content Realism | B | Integrity & honesty | 8 | 15% |
| Skill Validation | C | Evidence-based verification | 6 | 15% |
| Strengths Discovery | D | Positive reinforcement | 8 | 10% |
| Tone & Clarity | E | Communication quality | 6 | 10% |
| Timeline & Professional Age | F | Career trajectory | 5 | 5% |
| Nature & Fit Alignment | G | Domain/field/level matching | 9 | 15% |
| **Experience Factors** | **H** | **Years + Depth analysis** | **9** | **20%** |

**Total: 60 Issue/Strength Codes**

---

# ISSUE CODE REFERENCE

## Category A: ATS Structure (9 codes)

| Code | Type | Trigger |
|------|------|---------|
| A1 | Contact Info | Missing/incomplete contact information |
| A2 | File Format | Non-ATS friendly format |
| A3 | Date Format | Inconsistent date formatting |
| A4 | Section Headers | Non-standard or missing headers |
| A5 | Job Title | Missing or unclear job titles |
| A6 | Parsing Risk | Tables, columns, graphics that may break ATS |
| A7 | Length Issue | Too long (>2 pages) or too short |
| A8 | Keyword Density | Over-stuffing or missing key terms |
| A9 | Special Characters | Characters that may cause parsing errors |

## Category B: Content Realism (8 codes)

| Code | Type | Trigger |
|------|------|---------|
| B1 | Jargon Inflation | Buzzword overuse without substance |
| B2 | Vague Claims | Generic statements without specifics |
| B3 | Unverifiable Metrics | Numbers that can't be validated |
| B4 | Timeline Inconsistency | Overlapping dates or impossible sequences |
| B5 | Skill Mismatch | Skills don't align with role history |
| B6 | Achievement Inflation | Claims exceeding reasonable scope |
| B7 | Template Language | Generic copied content |
| B8 | Title Inflation | Job titles don't match responsibilities |

## Category C: Skill Validation (6 codes)

| Code | Type | Trigger |
|------|------|---------|
| C1 | Validated Skill | Skill with strong evidence |
| C2 | Implied Skill | Skill inferred from context |
| C3 | Ghost Skill | Claimed skill with zero evidence |
| C4 | Level Mismatch | Claimed level exceeds evidence |
| C5 | Outdated Skill | Skill not used recently (5+ years) |
| C6 | Emerging Skill | New skill with limited evidence |

## Category D: Strengths Discovery (8 codes)

| Code | Type | Trigger |
|------|------|---------|
| D1 | Quantified Achievement | Specific measurable impact |
| D2 | Leadership Evidence | Team/project leadership shown |
| D3 | Technical Depth | Deep expertise demonstrated |
| D4 | Business Impact | Revenue/cost/efficiency outcomes |
| D5 | Growth Trajectory | Clear career progression |
| D6 | Unique Value | Differentiating experiences |
| D7 | Industry Recognition | Awards, certifications, publications |
| D8 | Cross-functional | Breadth across domains |

## Category E: Tone & Clarity (6 codes)

| Code | Type | Trigger |
|------|------|---------|
| E1 | Passive Voice | Overuse of passive constructions |
| E2 | Weak Verbs | Action verbs lacking impact |
| E3 | Dense Text | Hard to scan, wall of text |
| E4 | Inconsistent Tone | Mixed formal/informal language |
| E5 | Spelling/Grammar | Errors in text |
| E6 | Clarity Issue | Ambiguous or confusing statements |

## Category F: Timeline & Professional Age (5 codes)

| Code | Type | Trigger |
|------|------|---------|
| F1 | Gap Detected | Employment gap > 6 months |
| F2 | Short Tenure | Multiple roles < 1 year |
| F3 | Stagnation | Same level for 5+ years |
| F4 | Regression | Move to lower-level role |
| F5 | Experience Calculation | Professional age calculation notes |

## Category G: Nature & Fit Alignment (9 codes)

| Code | Type | Trigger |
|------|------|---------|
| G1 | Education Field Mismatch | CV field ≠ JD required field |
| G2 | Education Level Mismatch | CV level < JD required level |
| G3 | Domain Mismatch | CV domain ≠ JD domain |
| G4 | Industry Mismatch | CV industry ≠ JD industry (strict) |
| G5 | Work Style Mismatch | CV style ≠ JD requirements |
| G6 | Career Path Mismatch | Trajectory doesn't match expectations |
| G7 | Seniority Gap | Gap > 1 level |
| G8 | Background Type Mismatch | Traditional vs non-traditional |
| G9 | Career Changer Detected | Significant field change |

## Category H: Experience Factors (9 codes) - NEW

| Code | Type | Trigger | Student Message | HR Message |
|------|------|---------|-----------------|------------|
| **H1** | Total Years Gap | CV years < JD minimum | "You're building valuable experience! Focus on demonstrating impact quality over quantity." | "Experience gap: {cv_years} years vs required {jd_years} years" |
| **H2** | Domain Years Gap | Domain-specific years insufficient | "Your adjacent experience transfers well. Highlight relevant domain projects." | "Domain experience gap: {cv_domain_years} years in {domain} vs required {jd_domain_years}" |
| **H3** | Industry Years Gap | Industry experience insufficient | "Your cross-industry perspective brings fresh ideas!" | "Industry experience: {cv_industry_years} years vs expected {jd_industry_years} years" |
| **H4** | Recency Gap | Relevant experience not recent | "Re-engage with current practices. Recent projects or certifications help." | "Recency concern: Last relevant role ended {years_ago} years ago" |
| **H5** | Scope Gap | Responsibility scope below required | "Growing scope shows trajectory. Emphasize your largest impact projects." | "Scope gap: {cv_scope} level vs required {jd_scope} level" |
| **H6** | Complexity Gap | Project complexity below expectations | "Complex challenges await! Show readiness with examples of growth." | "Complexity gap: Limited {required_complexity} complexity experience" |
| **H7** | Impact Gap | Demonstrated impact insufficient | "Quantify your achievements more specifically. Numbers tell your story." | "Impact evidence weak: Limited quantified business outcomes" |
| **H8** | Progression Gap | Career progression atypical | "Non-linear paths bring diverse perspectives and adaptability!" | "Progression pattern: {cv_pattern} vs expected {jd_pattern}" |
| **H9** | Depth/Breadth Mismatch | Specialist for generalist role or vice versa | "Your {cv_type} profile brings focused expertise to the team!" | "Profile type mismatch: {cv_type} applying for {jd_type} role" |

---

# NATURE CLASSIFICATION FRAMEWORK

## CV Nature Schema

```json
{
  "cv_nature": {
    "education_nature": {
      "highest_degree": "PhD | Masters | Bachelors | Associates | Certification | None",
      "field": "string",
      "field_category": "STEM | Business | Humanities | Arts | Other",
      "institution_tier": "Top-Tier | Mid-Tier | Standard | Unknown",
      "graduation_recency": "Recent (<5yr) | Mid (5-15yr) | Distant (>15yr)",
      "continuous_learning": true | false,
      "certifications": ["string"],
      "bootcamp_graduate": true | false,
      "self_taught_evidence": true | false
    },
    "domain_nature": {
      "primary_domain": "string",
      "secondary_domains": ["string"],
      "domain_depth": "Specialist | Expert | Proficient | Generalist",
      "domain_years": "number",
      "domain_trajectory": "Deepening | Broadening | Pivoting | Stable"
    },
    "industry_nature": {
      "primary_industry": "string",
      "secondary_industries": ["string"],
      "industry_years": "number",
      "industry_depth": "Deep | Moderate | Surface",
      "cross_industry": true | false
    },
    "work_style_nature": {
      "preferred_arrangement": "Remote | Hybrid | On-site | Flexible",
      "company_stages_experienced": ["Startup", "Growth", "Enterprise"],
      "team_sizes_experienced": ["Solo", "Small", "Medium", "Large"],
      "work_pace_evidence": "Fast | Steady | Variable"
    },
    "career_path_nature": {
      "trajectory": "Linear | Lateral | Pivot | Mixed",
      "progression_rate": "Fast | Steady | Slow | Variable",
      "current_level": "Junior | Mid | Senior | Lead | Staff | Principal | Director | VP | C-Level",
      "time_at_current_level": "number (years)",
      "is_career_changer": true | false,
      "previous_field": "string | null",
      "gaps_present": true | false,
      "gap_details": ["string"]
    }
  }
}
```

## JD Nature Schema

```json
{
  "jd_nature": {
    "education_requirements": {
      "field_required": "Specific Field | STEM | Technical | Any | Not Specified",
      "field_specific": "string | null",
      "level_required": "PhD | Masters | Bachelors | None Specified",
      "level_preferred": "string | null",
      "strict_requirement": true | false,
      "equivalent_experience_ok": true | false,
      "bootcamp_ok": true | false | "not_specified",
      "self_taught_ok": true | false | "not_specified"
    },
    "domain_requirements": {
      "primary_domain": "string",
      "specialization_required": "string | null",
      "related_domains_ok": true | false,
      "domain_flexibility": "Strict | Moderate | Flexible"
    },
    "industry_requirements": {
      "industry_required": "string | null",
      "industry_preferred": "string | null",
      "industry_experience_years": "number | null",
      "industry_flexibility": "Strict | Preferred | Flexible | Any"
    },
    "work_style_requirements": {
      "employment_type": "Full-time | Contract | Part-time | Flexible",
      "work_arrangement": "Remote | On-site | Hybrid",
      "location_requirement": "Strict | Preferred | Flexible",
      "travel_required": true | false,
      "company_stage": "Startup | Growth | Enterprise | Any"
    },
    "candidate_expectations": {
      "background_preference": "Traditional Only | Bootcamp OK | Self-Taught OK | Career Changer OK | Any",
      "experience_type": "Industry Only | Academic OK | Freelance OK | Any",
      "trajectory_preference": "Linear Preferred | Lateral OK | Pivot OK | Any",
      "gaps_tolerance": "No Gaps | Short Gaps OK | Gaps OK with Explanation | Any",
      "seniority_level": "Junior | Mid | Senior | Lead | Staff | Principal | Executive"
    },
    "role_characteristics": {
      "pace": "Startup Fast | Steady Growth | Enterprise Stable | Research Slow",
      "structure": "Autonomous | Guided | Highly Structured",
      "team_size": "Solo | Small Team | Large Team | Cross-Functional",
      "impact_scope": "Individual | Team | Department | Company | Industry"
    }
  }
}
```

---

# EXPERIENCE FACTORS FRAMEWORK

## Factor 1: Years of Experience (Quantitative)

### CV Analysis Schema

```json
{
  "experience_years": {
    "total_professional_years": "number",
    "calculation_method": "sum_of_roles | career_span | adjusted",
    "calculation_notes": "string",
    
    "domain_breakdown": [
      {
        "domain": "string",
        "years": "number",
        "recency": "Current | Within 2 years | Within 5 years | Within 10 years | 10+ years ago",
        "last_role_end": "date | Present",
        "roles_count": "number",
        "continuous": true | false
      }
    ],
    
    "industry_breakdown": [
      {
        "industry": "string",
        "years": "number",
        "companies": ["string"],
        "recency": "Current | Within 2 years | Within 5 years | Within 10 years | 10+ years ago"
      }
    ],
    
    "role_level_breakdown": [
      {
        "level": "Junior | Mid | Senior | Lead | Staff | Principal | Director | VP | C-Level",
        "years": "number",
        "recency": "Current | Within 5 years | Within 10 years | 10+ years ago"
      }
    ],
    
    "function_breakdown": [
      {
        "function": "string (e.g., People Management, Technical IC, Strategy)",
        "years": "number",
        "evidence": ["string"]
      }
    ],
    
    "recency_analysis": {
      "years_in_last_3_years": "number",
      "years_in_last_5_years": "number",
      "years_in_last_10_years": "number",
      "most_recent_relevant_role": "string",
      "time_since_relevant_role": "number (months)",
      "recency_score": 0-100
    },
    
    "recency_weighted_experience": {
      "formula": "Recent 3yr × 1.0 + 3-5yr × 0.8 + 5-10yr × 0.5 + 10+yr × 0.3",
      "effective_years": "number",
      "explanation": "string"
    },
    
    "gaps": [
      {
        "start": "date",
        "end": "date",
        "duration_months": "number",
        "type": "Between roles | Career break | Education | Other",
        "explained": true | false,
        "explanation": "string | null"
      }
    ],
    
    "continuity_score": 0-100,
    "consistency_score": 0-100
  }
}
```

### JD Requirements Schema

```json
{
  "experience_requirements": {
    "total_years": {
      "minimum": "number",
      "preferred": "number | null",
      "maximum": "number | null",
      "evidence": "string (quote from JD)",
      "strictness": "Hard | Soft | Flexible"
    },
    
    "domain_specific_years": [
      {
        "domain": "string",
        "minimum_years": "number",
        "preferred_years": "number | null",
        "evidence": "string",
        "strictness": "Hard | Soft | Flexible",
        "substitutable": true | false,
        "substitutes": ["string"]
      }
    ],
    
    "industry_specific_years": {
      "industry": "string | null",
      "minimum_years": "number | null",
      "preferred_years": "number | null",
      "evidence": "string",
      "strictness": "Hard | Preferred | Flexible | Any"
    },
    
    "leadership_years": {
      "people_management": "number | null",
      "technical_leadership": "number | null",
      "budget_management": "number | null",
      "evidence": "string"
    },
    
    "function_specific_years": [
      {
        "function": "string",
        "minimum_years": "number",
        "evidence": "string"
      }
    ],
    
    "recency_requirements": {
      "recent_relevant_experience": true | false,
      "max_gap_from_current": "number (years) | null",
      "currently_active_preferred": true | false,
      "evidence": "string"
    }
  }
}
```

## Factor 2: Depth of Experience (Qualitative)

### CV Analysis Schema

```json
{
  "experience_depth": {
    "overall_depth_score": 0-100,
    "depth_level": "Entry | Developing | Proficient | Expert | Master",
    
    "scope_of_responsibility": {
      "score": 0-100,
      "current_level": "Individual | Team | Department | Division | Organization | Enterprise | Industry",
      "max_level_achieved": "string",
      "evidence": [
        {
          "claim": "string",
          "scope": "string",
          "validation_status": "Validated | Implied | Unverified"
        }
      ],
      "quantified_scope": {
        "max_team_size_managed": "number | null",
        "max_budget_managed": "string | null",
        "max_revenue_responsibility": "string | null",
        "geographic_scope": "Local | National | Regional | Global | null",
        "stakeholder_level": "Peers | Management | Senior Management | C-Level | Board | External"
      }
    },
    
    "complexity_indicators": {
      "score": 0-100,
      "level": "Low | Medium | High | Very High | Exceptional",
      "evidence": [
        {
          "type": "Technical | Organizational | Scale | Stakeholder | Regulatory",
          "detail": "string",
          "complexity_level": "Low | Medium | High | Very High"
        }
      ],
      "complexity_dimensions": {
        "technical_complexity": "Low | Medium | High | Very High",
        "organizational_complexity": "Low | Medium | High | Very High",
        "scale_complexity": "Low | Medium | High | Very High",
        "stakeholder_complexity": "Low | Medium | High | Very High",
        "regulatory_complexity": "Low | Medium | High | Very High"
      },
      "project_types": ["Greenfield", "Transformation", "Integration", "Consolidation", "Maintenance", "Innovation", "R&D"],
      "technology_breadth": "Narrow | Moderate | Wide | Very Wide",
      "methodology_experience": ["Agile", "Waterfall", "Hybrid", "SAFe", "Other"]
    },
    
    "impact_level": {
      "score": 0-100,
      "level": "Task | Project | Team | Department | Organization | Strategic | Industry",
      "business_impact_demonstrated": true | false,
      "quantified_impacts": [
        {
          "metric_type": "Cost Reduction | Revenue Growth | Efficiency | Quality | Time | Risk | Customer | Other",
          "metric": "string",
          "value": "string",
          "context": "string",
          "timeframe": "string | null",
          "validation_status": "Validated | Implied | Unverified",
          "impact_quality": "High | Medium | Low"
        }
      ],
      "impact_summary": {
        "total_quantified_achievements": "number",
        "high_quality_count": "number",
        "medium_quality_count": "number",
        "low_quality_count": "number",
        "impact_types_covered": ["string"],
        "largest_impact": "string"
      }
    },
    
    "progression_pattern": {
      "score": 0-100,
      "pattern": "Linear Upward | Steady Growth | Lateral Expansion | Step-Change | Variable | Plateau | Regression",
      "trajectory_description": "string",
      "progression_rate": "Fast (<2yr/level) | Steady (2-4yr/level) | Slow (>4yr/level) | Variable",
      "time_at_senior_levels": "number (years)",
      "promotions_count": "number",
      "lateral_moves_count": "number",
      "evidence": ["string"],
      "progression_health": "Excellent | Good | Moderate | Concerning"
    },
    
    "specialization_profile": {
      "type": "I-shaped (Deep Specialist) | T-shaped (Expert + Breadth) | Pi-shaped (Multiple Depths) | Dash-shaped (Generalist)",
      "primary_depth": {
        "area": "string",
        "depth_level": 1-5,
        "years": "number",
        "evidence": ["string"]
      },
      "secondary_depths": [
        {
          "area": "string",
          "depth_level": 1-5,
          "years": "number"
        }
      ],
      "breadth_areas": ["string"],
      "breadth_score": 0-100,
      "depth_vs_breadth": "Deep Specialist | Balanced | Broad Generalist",
      "recommended_for": ["Role types this profile suits"]
    },
    
    "expertise_validation": {
      "certifications_count": "number",
      "certifications_relevant": "number",
      "certifications_list": ["string"],
      "thought_leadership": {
        "publications": "number",
        "speaking_engagements": "number",
        "patents": "number",
        "open_source_contributions": true | false,
        "industry_recognition": true | false,
        "awards": ["string"]
      },
      "hands_on_recency": "Current | Within 2 years | Within 5 years | 5+ years ago",
      "continuous_learning_evidence": true | false
    }
  }
}
```

### JD Requirements Schema

```json
{
  "depth_requirements": {
    "minimum_depth_level": "Entry | Developing | Proficient | Expert | Master",
    "preferred_depth_level": "string | null",
    
    "scope_requirements": {
      "minimum_scope": "Individual | Team | Department | Division | Organization | Enterprise",
      "preferred_scope": "string | null",
      "team_size_expected": "string | null",
      "budget_responsibility": "None | Small | Medium | Large | Enterprise",
      "geographic_scope": "Local | National | Regional | Global | null",
      "stakeholder_level_required": "string | null",
      "evidence": "string"
    },
    
    "complexity_requirements": {
      "minimum_complexity": "Low | Medium | High | Very High",
      "technical_complexity_required": "Low | Medium | High | Very High",
      "organizational_complexity_required": "Low | Medium | High | Very High",
      "expected_project_types": ["string"],
      "scale_expectations": "string | null",
      "evidence": "string"
    },
    
    "impact_expectations": {
      "impact_level_required": "Task | Project | Team | Department | Organization | Strategic",
      "measurable_outcomes_expected": true | false,
      "business_impact_required": true | false,
      "specific_impact_types": ["string"],
      "evidence": "string"
    },
    
    "progression_preferences": {
      "preferred_pattern": "Linear to Leadership | Technical Depth | Broad Experience | Any",
      "leadership_experience_required": true | false,
      "time_at_senior_level_minimum": "number | null",
      "recent_progression_preferred": true | false,
      "evidence": "string"
    },
    
    "specialization_requirements": {
      "required_type": "Deep Specialist | T-shaped | Generalist | Any",
      "primary_expertise_required": "string | null",
      "secondary_expertise_preferred": ["string"],
      "breadth_expected": true | false,
      "evidence": "string"
    },
    
    "expertise_requirements": {
      "certifications_required": ["string"],
      "certifications_preferred": ["string"],
      "thought_leadership_valued": true | false,
      "hands_on_required": true | false,
      "evidence": "string"
    }
  }
}
```

---

# STAGE 0: INPUT PARSING

## Prompt: Document Parser

```
<s>
You are a document parser. Extract text content from the uploaded CV/Resume and prepare it for analysis. Identify document structure and flag any parsing issues.
</s>

<input>
{{UPLOADED_DOCUMENT}}
</input>

<instructions>
1. Extract all text content preserving structure
2. Identify sections (Summary, Experience, Education, Skills, etc.)
3. Detect formatting that may cause ATS issues
4. Flag any parsing problems
5. Normalize date formats for processing
</instructions>

<output_schema>
{
  "parsing_status": "success | partial | failed",
  "document_info": {
    "file_type": "string",
    "page_count": "number",
    "word_count": "number",
    "has_images": "boolean",
    "has_tables": "boolean",
    "has_columns": "boolean"
  },
  "sections_detected": {
    "contact": "boolean",
    "summary": "boolean",
    "experience": "boolean",
    "education": "boolean",
    "skills": "boolean",
    "certifications": "boolean",
    "projects": "boolean",
    "other": ["string"]
  },
  "parsing_issues": ["string"],
  "raw_text": "string",
  "structured_content": {
    "contact_info": {},
    "sections": []
  }
}
</output_schema>
```

---

# STAGE 1: CV ANALYSIS ENGINE

## Prompt: CV Analyzer with Nature Classification and Experience Factors

```
<s>
You are a CV/Resume analyzer implementing STRICT MODE analysis with Nature Classification and Experience Factors. Analyze the CV across 8 categories and generate comprehensive issue codes.
</s>

<input>
{{PARSED_CV_CONTENT}}
</input>

<instructions>

## ANALYSIS CATEGORIES

Analyze the CV across these 8 categories:

### Category A: ATS Structure (A1-A9)
- Contact information completeness
- File format compatibility
- Date formatting consistency
- Section header clarity
- Length appropriateness
- Parsing risk factors

### Category B: Content Realism (B1-B8)
- Jargon and buzzword usage
- Claim specificity
- Metric verifiability
- Timeline consistency
- Skill-role alignment
- Achievement reasonability

### Category C: Skill Validation (C1-C6)
- Evidence-based skill verification
- Use 5-level proficiency scale:
  - L1: Awareness (mentioned in learning context)
  - L2: Beginner (used with guidance, <1 year)
  - L3: Proficient (independent use, 1-3 years)
  - L4: Advanced (expert level, 3-5+ years, teaches others)
  - L5: Master (industry recognition, thought leadership)
- Ghost skill detection (claimed but no evidence)
- Skill recency assessment

### Category D: Strengths Discovery (D1-D8)
- Quantified achievements
- Leadership evidence
- Technical depth
- Business impact
- Career growth
- Unique differentiators

### Category E: Tone & Clarity (E1-E6)
- Voice consistency
- Action verb strength
- Readability
- Professional tone
- Grammar/spelling
- Clarity of statements

### Category F: Timeline & Professional Age (F1-F5)
- Gap detection
- Tenure patterns
- Progression assessment
- Calculate total professional years

### Category G: Nature Classification (G1-G9)
Extract CV Nature profile for matching:
- Education nature (field, level, type)
- Domain nature (primary, secondary, depth)
- Industry nature (experience, breadth)
- Work style nature
- Career path nature

### Category H: Experience Factors (H1-H9) - NEW
Analyze both YEARS and DEPTH of experience:

**Years Analysis (H1-H4):**
- Calculate total professional years
- Break down by domain
- Break down by industry
- Break down by role level
- Assess recency
- Calculate weighted effective years

**Depth Analysis (H5-H9):**
- Assess scope of responsibility
- Evaluate project complexity
- Measure demonstrated impact
- Analyze progression pattern
- Determine specialization profile

## STRICT MODE RULES

Apply these rules consistently:

RULE 1 - JARGON PENALTY:
If buzzwords appear without supporting evidence:
→ Flag B1, reduce related skill to max L2

RULE 2 - GHOST SKILL DETECTION:
If skill listed but ZERO evidence in experience:
→ Flag C3, assign L0, exclude from skill count

RULE 3 - PROFICIENCY CAP:
If years < threshold for claimed expertise:
- <1 year: Max L2
- 1-2 years: Max L3
- 3-5 years: Max L4
- 5+ years: Can be L5

RULE 4 - VALIDATION CASCADE:
Skills in "Skills" section only = L1 max unless corroborated

RULE 5 - RECENCY DECAY:
Skills not used in 5+ years:
→ Flag C5, reduce by 1 level

RULE 6 - EXPERIENCE DEPTH VALIDATION:
Claims of scope/complexity must have evidence:
→ Flag H5/H6/H7 if unsubstantiated

</instructions>

<output_schema>
{
  "cv_metadata": {
    "candidate_name": "string",
    "current_title": "string",
    "location": "string",
    "contact": {
      "email": "string | null",
      "phone": "string | null",
      "linkedin": "string | null",
      "portfolio": "string | null"
    }
  },
  
  "category_scores": {
    "A_ats_structure": {
      "score": 0-100,
      "issues": [
        {
          "code": "A1-A9",
          "severity": "info | low | medium | high | critical",
          "detail": "string",
          "location": "string | null",
          "recommendation": "string"
        }
      ]
    },
    "B_content_realism": { "score": 0-100, "issues": [] },
    "C_skill_validation": { "score": 0-100, "issues": [] },
    "D_strengths": { "score": 0-100, "items": [] },
    "E_tone_clarity": { "score": 0-100, "issues": [] },
    "F_timeline": { "score": 0-100, "issues": [] },
    "G_nature_fit": { "score": 0-100, "issues": [] },
    "H_experience_factors": { "score": 0-100, "issues": [] }
  },
  
  "skills_inventory": {
    "validated_skills": [
      {
        "skill": "string",
        "level": 1-5,
        "level_label": "Awareness | Beginner | Proficient | Advanced | Master",
        "years": "number",
        "recency": "Current | Recent | Dated | Stale",
        "evidence": ["string"],
        "validation_status": "Validated | Implied | Ghost"
      }
    ],
    "ghost_skills": ["string"],
    "skill_summary": {
      "total_claimed": "number",
      "total_validated": "number",
      "validation_rate": "percentage",
      "avg_proficiency": "number",
      "technical_skills_count": "number",
      "soft_skills_count": "number"
    }
  },
  
  "cv_nature": {
    "education_nature": {
      "highest_degree": "string",
      "field": "string",
      "field_category": "string",
      "institution_tier": "string",
      "graduation_recency": "string",
      "continuous_learning": "boolean",
      "certifications": ["string"],
      "bootcamp_graduate": "boolean",
      "self_taught_evidence": "boolean"
    },
    "domain_nature": {
      "primary_domain": "string",
      "secondary_domains": ["string"],
      "domain_depth": "string",
      "domain_years": "number",
      "domain_trajectory": "string"
    },
    "industry_nature": {
      "primary_industry": "string",
      "secondary_industries": ["string"],
      "industry_years": "number",
      "industry_depth": "string",
      "cross_industry": "boolean"
    },
    "work_style_nature": {
      "preferred_arrangement": "string",
      "company_stages_experienced": ["string"],
      "team_sizes_experienced": ["string"],
      "work_pace_evidence": "string"
    },
    "career_path_nature": {
      "trajectory": "string",
      "progression_rate": "string",
      "current_level": "string",
      "time_at_current_level": "number",
      "is_career_changer": "boolean",
      "previous_field": "string | null",
      "gaps_present": "boolean",
      "gap_details": ["string"]
    }
  },
  
  "experience_years": {
    "total_professional_years": "number",
    "calculation_method": "string",
    "calculation_notes": "string",
    "domain_breakdown": [
      {
        "domain": "string",
        "years": "number",
        "recency": "string",
        "last_role_end": "string",
        "roles_count": "number",
        "continuous": "boolean"
      }
    ],
    "industry_breakdown": [
      {
        "industry": "string",
        "years": "number",
        "companies": ["string"],
        "recency": "string"
      }
    ],
    "role_level_breakdown": [
      {
        "level": "string",
        "years": "number",
        "recency": "string"
      }
    ],
    "function_breakdown": [
      {
        "function": "string",
        "years": "number",
        "evidence": ["string"]
      }
    ],
    "recency_analysis": {
      "years_in_last_3_years": "number",
      "years_in_last_5_years": "number",
      "years_in_last_10_years": "number",
      "most_recent_relevant_role": "string",
      "time_since_relevant_role": "number",
      "recency_score": 0-100
    },
    "recency_weighted_experience": {
      "formula": "string",
      "effective_years": "number",
      "explanation": "string"
    },
    "gaps": [],
    "continuity_score": 0-100,
    "consistency_score": 0-100
  },
  
  "experience_depth": {
    "overall_depth_score": 0-100,
    "depth_level": "string",
    "scope_of_responsibility": {
      "score": 0-100,
      "current_level": "string",
      "max_level_achieved": "string",
      "evidence": [],
      "quantified_scope": {
        "max_team_size_managed": "number | null",
        "max_budget_managed": "string | null",
        "max_revenue_responsibility": "string | null",
        "geographic_scope": "string | null",
        "stakeholder_level": "string"
      }
    },
    "complexity_indicators": {
      "score": 0-100,
      "level": "string",
      "evidence": [],
      "complexity_dimensions": {},
      "project_types": ["string"],
      "technology_breadth": "string"
    },
    "impact_level": {
      "score": 0-100,
      "level": "string",
      "business_impact_demonstrated": "boolean",
      "quantified_impacts": [],
      "impact_summary": {}
    },
    "progression_pattern": {
      "score": 0-100,
      "pattern": "string",
      "trajectory_description": "string",
      "progression_rate": "string",
      "time_at_senior_levels": "number",
      "promotions_count": "number",
      "progression_health": "string"
    },
    "specialization_profile": {
      "type": "string",
      "primary_depth": {},
      "secondary_depths": [],
      "breadth_areas": ["string"],
      "breadth_score": 0-100,
      "depth_vs_breadth": "string"
    },
    "expertise_validation": {
      "certifications_count": "number",
      "certifications_relevant": "number",
      "certifications_list": ["string"],
      "thought_leadership": {},
      "hands_on_recency": "string"
    }
  },
  
  "overall_assessment": {
    "score": 0-100,
    "level": "Exceptional | Strong | Good | Fair | Needs Work | Weak",
    "score_inflation": "boolean",
    "confidence": 0.0-1.0,
    "primary_strengths": ["string"],
    "critical_issues": ["string"],
    "improvement_potential": "number (points achievable)"
  },
  
  "hr_recommendation": {
    "recommendation": "Strong Recommend | Recommend | Consider | Caution | Not Recommended",
    "confidence": 0.0-1.0,
    "risk_factors": ["string"],
    "verification_needed": ["string"]
  }
}
</output_schema>
```

---

# STAGE 2: JD ANALYSIS ENGINE

## Prompt: Job Description Analyzer with Nature Classification and Experience Requirements

```
<s>
You are a Job Description analyzer. Extract requirements and create a matching-ready profile, including Nature Classification and detailed Experience Requirements.
</s>

<input>
{{JOB_DESCRIPTION_TEXT}}
</input>

<instructions>
Parse the job description and extract:

1. **Basic Metadata**
   - Job title, company, location
   - Employment type, seniority level
   - Salary range if present

2. **Skill Requirements**
   - Tier 1 (Must Have): Explicitly required, mentioned multiple times, in title
   - Tier 2 (Should Have): Listed in requirements, mentioned once
   - Tier 3 (Nice to Have): In preferred/bonus section, implied
   - Assign minimum proficiency levels (1-5)

3. **Experience Requirements (DETAILED)**
   - Total years required/preferred
   - Domain-specific years
   - Industry-specific years
   - Leadership years (people, budget, technical)
   - Function-specific years
   - Recency requirements

4. **Depth Requirements (NEW)**
   - Scope expectations
   - Complexity expectations
   - Impact expectations
   - Progression preferences
   - Specialization requirements

5. **Nature Classification**
   - Education requirements and flexibility
   - Domain requirements and flexibility
   - Industry requirements and flexibility
   - Work style expectations
   - Candidate background preferences

6. **Red Flags**
   - Unrealistic combinations
   - Conflicting requirements
   - Scope creep indicators
</instructions>

<output_schema>
{
  "jd_metadata": {
    "job_title": "string",
    "company": "string | null",
    "location": "string | null",
    "employment_type": "string | null",
    "seniority_level": "Junior | Mid-Level | Senior | Lead | Staff | Principal | Director | VP | C-Level",
    "salary_range": "string | null",
    "posting_date": "string | null"
  },
  
  "skills": {
    "tier_1_must_have": [
      {
        "skill": "string",
        "minimum_level": 1-5,
        "years_required": "number | null",
        "context": "string",
        "evidence": "string (quote from JD)"
      }
    ],
    "tier_2_should_have": [],
    "tier_3_nice_to_have": []
  },
  
  "soft_skills": [
    {
      "skill": "string",
      "importance": "Required | Preferred",
      "evidence": "string"
    }
  ],
  
  "experience_requirements": {
    "total_years": {
      "minimum": "number",
      "preferred": "number | null",
      "maximum": "number | null",
      "evidence": "string",
      "strictness": "Hard | Soft | Flexible"
    },
    "domain_specific_years": [
      {
        "domain": "string",
        "minimum_years": "number",
        "preferred_years": "number | null",
        "evidence": "string",
        "strictness": "Hard | Soft | Flexible",
        "substitutable": "boolean",
        "substitutes": ["string"]
      }
    ],
    "industry_specific_years": {
      "industry": "string | null",
      "minimum_years": "number | null",
      "preferred_years": "number | null",
      "evidence": "string",
      "strictness": "Hard | Preferred | Flexible | Any"
    },
    "leadership_years": {
      "people_management": "number | null",
      "technical_leadership": "number | null",
      "budget_management": "number | null",
      "evidence": "string"
    },
    "function_specific_years": [],
    "recency_requirements": {
      "recent_relevant_experience": "boolean",
      "max_gap_from_current": "number | null",
      "currently_active_preferred": "boolean",
      "evidence": "string"
    }
  },
  
  "depth_requirements": {
    "minimum_depth_level": "Entry | Developing | Proficient | Expert | Master",
    "preferred_depth_level": "string | null",
    "scope_requirements": {
      "minimum_scope": "Individual | Team | Department | Division | Organization | Enterprise",
      "preferred_scope": "string | null",
      "team_size_expected": "string | null",
      "budget_responsibility": "None | Small | Medium | Large | Enterprise",
      "geographic_scope": "string | null",
      "stakeholder_level_required": "string | null",
      "evidence": "string"
    },
    "complexity_requirements": {
      "minimum_complexity": "Low | Medium | High | Very High",
      "technical_complexity_required": "string",
      "organizational_complexity_required": "string",
      "expected_project_types": ["string"],
      "scale_expectations": "string | null",
      "evidence": "string"
    },
    "impact_expectations": {
      "impact_level_required": "string",
      "measurable_outcomes_expected": "boolean",
      "business_impact_required": "boolean",
      "specific_impact_types": ["string"],
      "evidence": "string"
    },
    "progression_preferences": {
      "preferred_pattern": "string",
      "leadership_experience_required": "boolean",
      "time_at_senior_level_minimum": "number | null",
      "recent_progression_preferred": "boolean",
      "evidence": "string"
    },
    "specialization_requirements": {
      "required_type": "Deep Specialist | T-shaped | Generalist | Any",
      "primary_expertise_required": "string | null",
      "secondary_expertise_preferred": ["string"],
      "breadth_expected": "boolean",
      "evidence": "string"
    }
  },
  
  "jd_nature": {
    "education_requirements": {
      "field_required": "Specific Field | STEM | Technical | Any | Not Specified",
      "field_specific": "string | null",
      "level_required": "PhD | Masters | Bachelors | None Specified",
      "level_preferred": "string | null",
      "strict_requirement": "boolean",
      "equivalent_experience_ok": "boolean",
      "bootcamp_ok": "boolean | not_specified",
      "self_taught_ok": "boolean | not_specified"
    },
    "domain_requirements": {
      "primary_domain": "string",
      "specialization_required": "string | null",
      "related_domains_ok": "boolean",
      "domain_flexibility": "Strict | Moderate | Flexible"
    },
    "industry_requirements": {
      "industry_required": "string | null",
      "industry_preferred": "string | null",
      "industry_experience_years": "number | null",
      "industry_flexibility": "Strict | Preferred | Flexible | Any"
    },
    "work_style_requirements": {
      "employment_type": "string",
      "work_arrangement": "string",
      "location_requirement": "string",
      "travel_required": "boolean",
      "company_stage": "string"
    },
    "candidate_expectations": {
      "background_preference": "string",
      "experience_type": "string",
      "trajectory_preference": "string",
      "gaps_tolerance": "string",
      "seniority_level": "string"
    },
    "role_characteristics": {
      "pace": "string",
      "structure": "string",
      "team_size": "string",
      "impact_scope": "string"
    }
  },
  
  "responsibilities": ["string"],
  
  "red_flags": [
    {
      "type": "string",
      "issue": "string",
      "impact": "string"
    }
  ],
  
  "jd_quality": {
    "specificity_score": 0-100,
    "realism_score": 0-100,
    "clarity_score": 0-100,
    "issues": ["string"]
  },
  
  "matching_keywords": ["string"],
  
  "taxonomy": {
    "level_1": "string",
    "level_2": "string",
    "level_3": "string",
    "level_4_specialization": {
      "primary_stack": ["string"],
      "secondary_stack": ["string"],
      "domains": ["string"]
    }
  }
}
</output_schema>
```

---

# STAGE 3: MATCH & SCORE ENGINE

## Prompt: CV-JD Matcher with Complete Experience Analysis

```
<s>
You are the CV-JD Matching Engine. Compare analyzed CV against JD requirements and calculate fit scores across all dimensions including Nature Fit and Experience Factors.
</s>

<inputs>
CV Analysis: {{CV_ANALYSIS_JSON}}
JD Analysis: {{JD_ANALYSIS_JSON}}
</inputs>

<matching_rules>

## OVERALL SCORE FORMULA (v2.2)

```
OVERALL MATCH SCORE = (
  Tier 1 Skills         × 0.20 +
  Tier 2 Skills         × 0.10 +
  Tier 3 Skills         × 0.05 +
  Years of Experience   × 0.15 +
  Depth of Experience   × 0.15 +
  Nature Fit            × 0.20 +
  Soft Skills           × 0.10 +
  ATS/Presentation      × 0.05
)
```

## SKILL MATCHING

For each JD skill requirement:
1. Find matching CV skill (exact or semantic match)
2. Compare levels: CV_Level vs JD_Required_Level
3. Apply match scoring:
   - CV_Level >= JD_Level: 100%
   - CV_Level = JD_Level - 1: 70%
   - CV_Level = JD_Level - 2: 40%
   - CV_Level < JD_Level - 2: 0%
   - Ghost Skill: 0% (regardless of listing)

## YEARS OF EXPERIENCE MATCHING (H1-H4)

### Total Years (H1)
```
if CV_Years >= JD_Preferred:
    score = 100
elif CV_Years >= JD_Minimum:
    score = 80 + ((CV_Years - JD_Min) / (JD_Pref - JD_Min)) × 20
elif CV_Years >= JD_Minimum - 2:
    score = 50 + ((CV_Years - (JD_Min - 2)) / 2) × 30
elif CV_Years >= JD_Minimum - 5:
    score = 20 + ((CV_Years - (JD_Min - 5)) / 3) × 30
else:
    score = (CV_Years / JD_Minimum) × 20
```

### Domain Years (H2)
```
For each required domain:
  if CV_Domain_Years >= JD_Domain_Min:
      domain_score = 100
  elif CV_Domain_Years >= JD_Domain_Min × 0.7:
      domain_score = 70
  elif CV_Domain_Years >= JD_Domain_Min × 0.5:
      domain_score = 50
  elif has_related_domain_experience:
      domain_score = 40
  else:
      domain_score = (CV_Domain_Years / JD_Domain_Min) × 30

Domain Score = weighted_average(all domain scores)
```

### Industry Years (H3)
```
if JD_Industry_Flexibility == "Any":
    score = 90  # Minor bonus for matching
elif CV_Industry == JD_Industry:
    if CV_Industry_Years >= JD_Industry_Min:
        score = 100
    else:
        score = 60 + (CV_Industry_Years / JD_Industry_Min) × 40
elif CV has related industry:
    score = 60
else:
    if JD_Industry_Flexibility == "Strict":
        score = 20
    elif JD_Industry_Flexibility == "Preferred":
        score = 50
    else:
        score = 70
```

### Recency (H4)
```
if CV_Recency_Score >= 90:  # Currently active
    score = 100
elif CV_Recency_Score >= 70:  # Within 2 years
    score = 90
elif CV_Recency_Score >= 50:  # Within 5 years
    score = 70
elif CV_Recency_Score >= 30:  # Within 10 years
    score = 50
else:
    score = 30

if JD requires "recent experience":
    Apply 0.8x multiplier if score < 70
```

### Years Score Total
```
YEARS_SCORE = (
    Total Years Match    × 0.35 +
    Domain Years Match   × 0.30 +
    Industry Years Match × 0.20 +
    Recency Score        × 0.15
)
```

## DEPTH OF EXPERIENCE MATCHING (H5-H9)

### Scope Match (H5)
```
scope_levels = [Individual, Team, Department, Division, Organization, Enterprise]
cv_idx = scope_levels.index(CV_Scope)
jd_min_idx = scope_levels.index(JD_Min_Scope)
jd_pref_idx = scope_levels.index(JD_Pref_Scope) if JD_Pref_Scope else jd_min_idx

if cv_idx >= jd_pref_idx:
    score = 100
elif cv_idx >= jd_min_idx:
    score = 80
elif cv_idx == jd_min_idx - 1:
    score = 60
elif cv_idx == jd_min_idx - 2:
    score = 40
else:
    score = 20
```

### Complexity Match (H6)
```
complexity_levels = [Low, Medium, High, Very High, Exceptional]
cv_complexity = calculate_overall_complexity(CV_Complexity_Dimensions)
jd_complexity = JD_Min_Complexity

if cv_complexity >= jd_complexity:
    score = 100
elif cv_complexity == jd_complexity - 1:
    score = 70
else:
    score = 40

# Bonus for matching project types
matching_project_types = intersection(CV_Project_Types, JD_Expected_Project_Types)
type_bonus = (len(matching_project_types) / len(JD_Expected_Project_Types)) × 10
score = min(100, score + type_bonus)
```

### Impact Match (H7)
```
if CV_Business_Impact and JD_Business_Impact_Required:
    base_score = CV_Impact_Score
elif CV_Business_Impact and not JD_Business_Impact_Required:
    base_score = 100  # Exceeds expectations
elif not CV_Business_Impact and JD_Business_Impact_Required:
    base_score = 40  # Gap
else:
    base_score = 70  # Neutral

# Adjust for quantification
if CV_Quantified_Achievements >= 5:
    quantification_bonus = 10
elif CV_Quantified_Achievements >= 3:
    quantification_bonus = 5
else:
    quantification_bonus = 0

score = min(100, base_score + quantification_bonus)
```

### Progression Match (H8)
```
if CV_Progression_Pattern matches JD_Preferred_Pattern:
    score = 100
elif CV_Progression_Health == "Excellent":
    score = 90
elif CV_Progression_Health == "Good":
    score = 80
elif CV_Progression_Pattern == "Lateral" and JD allows lateral:
    score = 75
elif CV_Progression_Health == "Moderate":
    score = 60
elif CV_Progression_Pattern == "Plateau":
    score = 50
else:
    score = 40

# Leadership experience bonus
if JD_Leadership_Required and CV_Time_At_Senior_Levels >= JD_Min_Senior_Years:
    score = min(100, score + 10)
```

### Specialization Match (H9)
```
profile_compatibility = {
    ("I-shaped", "Deep Specialist"): 100,
    ("I-shaped", "T-shaped"): 60,
    ("I-shaped", "Generalist"): 40,
    ("T-shaped", "Deep Specialist"): 80,
    ("T-shaped", "T-shaped"): 100,
    ("T-shaped", "Generalist"): 80,
    ("Pi-shaped", "Deep Specialist"): 70,
    ("Pi-shaped", "T-shaped"): 90,
    ("Pi-shaped", "Generalist"): 85,
    ("Dash-shaped", "Deep Specialist"): 30,
    ("Dash-shaped", "T-shaped"): 60,
    ("Dash-shaped", "Generalist"): 100,
    ("Any", "*"): 80
}

score = profile_compatibility.get((CV_Type, JD_Type), 70)

# Expertise match bonus
if CV_Primary_Expertise == JD_Primary_Expertise_Required:
    score = min(100, score + 15)
```

### Depth Score Total
```
DEPTH_SCORE = (
    Scope Match          × 0.25 +
    Complexity Match     × 0.25 +
    Impact Match         × 0.20 +
    Progression Match    × 0.15 +
    Specialization Match × 0.15
)
```

## NATURE FIT MATCHING (G1-G9)

### Education Fit
```
FIELD MATCH:
- Exact field: 100%
- Related field: 80%
- STEM for Technical: 70%
- Any technical for Tech: 60%
- Unrelated + equivalent_exp_ok: 50%
- Unrelated + strict: 20%

LEVEL MATCH:
- Meets/exceeds: 100%
- One below + strong exp: 80%
- One below: 60%
- Two+ below: 30%

ALTERNATIVE PATH BONUS:
- If bootcamp_ok + strong portfolio: +20%
- If self_taught_ok + certifications: +10%

Education Fit = Field Match × 0.6 + Level Match × 0.4 + Bonuses
```

### Domain Fit
```
- Exact domain: 100%
- Secondary domain: 70%
- Related domain: 60%
- Unrelated + strict: 20%
```

### Industry Fit
```
- Same industry: 100%
- Related industry: 70%
- Any industry OK: 80%
- Unrelated + strict: 30%
```

### Work Style Fit
```
- Exact match: 100%
- Partial match: 70%
- Mismatch + flexible: 60%
- Mismatch + strict: 40%
```

### Career Path Fit
```
- Matches preference: 100%
- Pivot + pivot_ok: 80%
- Pivot + pivot_not_ok: 40%
- Gaps + gaps_ok: 80%
- Gaps + no_gaps: 50%
- Career changer + ok: 70%
- Career changer + traditional_only: 30%
```

### Nature Fit Total
```
NATURE_FIT = (
    Education Fit   × 0.25 +
    Domain Fit      × 0.30 +
    Industry Fit    × 0.15 +
    Work Style Fit  × 0.10 +
    Career Path Fit × 0.20
)
```

## ISSUE CODE GENERATION

Generate codes based on mismatches:

**H-Codes (Experience):**
- H1: Total years < JD minimum by >20%
- H2: Domain years < JD minimum by >30%
- H3: Industry years < JD minimum (when strict)
- H4: Recency score < 50
- H5: Scope < JD minimum by >1 level
- H6: Complexity < JD requirement
- H7: Impact score < 60 when business impact required
- H8: Progression pattern significantly different
- H9: Profile type mismatch

**G-Codes (Nature):**
- G1: Education field mismatch
- G2: Education level mismatch
- G3: Domain mismatch
- G4: Industry mismatch (strict)
- G5: Work style mismatch
- G6: Career path mismatch
- G7: Seniority gap > 1 level
- G8: Background type mismatch
- G9: Career changer detected

## MATCH GRADE THRESHOLDS

| Score | Grade | Recommendation |
|-------|-------|----------------|
| 90-100 | A | Strong Match - Highly Recommended |
| 80-89 | A- | Strong Match - Recommended |
| 70-79 | B+ | Good Match - Recommended |
| 60-69 | B | Good Match - Consider |
| 50-59 | C+ | Conditional Match |
| 40-49 | C | Weak Match - Stretch |
| 30-39 | D | Weak Match - Not Recommended |
| 0-29 | F | Poor Match |

</matching_rules>

<output_schema>
{
  "match_metadata": {
    "cv_name": "string",
    "jd_title": "string",
    "jd_company": "string | null",
    "match_date": "ISO8601",
    "engine_version": "2.2"
  },
  
  "overall_match": {
    "score": 0-100,
    "grade": "A-F",
    "recommendation": "Strong Match | Good Match | Conditional Match | Weak Match | Not Recommended",
    "confidence": 0.0-1.0,
    "summary": "string"
  },
  
  "component_scores": {
    "tier_1_skills": {
      "score": 0-100,
      "weight": 0.20,
      "weighted_score": "number",
      "matches": [],
      "gaps": []
    },
    "tier_2_skills": {
      "score": 0-100,
      "weight": 0.10,
      "weighted_score": "number",
      "matches": [],
      "gaps": []
    },
    "tier_3_skills": {
      "score": 0-100,
      "weight": 0.05,
      "weighted_score": "number",
      "matches": []
    },
    "years_of_experience": {
      "score": 0-100,
      "weight": 0.15,
      "weighted_score": "number",
      "breakdown": {
        "total_years": {
          "score": 0-100,
          "cv_value": "number",
          "jd_minimum": "number",
          "jd_preferred": "number | null",
          "status": "Exceeds | Meets | Below | Critical Gap"
        },
        "domain_years": {
          "score": 0-100,
          "details": []
        },
        "industry_years": {
          "score": 0-100,
          "cv_industry": "string",
          "cv_years": "number",
          "jd_industry": "string | null",
          "jd_years": "number | null",
          "status": "string"
        },
        "recency": {
          "score": 0-100,
          "cv_recency_score": "number",
          "status": "string"
        }
      },
      "issues": []
    },
    "depth_of_experience": {
      "score": 0-100,
      "weight": 0.15,
      "weighted_score": "number",
      "breakdown": {
        "scope": {
          "score": 0-100,
          "cv_level": "string",
          "jd_required": "string",
          "status": "string"
        },
        "complexity": {
          "score": 0-100,
          "cv_level": "string",
          "jd_required": "string",
          "matching_project_types": ["string"],
          "status": "string"
        },
        "impact": {
          "score": 0-100,
          "cv_has_business_impact": "boolean",
          "jd_requires_business_impact": "boolean",
          "cv_quantified_achievements": "number",
          "status": "string"
        },
        "progression": {
          "score": 0-100,
          "cv_pattern": "string",
          "jd_preferred": "string",
          "cv_health": "string",
          "status": "string"
        },
        "specialization": {
          "score": 0-100,
          "cv_type": "string",
          "jd_required": "string",
          "expertise_match": "boolean",
          "status": "string"
        }
      },
      "issues": []
    },
    "nature_fit": {
      "score": 0-100,
      "weight": 0.20,
      "weighted_score": "number",
      "breakdown": {
        "education_fit": {
          "score": 0-100,
          "cv_field": "string",
          "cv_level": "string",
          "jd_required_field": "string",
          "jd_required_level": "string",
          "match_type": "string",
          "notes": "string"
        },
        "domain_fit": {
          "score": 0-100,
          "cv_domain": "string",
          "jd_domain": "string",
          "match_type": "string"
        },
        "industry_fit": {
          "score": 0-100,
          "cv_industry": "string",
          "jd_industry": "string | null",
          "flexibility": "string"
        },
        "work_style_fit": {
          "score": 0-100,
          "cv_style": "string",
          "jd_style": "string"
        },
        "career_path_fit": {
          "score": 0-100,
          "cv_trajectory": "string",
          "jd_preference": "string",
          "is_career_changer": "boolean"
        }
      },
      "issues": []
    },
    "soft_skills": {
      "score": 0-100,
      "weight": 0.10,
      "weighted_score": "number",
      "matches": []
    },
    "ats_presentation": {
      "score": 0-100,
      "weight": 0.05,
      "weighted_score": "number"
    }
  },
  
  "all_issues": [
    {
      "code": "string",
      "category": "A-H",
      "type": "string",
      "severity": "info | low | medium | high | critical",
      "cv_has": "string",
      "jd_wants": "string",
      "detail": "string",
      "impact_on_score": "number",
      "recommendation": "string"
    }
  ],
  
  "skill_gaps": [],
  
  "strengths": [],
  
  "recommendations": {
    "student_view": {
      "apply_recommendation": "string",
      "confidence_message": "string",
      "key_strengths_for_role": ["string"],
      "areas_to_highlight": ["string"],
      "gaps_to_address": ["string"],
      "preparation_tips": ["string"],
      "experience_positioning": "string"
    },
    "hr_view": {
      "hire_recommendation": "string",
      "confidence": 0.0-1.0,
      "risk_factors": ["string"],
      "experience_assessment": "string",
      "depth_assessment": "string",
      "verification_needed": ["string"],
      "interview_focus_areas": ["string"],
      "compensation_positioning": "string"
    }
  },
  
  "ui_output": {
    "overallScore": 0-100,
    "level": "string",
    "verdict": "string",
    "sections": [],
    "strengths": [],
    "weaknesses": [],
    "recommendations": [],
    "highlights": [],
    "quickStats": {
      "yearsExperience": "number",
      "domainYears": "number",
      "depthLevel": "string",
      "validatedSkills": "number",
      "ghostSkills": "number",
      "validationRate": "string",
      "quantificationRate": "string",
      "matchGrade": "string"
    }
  }
}
</output_schema>
```

---

# STAGE 4: DUAL-AUDIENCE REPORT GENERATOR

## Prompt: Report Generator

```
<s>
You are the Report Generator. Transform match analysis into dual-audience reports optimized for Students and HR professionals, including the new Experience Factors insights.
</s>

<input>
{{MATCH_ANALYSIS_JSON}}
</input>

<instructions>
Generate two distinct reports from the same analysis:

## STUDENT VIEW
- Tone: Encouraging, growth-focused
- Lead with strengths
- Frame gaps as opportunities
- Provide actionable improvement steps
- Experience messaging: "Your X years demonstrate commitment..." or "You're building valuable experience..."

## HR VIEW
- Tone: Objective, risk-focused
- Lead with fit assessment
- Highlight verification needs
- Flag experience gaps clearly
- Experience messaging: "Candidate has X years vs required Y years" with clear gap analysis

Both views must include:
1. Overall recommendation
2. Experience assessment (Years + Depth)
3. Key strengths
4. Gap analysis
5. Specific recommendations
</instructions>

<output_schema>
{
  "student_report": {
    "headline": "string",
    "overall_score": 0-100,
    "recommendation": "string",
    "confidence_message": "string",
    
    "experience_summary": {
      "years_message": "string (encouraging framing)",
      "depth_message": "string (highlighting achievements)",
      "growth_opportunities": ["string"]
    },
    
    "top_strengths": [
      {
        "title": "string",
        "detail": "string",
        "relevance_to_role": "string"
      }
    ],
    
    "growth_areas": [
      {
        "area": "string",
        "current_state": "string",
        "target_state": "string",
        "action_steps": ["string"],
        "timeline": "string"
      }
    ],
    
    "application_strategy": {
      "positioning": "string",
      "key_points_to_emphasize": ["string"],
      "potential_concerns_to_address": ["string"],
      "interview_preparation": ["string"]
    },
    
    "next_steps": ["string"]
  },
  
  "hr_report": {
    "headline": "string",
    "overall_score": 0-100,
    "recommendation": "string",
    "confidence": 0.0-1.0,
    
    "experience_assessment": {
      "years_analysis": {
        "total_years": "string",
        "domain_years": "string",
        "industry_years": "string",
        "recency": "string",
        "gaps_identified": ["string"],
        "risk_level": "Low | Medium | High"
      },
      "depth_analysis": {
        "scope_assessment": "string",
        "complexity_assessment": "string",
        "impact_assessment": "string",
        "progression_assessment": "string",
        "overall_depth_rating": "string"
      }
    },
    
    "fit_summary": {
      "skills_fit": "string",
      "experience_fit": "string",
      "nature_fit": "string",
      "culture_fit_indicators": "string"
    },
    
    "risk_factors": [
      {
        "risk": "string",
        "severity": "Low | Medium | High | Critical",
        "mitigation": "string"
      }
    ],
    
    "verification_checklist": [
      {
        "item": "string",
        "priority": "High | Medium | Low",
        "method": "string"
      }
    ],
    
    "interview_focus": [
      {
        "area": "string",
        "questions": ["string"],
        "what_to_look_for": "string"
      }
    ],
    
    "compensation_guidance": {
      "positioning": "string",
      "factors": ["string"]
    },
    
    "decision_summary": {
      "proceed": "boolean",
      "conditions": ["string"],
      "alternatives": ["string"]
    }
  }
}
</output_schema>
```

---

# OUTPUT SCHEMAS SUMMARY

## Quick Reference: New Fields in v2.2

### Stage 1 CV Analysis - New Outputs
- `experience_years.domain_breakdown[]`
- `experience_years.industry_breakdown[]`
- `experience_years.role_level_breakdown[]`
- `experience_years.function_breakdown[]`
- `experience_years.recency_analysis`
- `experience_years.recency_weighted_experience`
- `experience_depth.scope_of_responsibility`
- `experience_depth.complexity_indicators`
- `experience_depth.impact_level`
- `experience_depth.progression_pattern`
- `experience_depth.specialization_profile`
- `experience_depth.expertise_validation`

### Stage 2 JD Analysis - New Outputs
- `experience_requirements.total_years`
- `experience_requirements.domain_specific_years[]`
- `experience_requirements.industry_specific_years`
- `experience_requirements.leadership_years`
- `experience_requirements.function_specific_years[]`
- `experience_requirements.recency_requirements`
- `depth_requirements.scope_requirements`
- `depth_requirements.complexity_requirements`
- `depth_requirements.impact_expectations`
- `depth_requirements.progression_preferences`
- `depth_requirements.specialization_requirements`

### Stage 3 Match Analysis - New Outputs
- `component_scores.years_of_experience`
- `component_scores.depth_of_experience`
- H-codes (H1-H9) in `all_issues[]`

---

# APPENDIX: EXPERIENCE FACTORS EXAMPLES

## Example: Senior Role Analysis

### CV Years Analysis
```json
{
  "experience_years": {
    "total_professional_years": 27,
    "domain_breakdown": [
      {"domain": "Enterprise Architecture", "years": 15, "recency": "Current"},
      {"domain": "IT Operations", "years": 10, "recency": "Within 5 years"},
      {"domain": "Solution Architecture", "years": 8, "recency": "Within 10 years"}
    ],
    "industry_breakdown": [
      {"industry": "Telecommunications", "years": 25, "recency": "Current"},
      {"industry": "Consulting", "years": 5, "recency": "Within 5 years"}
    ],
    "recency_weighted_experience": {
      "effective_years": 18.5,
      "explanation": "27 total years with strong recency weighting"
    }
  }
}
```

### CV Depth Analysis
```json
{
  "experience_depth": {
    "overall_depth_score": 92,
    "depth_level": "Expert",
    "scope_of_responsibility": {
      "score": 95,
      "current_level": "Enterprise",
      "quantified_scope": {
        "max_team_size_managed": 50,
        "max_budget_managed": "60M USD",
        "geographic_scope": "Regional (MENA)"
      }
    },
    "complexity_indicators": {
      "score": 90,
      "level": "Very High",
      "project_types": ["Transformation", "Integration", "Consolidation"]
    },
    "impact_level": {
      "score": 92,
      "level": "Strategic",
      "quantified_impacts": [
        {"metric": "Cost Reduction", "value": "30M SAR"},
        {"metric": "MTTR Reduction", "value": "60%"}
      ]
    },
    "specialization_profile": {
      "type": "T-shaped Expert",
      "primary_depth": {"area": "Enterprise Architecture", "depth_level": 5}
    }
  }
}
```

### Match Output
```json
{
  "component_scores": {
    "years_of_experience": {
      "score": 95,
      "weight": 0.15,
      "weighted_score": 14.25,
      "breakdown": {
        "total_years": {"score": 100, "status": "Exceeds"},
        "domain_years": {"score": 85, "status": "Strong"},
        "industry_years": {"score": 100, "status": "Exceeds"},
        "recency": {"score": 95, "status": "Current"}
      }
    },
    "depth_of_experience": {
      "score": 92,
      "weight": 0.15,
      "weighted_score": 13.8,
      "breakdown": {
        "scope": {"score": 95, "status": "Exceeds"},
        "complexity": {"score": 90, "status": "Meets"},
        "impact": {"score": 92, "status": "Strong"},
        "progression": {"score": 95, "status": "Excellent"},
        "specialization": {"score": 85, "status": "Good Match"}
      }
    }
  }
}
```

---

*Document Version: 2.2*
*Created: 2024-12-11*
*Changes: Added Experience Factors (Years + Depth) as Category H*
