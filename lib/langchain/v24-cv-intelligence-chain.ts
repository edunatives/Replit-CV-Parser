/**
 * CV Intelligence Engine v2.4 - Main Chain with Rewrite Support
 * Full v2.4 implementation with per-bullet, summary, and full CV rewrites
 * 
 * @version 2.4.0
 * @file v24-cv-intelligence-chain.ts
 */

import {
  ProviderType,
  createProvider,
  getAvailableProviders,
} from "./llm-providers";

// ============================================================================
// CONFIGURATION
// ============================================================================

export interface ChainConfig {
  provider?: ProviderType;
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
  maxRetries?: number;
  retryDelayMs?: number;
}

const DEFAULT_CONFIG: Required<ChainConfig> = {
  provider: "openai",
  model: "gpt-4o",
  temperature: 0.2,
  maxOutputTokens: 8192,
  maxRetries: 3,
  retryDelayMs: 1000,
};

export type { ProviderType };
export { getAvailableProviders };

// ============================================================================
// V2.4 SYSTEM PROMPT WITH REWRITE SUPPORT
// ============================================================================

const SYSTEM_PROMPT_V24 = `You are CV Intelligence Analyst v2.4.

CORE PRINCIPLES:
1. HONEST - Never inflate scores. A 52% is a 52%.
2. SECTION-BASED - Every finding belongs to its source section.
3. ACTIONABLE - Every issue has a specific fix with effort estimate.
4. SPECIFIC - Use exact quotes (sourceText), numbers, and issue codes.
5. BALANCED - Acknowledge strengths before issues.
6. REWRITE-READY - Provide improved text for every weak element.

ISSUE CODES:
- A1-A9: ATS & Structure
  A1: Missing LinkedIn | A2: Missing phone | A3: Unprofessional email
  A4: Missing section headers | A5: Inconsistent dates | A6: Wrong length
  A7: Formatting issues | A8: Typos/grammar | A9: Missing location

- A10-A13: Bullet Analysis
  A10: Length issues (<8 or >40 words)
  A11: Density issues (wrong bullet count for role tenure)
  A12: Structure issues (weak verb, no result, no quantification)
  A13: Consistency issues (score variance within role)

- B1-B8: Content Realism
  B1: Inflated titles | B2: Impossible metrics | B3: Vague claims
  B4: Buzzword overload | B5: Scope mismatch | B6: Timeline conflicts
  B7: Skill overclaiming | B8: Responsibility inflation

- C1-C6: Skill Validation
  C1: Ghost skills (no evidence) | C2: Outdated skills | C3: Missing critical
  C4: Level mismatch | C5: No proficiency levels | C6: Irrelevant skills

- D1-D8: Strengths
  D1: Leadership | D2: Quantified achievements | D3: Technical depth
  D4: Scale/scope | D5: Credentials | D6: Domain expertise
  D7: Transformation | D8: Regional/industry fit

- E1-E6: Tone & Clarity
  E1: No headline achievement | E2: Passive voice | E3: Generic phrases
  E4: Inconsistent tone | E5: Too humble | E6: Unsubstantiated claims

- F1-F5: Timeline
  F1: Gaps | F2: Short tenures | F3: Missing dates
  F4: Overlapping dates | F5: Stale experience

- G1-G9: Role Fit (with JD)
  G1: Seniority mismatch | G2: Domain mismatch | G3: Scope mismatch
  G4: Industry mismatch | G5: Location mismatch | G6: Compensation signals
  G7: Culture concerns | G8: Growth mismatch | G9: Certification gaps

- H1-H9: Experience Depth
  H1: Years vs impact | H2: Complexity | H3: Team leadership
  H4: Budget/P&L | H5: Stakeholder level | H6: Decision authority
  H7: Innovation | H8: Mentorship | H9: External recognition

SCORING:
- Overall: 0-100 (Contact 5%, Summary 10%, Experience 40%, Skills 25%, Education 10%, Certs 10%)
- Grade: A(90+), A-(85-89), B+(80-84), B(70-79), B-(65-69), C+(60-64), C(50-59), D(40-49), F(<40)
- Section Health: healthy(≥70), needs_attention(50-69 or >2 high issues), critical(<50 or any critical)

BULLET SCORING (0-100):
- Action Verb (30%): Strong(100), Moderate(70), Weak(40), None(20)
- Quantification (25%): Specific numbers(100), Vague scale(60), None(20)
- Result/Impact (35%): Quantified(100), Implied(70), Missing(30)
- Scope/Context (10%): Multiple indicators(100), Single(70), None(30)

REWRITE RULES:
1. Every bullet with score <70 MUST have a rewrite
2. Summary with score <75 MUST have a rewrite
3. Rewrites must be realistic improvements (not fabrications)
4. Rewrites should add quantification where possible (suggest placeholders like [X%])
5. Rewrites must use strong action verbs
6. Include projectedScore for every rewrite
7. List specific changes made in changes[] array

STRONG ACTION VERBS (use in rewrites):
Led, Delivered, Architected, Spearheaded, Pioneered, Achieved, Built, Drove, 
Launched, Transformed, Established, Orchestrated, Accelerated, Optimized,
Reduced, Increased, Generated, Captured, Secured, Negotiated

AVOID IN REWRITES:
Helped, Assisted, Worked on, Participated, Was responsible for, Supported,
Contributed to, Was involved in, Tasked with`;

