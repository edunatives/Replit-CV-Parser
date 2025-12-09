"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface UploadDropzoneProps {
  onFilesAdded: (files: File[]) => void;
  disabled?: boolean;
}

export function UploadDropzone({ onFilesAdded, disabled }: UploadDropzoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesAdded(acceptedFiles);
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
    },
    disabled,
    multiple: true,
  });

  return (
    <Paper
      {...getRootProps()}
      data-testid="dropzone-upload"
      sx={{
        p: 4,
        border: 2,
        borderStyle: "dashed",
        borderColor: isDragActive ? "primary.main" : "divider",
        bgcolor: isDragActive ? "action.hover" : "background.paper",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: disabled ? "divider" : "primary.main",
          bgcolor: disabled ? "background.paper" : "action.hover",
        },
      }}
    >
      <input {...getInputProps()} data-testid="input-file-upload" />
      <Box sx={{ textAlign: "center" }}>
        <CloudUploadIcon sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
        <Typography variant="body1" color="text.primary" gutterBottom>
          {isDragActive ? "Drop files here" : "Drag & drop CV files here"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          or click to browse (PDF, DOCX, TXT)
        </Typography>
      </Box>
    </Paper>
  );
}
