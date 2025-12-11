"use client";

import { useState } from "react";
import { Box, Typography, Tabs, Tab, IconButton, Button, Chip, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TokenIcon from "@mui/icons-material/Token";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import { CVPreview } from "./CVPreview";
import { AIAnalysisPanel } from "./AIAnalysisPanel";
import { exportToPDF, exportToDOCX } from "@/lib/export/exportCV";
import type { ParsedCV, TemplateType } from "@/types/cv";

interface CVWorkspaceProps {
  cv: ParsedCV;
  onBack: () => void;
  onUpdateCV: (cv: ParsedCV) => void;
}

type AssessmentTrack = "assessment" | "advisor" | "jd-match";

export function CVWorkspace({ cv, onBack, onUpdateCV }: CVWorkspaceProps) {
  const [template, setTemplate] = useState<TemplateType>("business");
  const [activeTrack, setActiveTrack] = useState<AssessmentTrack>("assessment");
  const [exportMenuAnchor, setExportMenuAnchor] = useState<null | HTMLElement>(null);

  const handleExportClick = (event: React.MouseEvent<HTMLElement>) => {
    setExportMenuAnchor(event.currentTarget);
  };

  const handleExportClose = () => {
    setExportMenuAnchor(null);
  };

  const handleExportPDF = async () => {
    const filename = `${cv.name || "resume"}_${new Date().toISOString().split("T")[0]}.pdf`;
    await exportToPDF(cv, filename, template);
    handleExportClose();
  };

  const handleExportDOCX = async () => {
    const filename = `${cv.name || "resume"}_${new Date().toISOString().split("T")[0]}.docx`;
    await exportToDOCX(cv, filename, template);
    handleExportClose();
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      <Box 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          gap: 2, 
          px: 3, 
          py: 1.5, 
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={onBack} size="small" data-testid="button-back-dashboard">
            <ArrowBackIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
              {cv.name || "Untitled Resume"}
            </Typography>
            {cv.title && (
              <Typography variant="body2" color="text.secondary">
                {cv.title}
              </Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {cv.tokenUsage && (
            <Chip
              icon={<TokenIcon sx={{ fontSize: 16 }} />}
              label={`${cv.tokenUsage.totalTokens.toLocaleString()} tokens`}
              size="small"
              variant="outlined"
              data-testid="chip-token-usage"
            />
          )}
          <Button
            variant="outlined"
            size="small"
            startIcon={<FileDownloadIcon />}
            onClick={handleExportClick}
            data-testid="button-export"
          >
            Export
          </Button>
          <Menu
            anchorEl={exportMenuAnchor}
            open={Boolean(exportMenuAnchor)}
            onClose={handleExportClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleExportPDF} data-testid="menu-export-pdf">
              <ListItemIcon>
                <PictureAsPdfIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Export as PDF</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleExportDOCX} data-testid="menu-export-docx">
              <ListItemIcon>
                <DescriptionIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Export as DOCX</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <Box 
          sx={{ 
            flex: "1 1 auto",
            minWidth: 0,
            borderRight: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#e8e8e8",
          }}
        >
          <Box sx={{ flex: 1, overflow: "auto" }}>
            <CVPreview cv={cv} template={template} onUpdateCV={onUpdateCV} onTemplateChange={setTemplate} />
          </Box>
        </Box>

        <Box 
          sx={{ 
            width: "490px",
            minWidth: "490px",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.default",
          }}
        >
          <Box 
            sx={{ 
              px: 2, 
              borderBottom: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Tabs 
              value={activeTrack} 
              onChange={(_, v) => setActiveTrack(v)}
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 500,
                  minHeight: 48,
                }
              }}
            >
              <Tab 
                value="assessment" 
                label="CV Assessment" 
                data-testid="tab-cv-assessment"
              />
              <Tab 
                value="advisor" 
                label="AI Advisor" 
                data-testid="tab-ai-advisor"
              />
              <Tab 
                value="jd-match" 
                label="JD Match" 
                data-testid="tab-jd-match"
              />
            </Tabs>
          </Box>

          <Box sx={{ flex: 1, overflow: "auto" }}>
            <AIAnalysisPanel cv={cv} activeTrack={activeTrack} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
