"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Typography, Card, CardContent, Chip, LinearProgress, TextField, Button, IconButton, Divider, CircularProgress, Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SendIcon from "@mui/icons-material/Send";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WorkIcon from "@mui/icons-material/Work";
import TokenIcon from "@mui/icons-material/Token";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import type { ParsedCV, ForensicAnalysisV211 } from "@/types/cv";
import { V211AssessmentPanel } from "./V211AssessmentPanel";
import { JDMatchPanel } from "./JDMatchPanel";

interface AIAnalysisPanelProps {
  cv: ParsedCV;
  activeTrack: "assessment" | "advisor" | "jd-match";
}

// v9.3 Forensic highlight for inline CV annotation
interface ForensicHighlight {
  snippet: string;
  type: "red" | "green" | "yellow";
  comment: string;
}

// v9.3 CVAssessment with level, inflation, verdict, and highlights
interface CVAssessment {
  overallScore: number;
  level?: string;
  inflation?: boolean;
  verdict?: string;
  sections: { name: string; score: number; feedback: string }[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  highlights?: ForensicHighlight[];
  tokenUsage: { promptTokens: number; completionTokens: number; totalTokens: number };
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// v2.2 Evidence map entry with gap severity
interface EvidenceMapEntry {
  jd_requirement: string;
  cv_evidence: string;
  status: "Match" | "Weak" | "Missing";
  gap_severity?: "none" | "minor" | "moderate" | "critical";
}

// v2.2 JD Parsing
interface JDParsing {
  role_title: string;
  company: string | null;
  mandatory_skills: string[];
  nice_to_have_skills: string[];
  years_required: number | null;
  education_required: string | null;
  seniority_level: string;
}

// v2.2 Component scores for detailed breakdown
interface ComponentScore {
  score: number;
  matched?: string[];
  missing?: string[];
  cv_years?: number;
  required_years?: number;
  cv_level?: string;
  required_level?: string;
  alignment?: string;
}

// v2.2 Raw Compatibility breakdown
interface RawCompatibility {
  score: number;
  grade: string;
  label: string;
  hard_gate_applied: string | null;
  uncapped_score: number;
  component_scores: {
    must_have_skills: ComponentScore;
    domain_experience: ComponentScore;
    total_experience: ComponentScore;
    depth_scope: ComponentScore;
    nature_fit: ComponentScore;
    should_have_skills: ComponentScore;
    nice_to_have_skills: ComponentScore;
  };
}

// v2.2 TEI gap breakdown
interface GapBreakdown {
  area: string;
  points: number;
  fixable_by_cv: boolean;
}

// v2.2 Transformation Effort
interface TransformationEffort {
  tei_score: number;
  tei_label: string;
  timeline: string;
  gap_breakdown: GapBreakdown[];
  honest_assessment: string;
}

// v2.2 Risk Factor
interface RiskFactor {
  factor: string;
  score: number;
  detail: string;
}

// v2.2 Risk Assessment
interface RiskAssessment {
  candidate_risk: {
    score: number;
    level: "Low" | "Moderate" | "High" | "Critical";
    factors: RiskFactor[];
  };
  employer_risk: {
    score: number;
    level: "Low" | "Moderate" | "High" | "Critical";
    factors: RiskFactor[];
  };
}

// v2.2 Better Fit Role with score
interface BetterFitRole {
  role: string;
  fit_score: number;
  reason: string;
}

// v2.2 Honest Verdict
interface HonestVerdict {
  headline: string;
  reality_check: string;
  should_apply: string;
  success_probability: string;
  better_fit_roles: BetterFitRole[];
}

// v2.2 Strengths Reality Check
interface StrengthRealityCheck {
  strength: string;
  reality: string;
  helps: string;
  doesnt_help: string;
}

// v2.2 Critical Gap
interface CriticalGap {
  area: string;
  severity: "critical" | "high" | "moderate";
  you_have: string;
  jd_requires: string;
  match_percent: number;
  fixable_by_cv: boolean;
  what_would_help: string;
}

// v2.2 Real Options
interface RealOptions {
  apply_if: string[];
  dont_apply_if: string[];
  bottom_line: {
    your_profile: string;
    target_role: string;
    reality: string;
    option_a: { title: string; action: string };
    option_b: { title: string; action: string };
  };
}

// v2.2 Student Guidance
interface StudentGuidance {
  if_dream_role: string;
  if_practical: string;
  quick_wins: string[];
  long_term_path: string;
}

// v2.2 JDMatchResult - Honest Assessment Framework
interface JDMatchResult {
  jd_parsing?: JDParsing;
  raw_compatibility?: RawCompatibility;
  transformation_effort?: TransformationEffort;
  risk_assessment?: RiskAssessment;
  honest_verdict?: HonestVerdict;
  strengths_reality_check?: StrengthRealityCheck[];
  critical_gaps?: CriticalGap[];
  real_options?: RealOptions;
  student_guidance?: StudentGuidance;
  evidence_map?: EvidenceMapEntry[];
  tokenUsage: { promptTokens: number; completionTokens: number; totalTokens: number };
}

// Normalize assessment response to handle v9.3 structure and snake_case
function normalizeAssessment(raw: Record<string, unknown>): CVAssessment {
  const sections = (raw.sections || raw.section_scores || []) as Array<Record<string, unknown>>;
  const tokenUsageRaw = (raw.tokenUsage || raw.token_usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 }) as Record<string, unknown>;
  const highlightsRaw = (raw.highlights || []) as Array<Record<string, unknown>>;
  return {
    overallScore: (raw.overallScore ?? raw.overall_score ?? 0) as number,
    level: (raw.level ?? "") as string,
    inflation: (raw.inflation ?? false) as boolean,
    verdict: (raw.verdict ?? "") as string,
    sections: sections.map((s: Record<string, unknown>) => ({
      name: (s.name ?? s.section ?? "") as string,
      score: (s.score ?? 0) as number,
      feedback: (s.feedback ?? "") as string,
    })),
    strengths: (raw.strengths ?? []) as string[],
    weaknesses: (raw.weaknesses ?? []) as string[],
    recommendations: (raw.recommendations ?? []) as string[],
    highlights: highlightsRaw.map((h: Record<string, unknown>) => ({
      snippet: (h.snippet ?? "") as string,
      type: (h.type ?? "yellow") as "red" | "green" | "yellow",
      comment: (h.comment ?? "") as string,
    })),
    tokenUsage: normalizeTokenUsage(tokenUsageRaw),
  };
}

// Normalize JD match response to handle v2.2 Honest Assessment Framework
function normalizeJDMatch(raw: Record<string, unknown>): JDMatchResult {
  const tokenUsageRaw = (raw.tokenUsage || raw.token_usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 }) as Record<string, unknown>;
  const jdParsingRaw = (raw.jd_parsing || null) as Record<string, unknown> | null;
  const rawCompatRaw = (raw.raw_compatibility || raw.rawCompatibility || null) as Record<string, unknown> | null;
  const transformRaw = (raw.transformation_effort || raw.transformationEffort || null) as Record<string, unknown> | null;
  const riskRaw = (raw.risk_assessment || raw.riskAssessment || null) as Record<string, unknown> | null;
  const verdictRaw = (raw.honest_verdict || raw.honestVerdict || null) as Record<string, unknown> | null;
  const guidanceRaw = (raw.student_guidance || raw.studentGuidance || null) as Record<string, unknown> | null;
  const evidenceMapRaw = (raw.evidence_map || raw.evidenceMap || []) as Array<Record<string, unknown>>;

