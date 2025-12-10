"use client";

import { Box, Typography, Paper, Chip, Divider, TextField, IconButton, InputAdornment, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import type { ParsedCV, TemplateType, CVSection } from "@/types/cv";
import { DEFAULT_SECTION_ORDER } from "@/types/cv";
import { useState, useRef } from "react";
import { isDeveloperRole } from "@/lib/ai/rules";

interface CVPreviewProps {
  cv: ParsedCV;
  template: TemplateType;
  onUpdateCV: (cv: ParsedCV) => void;
}

function EditableField({ 
  value, 
  onChange, 
  multiline = false,
  placeholder = "(click to edit)",
  rows = 3,
  showBulletTool = false
}: { 
  value: string; 
  onChange: (v: string) => void; 
  multiline?: boolean;
  placeholder?: string;
  rows?: number;
  showBulletTool?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const insertBullet = () => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart || 0;
      const end = inputRef.current.selectionEnd || 0;
      
      const isAtLineStart = start === 0 || tempValue[start - 1] === "\n";
      
      let prefix = "";
      let cursorOffset = 2;
      
      if (!isAtLineStart) {
        prefix = "\n";
        cursorOffset = 3;
      }
      
      const newValue = tempValue.slice(0, start) + prefix + "• " + tempValue.slice(end);
      setTempValue(newValue);
      
      setTimeout(() => {
        if (inputRef.current) {
          const newPos = start + cursorOffset;
          inputRef.current.selectionStart = newPos;
          inputRef.current.selectionEnd = newPos;
          inputRef.current.focus();
        }
      }, 0);
    }
  };

  const hasChanges = tempValue !== value;

  const handleSave = () => {
    onChange(tempValue);
    setEditing(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setEditing(false);
  };

  if (editing) {
    return (
      <Box sx={{ position: "relative" }}>
        <TextField
          inputRef={inputRef}
          size="small"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={(e) => {
            const target = e.relatedTarget as HTMLElement | null;
            if (target?.getAttribute("data-action-btn") === "true") {
              return;
            }
            if (!multiline) {
              handleSave();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !multiline) {
              handleSave();
            }
            if (e.key === "Escape") {
              handleCancel();
            }
          }}
          multiline={multiline}
          rows={multiline ? rows : 1}
          autoFocus
          fullWidth
          sx={{ my: 0.5 }}
          slotProps={showBulletTool && multiline ? {
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 0.5 }}>
                  <Tooltip title="Add bullet point (new line)">
                    <IconButton
                      size="small"
                      onClick={insertBullet}
                      data-action-btn="true"
                      data-testid="button-insert-bullet"
                    >
                      <FormatListBulletedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              )
            }
          } : undefined}
        />
        {multiline && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 0.5 }}>
            <Tooltip title="Cancel">
              <IconButton 
                size="small" 
                onClick={handleCancel}
                data-action-btn="true"
                data-testid="button-cancel-edit"
                sx={{ color: "text.secondary" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title={hasChanges ? "Save changes" : "No changes"}>
              <span>
                <IconButton 
                  size="small" 
                  onClick={handleSave}
                  data-action-btn="true"
                  data-testid="button-save-edit"
                  disabled={!hasChanges}
                  sx={{ 
                    color: hasChanges ? "success.main" : "text.disabled",
                    bgcolor: hasChanges ? "success.light" : "transparent",
                    "&:hover": hasChanges ? { bgcolor: "success.main", color: "white" } : {},
                  }}
                >
                  <CheckIcon fontSize="small" />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        )}
      </Box>
    );
  }

  return (
    <Box
      onClick={() => {
        setTempValue(value);
        setEditing(true);
      }}
      sx={{
        cursor: "pointer",
        "&:hover": { bgcolor: "action.hover", borderRadius: 1 },
        p: 0.5,
        display: multiline ? "block" : "inline-flex",
        alignItems: multiline ? undefined : "center",
        gap: multiline ? undefined : 0.5,
        minWidth: 50,
        position: "relative",
      }}
    >
      <span style={{ whiteSpace: multiline ? "pre-wrap" : "normal", display: multiline ? "block" : "inline" }}>{value || placeholder}</span>
      <EditIcon sx={{ 
        fontSize: 14, 
        opacity: 0.5, 
        position: multiline ? "absolute" : "static",
        top: multiline ? 4 : undefined,
        right: multiline ? 4 : undefined,
      }} />
    </Box>
  );
}

