import { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentTabs, type TabType } from "./ContentTabs";
import { CVPreview, type ParsedCV } from "./CVPreview";
import { RawTextView } from "./RawTextView";
import { JsonView } from "./JsonView";
import type { TemplateType } from "./TemplateThumbnails";
import { useToast } from "@/hooks/use-toast";

interface MainContentProps {
  cv: ParsedCV | null;
  rawText: string | null;
  template: TemplateType;
  onUpdateCV: (cv: ParsedCV) => void;
}

export function MainContent({ cv, rawText, template, onUpdateCV }: MainContentProps) {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (!cv) return;
    navigator.clipboard.writeText(JSON.stringify(cv, null, 2));
    setCopied(true);
    toast({ title: "Copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    if (!cv) return;
    toast({ title: "Export started", description: "Your CV is being prepared for download." });
  };

  return (
    <div className="flex-1 bg-card border border-border rounded-lg flex flex-col max-h-[calc(100vh-200px)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleCopy}
            disabled={!cv}
            data-testid="button-copy"
          >
            {copied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
            <span className="text-[10px] uppercase tracking-wider">
              {copied ? "Copied" : "Copy"}
            </span>
          </Button>
          <Button
            size="sm"
            onClick={handleExport}
            disabled={!cv}
            data-testid="button-export"
          >
            <Download className="w-3 h-3 mr-1" />
            <span className="text-[10px] uppercase tracking-wider">Export</span>
          </Button>
        </div>
      </div>

      {activeTab === "preview" && (
        <CVPreview cv={cv} template={template} onUpdate={onUpdateCV} />
      )}
      {activeTab === "raw" && <RawTextView text={rawText} />}
      {activeTab === "json" && <JsonView cv={cv} />}
    </div>
  );
}
