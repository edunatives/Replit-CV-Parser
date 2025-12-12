# Migration Guide: Current Implementation → v2.3

## Overview

This guide shows how to migrate from your current `assessor.ts`, `cv-parser.ts`, and `jd-matcher.ts` to the unified v2.3 implementation.

---

## File Mapping

| Current File | v2.3 Replacement | Notes |
|--------------|------------------|-------|
| `cv-parser.ts` | Keep as-is | Parser extracts raw data, still needed |
| `assessor.ts` | `cv-intelligence-chain-v2.3.ts` | Full replacement with new scoring |
| `jd-matcher.ts` | `cv-intelligence-chain-v2.3.ts` | Unified into single chain |
| (new) | `cv-intelligence-schemas-v2.3.ts` | Centralized Zod schemas |

---

## Step-by-Step Migration

### Step 1: Add New Schema File

Copy `cv-intelligence-schemas-v2.3.ts` to your `server/lib/langchain/` folder.

### Step 2: Add New Chain File

Copy `cv-intelligence-chain-v2.3.ts` to your `server/lib/langchain/` folder.

### Step 3: Update Imports

**Before (current):**
```typescript
import { assessCVWithLangChain, transformToForensicV211 } from "./assessor";
import { matchJDWithLangChain } from "./jd-matcher";
```

**After (v2.3):**
```typescript
import { 
  analyzeCV, 
  CvIntelligenceChain,
  OutputMode,
  AudienceType 
} from "./cv-intelligence-chain-v2.3";
```

### Step 4: Update API Routes

**Before:**
```typescript
// CV Assessment
const assessment = await assessCVWithLangChain(cvSummary, filename);
const result = transformToForensicV211(assessment, filename);

// JD Match
const matchResult = await matchJDWithLangChain(cvSummary, jdText);
```

**After:**
```typescript
// CV Assessment (no JD)
const result = await analyzeCV(cvContent, {
  outputMode: "STANDARD",
  audience: "STUDENT",
});

// JD Match
const result = await analyzeCV(cvContent, {
  jdContent: jdText,
  outputMode: "STANDARD",
  audience: "STUDENT", // or "HR"
});
```

### Step 5: Update Response Handling

**Before:**
```typescript
// Response structure (v2.11)
{
  version: "2.11",
  ui_output: {
    overallScore: 75,
    level: "Good",
    sections: [...],
    strengths: [...],
    weaknesses: [...],
  },
  reports: {
    student_view: {...}
  }
}
```

**After:**
```typescript
// Response structure (v2.3 STANDARD)
{
  success: true,
  data: {
    version: "2.3-standard",
    mode: "STANDARD",
    audience: "STUDENT",
    scores: {
      overall: 75,
      grade: "B",
      rawCompatibility: 65,  // if JD provided
      tei: 3,                // if JD provided
      candidateRisk: 45,     // if JD provided
    },
    cvSummary: {...},
    bulletHealth: {...},
    improvements: {...},
    verdict: "...",
    alternativeRoles: [...],
    nextSteps: [...]
  },
  meta: {
    processingTimeMs: 1234,
    tokensUsed: { input: 500, output: 2000 },
    modelUsed: "gemini-2.5-flash"
  }
}
```

---

## UI Transformer (if needed)

If your UI expects the old v2.11 format, create a compatibility transformer:

