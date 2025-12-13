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
  
  let normalized = text;
  
  // Extended dash pattern: hyphen (-), en-dash (–), em-dash (—), minus (−), non-breaking hyphen (‑)
  // Using character class with all common dash-like characters
  const dashChars = "\\-\\–\\—\\−\\‑";
  
  // Pattern 1: ". - " or ". – " (period, optional space(s), any dash, space) -> new bullet line
  // Using a more permissive regex
  normalized = normalized.replace(new RegExp(`\\.\\s*[${dashChars}]\\s+`, "g"), ".\n- ");
  
  // Pattern 2: ", - " (comma, optional space(s), any dash, space) -> new bullet line  
  normalized = normalized.replace(new RegExp(`,\\s*[${dashChars}]\\s+`, "g"), ",\n- ");
  
  // Pattern 3: Text ending with letter/digit followed by " - " -> new bullet line
  normalized = normalized.replace(new RegExp(`([a-zA-Z0-9])\\s+[${dashChars}]\\s+`, "g"), "$1\n- ");
  
  // Pattern 4: Handle "• " bullet points that are inline
  normalized = normalized.replace(/\.\s*•\s*/g, ".\n• ");
  normalized = normalized.replace(/([a-zA-Z0-9])\s+•\s*/g, "$1\n• ");
  
  // Pattern 5: Handle numbered bullets like ". 1. " or ". 1) "
  normalized = normalized.replace(/\.\s+(\d+[.)]\s+)/g, ".\n$1");
  
  // Pattern 6: If no explicit bullet markers found, split on sentence boundaries
  // Apply this whenever we have multiple sentences (not just for long text)
  if (!normalized.includes("\n")) {
    // Count sentence terminators to see if we have multiple sentences
    const sentenceEnds = (normalized.match(/[.!?]\s+[A-Z]/g) || []).length;
    if (sentenceEnds > 0) {
      // Split on sentence boundaries: period/!/? followed by space and capital letter
      normalized = normalized.replace(/([.!?])\s+([A-Z])/g, "$1\n$2");
    }
  }
  
  const lines = normalized.split("\n");
  
  // Filter out empty lines and trim whitespace
  return lines.map(line => line.trim()).filter(line => line.length > 0);
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
