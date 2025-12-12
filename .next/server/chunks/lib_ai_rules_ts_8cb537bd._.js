module.exports=[87720,e=>{"use strict";let t=[/ignore\s+(all\s+)?previous\s+instructions?/i,/system\s*:/i,/\[\[.*?\]\]/,/<\/?script/i,/javascript:/i,/data:text\/html/i,/eval\s*\(/i,/exec\s*\(/i,/disregard\s+(all\s+)?above/i,/forget\s+(everything|all)/i,/new\s+instructions?:/i,/override\s+prompt/i];function i(e){return t.some(t=>t.test(e))}function r(e,t=3e4){let i=e;return(i=(i=i.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,"")).normalize("NFKC")).length>t&&(i=i.substring(0,t)),i}function n(e,t=!0){return`${t?"CANDIDATE'S CV:\n":""}Name: ${e.name||"Not provided"}
Title: ${e.title||"Not provided"}
Email: ${e.email||"Not provided"}
Phone: ${e.phone||"Not provided"}
Location: ${e.location||"Not provided"}
LinkedIn: ${e.linkedin||"Not provided"}
GitHub: ${e.github||"Not provided"}
Website: ${e.website||"Not provided"}

Summary:
${e.summary||"Not provided"}

Experience (${e.experience?.length||0} positions):
${e.experience?.map(e=>`- ${e.role} at ${e.company} (${e.duration})
  ${e.description}`).join("\n")||"None listed"}

Education (${e.education?.length||0} entries):
${e.education?.map(e=>`- ${e.degree} from ${e.institution} (${e.year})`).join("\n")||"None listed"}

Skills (${e.skills?.length||0}):
${e.skills?.join(", ")||"None listed"}

Certifications (${e.certifications?.length||0}):
${e.certifications?.map(e=>`- ${e.name} by ${e.issuer} (${e.year})`).join("\n")||"None listed"}`}function a(e){return`CANDIDATE'S CV:
Name: ${e.name||"Not provided"}
Title: ${e.title||"Not provided"}
Summary: ${e.summary||"Not provided"}

Experience:
${e.experience?.map(e=>`- ${e.role} at ${e.company} (${e.duration})
  ${e.description}`).join("\n")||"None"}

Education:
${e.education?.map(e=>`- ${e.degree} from ${e.institution} (${e.year})`).join("\n")||"None"}

Skills: ${e.skills?.join(", ")||"None"}

Certifications:
${e.certifications?.map(e=>`- ${e.name} by ${e.issuer}`).join("\n")||"None"}`}function o(e){let t=r(e);if(i(t))throw Error("Security: Suspicious content detected in CV text");return`You are the EduNatives Forensic CV Engine (v9.3).

AUDIT this CV using the Strict Scoring Rubric below.

CV DATA:
"""
${t}
"""

--- TASK 1: SCORING RUBRIC & WEIGHTS ---
Calculate a 'weighted_score' based on the following breakdown:
- Work Experience (Weight: 30%)
- Professional Summary (Weight: 20%)
- Education (Weight: 15%)
- Skills (Weight: 15%)
- Contact Information (Weight: 10%)
- Overall Presentation (Weight: 10%)

Formula: overallScore = (workExpScore * 30 + summaryScore * 20 + eduScore * 15 + skillsScore * 15 + contactScore * 10 + presentationScore * 10) / 100

--- SCORING LEVELS ---
- 90-100: Exceptional
- 80-89: Strong
- 70-79: Good
- 60-69: Fair
- Below 60: Needs Work

--- FORENSIC ANALYSIS CRITERIA ---
For each section, evaluate:
1. COMPLETENESS: Is all expected information present?
2. CLARITY: Is the content clear, concise, and well-organized?
3. IMPACT: Are achievements quantified? Are action verbs used?
4. ATS COMPATIBILITY: Will it pass Applicant Tracking Systems?
5. AUTHENTICITY: Do claims seem realistic and verifiable? Flag any inflation.

--- TASK 2: OUTPUT SCHEMA ---
Return ONLY a valid JSON object matching this structure exactly:
{
    "overallScore": <number 0-100, weighted>,
    "level": "<Exceptional/Strong/Good/Fair/Needs Work>",
    "inflation": <boolean - true if claims appear exaggerated>,
    "verdict": "<A concise 2-3 sentence summary of the CV quality>",
    "sections": [
        { "name": "Contact Information", "score": 0-100, "feedback": "<Evaluate Completeness, Clarity, and Online Presence>" },
        { "name": "Professional Summary", "score": 0-100, "feedback": "<Evaluate Impact, Quantification, and ATS keywords>" },
        { "name": "Work Experience", "score": 0-100, "feedback": "<Evaluate Action Verbs, Metrics/Results, and Career Progression>" },
        { "name": "Education", "score": 0-100, "feedback": "<analysis of relevance, completeness>" },
        { "name": "Skills", "score": 0-100, "feedback": "<Evaluate Relevance and Hard/Soft balance>" },
        { "name": "Overall Presentation", "score": 0-100, "feedback": "<Evaluate Formatting, Length, and consistency>" }
    ],
    "strengths": ["<top strength with evidence from CV>", "<strength 2>", "<strength 3>", "<strength 4>", "<strength 5>"],
    "weaknesses": ["<specific weakness found>", "<weakness 2>", "<weakness 3>", "<weakness 4>", "<weakness 5>"],
    "recommendations": ["<actionable fix 1>", "<fix 2>", "<fix 3>", "<fix 4>", "<fix 5>"],
    "highlights": [
        { "snippet": "<EXACT TEXT snippet from the CV to highlight>", "type": "green", "comment": "<Why this is a strength>" },
        { "snippet": "<EXACT TEXT snippet from the CV>", "type": "red", "comment": "<Why this is a critical issue>" },
        { "snippet": "<EXACT TEXT snippet from the CV>", "type": "yellow", "comment": "<Why this is a warning>" }
    ]
}

CRITICAL INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Calculate overallScore using the weighted formula - do NOT just average
- Be forensically specific - cite actual content from the CV in feedback
- Set inflation=true if ANY claims appear exaggerated or unverifiable
- Include 3-5 highlights with EXACT text snippets from the CV
- Each recommendation should be immediately actionable
- Verdict should summarize overall quality in 2-3 sentences`}function s(e,t){let n=r(t,1e4);if(i(n))throw Error("Security: Suspicious content detected in job description");return`You are EduNatives JD Match Engine v2.2 - Honest Assessment Framework.

PHILOSOPHY: HONEST OVER ENCOURAGING
Raw scores reflect actual fit, not potential. Be truthful about gaps while remaining constructive.

--- INPUTS ---
CV:
"""
${e}
"""

JD:
"""
${n}
"""

--- THREE-SCORE SYSTEM ---

1. RAW COMPATIBILITY (0-100) - How well CV matches JD RIGHT NOW
   Weights: Must-Have Skills 25%, Domain Exp 20%, Total Exp 10%, Depth/Scope 15%, Nature Fit 15%, Should-Have 10%, Nice-to-Have 5%

   HARD GATES (apply caps):
   - Missing >50% must-have skills → Cap at 50
   - Domain years <50% of required → Cap at 55
   - Seniority gap >2 levels → Cap at 45
   - Education hard requirement not met → Cap at 40

   TIERS: 90-100=Excellent(A), 80-89=Strong(A-), 70-79=Good(B+), 60-69=Moderate(B), 50-59=Stretch(C+), 40-49=Weak(C), 30-39=Poor(D), 0-29=No Match(F)

2. TRANSFORMATION EFFORT INDEX (TEI) 1-5
   1=Minimal (1-2 days): CV tweaks
   2=Light (1 week): Repositioning
   3=Moderate (2-4 weeks): Significant reframing
   4=Heavy (1-6 months): Gap-filling courses/certs
   5=Major Pivot (6+ months): Reskilling needed

3. RISK ASSESSMENT (0-100 each)
   Candidate Risk: rejection likelihood, opportunity cost, interview exposure
   Employer Risk: performance risk, ramp-up time, verification concerns

--- OUTPUT (JSON only) ---
{
  "jd_parsing": {
    "role_title": "<title>",
    "company": "<company or null>",
    "mandatory_skills": ["skill1", "skill2"],
    "nice_to_have_skills": ["skill1"],
    "years_required": <number or null>,
    "education_required": "<degree or null>",
    "seniority_level": "<Junior|Mid|Senior|Lead|Principal|Director|VP|C-Level>"
  },
  "raw_compatibility": {
    "score": <0-100>,
    "grade": "<A|A-|B+|B|C+|C|D|F>",
    "label": "<Excellent|Strong|Good|Moderate|Stretch|Weak|Poor|No Match>",
    "hard_gate_applied": "<gate name or null>",
    "uncapped_score": <0-100>,
    "component_scores": {
      "must_have_skills": {"score": <0-100>, "matched": ["skill"], "missing": ["skill"]},
      "domain_experience": {"score": <0-100>, "cv_years": <num>, "required_years": <num>},
      "total_experience": {"score": <0-100>, "cv_years": <num>, "required_years": <num>},
      "depth_scope": {"score": <0-100>, "cv_level": "<level>", "required_level": "<level>"},
      "nature_fit": {"score": <0-100>, "alignment": "<description>"},
      "should_have_skills": {"score": <0-100>, "matched": ["skill"], "missing": ["skill"]},
      "nice_to_have_skills": {"score": <0-100>, "matched": ["skill"]}
    }
  },
  "transformation_effort": {
    "tei_score": <1-5>,
    "tei_label": "<Minimal|Light|Moderate|Heavy|Major Pivot>",
    "timeline": "<estimated time>",
    "gap_breakdown": [
      {"area": "<gap area>", "points": <contribution>, "fixable_by_cv": <true|false>}
    ],
    "honest_assessment": "<1-2 sentences on what it would actually take>"
  },
  "risk_assessment": {
    "candidate_risk": {
      "score": <0-100>,
      "level": "<Low|Moderate|High|Critical>",
      "factors": [
        {"factor": "<rejection likelihood|opportunity cost|interview exposure>", "score": <0-100>, "detail": "<explanation>"}
      ]
    },
    "employer_risk": {
      "score": <0-100>,
      "level": "<Low|Moderate|High|Critical>",
      "factors": [
        {"factor": "<performance|ramp-up|verification>", "score": <0-100>, "detail": "<explanation>"}
      ]
    }
  },
  "honest_verdict": {
    "headline": "<one honest sentence about the match>",
    "reality_check": "<2-3 sentences of honest truth about this application>",
    "should_apply": "<Yes - strong fit|Yes - with strategy|Maybe - stretch role|Probably not|No - wrong role>",
    "success_probability": "<percentage estimate>",
    "better_fit_roles": [
      {"role": "<alternative role 1>", "fit_score": <70-95>, "reason": "<why this fits better>"},
      {"role": "<alternative role 2>", "fit_score": <70-95>, "reason": "<why this fits better>"},
      {"role": "<alternative role 3>", "fit_score": <70-95>, "reason": "<why this fits better>"}
    ]
  },
  "strengths_reality_check": [
    {"strength": "<candidate strength>", "reality": "<honest assessment>", "helps": "<how it helps>", "doesnt_help": "<why it doesn't fully translate>"}
  ],
  "critical_gaps": [
    {"area": "<gap area>", "severity": "<critical|high|moderate>", "you_have": "<what CV shows>", "jd_requires": "<what JD needs>", "match_percent": <0-100>, "fixable_by_cv": <true|false>, "what_would_help": "<real solution>"}
  ],
  "real_options": {
    "apply_if": ["<condition when applying makes sense>"],
    "dont_apply_if": ["<condition when they should not apply>"],
    "bottom_line": {
      "your_profile": "<honest description of who they are>",
      "target_role": "<what role they're applying for>",
      "reality": "<honest assessment of the gap>",
      "option_a": {"title": "<high-probability option>", "action": "<what to do>"},
      "option_b": {"title": "<long-term pivot option>", "action": "<what to do>"}
    }
  },
  "student_guidance": {
    "if_dream_role": "<advice if this is their dream pivot>",
    "if_practical": "<advice if they want high-probability success>",
    "quick_wins": ["<immediate action 1>", "<action 2>", "<action 3>"],
    "long_term_path": "<what would actually help in 6-12 months>"
  },
  "evidence_map": [
    {"jd_requirement": "<req>", "cv_evidence": "<evidence or 'Not found'>", "status": "<Match|Weak|Missing>", "gap_severity": "<none|minor|moderate|critical>"}
  ]
}

TONE GUIDELINES:
- Raw Score >70%: Encouraging with actionable improvements
- Raw Score 50-70%: Honest about stretch, provide transformation roadmap
- Raw Score 40-50%: Direct about low probability, suggest alternatives
- Raw Score <40%: Advise against applying, redirect to better fits
- TEI >=4: Be clear this isn't a "CV fix" - it's a career gap
- Risk >60%: Explicitly state risks before any encouragement

CRITICAL:
- Return ONLY valid JSON, no markdown
- Be HONEST first, constructive second
- Apply hard gates before final score
- Limit evidence_map to top 5 requirements
- better_fit_roles: suggest 3 roles that match their actual profile better`}function l(e,t,i){let n=r(i,2e3);return`You are an expert career advisor and CV consultant helping a job seeker improve their resume. You have access to their CV information and should provide personalized, actionable advice.

${e}

PREVIOUS CONVERSATION:
${t}

GUIDELINES:
- Be friendly, encouraging, and professional
- Provide specific, actionable advice based on their actual CV content
- Reference specific sections of their CV when giving feedback
- Consider industry best practices and ATS optimization
- Keep responses concise but helpful (2-3 paragraphs max)
- If asked about something not in the CV, suggest they add it
- Focus on practical improvements they can make immediately

USER'S QUESTION: ${n}

Provide a helpful response:`}function c(e){let t=e.trim();return t.startsWith("```json")?t=t.slice(7):t.startsWith("```")&&(t=t.slice(3)),t.endsWith("```")&&(t=t.slice(0,-3)),t=(t=(t=(t=(t=t.trim()).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,"")).replace(/,\s*}/g,"}")).replace(/,\s*]/g,"]")).replace(/,\s*,/g,",")}function d(e){let t=e.trim(),i=!1,r=0,n=0,a=0;for(;a<t.length;){let e=t[a];if(i&&"\\"===e){a+=2;continue}'"'===e?(i=!i)||(n=a+1,r=a+1):i||"}"!==e&&"]"!==e&&","!==e&&":"!==e||(r=a+1),a++}i&&(n>0?t=t.slice(0,n):r>0&&(t=t.slice(0,r)),t=(t=t.replace(/,?\s*"[^"]*$/,"")).replace(/,?\s*"[^"]*":\s*$/,"")),t=(t=(t=(t=(t=t.replace(/,?\s*"[^"]*":\s*$/,"")).replace(/,?\s*"[^"]*":\s*"[^"]*$/,"")).replace(/,?\s*"[^"]*$/,"")).replace(/:\s*$/,": null")).replace(/,\s*$/,"");let o=0,s=0;for(i=!1,a=0;a<t.length;){let e=t[a];if(i&&"\\"===e){a+=2;continue}'"'===e?i=!i:!i&&("{"===e?o++:"}"===e?o--:"["===e?s++:"]"===e&&s--),a++}return(s>0||o>0)&&(t=t.replace(/,\s*$/,"")+"]".repeat(Math.max(0,s))+"}".repeat(Math.max(0,o))),t}function u(e){let t=c(e);try{return JSON.parse(t)}catch(i){let e=d(t);try{return JSON.parse(e)}catch(n){let e=t.indexOf("{"),r=t.lastIndexOf("}");if(e>=0&&r>e){let i=c(t.slice(e,r+1));try{return JSON.parse(i)}catch{let e=d(i);try{return JSON.parse(e)}catch{}}}throw Error(`Failed to parse AI response: ${i.message}`)}}}function p(e,t=10){return e&&0!==e.length?e.slice(-t).map(e=>`${"user"===e.role?"User":"Advisor"}: ${e.content}`).join("\n\n"):""}function g(e,t="cv.pdf"){let n=r(e);if(i(n))throw Error("Security: Suspicious content detected in CV text");return`You are the EduNatives Forensic CV Engine (v2.11).

Analyze this CV using seven scoring categories (A-G) and produce comprehensive assessment data for both student and HR audiences.

CV DATA:
"""
${n}
"""

=== SCORING CATEGORIES (Weights) ===
A. ATS Structure (15%): Contact info completeness, formatting, layout, length, typos
B. Content Realism (20%): Claims believability, evidence quality, quantification
C. Skill Validation (20%): Skills backed by experience, ghost skills detection, proficiency levels 1-5
D. Strengths Discovery (10%): Key achievements, unique value propositions
E. Tone & Clarity (10%): Readability, jargon levels, bullet length, repetition
F. Timeline Plausibility (15%): Career gaps, seniority alignment, progression logic
G. Nature Fit (10%): Education-career alignment, domain depth, candidate profile

=== ISSUE SEVERITY LEVELS ===
- critical: Disqualifying issues (fake credentials, major red flags)
- high: Significant problems that hurt candidacy (multiple typos, ghost skills)
- medium: Notable issues worth fixing (missing LinkedIn, formatting issues)
- low: Minor polish items (wordiness, minor improvements)

=== OUTPUT SCHEMA ===
Return ONLY valid JSON matching this structure:

{
  "version": "2.11",
  "input": {
    "cv_filename": "${t}",
    "jd_provided": false,
    "jd_title": null
  },
  "analysis_metadata": {
    "cv_name": "String (extracted name)",
    "analysis_date": "${new Date().toISOString()}",
    "engine_version": "2.11",
    "professional_age_years": Number (years since first job),
    "inferred_seniority": "String (Entry/Mid/Senior/Lead/Principal/Executive)"
  },
  "cv_nature": {
    "education_nature": {
      "field": "String (IT/CS, Business, Engineering, Arts, Science, etc.)",
      "field_specific": "String (specific major/field)",
      "level": "String (High School/Associate/Bachelors/Masters/PhD)",
      "technical_degree": Boolean,
      "stem_degree": Boolean,
      "relevance_to_career": "String (Direct/Related/Tangential/Unrelated)"
    },
    "domain_nature": {
      "primary_domain": "String (Software Dev/Infrastructure/Data/Security/Product/Design/etc.)",
      "secondary_domains": ["String"],
      "specialization": "String",
      "domain_depth": "String (Generalist/Specialist/Expert)"
    },
    "industry_nature": {
      "current_industry": "String",
      "industry_history": ["String"],
      "industry_depth": "String (Single/Multi-Industry)"
    },
    "work_style_nature": {
      "employment_pattern": "String (Full-time/Contract/Freelance/Mixed)",
      "work_arrangement": "String (On-site/Remote/Hybrid)",
      "company_size_history": "String (Startup/SMB/Enterprise/Mixed)",
      "geographic_pattern": "String (Local/National/International)"
    },
    "career_path_nature": {
      "trajectory": "String (Linear Progression/Career Change/Lateral/Entrepreneurial)",
      "stability": "String (Stable/Moderate/Job Hopper)",
      "gaps_present": Boolean,
      "career_stage": "String (Entry/Early-Mid/Mid/Senior/Executive)",
      "is_career_changer": Boolean,
      "pivot_from": "String or null",
      "pivot_to": "String or null"
    },
    "candidate_profile": {
      "type": "String (Fresh Graduate/Rising Star/Industry Veteran/Career Changer/Specialist)",
      "learning_style": "String (Self-Taught/Certification-Based/Formal Education/Mixed)",
      "risk_profile": "String (Low Risk/Moderate Risk/High Risk)"
    }
  },
  "category_scores": {
    "A_ats_structure": {
      "score": Number (0-100),
      "grade": "String (A/A-/B+/B/B-/C+/C/D/F)",
      "issues": [{"code": "A1-A9", "type": "String", "detail": "String", "severity": "critical|high|medium|low", "location": "String"}]
    },
    "B_content_realism": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "B1-B9", "type": "String", "detail": "String", "severity": "String", "evidence": "String"}]
    },
    "C_skill_validation": {
      "score": Number,
      "grade": "String",
      "validation_rate": "String (e.g., 85%)",
      "skills": {
        "validated": [{"skill": "String", "level": 1-5, "raw_level": 1-5, "evidence": ["String"], "penalty": "String or null", "cap_applied": Boolean}],
        "implied": [{"skill": "String", "level": 1-5, "reason": "String"}],
        "ghost": ["String (skills listed but no evidence)"]
      },
      "issues": [{"code": "C1-C9", "type": "String", "skill": "String", "detail": "String", "severity": "String"}]
    },
    "D_strengths_discovery": {
      "score": Number,
      "strengths": [{"code": "D1-D9", "type": "String", "detail": "String", "evidence": "String"}]
    },
    "E_tone_clarity": {
      "score": Number,
      "grade": "String",
      "metrics": {"avg_bullet_length_words": Number, "technical_density": "String", "repeated_words": [{"word": "String", "count": Number}], "readability": "String"},
      "issues": [{"code": "E1-E9", "type": "String", "detail": "String", "severity": "String"}]
    },
    "F_timeline_plausibility": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "F1-F9", "type": "String", "detail": "String", "severity": "String"}]
    },
    "G_nature_fit": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "G1-G9", "type": "String", "detail": "String", "severity": "String"}]
    }
  },
  "ui_output": {
    "overallScore": Number (weighted average of all category scores),
    "level": "Exceptional|Strong|Good|Fair|Needs Work",
    "inflation": Boolean,
    "verdict": "String (2-3 sentence summary)",
    "sections": [{"name": "String", "code": "A-G", "score": Number, "status": "good|warning|critical", "summary": "String"}],
    "strengths": [{"code": "D1-D9", "icon": "check", "text": "String"}],
    "weaknesses": [{"code": "String", "icon": "x", "severity": "critical|high|medium|low", "text": "String"}],
    "recommendations": [{"priority": "high|medium|low", "icon": "lightbulb", "text": "String", "impact": "String (+X pts)"}],
    "highlights": [{"type": "achievement|skill|concern|gap|education", "color": "green|blue|yellow|red|purple", "text": "String", "source": "String", "note": "String or null"}],
    "quickStats": {
      "professionalYears": Number,
      "validatedSkills": Number,
      "ghostSkills": Number,
      "validationRate": Number (percentage),
      "quantificationRate": Number (percentage of bullets with metrics),
      "issueCount": {"critical": Number, "high": Number, "medium": Number, "low": Number}
    }
  },
  "reports": {
    "student_view": {
      "headline": "String (encouraging headline)",
      "overall_score": {"score": Number, "grade": "String", "message": "String"},
      "your_strengths": [{"title": "String", "detail": "String", "icon": "trophy|star|sparkle|rocket"}],
      "your_background": {"summary": "String", "unique_value": "String", "growth_areas": ["String"]},
      "quick_wins": [{"action": "String", "impact": "String", "time": "String (e.g., 15 minutes)", "priority": "do_first|do_soon|do_later"}],
      "improvement_roadmap": {
        "this_week": {"actions": ["String"], "projected_gain": Number},
        "this_month": {"actions": ["String"], "projected_gain": Number},
        "long_term": {"actions": ["String"], "projected_gain": Number}
      },
      "encouragement": "String (positive closing message)"
    }
  },
  "recommended_rewrites": [{"type": "remove|evidence|add|reword", "location": "String", "original": "String", "suggested": "String", "impact": "String", "related_codes": ["String"]}]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown code blocks
