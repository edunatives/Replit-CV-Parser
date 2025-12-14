"use client";

import { useState, useCallback, useRef } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { CVWorkspace } from "@/components/CVWorkspace";
import { UploadDropzone } from "@/components/UploadDropzone";
import { SteppedProgress, UPLOAD_STEPS } from "@/components/SteppedProgress";
import type { ParsedCV } from "@/types/cv";

type View = "dashboard" | "workspace";

export default function Home() {
  const [view, setView] = useState<View>("dashboard");
  const [activeMenuItem, setActiveMenuItem] = useState("ai-career-chat");
  const [cvs, setCvs] = useState<ParsedCV[]>([]);
  const [selectedCV, setSelectedCV] = useState<ParsedCV | null>(null);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStep, setUploadStep] = useState(0);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" | "info" }>({
    open: false,
    message: "",
    severity: "info",
  });

  const pendingFileRef = useRef<File | null>(null);

  const showSnackbar = (message: string, severity: "success" | "error" | "info" = "info") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
    if (item === "ai-career-chat") {
      setView("dashboard");
    }
  };

  const handleUploadNew = useCallback(() => {
    setUploadDialogOpen(true);
  }, []);

  const handleFilesAdded = useCallback(async (files: File[]) => {
    if (files.length === 0) return;

    const file = files[0];
    pendingFileRef.current = file;
    setIsProcessing(true);
    setUploadStep(0);
    setUploadDialogOpen(false);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileId", `cv-${Date.now()}`);

      setUploadStep(1);
      await new Promise(r => setTimeout(r, 300));
      
      setUploadStep(2);
      // Use direct NestJS URL for file uploads (Next.js rewrites don't handle multipart/form-data well)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
      const response = await fetch(`${apiUrl}/cv/parse`, {
        method: "POST",
        body: formData,
      });

      setUploadStep(3);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to parse CV");
      }

      const { cv, tokenUsage } = await response.json();

      setCvs((prev) => [cv, ...prev]);
      setSelectedCV(cv);
      setView("workspace");
      const tokens = tokenUsage?.totalTokens || cv.tokenUsage?.totalTokens || 0;
      showSnackbar(`CV parsed successfully!${tokens > 0 ? ` (${tokens} tokens)` : ""}`, "success");
    } catch (error) {
      console.error("Error parsing CV:", error);
      showSnackbar(`Error parsing CV: ${error}`, "error");
    } finally {
      setIsProcessing(false);
      setUploadStep(0);
      pendingFileRef.current = null;
    }
  }, []);

  const handleSelectCV = useCallback((cv: ParsedCV) => {
    setSelectedCV(cv);
    setView("workspace");
  }, []);

  const handleDeleteCV = useCallback((id: string) => {
    setCvs((prev) => prev.filter((cv) => cv.id !== id));
    if (selectedCV?.id === id) {
      setSelectedCV(null);
    }
    showSnackbar("CV deleted", "info");
  }, [selectedCV]);

  const handleDuplicateCV = useCallback((cv: ParsedCV) => {
    const duplicate: ParsedCV = {
      ...cv,
      id: `cv-${Date.now()}`,
      name: `${cv.name} (Copy)`,
      uploadedAt: new Date(),
    };
    setCvs((prev) => [duplicate, ...prev]);
    showSnackbar("CV duplicated", "success");
  }, []);

  const handleUpdateCV = useCallback((updatedCV: ParsedCV) => {
    setCvs((prev) => prev.map((cv) => (cv.id === updatedCV.id ? updatedCV : cv)));
    setSelectedCV(updatedCV);
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setView("dashboard");
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar activeItem={activeMenuItem} onItemClick={handleMenuItemClick} />
      
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Header />
        
        {isProcessing && (
          <Box sx={{ p: 2 }}>
            <SteppedProgress 
              steps={UPLOAD_STEPS} 
              currentStep={uploadStep} 
              title="Processing Your CV"
              estimatedTime="Usually takes 10-30 seconds"
            />
          </Box>
        )}

        <Box sx={{ flex: 1, overflow: "auto" }}>
          {view === "dashboard" && (
            <Dashboard
              cvs={cvs}
              onUploadNew={handleUploadNew}
              onSelectCV={handleSelectCV}
              onDeleteCV={handleDeleteCV}
              onDuplicateCV={handleDuplicateCV}
            />
          )}

          {view === "workspace" && selectedCV && (
            <CVWorkspace
              cv={selectedCV}
              onBack={handleBackToDashboard}
              onUpdateCV={handleUpdateCV}
            />
          )}
        </Box>
      </Box>

      <Dialog 
        open={uploadDialogOpen} 
        onClose={() => setUploadDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Upload Your Resume
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Upload a PDF, DOCX, DOC, or TXT file to get started.
          </Typography>
          <UploadDropzone onFilesAdded={handleFilesAdded} disabled={isProcessing} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUploadDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

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
