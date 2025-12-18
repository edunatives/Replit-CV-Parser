"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Chip, LinearProgress, Tabs, Tab, Grid, CircularProgress, Alert, Paper } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TimelineIcon from "@mui/icons-material/Timeline";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import DescriptionIcon from "@mui/icons-material/Description";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import type { AnalysisResponse, LiteOutput, StandardOutput, FullOutput, Issue, Strength, Improvement } from "@/lib/langchain/v23-cv-intelligence-schemas";
import type { V24Output } from "@/lib/langchain/v24-cv-intelligence-schemas";
import EditIcon from "@mui/icons-material/Edit";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

interface V23AssessmentPanelProps {
  analysis: AnalysisResponse | null;
  loading: boolean;
  error: string | null;
  candidateName?: string;
  candidateTitle?: string;
}

const ANALYSIS_STEPS = [
  { label: "Preparing analysis", description: "Setting up AI engine..." },
  { label: "Analyzing CV content", description: "Reviewing experience and skills..." },
  { label: "Generating insights", description: "Creating personalized feedback..." },
  { label: "Finalizing report", description: "Compiling results..." },
];

type TabValue = "overview" | "strengths" | "issues" | "actions" | "bullets" | "rewrites";

const getScoreColor = (score: number): string => {
  if (score >= 90) return "#22c55e";
  if (score >= 80) return "#84cc16";
  if (score >= 70) return "#eab308";
  if (score >= 60) return "#f97316";
  return "#ef4444";
};

const getGradeColor = (grade: string): string => {
  if (grade.startsWith("A")) return "#22c55e";
  if (grade.startsWith("B")) return "#84cc16";
  if (grade.startsWith("C")) return "#eab308";
  return "#ef4444";
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
    case "critical": return "#dc2626";
    case "high": return "#ea580c";
    case "medium": return "#eab308";
    case "low": return "#6b7280";
    default: return "#6b7280";
  }
};

const TEI_LABELS: Record<number, string> = {
  1: "Minimal (1-2 days)",
  2: "Light (1 week)",
  3: "Moderate (2-4 weeks)",
  4: "Heavy (1-6 months)",
  5: "Major Pivot (6+ months)",
};

function isLiteOutput(data: LiteOutput | StandardOutput | FullOutput): data is LiteOutput {
  return data.mode === "LITE";
}

function isStandardOutput(data: LiteOutput | StandardOutput | FullOutput): data is StandardOutput {
  return data.mode === "STANDARD";
}

function isFullOutput(data: LiteOutput | StandardOutput | FullOutput): data is FullOutput {
  return data.mode === "FULL";
}

function isV24Output(data: unknown): data is V24Output {
  return (
    typeof data === "object" &&
    data !== null &&
    "version" in data &&
    (data as { version: string }).version === "2.4"
  );
}

export function V23AssessmentPanel({ 
  analysis, 
  loading, 
  error, 
  candidateName,
  candidateTitle
}: V23AssessmentPanelProps) {
  const [activeTab, setActiveTab] = useState<TabValue>("overview");
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    if (loading) {
      setAnalysisStep(0);
      const intervals = [2000, 5000, 10000];
      const timers: NodeJS.Timeout[] = [];
      
      intervals.forEach((delay, index) => {
        const timer = setTimeout(() => {
          setAnalysisStep(index + 1);
        }, delay);
        timers.push(timer);
      });

      return () => {
        timers.forEach(t => clearTimeout(t));
      };
    } else {
      setAnalysisStep(0);
    }
  }, [loading]);

  if (loading) {
    const progress = Math.min(100, ((analysisStep + 1) / ANALYSIS_STEPS.length) * 100);
    
    return (
      <Box sx={{ p: 3 }}>
        <Paper elevation={0} sx={{ p: 3, bgcolor: "#f8fafc", border: "1px solid", borderColor: "divider" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Analyzing CV with AI Engine v2.3
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Usually takes 15-45 seconds
            </Typography>
          </Box>
          
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 6, 
              borderRadius: 3, 
              mb: 2,
              bgcolor: "#e2e8f0",
              "& .MuiLinearProgress-bar": { borderRadius: 3 }
            }} 
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {ANALYSIS_STEPS.map((step, index) => {
              const isComplete = index < analysisStep;
              const isCurrent = index === analysisStep;
              const isPending = index > analysisStep;

              return (
                <Box 
                  key={index} 
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 1.5,
                    opacity: isPending ? 0.5 : 1,
                  }}
                >
                  {isComplete ? (
                    <CheckCircleIcon sx={{ fontSize: 20, color: "success.main" }} />
                  ) : isCurrent ? (
                    <CircularProgress size={18} thickness={5} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ fontSize: 20, color: "text.disabled" }} />
                  )}
                  <Box>
                    <Typography 
                      variant="body2" 
                      fontWeight={isCurrent ? 600 : 400}
                      color={isComplete ? "success.main" : isCurrent ? "primary.main" : "text.secondary"}
                    >
                      {step.label}
                    </Typography>
                    {step.description && isCurrent && (
                      <Typography variant="caption" color="text.secondary">
                        {step.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Paper>
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

  if (!analysis || !analysis.success || !analysis.data) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8 }}>
        <BarChartIcon sx={{ fontSize: 48, color: "text.disabled", mb: 2 }} />
        <Typography color="text.secondary">Click "Run Assessment" to analyze this CV</Typography>
      </Box>
    );
  }

  const { data, meta } = analysis;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0, overflow: "hidden" }} data-testid="v23-assessment-panel">
      <HeaderSection data={data} meta={meta} candidateName={candidateName} candidateTitle={candidateTitle} />
      
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
        {(isStandardOutput(data) || isFullOutput(data)) && (
          <Tab label="Bullets" value="bullets" icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} />
        )}
        {isV24Output(data) && (
          <Tab label="Rewrites" value="rewrites" icon={<EditIcon sx={{ fontSize: 16 }} />} iconPosition="start" sx={{ minHeight: 48, textTransform: "none" }} data-testid="tab-rewrites" />
        )}
      </Tabs>

      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        {activeTab === "overview" && <OverviewTab data={data} />}
        {activeTab === "strengths" && <StrengthsTab data={data} />}
        {activeTab === "issues" && <IssuesTab data={data} />}
        {activeTab === "actions" && <ActionsTab data={data} />}
        {activeTab === "bullets" && (isStandardOutput(data) || isFullOutput(data)) && <BulletsTab data={data} />}
        {activeTab === "rewrites" && isV24Output(data) && <V24RewritesTab data={data} />}
      </Box>
    </Box>
  );
}