```typescript
/**
 * Transform v2.3 output to v2.11 UI format for backward compatibility
 */
export function transformV23ToV211(
  response: AnalysisResponse,
  filename: string
): Record<string, unknown> {
  const data = response.data;
  
  // Handle different output modes
  if (data.mode === "LITE") {
    return transformLiteToV211(data as LiteOutput, filename);
  } else if (data.mode === "STANDARD") {
    return transformStandardToV211(data as StandardOutput, filename);
  } else {
    return transformFullToV211(data as FullOutput, filename);
  }
}

function transformStandardToV211(
  data: StandardOutput,
  filename: string
): Record<string, unknown> {
  // Map v2.3 grades to v2.11 levels
  const gradeToLevel: Record<string, string> = {
    "A": "Exceptional",
    "A-": "Strong",
    "B+": "Strong",
    "B": "Good",
    "B-": "Good",
    "C+": "Fair",
    "C": "Fair",
    "D": "Needs Work",
    "F": "Needs Work",
  };
  
  const level = gradeToLevel[data.scores.grade] || "Good";
  
  return {
    version: "2.11",
    input: {
      cv_filename: filename,
      jd_provided: !!data.jdSummary,
      jd_title: data.jdSummary?.jobTitle || null,
    },
    analysis_metadata: {
      cv_name: filename,
      analysis_date: data.generatedAt,
      engine_version: "2.3-compat",
    },
    ui_output: {
      overallScore: data.scores.overall,
      level,
      inflation: false, // Not in v2.3 STANDARD
      verdict: data.verdict,
      sections: [], // Would need FULL mode for this
      strengths: [], // Would need FULL mode
      weaknesses: [], // Would need FULL mode
      recommendations: data.improvements.critical.concat(data.improvements.high).map((text, i) => ({
        priority: i < data.improvements.critical.length ? "high" : "medium",
        icon: i < data.improvements.critical.length ? "priority_high" : "schedule",
        text,
        impact: "Improves CV quality",
      })),
      highlights: [],
      quickStats: {
        professionalYears: data.cvSummary.totalYears,
        validatedSkills: data.cvSummary.topSkills.length,
        ghostSkills: 0,
        validationRate: 0,
        quantificationRate: 0,
        issueCount: {
          critical: data.improvements.critical.length,
          high: data.improvements.high.length,
          medium: 0,
          low: 0,
        },
      },
    },
    reports: {
      student_view: {
        headline: data.verdict,
        overall_score: {
          score: data.scores.overall,
          grade: level,
          message: data.verdict,
        },
        quick_wins: data.improvements.critical.map((action, i) => ({
          action,
          impact: "+5 points",
          time: "15 min",
          priority: i === 0 ? "do_first" : "do_soon",
        })),
        improvement_roadmap: {
          this_week: { actions: data.nextSteps?.slice(0, 2) || [], projected_gain: 5 },
          this_month: { actions: data.improvements.high, projected_gain: 10 },
          long_term: { actions: [], projected_gain: 15 },
        },
        encouragement: "Keep improving your CV!",
      },
    },
    // JD Match data (if available)
    ...(data.jdSummary ? {
      jd_match: {
        overall_match_score: data.scores.rawCompatibility,
        verdict: data.verdict,
        matched_skills: [], // Would need FULL for details
        missing_skills: data.skillMatch?.missingCritical || [],
      },
    } : {}),
  };
}
```

---

## Key Differences Summary

| Aspect | v2.11 (Current) | v2.3 (New) |
|--------|-----------------|------------|
| Scoring | Single `overallScore` | `overall`, `grade`, `rawCompatibility`, `tei`, `risk` |
| Grades | Level (Exceptional/Strong/Good/Fair/Needs Work) | Letter grades (A, A-, B+, B, B-, C+, C, D, F) |
| Output modes | Single format | LITE / STANDARD / FULL |
| Audiences | Mixed | STUDENT / HR with different outputs |
| Issue codes | Custom categories | Standardized A1-H9 codes |
| Bullet analysis | Basic | Detailed A10-A13 with rewrites |
| Experience depth | Not present | Full H1-H9 analysis |
| Hard gates | Not present | Score caps for fundamental gaps |
| Retries | Not present | Exponential backoff |

---

## Testing the Migration

```typescript
// Test script
import { analyzeCV } from "./cv-intelligence-chain-v2.3";

async function testMigration() {
  const testCV = `
    John Doe
    Software Engineer
    john@example.com
    
    Experience:
    Senior Developer at TechCorp (2020-Present)
    - Led team of 5 developers
    - Reduced build time by 40%
  `;
  
  // Test LITE mode
  const liteResult = await analyzeCV(testCV, { outputMode: "LITE" });
  console.log("LITE:", liteResult.data);
  
  // Test STANDARD mode
  const standardResult = await analyzeCV(testCV, { outputMode: "STANDARD" });
  console.log("STANDARD:", standardResult.data);
  
  // Test with JD
  const jdResult = await analyzeCV(testCV, {
    jdContent: "Looking for Senior Developer with 5+ years experience...",
    outputMode: "STANDARD",
    audience: "HR",
  });
  console.log("JD Match:", jdResult.data);
}

testMigration().catch(console.error);
```

---

## Rollback Plan

If you need to rollback, simply:
1. Revert imports to use old files
2. Keep v2.3 files in place for future migration
3. Both systems can coexist during transition

---

## Questions?

The v2.3 implementation is designed to be a drop-in replacement. Key benefits:
- 3 output modes for different use cases
- Proper retry logic with exponential backoff
- Centralized schemas for consistency
- Full issue code coverage (A1-H9)
- Bullet-level analysis (A10-A13)
- Experience depth analysis (H1-H9)
- Hard gates for honest scoring
