"use client";

import { useState } from "react";
import { Box, Typography, Card, CardContent, Chip, LinearProgress, Tabs, Tab, Grid, Divider, CircularProgress, Alert, Paper } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import BlockIcon from "@mui/icons-material/Block";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import type { ForensicAnalysisV211, UIOutput, UISection, UIStrength, UIWeakness, UIRecommendation, UIHighlight, QuickStats } from "@/types/cv";

interface V211AssessmentPanelProps {
  analysis: ForensicAnalysisV211 | null;
  loading: boolean;
  error: string | null;
  candidateName?: string;
  candidateTitle?: string;
  candidateLocation?: string;
  candidateEmail?: string;
}

type TabValue = "overview" | "strengths" | "issues" | "actions" | "highlights";

const getScoreColor = (score: number): string => {
  if (score >= 90) return "#22c55e";
  if (score >= 80) return "#84cc16";
  if (score >= 70) return "#eab308";
  if (score >= 60) return "#f97316";
  return "#ef4444";
};

const getLevelColor = (level: string): string => {
  switch (level) {
    case "Exceptional": return "#22c55e";
    case "Strong": return "#22c55e";
    case "Good": return "#84cc16";
    case "Fair": return "#f97316";
    default: return "#ef4444";
  }
};

const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case "critical": return "#dc2626";
    case "high": return "#ea580c";
    case "medium": return "#eab308";
    case "low": return "#6b7280";
    default: return "#6b7280";
  }
};

const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "high": return "#ea580c";
    case "medium": return "#eab308";
    case "low": return "#6b7280";
    default: return "#6b7280";
  }
};

const getHighlightColor = (color: string): string => {
  switch (color) {
    case "green": return "#22c55e";
    case "blue": return "#3b82f6";
    case "yellow": return "#eab308";
    case "red": return "#ef4444";
    case "purple": return "#a855f7";
    default: return "#6b7280";
  }
};

const getHighlightBgColor = (color: string): string => {
  switch (color) {
    case "green": return "rgba(34, 197, 94, 0.1)";
    case "blue": return "rgba(59, 130, 246, 0.1)";
    case "yellow": return "rgba(234, 179, 8, 0.1)";
    case "red": return "rgba(239, 68, 68, 0.1)";
    case "purple": return "rgba(168, 85, 247, 0.1)";
    default: return "rgba(107, 114, 128, 0.1)";
  }
};

const getStrengthIcon = (iconName: string) => {
  switch (iconName) {
    case "trophy": return <EmojiEventsIcon sx={{ color: "#eab308" }} />;
    case "star": return <StarIcon sx={{ color: "#eab308" }} />;
    case "sparkle": return <AutoAwesomeIcon sx={{ color: "#a855f7" }} />;
    case "rocket": return <RocketLaunchIcon sx={{ color: "#3b82f6" }} />;
    default: return <CheckCircleIcon sx={{ color: "#22c55e" }} />;
  }
};