function HeaderSection({ data, meta, candidateName, candidateTitle }: { 
  data: LiteOutput | StandardOutput | FullOutput; 
  meta: AnalysisResponse["meta"];
  candidateName?: string;
  candidateTitle?: string;
}) {
  let overall = 0;
  let grade = "N/A";
  let rawCompat: number | null | undefined = null;
  let tei: number | null | undefined = null;
  let verdict = "";
  let hasJd = false;

  if (isLiteOutput(data) || isStandardOutput(data)) {
    const scores = data.scores;
    overall = scores?.overall ?? 0;
    grade = scores?.grade ?? "N/A";
    rawCompat = scores?.rawCompatibility;
    tei = scores?.tei;
    verdict = data.verdict || "";
    hasJd = isLiteOutput(data) ? data.hasJd : !!data.jdSummary;
  } else if (isFullOutput(data)) {
    const bulletAvg = Math.min(100, data.cvAnalysis?.bulletAnalysis?.averageScore ?? 0);
    const summaryQuality = Math.min(100, data.cvAnalysis?.professionalSummary?.qualityScore ?? 50);
    const validationRate = Math.min(100, data.cvAnalysis?.skills?.validationRate ?? 70);
    overall = Math.min(100, Math.round((bulletAvg * 0.4 + summaryQuality * 0.3 + validationRate * 0.3)));
    let extractedGrade = false;
    if (data.studentAnalysis?.overallCvQuality) {
      const quality = data.studentAnalysis.overallCvQuality;
      const rawScore = typeof quality === "number" ? quality : (quality as { score?: number }).score ?? overall;
      overall = Math.min(100, Math.max(0, rawScore)); // Clamp to 0-100
      if (typeof quality === "object" && quality && "grade" in quality) {
        grade = (quality as { grade?: string }).grade ?? grade;
        extractedGrade = true;
      }
    }
    if (!extractedGrade) {
      grade = overall >= 90 ? "A" : overall >= 85 ? "A-" : overall >= 80 ? "B+" : overall >= 70 ? "B" : overall >= 65 ? "B-" : overall >= 60 ? "C+" : overall >= 50 ? "C" : overall >= 40 ? "D" : "F";
    }
    const honestAssessment = data.studentAnalysis?.honestAssessment;
    verdict = typeof honestAssessment === "string" ? honestAssessment : 
      (honestAssessment as { successProbability?: string } | undefined)?.successProbability || 
      (data.hrAnalysis?.riskAssessment as { summary?: string } | undefined)?.summary || "";
    hasJd = !!data.jdAnalysis;
  }
  
  const displayName = candidateName || (isLiteOutput(data) ? data.candidate : "") || 
    (isStandardOutput(data) ? data.cvSummary?.candidateName : "") ||
    (isFullOutput(data) ? data.cvAnalysis?.metadata?.candidateName : "") || "Candidate";

  return (
    <>
      <Box sx={{ px: 2, py: 1.5, borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 1 }}>
          <Box>
            <Typography variant="h5" fontWeight={600} data-testid="text-candidate-name">
              {displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candidateTitle || ""}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              Engine v{data.version} | Mode: {data.mode} | Audience: {meta.audience}
              {meta.tokensUsed && (meta.tokensUsed.input > 0 || meta.tokensUsed.output > 0) && (
                <> | {meta.tokensUsed.input + meta.tokensUsed.output} tokens</>
              )}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
            <Chip 
              label={grade} 
              size="small"
              sx={{ bgcolor: getGradeColor(grade), color: "white", fontWeight: 600 }}
              data-testid="chip-grade"
            />
            {hasJd && (
              <Chip 
                label="JD Match" 
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.7rem" }}
              />
            )}
          </Box>
        </Box>
      </Box>

      <Card sx={{ mx: 2, mt: 2, bgcolor: "#f8fafc" }} data-testid="card-overall-assessment">
        <CardContent sx={{ py: 2 }}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center", flexWrap: "wrap" }}>
            <Box sx={{ width: 100, height: 100, flexShrink: 0 }}>
              <CircularProgressbar
                value={overall}
                text={`${overall}`}
                styles={buildStyles({
                  textSize: "28px",
                  textColor: "#1e293b",
                  pathColor: getScoreColor(overall),
                  trailColor: "#e2e8f0",
                })}
              />
              <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 0.5 }}>/100</Typography>
            </Box>
            
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <Typography variant="subtitle1" fontWeight={600} color="primary">Overall Assessment</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }} data-testid="text-verdict">
                {verdict}
              </Typography>
              
              {hasJd && rawCompat != null && (
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={600}>{rawCompat}</Typography>
                    <Typography variant="caption" color="text.secondary">Raw Compatibility</Typography>
                  </Box>
                  {tei && (
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6" fontWeight={600}>{tei}/5</Typography>
                      <Typography variant="caption" color="text.secondary">TEI</Typography>
                    </Box>
                  )}
                  {tei && (
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="body2" fontWeight={500}>{TEI_LABELS[tei] || "Unknown"}</Typography>
                      <Typography variant="caption" color="text.secondary">Transformation Effort</Typography>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

function OverviewTab({ data }: { data: LiteOutput | StandardOutput | FullOutput }) {
  if (isLiteOutput(data)) {
    return (
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>Quick Summary</Typography>
        <Typography variant="body2" color="text.secondary">{data.nextAction}</Typography>
        {data.bestFitRole && (
          <Paper sx={{ p: 2, mt: 2, bgcolor: "#f0fdf4" }} elevation={0}>
            <Typography variant="subtitle2" color="success.main">Best Fit Role</Typography>
            <Typography variant="body2">{data.bestFitRole}</Typography>
          </Paper>
        )}
      </Box>
    );
  }

  if (isStandardOutput(data)) {
    return (
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
            <WorkIcon sx={{ fontSize: 18 }} /> CV Summary
          </Typography>
          <Card elevation={0} sx={{ bgcolor: "#f8fafc" }}>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Current Role</Typography>
                  <Typography variant="body2" fontWeight={500}>{data.cvSummary.currentRole}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Total Years</Typography>
                  <Typography variant="body2" fontWeight={500}>{data.cvSummary.totalYears}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Seniority</Typography>
                  <Typography variant="body2" fontWeight={500}>{data.cvSummary.seniorityLevel}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Certifications</Typography>
                  <Typography variant="body2" fontWeight={500}>{data.cvSummary.certificationCount}</Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" color="text.secondary">Top Skills</Typography>
                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                  {data.cvSummary.topSkills.map((skill, i) => (
                    <Chip key={i} label={skill} size="small" sx={{ fontSize: "0.7rem" }} />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
            <AutoAwesomeIcon sx={{ fontSize: 18 }} /> Bullet Health
          </Typography>
          <Card elevation={0} sx={{ bgcolor: "#f8fafc" }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Average Score</Typography>
                <Typography variant="body2" fontWeight={600} sx={{ color: getScoreColor(data.bulletHealth.averageScore) }}>
                  {data.bulletHealth.averageScore}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={data.bulletHealth.averageScore} 
                sx={{ height: 8, borderRadius: 4, bgcolor: "#e2e8f0", mb: 2,
                  "& .MuiLinearProgress-bar": { bgcolor: getScoreColor(data.bulletHealth.averageScore), borderRadius: 4 }
                }} 
              />
              <Grid container spacing={1}>
                <Grid size={3}>
                  <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#dcfce7" }} elevation={0}>
                    <Typography variant="h6" fontWeight={600} color="success.main">{data.bulletHealth.distribution.excellent}</Typography>
                    <Typography variant="caption" color="text.secondary">Excellent</Typography>
                  </Paper>
                </Grid>
                <Grid size={3}>
                  <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fef9c3" }} elevation={0}>
                    <Typography variant="h6" fontWeight={600} sx={{ color: "#ca8a04" }}>{data.bulletHealth.distribution.good}</Typography>
                    <Typography variant="caption" color="text.secondary">Good</Typography>
                  </Paper>
                </Grid>
                <Grid size={3}>
                  <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fed7aa" }} elevation={0}>
                    <Typography variant="h6" fontWeight={600} sx={{ color: "#ea580c" }}>{data.bulletHealth.distribution.fair}</Typography>
                    <Typography variant="caption" color="text.secondary">Fair</Typography>
                  </Paper>
                </Grid>
                <Grid size={3}>
                  <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fecaca" }} elevation={0}>
                    <Typography variant="h6" fontWeight={600} color="error.main">{data.bulletHealth.distribution.poor}</Typography>
                    <Typography variant="caption" color="text.secondary">Poor</Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" color="text.secondary">Top Issue</Typography>
                <Typography variant="body2">{data.bulletHealth.topIssue}</Typography>
              </Box>
            </CardContent>
          </Card>
          <Alert 
            severity="info" 
            sx={{ mt: 1.5, fontSize: "0.75rem" }}
            data-testid="alert-standard-mode-info"
          >
            This score uses summary-level analysis. For detailed per-bullet scoring and comprehensive improvement recommendations, switch to <strong>FULL</strong> mode.
          </Alert>
        </Grid>

        {data.alternativeRoles && data.alternativeRoles.length > 0 && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <RocketLaunchIcon sx={{ fontSize: 18 }} /> Alternative Roles
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {data.alternativeRoles.map((role, i) => (
                <Card key={i} elevation={0} sx={{ flex: "1 1 200px", bgcolor: "#f0fdf4" }}>
                  <CardContent sx={{ py: 1.5 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="body2" fontWeight={600}>{role.role}</Typography>
                      <Chip label={`${role.fitScore}%`} size="small" sx={{ bgcolor: getScoreColor(role.fitScore), color: "white" }} />
                    </Box>
                    <Typography variant="caption" color="text.secondary">{role.reason}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    );
  }

  if (isFullOutput(data)) {
    const cvAnalysis = data.cvAnalysis;
    const bulletAnalysis = cvAnalysis?.bulletAnalysis;
    const studentAnalysis = data.studentAnalysis;
    const hrAnalysis = data.hrAnalysis;
    
    return (
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
            <WorkIcon sx={{ fontSize: 18 }} /> CV Summary
          </Typography>
          <Card elevation={0} sx={{ bgcolor: "#f8fafc" }}>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Candidate</Typography>
                  <Typography variant="body2" fontWeight={500}>{cvAnalysis?.metadata?.candidateName || "N/A"}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Total Years</Typography>
                  <Typography variant="body2" fontWeight={500}>{cvAnalysis?.experience?.totalYears || 0}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Roles Analyzed</Typography>
                  <Typography variant="body2" fontWeight={500}>{cvAnalysis?.experience?.roles?.length || 0}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Certifications</Typography>
                  <Typography variant="body2" fontWeight={500}>{cvAnalysis?.education?.certifications?.length || 0}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">Progression</Typography>
                  <Typography variant="body2" fontWeight={500}>{cvAnalysis?.experience?.progression?.pattern || "N/A"}</Typography>
                </Box>
              </Box>
              {cvAnalysis?.skills?.validated && cvAnalysis.skills.validated.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" color="text.secondary">Validated Skills ({cvAnalysis.skills.validated.length})</Typography>
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                    {cvAnalysis.skills.validated.slice(0, 8).map((skill, i) => (
                      <Chip key={i} label={skill.skill} size="small" sx={{ fontSize: "0.7rem" }} />
                    ))}
                    {cvAnalysis.skills.validated.length > 8 && (
                      <Chip label={`+${cvAnalysis.skills.validated.length - 8}`} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />
                    )}
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
            <AutoAwesomeIcon sx={{ fontSize: 18 }} /> Bullet Health
          </Typography>
          <Card elevation={0} sx={{ bgcolor: "#f8fafc" }}>
            <CardContent>
              {bulletAnalysis ? (
                <>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">Average Score</Typography>
                    <Typography variant="body2" fontWeight={600} sx={{ color: getScoreColor(bulletAnalysis.averageScore) }}>
                      {Math.min(100, bulletAnalysis.averageScore)}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={Math.min(100, bulletAnalysis.averageScore)} 
                    sx={{ height: 8, borderRadius: 4, bgcolor: "#e2e8f0", mb: 2,
                      "& .MuiLinearProgress-bar": { bgcolor: getScoreColor(bulletAnalysis.averageScore), borderRadius: 4 }
                    }} 
                  />
                  <Grid container spacing={1}>
                    <Grid size={3}>
                      <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#dcfce7" }} elevation={0}>
                        <Typography variant="h6" fontWeight={600} color="success.main">{bulletAnalysis.distribution?.excellent || 0}</Typography>
                        <Typography variant="caption" color="text.secondary">Excellent</Typography>
                      </Paper>
                    </Grid>
                    <Grid size={3}>
                      <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fef9c3" }} elevation={0}>
                        <Typography variant="h6" fontWeight={600} sx={{ color: "#ca8a04" }}>{bulletAnalysis.distribution?.good || 0}</Typography>
                        <Typography variant="caption" color="text.secondary">Good</Typography>
                      </Paper>
                    </Grid>
                    <Grid size={3}>
                      <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fed7aa" }} elevation={0}>
                        <Typography variant="h6" fontWeight={600} sx={{ color: "#ea580c" }}>{bulletAnalysis.distribution?.fair || 0}</Typography>
                        <Typography variant="caption" color="text.secondary">Fair</Typography>
                      </Paper>
                    </Grid>
                    <Grid size={3}>
                      <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fecaca" }} elevation={0}>
                        <Typography variant="h6" fontWeight={600} color="error.main">{bulletAnalysis.distribution?.poor || 0}</Typography>
                        <Typography variant="caption" color="text.secondary">Poor</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">Total Bullets: {bulletAnalysis.totalBullets}</Typography>
                  </Box>
                </>
              ) : (
                <Typography variant="body2" color="text.secondary">Bullet analysis not available</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {studentAnalysis?.alternatives?.betterFitRoles && studentAnalysis.alternatives.betterFitRoles.length > 0 && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <RocketLaunchIcon sx={{ fontSize: 18 }} /> Alternative Roles
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {studentAnalysis.alternatives.betterFitRoles.map((role, i) => (
                <Card key={i} elevation={0} sx={{ flex: "1 1 200px", bgcolor: "#f0fdf4" }}>
                  <CardContent sx={{ py: 1.5 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="body2" fontWeight={600}>{role.role}</Typography>
                      <Chip label={`${role.fitScore}%`} size="small" sx={{ bgcolor: getScoreColor(role.fitScore), color: "white" }} />
                    </Box>
                    <Typography variant="caption" color="text.secondary">{role.reason}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        )}

        {/* Professional Summary Analysis */}
        {cvAnalysis?.professionalSummary && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <DescriptionIcon sx={{ fontSize: 18 }} /> Professional Summary Analysis
            </Typography>
            <Card elevation={0} sx={{ bgcolor: "#f8fafc" }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                  <Typography variant="body2" color="text.secondary">Quality Score</Typography>
                  <Chip 
                    label={`${cvAnalysis.professionalSummary.qualityScore ?? 0}/100`} 
                    size="small" 
                    sx={{ bgcolor: getScoreColor(cvAnalysis.professionalSummary.qualityScore ?? 0), color: "white", fontWeight: 600 }} 
                  />
                </Box>
                {cvAnalysis.professionalSummary.keyThemes && cvAnalysis.professionalSummary.keyThemes.length > 0 && (
                  <Box sx={{ mb: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">Key Themes</Typography>
                    <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                      {cvAnalysis.professionalSummary.keyThemes.map((theme, i) => (
                        <Chip key={i} label={theme} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />
                      ))}
                    </Box>
                  </Box>
                )}
                {cvAnalysis.professionalSummary.yearsMentioned && (
                  <Typography variant="caption" color="text.secondary">
                    Years mentioned: {cvAnalysis.professionalSummary.yearsMentioned}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* Experience Factors (H1-H9) */}
        {cvAnalysis?.experienceFactors && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <TimelineIcon sx={{ fontSize: 18 }} /> Experience Factors
            </Typography>
            <Grid container spacing={1}>
              {cvAnalysis.experienceFactors.h1TotalYears && (
                <Grid size={{ xs: 6, md: 3 }}>
                  <Paper sx={{ p: 1.5, textAlign: "center" }} elevation={0}>
                    <Typography variant="h5" fontWeight={600} sx={{ color: getScoreColor(cvAnalysis.experienceFactors.h1TotalYears.score ?? 0) }}>
                      {cvAnalysis.experienceFactors.h1TotalYears.years ?? 0}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Total Years</Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={cvAnalysis.experienceFactors.h1TotalYears.score ?? 0} 
                      sx={{ mt: 0.5, height: 4, borderRadius: 2, bgcolor: "#e2e8f0" }}
                    />
                  </Paper>
                </Grid>
              )}
              {cvAnalysis.experienceFactors.h4Recency && (
                <Grid size={{ xs: 6, md: 3 }}>
                  <Paper sx={{ p: 1.5, textAlign: "center" }} elevation={0}>
                    <Typography variant="body1" fontWeight={600} sx={{ color: getScoreColor(cvAnalysis.experienceFactors.h4Recency.score ?? 0) }}>
                      {cvAnalysis.experienceFactors.h4Recency.recentRelevance ?? "N/A"}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Recency</Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={cvAnalysis.experienceFactors.h4Recency.score ?? 0} 
                      sx={{ mt: 0.5, height: 4, borderRadius: 2, bgcolor: "#e2e8f0" }}
                    />
                  </Paper>
                </Grid>
              )}
              {cvAnalysis.experienceFactors.h5Scope && (
                <Grid size={{ xs: 6, md: 3 }}>
                  <Paper sx={{ p: 1.5, textAlign: "center" }} elevation={0}>
                    <Typography variant="body1" fontWeight={600} sx={{ color: getScoreColor(cvAnalysis.experienceFactors.h5Scope.score ?? 0) }}>
                      {cvAnalysis.experienceFactors.h5Scope.level || "N/A"}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Scope Level</Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={cvAnalysis.experienceFactors.h5Scope.score ?? 0} 
                      sx={{ mt: 0.5, height: 4, borderRadius: 2, bgcolor: "#e2e8f0" }}
                    />
                  </Paper>
                </Grid>
              )}
              {cvAnalysis.experienceFactors.h2DomainYears && cvAnalysis.experienceFactors.h2DomainYears.length > 0 && (
                <Grid size={{ xs: 6, md: 3 }}>
                  <Paper sx={{ p: 1.5, textAlign: "center" }} elevation={0}>
                    <Typography variant="body1" fontWeight={600} sx={{ color: getScoreColor(cvAnalysis.experienceFactors.h2DomainYears[0].score ?? 0) }}>
                      {cvAnalysis.experienceFactors.h2DomainYears[0].years ?? 0}y
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {cvAnalysis.experienceFactors.h2DomainYears[0].domain ?? "Primary Domain"}
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={cvAnalysis.experienceFactors.h2DomainYears[0].score ?? 0} 
                      sx={{ mt: 0.5, height: 4, borderRadius: 2, bgcolor: "#e2e8f0" }}
                    />
                  </Paper>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}

        {/* Gap Strategy */}
        {studentAnalysis?.gapStrategy && (studentAnalysis.gapStrategy.fixable?.length > 0 || studentAnalysis.gapStrategy.unfixable?.length > 0) && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <BuildIcon sx={{ fontSize: 18 }} /> Gap Strategy
            </Typography>
            <Grid container spacing={2}>
              {studentAnalysis.gapStrategy.fixable && studentAnalysis.gapStrategy.fixable.length > 0 && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card elevation={0} sx={{ bgcolor: "#dcfce7", height: "100%" }}>
                    <CardContent>
                      <Typography variant="caption" fontWeight={600} color="success.main">Fixable Gaps</Typography>
                      <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                        {studentAnalysis.gapStrategy.fixable.map((g, i) => (
                          <Box key={i}>
                            <Typography variant="body2" fontWeight={500}>{g.gap}</Typography>
                            <Typography variant="caption" color="text.secondary">{g.solution}</Typography>
                            {g.timeline && <Chip label={g.timeline} size="small" sx={{ mt: 0.5, fontSize: "0.65rem", height: 18 }} />}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )}
              {studentAnalysis.gapStrategy.unfixable && studentAnalysis.gapStrategy.unfixable.length > 0 && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card elevation={0} sx={{ bgcolor: "#fef9c3", height: "100%" }}>
                    <CardContent>
                      <Typography variant="caption" fontWeight={600} sx={{ color: "#ca8a04" }}>Unfixable Gaps (Mitigate)</Typography>
                      <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                        {studentAnalysis.gapStrategy.unfixable.map((g, i) => (
                          <Box key={i}>
                            <Typography variant="body2" fontWeight={500}>{g.gap}</Typography>
                            <Typography variant="caption" color="text.secondary">{g.mitigation}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}

        {/* Stepping Stones */}
        {studentAnalysis?.alternatives?.steppingStones && studentAnalysis.alternatives.steppingStones.length > 0 && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <TrendingUpIcon sx={{ fontSize: 18 }} /> Stepping Stone Roles
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {studentAnalysis.alternatives.steppingStones.map((stone, i) => (
                <Card key={i} elevation={0} sx={{ flex: "1 1 200px", bgcolor: "#e0e7ff" }}>
                  <CardContent sx={{ py: 1.5 }}>
                    <Typography variant="body2" fontWeight={600}>{stone.role}</Typography>
                    <Typography variant="caption" color="text.secondary">Gap: {stone.gap}</Typography>
                    {stone.timeline && (
                      <Chip label={stone.timeline} size="small" sx={{ mt: 0.5, fontSize: "0.65rem", height: 18 }} />
                    )}
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        )}

        {/* Encouragement with Competitive Advantages */}
        {studentAnalysis?.encouragement && (
          <Grid size={12}>
            <Card elevation={0} sx={{ bgcolor: "#f0fdf4", border: "1px solid #a7f3d0" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <EmojiEventsIcon sx={{ color: "#22c55e" }} />
                  <Typography variant="subtitle2" color="success.main">Your Competitive Edge</Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  {typeof studentAnalysis.encouragement === "string" 
                    ? studentAnalysis.encouragement 
                    : studentAnalysis.encouragement.message}
                </Typography>
                {typeof studentAnalysis.encouragement === "object" && 
                 studentAnalysis.encouragement.competitiveAdvantages && 
                 studentAnalysis.encouragement.competitiveAdvantages.length > 0 && (
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    {studentAnalysis.encouragement.competitiveAdvantages.map((adv, i) => (
                      <Chip 
                        key={i} 
                        label={adv} 
                        size="small" 
                        icon={<StarIcon sx={{ fontSize: 14 }} />}
                        sx={{ bgcolor: "#dcfce7", fontSize: "0.7rem" }} 
                      />
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        )}

        {hrAnalysis?.decisionSupport && (
          <Grid size={12}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
              <SchoolIcon sx={{ fontSize: 18 }} /> HR Decision Support
            </Typography>
            <Card elevation={0} sx={{ bgcolor: "#f8fafc" }}>
              <CardContent>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
                  <Chip 
                    label={hrAnalysis.decisionSupport.recommendation} 
                    sx={{ 
                      bgcolor: hrAnalysis.decisionSupport.recommendation.includes("NO") ? "#fecaca" : 
                               hrAnalysis.decisionSupport.recommendation.includes("CONDITIONAL") ? "#fef9c3" : "#dcfce7",
                      fontWeight: 600
                    }} 
                  />
                  <Typography variant="body2" color="text.secondary">
                    Confidence: {hrAnalysis.decisionSupport.confidence}%
                  </Typography>
                </Box>
                {hrAnalysis.decisionSupport.conditions.length > 0 && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary">Conditions:</Typography>
                    <ul style={{ margin: "4px 0", paddingLeft: 16 }}>
                      {hrAnalysis.decisionSupport.conditions.map((c, i) => (
                        <li key={i}><Typography variant="caption">{c}</Typography></li>
                      ))}
                    </ul>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    );
  }

  return <Typography color="text.secondary">No overview data available</Typography>;
}

function StrengthsTab({ data }: { data: LiteOutput | StandardOutput | FullOutput }) {
  const strengths: Strength[] = isLiteOutput(data) ? (data.topStrengths || []) : 
    isStandardOutput(data) ? (data.topStrengths || []) :
    isFullOutput(data) ? (data.cvAnalysis?.strengthsDetected || []) : [];

  if (strengths.length === 0) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="text.secondary">No strengths identified in this analysis mode</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <CheckCircleIcon sx={{ fontSize: 18, color: "#22c55e" }} /> 
        Identified Strengths ({strengths.length})
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {strengths.map((strength, idx) => (
          <Card key={idx} sx={{ bgcolor: "#f0fdf4" }} elevation={0}>
            <CardContent sx={{ py: 1.5, px: 2, display: "flex", gap: 2, alignItems: "flex-start" }}>
              <CheckCircleIcon sx={{ color: "#22c55e" }} />
              <Box>
                <Chip label={strength.code} size="small" sx={{ mb: 0.5, fontSize: "0.7rem", height: 20 }} />
                <Typography variant="body2">{strength.strength}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

function IssuesTab({ data }: { data: LiteOutput | StandardOutput | FullOutput }) {
  const issues: Issue[] = isLiteOutput(data) ? (data.topIssues || []) : 
    isStandardOutput(data) ? (data.topIssues || []) :
    isFullOutput(data) ? (data.cvAnalysis?.issuesDetected || []) : [];

  if (issues.length === 0) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="text.secondary">No issues found in this analysis mode</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <WarningIcon sx={{ fontSize: 18, color: "#f59e0b" }} /> 
        Issues Found ({issues.length})
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {issues.map((issue, idx) => (
          <Card key={idx} sx={{ borderLeft: 3, borderColor: getSeverityColor(issue.severity) }} elevation={0}>
            <CardContent sx={{ py: 1.5, px: 2, display: "flex", gap: 2, alignItems: "flex-start" }}>
              <ErrorIcon sx={{ color: getSeverityColor(issue.severity), mt: 0.3 }} />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 0.5, flexWrap: "wrap" }}>
                  <Chip label={issue.code} size="small" sx={{ fontSize: "0.7rem", height: 20 }} />
                  <Chip 
                    label={issue.severity} 
                    size="small" 
                    sx={{ fontSize: "0.65rem", height: 18, bgcolor: getSeverityColor(issue.severity), color: "white" }} 
                  />
                  {issue.count > 1 && (
                    <Chip label={`x${issue.count}`} size="small" variant="outlined" sx={{ fontSize: "0.65rem", height: 18 }} />
                  )}
                </Box>
                <Typography variant="body2">{issue.issue}</Typography>
                {issue.fix && (
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block" }}>
                    Fix: {issue.fix}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

function ActionsTab({ data }: { data: LiteOutput | StandardOutput | FullOutput }) {
  let improvements: { critical: Improvement[]; high: Improvement[]; medium: Improvement[] } = { critical: [], high: [], medium: [] };
  let scorePotential = null;
  let nextSteps = null;
  
  if (isStandardOutput(data) && data.improvements) {
    improvements = data.improvements;
    scorePotential = data.improvements.scorePotential;
    nextSteps = data.nextSteps;
  } else if (isFullOutput(data) && data.studentAnalysis?.improvements) {
    improvements = data.studentAnalysis.improvements;
    scorePotential = data.studentAnalysis.improvements.scorePotential;
    nextSteps = data.studentAnalysis.nextSteps;
  }
  
  const nextAction = isLiteOutput(data) ? data.nextAction : null;

  const allImprovements = [
    ...(improvements.critical || []).map(imp => ({ ...imp, priority: imp.priority || "critical" })), 
    ...(improvements.high || []).map(imp => ({ ...imp, priority: imp.priority || "high" })), 
    ...(improvements.medium || []).map(imp => ({ ...imp, priority: imp.priority || "medium" }))
  ].filter(imp => imp.action || imp.code);

  return (
    <Box>
      {nextAction && (
        <Paper sx={{ p: 2, mb: 2, bgcolor: "#fef3c7" }} elevation={0}>
          <Typography variant="subtitle2">Next Action</Typography>
          <Typography variant="body2">{nextAction}</Typography>
        </Paper>
      )}

      {allImprovements.length > 0 && (
        <>
          <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <LightbulbIcon sx={{ fontSize: 18, color: "#eab308" }} /> 
            Improvements ({allImprovements.length})
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {allImprovements.map((imp, idx) => {
              const priority = imp.priority || "medium";
              const effort = imp.effort || "moderate";
              const action = imp.action || "Improvement suggested";
              const impact = imp.impact || "";
              return (
              <Card key={idx} sx={{ borderLeft: 3, borderColor: getPriorityColor(priority) }} elevation={0}>
                <CardContent sx={{ py: 1.5, px: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", flex: 1 }}>
                    <LightbulbIcon sx={{ color: getPriorityColor(priority), mt: 0.3 }} />
                    <Box>
                      <Box sx={{ display: "flex", gap: 1, mb: 0.5, flexWrap: "wrap" }}>
                        {imp.code && <Chip label={imp.code} size="small" sx={{ fontSize: "0.7rem", height: 20 }} />}
                        <Chip 
                          label={priority} 
                          size="small" 
                          sx={{ fontSize: "0.65rem", height: 18, bgcolor: getPriorityColor(priority), color: "white" }} 
                        />
                        <Chip label={effort} size="small" variant="outlined" sx={{ fontSize: "0.65rem", height: 18 }} />
                      </Box>
                      <Typography variant="body2">{action}</Typography>
                    </Box>
                  </Box>
                  {impact && (
                    <Typography variant="body2" fontWeight={600} sx={{ color: "#22c55e", whiteSpace: "nowrap" }}>
                      {impact}
                    </Typography>
                  )}
                </CardContent>
              </Card>
              );
            })}
          </Box>
        </>
      )}

      {scorePotential && (
        <Card sx={{ mt: 3, bgcolor: "#f0fdf4" }} elevation={0}>
          <CardContent sx={{ py: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <TrendingUpIcon sx={{ color: "#22c55e" }} />
              <Typography variant="subtitle2" color="success.main">Score Potential</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <Typography variant="h4" fontWeight={600}>{scorePotential.current}</Typography>
              <Typography variant="h5" color="text.secondary">{"→"}</Typography>
              <Typography variant="h4" fontWeight={600} color="success.main">{scorePotential.afterAll}</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              After critical: {scorePotential.afterCritical} | Ceiling: {scorePotential.ceiling}
            </Typography>
          </CardContent>
        </Card>
      )}

      {nextSteps && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Next Steps</Typography>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Paper sx={{ p: 1.5, bgcolor: "#dcfce7" }} elevation={0}>
                <Typography variant="caption" fontWeight={600}>Immediate</Typography>
                <ul style={{ margin: "4px 0", paddingLeft: 16 }}>
                  {nextSteps.immediate.map((step, i) => (
                    <li key={i}><Typography variant="caption">{step}</Typography></li>
                  ))}
                </ul>
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 1.5, bgcolor: "#fef9c3" }} elevation={0}>
                <Typography variant="caption" fontWeight={600}>This Week</Typography>
                <ul style={{ margin: "4px 0", paddingLeft: 16 }}>
                  {nextSteps.thisWeek.map((step, i) => (
                    <li key={i}><Typography variant="caption">{step}</Typography></li>
                  ))}
                </ul>
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 1.5, bgcolor: "#e0e7ff" }} elevation={0}>
                <Typography variant="caption" fontWeight={600}>Before Application</Typography>
                <ul style={{ margin: "4px 0", paddingLeft: 16 }}>
                  {nextSteps.beforeApplication.map((step, i) => (
                    <li key={i}><Typography variant="caption">{step}</Typography></li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

function BulletsTab({ data }: { data: StandardOutput | FullOutput }) {
  let bulletHealth = null;
  let rewritePriorities: Array<{ currentText: string; suggestedRewrite: string; currentScore: number; projectedScore: number }> = [];
  let allBullets: Array<{
    roleTitle: string;
    company: string;
    text: string;
    score: number;
    actionVerb?: { word: string | null; strength: string; score: number };
    quantification?: { hasQuantification: boolean; type: string | null; score: number };
    result?: { hasResult: boolean; type: string; score: number };
    issues?: Array<{ code: string; issue: string }>;
    rewrite?: { suggested: string; projectedScore: number };
  }> = [];
  
  try {
    if (isStandardOutput(data) && data.bulletHealth) {
      bulletHealth = data.bulletHealth;
    } else if (isFullOutput(data) && data.cvAnalysis?.bulletAnalysis) {
      const ba = data.cvAnalysis.bulletAnalysis;
      bulletHealth = {
        totalBullets: ba.totalBullets || 0,
        averageScore: Math.min(100, ba.averageScore || 0),
        distribution: ba.distribution || { excellent: 0, good: 0, fair: 0, poor: 0 },
        topIssue: "See detailed analysis below",
        topFix: "Focus on bullets with lowest scores",
      };
      rewritePriorities = ba.rewritePriorities || [];
      
      // Extract all bullets from experience roles for FULL mode
      const roles = data.cvAnalysis?.experience?.roles;
      if (roles && Array.isArray(roles)) {
        roles.forEach((role) => {
          if (role && role.bullets && Array.isArray(role.bullets)) {
            role.bullets.forEach((bullet) => {
              if (bullet) {
                allBullets.push({
                  roleTitle: role.title || "Unknown Role",
                  company: role.company || "Unknown Company",
                  text: bullet.text || "",
                  score: typeof bullet.score === "number" ? bullet.score : 0,
                  actionVerb: bullet.actionVerb,
                  quantification: bullet.quantification,
                  result: bullet.result,
                  issues: Array.isArray(bullet.issues) ? bullet.issues : [],
                  rewrite: bullet.rewrite,
                });
              }
            });
          }
        });
      }
    }
  } catch (err) {
    console.error("Error parsing bullet data:", err);
  }

  if (!bulletHealth) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="text.secondary">Bullet analysis not available in this mode</Typography>
      </Box>
    );
  }

  const getVerbStrengthColor = (strength: string) => {
    switch (strength) {
      case "strong": return "#22c55e";
      case "moderate": return "#eab308";
      case "weak": return "#f97316";
      default: return "#ef4444";
    }
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <AutoAwesomeIcon sx={{ fontSize: 18 }} /> 
        Bullet Analysis
      </Typography>
      
      <Grid container spacing={2}>
        <Grid size={6}>
          <Paper sx={{ p: 2, textAlign: "center" }} elevation={0}>
            <Typography variant="h3" fontWeight={700}>{bulletHealth.totalBullets}</Typography>
            <Typography variant="body2" color="text.secondary">Total Bullets</Typography>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper sx={{ p: 2, textAlign: "center" }} elevation={0}>
            <Typography variant="h3" fontWeight={700} sx={{ color: getScoreColor(bulletHealth.averageScore) }}>
              {bulletHealth.averageScore}
            </Typography>
            <Typography variant="body2" color="text.secondary">Average Score</Typography>
          </Paper>
        </Grid>
      </Grid>

      {bulletHealth.distribution && (
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid size={3}>
            <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#dcfce7" }} elevation={0}>
              <Typography variant="h6" fontWeight={600} color="success.main">{bulletHealth.distribution.excellent}</Typography>
              <Typography variant="caption" color="text.secondary">Excellent</Typography>
            </Paper>
          </Grid>
          <Grid size={3}>
            <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fef9c3" }} elevation={0}>
              <Typography variant="h6" fontWeight={600} sx={{ color: "#ca8a04" }}>{bulletHealth.distribution.good}</Typography>
              <Typography variant="caption" color="text.secondary">Good</Typography>
            </Paper>
          </Grid>
          <Grid size={3}>
            <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fed7aa" }} elevation={0}>
              <Typography variant="h6" fontWeight={600} sx={{ color: "#ea580c" }}>{bulletHealth.distribution.fair}</Typography>
              <Typography variant="caption" color="text.secondary">Fair</Typography>
            </Paper>
          </Grid>
          <Grid size={3}>
            <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#fecaca" }} elevation={0}>
              <Typography variant="h6" fontWeight={600} color="error.main">{bulletHealth.distribution.poor}</Typography>
              <Typography variant="caption" color="text.secondary">Poor</Typography>
            </Paper>
          </Grid>
        </Grid>
      )}

      {isStandardOutput(data) && (
        <Card sx={{ mt: 2 }} elevation={0}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Top Issue</Typography>
            <Typography variant="body2" color="text.secondary">{bulletHealth.topIssue}</Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Recommended Fix</Typography>
            <Typography variant="body2">{bulletHealth.topFix}</Typography>
          </CardContent>
        </Card>
      )}

      {/* FULL MODE: Show each bullet with detailed LLM feedback */}
      {isFullOutput(data) && allBullets.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            Detailed Bullet Feedback ({allBullets.length} bullets)
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {allBullets.map((bullet, idx) => (
              <Card key={idx} elevation={0} sx={{ bgcolor: "#f8fafc", border: "1px solid #e2e8f0" }} data-testid={`bullet-feedback-${idx}`}>
                <CardContent sx={{ py: 1.5 }}>
                  {/* Header: Role info and score */}
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">{bullet.roleTitle} at {bullet.company}</Typography>
                    </Box>
                    <Chip 
                      label={`Score: ${bullet.score}`} 
                      size="small" 
                      sx={{ bgcolor: getScoreColor(bullet.score), color: "white", fontWeight: 600 }} 
                    />
                  </Box>
                  
                  {/* Original bullet text */}
                  <Typography variant="body2" sx={{ mb: 1.5, fontStyle: "italic", color: "#475569" }}>
                    "{bullet.text}"
                  </Typography>
                  
                  {/* Analysis breakdown */}
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1.5 }}>
                    {bullet.actionVerb && (
                      <Chip 
                        label={`Verb: ${bullet.actionVerb.word || "none"} (${bullet.actionVerb.strength || "unknown"})`}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: getVerbStrengthColor(bullet.actionVerb.strength || "none"), color: getVerbStrengthColor(bullet.actionVerb.strength || "none") }}
                      />
                    )}
                    {bullet.quantification && (
                      <Chip 
                        label={bullet.quantification.hasQuantification ? `Quantified: ${bullet.quantification.type}` : "No quantification"}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: bullet.quantification.hasQuantification ? "#22c55e" : "#ef4444", color: bullet.quantification.hasQuantification ? "#22c55e" : "#ef4444" }}
                      />
                    )}
                    {bullet.result && (
                      <Chip 
                        label={`Result: ${bullet.result.type || "none"}`}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: bullet.result.hasResult ? "#22c55e" : "#ef4444", color: bullet.result.hasResult ? "#22c55e" : "#ef4444" }}
                      />
                    )}
                  </Box>
                  
                  {/* Issues detected */}
                  {bullet.issues && bullet.issues.length > 0 && (
                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="caption" fontWeight={600} color="error.main">Issues:</Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 0.5 }}>
                        {bullet.issues.map((issue, i) => (
                          <Typography key={i} variant="caption" color="text.secondary">
                            <span style={{ fontWeight: 600 }}>[{issue.code}]</span> {issue.issue}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  {/* Suggested rewrite */}
                  {bullet.rewrite && (
                    <Box sx={{ bgcolor: "#ecfdf5", p: 1.5, borderRadius: 1, border: "1px solid #a7f3d0" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                        <Typography variant="caption" fontWeight={600} color="success.main">Suggested Rewrite:</Typography>
                        <Typography variant="caption" fontWeight={600} color="success.main">
                          {"→"} Score: {bullet.rewrite.projectedScore}
                        </Typography>
                      </Box>
                      <Typography variant="body2">{bullet.rewrite.suggested}</Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}

      {/* Priority rewrites for FULL mode - show when we have rewrite data */}
      {rewritePriorities.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>Priority Rewrites ({rewritePriorities.length})</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {rewritePriorities.slice(0, 5).map((item, idx) => (
              <Card key={idx} elevation={0} sx={{ bgcolor: "#f8fafc" }}>
                <CardContent sx={{ py: 1.5 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Chip label={`Score: ${item.currentScore}`} size="small" sx={{ bgcolor: getScoreColor(item.currentScore), color: "white" }} />
                    <Typography variant="caption" color="success.main" fontWeight={600}>
                      {"→"} {item.projectedScore}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, textDecoration: "line-through" }}>
                    {item.currentText}
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {item.suggestedRewrite}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

function V24RewritesTab({ data }: { data: V24Output }) {
  const fullRewrite = data.fullRewrite;
  const summaryRewrite = data.cvAnalysis?.sections?.summary?.rewrite;
  const skillsRewrite = data.cvAnalysis?.sections?.skills?.rewrite;
  const experienceRoles = data.cvAnalysis?.sections?.experience?.roles || [];
  
  const bulletsWithRewrites = experienceRoles.flatMap((role) =>
    (role.bullets || [])
      .filter((b) => b.rewrite?.needed)
      .map((b) => ({
        roleTitle: role.title,
        company: role.company,
        original: b.text,
        suggested: b.rewrite?.suggested || "",
        score: b.score,
        projectedScore: b.rewrite?.projectedScore || 0,
        changes: b.rewrite?.changes || [],
      }))
  );

  return (
    <Box data-testid="v24-rewrites-tab">
      {fullRewrite?.available && (
        <Card sx={{ mb: 3, bgcolor: "#ecfdf5", border: "1px solid #a7f3d0" }} elevation={0}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600} color="success.main" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TrendingUpIcon sx={{ fontSize: 20 }} /> Full CV Rewrite Available
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Chip label={`Current: ${fullRewrite.currentScore}`} size="small" sx={{ bgcolor: getScoreColor(fullRewrite.currentScore), color: "white" }} />
                <CompareArrowsIcon sx={{ color: "success.main" }} />
                <Chip label={`Projected: ${fullRewrite.projectedScore}`} size="small" sx={{ bgcolor: getScoreColor(fullRewrite.projectedScore), color: "white" }} />
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Effort: {fullRewrite.effortEstimate}
            </Typography>
            {fullRewrite.completeRewrittenCV && (
              <Paper sx={{ p: 2, mt: 2, bgcolor: "white", maxHeight: 300, overflow: "auto" }} elevation={0}>
                <Typography variant="caption" fontWeight={600} color="text.secondary" sx={{ mb: 1, display: "block" }}>
                  Complete Rewritten CV:
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: "0.8rem" }}>
                  {fullRewrite.completeRewrittenCV}
                </Typography>
              </Paper>
            )}
          </CardContent>
        </Card>
      )}

      {summaryRewrite?.needed && (
        <Card sx={{ mb: 3 }} elevation={0}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <DescriptionIcon sx={{ fontSize: 18 }} /> Summary Rewrite
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Projected Score:</Typography>
              <Chip label={summaryRewrite.projectedScore} size="small" sx={{ bgcolor: getScoreColor(summaryRewrite.projectedScore), color: "white" }} />
            </Box>
            {summaryRewrite.original && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" fontWeight={600} color="text.secondary">Original:</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontStyle: "italic" }}>
                  "{summaryRewrite.original}"
                </Typography>
              </Box>
            )}
            {summaryRewrite.suggested && (
              <Box sx={{ bgcolor: "#ecfdf5", p: 2, borderRadius: 1, border: "1px solid #a7f3d0" }}>
                <Typography variant="caption" fontWeight={600} color="success.main">Suggested:</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  "{summaryRewrite.suggested}"
                </Typography>
              </Box>
            )}
            {summaryRewrite.changes && summaryRewrite.changes.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" fontWeight={600} color="text.secondary">Changes:</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 0.5 }}>
                  {summaryRewrite.changes.map((change, i) => (
                    <Typography key={i} variant="caption" color="text.secondary">
                      - {change}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      )}

      {bulletsWithRewrites.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <AutoAwesomeIcon sx={{ fontSize: 18 }} /> Bullet Rewrites ({bulletsWithRewrites.length})
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {bulletsWithRewrites.map((bullet, idx) => (
              <Card key={idx} elevation={0} sx={{ bgcolor: "#f8fafc", border: "1px solid #e2e8f0" }} data-testid={`rewrite-bullet-${idx}`}>
                <CardContent sx={{ py: 1.5 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">{bullet.roleTitle} at {bullet.company}</Typography>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Chip label={bullet.score} size="small" sx={{ bgcolor: getScoreColor(bullet.score), color: "white" }} />
                      <CompareArrowsIcon sx={{ fontSize: 16, color: "success.main" }} />
                      <Chip label={bullet.projectedScore} size="small" sx={{ bgcolor: getScoreColor(bullet.projectedScore), color: "white" }} />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, textDecoration: "line-through" }}>
                    "{bullet.original}"
                  </Typography>
                  <Box sx={{ bgcolor: "#ecfdf5", p: 1.5, borderRadius: 1, border: "1px solid #a7f3d0" }}>
                    <Typography variant="body2" fontWeight={500}>
                      "{bullet.suggested}"
                    </Typography>
                  </Box>
                  {bullet.changes.length > 0 && (
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        Changes: {bullet.changes.join(", ")}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}

      {skillsRewrite?.needed && (
        <Card elevation={0}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <BuildIcon sx={{ fontSize: 18 }} /> Skills Section Rewrite
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Projected Score:</Typography>
              <Chip label={skillsRewrite.projectedScore} size="small" sx={{ bgcolor: getScoreColor(skillsRewrite.projectedScore), color: "white" }} />
            </Box>
            {skillsRewrite.removed && skillsRewrite.removed.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" fontWeight={600} color="error.main">Removed (Ghost Skills):</Typography>
                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                  {skillsRewrite.removed.map((skill, i) => (
                    <Chip key={i} label={skill} size="small" sx={{ bgcolor: "#fecaca", color: "#dc2626", textDecoration: "line-through" }} />
                  ))}
                </Box>
              </Box>
            )}
            {skillsRewrite.suggested && (
              <Box>
                <Typography variant="caption" fontWeight={600} color="success.main">Reorganized Skills:</Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                  {skillsRewrite.suggested.technical && skillsRewrite.suggested.technical.length > 0 && (
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant="caption" color="text.secondary">Technical:</Typography>
                      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                        {skillsRewrite.suggested.technical.map((skill, i) => (
                          <Chip key={i} label={skill} size="small" />
                        ))}
                      </Box>
                    </Grid>
                  )}
                  {skillsRewrite.suggested.tools && skillsRewrite.suggested.tools.length > 0 && (
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant="caption" color="text.secondary">Tools:</Typography>
                      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                        {skillsRewrite.suggested.tools.map((skill, i) => (
                          <Chip key={i} label={skill} size="small" />
                        ))}
                      </Box>
                    </Grid>
                  )}
                  {skillsRewrite.suggested.frameworks && skillsRewrite.suggested.frameworks.length > 0 && (
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant="caption" color="text.secondary">Frameworks:</Typography>
                      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                        {skillsRewrite.suggested.frameworks.map((skill, i) => (
                          <Chip key={i} label={skill} size="small" />
                        ))}
                      </Box>
                    </Grid>
                  )}
                  {skillsRewrite.suggested.methodologies && skillsRewrite.suggested.methodologies.length > 0 && (
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant="caption" color="text.secondary">Methodologies:</Typography>
                      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                        {skillsRewrite.suggested.methodologies.map((skill, i) => (
                          <Chip key={i} label={skill} size="small" />
                        ))}
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Box>
            )}
          </CardContent>
        </Card>
      )}

      {!fullRewrite?.available && !summaryRewrite?.needed && bulletsWithRewrites.length === 0 && !skillsRewrite?.needed && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <CheckCircleIcon sx={{ fontSize: 48, color: "success.main", mb: 2 }} />
          <Typography color="text.secondary">No rewrites needed - your CV looks great!</Typography>
        </Box>
      )}
    </Box>
  );
}
