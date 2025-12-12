"use client";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LineEditorProps {
  value: string;
  onChange: (newValue: string) => void;
  textStyle?: React.CSSProperties;
  placeholder?: string;
}

// Helper to normalize bullet separators to newlines for display
function normalizeToLines(text: string): string[] {
  if (!text) return [];
  
  // First, split by existing newlines
  let normalized = text;
  
  // Convert common bullet patterns to newlines:
  // " - " (space-dash-space) at start of bullets
  // ". - " (period-space-dash-space) sentence ending followed by bullet
  normalized = normalized.replace(/\.\s+-\s+/g, ".\n- ");
  normalized = normalized.replace(/([^-\n])\s+-\s+/g, "$1\n- ");
  
  // Also handle "• " bullet points that are not on their own lines
  normalized = normalized.replace(/\.\s+•\s+/g, ".\n• ");
  normalized = normalized.replace(/([^•\n])\s+•\s+/g, "$1\n• ");
  
  const lines = normalized.split("\n");
  return lines;
}

// Helper to convert lines back to the original format with proper separators
function linesToText(lines: string[]): string {
  return lines.join("\n");
}

export function LineEditor({ value, onChange, textStyle, placeholder }: LineEditorProps) {
  const lines = normalizeToLines(value);

  const handleDeleteLine = (indexToDelete: number) => {
    const newLines = lines.filter((_, idx) => idx !== indexToDelete);
    onChange(linesToText(newLines));
  };

  if (lines.length === 0 || (lines.length === 1 && !lines[0].trim())) {
    return (
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontStyle: "italic",
          ...textStyle,
        }}
      >
        {placeholder || "(No content)"}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
      {lines.map((line, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.5,
            position: "relative",
            "&:hover .line-delete-btn": {
              visibility: "visible",
            },
            pr: 3,
          }}
          data-testid={`line-item-${index}`}
        >
          <Typography
            variant="body2"
            sx={{
              flex: 1,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              ...textStyle,
            }}
          >
            {line || "\u00A0"}
          </Typography>
          <Tooltip title="Delete this line" placement="left">
            <IconButton
              className="line-delete-btn"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteLine(index);
              }}
              sx={{
                visibility: "hidden",
                position: "absolute",
                right: -4,
                top: -2,
                p: 0.25,
                color: "error.light",
                "&:hover": {
                  color: "error.main",
                  bgcolor: "error.light",
                  "& .MuiSvgIcon-root": {
                    color: "error.contrastText",
                  },
                },
              }}
              data-testid={`button-delete-line-${index}`}
            >
              <CloseIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
}
