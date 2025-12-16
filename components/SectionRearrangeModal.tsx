"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import LockIcon from "@mui/icons-material/Lock";
import type { CVSection } from "@/types/cv";

interface SectionRearrangeModalProps {
  open: boolean;
  onClose: () => void;
  sectionOrder: CVSection[];
  onApply: (newOrder: CVSection[]) => void;
}

const SECTION_LABELS: Record<CVSection, string> = {
  summary: "Summary",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  certifications: "Certifications",
  strengths: "Key Strengths",
  projects: "Featured Projects",
};

export function SectionRearrangeModal({
  open,
  onClose,
  sectionOrder,
  onApply,
}: SectionRearrangeModalProps) {
  const [order, setOrder] = useState<CVSection[]>(sectionOrder);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      setOrder(sectionOrder);
    }
  }, [open, sectionOrder]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragEnd = () => {
    if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
      const newOrder = [...order];
      const [removed] = newOrder.splice(draggedIndex, 1);
      newOrder.splice(dragOverIndex, 0, removed);
      setOrder(newOrder);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleApply = () => {
    onApply(order);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
      }}
    >
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pb: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          Hold & Drag the boxes to rearrange the sections
        </Typography>
        <IconButton onClick={handleClose} size="small" data-testid="button-close-rearrange">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 2 }}>
        <Paper 
          variant="outlined" 
          sx={{ 
            p: 2, 
            bgcolor: "grey.50",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              p: 1.5,
              mb: 1,
              bgcolor: "#e3e8f0",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              opacity: 0.7,
            }}
          >
            <LockIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" fontWeight={500} color="text.secondary">
              Header (Name & Contact)
            </Typography>
          </Box>

          {order.map((section, index) => (
            <Box
              key={section}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              onDragLeave={handleDragLeave}
              data-testid={`draggable-section-${section}`}
              sx={{
                p: 1.5,
                mb: 1,
                bgcolor: dragOverIndex === index ? "primary.light" : "#e3e8f0",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "grab",
                transition: "all 0.15s ease",
                transform: draggedIndex === index ? "scale(1.02)" : "scale(1)",
                boxShadow: draggedIndex === index ? 2 : 0,
                opacity: draggedIndex === index ? 0.8 : 1,
                "&:hover": {
                  bgcolor: "#d5dce8",
                },
                "&:active": {
                  cursor: "grabbing",
                },
              }}
            >
              <DragIndicatorIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              <Typography variant="body2" fontWeight={500}>
                {SECTION_LABELS[section]}
              </Typography>
            </Box>
          ))}
        </Paper>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleApply}
          fullWidth
          sx={{ 
            textTransform: "none",
            fontWeight: 600,
            py: 1.2,
          }}
          data-testid="button-apply-rearrange"
        >
          Apply Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