- Be thorough and specific in feedback
- Calculate weighted overall score: A(15%) + B(20%) + C(20%) + D(10%) + E(10%) + F(15%) + G(10%)
- Include 5-8 highlights mixing achievements, skills, concerns, and gaps
- Provide actionable, specific recommendations with point impacts`}let m=["experience","education","skills","summary","objective","profile","work history","employment","qualifications","certifications","training","professional background","career","achievements","accomplishments","email","phone","linkedin","github","portfolio","resume","curriculum vitae","cv","responsibilities","achievements","managed","developed","led","implemented","created","designed","bachelor","master","degree","university","college","graduated","certified","license","award"],h=[/^dear\s+(sir|madam|hiring|manager)/i,/^\s*invoice\s*(#|number|no\.?)?/i,/^\s*receipt\s*(#|number|no\.?)?/i,/^\s*contract\s*/i,/^\s*agreement\s*/i,/^\s*terms\s+(and|&)\s+conditions/i,/^\s*privacy\s+policy/i,/^\s*chapter\s+\d/i,/^\s*table\s+of\s+contents/i,/once upon a time/i,/^\s*article\s+\d/i];function S(e){let t=e.toLowerCase();if(e.length<200)return{isCV:!1,confidence:.9,reason:"Document is too short to be a valid CV/resume. Please upload a complete document."};for(let t of h)if(t.test(e))return{isCV:!1,confidence:.85,reason:"This document appears to be a cover letter, contract, or other non-CV document. Please upload your CV/resume instead."};let i=0,r=[];for(let e of m)t.includes(e)&&(i++,r.push(e));let n=.4*Math.min(i/8,1)+.2*!!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(e)+.15*!!/[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]{6,}/.test(e)+.25*!!/\b(experience|education|skills|summary|work\s+history|employment)\s*[:|\n]/i.test(e);return n>=.4?{isCV:!0,confidence:Math.min(n,1),reason:"Valid CV/resume detected"}:{isCV:!1,confidence:1-n,reason:"This document doesn't appear to be a CV/resume. A CV should include sections like Experience, Education, Skills, and contact information. Please upload a valid CV/resume document."}}e.s(["buildAdvisorPrompt",()=>l,"buildAssessmentPrompt",()=>o,"buildJDMatchPrompt",()=>s,"buildV211AssessmentPrompt",()=>g,"cleanAIResponse",()=>c,"formatCVForJDMatch",()=>a,"formatCVSummary",()=>n,"formatConversationHistory",()=>p,"parseAIResponse",()=>u,"sanitizeAIInput",()=>r,"validateCVDocument",()=>S])}];

//# sourceMappingURL=lib_ai_rules_ts_8cb537bd._.js.map