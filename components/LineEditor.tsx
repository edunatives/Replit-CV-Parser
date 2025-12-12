"use client";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LineEditorProps {
  value: string;
  onChange: (newValue: string) => void;
  textStyle?: React.CSSProperties;
  placeholder?: string;
}

export function LineEditor({ value, onChange, textStyle, placeholder }: LineEditorProps) {
  const lines = value ? value.split("\n") : [];

  const handleDeleteLine = (indexToDelete: number) => {
    const newLines = lines.filter((_, idx) => idx !== indexToDelete);
    onChange(newLines.join("\n"));
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
