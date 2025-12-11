"use client";

import { useState } from "react";
import { Box, Typography, Card, CardContent, Chip, LinearProgress, Tabs, Tab, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildIcon from "@mui/icons-material/Build";

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

interface GapBreakdown {
  area: string;
  points: number;
  fixable_by_cv: boolean;
}

interface TransformationEffort {
  tei_score: number;
  tei_label: string;
  timeline: string;
  gap_breakdown: GapBreakdown[];
  honest_assessment: string;
}

interface RiskFactor {
  factor: string;
  score: number;
  detail: string;
}

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

interface BetterFitRole {
  role: string;
  fit_score: number;
  reason: string;
}

interface HonestVerdict {
  headline: string;
  reality_check: string;
  should_apply: string;
  success_probability: string;
  better_fit_roles: BetterFitRole[];
}

interface StrengthRealityCheck {
  strength: string;
  reality: string;
  helps: string;
  doesnt_help: string;
}

interface CriticalGap {
  area: string;
  severity: "critical" | "high" | "moderate";
  you_have: string;
  jd_requires: string;
  match_percent: number;
  fixable_by_cv: boolean;
  what_would_help: string;
}

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

interface StudentGuidance {
  if_dream_role: string;
  if_practical: string;
  quick_wins: string[];
  long_term_path: string;
}

interface JDParsing {
  role_title: string;
  company: string | null;
  mandatory_skills: string[];
  nice_to_have_skills: string[];
  years_required: number | null;
  education_required: string | null;
  seniority_level: string;
}

interface JDMatchData {
  jd_parsing?: JDParsing;
  raw_compatibility?: RawCompatibility;
  transformation_effort?: TransformationEffort;
  risk_assessment?: RiskAssessment;
  honest_verdict?: HonestVerdict;
  strengths_reality_check?: StrengthRealityCheck[];
  critical_gaps?: CriticalGap[];
  real_options?: RealOptions;
  student_guidance?: StudentGuidance;
  tokenUsage: { totalTokens: number };
}

interface JDMatchPanelProps {
  data: JDMatchData;
  candidateName?: string;
}

type TabValue = "honest" | "gaps" | "risk" | "fits" | "options";

const getScoreColor = (score: number): string => {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#eab308";
  if (score >= 40) return "#f97316";
  return "#ef4444";
};

const getRiskColor = (score: number): string => {
  if (score <= 30) return "#22c55e";
  if (score <= 50) return "#eab308";
  if (score <= 70) return "#f97316";
  return "#ef4444";
};

const COMPONENT_WEIGHTS = {
  must_have_skills: 0.25,
  domain_experience: 0.20,
  depth_scope: 0.15,
  nature_fit: 0.15,
  total_experience: 0.10,
  should_have_skills: 0.10,
  nice_to_have_skills: 0.05,
};

const COMPONENT_LABELS: Record<string, string> = {
  must_have_skills: "Must Have Skills",
  domain_experience: "Domain Experience",
  total_experience: "Total Experience",
  depth_scope: "Depth/Scope",
  nature_fit: "Nature Fit",
  should_have_skills: "Should Have Skills",
  nice_to_have_skills: "Nice To Have",
};

export function JDMatchPanel({ data, candidateName }: JDMatchPanelProps) {
  const [activeTab, setActiveTab] = useState<TabValue>("honest");

  const getStatusChip = (score: number) => {
    if (score >= 90) return { label: "exceeds", color: "#22c55e" };
    if (score >= 75) return { label: "strong", color: "#84cc16" };
    if (score >= 60) return { label: "good", color: "#eab308" };
    if (score >= 40) return { label: "mismatch", color: "#f97316" };
    return { label: "critical", color: "#ef4444" };
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", bgcolor: "#1a1f2e", color: "white" }} data-testid="panel-jd-match">
      {/* Header Section */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "rgba(255,255,255,0.1)" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          Honest Match Assessment
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {candidateName || "Candidate"} → {data.jd_parsing?.role_title || "Target Role"}
        </Typography>
      </Box>

      {/* Three Score Summary */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, p: 2 }}>
        {/* Raw Fit */}
        <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
          <Typography variant="caption" sx={{ opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>
            RAW FIT
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: getScoreColor(data.raw_compatibility?.score ?? 0) }}>
              {data.raw_compatibility?.score ?? 0}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>/100</Typography>
          </Box>
          <Chip 
            label={`${data.raw_compatibility?.grade ?? "F"} - ${data.raw_compatibility?.label ?? "No Match"}`}
            size="small"
            sx={{ bgcolor: getScoreColor(data.raw_compatibility?.score ?? 0), color: "white", fontWeight: 600, mt: 0.5 }}
          />
          {data.raw_compatibility?.hard_gate_applied && (
            <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 0.5 }}>
              <WarningIcon sx={{ fontSize: 14, color: "#f97316" }} />
              <Typography variant="caption" sx={{ color: "#f97316" }}>
                Capped from {data.raw_compatibility.uncapped_score}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Effort Needed */}
        <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
          <Typography variant="caption" sx={{ opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>
            EFFORT NEEDED
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              {data.transformation_effort?.tei_score ?? 1}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>/5</Typography>
          </Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {data.transformation_effort?.tei_label ?? "Minimal"}
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, mt: 1 }}>
            {[1,2,3,4,5].map(i => (
              <Box key={i} sx={{ 
                width: 20, height: 6, borderRadius: 1,
                bgcolor: i <= (data.transformation_effort?.tei_score ?? 1) ? "#ef4444" : "rgba(255,255,255,0.2)"
              }} />
            ))}
          </Box>
          <Typography variant="caption" sx={{ opacity: 0.6, display: "block", mt: 0.5 }}>
            {data.transformation_effort?.timeline ?? ""}
          </Typography>
        </Box>

        {/* Risk Level */}
        <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
          <Typography variant="caption" sx={{ opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>
            RISK LEVEL
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: getRiskColor(data.risk_assessment?.candidate_risk.score ?? 0) }}>
              {data.risk_assessment?.candidate_risk.score ?? 0}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>/100</Typography>
          </Box>
          <Chip 
            label={`${data.risk_assessment?.candidate_risk.level ?? "Low"} RISK`}
            size="small"
            sx={{ 
              bgcolor: getRiskColor(data.risk_assessment?.candidate_risk.score ?? 0), 
              color: "white", 
              fontWeight: 600, 
              mt: 0.5 
            }}
          />
          <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 0.5 }}>
            <WarningIcon sx={{ fontSize: 14, color: "#f97316" }} />
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Proceed with caution
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Verdict Banner */}
      {data.honest_verdict && (
        <Box sx={{ mx: 2, p: 2, bgcolor: "rgba(234,179,8,0.15)", borderRadius: 2, border: 1, borderColor: "rgba(234,179,8,0.3)" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#eab308", textTransform: "uppercase" }}>
            {data.honest_verdict.headline}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
            {data.honest_verdict.reality_check}
          </Typography>
          <Typography variant="body2" sx={{ color: "#eab308", mt: 1 }}>
            Estimated success rate: <strong>{data.honest_verdict.success_probability}</strong>
          </Typography>
        </Box>
      )}

      {/* Tabs */}
      <Box sx={{ px: 2, mt: 2 }}>
        <Tabs 
          value={activeTab} 
          onChange={(_, v) => setActiveTab(v as TabValue)}
          sx={{ 
            "& .MuiTab-root": { color: "rgba(255,255,255,0.6)", minHeight: 48, textTransform: "none" },
            "& .Mui-selected": { color: "white" },
            "& .MuiTabs-indicator": { bgcolor: "primary.main" }
          }}
          variant="scrollable"
          scrollButtons="auto"
          data-testid="tabs-jd-match"
        >
          <Tab icon={<BalanceIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Honest Assessment" value="honest" data-testid="tab-honest-assessment" />
          <Tab icon={<ErrorIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Critical Gaps" value="gaps" data-testid="tab-critical-gaps" />
          <Tab icon={<WarningIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Risk Analysis" value="risk" data-testid="tab-risk-analysis" />
          <Tab icon={<FavoriteIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Better Fits" value="fits" data-testid="tab-better-fits" />
          <Tab icon={<TipsAndUpdatesIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Real Options" value="options" data-testid="tab-real-options" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        {/* Honest Assessment Tab */}
        {activeTab === "honest" && (
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Score Breakdown (Pre-Cap: {data.raw_compatibility?.uncapped_score ?? data.raw_compatibility?.score ?? 0})
            </Typography>
            
            {data.raw_compatibility?.component_scores && Object.entries(COMPONENT_LABELS).map(([key, label]) => {
              const comp = data.raw_compatibility?.component_scores[key as keyof typeof data.raw_compatibility.component_scores];
              const score = comp?.score ?? 0;
              const weight = COMPONENT_WEIGHTS[key as keyof typeof COMPONENT_WEIGHTS];
              const weighted = (score * weight).toFixed(1);
              const status = getStatusChip(score);
              
              return (
                <Box key={key} sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>{label}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{score}%</Typography>
                      <Chip label={status.label} size="small" sx={{ bgcolor: status.color, color: "white", fontSize: "0.65rem", height: 20 }} />
                      <Typography variant="caption" sx={{ opacity: 0.5, minWidth: 70, textAlign: "right" }}>
                        x{weight} = {weighted}
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={score} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 1,
                      bgcolor: "rgba(255,255,255,0.1)",
                      "& .MuiLinearProgress-bar": { bgcolor: status.color }
                    }}
                  />
                  {comp?.missing && comp.missing.length > 0 && (
                    <Typography variant="caption" sx={{ color: "#f97316", display: "block", mt: 0.5 }}>
                      Missing: {comp.missing.slice(0, 3).join(", ")}
                    </Typography>
                  )}
                  {comp?.alignment && (
                    <Typography variant="caption" sx={{ opacity: 0.6, display: "block", mt: 0.5 }}>
                      {comp.alignment}
                    </Typography>
                  )}
                </Box>
              );
            })}

            {/* Strengths Reality Check */}
            {data.strengths_reality_check && data.strengths_reality_check.length > 0 && (
              <>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                  Strengths Reality Check
                </Typography>
                {data.strengths_reality_check.map((s, i) => (
                  <Box key={i} sx={{ mb: 2, p: 2, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>{s.strength}</Typography>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.5, mb: 1 }}>
                      <WarningIcon sx={{ fontSize: 14, color: "#eab308", mt: 0.3 }} />
                      <Typography variant="caption" sx={{ color: "#eab308" }}>
                        Reality: {s.reality}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 1 }}>
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 14, color: "#22c55e" }} />
                          <Typography variant="caption" sx={{ color: "#22c55e" }}>Helps:</Typography>
                        </Box>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>{s.helps}</Typography>
                      </Box>
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                          <CloseIcon sx={{ fontSize: 14, color: "#ef4444" }} />
                          <Typography variant="caption" sx={{ color: "#ef4444" }}>Doesn&apos;t help:</Typography>
                        </Box>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>{s.doesnt_help}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </>
            )}
          </Box>
        )}

        {/* Critical Gaps Tab */}
        {activeTab === "gaps" && (
          <Box>
            <Box sx={{ p: 2, bgcolor: "rgba(239,68,68,0.1)", borderRadius: 2, mb: 3, border: 1, borderColor: "rgba(239,68,68,0.3)" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <WarningIcon sx={{ color: "#f97316" }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#f97316" }}>
                  These Gaps Cannot Be Fixed With CV Changes
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                The following gaps require actual experience or credentials, not repositioning or rewording.
              </Typography>
            </Box>

            {data.critical_gaps && data.critical_gaps.length > 0 ? (
              data.critical_gaps.map((gap, i) => (
                <Box key={i} sx={{ mb: 2, p: 2, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>{gap.area}</Typography>
                      <Chip 
                        label={gap.severity.toUpperCase()} 
                        size="small" 
                        sx={{ 
                          bgcolor: gap.severity === "critical" ? "#ef4444" : gap.severity === "high" ? "#f97316" : "#eab308",
                          color: "white",
                          fontSize: "0.6rem",
                          height: 18,
                          mt: 0.5
                        }} 
                      />
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: getScoreColor(gap.match_percent) }}>
                        {gap.match_percent}%
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.6 }}>match</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 2 }}>
                    <Box>
                      <Typography variant="caption" sx={{ opacity: 0.5, textTransform: "uppercase" }}>YOU HAVE</Typography>
                      <Typography variant="body2" sx={{ color: "#f97316" }}>{gap.you_have}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ opacity: 0.5, textTransform: "uppercase" }}>JD REQUIRES</Typography>
                      <Typography variant="body2" sx={{ color: "#22c55e" }}>{gap.jd_requires}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2, p: 1.5, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                      <CloseIcon sx={{ fontSize: 14, color: "#ef4444" }} />
                      <Typography variant="caption" sx={{ color: "#ef4444" }}>
                        Cannot be fixed with CV changes
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      <strong>What would actually help:</strong> {gap.what_would_help}
                    </Typography>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ opacity: 0.6, textAlign: "center", py: 4 }}>
                No critical gaps identified
              </Typography>
            )}
          </Box>
        )}

        {/* Risk Analysis Tab */}
        {activeTab === "risk" && data.risk_assessment && (
          <Box>
            {/* Candidate Risk */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Your Risk (Candidate)</Typography>
                <Box sx={{ 
                  bgcolor: getRiskColor(data.risk_assessment.candidate_risk.score), 
                  color: "white", 
                  px: 2, py: 0.5, 
                  borderRadius: 1,
                  fontWeight: 700
                }}>
                  {data.risk_assessment.candidate_risk.score}
                </Box>
              </Box>
              
              {data.risk_assessment.candidate_risk.factors.map((f, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                    <Typography variant="body2">{f.factor}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{f.score}</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={f.score} 
                    sx={{ 
                      height: 6, 
                      borderRadius: 1,
                      bgcolor: "rgba(255,255,255,0.1)",
                      "& .MuiLinearProgress-bar": { bgcolor: getRiskColor(f.score) }
                    }}
                  />
                  <Typography variant="caption" sx={{ opacity: 0.6, display: "block", mt: 0.5 }}>
                    {f.detail}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Employer Risk */}
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Employer Risk (HR View)</Typography>
                <Box sx={{ 
                  bgcolor: getRiskColor(data.risk_assessment.employer_risk.score), 
                  color: "white", 
                  px: 2, py: 0.5, 
                  borderRadius: 1,
                  fontWeight: 700
                }}>
                  {data.risk_assessment.employer_risk.score}
                </Box>
              </Box>
              
              {data.risk_assessment.employer_risk.factors.map((f, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                    <Typography variant="body2">{f.factor}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{f.score}</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={f.score} 
                    sx={{ 
                      height: 6, 
                      borderRadius: 1,
                      bgcolor: "rgba(255,255,255,0.1)",
                      "& .MuiLinearProgress-bar": { bgcolor: getRiskColor(f.score) }
                    }}
                  />
                  <Typography variant="caption" sx={{ opacity: 0.6, display: "block", mt: 0.5 }}>
                    {f.detail}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Risk Summary */}
            <Box sx={{ mt: 3, p: 2, bgcolor: "rgba(239,68,68,0.1)", borderRadius: 2, borderLeft: 4, borderColor: "#ef4444" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#ef4444", mb: 1 }}>
                Risk Summary
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Both candidate and employer face elevated risks. The candidate risks rejection and opportunity cost. 
                The employer risks hiring someone who needs extensive ramp-up time.
              </Typography>
            </Box>
          </Box>
        )}

        {/* Better Fits Tab */}
        {activeTab === "fits" && (
          <Box>
            <Box sx={{ p: 2, bgcolor: "rgba(34,197,94,0.1)", borderRadius: 2, mb: 3, border: 1, borderColor: "rgba(34,197,94,0.3)" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <FavoriteIcon sx={{ color: "#22c55e" }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#22c55e" }}>
                  Roles Where You&apos;d Be a Strong Candidate
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Based on your actual experience and strengths, these roles have 75%+ compatibility.
              </Typography>
            </Box>

            {data.honest_verdict?.better_fit_roles && data.honest_verdict.better_fit_roles.length > 0 ? (
              <>
                {data.honest_verdict.better_fit_roles.map((role, i) => (
                  <Box key={i} sx={{ mb: 2, p: 2, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>{role.role}</Typography>
                        <Typography variant="caption" sx={{ opacity: 0.6 }}>{role.reason}</Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: getScoreColor(role.fit_score) }}>
                          {role.fit_score}%
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.6 }}>fit score</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}

                {/* Current Application for comparison */}
                <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
                <Box sx={{ p: 2, bgcolor: "rgba(234,179,8,0.1)", borderRadius: 2, border: 1, borderColor: "rgba(234,179,8,0.3)" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>Current Application</Typography>
                      <Typography variant="caption" sx={{ opacity: 0.6 }}>{data.jd_parsing?.role_title}</Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: getScoreColor(data.raw_compatibility?.score ?? 0) }}>
                        {data.raw_compatibility?.score ?? 0}%
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#eab308" }}>stretch fit</Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : (
              <Typography variant="body2" sx={{ opacity: 0.6, textAlign: "center", py: 4 }}>
                Alternative role suggestions not available
              </Typography>
            )}
          </Box>
        )}

        {/* Real Options Tab */}
        {activeTab === "options" && (
          <Box>
            {/* Apply If */}
            {data.real_options?.apply_if && data.real_options.apply_if.length > 0 && (
              <Box sx={{ mb: 3, p: 2, bgcolor: "rgba(34,197,94,0.1)", borderRadius: 2, border: 1, borderColor: "rgba(34,197,94,0.3)" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <CheckCircleIcon sx={{ color: "#22c55e" }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#22c55e" }}>
                    Apply If...
                  </Typography>
                </Box>
                {data.real_options.apply_if.map((item, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                    <Typography variant="body2" sx={{ opacity: 0.5 }}>-</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* Don't Apply If */}
            {data.real_options?.dont_apply_if && data.real_options.dont_apply_if.length > 0 && (
              <Box sx={{ mb: 3, p: 2, bgcolor: "rgba(239,68,68,0.1)", borderRadius: 2, border: 1, borderColor: "rgba(239,68,68,0.3)" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <CloseIcon sx={{ color: "#ef4444" }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#ef4444" }}>
                    Don&apos;t Apply If...
                  </Typography>
                </Box>
                {data.real_options.dont_apply_if.map((item, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                    <Typography variant="body2" sx={{ opacity: 0.5 }}>-</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* What Would Actually Help */}
            {data.student_guidance?.quick_wins && data.student_guidance.quick_wins.length > 0 && (
              <Box sx={{ mb: 3, p: 2, bgcolor: "rgba(234,179,8,0.1)", borderRadius: 2, border: 1, borderColor: "rgba(234,179,8,0.3)" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <TipsAndUpdatesIcon sx={{ color: "#eab308" }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#eab308" }}>
                    What Would Actually Help (Not Just CV Changes)
                  </Typography>
                </Box>
                {data.student_guidance.quick_wins.map((item, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                    <Typography variant="body2" sx={{ opacity: 0.5 }}>{i + 1}.</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* Bottom Line */}
            {data.real_options?.bottom_line && (
              <Box sx={{ p: 2, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <BuildIcon sx={{ opacity: 0.6 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Bottom Line
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  You&apos;re an <strong style={{ color: "#22c55e" }}>{data.real_options.bottom_line.your_profile}</strong> applying for a{" "}
                  <strong style={{ color: "#3b82f6" }}>{data.real_options.bottom_line.target_role}</strong>.{" "}
                  <span style={{ color: "#f97316" }}>{data.real_options.bottom_line.reality}</span> Your best path is either:
                </Typography>

                {/* Option A */}
                <Box sx={{ mb: 2, p: 2, bgcolor: "rgba(34,197,94,0.1)", borderRadius: 1, borderLeft: 3, borderColor: "#22c55e" }}>
                  <Typography variant="body2" sx={{ color: "#22c55e", fontWeight: 600, mb: 0.5 }}>
                    {data.real_options.bottom_line.option_a.title}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {data.real_options.bottom_line.option_a.action}
                  </Typography>
                </Box>

                {/* Option B */}
                <Box sx={{ p: 2, bgcolor: "rgba(59,130,246,0.1)", borderRadius: 1, borderLeft: 3, borderColor: "#3b82f6" }}>
                  <Typography variant="body2" sx={{ color: "#3b82f6", fontWeight: 600, mb: 0.5 }}>
                    {data.real_options.bottom_line.option_b.title}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {data.real_options.bottom_line.option_b.action}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: "rgba(255,255,255,0.1)", textAlign: "center" }}>
        <Typography variant="caption" sx={{ opacity: 0.5 }}>
          EduNatives CV Intelligence Engine v2.2 - Honest Assessment Framework
        </Typography>
      </Box>
    </Box>
  );
}
