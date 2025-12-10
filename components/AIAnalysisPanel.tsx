"use client";

import { useState } from "react";
import { Box, Typography, Card, CardContent, Chip, LinearProgress, TextField, Button, IconButton, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SendIcon from "@mui/icons-material/Send";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WorkIcon from "@mui/icons-material/Work";
import type { ParsedCV } from "@/types/cv";

interface AIAnalysisPanelProps {
  cv: ParsedCV;
  activeTrack: "assessment" | "advisor" | "jd-match";
}

export function AIAnalysisPanel({ cv, activeTrack }: AIAnalysisPanelProps) {
  const [jdText, setJdText] = useState("");
  const [chatMessage, setChatMessage] = useState("");

  if (activeTrack === "assessment") {
    return (
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <AutoAwesomeIcon sx={{ color: "primary.main" }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            AI Resume Analysis
          </Typography>
        </Box>

        <Card sx={{ mb: 2, bgcolor: "success.main", color: "white" }}>
          <CardContent sx={{ py: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Overall Score
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              --
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Complete analysis to see your score
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "text.secondary" }}>
          Analysis Categories
        </Typography>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <CheckCircleIcon sx={{ color: "success.main", fontSize: 20 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Contact Information
              </Typography>
            </Box>
            <Box sx={{ pl: 3.5 }}>
              {cv.email && (
                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ color: "success.main", fontSize: 14 }} />
                  Email provided: {cv.email}
                </Typography>
              )}
              {cv.phone && (
                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ color: "success.main", fontSize: 14 }} />
                  Phone provided: {cv.phone}
                </Typography>
              )}
              {cv.location && (
                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ color: "success.main", fontSize: 14 }} />
                  Location provided: {cv.location}
                </Typography>
              )}
              {!cv.email && (
                <Typography variant="body2" color="error.main" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ErrorIcon sx={{ fontSize: 14 }} />
                  Missing email address
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              {cv.summary ? (
                <CheckCircleIcon sx={{ color: "success.main", fontSize: 20 }} />
              ) : (
                <WarningIcon sx={{ color: "warning.main", fontSize: 20 }} />
              )}
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Professional Summary
              </Typography>
            </Box>
            <Box sx={{ pl: 3.5 }}>
              {cv.summary ? (
                <Typography variant="body2" color="text.secondary">
                  Summary section found. Good job! This helps recruiters quickly understand your value.
                </Typography>
              ) : (
                <Typography variant="body2" color="warning.main">
                  No summary section found. Adding a professional summary can help catch recruiter attention.
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              {cv.experience && cv.experience.length > 0 ? (
                <CheckCircleIcon sx={{ color: "success.main", fontSize: 20 }} />
              ) : (
                <ErrorIcon sx={{ color: "error.main", fontSize: 20 }} />
              )}
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Work Experience
              </Typography>
            </Box>
            <Box sx={{ pl: 3.5 }}>
              {cv.experience && cv.experience.length > 0 ? (
                <Typography variant="body2" color="text.secondary">
                  {cv.experience.length} position{cv.experience.length > 1 ? "s" : ""} found. 
                  Consider adding quantifiable achievements to each role.
                </Typography>
              ) : (
                <Typography variant="body2" color="error.main">
                  No work experience section found. This is essential for most job applications.
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              {cv.skills && cv.skills.length >= 5 ? (
                <CheckCircleIcon sx={{ color: "success.main", fontSize: 20 }} />
              ) : (
                <WarningIcon sx={{ color: "warning.main", fontSize: 20 }} />
              )}
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Skills
              </Typography>
            </Box>
            <Box sx={{ pl: 3.5 }}>
              {cv.skills && cv.skills.length > 0 ? (
                <Typography variant="body2" color="text.secondary">
                  {cv.skills.length} skill{cv.skills.length > 1 ? "s" : ""} listed.
                  {cv.skills.length < 5 && " Consider adding more relevant skills to improve ATS matching."}
                </Typography>
              ) : (
                <Typography variant="body2" color="warning.main">
                  No skills section found. Skills are critical for ATS systems to match you with jobs.
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>

        <Button 
          variant="contained" 
          fullWidth 
          startIcon={<AutoAwesomeIcon />}
          sx={{ mt: 2 }}
          data-testid="button-run-analysis"
        >
          Run Full AI Analysis
        </Button>
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
              "What skills should I add for a software engineering role?",
              "How can I make my experience more impactful?",
              "Review my resume for ATS optimization",
            ].map((prompt, index) => (
              <Button
                key={index}
                variant="outlined"
                size="small"
                sx={{ justifyContent: "flex-start", textAlign: "left", textTransform: "none" }}
                onClick={() => setChatMessage(prompt)}
                data-testid={`button-prompt-${index}`}
              >
                {prompt}
              </Button>
            ))}
          </Box>
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
              data-testid="input-chat-message"
            />
            <IconButton 
              color="primary" 
              disabled={!chatMessage.trim()}
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
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <WorkIcon sx={{ color: "primary.main" }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Job Description Match
          </Typography>
        </Box>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Paste Job Description
            </Typography>
            <TextField
              multiline
              rows={6}
              fullWidth
              placeholder="Paste the job description here to see how well your resume matches..."
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              data-testid="input-job-description"
            />
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              disabled={!jdText.trim()}
              data-testid="button-analyze-match"
            >
              Analyze Match
            </Button>
          </CardContent>
        </Card>

        {!jdText && (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <WorkIcon sx={{ fontSize: 64, color: "grey.300", mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              Paste a job description above to see your match rate and get optimization tips
            </Typography>
          </Box>
        )}

        {jdText && (
          <>
            <Card sx={{ mb: 2, bgcolor: "primary.main", color: "white" }}>
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                <Typography variant="h2" sx={{ fontWeight: 700 }}>
                  --%
                </Typography>
                <Typography variant="subtitle1">
                  Match Rate
                </Typography>
              </CardContent>
            </Card>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">Hard Skills</Typography>
                <Typography variant="body2" color="text.secondary">-- issues</Typography>
              </Box>
              <LinearProgress variant="determinate" value={0} sx={{ height: 8, borderRadius: 1 }} />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">Soft Skills</Typography>
                <Typography variant="body2" color="text.secondary">-- issues</Typography>
              </Box>
              <LinearProgress variant="determinate" value={0} color="secondary" sx={{ height: 8, borderRadius: 1 }} />
            </Box>
          </>
        )}
      </Box>
    );
  }

  return null;
}