function EditableContactField({ 
  icon: Icon, 
  value, 
  onChange,
  placeholder,
  headerText
}: { 
  icon: React.ElementType;
  value: string; 
  onChange: (v: string) => void;
  placeholder: string;
  headerText: string;
}) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  if (editing) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <Icon fontSize="small" />
        <TextField
          size="small"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={() => {
            onChange(tempValue);
            setEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChange(tempValue);
              setEditing(false);
            }
            if (e.key === "Escape") {
              setTempValue(value);
              setEditing(false);
            }
          }}
          autoFocus
          sx={{ 
            "& .MuiInputBase-input": { 
              color: headerText,
              py: 0.5,
              px: 1,
              fontSize: "0.875rem"
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.3)"
            }
          }}
        />
      </Box>
    );
  }

  return (
    <Box 
      onClick={() => {
        setTempValue(value);
        setEditing(true);
      }}
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 0.5,
        cursor: "pointer",
        "&:hover": { opacity: 0.7 },
        p: 0.5,
        borderRadius: 1,
      }}
    >
      <Icon fontSize="small" />
      <Typography variant="body2">{value || placeholder}</Typography>
      <EditIcon sx={{ fontSize: 12, opacity: 0.5 }} />
    </Box>
  );
}

export function CVPreview({ cv, template, onUpdateCV }: CVPreviewProps) {
  const sectionOrder = cv.sectionOrder || DEFAULT_SECTION_ORDER;

  const updateField = (field: keyof ParsedCV, value: string | string[]) => {
    onUpdateCV({ ...cv, [field]: value });
  };

  const moveSection = (section: CVSection, direction: "up" | "down") => {
    const currentIndex = sectionOrder.indexOf(section);
    if (currentIndex === -1) return;
    
    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= sectionOrder.length) return;
    
    const newOrder = [...sectionOrder];
    [newOrder[currentIndex], newOrder[newIndex]] = [newOrder[newIndex], newOrder[currentIndex]];
    onUpdateCV({ ...cv, sectionOrder: newOrder });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newExperience = [...cv.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    onUpdateCV({ ...cv, experience: newExperience });
  };

  const deleteExperience = (index: number) => {
    const newExperience = cv.experience.filter((_, i) => i !== index);
    onUpdateCV({ ...cv, experience: newExperience });
  };

  const addExperience = () => {
    const newExp = {
      id: `exp-new-${Date.now()}`,
      role: "New Role",
      company: "Company Name",
      duration: "",
      description: ""
    };
    onUpdateCV({ ...cv, experience: [...cv.experience, newExp] });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEducation = [...cv.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    onUpdateCV({ ...cv, education: newEducation });
  };

  const deleteEducation = (index: number) => {
    const newEducation = cv.education.filter((_, i) => i !== index);
    onUpdateCV({ ...cv, education: newEducation });
  };

  const addEducation = () => {
    const newEdu = {
      id: `edu-new-${Date.now()}`,
      degree: "Degree",
      institution: "Institution",
      year: ""
    };
    onUpdateCV({ ...cv, education: [...cv.education, newEdu] });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...cv.skills];
    newSkills[index] = value;
    onUpdateCV({ ...cv, skills: newSkills });
  };

  const deleteSkill = (index: number) => {
    const newSkills = cv.skills.filter((_, i) => i !== index);
    onUpdateCV({ ...cv, skills: newSkills });
  };

  const addSkill = () => {
    onUpdateCV({ ...cv, skills: [...cv.skills, "New Skill"] });
  };

  const updateStrength = (index: number, value: string) => {
    const newStrengths = [...(cv.strengths || [])];
    newStrengths[index] = value;
    onUpdateCV({ ...cv, strengths: newStrengths });
  };

  const deleteStrength = (index: number) => {
    const newStrengths = (cv.strengths || []).filter((_, i) => i !== index);
    onUpdateCV({ ...cv, strengths: newStrengths });
  };

  const addStrength = () => {
    onUpdateCV({ ...cv, strengths: [...(cv.strengths || []), "New Strength"] });
  };

  const updateCertification = (index: number, field: string, value: string) => {
    const newCerts = [...(cv.certifications || [])];
    newCerts[index] = { ...newCerts[index], [field]: value };
    onUpdateCV({ ...cv, certifications: newCerts });
  };

  const deleteCertification = (index: number) => {
    const newCerts = (cv.certifications || []).filter((_, i) => i !== index);
    onUpdateCV({ ...cv, certifications: newCerts });
  };

  const addCertification = () => {
    const newCert = {
      id: `cert-new-${Date.now()}`,
      name: "Certification Name",
      issuer: "",
      year: ""
    };
    onUpdateCV({ ...cv, certifications: [...(cv.certifications || []), newCert] });
  };

  const templateStyles = {
    "modern-dark": { headerBg: "#1a1a2e", accent: "#d4af37", headerText: "#ffffff", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "none", headerCentered: false },
    "classic-light": { headerBg: "#f5f5f5", accent: "#2c3e50", headerText: "#1a1a1a", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "1px solid #e0e0e0", headerCentered: false },
    "executive": { headerBg: "#0a192f", accent: "#64ffda", headerText: "#ffffff", bodyBg: "#f8f9fa", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "none", headerCentered: false },
    "minimal": { headerBg: "#ffffff", accent: "#000000", headerText: "#1a1a1a", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "2px solid #000000", headerCentered: false },
    "creative": { headerBg: "#667eea", accent: "#9b59b6", headerText: "#ffffff", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "none", headerCentered: false },
    "professional": { headerBg: "#2d3436", accent: "#74b9ff", headerText: "#ffffff", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "none", headerCentered: false },
    "corporate": { headerBg: "#d4e5ed", accent: "#1a5276", headerText: "#1a5276", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a", borderBottom: "none", headerCentered: true },
  };

  const style = templateStyles[template] || templateStyles["modern-dark"];

  const showGitHub = isDeveloperRole(cv.title || "", cv.summary || "");

  return (
    <Paper elevation={2} sx={{ overflow: "hidden", bgcolor: style.bodyBg }} data-testid="cv-preview">
      <Box sx={{ 
        bgcolor: style.headerBg, 
        py: 1.5, 
        px: 3, 
        color: style.headerText, 
        borderBottom: style.borderBottom,
        textAlign: style.headerCentered ? "center" : "left"
      }}>
        <Typography variant="h4" component="h2" sx={{ 
          fontFamily: "'Arial', sans-serif", 
          fontWeight: 600,
          display: style.headerCentered ? "block" : "inline-block"
        }}>
          <EditableField value={cv.name} onChange={(v) => updateField("name", v)} placeholder="Your Name" />
        </Typography>
        <Typography variant="subtitle1" sx={{ color: style.accent, mt: 0.25, fontWeight: 500 }}>
          <EditableField value={cv.title} onChange={(v) => updateField("title", v)} placeholder="Your Title" />
        </Typography>
        
        <Box sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 1.5, 
          mt: 1,
          justifyContent: style.headerCentered ? "center" : "flex-start"
        }}>
          <EditableContactField
            icon={EmailIcon}
            value={cv.email}
            onChange={(v) => updateField("email", v)}
            placeholder="email@example.com"
            headerText={style.headerText}
          />
          <EditableContactField
            icon={PhoneIcon}
            value={cv.phone}
            onChange={(v) => updateField("phone", v)}
            placeholder="+1 234 567 890"
            headerText={style.headerText}
          />
          <EditableContactField
            icon={LocationOnIcon}
            value={cv.location}
            onChange={(v) => updateField("location", v)}
            placeholder="City, Country"
            headerText={style.headerText}
          />
          {cv.linkedin && (
            <EditableContactField
              icon={LinkedInIcon}
              value={cv.linkedin}
              onChange={(v) => updateField("linkedin", v)}
              placeholder="linkedin.com/in/..."
              headerText={style.headerText}
            />
          )}
          {showGitHub && cv.github && (
            <EditableContactField
              icon={GitHubIcon}
              value={cv.github}
              onChange={(v) => updateField("github", v)}
              placeholder="github.com/..."
              headerText={style.headerText}
            />
          )}
          {cv.website && (
            <EditableContactField
              icon={LinkIcon}
              value={cv.website}
              onChange={(v) => updateField("website", v)}
              placeholder="yourwebsite.com"
              headerText={style.headerText}
            />
          )}
        </Box>
      </Box>

      <Box sx={{ p: 3, color: style.bodyText }}>
        <Box sx={{ mb: 3 }}>
          {style.headerCentered ? (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <Typography variant="h6" sx={{ color: style.accent, mx: 2, fontFamily: "'Arial', sans-serif" }}>
                Summary
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
            </Box>
          ) : (
            <Typography variant="h6" sx={{ color: style.accent, mb: 1, fontFamily: "'Arial', sans-serif" }}>
              Summary
            </Typography>
          )}
          <Typography variant="body2" sx={{ color: style.bodyTextSecondary, whiteSpace: "pre-wrap" }} component="div">
            <EditableField 
              value={cv.summary} 
              onChange={(v) => updateField("summary", v)} 
              multiline 
              placeholder="Write a professional summary..."
            />
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          {style.headerCentered ? (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <Typography variant="h6" sx={{ color: style.accent, mx: 2, fontFamily: "'Arial', sans-serif" }}>
                Experience
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <IconButton size="small" onClick={addExperience} sx={{ color: style.accent, ml: 1 }} data-testid="button-add-experience">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="h6" sx={{ color: style.accent, fontFamily: "'Arial', sans-serif" }}>
                Experience
              </Typography>
              <IconButton size="small" onClick={addExperience} sx={{ color: style.accent }} data-testid="button-add-experience">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
          {cv.experience.map((exp, index) => (
            <Box key={exp.id} sx={{ mb: 2, position: "relative", "&:hover .delete-btn": { visibility: "visible" } }}>
              <IconButton 
                className="delete-btn"
                size="small" 
                onClick={() => deleteExperience(index)}
                sx={{ position: "absolute", right: 0, top: 0, visibility: "hidden", color: "error.main" }}
                data-testid={`button-delete-experience-${index}`}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <Typography variant="subtitle1" fontWeight={600} sx={{ color: style.bodyText }}>
                <EditableField 
                  value={exp.role} 
                  onChange={(v) => updateExperience(index, "role", v)} 
                  placeholder="Job Title"
                />
              </Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>
                  <EditableField 
                    value={exp.company} 
                    onChange={(v) => updateExperience(index, "company", v)} 
                    placeholder="Company Name"
                  />
                </Typography>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>|</Typography>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>
                  <EditableField 
                    value={exp.duration} 
                    onChange={(v) => updateExperience(index, "duration", v)} 
                    placeholder="Duration"
                  />
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 0.5, color: style.bodyText, whiteSpace: "pre-wrap" }} component="div">
                <EditableField 
                  value={exp.description} 
                  onChange={(v) => updateExperience(index, "description", v)} 
                  multiline
                  rows={6}
                  placeholder="Describe your responsibilities and achievements..."
                  showBulletTool={true}
                />
              </Typography>
              {index < cv.experience.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
          {cv.experience.length === 0 && (
            <Typography variant="body2" sx={{ color: style.bodyTextSecondary, fontStyle: "italic" }}>
              Click + to add experience
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          {style.headerCentered ? (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <Typography variant="h6" sx={{ color: style.accent, mx: 2, fontFamily: "'Arial', sans-serif" }}>
                Education
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <IconButton size="small" onClick={addEducation} sx={{ color: style.accent, ml: 1 }} data-testid="button-add-education">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="h6" sx={{ color: style.accent, fontFamily: "'Arial', sans-serif" }}>
                Education
              </Typography>
              <IconButton size="small" onClick={addEducation} sx={{ color: style.accent }} data-testid="button-add-education">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
          {cv.education.map((edu, index) => (
            <Box key={edu.id} sx={{ mb: 1, position: "relative", "&:hover .delete-btn": { visibility: "visible" } }}>
              <IconButton 
                className="delete-btn"
                size="small" 
                onClick={() => deleteEducation(index)}
                sx={{ position: "absolute", right: 0, top: 0, visibility: "hidden", color: "error.main" }}
                data-testid={`button-delete-education-${index}`}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <Typography variant="subtitle2" fontWeight={600} sx={{ color: style.bodyText }}>
                <EditableField 
                  value={edu.degree} 
                  onChange={(v) => updateEducation(index, "degree", v)} 
                  placeholder="Degree"
                />
              </Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>
                  <EditableField 
                    value={edu.institution} 
                    onChange={(v) => updateEducation(index, "institution", v)} 
                    placeholder="Institution"
                  />
                </Typography>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>(</Typography>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>
                  <EditableField 
                    value={edu.year} 
                    onChange={(v) => updateEducation(index, "year", v)} 
                    placeholder="Year"
                  />
                </Typography>
                <Typography variant="body2" sx={{ color: style.bodyTextSecondary }}>)</Typography>
              </Box>
            </Box>
          ))}
          {cv.education.length === 0 && (
            <Typography variant="body2" sx={{ color: style.bodyTextSecondary, fontStyle: "italic" }}>
              Click + to add education
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          {style.headerCentered ? (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <Typography variant="h6" sx={{ color: style.accent, mx: 2, fontFamily: "'Arial', sans-serif" }}>
                Skills
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <IconButton size="small" onClick={addSkill} sx={{ color: style.accent, ml: 1 }} data-testid="button-add-skill">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="h6" sx={{ color: style.accent, fontFamily: "'Arial', sans-serif" }}>
                Skills
              </Typography>
              <IconButton size="small" onClick={addSkill} sx={{ color: style.accent }} data-testid="button-add-skill">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {cv.skills.map((skill, index) => (
              <EditableSkillChip
                key={index}
                skill={skill}
                accentColor={style.accent}
                onUpdate={(v) => updateSkill(index, v)}
                onDelete={() => deleteSkill(index)}
                testId={`skill-${index}`}
              />
            ))}
          </Box>
          {cv.skills.length === 0 && (
            <Typography variant="body2" sx={{ color: style.bodyTextSecondary, fontStyle: "italic" }}>
              Click + to add skills
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          {style.headerCentered ? (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <Typography variant="h6" sx={{ color: style.accent, mx: 2, fontFamily: "'Arial', sans-serif" }}>
                Key Strengths
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <IconButton size="small" onClick={addStrength} sx={{ color: style.accent, ml: 1 }} data-testid="button-add-strength">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="h6" sx={{ color: style.accent, fontFamily: "'Arial', sans-serif" }}>
                Key Strengths
              </Typography>
              <IconButton size="small" onClick={addStrength} sx={{ color: style.accent }} data-testid="button-add-strength">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {(cv.strengths || []).map((strength, index) => (
              <EditableStrengthChip
                key={index}
                strength={strength}
                accentColor={style.accent}
                onUpdate={(v) => updateStrength(index, v)}
                onDelete={() => deleteStrength(index)}
                testId={`strength-${index}`}
              />
            ))}
          </Box>
          {(!cv.strengths || cv.strengths.length === 0) && (
            <Typography variant="body2" sx={{ color: style.bodyTextSecondary, fontStyle: "italic" }}>
              Click + to add strengths
            </Typography>
          )}
        </Box>

        <Box>
          {style.headerCentered ? (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <Typography variant="h6" sx={{ color: style.accent, mx: 2, fontFamily: "'Arial', sans-serif" }}>
                Certifications
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />
              <IconButton size="small" onClick={addCertification} sx={{ color: style.accent, ml: 1 }} data-testid="button-add-certification">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="h6" sx={{ color: style.accent, fontFamily: "'Arial', sans-serif" }}>
                Certifications
              </Typography>
              <IconButton size="small" onClick={addCertification} sx={{ color: style.accent }} data-testid="button-add-certification">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {(cv.certifications || []).map((cert, index) => (
              <EditableCertChip
                key={cert.id}
                cert={cert}
                accentColor={style.accent}
                bodyText={style.bodyText}
                onUpdateName={(v) => updateCertification(index, "name", v)}
                onUpdateIssuer={(v) => updateCertification(index, "issuer", v)}
                onDelete={() => deleteCertification(index)}
                testId={`cert-${index}`}
              />
            ))}
          </Box>
          {(!cv.certifications || cv.certifications.length === 0) && (
            <Typography variant="body2" sx={{ color: style.bodyTextSecondary, fontStyle: "italic" }}>
              Click + to add certifications
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
}

function EditableSkillChip({ 
  skill, 
  accentColor, 
  onUpdate, 
  onDelete,
  testId
}: { 
  skill: string; 
  accentColor: string; 
  onUpdate: (v: string) => void; 
  onDelete: () => void;
  testId: string;
}) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(skill);

  if (editing) {
    return (
      <TextField
        size="small"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={() => {
          if (tempValue.trim()) {
            onUpdate(tempValue);
          }
          setEditing(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (tempValue.trim()) {
              onUpdate(tempValue);
            }
            setEditing(false);
          }
          if (e.key === "Escape") {
            setTempValue(skill);
            setEditing(false);
          }
        }}
        autoFocus
        sx={{ width: 120 }}
      />
    );
  }

  return (
    <Chip
      label={skill}
      size="small"
      onClick={() => {
        setTempValue(skill);
        setEditing(true);
      }}
      onDelete={onDelete}
      sx={{ bgcolor: accentColor, color: "#ffffff", cursor: "pointer" }}
      data-testid={testId}
    />
  );
}

function EditableCertChip({ 
  cert, 
  accentColor, 
  bodyText,
  onUpdateName, 
  onUpdateIssuer,
  onDelete,
  testId
}: { 
  cert: { name: string; issuer: string };
  accentColor: string; 
  bodyText: string;
  onUpdateName: (v: string) => void; 
  onUpdateIssuer: (v: string) => void;
  onDelete: () => void;
  testId: string;
}) {
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(cert.name);
  const [tempIssuer, setTempIssuer] = useState(cert.issuer);

  if (editing) {
    return (
      <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
        <TextField
          size="small"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          placeholder="Cert name"
          sx={{ width: 120 }}
        />
        <TextField
          size="small"
          value={tempIssuer}
          onChange={(e) => setTempIssuer(e.target.value)}
          placeholder="Issuer"
          sx={{ width: 100 }}
          onBlur={() => {
            if (tempName.trim()) {
              onUpdateName(tempName);
              onUpdateIssuer(tempIssuer);
            }
            setEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (tempName.trim()) {
                onUpdateName(tempName);
                onUpdateIssuer(tempIssuer);
              }
              setEditing(false);
            }
            if (e.key === "Escape") {
              setTempName(cert.name);
              setTempIssuer(cert.issuer);
              setEditing(false);
            }
          }}
        />
      </Box>
    );
  }

  return (
    <Chip
      label={cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name}
      size="small"
      variant="outlined"
      onClick={() => {
        setTempName(cert.name);
        setTempIssuer(cert.issuer);
        setEditing(true);
      }}
      onDelete={onDelete}
      sx={{ borderColor: accentColor, color: bodyText, cursor: "pointer" }}
      data-testid={testId}
    />
  );
}

function EditableStrengthChip({ 
  strength, 
  accentColor, 
  onUpdate, 
  onDelete,
  testId
}: { 
  strength: string; 
  accentColor: string; 
  onUpdate: (v: string) => void; 
  onDelete: () => void;
  testId: string;
}) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(strength);

  if (editing) {
    return (
      <TextField
        size="small"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={() => {
          if (tempValue.trim()) {
            onUpdate(tempValue);
          }
          setEditing(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (tempValue.trim()) {
              onUpdate(tempValue);
            }
            setEditing(false);
          }
          if (e.key === "Escape") {
            setTempValue(strength);
            setEditing(false);
          }
        }}
        autoFocus
        sx={{ width: 180 }}
      />
    );
  }

  return (
    <Chip
      label={strength}
      size="small"
      variant="outlined"
      onClick={() => {
        setTempValue(strength);
        setEditing(true);
      }}
      onDelete={onDelete}
      sx={{ borderColor: accentColor, color: accentColor, cursor: "pointer" }}
      data-testid={testId}
    />
  );
}
