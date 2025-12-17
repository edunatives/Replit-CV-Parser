"use client";

import { Box, Typography, LinearProgress, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircularProgress from "@mui/material/CircularProgress";

export interface ProgressStep {
  label: string;
  description?: string;
}

interface SteppedProgressProps {
  steps: ProgressStep[];
  currentStep: number;
  title?: string;
  estimatedTime?: string;
  cvType?: string;
}

const CV_TYPE_LABELS: Record<string, { label: string; color: string }> = {
  student: { label: "Student", color: "#3b82f6" },
  fresh_grad: { label: "Fresh Graduate", color: "#8b5cf6" },
  researcher: { label: "Researcher", color: "#06b6d4" },
  professional: { label: "Professional", color: "#10b981" },
};

export function SteppedProgress({ steps, currentStep, title, estimatedTime, cvType }: SteppedProgressProps) {
  const progress = Math.min(100, ((currentStep + 1) / steps.length) * 100);
  const typeInfo = cvType ? CV_TYPE_LABELS[cvType] : null;

  return (
    <Paper elevation={0} sx={{ p: 3, bgcolor: "#f8fafc", border: "1px solid", borderColor: "divider" }}>
      {title && (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {title}
            </Typography>
            {typeInfo && (
              <Box 
                sx={{ 
                  px: 1.5, 
                  py: 0.25, 
                  borderRadius: 1, 
                  bgcolor: typeInfo.color,
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {typeInfo.label}
              </Box>
            )}
          </Box>
          {estimatedTime && (
            <Typography variant="caption" color="text.secondary">
              {estimatedTime}
            </Typography>
          )}
        </Box>
      )}
      
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
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;
          const isPending = index > currentStep;

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
  );
}

export const UPLOAD_STEPS: ProgressStep[] = [
  { label: "Reading file", description: "Preparing your document..." },
  { label: "Extracting text", description: "Converting to readable format..." },
  { label: "AI parsing", description: "Analyzing CV structure with AI..." },
  { label: "Finalizing", description: "Preparing your CV data..." },
];

export const ANALYSIS_STEPS: ProgressStep[] = [
  { label: "Preparing analysis", description: "Setting up AI engine..." },
  { label: "Analyzing CV content", description: "Reviewing experience and skills..." },
  { label: "Generating insights", description: "Creating personalized feedback..." },
  { label: "Finalizing report", description: "Compiling results..." },
];
