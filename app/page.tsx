"use client";

import { useState, useCallback, useRef } from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
  LinearProgress,
  Alert,
  Snackbar,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { exportToPDF, exportToDOCX, exportToJSON } from "@/lib/export/exportCV";
import { Header } from "@/components/Header";
import { UploadDropzone } from "@/components/UploadDropzone";
import { FileList } from "@/components/FileList";
import { CVPreview } from "@/components/CVPreview";
import { TemplateSelector } from "@/components/TemplateSelector";
import { RawTextView } from "@/components/RawTextView";
import { JsonView } from "@/components/JsonView";
import type { CVFile, ParsedCV, TemplateType } from "@/types/cv";

export default function Home() {
  const [files, setFiles] = useState<CVFile[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [parsedCVs, setParsedCVs] = useState<Map<string, ParsedCV>>(new Map());
  const [rawTexts, setRawTexts] = useState<Map<string, string>>(new Map());
  const [template, setTemplate] = useState<TemplateType>("modern-dark");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" | "info" }>({
    open: false,
    message: "",
    severity: "info",
  });
  const [exportMenuAnchor, setExportMenuAnchor] = useState<null | HTMLElement>(null);

  const fileDataRef = useRef<Map<string, File>>(new Map());

  const showSnackbar = (message: string, severity: "success" | "error" | "info" = "info") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleFilesAdded = useCallback((newFiles: File[]) => {
    const cvFiles: CVFile[] = newFiles.map((file, index) => {
      const id = `file-${Date.now()}-${index}`;
      fileDataRef.current.set(id, file);
      return {
        id,
        name: file.name,
        size: file.size,
        type: file.type,
        status: "pending" as const,
      };
    });

    setFiles((prev) => [...prev, ...cvFiles]);
    if (!selectedFileId && cvFiles.length > 0) {
      setSelectedFileId(cvFiles[0].id);
    }

    showSnackbar(`${newFiles.length} file${newFiles.length > 1 ? "s" : ""} added`, "success");
  }, [selectedFileId]);

  const handleSelectFile = useCallback((id: string) => {
    setSelectedFileId(id);
  }, []);

  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setParsedCVs((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
    setRawTexts((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
    fileDataRef.current.delete(id);
    if (selectedFileId === id) {
      setSelectedFileId(null);
    }
  }, [selectedFileId]);

  const handleProcessAll = useCallback(async () => {
    const pendingFiles = files.filter((f) => f.status === "pending");
    if (pendingFiles.length === 0) {
      showSnackbar("No files to process", "info");
      return;
    }

    setIsProcessing(true);

    for (const file of pendingFiles) {
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, status: "processing" as const } : f))
      );

      try {
        const actualFile = fileDataRef.current.get(file.id);
        if (!actualFile) {
          throw new Error("File data not found");
        }

        const formData = new FormData();
        formData.append("file", actualFile);
        formData.append("fileId", file.id);

        const response = await fetch("/api/parse", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to parse CV");
        }

        const { cv, rawText } = await response.json();

        setParsedCVs((prev) => new Map(prev).set(file.id, cv));
        setRawTexts((prev) => new Map(prev).set(file.id, rawText));

        setFiles((prev) =>
          prev.map((f) => (f.id === file.id ? { ...f, status: "done" as const } : f))
        );
      } catch (error) {
        console.error("Error parsing CV:", error);
        setFiles((prev) =>
          prev.map((f) => (f.id === file.id ? { ...f, status: "error" as const, error: String(error) } : f))
        );
        showSnackbar(`Error parsing ${file.name}`, "error");
      }
    }

    setIsProcessing(false);
    showSnackbar(`Processing complete`, "success");
  }, [files]);

  const handleClearAll = useCallback(() => {
    setFiles([]);
    setParsedCVs(new Map());
    setRawTexts(new Map());
    setSelectedFileId(null);
    fileDataRef.current.clear();
    showSnackbar("All files cleared", "info");
  }, []);

  const handleExportPDF = useCallback(async () => {
    const doneFiles = files.filter((f) => f.status === "done");
    if (doneFiles.length === 0) {
      showSnackbar("No parsed CVs to export", "info");
      return;
    }
    for (const file of doneFiles) {
      const cv = parsedCVs.get(file.id);
      if (cv) {
        await exportToPDF(cv, `${cv.name || file.name}-cv.pdf`);
      }
    }
    showSnackbar(`Exported ${doneFiles.length} CV(s) as PDF`, "success");
    setExportMenuAnchor(null);
  }, [files, parsedCVs]);

  const handleExportDOCX = useCallback(async () => {
    const doneFiles = files.filter((f) => f.status === "done");
    if (doneFiles.length === 0) {
      showSnackbar("No parsed CVs to export", "info");
      return;
    }
    for (const file of doneFiles) {
      const cv = parsedCVs.get(file.id);
      if (cv) {
        await exportToDOCX(cv, `${cv.name || file.name}-cv.docx`);
      }
    }
    showSnackbar(`Exported ${doneFiles.length} CV(s) as DOCX`, "success");
    setExportMenuAnchor(null);
  }, [files, parsedCVs]);

  const handleExportJSON = useCallback(() => {
    const doneFiles = files.filter((f) => f.status === "done");
    if (doneFiles.length === 0) {
      showSnackbar("No parsed CVs to export", "info");
      return;
    }
    const exportData = doneFiles.map((f) => ({
      fileName: f.name,
      cv: parsedCVs.get(f.id),
    }));
    exportToJSON(exportData, `parsed-cvs-${Date.now()}.json`);
    showSnackbar(`Exported ${doneFiles.length} CV(s) as JSON`, "success");
    setExportMenuAnchor(null);
  }, [files, parsedCVs]);

  const handleUpdateCV = useCallback((cv: ParsedCV) => {
    setParsedCVs((prev) => new Map(prev).set(cv.id, cv));
  }, []);

  const selectedCV = selectedFileId ? parsedCVs.get(selectedFileId) || null : null;
  const selectedRawText = selectedFileId ? rawTexts.get(selectedFileId) || null : null;
  const processingCount = files.filter((f) => f.status === "processing").length;
  const doneCount = files.filter((f) => f.status === "done").length;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {isProcessing && (
          <Box sx={{ mb: 2 }}>
            <LinearProgress color="primary" />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Processing {processingCount} of {files.length} files...
            </Typography>
          </Box>
        )}

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Upload Files
              </Typography>
              <UploadDropzone onFilesAdded={handleFilesAdded} disabled={isProcessing} />
            </Paper>

            <Paper sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 1 }}>
                <Typography variant="subtitle2">
                  Files ({files.length})
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {doneCount} parsed
                </Typography>
              </Box>
              <Divider sx={{ mb: 1 }} />
              <FileList
                files={files}
                selectedFileId={selectedFileId}
                onSelectFile={handleSelectFile}
                onRemoveFile={handleRemoveFile}
              />
            </Paper>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayArrowIcon />}
                onClick={handleProcessAll}
                disabled={isProcessing || files.filter((f) => f.status === "pending").length === 0}
                fullWidth
                data-testid="button-process-all"
              >
                Process All ({files.filter((f) => f.status === "pending").length})
              </Button>
              <Button
                variant="outlined"
                startIcon={<FileDownloadIcon />}
                onClick={(e) => setExportMenuAnchor(e.currentTarget)}
                disabled={doneCount === 0}
                fullWidth
                data-testid="button-export-menu"
              >
                Export ({doneCount})
              </Button>
              <Menu
                anchorEl={exportMenuAnchor}
                open={Boolean(exportMenuAnchor)}
                onClose={() => setExportMenuAnchor(null)}
              >
                <MenuItem onClick={handleExportPDF} data-testid="menu-export-pdf">
                  <ListItemIcon><PictureAsPdfIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Export as PDF</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleExportDOCX} data-testid="menu-export-docx">
                  <ListItemIcon><DescriptionIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Export as Word</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleExportJSON} data-testid="menu-export-json">
                  <ListItemIcon><DataObjectIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Export as JSON</ListItemText>
                </MenuItem>
              </Menu>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteSweepIcon />}
                onClick={handleClearAll}
                disabled={files.length === 0}
                fullWidth
                data-testid="button-clear-all"
              >
                Clear All
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8, lg: 9 }}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 2 }}>
                <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)}>
                  <Tab label="Preview" data-testid="tab-preview" />
                  <Tab label="Raw Text" data-testid="tab-raw-text" />
                  <Tab label="JSON" data-testid="tab-json" />
                </Tabs>
                <TemplateSelector template={template} onTemplateChange={setTemplate} />
              </Box>

              {!selectedCV && activeTab === 0 && (
                <Box sx={{ p: 6, textAlign: "center" }}>
                  <Typography color="text.secondary">
                    Select a file and process it to see the preview
                  </Typography>
                </Box>
              )}

              {activeTab === 0 && selectedCV && (
                <CVPreview cv={selectedCV} template={template} onUpdateCV={handleUpdateCV} />
              )}

              {activeTab === 1 && <RawTextView text={selectedRawText} />}

              {activeTab === 2 && <JsonView cv={selectedCV} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
