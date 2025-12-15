"use client";

import { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { Box, Typography, Paper, Alert } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes

interface UploadDropzoneProps {
  onFilesAdded: (files: File[]) => void;
  disabled?: boolean;
}

export function UploadDropzone({ onFilesAdded, disabled }: UploadDropzoneProps) {
  const [sizeError, setSizeError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("[UploadDropzone] onDrop called with files:", acceptedFiles.map(f => f.name));
    setSizeError(null);
    onFilesAdded(acceptedFiles);
  }, [onFilesAdded]);

  const onDropRejected = useCallback((rejections: FileRejection[]) => {
    const oversizedFiles = rejections.filter(r => 
      r.errors.some(e => e.code === "file-too-large")
    );
    
    if (oversizedFiles.length > 0) {
      const names = oversizedFiles.map(r => r.file.name).join(", ");
      setSizeError(`File(s) too large: ${names}. Maximum size is 3MB.`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
    },
    maxSize: MAX_FILE_SIZE,
    disabled,
    multiple: true,
  });

  return (
    <Box>
      {sizeError && (
        <Alert 
          severity="warning" 
          icon={<WarningAmberIcon />}
          onClose={() => setSizeError(null)}
          sx={{ mb: 2 }}
          data-testid="alert-file-size-error"
        >
          {sizeError}
        </Alert>
      )}
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
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
            Maximum file size: 3MB
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
