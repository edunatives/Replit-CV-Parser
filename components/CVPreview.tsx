"use client";

import { Box, Typography, Paper, Chip, Divider, TextField, IconButton, InputAdornment, Tooltip, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
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
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import type { ParsedCV, TemplateType, CVSection } from "@/types/cv";
import { SectionRearrangeModal } from "./SectionRearrangeModal";
import { DEFAULT_SECTION_ORDER } from "@/types/cv";
import { useState, useRef, useMemo } from "react";
import { isDeveloperRole } from "@/lib/ai/rules";
import { getTemplateStyle, getTemplateOptions } from "@/lib/templates";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import DescriptionIcon from "@mui/icons-material/Description";

function PageBadge({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        py: 1,
        bgcolor: "#f5f5f5",
        borderBottom: "1px solid #e0e0e0",
      }}
      data-testid={`page-badge-${pageNumber}`}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <DescriptionIcon sx={{ fontSize: 16, color: "#757575" }} />
        <Typography variant="caption" sx={{ color: "#757575", fontWeight: 600 }}>
          Page {pageNumber} of {totalPages}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: "#9e9e9e", fontStyle: "italic" }}>
        (continued)
      </Typography>
    </Box>
  );
}

function PageBreakIndicator({ pageNumber }: { pageNumber: number }) {
  return (
    <Box
      sx={{
        width: "calc(100% + 48px)",
        mx: -3,
        my: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 1.5,
        bgcolor: "#f0f0f0",
        borderTop: "2px dashed #bdbdbd",
        borderBottom: "2px dashed #bdbdbd",
        position: "relative",
        "@media print": {
          display: "none",
          pageBreakBefore: "always",
        },
      }}
      data-testid={`page-break-${pageNumber}`}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "#fff",
          px: 2,
          py: 0.5,
          borderRadius: 1,
          border: "1px solid #e0e0e0",
        }}
      >
        <InsertPageBreakIcon sx={{ fontSize: 16, color: "#757575" }} />
        <Typography variant="caption" sx={{ color: "#757575", fontWeight: 500 }}>
          Page {pageNumber}
        </Typography>
      </Box>
    </Box>
  );
}

interface CVPreviewProps {
  cv: ParsedCV;
  template: TemplateType;
  onUpdateCV: (cv: ParsedCV) => void;
  onTemplateChange?: (template: TemplateType) => void;
}

