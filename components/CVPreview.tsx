"use client";

import { Box, Typography, Paper, Chip, Divider, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import type { ParsedCV, TemplateType } from "@/types/cv";
import { useState } from "react";

interface CVPreviewProps {
  cv: ParsedCV;
  template: TemplateType;
  onUpdateCV: (cv: ParsedCV) => void;
}

function EditableField({ value, onChange, multiline = false }: { value: string; onChange: (v: string) => void; multiline?: boolean }) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  if (editing) {
    return (
      <TextField
        size="small"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={() => {
          onChange(tempValue);
          setEditing(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !multiline) {
            onChange(tempValue);
            setEditing(false);
          }
        }}
        multiline={multiline}
        rows={multiline ? 3 : 1}
        autoFocus
        fullWidth
        sx={{ my: 0.5 }}
      />
    );
  }

  return (
    <Box
      onClick={() => setEditing(true)}
      sx={{
        cursor: "pointer",
        "&:hover": { bgcolor: "action.hover", borderRadius: 1 },
        p: 0.5,
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <span>{value || "(click to edit)"}</span>
      <EditIcon sx={{ fontSize: 14, opacity: 0.5 }} />
    </Box>
  );
}

export function CVPreview({ cv, template, onUpdateCV }: CVPreviewProps) {
  const updateField = (field: keyof ParsedCV, value: string) => {
    onUpdateCV({ ...cv, [field]: value });
  };

  const templateStyles = {
    "modern-dark": { headerBg: "#1a1a2e", accent: "#d4af37" },
    "classic-light": { headerBg: "#f5f5f5", accent: "#2c3e50" },
    "executive": { headerBg: "#0a192f", accent: "#64ffda" },
    "minimal": { headerBg: "#ffffff", accent: "#000000" },
    "creative": { headerBg: "#667eea", accent: "#f093fb" },
    "professional": { headerBg: "#2d3436", accent: "#74b9ff" },
  };

  const style = templateStyles[template] || templateStyles["modern-dark"];

  return (
    <Paper elevation={2} sx={{ overflow: "hidden" }} data-testid="cv-preview">
      <Box sx={{ bgcolor: style.headerBg, p: 3, color: "white" }}>
        <Typography variant="h4" component="h2" sx={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
          <EditableField value={cv.name} onChange={(v) => updateField("name", v)} />
        </Typography>
        <Typography variant="h6" sx={{ color: style.accent, mt: 0.5 }}>
          <EditableField value={cv.title} onChange={(v) => updateField("title", v)} />
        </Typography>
        
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
          {cv.email && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">{cv.email}</Typography>
            </Box>
          )}
          {cv.phone && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">{cv.phone}</Typography>
            </Box>
          )}
          {cv.location && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">{cv.location}</Typography>
            </Box>
          )}
          {cv.linkedin && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LinkedInIcon fontSize="small" />
              <Typography variant="body2">{cv.linkedin}</Typography>
            </Box>
          )}
          {cv.github && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GitHubIcon fontSize="small" />
              <Typography variant="body2">{cv.github}</Typography>
            </Box>
          )}
          {cv.website && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LinkIcon fontSize="small" />
              <Typography variant="body2">{cv.website}</Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        {cv.summary && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: style.accent, mb: 1, fontFamily: "'Cormorant Garamond', serif" }}>
              Summary
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <EditableField value={cv.summary} onChange={(v) => updateField("summary", v)} multiline />
            </Typography>
          </Box>
        )}

        {cv.experience.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: style.accent, mb: 1, fontFamily: "'Cormorant Garamond', serif" }}>
              Experience
            </Typography>
            {cv.experience.map((exp, index) => (
              <Box key={exp.id} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.company} {exp.duration && `| ${exp.duration}`}
                </Typography>
                {exp.description && (
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {exp.description}
                  </Typography>
                )}
                {index < cv.experience.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </Box>
        )}

        {cv.education.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: style.accent, mb: 1, fontFamily: "'Cormorant Garamond', serif" }}>
              Education
            </Typography>
            {cv.education.map((edu) => (
              <Box key={edu.id} sx={{ mb: 1 }}>
                <Typography variant="subtitle2" fontWeight={600}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.institution} {edu.year && `(${edu.year})`}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {cv.skills.length > 0 && (
          <Box>
            <Typography variant="h6" sx={{ color: style.accent, mb: 1, fontFamily: "'Cormorant Garamond', serif" }}>
              Skills
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cv.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  sx={{ bgcolor: style.accent, color: style.headerBg }}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