export function V211AssessmentPanel({ 
  analysis, 
  loading, 
  error, 
  candidateName,
  candidateTitle,
  candidateLocation,
  candidateEmail
}: V211AssessmentPanelProps) {
  const [activeTab, setActiveTab] = useState<TabValue>("overview");

  if (loading) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8 }}>
        <CircularProgress size={48} />
        <Typography sx={{ mt: 2, color: "text.secondary" }}>Analyzing CV with Engine v2.11...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        {error}
      </Alert>
    );
  }

  if (!analysis) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8 }}>
        <BarChartIcon sx={{ fontSize: 48, color: "text.disabled", mb: 2 }} />
        <Typography color="text.secondary">Click "Run Assessment" to analyze this CV</Typography>
      </Box>
    );
  }

  const { ui_output, analysis_metadata, reports } = analysis;
  const hrRec = reports?.hr_view?.executive_summary;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }} data-testid="v211-assessment-panel">
      {/* Header Section */}
      <Box sx={{ px: 2, py: 1.5, borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 1 }}>
          <Box>
            <Typography variant="h5" fontWeight={600} data-testid="text-candidate-name">
              {candidateName || analysis_metadata?.cv_name || "Candidate"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candidateTitle || ""} {candidateLocation ? `• ${candidateLocation}` : ""}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              {candidateEmail} • Engine v{analysis.version}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 0.5 }}>
            <Chip 
              label={ui_output.level} 
              size="small"
              sx={{ 
                bgcolor: getLevelColor(ui_output.level), 
                color: "white",
                fontWeight: 600
              }}
              data-testid="chip-level"
            />
            {!ui_output.inflation && (
              <Chip 
                icon={<VerifiedIcon sx={{ fontSize: 14 }} />}
                label="No Inflation Detected" 
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.7rem" }}
                data-testid="chip-inflation"
              />
            )}
            {ui_output.inflation && (
              <Chip 
                icon={<WarningIcon sx={{ fontSize: 14 }} />}
                label="Possible Inflation" 
                size="small"
                color="warning"
                sx={{ fontSize: "0.7rem" }}
              />
            )}
          </Box>
        </Box>
      </Box>

      {/* Overall Assessment Card */}
      <Card sx={{ mx: 2, mt: 2, bgcolor: "#f8fafc" }} data-testid="card-overall-assessment">
        <CardContent sx={{ py: 2 }}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center", flexWrap: "wrap" }}>
            {/* Score Gauge */}
            <Box sx={{ width: 100, height: 100, flexShrink: 0 }}>
              <CircularProgressbar
                value={ui_output.overallScore}
                text={`${ui_output.overallScore}`}
                styles={buildStyles({
                  textSize: "28px",
                  textColor: "#1e293b",
                  pathColor: getScoreColor(ui_output.overallScore),
                  trailColor: "#e2e8f0",
                })}
              />
              <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 0.5 }}>/100</Typography>
            </Box>
            
            {/* Verdict and Stats */}
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <Typography variant="subtitle1" fontWeight={600} color="primary">Overall Assessment</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }} data-testid="text-verdict">
                {ui_output.verdict}
              </Typography>
              
              {/* Quick Stats Row */}
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600}>{ui_output.quickStats?.professionalYears || 0}</Typography>
                  <Typography variant="caption" color="text.secondary">Years Experience</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600}>{ui_output.quickStats?.validatedSkills || 0}</Typography>
                  <Typography variant="caption" color="text.secondary">Validated Skills</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600}>{ui_output.quickStats?.validationRate || 0}%</Typography>
                  <Typography variant="caption" color="text.secondary">Validation Rate</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600}>{ui_output.quickStats?.quantificationRate || 0}%</Typography>
                  <Typography variant="caption" color="text.secondary">Quantified</Typography>
                </Box>
              </Box>
            </Box>
            
            {/* HR Recommendation */}
            {hrRec && (
              <Paper sx={{ p: 1.5, bgcolor: "#f0fdf4", minWidth: 140 }} elevation={0}>
                <Typography variant="caption" color="text.secondary">HR Recommendation</Typography>
                <Typography variant="subtitle1" fontWeight={600} sx={{ color: hrRec.recommendation === "Recommend" || hrRec.recommendation === "Strong Recommend" ? "#16a34a" : "#6b7280" }}>
                  {hrRec.recommendation}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Confidence: {Math.round((hrRec.confidence || 0) * 100)}%
                </Typography>
              </Paper>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Classification Breadcrumb */}
      {analysis.cv_nature && (
        <Box sx={{ px: 2, py: 1, display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          <SchoolIcon sx={{ fontSize: 16, color: "text.disabled" }} />
          <Typography variant="caption" color="text.secondary">Classification:</Typography>
          <Chip label={analysis.cv_nature.industry_nature?.current_industry || "Industry"} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />
          <Typography variant="caption" color="text.disabled">{">"}</Typography>
          <Chip label={analysis.cv_nature.domain_nature?.specialization || "Specialization"} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />
          <Typography variant="caption" color="text.disabled">{">"}</Typography>
          <Typography variant="caption" fontWeight={600}>{analysis_metadata?.inferred_seniority || "Role"}</Typography>
        </Box>
      )}

      {/* Tabs */}
      <Tabs 
        value={activeTab} 
        onChange={(_, v) => setActiveTab(v as TabValue)}
        sx={{ px: 2, borderBottom: 1, borderColor: "divider" }}
        data-testid="tabs-assessment"
      >
        <Tab label="Overview" value="overview" icon={<BarChartIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} />
        <Tab label="Strengths" value="strengths" icon={<CheckCircleIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} />
        <Tab label="Issues" value="issues" icon={<WarningIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} />
        <Tab label="Actions" value="actions" icon={<LightbulbIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} />
        <Tab label="Highlights" value="highlights" icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        {activeTab === "overview" && <OverviewTab ui_output={ui_output} />}
        {activeTab === "strengths" && <StrengthsTab strengths={ui_output.strengths} />}
        {activeTab === "issues" && <IssuesTab weaknesses={ui_output.weaknesses} />}
        {activeTab === "actions" && <ActionsTab recommendations={ui_output.recommendations} currentScore={ui_output.overallScore} />}
        {activeTab === "highlights" && <HighlightsTab highlights={ui_output.highlights} />}
      </Box>
    </Box>
  );
}

// Overview Tab Component
function OverviewTab({ ui_output }: { ui_output: UIOutput }) {
  return (
    <Grid container spacing={2}>
      {/* Category Scores */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
          <BarChartIcon sx={{ fontSize: 18 }} /> Category Scores
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {ui_output.sections?.map((section, idx) => (
            <Box key={section.code || idx}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                <Typography variant="body2">
                  <Box component="span" sx={{ fontWeight: 600, color: "text.secondary", mr: 1 }}>{section.code}</Box>
                  {section.name}
                </Typography>
                <Typography variant="body2" fontWeight={600} sx={{ color: getScoreColor(section.score) }}>
                  {section.score}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={section.score} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  bgcolor: "#e2e8f0",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: getScoreColor(section.score),
                    borderRadius: 4
                  }
                }} 
              />
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Quick Stats Grid */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
          <WorkIcon sx={{ fontSize: 18 }} /> Quick Stats
        </Typography>
        <Grid container spacing={1}>
          <Grid size={6}>
            <Paper sx={{ p: 1.5, textAlign: "center", bgcolor: "#f0fdf4" }} elevation={0}>
              <Typography variant="h5" fontWeight={600} color="success.main">{ui_output.quickStats?.validatedSkills || 0}</Typography>
              <Typography variant="caption" color="text.secondary">Validated Skills</Typography>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper sx={{ p: 1.5, textAlign: "center", bgcolor: "#fef2f2" }} elevation={0}>
              <Typography variant="h5" fontWeight={600} color="error.main">{ui_output.quickStats?.ghostSkills || 0}</Typography>
              <Typography variant="caption" color="text.secondary">Ghost Skills</Typography>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper sx={{ p: 1.5, textAlign: "center", bgcolor: "#fef3c7" }} elevation={0}>
              <Typography variant="h5" fontWeight={600} sx={{ color: "#d97706" }}>{ui_output.quickStats?.issueCount?.high || 0}</Typography>
              <Typography variant="caption" color="text.secondary">High Priority Issues</Typography>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper sx={{ p: 1.5, textAlign: "center", bgcolor: "#f1f5f9" }} elevation={0}>
              <Typography variant="h5" fontWeight={600} color="text.secondary">
                {(ui_output.quickStats?.issueCount?.medium || 0) + (ui_output.quickStats?.issueCount?.low || 0)}
              </Typography>
              <Typography variant="caption" color="text.secondary">Other Issues</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Strengths Tab Component
function StrengthsTab({ strengths }: { strengths: UIStrength[] }) {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <CheckCircleIcon sx={{ fontSize: 18, color: "#22c55e" }} /> 
        Identified Strengths ({strengths?.length || 0})
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {strengths?.map((strength, idx) => (
          <Card key={idx} sx={{ bgcolor: "#f0fdf4" }} elevation={0}>
            <CardContent sx={{ py: 1.5, px: 2, display: "flex", gap: 2, alignItems: "flex-start" }}>
              {getStrengthIcon(strength.icon)}
              <Box>
                <Chip label={strength.code} size="small" sx={{ mb: 0.5, fontSize: "0.7rem", height: 20 }} />
                <Typography variant="body2">{strength.text}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

// Issues Tab Component
function IssuesTab({ weaknesses }: { weaknesses: UIWeakness[] }) {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <WarningIcon sx={{ fontSize: 18, color: "#f59e0b" }} /> 
        Issues Found ({weaknesses?.length || 0})
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {weaknesses?.map((weakness, idx) => (
          <Card key={idx} sx={{ borderLeft: 3, borderColor: getSeverityColor(weakness.severity) }} elevation={0}>
            <CardContent sx={{ py: 1.5, px: 2, display: "flex", gap: 2, alignItems: "flex-start" }}>
              <ErrorIcon sx={{ color: getSeverityColor(weakness.severity), mt: 0.3 }} />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 0.5 }}>
                  <Chip label={weakness.code} size="small" sx={{ fontSize: "0.7rem", height: 20 }} />
                  <Chip 
                    label={weakness.severity} 
                    size="small" 
                    sx={{ 
                      fontSize: "0.65rem", 
                      height: 18, 
                      bgcolor: getSeverityColor(weakness.severity),
                      color: "white"
                    }} 
                  />
                </Box>
                <Typography variant="body2">{weakness.text}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

// Actions Tab Component
function ActionsTab({ recommendations, currentScore }: { recommendations: UIRecommendation[]; currentScore: number }) {
  const totalImpact = recommendations?.reduce((sum, r) => {
    const match = r.impact?.match(/\+(\d+)/);
    return sum + (match ? parseInt(match[1]) : 0);
  }, 0) || 0;
  const potentialScore = Math.min(100, currentScore + totalImpact);

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <LightbulbIcon sx={{ fontSize: 18, color: "#eab308" }} /> 
        Recommended Actions ({recommendations?.length || 0})
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {recommendations?.map((rec, idx) => (
          <Card key={idx} sx={{ borderLeft: 3, borderColor: getPriorityColor(rec.priority) }} elevation={0}>
            <CardContent sx={{ py: 1.5, px: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", flex: 1 }}>
                <LightbulbIcon sx={{ color: getPriorityColor(rec.priority), mt: 0.3 }} />
                <Box>
                  <Chip 
                    label={`${rec.priority} priority`} 
                    size="small" 
                    sx={{ 
                      fontSize: "0.65rem", 
                      height: 18, 
                      mb: 0.5,
                      bgcolor: getPriorityColor(rec.priority),
                      color: "white"
                    }} 
                  />
                  <Typography variant="body2">{rec.text}</Typography>
                </Box>
              </Box>
              <Typography variant="body2" fontWeight={600} sx={{ color: "#22c55e", whiteSpace: "nowrap" }}>
                {rec.impact}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Potential Score Card */}
      <Card sx={{ mt: 3, bgcolor: "#f0fdf4" }} elevation={0}>
        <CardContent sx={{ py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <TrendingUpIcon sx={{ color: "#22c55e" }} />
            <Typography variant="subtitle2" color="success.main">Potential Score After Fixes</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
            <Typography variant="h4" fontWeight={600}>{currentScore}</Typography>
            <Typography variant="h5" color="text.secondary">{"→"}</Typography>
            <Typography variant="h4" fontWeight={600} color="success.main">{potentialScore}+</Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Complete all recommendations to achieve {potentialScore >= 90 ? "Exceptional" : potentialScore >= 80 ? "Strong" : "Good"} level
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// Highlights Tab Component
function HighlightsTab({ highlights }: { highlights: UIHighlight[] }) {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <AutoAwesomeIcon sx={{ fontSize: 18, color: "#a855f7" }} /> 
        CV Highlights ({highlights?.length || 0})
      </Typography>
      <Grid container spacing={1.5}>
        {highlights?.map((highlight, idx) => (
          <Grid size={{ xs: 12, md: 6 }} key={idx}>
            <Card 
              sx={{ 
                bgcolor: getHighlightBgColor(highlight.color),
                borderLeft: 3,
                borderColor: getHighlightColor(highlight.color),
                height: "100%"
              }} 
              elevation={0}
            >
              <CardContent sx={{ py: 1.5, px: 2 }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 0.5 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontWeight: 700, 
                      textTransform: "uppercase", 
                      color: getHighlightColor(highlight.color),
                      letterSpacing: 0.5
                    }}
                  >
                    {highlight.type}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">• {highlight.source}</Typography>
                </Box>
                <Typography variant="body2">{highlight.text}</Typography>
                {highlight.note && (
                  <Typography variant="caption" color="text.secondary" sx={{ fontStyle: "italic", display: "block", mt: 0.5 }}>
                    {highlight.note}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default V211AssessmentPanel;
