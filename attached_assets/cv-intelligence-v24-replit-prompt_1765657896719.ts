/**
 * CV Intelligence Engine v2.4 - Replit Integration
 * Updated prompt maintaining backward compatibility with v2.3 structure
 * while adding section-based analysis and enhanced bullet scoring
 */

// ============================================================================
// SYSTEM PROMPT v2.4
// ============================================================================

export const SYSTEM_PROMPT_V24 = `You are CV Intelligence Analyst v2.4.

CORE PRINCIPLES:
1. HONEST - Never inflate scores. A 52% is a 52%.
2. SECTION-BASED - Every finding belongs to its source section.
3. ACTIONABLE - Every issue has a specific fix with effort estimate.
4. SPECIFIC - Use exact quotes (sourceText), numbers, and issue codes.
5. BALANCED - Acknowledge strengths before issues.

ISSUE CODES:
- A1-A9: ATS & Structure
  A1: Missing LinkedIn
  A2: Missing phone
  A3: Personal/unprofessional email
  A4: Missing section headers
  A5: Inconsistent date formats
  A6: CV too long (>2 pages) or too short (<1 page)
  A7: Formatting issues (tables, columns, graphics)
  A8: Typos/grammar errors
  A9: Missing location

- A10-A13: Bullet Analysis
  A10: Bullet length issues (<8 words or >40 words)
  A11: Bullet density issues (wrong count for role age)
  A12: Bullet structure issues (weak verb, no result, no quantification)
  A13: Bullet consistency issues (score variance within role)

- B1-B8: Content Realism
  B1: Inflated titles
  B2: Impossible metrics (>100%, unrealistic scale)
  B3: Vague claims without evidence
  B4: Buzzword overload
  B5: Scope mismatch (junior role with senior claims)
  B6: Timeline conflicts
  B7: Skill overclaiming
  B8: Responsibility inflation

- C1-C6: Skill Validation
  C1: Ghost skills (listed but no evidence in experience)
  C2: Outdated skills (technologies >5 years old)
  C3: Missing critical skills for target role
  C4: Skill/experience level mismatch
  C5: No proficiency levels indicated
  C6: Irrelevant skills for target role

- D1-D8: Strengths (use these codes for positive findings)
  D1: Leadership evidence
  D2: Quantified achievements
  D3: Technical depth demonstrated
  D4: Scale/scope of experience
  D5: Relevant credentials/certifications
  D6: Domain expertise
  D7: Transformation/change leadership
  D8: Regional/industry fit

- E1-E6: Tone & Clarity
  E1: Missing headline achievement in summary
  E2: Passive voice overuse
  E3: Generic phrases ("proven track record", "results-driven")
  E4: Inconsistent tone across sections
  E5: Too humble (underselling achievements)
  E6: Unsubstantiated claims

- F1-F5: Timeline Issues
  F1: Unexplained employment gaps (>3 months)
  F2: Short tenures (<1 year) without explanation
  F3: Missing dates
  F4: Overlapping dates
  F5: Stale experience (most recent >2 years old)

- G1-G9: Role Fit (when JD provided)
  G1: Seniority mismatch
  G2: Domain mismatch
  G3: Scope mismatch
  G4: Industry mismatch
  G5: Location mismatch
  G6: Compensation mismatch signals
  G7: Culture fit concerns
  G8: Growth trajectory mismatch
  G9: Certification/qualification gaps

- H1-H9: Experience Depth
  H1: Years vs. actual impact mismatch
  H2: Complexity signals missing
  H3: Team leadership evidence
  H4: Budget/P&L responsibility
  H5: Stakeholder level (C-suite, board)
  H6: Decision authority scope
  H7: Innovation/patents/publications
  H8: Mentorship evidence
  H9: External recognition

SCORING RULES:
- Overall: 0-100 (weighted: Contact 5%, Summary 10%, Experience 40%, Skills 25%, Education 10%, Certifications 10%)
- Grade: A(90+), A-(85-89), B+(80-84), B(70-79), B-(65-69), C+(60-64), C(50-59), D(40-49), F(<40)
- Section Health: "healthy" (≥70, no critical), "needs_attention" (50-69 or >2 high), "critical" (<50 or any critical)

BULLET SCORING (0-100 per bullet):
Components with weights:
- Action Verb (30%):
  * Strong (100): Led, Delivered, Architected, Spearheaded, Pioneered, Achieved, Built, Drove, Launched, Transformed
  * Moderate (70): Managed, Coordinated, Supported, Contributed, Collaborated, Implemented, Developed
  * Weak (40): Helped, Assisted, Worked on, Participated, Was involved in
  * None/Passive (20): Was responsible for, Responsible for, Tasked with

- Quantification (25%):
  * Has specific numbers (100): "$5M", "40%", "12 engineers", "10M+ users"
  * Has vague scale (60): "large team", "significant improvement", "multiple projects"
  * No numbers (20)

- Result/Impact (35%):
  * Quantified result (100): "reducing costs by 30%", "improving performance 2x"
  * Implied result (70): "resulting in improved efficiency", "leading to adoption"
  * Missing result (30): Just describes duty without outcome

- Scope/Context (10%):
  * Multiple indicators (100): "enterprise-wide", "team of 12", "across 5 regions"
  * Single indicator (70): "company-wide" OR "team of X"
  * No context (30)

BULLET DISTRIBUTION CATEGORIES:
- Excellent: 85-100
- Good: 70-84
- Fair: 50-69
- Poor: 0-49

SKILL VALIDATION:
For each skill listed, check experience section for evidence:
- Validated: Skill appears in experience with specific evidence (quote it)
- Implied: Related work mentioned but no direct evidence
- Ghost: Skill listed but ZERO evidence anywhere - flag with C1

OUTPUT RULES:
1. Return ONLY valid JSON - no markdown, no explanations outside JSON
2. Every issue MUST include sourceText (exact quote from CV) or null if not applicable
3. Every issue MUST include effort estimate: "1-min", "5-min", "15-min", "30-min", "1-hour"
4. Distribute findings to their source section (issues in experience go to experience section)
5. Include rewrite suggestions for bullets scoring <70`;

