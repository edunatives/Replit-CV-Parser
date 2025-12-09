"use client";

import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, IconButton, Chip, Typography, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ErrorIcon from "@mui/icons-material/Error";
import type { CVFile } from "@/types/cv";

interface FileListProps {
  files: CVFile[];
  selectedFileId: string | null;
  onSelectFile: (id: string) => void;
  onRemoveFile: (id: string) => void;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getStatusIcon(status: CVFile["status"]) {
  switch (status) {
    case "done":
      return <CheckCircleIcon color="success" fontSize="small" />;
    case "processing":
      return <HourglassEmptyIcon color="warning" fontSize="small" />;
    case "error":
      return <ErrorIcon color="error" fontSize="small" />;
    default:
      return null;
  }
}

function getStatusChip(status: CVFile["status"]) {
  const statusConfig = {
    pending: { label: "Pending", color: "default" as const },
    processing: { label: "Processing", color: "warning" as const },
    done: { label: "Done", color: "success" as const },
    error: { label: "Error", color: "error" as const },
  };
  
  const config = statusConfig[status];
  return <Chip size="small" label={config.label} color={config.color} />;
}

export function FileList({ files, selectedFileId, onSelectFile, onRemoveFile }: FileListProps) {
  if (files.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          No files uploaded yet
        </Typography>
      </Box>
    );
  }

  return (
    <List dense>
      {files.map((file) => (
        <ListItem
          key={file.id}
          data-testid={`file-item-${file.id}`}
          onClick={() => onSelectFile(file.id)}
          sx={{
            cursor: "pointer",
            bgcolor: selectedFileId === file.id ? "action.selected" : "transparent",
            borderRadius: 1,
            mb: 0.5,
            "&:hover": {
              bgcolor: selectedFileId === file.id ? "action.selected" : "action.hover",
            },
          }}
        >
          <ListItemIcon>
            <DescriptionIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" noWrap sx={{ maxWidth: 150 }}>
                  {file.name}
                </Typography>
                {getStatusIcon(file.status)}
              </Box>
            }
            secondary={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">
                  {formatFileSize(file.size)}
                </Typography>
                {getStatusChip(file.status)}
              </Box>
            }
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveFile(file.id);
              }}
              data-testid={`button-remove-${file.id}`}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
