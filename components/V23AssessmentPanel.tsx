"use client";

import { useState } from "react";
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
import type { AnalysisResponse, LiteOutput, StandardOutput, FullOutput, Issue, Strength, Improvement } from "@/lib/langchain/v23-cv-intelligence-schemas";

interface V23AssessmentPanelProps {
  analysis: AnalysisResponse | null;
  loading: boolean;
  error: string | null;
  candidateName?: string;
  candidateTitle?: string;
}

type TabValue = "overview" | "strengths" | "issues" | "actions" | "bullets";

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

export function V23AssessmentPanel({ 
  analysis, 
  loading, 
  error, 
  candidateName,
  candidateTitle
}: V23AssessmentPanelProps) {
  const [activeTab, setActiveTab] = useState<TabValue>("overview");

  if (loading) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8 }}>
        <CircularProgress size={48} />
        <Typography sx={{ mt: 2, color: "text.secondary" }}>Analyzing CV with Engine v2.3...</Typography>
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
      </Tabs>

      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        {activeTab === "overview" && <OverviewTab data={data} />}
        {activeTab === "strengths" && <StrengthsTab data={data} />}
        {activeTab === "issues" && <IssuesTab data={data} />}
        {activeTab === "actions" && <ActionsTab data={data} />}
        {activeTab === "bullets" && (isStandardOutput(data) || isFullOutput(data)) && <BulletsTab data={data} />}
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
    ...(improvements.critical || []), 
    ...(improvements.high || []), 
    ...(improvements.medium || [])
  ];

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
            {allImprovements.map((imp, idx) => (
              <Card key={idx} sx={{ borderLeft: 3, borderColor: getPriorityColor(imp.priority) }} elevation={0}>
                <CardContent sx={{ py: 1.5, px: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", flex: 1 }}>
                    <LightbulbIcon sx={{ color: getPriorityColor(imp.priority), mt: 0.3 }} />
                    <Box>
                      <Box sx={{ display: "flex", gap: 1, mb: 0.5, flexWrap: "wrap" }}>
                        <Chip label={imp.code} size="small" sx={{ fontSize: "0.7rem", height: 20 }} />
                        <Chip 
                          label={imp.priority} 
                          size="small" 
                          sx={{ fontSize: "0.65rem", height: 18, bgcolor: getPriorityColor(imp.priority), color: "white" }} 
                        />
                        <Chip label={imp.effort} size="small" variant="outlined" sx={{ fontSize: "0.65rem", height: 18 }} />
                      </Box>
                      <Typography variant="body2">{imp.action}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" fontWeight={600} sx={{ color: "#22c55e", whiteSpace: "nowrap" }}>
                    {imp.impact}
                  </Typography>
                </CardContent>
              </Card>
            ))}
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
  
  if (isStandardOutput(data) && data.bulletHealth) {
    bulletHealth = data.bulletHealth;
  } else if (isFullOutput(data) && data.cvAnalysis?.bulletAnalysis) {
    const ba = data.cvAnalysis.bulletAnalysis;
    bulletHealth = {
      totalBullets: ba.totalBullets,
      averageScore: Math.min(100, ba.averageScore),
      distribution: ba.distribution,
      topIssue: "See rewrite priorities below",
      topFix: "Focus on bullets with lowest scores",
    };
    rewritePriorities = ba.rewritePriorities || [];
  }

  if (!bulletHealth) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="text.secondary">Bullet analysis not available in this mode</Typography>
      </Box>
    );
  }

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
