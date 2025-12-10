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
import type { ParsedCV } from "@/types/cv";

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

// v9.3 JDMatchResult with evidence_map
interface JDMatchResult {
  jd_parsing?: JDParsing;
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

// Normalize JD match response to handle v9.3 structure
function normalizeJDMatch(raw: Record<string, unknown>): JDMatchResult {
  const expMatch = (raw.experienceMatch || raw.experience_match || { score: 0, feedback: "" }) as Record<string, unknown>;
  const eduMatch = (raw.educationMatch || raw.education_match || { score: 0, feedback: "" }) as Record<string, unknown>;
  const tokenUsageRaw = (raw.tokenUsage || raw.token_usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 }) as Record<string, unknown>;
  const jdParsingRaw = (raw.jd_parsing || null) as Record<string, unknown> | null;
  const evidenceMapRaw = (raw.evidenceMap || raw.evidence_map || []) as Array<Record<string, unknown>>;
  return {
    jd_parsing: jdParsingRaw ? {
      role_title: (jdParsingRaw.role_title ?? "") as string,
      company: (jdParsingRaw.company ?? "") as string,
      mandatory_skills: (jdParsingRaw.mandatory_skills ?? []) as string[],
      nice_to_have_skills: (jdParsingRaw.nice_to_have_skills ?? []) as string[],
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

  const runAssessment = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to assess CV");
      }
      const { assessment: rawAssessment } = await response.json();
      const normalized = normalizeAssessment(rawAssessment as Record<string, unknown>);
      setAssessment(normalized);
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
              onClick={runAssessment}
              sx={{ mt: 3 }}
              disabled={loading}
            >
              Re-run Analysis
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
              onClick={runAssessment}
              sx={{ mt: 3 }}
              disabled={loading}
              data-testid="button-run-analysis"
            >
              {loading ? "Analyzing..." : "Run Full AI Analysis"}
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