// ============================================================================
// USER PROMPT BUILDER
// ============================================================================

function buildUserPrompt(
  cv: string,
  jd?: string,
  audience: 'STUDENT' | 'HR' = 'STUDENT',
  includeFullRewrite: boolean = true
): string {
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
Return comprehensive JSON analysis with REWRITES for all weak elements.

{
  "version": "2.4",
  "audience": "${audience}",
  "generatedAt": "${new Date().toISOString()}",
  
  "scores": {
    "overall": <0-100>,
    "grade": "<A/A-/B+/B/B-/C+/C/D/F>",
    "label": "<Excellent|Strong|Good|Fair|Needs Work|Weak>",
    "rawCompatibility": ${hasJd ? '<0-100>' : 'null'},
    "tei": ${hasJd ? '<1-5>' : 'null'}
  },
  
  "cvAnalysis": {
    "metadata": {
      "candidateName": "<name>",
      "email": "<email>",
      "phone": "<phone>",
      "location": "<location>",
      "linkedin": "<url or null>",
      "documentStats": {"wordCount": <n>, "pageEstimate": <n>, "sectionCount": <n>}
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
        "issues": [{"code": "<A1-A9>", "severity": "<sev>", "issue": "<desc>", "fix": "<fix>", "effort": "<effort>"}],
        "rewrite": {
          "needed": <boolean>,
          "suggested": "<complete rewritten contact section>",
          "changes": ["<change1>", "<change2>"],
          "projectedScore": <0-100>
        }
      },
      
      "summary": {
        "score": <0-100>,
        "health": "<health>",
        "data": {
          "text": "<original summary>",
          "wordCount": <n>,
          "yearsMentioned": <n or null>,
          "keyThemes": ["<theme>"]
        },
        "analysis": {
          "clarity": <0-100>,
          "specificity": <0-100>,
          "alignment": <0-100>,
          "hasQuantifiedAchievement": <boolean>,
          "genericPhrases": ["<phrase>"]
        },
        "issues": [],
        "strengths": [],
        "rewrite": {
          "needed": <boolean - true if score < 75>,
          "original": "<original summary text>",
          "suggested": "<rewritten summary - 2-3 sentences, with quantified achievement, no generic phrases>",
          "changes": [
            "Added quantified achievement",
            "Removed generic phrase 'proven track record'",
            "Added specific domain expertise"
          ],
          "projectedScore": <0-100>
        }
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
          "strongVerbRate": <0-100>,
          "bulletsNeedingRewrite": <count of bullets with score < 70>
        },
        "careerAnalysis": {
          "progression": "<Exceptional|Accelerated|Steady|Slow|Stagnant>",
          "seniorityTrajectory": "<description>",
          "industryFocus": ["<industry>"],
          "domainExpertise": ["<domain>"]
        },
        "gaps": [{"period": "<dates>", "durationMonths": <n>, "severity": "<sev>", "suggestedExplanation": "<how to address>"}],
        "roles": [
          {
            "roleIndex": 0,
            "title": "<title>",
            "company": "<company>",
            "location": "<location>",
            "startDate": "<date>",
            "endDate": "<date or Present>",
            "durationMonths": <n>,
            "isCurrent": <boolean>,
            "seniorityLevel": "<level>",
            "roleScore": <0-100>,
            
            "bullets": [
              {
                "text": "<exact original bullet>",
                "index": 0,
                "wordCount": <n>,
                "score": <0-100>,
                "actionVerb": {
                  "word": "<verb>",
                  "strength": "<strong|moderate|weak|none>",
                  "score": <0-100>
                },
                "quantification": {
                  "hasQuantification": <boolean>,
                  "type": "<percentage|currency|count|scale|null>",
                  "value": "<value or null>",
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
                "issues": [{"code": "<A10-A13>", "issue": "<issue>", "severity": "<sev>"}],
                
                "rewrite": {
                  "needed": <boolean - true if score < 70>,
                  "original": "<original bullet>",
                  "suggested": "<improved bullet with strong verb, quantification, result>",
                  "changes": [
                    "Changed verb from 'Helped' to 'Led'",
                    "Added quantification: [X]% improvement"
                  ],
                  "projectedScore": <0-100>,
                  "placeholders": ["[X]%", "[Y]%"]
                }
              }
            ],
            
            "bulletSummary": {
              "count": <n>,
              "averageScore": <0-100>,
              "distribution": {"excellent": <n>, "good": <n>, "fair": <n>, "poor": <n>},
              "needsRewrite": <count of bullets needing rewrite>
            },
            
            "roleRewrite": {
              "needed": <boolean - true if roleScore < 70 or >50% bullets need rewrite>,
              "allBulletsRewritten": ["<rewritten bullet 1>", "<rewritten bullet 2>"],
              "projectedRoleScore": <0-100>
            }
          }
        ]
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
            "skill": "<skill>",
            "category": "<technical|tools|frameworks|soft|languages>",
            "status": "<validated|implied|ghost>",
            "evidence": "<quote or null>",
            "action": "<keep|remove|add_evidence>" 
          }
        ],
        "rewrite": {
          "needed": <boolean>,
          "original": ["<original skill list>"],
          "suggested": {
            "technical": ["<skill>"],
            "tools": ["<skill>"],
            "frameworks": ["<skill>"],
            "methodologies": ["<skill>"]
          },
          "removed": ["<ghost skill1>", "<ghost skill2>"],
          "reorganized": true,
          "projectedScore": <0-100>
        }${hasJd ? `,
        "missingForJd": {
          "critical": ["<skill to add if candidate has it>"],
          "important": ["<skill>"],
          "niceToHave": ["<skill>"]
        }` : ''}
      },
      
      "education": {
        "score": <0-100>,
        "health": "<health>",
        "entries": [{"degree": "<deg>", "field": "<field>", "institution": "<school>", "year": <n>}],
        "rewrite": {"needed": <boolean>, "suggestions": ["<suggestion>"]}
      },
      
      "certifications": {
        "score": <0-100>,
        "health": "<health>",
        "entries": [{"name": "<cert>", "issuer": "<issuer>", "status": "<active|expired>", "relevance": "<high|medium|low>"}],
        "rewrite": {"needed": <boolean>, "suggestions": ["<update expired cert status>"]}
      }
    },
    
    "bulletAnalysis": {
      "totalBullets": <n>,
      "averageScore": <0-100>,
      "distribution": {"excellent": <n>, "good": <n>, "fair": <n>, "poor": <n>},
      "needingRewrite": <count>,
      "verbAnalysis": {"strongCount": <n>, "moderateCount": <n>, "weakCount": <n>, "strongRate": <0-100>},
      "worstBullets": [
        {
          "roleTitle": "<title>",
          "company": "<company>",
          "original": "<original bullet>",
          "score": <n>,
          "mainIssues": ["<issue1>", "<issue2>"],
          "rewrite": "<improved bullet>",
          "projectedScore": <n>,
          "changes": ["<change1>", "<change2>"]
        }
      ]
    }
  },
  
  "aggregated": {
    "totalIssues": {"critical": <n>, "high": <n>, "medium": <n>, "low": <n>, "total": <n>},
    "sectionHealth": {"contact": "<health>", "summary": "<health>", "experience": "<health>", "skills": "<health>", "education": "<health>", "certifications": "<health>"},
    "sectionScores": {"contact": <n>, "summary": <n>, "experience": <n>, "skills": <n>, "education": <n>, "certifications": <n>},
    "topPriorityFixes": [
      {"rank": 1, "section": "<SECTION>", "action": "<action>", "currentText": "<before>", "suggestedText": "<after>", "effort": "<effort>", "impact": "<+X points>", "quick": <boolean>}
    ],
    "scorePotential": {
      "current": <n>,
      "afterQuickFixes": <n>,
      "afterAllRewrites": <n>,
      "ceiling": <n>
    }
  },
  
  ${includeFullRewrite ? `"fullRewrite": {
    "available": true,
    "currentScore": <n>,
    "projectedScore": <n>,
    "effortEstimate": "<X hours>",
    
    "contact": {
      "original": "<original contact section>",
      "rewritten": "<name>\\n<title>\\n<email> | <phone> | <location>\\n<linkedin>"
    },
    
    "summary": {
      "original": "<original>",
      "rewritten": "<2-3 sentence summary with: [Identity] + [Signature Achievement with number] + [Value Proposition for target role]>"
    },
    
    "experience": {
      "roles": [
        {
          "title": "<title>",
          "company": "<company>",
          "dates": "<dates>",
          "originalBullets": ["<original1>", "<original2>"],
          "rewrittenBullets": ["<Strong verb> + <what you did> + <quantified scope> + <quantified result>"]
        }
      ]
    },
    
    "skills": {
      "original": "<original skills section>",
      "rewritten": {
        "technical": ["<validated skill1>", "<validated skill2>"],
        "tools": ["<tool1>", "<tool2>"],
        "frameworks": ["<framework1>"]
      },
      "removed": ["<ghost skill1>", "<irrelevant skill2>"]
    },
    
    "completeRewrittenCV": "<FULL REWRITTEN CV TEXT - complete document ready to use>"
  },` : '"fullRewrite": null,'}
  
  "issuesDetected": [
    {"code": "<code>", "section": "<SECTION>", "severity": "<sev>", "issue": "<desc>", "sourceText": "<quote>", "fix": "<fix>", "effort": "<effort>", "impact": "<-X pts>"}
  ],
  
  "strengthsDetected": [
    {"code": "<D1-D8>", "section": "<SECTION>", "category": "<cat>", "strength": "<desc>", "evidence": "<quote>", "impact": "<high|medium>"}
  ],
  
  "priorityActions": [
    {"priority": 1, "section": "<SECTION>", "action": "<action>", "currentText": "<before>", "suggestedText": "<after>", "effort": "<effort>", "impact": "<+X pts>", "quick": <boolean>}
  ],
  
  ${audience === 'STUDENT' ? `"studentAnalysis": {
    "overallAssessment": {"score": <n>, "grade": "<grade>", "label": "<label>", "summary": "<honest assessment>"},
    "honestFeedback": {
      "rawCompatibility": ${hasJd ? '<0-100>' : 'null'},
      "transformationEffort": ${hasJd ? '{"level": <1-5>, "timeline": "<days/weeks>", "description": "<what to do>"}' : 'null'}
    },
    "alternativeRoles": [{"role": "<role>", "fitScore": <n>, "reason": "<why>"}],
    "nextSteps": {
      "immediate": ["<quick win rewrite>"],
      "thisWeek": ["<medium effort rewrite>"],
      "beforeApplication": ["<complete all rewrites>"]
    },
    "encouragement": {"message": "<positive>", "competitiveAdvantages": ["<advantage>"]}
  }` : `"hrAnalysis": {
    "riskAssessment": {"overallRisk": "<level>", "employerRiskScore": <n>, "redFlags": []},
    "verificationChecklist": {"highPriority": [], "mediumPriority": []},
    "interviewGuide": {"mustAsk": [], "technicalProbes": []},
    "decision": {"recommendation": "<STRONG_HIRE|HIRE|CONDITIONAL_HIRE|NO_HIRE>", "confidence": <n>, "conditions": []}
  }`}
}`;
}

// ============================================================================
// REWRITE-ONLY PROMPT (faster, focused on rewrites)
// ============================================================================

function buildRewriteOnlyPrompt(cv: string, jd?: string): string {
  return `## CV TO REWRITE
