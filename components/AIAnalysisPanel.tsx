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

interface CVAssessment {
  overallScore: number;
  sections: { name: string; score: number; feedback: string }[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  tokenUsage: { promptTokens: number; completionTokens: number; totalTokens: number };
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface JDMatchResult {
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  experienceMatch: { score: number; feedback: string };
  educationMatch: { score: number; feedback: string };
  overallFeedback: string;
  suggestions: string[];
  keywordOptimizations: string[];
  tokenUsage: { promptTokens: number; completionTokens: number; totalTokens: number };
}

export function AIAnalysisPanel({ cv, activeTrack }: AIAnalysisPanelProps) {
  const [jdText, setJdText] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [assessment, setAssessment] = useState<CVAssessment | null>(null);
  const [jdMatch, setJdMatch] = useState<JDMatchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
      const { assessment } = await response.json();
      setAssessment(assessment);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to run assessment");
    } finally {
      setLoading(false);
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
      const { match } = await response.json();
      setJdMatch(match);
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
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Overall Score
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      {assessment.overallScore}
                    </Typography>
                  </Box>
                  <Chip
                    icon={<TokenIcon sx={{ fontSize: 14 }} />}
                    label={`${assessment.tokenUsage.totalTokens} tokens`}
                    size="small"
                    sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
                  />
                </Box>
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
                  Match Rate
                </Typography>
              </CardContent>
            </Card>

            <Typography variant="body2" sx={{ mb: 3 }}>
              {jdMatch.overallFeedback}
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
          </>
        )}
      </Box>
    );
  }

  return null;
}