  // Helper to parse component score
  const parseComponentScore = (comp: Record<string, unknown> | null): ComponentScore => ({
    score: (comp?.score ?? 0) as number,
    matched: (comp?.matched ?? []) as string[],
    missing: (comp?.missing ?? []) as string[],
    cv_years: comp?.cv_years as number | undefined,
    required_years: comp?.required_years as number | undefined,
    cv_level: comp?.cv_level as string | undefined,
    required_level: comp?.required_level as string | undefined,
    alignment: comp?.alignment as string | undefined,
  });

  // Parse raw_compatibility component_scores
  const componentScoresRaw = (rawCompatRaw?.component_scores || null) as Record<string, Record<string, unknown>> | null;
  
  return {
    jd_parsing: jdParsingRaw ? {
      role_title: (jdParsingRaw.role_title ?? "") as string,
      company: (jdParsingRaw.company ?? null) as string | null,
      mandatory_skills: (jdParsingRaw.mandatory_skills ?? []) as string[],
      nice_to_have_skills: (jdParsingRaw.nice_to_have_skills ?? []) as string[],
      years_required: (jdParsingRaw.years_required ?? null) as number | null,
      education_required: (jdParsingRaw.education_required ?? null) as string | null,
      seniority_level: (jdParsingRaw.seniority_level ?? "") as string,
    } : undefined,
    raw_compatibility: rawCompatRaw ? {
      score: (rawCompatRaw.score ?? 0) as number,
      grade: (rawCompatRaw.grade ?? "F") as string,
      label: (rawCompatRaw.label ?? "No Match") as string,
      hard_gate_applied: (rawCompatRaw.hard_gate_applied ?? null) as string | null,
      uncapped_score: (rawCompatRaw.uncapped_score ?? rawCompatRaw.score ?? 0) as number,
      component_scores: {
        must_have_skills: parseComponentScore(componentScoresRaw?.must_have_skills || null),
        domain_experience: parseComponentScore(componentScoresRaw?.domain_experience || null),
        total_experience: parseComponentScore(componentScoresRaw?.total_experience || null),
        depth_scope: parseComponentScore(componentScoresRaw?.depth_scope || null),
        nature_fit: parseComponentScore(componentScoresRaw?.nature_fit || null),
        should_have_skills: parseComponentScore(componentScoresRaw?.should_have_skills || null),
        nice_to_have_skills: parseComponentScore(componentScoresRaw?.nice_to_have_skills || null),
      },
    } : undefined,
    transformation_effort: transformRaw ? {
      tei_score: (transformRaw.tei_score ?? 1) as number,
      tei_label: (transformRaw.tei_label ?? "Minimal") as string,
      timeline: (transformRaw.timeline ?? "") as string,
      gap_breakdown: ((transformRaw.gap_breakdown ?? []) as Array<Record<string, unknown>>).map(g => ({
        area: (g.area ?? "") as string,
        points: (g.points ?? 0) as number,
        fixable_by_cv: (g.fixable_by_cv ?? true) as boolean,
      })),
      honest_assessment: (transformRaw.honest_assessment ?? "") as string,
    } : undefined,
    risk_assessment: riskRaw ? {
      candidate_risk: {
        score: ((riskRaw.candidate_risk as Record<string, unknown>)?.score ?? 0) as number,
        level: ((riskRaw.candidate_risk as Record<string, unknown>)?.level ?? "Low") as "Low" | "Moderate" | "High" | "Critical",
        factors: (((riskRaw.candidate_risk as Record<string, unknown>)?.factors ?? []) as Array<Record<string, unknown>>).map(f => ({
          factor: (f.factor ?? "") as string,
          score: (f.score ?? 0) as number,
          detail: (f.detail ?? "") as string,
        })),
      },
      employer_risk: {
        score: ((riskRaw.employer_risk as Record<string, unknown>)?.score ?? 0) as number,
        level: ((riskRaw.employer_risk as Record<string, unknown>)?.level ?? "Low") as "Low" | "Moderate" | "High" | "Critical",
        factors: (((riskRaw.employer_risk as Record<string, unknown>)?.factors ?? []) as Array<Record<string, unknown>>).map(f => ({
          factor: (f.factor ?? "") as string,
          score: (f.score ?? 0) as number,
          detail: (f.detail ?? "") as string,
        })),
      },
    } : undefined,
    honest_verdict: verdictRaw ? {
      headline: (verdictRaw.headline ?? "") as string,
      reality_check: (verdictRaw.reality_check ?? "") as string,
      should_apply: (verdictRaw.should_apply ?? "") as string,
      success_probability: (verdictRaw.success_probability ?? "") as string,
      better_fit_roles: ((verdictRaw.better_fit_roles ?? []) as Array<Record<string, unknown> | string>).map(r => {
        if (typeof r === "string") return { role: r, fit_score: 75, reason: "" };
        return { role: (r.role ?? "") as string, fit_score: (r.fit_score ?? 75) as number, reason: (r.reason ?? "") as string };
      }),
    } : undefined,
    strengths_reality_check: ((raw.strengths_reality_check ?? []) as Array<Record<string, unknown>>).map(s => ({
      strength: (s.strength ?? "") as string,
      reality: (s.reality ?? "") as string,
      helps: (s.helps ?? "") as string,
      doesnt_help: (s.doesnt_help ?? "") as string,
    })),
    critical_gaps: ((raw.critical_gaps ?? []) as Array<Record<string, unknown>>).map(g => ({
      area: (g.area ?? "") as string,
      severity: (g.severity ?? "moderate") as "critical" | "high" | "moderate",
      you_have: (g.you_have ?? "") as string,
      jd_requires: (g.jd_requires ?? "") as string,
      match_percent: (g.match_percent ?? 0) as number,
      fixable_by_cv: (g.fixable_by_cv ?? false) as boolean,
      what_would_help: (g.what_would_help ?? "") as string,
    })),
    real_options: (raw.real_options as Record<string, unknown>) ? {
      apply_if: ((raw.real_options as Record<string, unknown>).apply_if ?? []) as string[],
      dont_apply_if: ((raw.real_options as Record<string, unknown>).dont_apply_if ?? []) as string[],
      bottom_line: {
        your_profile: (((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.your_profile ?? "") as string,
        target_role: (((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.target_role ?? "") as string,
        reality: (((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.reality ?? "") as string,
        option_a: {
          title: ((((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.option_a as Record<string, unknown>)?.title ?? "") as string,
          action: ((((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.option_a as Record<string, unknown>)?.action ?? "") as string,
        },
        option_b: {
          title: ((((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.option_b as Record<string, unknown>)?.title ?? "") as string,
          action: ((((raw.real_options as Record<string, unknown>).bottom_line as Record<string, unknown>)?.option_b as Record<string, unknown>)?.action ?? "") as string,
        },
      },
    } : undefined,
    student_guidance: guidanceRaw ? {
      if_dream_role: (guidanceRaw.if_dream_role ?? "") as string,
      if_practical: (guidanceRaw.if_practical ?? "") as string,
      quick_wins: (guidanceRaw.quick_wins ?? []) as string[],
      long_term_path: (guidanceRaw.long_term_path ?? "") as string,
    } : undefined,
    evidence_map: evidenceMapRaw.map((e: Record<string, unknown>) => ({
      jd_requirement: (e.jd_requirement ?? "") as string,
      cv_evidence: (e.cv_evidence ?? "") as string,
      status: (e.status ?? "Missing") as "Match" | "Weak" | "Missing",
      gap_severity: (e.gap_severity ?? "none") as "none" | "minor" | "moderate" | "critical",
    })),
    tokenUsage: normalizeTokenUsage(tokenUsageRaw),
  };
}

// Normalize token usage
function normalizeTokenUsage(raw: Record<string, unknown>): { promptTokens: number; completionTokens: number; totalTokens: number } {
  return {
    promptTokens: (raw.promptTokens ?? raw.prompt_tokens ?? 0) as number,
    completionTokens: (raw.completionTokens ?? raw.completion_tokens ?? 0) as number,
    totalTokens: (raw.totalTokens ?? raw.total_tokens ?? 0) as number,
  };
}

export function AIAnalysisPanel({ cv, activeTrack }: AIAnalysisPanelProps) {
  const [jdText, setJdText] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [assessment, setAssessment] = useState<CVAssessment | null>(null);
  const [v211Analysis, setV211Analysis] = useState<ForensicAnalysisV211 | null>(null);
  const [useV211, setUseV211] = useState(true);
  const [jdMatch, setJdMatch] = useState<JDMatchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [promptComparison, setPromptComparison] = useState<{
    oldPrompt: { label: string; assessment: CVAssessment };
    newPrompt: { label: string; assessment: CVAssessment };
    scoreDifference: { oldScore: number; newScore: number; diff: number };
  } | null>(null);
  const [comparingPrompts, setComparingPrompts] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const jdInputRef = useRef<HTMLTextAreaElement>(null);

  const insertBullet = () => {
    const textarea = jdInputRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const bullet = "\u2022 ";
    
    const newText = jdText.substring(0, start) + bullet + jdText.substring(end);
    setJdText(newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + bullet.length, start + bullet.length);
    }, 0);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const runAssessment = async (version: "9.3" | "2.11" = "2.11") => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv, version }),
      });
      
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error("Server error: received non-JSON response");
      }
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to assess CV");
      }
      
      if (version === "2.11" && data.analysis) {
        setV211Analysis(data.analysis as ForensicAnalysisV211);
        setUseV211(true);
      } else if (data.assessment) {
        const normalized = normalizeAssessment(data.assessment as Record<string, unknown>);
        setAssessment(normalized);
        setUseV211(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to run assessment");
    } finally {
      setLoading(false);
    }
  };

  const runPromptComparison = async () => {
    setComparingPrompts(true);
    setError(null);
    setPromptComparison(null);
    try {
      const response = await fetch("/api/assess/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv }),
      });
      
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error("Server error: received non-JSON response");
      }
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to compare prompts");
      }
      const { comparison } = data;
      setPromptComparison({
        oldPrompt: {
          label: comparison.oldPrompt.label,
          assessment: normalizeAssessment(comparison.oldPrompt.assessment as Record<string, unknown>),
        },
        newPrompt: {
          label: comparison.newPrompt.label,
          assessment: normalizeAssessment(comparison.newPrompt.assessment as Record<string, unknown>),
        },
        scoreDifference: comparison.scoreDifference,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to compare prompts");
    } finally {
      setComparingPrompts(false);
    }
  };

  const sendChatMessage = async () => {
    if (!chatMessage.trim()) return;
    
    const userMessage: ChatMessage = { role: "user", content: chatMessage };
    setChatHistory(prev => [...prev, userMessage]);
    setChatMessage("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv, message: chatMessage, history: chatHistory }),
      });
      
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error("Server error: received non-JSON response");
      }
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to get advice");
      }
      const { response: aiResponse } = data;
      setChatHistory(prev => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get advice");
    } finally {
      setLoading(false);
    }
  };

  const analyzeJDMatch = async () => {
    if (!jdText.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/jd-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv, jobDescription: jdText }),
      });
      
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error("Server error: received non-JSON response");
      }
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze match");
      }
      const { match: rawMatch } = data;
      const normalized = normalizeJDMatch(rawMatch as Record<string, unknown>);
      setJdMatch(normalized);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze job match");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "success.main";
    if (score >= 60) return "warning.main";
    return "error.main";
  };

  if (activeTrack === "assessment") {
    // v2.11 Forensic Engine UI
    if (useV211 && (v211Analysis || loading || error)) {
      return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <V211AssessmentPanel
            analysis={v211Analysis}
            loading={loading}
            error={error}
            candidateName={cv.name}
            candidateTitle={cv.title}
            candidateLocation={cv.location}
            candidateEmail={cv.email}
          />
          {v211Analysis && (
            <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<AutoAwesomeIcon />}
                onClick={() => runAssessment("2.11")}
                disabled={loading}
                data-testid="button-rerun-assessment"
              >
                Re-run Analysis (v2.11)
              </Button>
            </Box>
          )}
        </Box>
      );
    }
    
    // v9.3 Legacy UI
    return (
      <Box sx={{ p: 3, height: "100%", overflow: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <AutoAwesomeIcon sx={{ color: "primary.main" }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            AI Resume Analysis
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        {assessment ? (
          <>
            <Card sx={{ mb: 2, bgcolor: getScoreColor(assessment.overallScore), color: "white" }}>
              <CardContent sx={{ py: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Overall Score
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        {assessment.overallScore}
                      </Typography>
                      {assessment.level && (
                        <Chip 
                          label={assessment.level} 
                          size="small" 
                          sx={{ bgcolor: "rgba(255,255,255,0.3)", color: "white", fontWeight: 600 }} 
                        />
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-end" }}>
                    <Chip
                      icon={<TokenIcon sx={{ fontSize: 14 }} />}
                      label={`${assessment.tokenUsage.totalTokens} tokens`}
                      size="small"
                      sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
                    />
                    {assessment.inflation && (
                      <Chip
                        icon={<WarningIcon sx={{ fontSize: 14 }} />}
                        label="Inflation Detected"
                        size="small"
                        sx={{ bgcolor: "rgba(255,100,100,0.4)", color: "white" }}
                      />
                    )}
                  </Box>
                </Box>
                {assessment.verdict && (
                  <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.95, fontStyle: "italic" }}>
                    {assessment.verdict}
                  </Typography>
                )}
              </CardContent>
            </Card>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "text.secondary" }}>
              Section Scores
            </Typography>

            {assessment.sections.map((section, index) => (
              <Card key={index} sx={{ mb: 1.5 }}>
                <CardContent sx={{ py: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {section.score >= 70 ? (
                        <CheckCircleIcon sx={{ color: "success.main", fontSize: 18 }} />
                      ) : section.score >= 50 ? (
                        <WarningIcon sx={{ color: "warning.main", fontSize: 18 }} />
                      ) : (
                        <ErrorIcon sx={{ color: "error.main", fontSize: 18 }} />
                      )}
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {section.name}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: getScoreColor(section.score) }}>
                      {section.score}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={section.score} 
                    sx={{ height: 4, borderRadius: 1, mb: 1, bgcolor: "grey.200" }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {section.feedback}
                  </Typography>
                </CardContent>
              </Card>
            ))}

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "success.main" }}>
              Strengths
            </Typography>
            {assessment.strengths.map((strength, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                <CheckCircleIcon sx={{ color: "success.main", fontSize: 16, mt: 0.3 }} />
                <Typography variant="body2">{strength}</Typography>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "error.main" }}>
              Areas for Improvement
            </Typography>
            {assessment.weaknesses.map((weakness, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                <ErrorIcon sx={{ color: "error.main", fontSize: 16, mt: 0.3 }} />
                <Typography variant="body2">{weakness}</Typography>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "primary.main" }}>
              Recommendations
            </Typography>
            {assessment.recommendations.map((rec, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                <LightbulbIcon sx={{ color: "primary.main", fontSize: 16, mt: 0.3 }} />
                <Typography variant="body2">{rec}</Typography>
              </Box>
            ))}

            {assessment.highlights && assessment.highlights.length > 0 && (
              <>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "text.secondary" }}>
                  CV Highlights
                </Typography>
                {assessment.highlights.map((highlight, index) => (
                  <Card 
                    key={index} 
                    sx={{ 
                      mb: 1, 
                      borderLeft: 4, 
                      borderColor: highlight.type === "green" ? "success.main" : highlight.type === "red" ? "error.main" : "warning.main"
                    }}
                  >
                    <CardContent sx={{ py: 1, px: 2 }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: "italic", 
                          mb: 0.5,
                          color: highlight.type === "green" ? "success.dark" : highlight.type === "red" ? "error.dark" : "warning.dark"
                        }}
                      >
                        "{highlight.snippet}"
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {highlight.comment}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}

            <Button 
              variant="outlined" 
              fullWidth 
              startIcon={<AutoAwesomeIcon />}
              onClick={() => runAssessment("9.3")}
              sx={{ mt: 3 }}
              disabled={loading}
            >
              Re-run Analysis (v9.3)
            </Button>
            
            <Divider sx={{ my: 2 }} />
            
            <Button 
              variant="text" 
              fullWidth 
              size="small"
              onClick={runPromptComparison}
              disabled={comparingPrompts}
              sx={{ color: "text.secondary" }}
              data-testid="button-compare-prompts"
            >
              {comparingPrompts ? "Comparing..." : "Compare Old vs New Prompt"}
            </Button>

            {promptComparison && (
              <Box sx={{ mt: 2, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Prompt Comparison Results
                </Typography>
                
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Card sx={{ flex: 1, bgcolor: "grey.200" }}>
                    <CardContent sx={{ py: 1.5 }}>
                      <Typography variant="caption" color="text.secondary">OLD Prompt</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {promptComparison.scoreDifference.oldScore}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1, bgcolor: "primary.main", color: "white" }}>
                    <CardContent sx={{ py: 1.5 }}>
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>NEW Prompt</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {promptComparison.scoreDifference.newScore}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
                  Score difference: {promptComparison.scoreDifference.diff > 0 ? "+" : ""}{promptComparison.scoreDifference.diff}
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                  OLD Prompt Feedback:
                </Typography>
                {promptComparison.oldPrompt.assessment.sections?.map((s, i) => (
                  <Box key={`old-${i}`} sx={{ mb: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{s.name}: {s.score}</Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>{s.feedback}</Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  NEW Prompt Feedback:
                </Typography>
                {promptComparison.newPrompt.assessment.sections?.map((s, i) => (
                  <Box key={`new-${i}`} sx={{ mb: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{s.name}: {s.score}</Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>{s.feedback}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </>
        ) : (
          <>
            <Card sx={{ mb: 2, bgcolor: "grey.100" }}>
              <CardContent sx={{ py: 2, textAlign: "center" }}>
                <AutoAwesomeIcon sx={{ fontSize: 48, color: "grey.400", mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Ready to Analyze
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get AI-powered insights about your resume's strengths, weaknesses, and areas for improvement.
                </Typography>
              </CardContent>
            </Card>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "text.secondary" }}>
              Quick Preview
            </Typography>

            <Box sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
              {cv.email ? <CheckCircleIcon sx={{ color: "success.main", fontSize: 16 }} /> : <ErrorIcon sx={{ color: "error.main", fontSize: 16 }} />}
              <Typography variant="body2">Contact Information</Typography>
            </Box>
            <Box sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
              {cv.summary ? <CheckCircleIcon sx={{ color: "success.main", fontSize: 16 }} /> : <WarningIcon sx={{ color: "warning.main", fontSize: 16 }} />}
              <Typography variant="body2">Professional Summary</Typography>
            </Box>
            <Box sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
              {cv.experience?.length ? <CheckCircleIcon sx={{ color: "success.main", fontSize: 16 }} /> : <ErrorIcon sx={{ color: "error.main", fontSize: 16 }} />}
              <Typography variant="body2">Work Experience ({cv.experience?.length || 0})</Typography>
            </Box>
            <Box sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
              {cv.skills?.length >= 5 ? <CheckCircleIcon sx={{ color: "success.main", fontSize: 16 }} /> : <WarningIcon sx={{ color: "warning.main", fontSize: 16 }} />}
              <Typography variant="body2">Skills ({cv.skills?.length || 0})</Typography>
            </Box>

            <Button 
              variant="contained" 
              fullWidth 
              startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <AutoAwesomeIcon />}
              onClick={() => runAssessment("2.11")}
              sx={{ mt: 3 }}
              disabled={loading}
              data-testid="button-run-analysis"
            >
              {loading ? "Analyzing..." : "Run Full AI Analysis (v2.11)"}
            </Button>
          </>
        )}
      </Box>
    );
  }

  if (activeTrack === "advisor") {
    return (
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ p: 3, flex: 1, overflow: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <LightbulbIcon sx={{ color: "secondary.main" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              AI Career Advisor
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          {chatHistory.length === 0 ? (
            <>
              <Card sx={{ mb: 3, bgcolor: "secondary.main", color: "white" }}>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Get personalized advice
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Ask questions about your resume, get suggestions for improvements, 
                    or learn how to tailor your CV for specific roles.
                  </Typography>
                </CardContent>
              </Card>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "text.secondary" }}>
                Suggested prompts
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  "How can I improve my professional summary?",
                  "What skills should I add for my target role?",
                  "How can I make my experience more impactful?",
                  "Review my resume for ATS optimization",
                ].map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    size="small"
                    sx={{ justifyContent: "flex-start", textAlign: "left", textTransform: "none" }}
                    onClick={() => {
                      setChatMessage(prompt);
                    }}
                    data-testid={`button-prompt-${index}`}
                  >
                    {prompt}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {chatHistory.map((msg, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                  }}
                >
                  <Card sx={{ 
                    bgcolor: msg.role === "user" ? "primary.main" : "grey.100",
                    color: msg.role === "user" ? "white" : "text.primary",
                  }}>
                    <CardContent sx={{ py: 1.5, px: 2, "&:last-child": { pb: 1.5 } }}>
                      <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                        {msg.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
              {loading && (
                <Box sx={{ alignSelf: "flex-start" }}>
                  <Card sx={{ bgcolor: "grey.100" }}>
                    <CardContent sx={{ py: 1.5, px: 2, "&:last-child": { pb: 1.5 } }}>
                      <CircularProgress size={16} />
                    </CardContent>
                  </Card>
                </Box>
              )}
              <div ref={chatEndRef} />
            </Box>
          )}
        </Box>

        <Divider />
        
        <Box sx={{ p: 2, bgcolor: "background.paper" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask about your resume..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendChatMessage();
                }
              }}
              disabled={loading}
              data-testid="input-chat-message"
            />
            <IconButton 
              color="primary" 
              onClick={sendChatMessage}
              disabled={!chatMessage.trim() || loading}
              data-testid="button-send-message"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  }

  if (activeTrack === "jd-match") {
    return (
      <Box sx={{ p: 3, height: "100%", overflow: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <WorkIcon sx={{ color: "primary.main" }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Job Description Match
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Paste Job Description
              </Typography>
              <IconButton
                size="small"
                onClick={insertBullet}
                disabled={loading}
                title="Insert bullet point"
                data-testid="button-insert-bullet"
                color="primary"
                sx={{ 
                  border: 1, 
                  borderColor: "primary.main",
                  borderRadius: 1,
                  bgcolor: "primary.50",
                  "&:hover": { bgcolor: "primary.100" }
                }}
              >
                <FormatListBulletedIcon fontSize="small" />
              </IconButton>
            </Box>
            <TextField
              multiline
              rows={6}
              fullWidth
              placeholder="Paste the job description here to see how well your resume matches..."
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              disabled={loading}
              inputRef={jdInputRef}
              data-testid="input-job-description"
            />
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              disabled={!jdText.trim() || loading}
              onClick={analyzeJDMatch}
              startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <WorkIcon />}
              data-testid="button-analyze-match"
            >
              {loading ? "Analyzing..." : "Analyze Match"}
            </Button>
          </CardContent>
        </Card>

        {!jdMatch && !jdText && (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <WorkIcon sx={{ fontSize: 64, color: "grey.300", mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              Paste a job description above to see your match rate and get optimization tips
            </Typography>
          </Box>
        )}

        {jdMatch && (
          <JDMatchPanel 
            data={{
              jd_parsing: jdMatch.jd_parsing,
              raw_compatibility: jdMatch.raw_compatibility,
              transformation_effort: jdMatch.transformation_effort,
              risk_assessment: jdMatch.risk_assessment,
              honest_verdict: jdMatch.honest_verdict,
              strengths_reality_check: jdMatch.strengths_reality_check,
              critical_gaps: jdMatch.critical_gaps,
              real_options: jdMatch.real_options,
              student_guidance: jdMatch.student_guidance,
              tokenUsage: jdMatch.tokenUsage,
            }}
            candidateName={cv.name}
          />
        )}
      </Box>
    );
  }

  return null;
}
