"use client";

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import type { TemplateType } from "@/types/cv";
import { getTemplateOptions } from "@/lib/templates";

interface TemplateSelectorProps {
  template: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

const templates = getTemplateOptions();

export function TemplateSelector({ template, onTemplateChange }: TemplateSelectorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onTemplateChange(event.target.value as TemplateType);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 150 }}>
      <InputLabel id="template-select-label">Template</InputLabel>
      <Select
        labelId="template-select-label"
        id="template-select"
        value={template}
        label="Template"
        onChange={handleChange}
        data-testid="select-template"
      >
        {templates.map((t) => (
          <MenuItem key={t.value} value={t.value}>
            {t.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
