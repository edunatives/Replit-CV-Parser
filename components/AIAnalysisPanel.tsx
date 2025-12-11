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

// v9.3 Evidence map entry
interface EvidenceMapEntry {
  jd_requirement: string;
  cv_evidence: string;
  status: "Match" | "Weak" | "Missing";
}

// v9.3 JD Parsing
interface JDParsing {
  role_title: string;
  company: string;
  mandatory_skills: string[];
  nice_to_have_skills: string[];
}

// v2.2 Experience Factors types
interface ExperienceFactorIssue {
  code: string;
  type: string;
  message: string;
  cv_value: string;
  jd_requirement: string;
  gap_severity: "minor" | "moderate" | "significant";
}

interface NatureFitIssue {
  code: string;
  type: string;
  message: string;
  cv_nature: string;
  jd_expects: string;
  transferable: boolean;
}

interface ExperienceYearsAnalysis {
  total_years: number;
  relevant_domain_years: number;
  recency_score: number;
  meets_requirement: boolean;
  student_message: string;
}

interface ExperienceDepthAnalysis {
  depth_level: "Entry" | "Developing" | "Proficient" | "Expert";
  scope_score: number;
  impact_score: number;
  complexity_handled: string;
  student_message: string;
}

interface JDNature {
  role_level: string;
  domain_required: string;
  industry_preferred: string | null;
  education_required: string | null;
  years_required: number | null;
  work_arrangement: string | null;
  company_stage: string | null;
}

// v2.2 JDMatchResult with Experience Factors + Nature Fit
interface JDMatchResult {
  jd_parsing?: JDParsing;
  jd_nature?: JDNature;
  matchScore: number;
  verdict?: string;
  summary?: string;
  matchedSkills: string[];
  missingSkills: string[];
  experienceMatch: { score: number; feedback: string };
  educationMatch: { score: number; feedback: string };
  overallFeedback?: string;
  suggestions: string[];
  keywordOptimizations: string[];
  evidenceMap?: EvidenceMapEntry[];
  experienceFactors?: {
    years_analysis: ExperienceYearsAnalysis;
    depth_analysis: ExperienceDepthAnalysis;
    issues: ExperienceFactorIssue[];
  };
  natureFit?: {
    overall_fit: "Excellent" | "Good" | "Partial" | "Challenging";
    fit_score: number;
    issues: NatureFitIssue[];
    strengths: string[];
  };
  studentSummary?: {
    headline: string;
    encouragement: string;
    quick_wins: string[];
  };
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

// Normalize JD match response to handle v2.2 structure with Experience Factors
function normalizeJDMatch(raw: Record<string, unknown>): JDMatchResult {
  const expMatch = (raw.experienceMatch || raw.experience_match || { score: 0, feedback: "" }) as Record<string, unknown>;
  const eduMatch = (raw.educationMatch || raw.education_match || { score: 0, feedback: "" }) as Record<string, unknown>;
  const tokenUsageRaw = (raw.tokenUsage || raw.token_usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 }) as Record<string, unknown>;
  const jdParsingRaw = (raw.jd_parsing || null) as Record<string, unknown> | null;
  const jdNatureRaw = (raw.jd_nature || raw.jdNature || null) as Record<string, unknown> | null;
  const evidenceMapRaw = (raw.evidenceMap || raw.evidence_map || []) as Array<Record<string, unknown>>;
  const expFactorsRaw = (raw.experienceFactors || raw.experience_factors || null) as Record<string, unknown> | null;
  const natureFitRaw = (raw.natureFit || raw.nature_fit || null) as Record<string, unknown> | null;
  const studentSumRaw = (raw.studentSummary || raw.student_summary || null) as Record<string, unknown> | null;
  
