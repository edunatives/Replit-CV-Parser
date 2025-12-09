import { Check, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TemplateThumbnails, type TemplateType } from "./TemplateThumbnails";

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
  const isProcessing = processingCount > 0;

  return (
    <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-4 flex-wrap">
      <div className="flex flex-col gap-1">
        <label className="text-[9px] text-muted-foreground uppercase tracking-widest">
          Parser Mode
        </label>
        <Select value={parserMode} onValueChange={onParserModeChange}>
          <SelectTrigger className="w-36 h-8 text-xs" data-testid="select-parser-mode">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="intelligent">Intelligent</SelectItem>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="strict">Strict</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[9px] text-muted-foreground uppercase tracking-widest">
          Output Format
        </label>
        <Select value={outputFormat} onValueChange={onOutputFormatChange}>
          <SelectTrigger className="w-36 h-8 text-xs" data-testid="select-output-format">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pdf">PDF</SelectItem>
            <SelectItem value="json">JSON</SelectItem>
            <SelectItem value="docx">DOCX</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[9px] text-muted-foreground uppercase tracking-widest invisible">
          Template
        </label>
        <TemplateThumbnails selected={template} onSelect={onTemplateChange} />
      </div>

      <div className="ml-auto flex items-center gap-2 text-[10px] text-muted-foreground">
        {isProcessing ? (
          <>
            <Loader2 className="w-3 h-3 animate-spin text-yellow-500" />
            <span>Processing {processingCount} of {totalFiles}</span>
          </>
        ) : totalFiles > 0 ? (
          <>
            <Check className="w-3 h-3 text-emerald-500" />
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
  );
}
