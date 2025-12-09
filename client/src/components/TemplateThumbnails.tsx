import { cn } from "@/lib/utils";

export type TemplateType = "modern-dark" | "classic-light" | "executive" | "minimal" | "creative" | "professional";

interface Template {
  id: TemplateType;
  name: string;
  className: string;
}

const templates: Template[] = [
  { id: "modern-dark", name: "Modern Dark", className: "bg-zinc-900" },
  { id: "classic-light", name: "Classic Light", className: "bg-white border border-zinc-200" },
  { id: "executive", name: "Executive", className: "bg-gradient-to-br from-slate-900 to-blue-950" },
  { id: "minimal", name: "Minimal", className: "bg-zinc-50" },
  { id: "creative", name: "Creative", className: "bg-white border-2 border-rose-400" },
  { id: "professional", name: "Professional", className: "bg-gradient-to-br from-blue-700 to-blue-500" },
];

interface TemplateThumbnailsProps {
  selected: TemplateType;
  onSelect: (template: TemplateType) => void;
}

export function TemplateThumbnails({ selected, onSelect }: TemplateThumbnailsProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
        Template
      </span>
      <div className="flex gap-1.5">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={cn(
              "w-10 h-7 rounded cursor-pointer transition-all duration-200",
              template.className,
              selected === template.id 
                ? "ring-2 ring-primary ring-offset-1 ring-offset-background" 
                : "hover:scale-105"
            )}
            title={template.name}
            data-testid={`button-template-${template.id}`}
          />
        ))}
      </div>
    </div>
  );
}