\`\`\`
${cv}
\`\`\`
${jd ? `
## TARGET JOB (optimize rewrites for this)
\`\`\`
${jd}
\`\`\`` : ''}

## TASK
Rewrite this CV to maximize impact. Focus on:
1. Strong action verbs (Led, Delivered, Architected, Spearheaded)
2. Quantification (add [X]% placeholders where numbers should go)
3. Results and impact (not just duties)
4. Remove generic phrases ("proven track record", "results-driven")
5. Remove ghost skills (skills with no evidence in experience)

## OUTPUT FORMAT
{
  "originalScore": <estimated 0-100>,
  "projectedScore": <0-100 after rewrites>,
  
  "summary": {
    "original": "<original>",
    "rewritten": "<improved summary>",
    "changes": ["<change1>", "<change2>"]
  },
  
  "experience": [
    {
      "role": "<title> @ <company>",
      "bullets": [
        {
          "original": "<original bullet>",
          "rewritten": "<improved bullet>",
          "score": {"before": <n>, "after": <n>},
          "changes": ["<change>"]
        }
      ]
    }
  ],
  
  "skills": {
    "keep": ["<validated skills>"],
    "remove": ["<ghost skills>"],
    "reorganize": {"technical": [...], "tools": [...], "frameworks": [...]}
  },
  
  "completeRewrittenCV": "<FULL REWRITTEN CV - ready to copy/paste>"
}`;
}

// ============================================================================
// BULLET REWRITE PROMPT
// ============================================================================

function buildBulletRewritePrompt(
  bullet: string,
  context?: { role?: string; company?: string; jd?: string }
): string {
  return `## BULLET TO IMPROVE
