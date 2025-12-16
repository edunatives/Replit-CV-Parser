"use client";

import { Box, Typography, Paper, Chip, Divider, TextField, IconButton, InputAdornment, Tooltip, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Popover } from "@mui/material";
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
import PaletteIcon from "@mui/icons-material/Palette";
import type { ParsedCV, TemplateType, CVSection, ColorScheme } from "@/types/cv";
import { SectionRearrangeModal } from "./SectionRearrangeModal";
import { DEFAULT_SECTION_ORDER, STUDENT_SECTION_ORDER, COLOR_SCHEME_PRESETS } from "@/types/cv";
import { useState, useRef, useMemo } from "react";
import { isDeveloperRole } from "@/lib/ai/rules";
import { getTemplateStyle, getTemplateOptions } from "@/lib/templates";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import DescriptionIcon from "@mui/icons-material/Description";
import { LineEditor } from "./LineEditor";

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
  showToolbar?: boolean;
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
  const isLeftBorder = style.sectionHeaderVariant === "leftBorder";
  
  if (isLeftBorder) {
    return (
      <Box sx={{ mb: 1.5, mt: 0.5 }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center",
          borderLeft: `4px solid ${style.accent}`,
          pl: 1.5,
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: style.accent, 
              fontFamily: "'Arial', sans-serif",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.05em",
              fontSize: "1rem",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flex: 1 }} />
          {rightContent}
        </Box>
      </Box>
    );
  }
  
  return (
    <Box sx={{ mb: 1, mt: 0.5 }}>
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
  showBulletTool = false,
  enableLineDelete = false
}: { 
  value: string; 
  onChange: (v: string) => void; 
  multiline?: boolean;
  placeholder?: string;
  rows?: number;
  showBulletTool?: boolean;
  enableLineDelete?: boolean;
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
      <Box sx={{ 
        position: "relative",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        bgcolor: "background.paper",
        overflow: "hidden",
      }}>
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
          sx={{ 
            "& .MuiInputBase-input": { fontSize: "0.8rem" },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        />
        {multiline && (
          <Box sx={{ 
            display: "flex", 
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            py: 0.5,
            borderTop: "1px solid",
            borderColor: "divider",
            bgcolor: "action.hover",
          }}>
            {showBulletTool ? (
              <Tooltip title="Add bullet point">
                <IconButton
                  size="small"
                  onClick={insertBullet}
                  data-action-btn="true"
                  data-testid="button-insert-bullet"
                  sx={{ color: "text.secondary" }}
                >
                  <FormatListBulletedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            ) : <Box />}
            <Box sx={{ display: "flex", gap: 0.5 }}>
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
          </Box>
        )}
      </Box>
    );
  }

  if (multiline && enableLineDelete) {
    return (
      <Box sx={{ position: "relative", "&:hover .edit-btn": { visibility: "visible" } }}>
        <LineEditor 
          value={value} 
          onChange={onChange}
          placeholder={placeholder}
        />
        <Tooltip title="Edit full text with bullet tool">
          <IconButton
            className="edit-btn"
            size="small"
            onClick={() => {
              setTempValue(value);
              setEditing(true);
            }}
            sx={{ 
              position: "absolute", 
              top: -4, 
              right: -4,
              visibility: "hidden",
              color: "text.secondary",
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": { bgcolor: "action.hover" },
            }}
            data-testid="button-edit-full-text"
          >
            <FormatListBulletedIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Tooltip>
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
        <Icon sx={{ fontSize: 14 }} />
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
              fontSize: "0.8125rem"
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
      <Icon sx={{ fontSize: 14 }} />
      <Typography variant="body2" sx={{ fontSize: "0.8125rem" }}>{value || placeholder}</Typography>
    </Box>
  );
}

export function CVPreview({ cv, template, onUpdateCV, onTemplateChange, showToolbar = true }: CVPreviewProps) {
  const templateOptions = getTemplateOptions();
  // Student template ALWAYS enforces education-first order
  const sectionOrder = template === "student-modern" 
    ? STUDENT_SECTION_ORDER 
    : (cv.sectionOrder || DEFAULT_SECTION_ORDER);
  const [rearrangeModalOpen, setRearrangeModalOpen] = useState(false);
  const [colorAnchorEl, setColorAnchorEl] = useState<HTMLElement | null>(null);
  const [customPrimary, setCustomPrimary] = useState(cv.colorScheme?.primary || "#1b4f72");
  const [customSecondary, setCustomSecondary] = useState(cv.colorScheme?.secondary || "#2874a6");

  const updateField = (field: keyof ParsedCV, value: string | string[]) => {
    onUpdateCV({ ...cv, [field]: value });
  };

  const applySectionOrder = (newOrder: CVSection[]) => {
    onUpdateCV({ ...cv, sectionOrder: newOrder });
  };

  const applyColorScheme = (scheme: ColorScheme) => {
    onUpdateCV({ ...cv, colorScheme: scheme });
    setColorAnchorEl(null);
  };

  const applyCustomColors = () => {
    const customScheme: ColorScheme = {
      id: "custom",
      name: "Custom",
      primary: customPrimary,
      secondary: customSecondary,
    };
    onUpdateCV({ ...cv, colorScheme: customScheme });
    setColorAnchorEl(null);
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

  const updateProject = (index: number, field: string, value: string | string[]) => {
    const newProjects = [...(cv.projects || [])];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onUpdateCV({ ...cv, projects: newProjects });
  };

  const deleteProject = (index: number) => {
    const newProjects = (cv.projects || []).filter((_, i) => i !== index);
    onUpdateCV({ ...cv, projects: newProjects });
  };

  const addProject = () => {
    const newProject = {
      id: `proj-new-${Date.now()}`,
      title: "Project Title",
      role: "",
      description: "Project description",
      technologies: ["Tech1", "Tech2"],
      impact: []
    };
    onUpdateCV({ ...cv, projects: [...(cv.projects || []), newProject] });
  };

  const addProjectTech = (projectIndex: number, tech: string) => {
    const newProjects = [...(cv.projects || [])];
    const project = newProjects[projectIndex];
    if (project) {
      newProjects[projectIndex] = {
        ...project,
        technologies: [...(project.technologies || []), tech]
      };
      onUpdateCV({ ...cv, projects: newProjects });
    }
  };

  const removeProjectTech = (projectIndex: number, techIndex: number) => {
    const newProjects = [...(cv.projects || [])];
    const project = newProjects[projectIndex];
    if (project) {
      newProjects[projectIndex] = {
        ...project,
        technologies: (project.technologies || []).filter((_, i) => i !== techIndex)
      };
      onUpdateCV({ ...cv, projects: newProjects });
    }
  };

  const updateProjectTech = (projectIndex: number, techIndex: number, value: string) => {
    const newProjects = [...(cv.projects || [])];
    const project = newProjects[projectIndex];
    if (project) {
      const newTechs = [...(project.technologies || [])];
      newTechs[techIndex] = value;
      newProjects[projectIndex] = { ...project, technologies: newTechs };
      onUpdateCV({ ...cv, projects: newProjects });
    }
  };

  const baseStyle = getTemplateStyle(template);
  
  // Merge CV colorScheme with template defaults
  const effectiveColors = {
    primary: cv.colorScheme?.primary || baseStyle.accent,
    secondary: cv.colorScheme?.secondary || baseStyle.companyColor,
  };
  
  // Create merged style with effective colors
  const style = {
    ...baseStyle,
    accent: effectiveColors.primary,
    headerText: baseStyle.headerBg === "#ffffff" ? effectiveColors.primary : baseStyle.headerText,
    companyColor: effectiveColors.secondary,
  };

  const showGitHub = isDeveloperRole(cv.title || "", cv.summary || "");

  const A4_WIDTH = "210mm";
  const A4_HEIGHT = "297mm";
  const A4_HEIGHT_PX = 1123; // 297mm at 96dpi
  const HEADER_HEIGHT_PX = 118; // Empirically measured header with contact info
  const PAGE_PADDING_PX = 24; // p: 3 = 24px padding
  const BOTTOM_GUTTER = 16; // Safety buffer for page breaks

  // Page item types for granular pagination
  type PageItem = 
    | { type: "summary" }
    | { type: "experience-header"; continued?: boolean }
    | { type: "experience-entry"; index: number }
    | { type: "education-header"; continued?: boolean }
    | { type: "education-entry"; index: number }
    | { type: "skills" }
    | { type: "strengths" }
    | { type: "certifications" }
    | { type: "projects-header"; continued?: boolean }
    | { type: "project-entry"; index: number };

  interface PageData {
    pageNumber: number;
    items: PageItem[];
    isFirstPage: boolean;
  }

  // Calculate page assignments with entry-level splitting
  const pages = useMemo((): PageData[] => {
    const AVAILABLE_FIRST = A4_HEIGHT_PX - HEADER_HEIGHT_PX - PAGE_PADDING_PX * 2 - BOTTOM_GUTTER;
    const AVAILABLE_SUBSEQUENT = A4_HEIGHT_PX - PAGE_PADDING_PX * 2 - BOTTOM_GUTTER - 32; // 32 for PageBadge

    const SECTION_HEADER = 40; // Empirically measured section header with margin
    const LINE_HEIGHT = 20; // Standard line height for body text
    const CHARS_PER_LINE = 78; // Accurate chars per line at A4 width

    // Height estimation functions - balanced estimates for proper pagination
    const estimateSummaryHeight = (): number => {
      const text = cv.summary || "";
      const lines = Math.ceil(text.length / CHARS_PER_LINE);
      // Account for boxed summary padding if applicable
      const boxPadding = style.summaryBoxed ? 24 : 0;
      return SECTION_HEADER + lines * LINE_HEIGHT + boxPadding + 12;
    };

    const estimateExperienceEntryHeight = (exp: typeof cv.experience[0]): number => {
      const headerHeight = 64; // Title, company, date lines
      const desc = exp.description || "";
      // Count actual newlines for bullet points
      const bulletLines = (desc.match(/\n/g) || []).length + 1;
      const textLines = Math.ceil(desc.length / CHARS_PER_LINE);
      const lines = Math.max(bulletLines, textLines); // Use larger estimate for safety
      return headerHeight + lines * LINE_HEIGHT + 12;
    };

    const estimateEducationEntryHeight = (): number => {
      return 52; // Height per education entry
    };

    const estimateSkillsHeight = (): number => {
      const count = cv.skills?.length || 0;
      // Chips: ~8 skills per row at 28px height per row
      const rows = Math.ceil(count / 8);
      return SECTION_HEADER + rows * 28 + 16;
    };

    const estimateStrengthsHeight = (): number => {
      const count = cv.strengths?.length || 0;
      const rows = Math.ceil(count / 6);
      return SECTION_HEADER + rows * 28 + 16;
    };

    const estimateProjectEntryHeight = (project: { title: string; description: string; technologies?: string[] }): number => {
      const headerHeight = 48; // Title and role line
      const desc = project.description || "";
      const textLines = Math.ceil(desc.length / CHARS_PER_LINE);
      const techCount = project.technologies?.length || 0;
      const techRows = Math.ceil(techCount / 6); // ~6 tech badges per row
      return headerHeight + textLines * LINE_HEIGHT + techRows * 28 + 16;
    };

    const estimateCertificationsHeight = (): number => {
      // Certifications as chips, ~4 per row
      const count = cv.certifications?.length || 0;
      const rows = Math.ceil(count / 4);
      return SECTION_HEADER + rows * 28 + 16;
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
          
          // Track if any entry has been rendered (for continuation logic)
          let experienceEntryRendered = false;

          cv.experience.forEach((exp, index) => {
            const entryHeight = estimateExperienceEntryHeight(exp);
            const headerHeight = SECTION_HEADER;
            
            if (index === 0) {
              // First entry: header + entry must stay together
              const combined = headerHeight + entryHeight;
              if (currentHeight + combined > getAvailable() && currentItems.length > 0) {
                pushPage();
              }
              currentItems.push({ type: "experience-header", continued: false });
              currentItems.push({ type: "experience-entry", index });
              currentHeight += combined;
              experienceEntryRendered = true;
            } else {
              // Subsequent entries: may break to new page with continuation header
              // Calculate if we need a page break
              if (currentHeight + entryHeight > getAvailable() && currentItems.length > 0) {
                pushPage();
                // Add continuation header + entry together (keep header with at least one entry)
                const combined = headerHeight + entryHeight;
                // If combined doesn't fit on fresh page, just add entry alone (shouldn't happen in practice)
                if (combined <= getAvailable()) {
                  currentItems.push({ type: "experience-header", continued: true });
                  currentItems.push({ type: "experience-entry", index });
                  currentHeight += combined;
                } else {
                  // Entry alone is too tall for a page, just add it
                  currentItems.push({ type: "experience-entry", index });
                  currentHeight += entryHeight;
                }
              } else {
                currentItems.push({ type: "experience-entry", index });
                currentHeight += entryHeight;
              }
              experienceEntryRendered = true;
            }
          });
          break;
        }

        case "education": {
          if (!cv.education || cv.education.length === 0) break;

          cv.education.forEach((_, index) => {
            const entryHeight = estimateEducationEntryHeight();
            const headerHeight = SECTION_HEADER;
            
            if (index === 0) {
              // First entry: header + entry must stay together
              const combined = headerHeight + entryHeight;
              if (currentHeight + combined > getAvailable() && currentItems.length > 0) {
                pushPage();
              }
              currentItems.push({ type: "education-header", continued: false });
              currentItems.push({ type: "education-entry", index });
              currentHeight += combined;
            } else {
              // Subsequent entries: may break to new page with continuation header
              if (currentHeight + entryHeight > getAvailable() && currentItems.length > 0) {
                pushPage();
                // Add continuation header + entry together (keep header with at least one entry)
                const combined = headerHeight + entryHeight;
                if (combined <= getAvailable()) {
                  currentItems.push({ type: "education-header", continued: true });
                  currentItems.push({ type: "education-entry", index });
                  currentHeight += combined;
                } else {
                  currentItems.push({ type: "education-entry", index });
                  currentHeight += entryHeight;
                }
              } else {
                currentItems.push({ type: "education-entry", index });
                currentHeight += entryHeight;
              }
            }
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

        case "projects": {
          if (!cv.projects || cv.projects.length === 0) break;
          
          cv.projects.forEach((project, index) => {
            const entryHeight = estimateProjectEntryHeight(project);
            const headerHeight = SECTION_HEADER;
            
            if (index === 0) {
              const combined = headerHeight + entryHeight;
              if (currentHeight + combined > getAvailable() && currentItems.length > 0) {
                pushPage();
              }
              currentItems.push({ type: "projects-header", continued: false });
              currentItems.push({ type: "project-entry", index });
              currentHeight += combined;
            } else {
              if (currentHeight + entryHeight > getAvailable() && currentItems.length > 0) {
                pushPage();
                const combined = headerHeight + entryHeight;
                if (combined <= getAvailable()) {
                  currentItems.push({ type: "projects-header", continued: true });
                  currentItems.push({ type: "project-entry", index });
                  currentHeight += combined;
                } else {
                  currentItems.push({ type: "project-entry", index });
                  currentHeight += entryHeight;
                }
              } else {
                currentItems.push({ type: "project-entry", index });
                currentHeight += entryHeight;
              }
            }
          });
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
    ml: 0,
    position: "relative" as const,
    "@media print": {
      boxShadow: "none",
      margin: 0,
      pageBreakAfter: "always" as const,
    },
  };

  // Render individual experience entry
  const renderExperienceEntry = (index: number, isLast: boolean) => {
    const exp = cv.experience[index];
    if (!exp) return null;
    
    return (
      <Box key={`exp-${exp.id}`} sx={{ mb: isLast ? 0 : 2, position: "relative", "&:hover .delete-btn": { visibility: "visible" } }}>
        <IconButton 
          className="delete-btn"
          size="small" 
          onClick={() => deleteExperience(index)}
          sx={{ position: "absolute", right: 0, top: 0, visibility: "hidden", color: "error.main" }}
          data-testid={`button-delete-experience-${index}`}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle1" fontWeight={600} sx={{ color: style.bodyText, lineHeight: 1.2 }} component="div">
          <EditableField 
            value={exp.role} 
            onChange={(v) => updateExperience(index, "role", v)} 
            placeholder="Job Title"
          />
        </Typography>
        <Typography variant="body2" sx={{ color: style.companyColor, fontWeight: 700, lineHeight: 1.2, mt: 0 }} component="div">
          <EditableField 
            value={exp.company} 
            onChange={(v) => updateExperience(index, "company", v)} 
            placeholder="Company Name"
          />
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", flexWrap: "wrap", mt: 0 }}>
          {style.showMetaIcons && <CalendarMonthIcon sx={{ fontSize: 12, color: style.bodyTextSecondary }} />}
          <Typography variant="caption" sx={{ color: style.bodyTextSecondary, ml: style.showMetaIcons ? -1 : 0, fontSize: "0.75rem" }} component="span">
            <EditableField 
              value={exp.duration} 
              onChange={(v) => updateExperience(index, "duration", v)} 
              placeholder="Duration"
            />
          </Typography>
          {style.showMetaIcons && <LocationOnIcon sx={{ fontSize: 12, color: style.bodyTextSecondary }} />}
          <Typography variant="caption" sx={{ color: style.bodyTextSecondary, ml: style.showMetaIcons ? -1 : 0, fontSize: "0.75rem" }} component="span">
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
            enableLineDelete={true}
          />
        </Typography>
        {!isLast && <Divider sx={{ mt: 2 }} />}
      </Box>
    );
  };

  // Render individual education entry
  const renderEducationEntry = (index: number, isLast: boolean) => {
    const edu = cv.education?.[index];
    if (!edu) return null;

    return (
      <Box key={`edu-${edu.id}`} sx={{ mb: isLast ? 0 : 1, position: "relative", "&:hover .delete-btn": { visibility: "visible" } }}>
        <IconButton 
          className="delete-btn"
          size="small" 
          onClick={() => deleteEducation(index)}
          sx={{ position: "absolute", right: 0, top: 0, visibility: "hidden", color: "error.main" }}
          data-testid={`button-delete-education-${index}`}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle2" fontWeight={600} sx={{ color: style.bodyText }} component="div">
          <EditableField 
            value={edu.degree} 
            onChange={(v) => updateEducation(index, "degree", v)} 
            placeholder="Degree"
          />
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
          <Typography variant="body2" sx={{ color: style.bodyTextSecondary }} component="span">
            <EditableField 
              value={edu.institution} 
              onChange={(v) => updateEducation(index, "institution", v)} 
              placeholder="Institution"
            />
          </Typography>
          <Typography variant="body2" sx={{ color: style.bodyTextSecondary }} component="span">|</Typography>
          <Typography variant="body2" sx={{ color: style.bodyTextSecondary }} component="span">
            <EditableField 
              value={edu.year} 
              onChange={(v) => updateEducation(index, "year", v)} 
              placeholder="Year"
            />
          </Typography>
        </Box>
      </Box>
    );
  };

  // Helper function to render a page item
  const renderItem = (item: PageItem, isLast: boolean, pageItems: PageItem[]) => {
    switch (item.type) {
      case "summary":
        return (
          <Box key="summary" sx={{ mb: isLast ? 0 : 2 }}>
            <SectionHeader title="Summary" style={style} />
            <Box sx={style.summaryBoxed ? {
              border: "1px solid rgba(27, 79, 114, 0.15)",
              borderLeft: `3px solid ${style.accent}`,
              bgcolor: "rgba(27, 79, 114, 0.04)",
              p: 2,
              borderRadius: "0 4px 4px 0",
            } : {}}>
              <Typography variant="body2" sx={{ color: style.bodyText, whiteSpace: "pre-wrap", lineHeight: 1.6 }} component="div">
                <EditableField 
                  value={cv.summary} 
                  onChange={(v) => updateField("summary", v)} 
                  multiline 
                  rows={6}
                  placeholder="Write a professional summary..."
                  showBulletTool={true}
                  enableLineDelete={true}
                />
              </Typography>
            </Box>
          </Box>
        );

      case "experience-header": {
        return (
          <Box key="experience-header" sx={{ mb: 1 }}>
            <SectionHeader
              title={item.continued ? "Experience (continued)" : "Experience"}
              style={style}
              rightContent={
                !item.continued ? (
                  <IconButton size="small" onClick={addExperience} sx={{ color: style.accent }} data-testid="button-add-experience">
                    <AddIcon fontSize="small" />
                  </IconButton>
                ) : undefined
              }
            />
          </Box>
        );
      }

      case "experience-entry": {
        const isLastExp = isLast || 
          (pageItems.findIndex(i => i === item) === pageItems.length - 1) ||
          (pageItems[pageItems.findIndex(i => i === item) + 1]?.type !== "experience-entry");
        return renderExperienceEntry(item.index, isLastExp);
      }

      case "education-header": {
        return (
          <Box key="education-header" sx={{ mb: 1 }}>
            <SectionHeader
              title={item.continued ? "Education (continued)" : "Education"}
              style={style}
              rightContent={
                !item.continued ? (
                  <IconButton size="small" onClick={addEducation} sx={{ color: style.accent }} data-testid="button-add-education">
                    <AddIcon fontSize="small" />
                  </IconButton>
                ) : undefined
              }
            />
          </Box>
        );
      }

      case "education-entry": {
        const isLastEdu = isLast || 
          (pageItems.findIndex(i => i === item) === pageItems.length - 1) ||
          (pageItems[pageItems.findIndex(i => i === item) + 1]?.type !== "education-entry");
        return renderEducationEntry(item.index, isLastEdu);
      }

      case "skills":
        return (
          <Box key="skills" sx={{ mb: isLast ? 0 : 2 }}>
            <SectionHeader
              title="Skills"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addSkill} sx={{ color: style.accent }} data-testid="button-add-skill">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {cv.skills.map((skill, index) => (
                <EditableSkillChip 
                  key={`skill-${index}`}
                  skill={skill} 
                  accentColor={style.accent} 
                  onUpdate={(v) => updateSkill(index, v)}
                  onDelete={() => deleteSkill(index)}
                  testId={`chip-skill-${index}`}
                  compact
                />
              ))}
            </Box>
          </Box>
        );

      case "strengths":
        if (!cv.strengths || cv.strengths.length === 0) return null;
        return (
          <Box key="strengths" sx={{ mb: isLast ? 0 : 2 }}>
            <SectionHeader
              title="Strengths"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addStrength} sx={{ color: style.accent }} data-testid="button-add-strength">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {cv.strengths.map((strength, index) => (
                <EditableSkillChip 
                  key={`strength-${index}`}
                  skill={strength} 
                  accentColor={style.accent} 
                  onUpdate={(v) => updateStrength(index, v)}
                  onDelete={() => deleteStrength(index)}
                  testId={`chip-strength-${index}`}
                  compact
                />
              ))}
            </Box>
          </Box>
        );

      case "certifications":
        if (!cv.certifications || cv.certifications.length === 0) return null;
        return (
          <Box key="certifications" sx={{ mb: isLast ? 0 : 2 }}>
            <SectionHeader
              title="Certifications"
              style={style}
              rightContent={
                <IconButton size="small" onClick={addCertification} sx={{ color: style.accent }} data-testid="button-add-certification">
                  <AddIcon fontSize="small" />
                </IconButton>
              }
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {cv.certifications.map((cert, index) => (
                <EditableSkillChip 
                  key={cert.id}
                  skill={cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name}
                  accentColor={style.accent} 
                  onUpdate={(v) => {
                    // Parse back the combined format
                    const parts = v.split(" - ");
                    if (parts.length > 1) {
                      updateCertification(index, "name", parts[0]);
                      updateCertification(index, "issuer", parts.slice(1).join(" - "));
                    } else {
                      updateCertification(index, "name", v);
                    }
                  }}
                  onDelete={() => deleteCertification(index)}
                  testId={`chip-certification-${index}`}
                  compact
                />
              ))}
            </Box>
          </Box>
        );

      case "projects-header": {
        return (
          <Box key="projects-header" sx={{ mb: 1 }}>
            <SectionHeader
              title={item.continued ? "Featured Projects (continued)" : "Featured Projects"}
              style={style}
              rightContent={
                !item.continued ? (
                  <IconButton size="small" onClick={addProject} sx={{ color: style.accent }} data-testid="button-add-project">
                    <AddIcon fontSize="small" />
                  </IconButton>
                ) : undefined
              }
            />
          </Box>
        );
      }

      case "project-entry": {
        const project = cv.projects?.[item.index];
        if (!project) return null;
        const isLastProj = isLast || 
          (pageItems.findIndex(i => i === item) === pageItems.length - 1) ||
          (pageItems[pageItems.findIndex(i => i === item) + 1]?.type !== "project-entry");
        return (
          <Box key={`proj-${project.id}`} sx={{ mb: isLastProj ? 0 : 2, position: "relative", "&:hover .delete-btn": { visibility: "visible" } }}>
            <IconButton 
              className="delete-btn"
              size="small" 
              onClick={() => deleteProject(item.index)}
              sx={{ position: "absolute", right: 0, top: 0, visibility: "hidden", color: "error.main" }}
              data-testid={`button-delete-project-${item.index}`}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <Typography variant="subtitle1" fontWeight={600} sx={{ color: style.bodyText, lineHeight: 1.2 }} component="div">
              <EditableField 
                value={project.title} 
                onChange={(v) => updateProject(item.index, "title", v)} 
                placeholder="Project Title"
              />
            </Typography>
            {project.role && (
              <Typography variant="body2" sx={{ color: style.companyColor, fontWeight: 600, lineHeight: 1.2, mt: 0 }} component="div">
                <EditableField 
                  value={project.role} 
                  onChange={(v) => updateProject(item.index, "role", v)} 
                  placeholder="Your Role"
                />
              </Typography>
            )}
            <Typography variant="body2" sx={{ color: style.bodyText, whiteSpace: "pre-wrap", lineHeight: 1.5, mt: 0.5 }} component="div">
              <EditableField 
                value={project.description} 
                onChange={(v) => updateProject(item.index, "description", v)} 
                multiline
                rows={3}
                placeholder="Project description and achievements..."
              />
            </Typography>
            {((project.technologies || []).length > 0 || template === "student-modern") && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1, alignItems: "center" }}>
                {(project.technologies || []).map((tech, techIdx) => (
                  <Chip
                    key={`tech-${techIdx}`}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: `${style.accent}15`,
                      color: style.accent,
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      height: 22,
                      borderRadius: "4px",
                      "&:hover": { bgcolor: `${style.accent}25` },
                    }}
                    onDelete={() => removeProjectTech(item.index, techIdx)}
                    data-testid={`chip-project-${item.index}-tech-${techIdx}`}
                  />
                ))}
                <IconButton 
                  size="small" 
                  onClick={() => addProjectTech(item.index, "NewTech")}
                  sx={{ color: style.accent, width: 22, height: 22 }}
                  data-testid={`button-add-project-tech-${item.index}`}
                >
                  <AddIcon sx={{ fontSize: 14 }} />
                </IconButton>
              </Box>
            )}
          </Box>
        );
      }

      default:
        return null;
    }
  };

  // Render Student Modern header with photo placeholder
  const renderStudentHeader = () => (
    <Box sx={{ 
      bgcolor: style.bodyBg, 
      pt: 3,
      pb: 2,
      px: 3, 
    }}>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="div" sx={{ 
            fontFamily: "'Arial', sans-serif", 
            fontWeight: 700,
            fontSize: "2rem",
            color: style.headerText,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            mb: 0.5,
          }}>
            <EditableField value={cv.name} onChange={(v) => updateField("name", v)} placeholder="Your Name" />
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ 
            color: style.accent, 
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.3,
            mb: 1.5,
          }}>
            <EditableField value={cv.title} onChange={(v) => updateField("title", v)} placeholder="Your Title & Enthusiasm" />
          </Typography>
          
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: 14, color: style.bodyTextSecondary }} />
              <Typography variant="caption" sx={{ color: style.bodyTextSecondary, fontSize: "0.75rem" }}>
                <EditableField value={cv.location} onChange={(v) => updateField("location", v)} placeholder="City, Country" />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 14, color: style.bodyTextSecondary }} />
              <Typography variant="caption" sx={{ color: style.bodyTextSecondary, fontSize: "0.75rem" }}>
                <EditableField value={cv.email} onChange={(v) => updateField("email", v)} placeholder="email@edu.com" />
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {cv.linkedin && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LinkedInIcon sx={{ fontSize: 14, color: style.bodyTextSecondary }} />
                <Typography variant="caption" sx={{ color: style.bodyTextSecondary, fontSize: "0.75rem" }}>
                  <EditableField value={cv.linkedin} onChange={(v) => updateField("linkedin", v)} placeholder="linkedin.com/in/..." />
                </Typography>
              </Box>
            )}
            {cv.github && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <GitHubIcon sx={{ fontSize: 14, color: style.bodyTextSecondary }} />
                <Typography variant="caption" sx={{ color: style.bodyTextSecondary, fontSize: "0.75rem" }}>
                  <EditableField value={cv.github} onChange={(v) => updateField("github", v)} placeholder="github.com/..." />
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        
        <Box sx={{ 
          width: 90, 
          height: 90, 
          borderRadius: "50%", 
          bgcolor: "#e2e8f0",
          border: "3px solid #1e293b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
        }} data-testid="student-photo-placeholder">
          <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.65rem", textAlign: "center", px: 1 }}>
            Photo
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  // Render CV header (only on first page)
  const renderHeader = () => (
    <Box sx={{ 
      bgcolor: style.headerBg, 
      pt: 3,
      pb: 2,
      px: 3, 
      color: style.headerText, 
      borderBottom: style.borderBottom,
      textAlign: style.headerCentered ? "center" : "left"
    }}>
      <Typography variant="h4" component="div" sx={{ 
        fontFamily: "'Arial', sans-serif", 
        fontWeight: 800,
        fontSize: "2.25rem",
        color: style.headerText,
        display: style.headerCentered ? "block" : "inline-block",
        letterSpacing: "-0.01em",
        lineHeight: 1.1,
        textTransform: "uppercase",
      }}>
        <EditableField value={cv.name} onChange={(v) => updateField("name", v)} placeholder="Your Name" />
      </Typography>
      <Typography variant="subtitle1" component="div" sx={{ 
        color: effectiveColors.secondary, 
        mt: 0.25, 
        fontWeight: 700,
        fontSize: "0.9375rem",
        lineHeight: 1.2,
      }}>
        <EditableField value={cv.title} onChange={(v) => updateField("title", v)} placeholder="Your Title" />
      </Typography>
      
      <Box sx={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: 1.5, 
        mt: 0.25,
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
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "#e8e8e8",
        "@media print": {
          bgcolor: "transparent",
        },
      }}
    >
      {showToolbar && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            px: 2,
            py: 1,
            bgcolor: "#fff",
            borderBottom: "1px solid",
            borderColor: "divider",
            minHeight: 48,
            "@media print": {
              display: "none",
            },
          }}
          data-testid="cv-toolbar"
        >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "text.primary" }}>
            CV Preview
          </Typography>
        </Box>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
            Rearrange Sections
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<PaletteIcon />}
            onClick={(e) => setColorAnchorEl(e.currentTarget)}
            sx={{ 
              textTransform: "none",
            }}
            data-testid="button-color-scheme"
          >
            Colors
          </Button>
          <Popover
            open={Boolean(colorAnchorEl)}
            anchorEl={colorAnchorEl}
            onClose={() => setColorAnchorEl(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <Box sx={{ p: 2, width: 280 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                Color Scheme
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {COLOR_SCHEME_PRESETS.map((scheme) => (
                  <Tooltip key={scheme.id} title={scheme.name}>
                    <Box
                      onClick={() => applyColorScheme(scheme)}
                      sx={{
                        width: 40,
                        height: 28,
                        borderRadius: 1,
                        cursor: "pointer",
                        display: "flex",
                        overflow: "hidden",
                        border: cv.colorScheme?.id === scheme.id ? "2px solid #000" : "1px solid #ddd",
                        "&:hover": { opacity: 0.8 },
                      }}
                      data-testid={`color-preset-${scheme.id}`}
                    >
                      <Box sx={{ flex: 1, bgcolor: scheme.primary }} />
                      <Box sx={{ flex: 1, bgcolor: scheme.secondary }} />
                    </Box>
                  </Tooltip>
                ))}
              </Box>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", display: "block", mb: 1 }}>
                Custom Colors
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.7rem" }}>
                    Primary (Name/Headers)
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                    <input
                      type="color"
                      value={customPrimary}
                      onChange={(e) => setCustomPrimary(e.target.value)}
                      style={{ width: 32, height: 24, cursor: "pointer", border: "1px solid #ccc", borderRadius: 4 }}
                      data-testid="input-custom-primary"
                    />
                    <Typography variant="caption" sx={{ fontFamily: "monospace", fontSize: "0.7rem" }}>
                      {customPrimary}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.7rem" }}>
                    Secondary (Subtitle)
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                    <input
                      type="color"
                      value={customSecondary}
                      onChange={(e) => setCustomSecondary(e.target.value)}
                      style={{ width: 32, height: 24, cursor: "pointer", border: "1px solid #ccc", borderRadius: 4 }}
                      data-testid="input-custom-secondary"
                    />
                    <Typography variant="caption" sx={{ fontFamily: "monospace", fontSize: "0.7rem" }}>
                      {customSecondary}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                variant="contained"
                size="small"
                fullWidth
                onClick={applyCustomColors}
                sx={{ textTransform: "none", mt: 1 }}
                data-testid="button-apply-custom-colors"
              >
                Apply Custom Colors
              </Button>
            </Box>
          </Popover>
          {onTemplateChange && (
            <FormControl size="small" sx={{ minWidth: 130 }}>
              <InputLabel id="cv-template-label" sx={{ fontSize: "0.8rem" }}>Template</InputLabel>
              <Select
                labelId="cv-template-label"
                value={template}
                label="Template"
                onChange={handleTemplateChange}
                data-testid="select-cv-template"
                sx={{ fontSize: "0.8rem" }}
                MenuProps={{
                  PaperProps: {
                    sx: { "& .MuiMenuItem-root": { fontSize: "0.8rem", py: 0.75 } }
                  }
                }}
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
      </Box>
      )}

      <Box sx={{ 
        flex: 1, 
        overflow: "auto", 
        py: 2, 
        pl: "50px", 
        pr: 1.5,
        "@media print": {
          overflow: "visible",
          padding: 0,
        },
      }}>
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
                {template === "student-modern" ? renderStudentHeader() : renderHeader()}
                <Box sx={{ pt: 1.5, px: 3, pb: `${BOTTOM_GUTTER}px`, color: style.bodyText }}>
                  {page.items.map((item, idx) => 
                    renderItem(item, idx === page.items.length - 1, page.items)
                  )}
                </Box>
              </>
            ) : (
              <>
                <PageBadge pageNumber={page.pageNumber} totalPages={totalPages} />
                <Box sx={{ p: 3, color: style.bodyText, pb: `${BOTTOM_GUTTER}px` }}>
                  {page.items.map((item, idx) => 
                    renderItem(item, idx === page.items.length - 1, page.items)
                  )}
                </Box>
              </>
            )}
          </Paper>
        ))}
      </Box>
      
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
  testId,
  compact = false
}: { 
  skill: string; 
  accentColor: string; 
  onUpdate: (v: string) => void; 
  onDelete: () => void;
  testId: string;
  compact?: boolean;
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
        sx={{ width: compact ? 100 : 120 }}
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
        bgcolor: `${accentColor}20`, 
        color: accentColor, 
        border: `1px solid ${accentColor}40`,
        cursor: "pointer",
        fontWeight: 500,
        fontSize: compact ? "0.7rem" : "0.8125rem",
        height: compact ? 22 : 24,
        "& .MuiChip-label": {
          px: compact ? 0.75 : 1,
        },
        "& .MuiChip-deleteIcon": {
          color: accentColor,
          opacity: 0.6,
          fontSize: compact ? 14 : 16,
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
