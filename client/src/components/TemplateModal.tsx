import { X, Check, User, Briefcase, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TemplateType = "modern-dark" | "classic-light" | "executive" | "minimal" | "creative" | "professional";

interface Template {
  id: TemplateType;
  name: string;
  description: string;
}

const templates: Template[] = [
  { id: "modern-dark", name: "Modern Dark", description: "Sleek dark theme with clean typography" },
  { id: "classic-light", name: "Classic Light", description: "Traditional layout with elegant styling" },
  { id: "executive", name: "Executive", description: "Professional gradient for senior roles" },
  { id: "minimal", name: "Minimal", description: "Clean and simple with focus on content" },
  { id: "creative", name: "Creative", description: "Bold colors for creative industries" },
  { id: "professional", name: "Professional", description: "Corporate blue theme for business" },
];

interface TemplateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selected: TemplateType;
  onSelect: (template: TemplateType) => void;
}

function TemplatePreview({ template, isSelected }: { template: Template; isSelected: boolean }) {
  const getPreviewStyles = () => {
    switch (template.id) {
      case "modern-dark":
        return { bg: "bg-zinc-900", text: "text-zinc-100", accent: "bg-blue-500", border: "border-zinc-700" };
      case "classic-light":
        return { bg: "bg-white", text: "text-zinc-800", accent: "bg-zinc-700", border: "border-zinc-200" };
      case "executive":
        return { bg: "bg-gradient-to-br from-slate-900 to-blue-950", text: "text-white", accent: "bg-amber-500", border: "border-slate-700" };
      case "minimal":
        return { bg: "bg-zinc-50", text: "text-zinc-700", accent: "bg-zinc-400", border: "border-zinc-200" };
      case "creative":
        return { bg: "bg-white", text: "text-zinc-800", accent: "bg-rose-500", border: "border-rose-300" };
      case "professional":
        return { bg: "bg-gradient-to-br from-blue-700 to-blue-500", text: "text-white", accent: "bg-white", border: "border-blue-400" };
      default:
        return { bg: "bg-white", text: "text-zinc-800", accent: "bg-blue-500", border: "border-zinc-200" };
    }
  };

  const styles = getPreviewStyles();

  return (
    <div className={cn(
      "relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all",
      styles.bg,
      isSelected ? "ring-2 ring-primary ring-offset-2" : "hover:scale-[1.02]",
      styles.border
    )}>
      <div className="absolute inset-0 p-3 flex flex-col">
        <div className="flex items-start gap-2 mb-3">
          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", styles.accent)}>
            <User className={cn("w-4 h-4", template.id === "professional" || template.id === "classic-light" ? "text-zinc-800" : "text-white")} />
          </div>
          <div className="flex-1 min-w-0">
            <div className={cn("h-2.5 rounded w-3/4 mb-1", styles.accent, "opacity-80")} />
            <div className={cn("h-1.5 rounded w-1/2", styles.text, "opacity-30")} />
          </div>
        </div>
        
        <div className="flex gap-2 mb-3 flex-wrap">
          <div className={cn("flex items-center gap-1", styles.text, "opacity-50")}>
            <Mail className="w-2 h-2" />
            <div className="h-1 w-8 rounded bg-current" />
          </div>
          <div className={cn("flex items-center gap-1", styles.text, "opacity-50")}>
            <Phone className="w-2 h-2" />
            <div className="h-1 w-6 rounded bg-current" />
          </div>
          <div className={cn("flex items-center gap-1", styles.text, "opacity-50")}>
            <MapPin className="w-2 h-2" />
            <div className="h-1 w-10 rounded bg-current" />
          </div>
        </div>

        <div className="mb-2">
          <div className={cn("flex items-center gap-1 mb-1.5", styles.text)}>
            <Briefcase className="w-2.5 h-2.5 opacity-70" />
            <div className="h-1.5 w-12 rounded bg-current opacity-60" />
          </div>
          <div className={cn("space-y-1 pl-3.5", styles.text, "opacity-40")}>
            <div className="h-1 w-full rounded bg-current" />
            <div className="h-1 w-5/6 rounded bg-current" />
            <div className="h-1 w-4/5 rounded bg-current" />
          </div>
        </div>

        <div className="mb-2">
          <div className={cn("flex items-center gap-1 mb-1.5", styles.text)}>
            <GraduationCap className="w-2.5 h-2.5 opacity-70" />
            <div className="h-1.5 w-10 rounded bg-current opacity-60" />
          </div>
          <div className={cn("space-y-1 pl-3.5", styles.text, "opacity-40")}>
            <div className="h-1 w-4/5 rounded bg-current" />
            <div className="h-1 w-3/5 rounded bg-current" />
          </div>
        </div>

        <div className="mt-auto">
          <div className={cn("h-1.5 w-8 rounded mb-1.5", styles.text, "opacity-50")} />
          <div className="flex gap-1 flex-wrap">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={cn("h-2 w-6 rounded-sm", styles.accent, "opacity-30")} />
            ))}
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-3 h-3 text-primary-foreground" />
        </div>
      )}
    </div>
  );
}

export function TemplateModal({ open, onOpenChange, selected, onSelect }: TemplateModalProps) {
  const handleSelect = (id: TemplateType) => {
    onSelect(id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Choose a Template</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Select a template style for your CV export
          </p>
        </DialogHeader>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelect(template.id)}
              className="text-left group"
              data-testid={`button-template-select-${template.id}`}
            >
              <TemplatePreview template={template} isSelected={selected === template.id} />
              <div className="mt-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">{template.name}</h3>
                  {selected === template.id && (
                    <Badge variant="secondary" className="text-[10px]">Selected</Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{template.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Apply Template
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