"${bullet}"
${context?.role ? `Role: ${context.role}` : ''}
${context?.company ? `Company: ${context.company}` : ''}
${context?.jd ? `Target JD: ${context.jd}` : ''}

## ANALYZE AND REWRITE
{
  "original": "${bullet}",
  "analysis": {
    "score": <0-100>,
    "actionVerb": {"word": "<verb>", "strength": "<strong|moderate|weak|none>"},
    "hasQuantification": <boolean>,
    "hasResult": <boolean>,
    "issues": ["<issue1>", "<issue2>"]
  },
  "rewrites": [
    {
      "version": 1,
      "text": "<conservative rewrite - minimal changes>",
      "score": <n>,
      "changes": ["<change>"]
    },
    {
      "version": 2,
      "text": "<moderate rewrite - significant improvements>",
      "score": <n>,
      "changes": ["<change>"],
      "placeholders": ["[X]%"]
    },
    {
      "version": 3,
      "text": "<aggressive rewrite - maximum impact>",
      "score": <n>,
      "changes": ["<change>"],
      "placeholders": ["[X]%", "[Y]M"]
    }
  ],
  "recommended": 2,
  "reason": "<why version 2 is best>"
}`;
}

// ============================================================================
// SUMMARY REWRITE PROMPT
// ============================================================================

function buildSummaryRewritePrompt(
  summary: string,
  context?: { name?: string; title?: string; years?: number; jd?: string }
): string {
  return `## SUMMARY TO IMPROVE