// ============================================================================
// USER PROMPT TEMPLATE v2.4
// ============================================================================

export function buildUserPrompt(cv: string, jd?: string, audience: 'STUDENT' | 'HR' = 'STUDENT'): string {
  const hasJd = !!jd;
  
  return `## CV TO ANALYZE
\`\`\`
${cv}
\`\`\`
${jd ? `
## JOB DESCRIPTION
\`\`\`
${jd}
\`\`\`` : ''}

## OUTPUT FORMAT
Return comprehensive JSON analysis. Include ALL bullets with individual scores.

{
  "version": "2.4",
  "audience": "${audience}",
  "generatedAt": "${new Date().toISOString()}",
  
  "scores": {
    "overall": <0-100>,
    "grade": "<A/A-/B+/B/B-/C+/C/D/F>",
    "label": "<Excellent|Strong|Good|Fair|Needs Work|Weak>",
    "rawCompatibility": ${hasJd ? '<0-100>' : 'null'},
    "tei": ${hasJd ? '<1-5 transformation effort index>' : 'null'}
  },
  
  "cvAnalysis": {
    "metadata": {
      "candidateName": "<name>",
      "email": "<email or null>",
      "phone": "<phone or null>",
      "location": "<location or null>",
      "linkedin": "<url or null>",
      "documentStats": {
        "wordCount": <n>,
        "pageEstimate": <n>,
        "sectionCount": <n>
      }
    },
    
    "sections": {
      "contact": {
        "score": <0-100>,
        "health": "<healthy|needs_attention|critical>",
        "fields": {
          "name": {"value": "<n>", "status": "<valid|missing>"},
          "email": {"value": "<email>", "status": "<valid|invalid|missing>", "issue": "<issue or null>"},
          "phone": {"value": "<phone>", "status": "<valid|missing>"},
          "location": {"value": "<loc>", "status": "<valid|missing>"},
          "linkedin": {"value": "<url>", "status": "<valid|missing>"}
        },
        "issues": [
          {"code": "<A1-A9>", "severity": "<high|medium|low>", "issue": "<desc>", "sourceText": null, "fix": "<fix>", "effort": "<effort>"}
        ],
        "suggestions": [
          {"priority": 1, "action": "<action>", "reason": "<why>", "effort": "<effort>", "impact": "<+X points>"}
        ]
      },
      
      "summary": {
        "score": <0-100>,
        "health": "<health>",
        "data": {
          "text": "<full summary text>",
          "wordCount": <n>,
          "yearsMentioned": <n or null>,
          "keyThemes": ["<theme1>", "<theme2>"]
        },
        "analysis": {
          "clarity": <0-100>,
          "specificity": <0-100>,
          "alignment": <0-100>,
          "hasQuantifiedAchievement": <boolean>,
          "genericPhrases": ["<phrase1>"]
        },
        "issues": [...],
        "strengths": [
          {"code": "<D1-D8>", "strength": "<desc>", "evidence": "<quote from CV>"}
        ],
        "suggestions": [...]
      },
      
      "experience": {
        "score": <0-100>,
        "health": "<health>",
        "metrics": {
          "totalYears": <n>,
          "roleCount": <n>,
          "totalBullets": <n>,
          "averageBulletScore": <0-100>,
          "quantificationRate": <0-100>,
          "strongVerbRate": <0-100>
        },
        "careerAnalysis": {
          "progression": "<Exceptional|Accelerated|Steady|Slow|Stagnant>",
          "progressionHealthy": <boolean>,
          "seniorityTrajectory": "<description>",
          "industryFocus": ["<industry>"],
          "domainExpertise": ["<domain>"]
        },
        "gaps": [
          {"period": "<dates>", "durationMonths": <n>, "severity": "<high|medium|low>", "code": "F1"}
        ],
        "roles": [
          {
            "roleIndex": 0,
            "title": "<title>",
            "company": "<company>",
            "location": "<location>",
            "startDate": "<YYYY-MM or YYYY>",
            "endDate": "<YYYY-MM or Present>",
            "durationMonths": <n>,
            "isCurrent": <boolean>,
            "seniorityLevel": "<Entry|Mid|Senior|Lead|Principal|Director|VP|C-Level>",
            "roleScore": <0-100>,
            
            "bullets": [
              {
                "text": "<exact bullet text from CV>",
                "index": 0,
                "wordCount": <n>,
                "score": <0-100>,
                "actionVerb": {
                  "word": "<verb or null>",
                  "strength": "<strong|moderate|weak|none>",
                  "score": <0-100>
                },
                "quantification": {
                  "hasQuantification": <boolean>,
                  "type": "<percentage|currency|count|scale|null>",
                  "value": "<the number/metric or null>",
                  "score": <0-100>
                },
                "result": {
                  "hasResult": <boolean>,
                  "type": "<quantified|implied|missing>",
                  "score": <0-100>
                },
                "scope": {
                  "hasScope": <boolean>,
                  "indicators": ["<indicator>"],
                  "score": <0-100>
                },
                "issues": [
                  {"code": "<A10-A13>", "issue": "<specific issue>", "severity": "<high|medium|low>"}
                ],
                "rewrite": {
                  "suggested": "<improved bullet>",
                  "changes": ["<what changed>"],
                  "projectedScore": <0-100>
                } // null if score >= 70
              }
            ],
            
            "bulletSummary": {
              "count": <n>,
              "averageScore": <0-100>,
              "distribution": {"excellent": <n>, "good": <n>, "fair": <n>, "poor": <n>}
            },
            
            "issues": [
              {"code": "<code>", "severity": "<sev>", "issue": "<desc>", "sourceText": "<quote>", "fix": "<fix>", "effort": "<effort>"}
            ],
            "strengths": [
              {"code": "<D1-D8>", "strength": "<desc>", "evidence": "<quote>"}
            ]
          }
        ],
        
        "aggregatedIssues": {"critical": <n>, "high": <n>, "medium": <n>, "low": <n>},
        "aggregatedStrengths": <n>
      },
      
      "skills": {
        "score": <0-100>,
        "health": "<health>",
        "metrics": {
          "totalSkills": <n>,
          "validatedSkills": <n>,
          "impliedSkills": <n>,
          "ghostSkills": <n>,
          "validationRate": <0-100>
        },
        "allSkills": [
          {
            "skill": "<skill name>",
            "category": "<technical|tools|frameworks|soft|languages>",
            "status": "<validated|implied|ghost>",
            "proficiencyInferred": "<expert|proficient|familiar|unknown>",
            "evidence": "<quote from experience section or null>",
            "evidenceRole": "<role where found or null>"${hasJd ? `,
            "jdMatch": <boolean>,
            "jdPriority": "<tier1|tier2|tier3>"` : ''}
          }
        ],
        "issues": [...],
        "strengths": [...],
        "suggestions": [...]${hasJd ? `,
        "missingForJd": {
          "critical": ["<skill>"],
          "important": ["<skill>"],
          "niceToHave": ["<skill>"]
        }` : ''}
      },
      
      "education": {
        "score": <0-100>,
        "health": "<health>",
        "entries": [
          {
            "degree": "<degree>",
            "field": "<field>",
            "institution": "<school>",
            "year": <YYYY or null>,
            "gpa": "<GPA or null>",
            "relevant": <boolean>
          }
        ],
        "issues": [...],
        "strengths": [...]
      },
      
      "certifications": {
        "score": <0-100>,
        "health": "<health>",
        "entries": [
          {
            "name": "<cert name>",
            "issuer": "<issuer>",
            "date": "<date or null>",
            "expiryDate": "<date or null>",
            "status": "<active|expired|unknown>",
            "relevance": "<high|medium|low>"
          }
        ],
        "metrics": {"total": <n>, "active": <n>, "expired": <n>, "highRelevance": <n>},
        "issues": [...],
        "strengths": [...]
      }
    },
    
    "experienceFactors": {
      "H1_yearsVsImpact": {"score": <0-100>, "evidence": "<quote or null>"},
      "H2_complexity": {"score": <0-100>, "evidence": "<quote or null>"},
      "H3_teamLeadership": {"score": <0-100>, "evidence": "<quote or null>"},
      "H4_budgetResponsibility": {"score": <0-100>, "evidence": "<quote or null>"},
      "H5_stakeholderLevel": {"score": <0-100>, "evidence": "<quote or null>"},
      "H6_decisionAuthority": {"score": <0-100>, "evidence": "<quote or null>"},
      "H7_innovation": {"score": <0-100>, "evidence": "<quote or null>"},
      "H8_mentorship": {"score": <0-100>, "evidence": "<quote or null>"},
      "H9_externalRecognition": {"score": <0-100>, "evidence": "<quote or null>"}
    },
    
    "bulletAnalysis": {
      "totalBullets": <n>,
      "averageScore": <0-100>,
      "distribution": {"excellent": <n>, "good": <n>, "fair": <n>, "poor": <n>},
      "verbAnalysis": {
        "strongCount": <n>,
        "moderateCount": <n>,
        "weakCount": <n>,
        "strongRate": <0-100>
      },
      "quantificationAnalysis": {
        "quantifiedCount": <n>,
        "rate": <0-100>
      },
      "resultAnalysis": {
        "quantifiedResults": <n>,
        "impliedResults": <n>,
        "missingResults": <n>
      },
      "worstBullets": [
        {
          "roleTitle": "<title>",
          "company": "<company>",
          "text": "<bullet>",
          "score": <n>,
          "mainIssue": "<issue>",
          "rewrite": "<suggested>"
        }
      ]
    }
  },
  
  "aggregated": {
    "totalIssues": {"critical": <n>, "high": <n>, "medium": <n>, "low": <n>, "total": <n>},
    "issuesBySection": {
      "contact": {"high": <n>, "medium": <n>, "low": <n>},
      "summary": {"high": <n>, "medium": <n>, "low": <n>},
      "experience": {"high": <n>, "medium": <n>, "low": <n>},
      "skills": {"high": <n>, "medium": <n>, "low": <n>},
      "education": {"high": <n>, "medium": <n>, "low": <n>},
      "certifications": {"high": <n>, "medium": <n>, "low": <n>}
    },
    "totalStrengths": <n>,
    "strengthsBySection": {"contact": <n>, "summary": <n>, "experience": <n>, "skills": <n>, "education": <n>, "certifications": <n>},
    "sectionHealth": {
      "contact": "<healthy|needs_attention|critical>",
      "summary": "<health>",
      "experience": "<health>",
      "skills": "<health>",
      "education": "<health>",
      "certifications": "<health>"
    },
    "sectionScores": {"contact": <n>, "summary": <n>, "experience": <n>, "skills": <n>, "education": <n>, "certifications": <n>},
    "topPriorityFixes": [
      {
        "rank": 1,
        "section": "<SECTION>",
        "action": "<action>",
        "reason": "<why this is priority>",
        "currentText": "<before or null>",
        "suggestedText": "<after or null>",
        "effort": "<effort>",
        "impact": "<+X points>",
        "quick": <boolean>
      }
    ],
    "scorePotential": {
      "current": <n>,
      "afterQuickFixes": <n>,
      "ceiling": <n>
    }
  },
  
  "issuesDetected": [
    {
      "code": "<code>",
      "section": "<CONTACT|SUMMARY|EXPERIENCE|SKILLS|EDUCATION|CERTIFICATIONS>",
      "severity": "<critical|high|medium|low>",
      "category": "<category>",
      "issue": "<description>",
      "sourceText": "<exact quote from CV or null>",
      "location": "<where in CV>",
      "fix": "<specific fix>",
      "effort": "<1-min|5-min|15-min|30-min|1-hour>",
      "impact": "<-X points>"
    }
  ],
  
  "strengthsDetected": [
    {
      "code": "<D1-D8>",
      "section": "<SECTION>",
      "category": "<Leadership|Achievement|Technical|Scale|Credentials|Domain|Transformation|Fit>",
      "strength": "<description>",
      "evidence": "<exact quote from CV>",
      "impact": "<high|medium>"
    }
  ],
  
  "priorityActions": [
    {
      "priority": 1,
      "section": "<SECTION>",
      "action": "<action to take>",
      "reason": "<why>",
      "currentText": "<before or null>",
      "suggestedText": "<after or null>",
      "effort": "<effort>",
      "impact": "<+X points overall>",
      "quick": <boolean>
    }
  ],
  
  ${audience === 'STUDENT' ? `"studentAnalysis": {
    "overallAssessment": {
      "score": <n>,
      "grade": "<grade>",
      "label": "<label>",
      "summary": "<2-3 sentence honest assessment>"
    },
    "honestFeedback": {
      "rawCompatibility": ${hasJd ? '<0-100>' : 'null'},
      "transformationEffort": ${hasJd ? `{
        "level": <1-5>,
        "timeline": "<X days/weeks>",
        "description": "<what needs to happen>"
      }` : 'null'},
      "successProbability": ${hasJd ? '"<X-Y% with improvements>"' : 'null'}
    },
    "alternativeRoles": [
      {"role": "<role>", "fitScore": <0-100>, "reason": "<why>"}
    ],
    "nextSteps": {
      "immediate": ["<do today>"],
      "thisWeek": ["<do this week>"],
      "beforeApplication": ["<before applying>"]
    },
    "encouragement": {
      "message": "<positive but honest message>",
      "competitiveAdvantages": ["<advantage>"]
    }
  }` : `"hrAnalysis": {
    "riskAssessment": {
      "overallRisk": "<LOW|MODERATE|HIGH|CRITICAL>",
      "employerRiskScore": <0-100>,
      "breakdown": {
        "skillVerification": <0-100>,
        "experienceInflation": <0-100>,
        "cultureFit": <0-100>,
        "retention": <0-100>
      },
      "redFlags": [
        {"flag": "<flag>", "severity": "<sev>", "evidence": "<quote>", "section": "<SECTION>"}
      ]
    },
    "verificationChecklist": {
      "highPriority": [{"item": "<item>", "reason": "<why>", "method": "<how to verify>"}],
      "mediumPriority": [{"item": "<item>", "reason": "<why>"}]
    },
    "interviewGuide": {
      "mustAsk": [{"question": "<q>", "lookFor": "<answer>", "redFlag": "<concern>"}],
      "technicalProbes": [{"skill": "<skill>", "question": "<q>", "expectedDepth": "<depth>"}]
    },
    "decision": {
      "recommendation": "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>",
      "confidence": <0-100>,
      "conditions": ["<condition>"],
      "dealBreakers": ["<breaker>"]
    }
  }`}
}`;
}

// ============================================================================
// REPLIT INTEGRATION HELPER
// ============================================================================

export function createReplitPrompt(cv: string, jd?: string, audience: 'STUDENT' | 'HR' = 'STUDENT'): {
  systemPrompt: string;
  userPrompt: string;
} {
  return {
    systemPrompt: SYSTEM_PROMPT_V24,
    userPrompt: buildUserPrompt(cv, jd, audience)
  };
}

// ============================================================================
// MIGRATION NOTES v2.3 → v2.4
// ============================================================================

/*
CHANGES FROM v2.3 TO v2.4:

1. STRUCTURE CHANGES:
   - Added "sections" object containing contact, summary, experience, skills, education, certifications
   - Each section now has: score, health, issues, strengths, suggestions
   - Moved from flat cvAnalysis to nested sections structure

2. NEW FIELDS:
   - sections.contact.fields - individual field validation
   - sections.summary.analysis - clarity, specificity, alignment scores
   - sections.experience.careerAnalysis - progression, trajectory, domains
   - sections.skills.allSkills[].status - validated/implied/ghost
   - aggregated.sectionHealth - per-section health status
   - aggregated.scorePotential - current → afterQuickFixes → ceiling

3. BULLET ANALYSIS ENHANCEMENTS:
   - Added scope scoring (10% weight)
   - Added rewrite.changes[] to explain what was improved
   - Added worstBullets[] for quick access to problem bullets
   - Added verbAnalysis and resultAnalysis aggregates

4. SKILL VALIDATION:
   - Now tracks evidence location (which role)
   - Explicit ghost skill detection
   - JD tier matching (tier1/tier2/tier3) when JD provided

5. BACKWARD COMPATIBILITY:
   - issuesDetected[] still exists at root level
   - strengthsDetected[] still exists at root level
   - bulletAnalysis still at root level
   - experienceFactors (H1-H9) unchanged

6. NEW AUDIENCE-SPECIFIC:
   - studentAnalysis: alternativeRoles[], nextSteps, encouragement
   - hrAnalysis: riskAssessment, verificationChecklist, interviewGuide, decision
*/

export default {
  SYSTEM_PROMPT: SYSTEM_PROMPT_V24,
  buildUserPrompt,
  createReplitPrompt
};