  return {
    jd_parsing: jdParsingRaw ? {
      role_title: (jdParsingRaw.role_title ?? "") as string,
      company: (jdParsingRaw.company ?? "") as string,
      mandatory_skills: (jdParsingRaw.mandatory_skills ?? []) as string[],
      nice_to_have_skills: (jdParsingRaw.nice_to_have_skills ?? []) as string[],
    } : undefined,
    jd_nature: jdNatureRaw ? {
      role_level: (jdNatureRaw.role_level ?? "") as string,
      domain_required: (jdNatureRaw.domain_required ?? "") as string,
      industry_preferred: (jdNatureRaw.industry_preferred ?? null) as string | null,
      education_required: (jdNatureRaw.education_required ?? null) as string | null,
      years_required: (jdNatureRaw.years_required ?? null) as number | null,
      work_arrangement: (jdNatureRaw.work_arrangement ?? null) as string | null,
      company_stage: (jdNatureRaw.company_stage ?? null) as string | null,
    } : undefined,
    matchScore: (raw.matchScore ?? raw.match_score ?? 0) as number,
    verdict: (raw.verdict ?? "") as string,
    summary: (raw.summary ?? "") as string,
    matchedSkills: (raw.matchedSkills ?? raw.matched_skills ?? []) as string[],
    missingSkills: (raw.missingSkills ?? raw.missing_skills ?? []) as string[],
    experienceMatch: {
      score: (expMatch.score ?? 0) as number,
      feedback: (expMatch.feedback ?? "") as string,
    },
    educationMatch: {
      score: (eduMatch.score ?? 0) as number,
      feedback: (eduMatch.feedback ?? "") as string,
    },
    overallFeedback: (raw.overallFeedback ?? raw.overall_feedback ?? raw.summary ?? "") as string,
    suggestions: (raw.suggestions ?? []) as string[],
    keywordOptimizations: (raw.keywordOptimizations ?? raw.keyword_optimizations ?? []) as string[],
    evidenceMap: evidenceMapRaw.map((e: Record<string, unknown>) => ({
      jd_requirement: (e.jd_requirement ?? "") as string,
      cv_evidence: (e.cv_evidence ?? "") as string,
      status: (e.status ?? "Missing") as "Match" | "Weak" | "Missing",
    })),
    // v2.2 Experience Factors
    experienceFactors: expFactorsRaw ? {
      years_analysis: {
        total_years: ((expFactorsRaw.years_analysis as Record<string, unknown>)?.total_years ?? 0) as number,
        relevant_domain_years: ((expFactorsRaw.years_analysis as Record<string, unknown>)?.relevant_domain_years ?? 0) as number,
        recency_score: ((expFactorsRaw.years_analysis as Record<string, unknown>)?.recency_score ?? 0) as number,
        meets_requirement: ((expFactorsRaw.years_analysis as Record<string, unknown>)?.meets_requirement ?? false) as boolean,
        student_message: ((expFactorsRaw.years_analysis as Record<string, unknown>)?.student_message ?? "") as string,
      },
      depth_analysis: {
        depth_level: ((expFactorsRaw.depth_analysis as Record<string, unknown>)?.depth_level ?? "Entry") as "Entry" | "Developing" | "Proficient" | "Expert",
        scope_score: ((expFactorsRaw.depth_analysis as Record<string, unknown>)?.scope_score ?? 0) as number,
        impact_score: ((expFactorsRaw.depth_analysis as Record<string, unknown>)?.impact_score ?? 0) as number,
        complexity_handled: ((expFactorsRaw.depth_analysis as Record<string, unknown>)?.complexity_handled ?? "") as string,
        student_message: ((expFactorsRaw.depth_analysis as Record<string, unknown>)?.student_message ?? "") as string,
      },
      issues: ((expFactorsRaw.issues ?? []) as Array<Record<string, unknown>>).map((issue) => ({
        code: (issue.code ?? "") as string,
        type: (issue.type ?? "") as string,
        message: (issue.message ?? "") as string,
        cv_value: (issue.cv_value ?? "") as string,
        jd_requirement: (issue.jd_requirement ?? "") as string,
        gap_severity: (issue.gap_severity ?? "minor") as "minor" | "moderate" | "significant",
      })),
    } : undefined,
    // v2.2 Nature Fit
    natureFit: natureFitRaw ? {
      overall_fit: (natureFitRaw.overall_fit ?? "Partial") as "Excellent" | "Good" | "Partial" | "Challenging",
      fit_score: (natureFitRaw.fit_score ?? 0) as number,
      issues: ((natureFitRaw.issues ?? []) as Array<Record<string, unknown>>).map((issue) => ({
        code: (issue.code ?? "") as string,
        type: (issue.type ?? "") as string,
        message: (issue.message ?? "") as string,
        cv_nature: (issue.cv_nature ?? "") as string,
        jd_expects: (issue.jd_expects ?? "") as string,
        transferable: (issue.transferable ?? false) as boolean,
      })),
      strengths: (natureFitRaw.strengths ?? []) as string[],
    } : undefined,
    // v2.2 Student Summary
    studentSummary: studentSumRaw ? {
      headline: (studentSumRaw.headline ?? "") as string,
      encouragement: (studentSumRaw.encouragement ?? "") as string,
      quick_wins: (studentSumRaw.quick_wins ?? []) as string[],
    } : undefined,
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
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to assess CV");
      }
      const data = await response.json();
      
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
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to compare prompts");
      }
      const { comparison } = await response.json();
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
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to get advice");
      }
      const { response: aiResponse } = await response.json();
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
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to analyze match");
      }
      const { match: rawMatch } = await response.json();
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
          <>
            <Card sx={{ mb: 2, bgcolor: getScoreColor(jdMatch.matchScore), color: "white" }}>
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: -2 }}>
                  <Chip
                    icon={<TokenIcon sx={{ fontSize: 14 }} />}
                    label={`${jdMatch.tokenUsage.totalTokens} tokens`}
                    size="small"
                    sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
                  />
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 700 }}>
                  {jdMatch.matchScore}%
                </Typography>
                <Typography variant="subtitle1">
                  {jdMatch.verdict || "Match Rate"}
                </Typography>
              </CardContent>
            </Card>

            {jdMatch.jd_parsing && (
              <Card sx={{ mb: 2, bgcolor: "grey.50" }}>
                <CardContent sx={{ py: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    {jdMatch.jd_parsing.role_title}
                    {jdMatch.jd_parsing.company && ` at ${jdMatch.jd_parsing.company}`}
                  </Typography>
                  {jdMatch.jd_parsing.mandatory_skills.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
                      {jdMatch.jd_parsing.mandatory_skills.slice(0, 5).map((skill, i) => (
                        <Chip key={i} label={skill} size="small" color="primary" variant="filled" sx={{ fontSize: "0.7rem" }} />
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}

            <Typography variant="body2" sx={{ mb: 3 }}>
              {jdMatch.summary || jdMatch.overallFeedback}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Experience Match</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: getScoreColor(jdMatch.experienceMatch.score) }}>
                  {jdMatch.experienceMatch.score}%
                </Typography>
              </Box>
              <LinearProgress variant="determinate" value={jdMatch.experienceMatch.score} sx={{ height: 8, borderRadius: 1, mb: 1 }} />
              <Typography variant="body2" color="text.secondary">{jdMatch.experienceMatch.feedback}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Education Match</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: getScoreColor(jdMatch.educationMatch.score) }}>
                  {jdMatch.educationMatch.score}%
                </Typography>
              </Box>
              <LinearProgress variant="determinate" value={jdMatch.educationMatch.score} color="secondary" sx={{ height: 8, borderRadius: 1, mb: 1 }} />
              <Typography variant="body2" color="text.secondary">{jdMatch.educationMatch.feedback}</Typography>
            </Box>

            {/* v2.2 Student Summary */}
            {jdMatch.studentSummary && (
              <Card sx={{ mb: 3, bgcolor: "primary.50", border: 1, borderColor: "primary.200" }}>
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}>
                    {jdMatch.studentSummary.headline}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                    {jdMatch.studentSummary.encouragement}
                  </Typography>
                  {jdMatch.studentSummary.quick_wins.length > 0 && (
                    <>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: "primary.main" }}>
                        Quick Wins:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 0.5 }}>
                        {jdMatch.studentSummary.quick_wins.map((win, i) => (
                          <Chip key={i} label={win} size="small" variant="outlined" color="primary" sx={{ fontSize: "0.7rem" }} />
                        ))}
                      </Box>
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* v2.2 Experience Factors */}
            {jdMatch.experienceFactors && (
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                    <WorkIcon sx={{ fontSize: 18, color: "primary.main" }} />
                    Experience Analysis
                  </Typography>
                  
                  {/* Years Analysis */}
                  <Box sx={{ mb: 2, p: 1.5, bgcolor: "grey.50", borderRadius: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Years: {jdMatch.experienceFactors.years_analysis.total_years} total / {jdMatch.experienceFactors.years_analysis.relevant_domain_years} relevant
                      </Typography>
                      <Chip 
                        label={jdMatch.experienceFactors.years_analysis.meets_requirement ? "Meets Req" : "Building"} 
                        size="small" 
                        color={jdMatch.experienceFactors.years_analysis.meets_requirement ? "success" : "info"}
                        sx={{ fontSize: "0.65rem", height: 20 }}
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {jdMatch.experienceFactors.years_analysis.student_message}
                    </Typography>
                  </Box>

                  {/* Depth Analysis */}
                  <Box sx={{ mb: 2, p: 1.5, bgcolor: "grey.50", borderRadius: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Depth Level: {jdMatch.experienceFactors.depth_analysis.depth_level}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 0.5 }}>
                        <Chip label={`Scope: ${jdMatch.experienceFactors.depth_analysis.scope_score}`} size="small" sx={{ fontSize: "0.6rem", height: 18 }} />
                        <Chip label={`Impact: ${jdMatch.experienceFactors.depth_analysis.impact_score}`} size="small" sx={{ fontSize: "0.6rem", height: 18 }} />
                      </Box>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {jdMatch.experienceFactors.depth_analysis.student_message}
                    </Typography>
                  </Box>

                  {/* Experience Factor Issues (H1-H9) */}
                  {jdMatch.experienceFactors.issues.length > 0 && (
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", mb: 1, display: "block" }}>
                        Growth Areas:
                      </Typography>
                      {jdMatch.experienceFactors.issues.map((issue, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            mb: 1, 
                            p: 1, 
                            borderRadius: 1,
                            bgcolor: issue.gap_severity === "significant" ? "warning.50" : issue.gap_severity === "moderate" ? "info.50" : "grey.50",
                            borderLeft: 3,
                            borderColor: issue.gap_severity === "significant" ? "warning.main" : issue.gap_severity === "moderate" ? "info.main" : "grey.400"
                          }}
                        >
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                            <Chip label={issue.code} size="small" sx={{ fontSize: "0.6rem", height: 18, fontWeight: 700 }} />
                            <Chip 
                              label={issue.gap_severity} 
                              size="small" 
                              color={issue.gap_severity === "significant" ? "warning" : issue.gap_severity === "moderate" ? "info" : "default"}
                              sx={{ fontSize: "0.55rem", height: 16 }}
                            />
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                            {issue.message}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            You have: {issue.cv_value} | Role needs: {issue.jd_requirement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}

            {/* v2.2 Nature Fit */}
            {jdMatch.natureFit && (
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ py: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Profile Fit
                    </Typography>
                    <Chip 
                      label={`${jdMatch.natureFit.overall_fit} (${jdMatch.natureFit.fit_score}%)`}
                      size="small"
                      color={jdMatch.natureFit.overall_fit === "Excellent" ? "success" : jdMatch.natureFit.overall_fit === "Good" ? "primary" : jdMatch.natureFit.overall_fit === "Partial" ? "warning" : "default"}
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>

                  {/* Nature Fit Strengths */}
                  {jdMatch.natureFit.strengths.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: "success.main", mb: 0.5, display: "block" }}>
                        Your Strengths for This Role:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {jdMatch.natureFit.strengths.map((str, i) => (
                          <Chip key={i} label={str} size="small" color="success" variant="outlined" sx={{ fontSize: "0.7rem" }} />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* Nature Fit Issues (G1-G9) */}
                  {jdMatch.natureFit.issues.length > 0 && (
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", mb: 1, display: "block" }}>
                        Alignment Notes:
                      </Typography>
                      {jdMatch.natureFit.issues.map((issue, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            mb: 1, 
                            p: 1, 
                            borderRadius: 1,
                            bgcolor: issue.transferable ? "success.50" : "grey.50",
                            borderLeft: 3,
                            borderColor: issue.transferable ? "success.main" : "grey.400"
                          }}
                        >
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                            <Chip label={issue.code} size="small" sx={{ fontSize: "0.6rem", height: 18, fontWeight: 700 }} />
                            {issue.transferable && (
                              <Chip label="Transferable" size="small" color="success" sx={{ fontSize: "0.55rem", height: 16 }} />
                            )}
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                            {issue.message}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Your background: {issue.cv_nature} | Role expects: {issue.jd_expects}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}

            {/* JD Nature (Role Requirements) */}
            {jdMatch.jd_nature && (
              <Card sx={{ mb: 3, bgcolor: "grey.50" }}>
                <CardContent sx={{ py: 1.5 }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", mb: 1, display: "block" }}>
                    Role Requirements:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    <Chip label={jdMatch.jd_nature.role_level} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
                    <Chip label={jdMatch.jd_nature.domain_required} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
                    {jdMatch.jd_nature.years_required && (
                      <Chip label={`${jdMatch.jd_nature.years_required}+ years`} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
                    )}
                    {jdMatch.jd_nature.work_arrangement && (
                      <Chip label={jdMatch.jd_nature.work_arrangement} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
                    )}
                    {jdMatch.jd_nature.company_stage && (
                      <Chip label={jdMatch.jd_nature.company_stage} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
                    )}
                  </Box>
                </CardContent>
              </Card>
            )}

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "success.main" }}>
              Matched Skills ({jdMatch.matchedSkills.length})
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
              {jdMatch.matchedSkills.map((skill, index) => (
                <Chip key={index} label={skill} size="small" color="success" variant="outlined" />
              ))}
            </Box>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 2, mb: 1, color: "error.main" }}>
              Missing Skills ({jdMatch.missingSkills.length})
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
              {jdMatch.missingSkills.map((skill, index) => (
                <Chip key={index} label={skill} size="small" color="error" variant="outlined" />
              ))}
            </Box>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "primary.main" }}>
              Suggestions to Improve Match
            </Typography>
            {jdMatch.suggestions.map((suggestion, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                <LightbulbIcon sx={{ color: "primary.main", fontSize: 16, mt: 0.3 }} />
                <Typography variant="body2">{suggestion}</Typography>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
              Keywords to Add for ATS
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {jdMatch.keywordOptimizations.map((keyword, index) => (
                <Chip key={index} label={keyword} size="small" variant="outlined" />
              ))}
            </Box>

            {jdMatch.evidenceMap && jdMatch.evidenceMap.length > 0 && (
              <>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1, color: "text.secondary" }}>
                  Evidence Map
                </Typography>
                {jdMatch.evidenceMap.map((entry, index) => (
                  <Card 
                    key={index} 
                    sx={{ 
                      mb: 1, 
                      borderLeft: 4,
                      borderColor: entry.status === "Match" ? "success.main" : entry.status === "Weak" ? "warning.main" : "error.main"
                    }}
                  >
                    <CardContent sx={{ py: 1, px: 2 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {entry.jd_requirement}
                        </Typography>
                        <Chip 
                          label={entry.status} 
                          size="small" 
                          color={entry.status === "Match" ? "success" : entry.status === "Weak" ? "warning" : "error"}
                          sx={{ fontSize: "0.65rem", height: 20 }}
                        />
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {entry.cv_evidence}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}
          </>
        )}
      </Box>
    );
  }

  return null;
}