"${summary}"
${context?.name ? `Name: ${context.name}` : ''}
${context?.title ? `Target Title: ${context.title}` : ''}
${context?.years ? `Years Experience: ${context.years}` : ''}
${context?.jd ? `Target JD: ${context.jd}` : ''}

## REWRITE RULES
- 2-3 sentences, 40-60 words
- Formula: [Identity] + [Signature Achievement with number] + [Value Proposition]
- Must include at least ONE specific number
- No generic phrases: "proven track record", "results-driven", "passionate", "dynamic"

## OUTPUT
{
  "original": "${summary}",
  "analysis": {
    "score": <0-100>,
    "wordCount": <n>,
    "hasQuantification": <boolean>,
    "genericPhrases": ["<phrase>"],
    "issues": ["<issue>"]
  },
  "rewrites": [
    {"style": "conservative", "text": "<minimal changes rewrite>", "score": <n>},
    {"style": "balanced", "text": "<moderate rewrite following formula>", "score": <n>},
    {"style": "bold", "text": "<aggressive rewrite, maximum impact>", "score": <n>}
  ],
  "recommended": "balanced",
  "reason": "<why>"
}`;
}

// ============================================================================
// UTILITIES
// ============================================================================

function repairAndParseJSON(text: string): unknown {
  let cleaned = text.trim();

  const match = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (match) cleaned = match[1].trim();
  else {
    if (cleaned.startsWith("```json")) cleaned = cleaned.slice(7);
    else if (cleaned.startsWith("```")) cleaned = cleaned.slice(3);
    if (cleaned.endsWith("```")) cleaned = cleaned.slice(0, -3);
    cleaned = cleaned.trim();
  }

  try {
    return JSON.parse(cleaned);
  } catch {}

  cleaned = cleaned
    .replace(/,(\s*[}\]])/g, "$1")
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    .replace(/'/g, '"')
    .replace(/[\x00-\x1F\x7F]/g, "");

  try {
    return JSON.parse(cleaned);
  } catch {}

  const objMatch = cleaned.match(/\{[\s\S]*\}/);
  if (objMatch) return JSON.parse(objMatch[0]);

  throw new Error("Failed to parse JSON from response");
}

async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number,
  delayMs: number
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
      if (attempt < maxRetries) {
        await new Promise((r) =>
          setTimeout(r, delayMs * Math.pow(2, attempt - 1))
        );
      }
    }
  }
  throw lastError;
}

