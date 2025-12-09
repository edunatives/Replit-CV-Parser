"use client";

import { Paper, Typography, Box } from "@mui/material";

interface RawTextViewProps {
  text: string | null;
}

export function RawTextView({ text }: RawTextViewProps) {
  if (!text) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography color="text.secondary">No raw text available</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, maxHeight: 600, overflow: "auto" }} data-testid="raw-text-view">
      <Typography
        component="pre"
        variant="body2"
        sx={{
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          fontSize: "0.85rem",
          lineHeight: 1.6,
        }}
      >
        {text}
      </Typography>
    </Paper>
  );
}