function SectionHeader({ 
  title, 
  style, 
  rightContent 
}: { 
  title: string; 
  style: ReturnType<typeof getTemplateStyle>;
  rightContent?: React.ReactNode;
}) {
  const isUnderline = style.sectionHeaderVariant === "underline";
  const isCenteredLines = style.sectionHeaderVariant === "centeredLines";
  
  return (
    <Box sx={{ mb: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {isCenteredLines && <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />}
        <Typography 
          variant="h6" 
          sx={{ 
            color: style.accent, 
            mx: isCenteredLines ? 2 : 0, 
            fontFamily: "'Arial', sans-serif",
            textTransform: isUnderline ? "uppercase" : "none",
            fontWeight: isUnderline ? 600 : 500,
            letterSpacing: isUnderline ? "0.05em" : "normal",
          }}
        >
          {title}
        </Typography>
        {isCenteredLines && <Box sx={{ flex: 1, height: "1px", bgcolor: style.accent }} />}
        {!isCenteredLines && <Box sx={{ flex: 1 }} />}
        {rightContent}
      </Box>
      {isUnderline && (
        <Box sx={{ height: "2px", width: "100%", bgcolor: style.accent, mt: 0.5, mb: 1 }} />
      )}
    </Box>
  );
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

export function CVPreview({ cv, template, onUpdateCV, onTemplateChange }: CVPreviewProps) {
  const templateOptions = getTemplateOptions();
  const sectionOrder = cv.sectionOrder || DEFAULT_SECTION_ORDER;
  const [rearrangeModalOpen, setRearrangeModalOpen] = useState(false);

  const updateField = (field: keyof ParsedCV, value: string | string[]) => {
    onUpdateCV({ ...cv, [field]: value });
  };

  const applySectionOrder = (newOrder: CVSection[]) => {
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
      description: "",
      location: ""
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

  const style = getTemplateStyle(template);

  const showGitHub = isDeveloperRole(cv.title || "", cv.summary || "");

  const A4_WIDTH = "210mm";
  const A4_HEIGHT = "297mm";
  const A4_HEIGHT_PX = 1123; // 297mm at 96dpi
  const HEADER_HEIGHT_PX = 140;
  const PAGE_PADDING_PX = 48;
  const BOTTOM_GUTTER = 40;

  // Page item types for granular pagination
  type PageItem = 
    | { type: "summary" }
    | { type: "experience-header" }
    | { type: "experience-entry"; index: number }
    | { type: "education-header" }
    | { type: "education-entry"; index: number }
    | { type: "skills" }
    | { type: "strengths" }
    | { type: "certifications" };

  interface PageData {
    pageNumber: number;
    items: PageItem[];
    isFirstPage: boolean;
  }

  // Calculate page assignments with entry-level splitting
  const pages = useMemo((): PageData[] => {
    const AVAILABLE_FIRST = A4_HEIGHT_PX - HEADER_HEIGHT_PX - PAGE_PADDING_PX - BOTTOM_GUTTER;
    const AVAILABLE_SUBSEQUENT = A4_HEIGHT_PX - PAGE_PADDING_PX - BOTTOM_GUTTER - 40; // 40 for PageBadge

    const SECTION_HEADER = 48;
    const LINE_HEIGHT = 24;
    const CHARS_PER_LINE = 70;

    // Height estimation functions
    const estimateSummaryHeight = (): number => {
      const lines = Math.ceil((cv.summary?.length || 100) / CHARS_PER_LINE);
      return SECTION_HEADER + lines * LINE_HEIGHT + 24;
    };

    const estimateExperienceEntryHeight = (exp: typeof cv.experience[0]): number => {
      const headerHeight = 80; // Title, company, date lines
      const lines = Math.ceil((exp.description?.length || 0) / CHARS_PER_LINE);
      return headerHeight + lines * LINE_HEIGHT + 24;
    };

    const estimateEducationEntryHeight = (): number => {
      return 60; // Fixed height per education entry
    };

    const estimateSkillsHeight = (): number => {
      const count = cv.skills?.length || 0;
      const rows = Math.ceil(count / 4);
      return SECTION_HEADER + rows * 40 + 16;
    };

    const estimateStrengthsHeight = (): number => {
      const count = cv.strengths?.length || 0;
      const rows = Math.ceil(count / 3);
      return SECTION_HEADER + rows * 40 + 16;
    };

    const estimateCertificationsHeight = (): number => {
      return SECTION_HEADER + (cv.certifications?.length || 0) * 56 + 16;
    };

    const result: PageData[] = [];
    let currentItems: PageItem[] = [];
    let currentHeight = 0;
    let pageNumber = 1;

    const getAvailable = () => pageNumber === 1 ? AVAILABLE_FIRST : AVAILABLE_SUBSEQUENT;

    const pushPage = () => {
      if (currentItems.length > 0) {
        result.push({ pageNumber, items: [...currentItems], isFirstPage: pageNumber === 1 });
        pageNumber++;
        currentItems = [];
        currentHeight = 0;
      }
    };

    const addItem = (item: PageItem, height: number) => {
      if (currentHeight + height > getAvailable() && currentItems.length > 0) {
        pushPage();
      }
      currentItems.push(item);
      currentHeight += height;
    };

    // Process each section in order
    for (const section of sectionOrder) {
      switch (section) {
        case "summary": {
          const height = estimateSummaryHeight();
          addItem({ type: "summary" }, height);
          break;
        }

        case "experience": {
          if (cv.experience.length === 0) break;
          
          // Add section header
          addItem({ type: "experience-header" }, SECTION_HEADER);

          // Add each experience entry individually
          cv.experience.forEach((exp, index) => {
            const entryHeight = estimateExperienceEntryHeight(exp);
            addItem({ type: "experience-entry", index }, entryHeight);
          });
          break;
        }

        case "education": {
          if (!cv.education || cv.education.length === 0) break;

          // Add section header
          addItem({ type: "education-header" }, SECTION_HEADER);

          // Add each education entry individually
          cv.education.forEach((_, index) => {
            const entryHeight = estimateEducationEntryHeight();
            addItem({ type: "education-entry", index }, entryHeight);
          });
          break;
        }

        case "skills": {
          const height = estimateSkillsHeight();
          addItem({ type: "skills" }, height);
          break;
        }

        case "strengths": {
          const height = estimateStrengthsHeight();
          addItem({ type: "strengths" }, height);
          break;
        }

        case "certifications": {
          const height = estimateCertificationsHeight();
          addItem({ type: "certifications" }, height);
          break;
        }
      }
    }

    // Push final page
    pushPage();

    return result.length > 0 ? result : [{ pageNumber: 1, items: [], isFirstPage: true }];
  }, [cv, sectionOrder]);

  const totalPages = pages.length;

  const a4PageStyle = {
    width: A4_WIDTH,
    minHeight: A4_HEIGHT,
    maxWidth: "100%",
    bgcolor: style.bodyBg,
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    mx: "auto",
    position: "relative" as const,
    "@media print": {
      boxShadow: "none",
      margin: 0,
      pageBreakAfter: "always" as const,
    },
  };

  // Helper function to render a section
  const renderSection = (sectionName: CVSection, isLast: boolean) => {
    switch (sectionName) {
      case "summary":
        return (
          <Box key="summary" sx={{ mb: isLast ? 0 : 3, pageBreakInside: "avoid" }}>
            <SectionHeader title="Summary" style={style} />
            <Typography variant="body2" sx={{ color: style.bodyTextSecondary, whiteSpace: "pre-wrap" }} component="div">
              <EditableField 
                value={cv.summary} 
                onChange={(v) => updateField("summary", v)} 
                multiline 
                placeholder="Write a professional summary..."
              />
            </Typography>
          </Box>
        );
              
      case "experience":
        return (
          <Box key="experience" sx={{ mb: isLast ? 0 : 3, pageBreakInside: "avoid" }}>
            <SectionHeader
              title="Experience"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addExperience} sx={{ color: style.accent }} data-testid="button-add-experience">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
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
                <Typography variant="body2" sx={{ color: style.companyColor, fontWeight: 500 }}>
                  <EditableField 
                    value={exp.company} 
                    onChange={(v) => updateExperience(index, "company", v)} 
                    placeholder="Company Name"
                  />
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap", mt: 0.25 }}>
                  {style.showMetaIcons && <CalendarMonthIcon sx={{ fontSize: 14, color: style.bodyTextSecondary }} />}
                  <Typography variant="body2" sx={{ color: style.bodyTextSecondary, ml: style.showMetaIcons ? -1.5 : 0 }}>
                    <EditableField 
                      value={exp.duration} 
                      onChange={(v) => updateExperience(index, "duration", v)} 
                      placeholder="Duration"
                    />
                  </Typography>
                  {style.showMetaIcons && <LocationOnIcon sx={{ fontSize: 14, color: style.bodyTextSecondary }} />}
                  <Typography variant="body2" sx={{ color: style.bodyTextSecondary, ml: style.showMetaIcons ? -1.5 : 0 }}>
                    <EditableField 
                      value={exp.location || ""} 
                      onChange={(v) => updateExperience(index, "location", v)} 
                      placeholder="Location"
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
        );
              
      case "education":
        return (
          <Box key="education" sx={{ mb: isLast ? 0 : 3, pageBreakInside: "avoid" }}>
            <SectionHeader
              title="Education"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addEducation} sx={{ color: style.accent }} data-testid="button-add-education">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
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
        );
              
      case "skills":
        return (
          <Box key="skills" sx={{ mb: isLast ? 0 : 3, pageBreakInside: "avoid" }}>
            <SectionHeader
              title="Skills"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addSkill} sx={{ color: style.accent }} data-testid="button-add-skill">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
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
        );
              
      case "strengths":
        return (
          <Box key="strengths" sx={{ mb: isLast ? 0 : 3, pageBreakInside: "avoid" }}>
            <SectionHeader
              title="Key Strengths"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addStrength} sx={{ color: style.accent }} data-testid="button-add-strength">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
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
        );
              
      case "certifications":
        return (
          <Box key="certifications" sx={{ mb: isLast ? 0 : 3, pageBreakInside: "avoid" }}>
            <SectionHeader
              title="Certifications"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addCertification} sx={{ color: style.accent }} data-testid="button-add-certification">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
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
        );
              
      default:
        return null;
    }
  };

  // Render CV header (only on first page)
  const renderHeader = () => (
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
  );

  const handleTemplateChange = (event: SelectChangeEvent) => {
    if (onTemplateChange) {
      onTemplateChange(event.target.value as TemplateType);
    }
  };

  return (
    <Box 
      sx={{ 
        py: 2, 
        px: 2, 
        bgcolor: "#e8e8e8",
        "@media print": {
          bgcolor: "transparent",
          padding: 0,
        },
      }}
    >
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          px: 2,
          py: 1,
          mb: 2,
          bgcolor: "#fff",
          borderRadius: 1,
          maxWidth: A4_WIDTH,
          mx: "auto",
          "@media print": {
            display: "none",
          },
        }}
        data-testid="cv-toolbar"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {onTemplateChange && (
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="cv-template-label">Template</InputLabel>
              <Select
                labelId="cv-template-label"
                value={template}
                label="Template"
                onChange={handleTemplateChange}
                data-testid="select-cv-template"
              >
                {templateOptions.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<SwapVertIcon />}
            onClick={() => setRearrangeModalOpen(true)}
            sx={{ 
              textTransform: "none",
            }}
            data-testid="button-rearrange-sections"
          >
            Rearrange
          </Button>
        </Box>
      </Paper>

      {pages.map((page, pageIdx) => (
        <Paper 
          key={page.pageNumber}
          elevation={3} 
          sx={{ 
            ...a4PageStyle, 
            overflow: "visible",
            mb: pageIdx < pages.length - 1 ? 3 : 0,
          }} 
          data-testid={pageIdx === 0 ? "cv-preview" : `cv-page-${page.pageNumber}`}
        >
          {page.isFirstPage ? (
            <>
              {renderHeader()}
              <Box sx={{ p: 3, color: style.bodyText, pb: `${BOTTOM_GUTTER}px` }}>
                {page.sections.map((sectionName, idx) => 
                  renderSection(sectionName, idx === page.sections.length - 1)
                )}
              </Box>
            </>
          ) : (
            <>
              <PageBadge pageNumber={page.pageNumber} totalPages={totalPages} />
              <Box sx={{ p: 3, color: style.bodyText, pb: `${BOTTOM_GUTTER}px` }}>
                {page.sections.map((sectionName, idx) => 
                  renderSection(sectionName, idx === page.sections.length - 1)
                )}
              </Box>
            </>
          )}
        </Paper>
      ))}
      
      <SectionRearrangeModal
        open={rearrangeModalOpen}
        onClose={() => setRearrangeModalOpen(false)}
        sectionOrder={sectionOrder}
        onApply={applySectionOrder}
      />
    </Box>
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
      sx={{ 
        bgcolor: `${accentColor}30`, 
        color: accentColor, 
        border: `1px solid ${accentColor}50`,
        cursor: "pointer",
        fontWeight: 500,
        "& .MuiChip-deleteIcon": {
          color: accentColor,
          opacity: 0.7,
          "&:hover": { opacity: 1 }
        }
      }}
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
      onClick={() => {
        setTempName(cert.name);
        setTempIssuer(cert.issuer);
        setEditing(true);
      }}
      onDelete={onDelete}
      sx={{ 
        bgcolor: `${accentColor}30`, 
        color: accentColor, 
        border: `1px solid ${accentColor}50`,
        cursor: "pointer",
        fontWeight: 500,
        "& .MuiChip-deleteIcon": {
          color: accentColor,
          opacity: 0.7,
          "&:hover": { opacity: 1 }
        }
      }}
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
      onClick={() => {
        setTempValue(strength);
        setEditing(true);
      }}
      onDelete={onDelete}
      sx={{ 
        bgcolor: `${accentColor}30`, 
        color: accentColor, 
        border: `1px solid ${accentColor}50`,
        cursor: "pointer",
        fontWeight: 500,
        "& .MuiChip-deleteIcon": {
          color: accentColor,
          opacity: 0.7,
          "&:hover": { opacity: 1 }
        }
      }}
      data-testid={testId}
    />
  );
}
