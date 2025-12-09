import { useState } from "react";
import { 
  Mail, Phone, MapPin, Globe, Linkedin, Github,
  Briefcase, GraduationCap, Wrench, Pencil, Check, X
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { TemplateType } from "./TemplateThumbnails";

export interface ParsedCV {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  education: {
    id: string;
    institution: string;
    degree: string;
    year: string;
  }[];
  skills: string[];
}

interface CVPreviewProps {
  cv: ParsedCV | null;
  template: TemplateType;
  onUpdate: (cv: ParsedCV) => void;
}

interface EditableFieldProps {
  value: string;
  onSave: (value: string) => void;
  multiline?: boolean;
  className?: string;
}

function EditableField({ value, onSave, multiline = false, className = "" }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-start gap-1">
        {multiline ? (
          <Textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="text-xs min-h-[60px]"
            autoFocus
            data-testid="input-edit-field"
          />
        ) : (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="h-7 text-xs"
            autoFocus
            data-testid="input-edit-field"
          />
        )}
        <Button size="icon" variant="ghost" className="w-6 h-6" onClick={handleSave} data-testid="button-save-edit">
          <Check className="w-3 h-3 text-emerald-500" />
        </Button>
        <Button size="icon" variant="ghost" className="w-6 h-6" onClick={handleCancel} data-testid="button-cancel-edit">
          <X className="w-3 h-3 text-destructive" />
        </Button>
      </div>
    );
  }

  return (
    <div 
      className={`group inline-flex items-center gap-1 cursor-pointer ${className}`}
      onClick={() => setIsEditing(true)}
      data-testid="editable-field"
    >
      <span>{value || "Click to add"}</span>
      <Pencil className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
    </div>
  );
}

export function CVPreview({ cv, template, onUpdate }: CVPreviewProps) {
  if (!cv) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Briefcase className="w-12 h-12 text-muted-foreground/20 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Select a file to preview</p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Upload and process CVs from the sidebar
          </p>
        </div>
      </div>
    );
  }

  const updateField = (field: keyof ParsedCV, value: string) => {
    onUpdate({ ...cv, [field]: value });
  };

  const updateExperience = (expId: string, field: string, value: string) => {
    onUpdate({
      ...cv,
      experience: cv.experience.map(exp => 
        exp.id === expId ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const updateEducation = (eduId: string, field: string, value: string) => {
    onUpdate({
      ...cv,
      education: cv.education.map(edu =>
        edu.id === eduId ? { ...edu, [field]: value } : edu
      ),
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold">
                <EditableField value={cv.name} onSave={(v) => updateField("name", v)} />
              </h2>
              <p className="text-sm text-primary">
                <EditableField value={cv.title} onSave={(v) => updateField("title", v)} />
              </p>
            </div>
            <Badge variant="outline" className="text-[9px] uppercase tracking-wider">
              {template.replace("-", " ")}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <EditableField value={cv.email} onSave={(v) => updateField("email", v)} />
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <EditableField value={cv.phone} onSave={(v) => updateField("phone", v)} />
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <EditableField value={cv.location} onSave={(v) => updateField("location", v)} />
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <EditableField value={cv.website} onSave={(v) => updateField("website", v)} />
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-primary" />
              <EditableField value={cv.linkedin} onSave={(v) => updateField("linkedin", v)} />
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-primary" />
              <EditableField value={cv.github} onSave={(v) => updateField("github", v)} />
            </div>
          </div>

          {cv.summary && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <EditableField 
                  value={cv.summary} 
                  onSave={(v) => updateField("summary", v)} 
                  multiline 
                />
              </p>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-wider">Experience</h3>
          </div>
          <div className="space-y-4">
            {cv.experience.map((exp) => (
              <div key={exp.id} className="relative pl-4 border-l-2 border-primary/20">
                <h4 className="text-sm font-medium">
                  <EditableField value={exp.role} onSave={(v) => updateExperience(exp.id, "role", v)} />
                </h4>
                <p className="text-xs text-primary">
                  <EditableField value={exp.company} onSave={(v) => updateExperience(exp.id, "company", v)} />
                </p>
                <p className="text-[10px] text-muted-foreground">
                  <EditableField value={exp.duration} onSave={(v) => updateExperience(exp.id, "duration", v)} />
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  <EditableField 
                    value={exp.description} 
                    onSave={(v) => updateExperience(exp.id, "description", v)} 
                    multiline 
                  />
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-wider">Education</h3>
          </div>
          <div className="space-y-3">
            {cv.education.map((edu) => (
              <div key={edu.id} className="relative pl-4 border-l-2 border-primary/20">
                <h4 className="text-sm font-medium">
                  <EditableField value={edu.degree} onSave={(v) => updateEducation(edu.id, "degree", v)} />
                </h4>
                <p className="text-xs text-primary">
                  <EditableField value={edu.institution} onSave={(v) => updateEducation(edu.id, "institution", v)} />
                </p>
                <p className="text-[10px] text-muted-foreground">
                  <EditableField value={edu.year} onSave={(v) => updateEducation(edu.id, "year", v)} />
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-wider">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cv.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-[10px]">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
