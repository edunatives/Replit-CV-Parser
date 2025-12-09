import { useState } from "react";
import { Check, Loader2, ChevronDown, Layout } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { TemplateModal, type TemplateType } from "./TemplateModal";

const templateNames: Record<TemplateType, string> = {
  "modern-dark": "Modern Dark",
  "classic-light": "Classic Light",
  "executive": "Executive",
  "minimal": "Minimal",
  "creative": "Creative",
  "professional": "Professional",
};

interface ConfigBarProps {
  parserMode: string;
  onParserModeChange: (mode: string) => void;
  outputFormat: string;
  onOutputFormatChange: (format: string) => void;
  template: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
  processingCount: number;
  totalFiles: number;
}

export function ConfigBar({
  parserMode,
  onParserModeChange,
  outputFormat,
  onOutputFormatChange,
  template,
  onTemplateChange,
  processingCount,
  totalFiles,
}: ConfigBarProps) {
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const isProcessing = processingCount > 0;

  return (
    <>
      <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-6 flex-wrap">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-muted-foreground font-medium">
            Parser Mode
          </label>
          <Select value={parserMode} onValueChange={onParserModeChange}>
            <SelectTrigger className="w-40 h-9" data-testid="select-parser-mode">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="intelligent">Intelligent</SelectItem>
              <SelectItem value="basic">Basic</SelectItem>
              <SelectItem value="strict">Strict</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-muted-foreground font-medium">
            Output Format
          </label>
          <Select value={outputFormat} onValueChange={onOutputFormatChange}>
            <SelectTrigger className="w-40 h-9" data-testid="select-output-format">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
              <SelectItem value="docx">DOCX</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-muted-foreground font-medium">
            Template
          </label>
          <Button
            variant="outline"
            className="w-48 h-9 justify-between font-normal"
            onClick={() => setTemplateModalOpen(true)}
            data-testid="button-open-template-modal"
          >
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-muted-foreground" />
              <span>{templateNames[template]}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
          {isProcessing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span>Processing {processingCount} of {totalFiles}</span>
            </>
          ) : totalFiles > 0 ? (
            <>
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{totalFiles} files ready</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              <span>Ready</span>
            </>
          )}
        </div>
      </div>

      <TemplateModal
        open={templateModalOpen}
        onOpenChange={setTemplateModalOpen}
        selected={template}
        onSelect={onTemplateChange}
      />
    </>
  );
}
