"use client";

import { Paper, Typography } from "@mui/material";
import type { ParsedCV } from "@/types/cv";

interface JsonViewProps {
  cv: ParsedCV | null;
}

export function JsonView({ cv }: JsonViewProps) {
  if (!cv) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography color="text.secondary">No CV data available</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, maxHeight: 600, overflow: "auto", bgcolor: "#1e1e1e" }} data-testid="json-view">
      <Typography
        component="pre"
        variant="body2"
        sx={{
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          fontSize: "0.85rem",
          lineHeight: 1.6,
          color: "#9cdcfe",
        }}
      >
        {JSON.stringify(cv, null, 2)}
      </Typography>
    </Paper>
  );
}
