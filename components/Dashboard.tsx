"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardActions, Button, IconButton, Chip, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { exportToPDF } from "@/lib/export/exportCV";
import type { ParsedCV } from "@/types/cv";

interface DashboardProps {
  cvs: ParsedCV[];
  onUploadNew: () => void;
  onSelectCV: (cv: ParsedCV) => void;
  onDeleteCV: (id: string) => void;
  onDuplicateCV: (cv: ParsedCV) => void;
}

export function Dashboard({ cvs, onUploadNew, onSelectCV, onDeleteCV, onDuplicateCV }: DashboardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatDate = (dateValue?: Date | string) => {
    if (!isMounted) return "Loading...";
    if (!dateValue) return "Just now";
    const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;
    return date.toLocaleDateString("en-US", { 
      day: "2-digit", 
      month: "short", 
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const handleDownload = async (cv: ParsedCV) => {
    const filename = `${cv.name || "resume"}_${new Date().toISOString().split("T")[0]}.pdf`;
    await exportToPDF(cv, filename, "modern-dark");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1400, mx: "auto" }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        My Resumes
      </Typography>

      <Button
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        onClick={onUploadNew}
        data-testid="card-upload-new"
        sx={{ 
          mb: 4,
          py: 1.5,
          px: 3,
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Upload new resume
      </Button>

      {cvs.length > 0 && (
        <>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
            <Typography variant="body2" color="text.secondary">OR</Typography>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
          </Box>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Use existing resume
          </Typography>

          <Grid container spacing={3}>
            {cvs.map((cv) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={cv.id}>
                <Card 
                  sx={{ 
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s ease",
                    "&:hover": {
                      boxShadow: 4,
                    }
                  }}
                  data-testid={`card-cv-${cv.id}`}
                >
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: 1, pb: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {cv.name || "Untitled Resume"}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                        <AccessTimeIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography variant="caption" color="text.secondary">
                          Modified: {formatDate(cv.uploadedAt)}
                        </Typography>
                      </Box>
                      <Chip 
                        label="Resume" 
                        size="small" 
                        sx={{ 
                          bgcolor: "primary.main", 
                          color: "white",
                          fontWeight: 500,
                          fontSize: "0.7rem"
                        }} 
                      />
                    </CardContent>
                    
                    <CardActions sx={{ pt: 0, flexDirection: "column", alignItems: "flex-start", gap: 0.5, px: 2, pb: 2 }}>
                      <Button 
                        size="small" 
                        onClick={() => onSelectCV(cv)}
                        sx={{ color: "text.primary", justifyContent: "flex-start", p: 0, minWidth: "auto" }}
                        data-testid={`button-edit-cv-${cv.id}`}
                      >
                        <EditIcon sx={{ fontSize: 16, mr: 0.5 }} /> Edit
                      </Button>
                      <Button 
                        size="small" 
                        onClick={() => onDuplicateCV(cv)}
                        sx={{ color: "text.primary", justifyContent: "flex-start", p: 0, minWidth: "auto" }}
                        data-testid={`button-copy-cv-${cv.id}`}
                      >
                        <ContentCopyIcon sx={{ fontSize: 16, mr: 0.5 }} /> Make a copy
                      </Button>
                      <Button 
                        size="small"
                        onClick={() => handleDownload(cv)}
                        sx={{ color: "text.primary", justifyContent: "flex-start", p: 0, minWidth: "auto" }}
                        data-testid={`button-download-cv-${cv.id}`}
                      >
                        <FileDownloadIcon sx={{ fontSize: 16, mr: 0.5 }} /> Download
                      </Button>
                      <Button 
                        size="small" 
                        onClick={() => onDeleteCV(cv.id)}
                        sx={{ color: "error.main", justifyContent: "flex-start", p: 0, minWidth: "auto" }}
                        data-testid={`button-delete-cv-${cv.id}`}
                      >
                        <DeleteOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} /> Delete
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