// ============================================================================
// V2.4 ANALYSIS TYPES
// ============================================================================

export type AudienceType = "STUDENT" | "HR";

export interface V24AnalysisInput {
  cvText: string;
  jdText?: string;
  audience?: AudienceType;
  includeFullRewrite?: boolean;
}

export interface V24AnalysisResult {
  success: boolean;
  data?: unknown;
  error?: string;
  provider?: string;
  model?: string;
}

export interface V24RewriteInput {
  cvText: string;
  jdText?: string;
}

export interface V24BulletRewriteInput {
  bullet: string;
  role?: string;
  company?: string;
  jdText?: string;
}

export interface V24SummaryRewriteInput {
  summary: string;
  name?: string;
  title?: string;
  years?: number;
  jdText?: string;
}

// ============================================================================
// MAIN CHAIN FUNCTIONS
// ============================================================================

export async function runV24Analysis(
  input: V24AnalysisInput,
  config: ChainConfig = {}
): Promise<V24AnalysisResult> {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const provider = createProvider({
    provider: cfg.provider,
    model: cfg.model,
    temperature: cfg.temperature,
    maxOutputTokens: cfg.maxOutputTokens,
  });

  const userPrompt = buildUserPrompt(
    input.cvText,
    input.jdText,
    input.audience || "STUDENT",
    input.includeFullRewrite ?? true
  );

  try {
    const result = await withRetry(
      async () => {
        const response = await provider.generate(SYSTEM_PROMPT_V24, userPrompt);
        return repairAndParseJSON(response.text);
      },
      cfg.maxRetries,
      cfg.retryDelayMs
    );

    return {
      success: true,
      data: result,
      provider: cfg.provider,
      model: cfg.model,
    };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : String(e),
      provider: cfg.provider,
      model: cfg.model,
    };
  }
}

export async function runV24RewriteOnly(
  input: V24RewriteInput,
  config: ChainConfig = {}
): Promise<V24AnalysisResult> {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const provider = createProvider({
    provider: cfg.provider,
    model: cfg.model,
    temperature: cfg.temperature,
    maxOutputTokens: cfg.maxOutputTokens,
  });

  const userPrompt = buildRewriteOnlyPrompt(input.cvText, input.jdText);

  try {
    const result = await withRetry(
      async () => {
        const response = await provider.generate(SYSTEM_PROMPT_V24, userPrompt);
        return repairAndParseJSON(response.text);
      },
      cfg.maxRetries,
      cfg.retryDelayMs
    );

    return {
      success: true,
      data: result,
      provider: cfg.provider,
      model: cfg.model,
    };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

export async function runBulletRewrite(
  input: V24BulletRewriteInput,
  config: ChainConfig = {}
): Promise<V24AnalysisResult> {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const provider = createProvider({
    provider: cfg.provider,
    model: cfg.model,
    temperature: cfg.temperature,
    maxOutputTokens: cfg.maxOutputTokens,
  });

  const userPrompt = buildBulletRewritePrompt(input.bullet, {
    role: input.role,
    company: input.company,
    jd: input.jdText,
  });

  try {
    const result = await withRetry(
      async () => {
        const response = await provider.generate(SYSTEM_PROMPT_V24, userPrompt);
        return repairAndParseJSON(response.text);
      },
      cfg.maxRetries,
      cfg.retryDelayMs
    );

    return {
      success: true,
      data: result,
      provider: cfg.provider,
      model: cfg.model,
    };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

export async function runSummaryRewrite(
  input: V24SummaryRewriteInput,
  config: ChainConfig = {}
): Promise<V24AnalysisResult> {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const provider = createProvider({
    provider: cfg.provider,
    model: cfg.model,
    temperature: cfg.temperature,
    maxOutputTokens: cfg.maxOutputTokens,
  });

  const userPrompt = buildSummaryRewritePrompt(input.summary, {
    name: input.name,
    title: input.title,
    years: input.years,
    jd: input.jdText,
  });

  try {
    const result = await withRetry(
      async () => {
        const response = await provider.generate(SYSTEM_PROMPT_V24, userPrompt);
        return repairAndParseJSON(response.text);
      },
      cfg.maxRetries,
      cfg.retryDelayMs
    );

    return {
      success: true,
      data: result,
      provider: cfg.provider,
      model: cfg.model,
    };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  runV24Analysis,
  runV24RewriteOnly,
  runBulletRewrite,
  runSummaryRewrite,
  getAvailableProviders,
};
