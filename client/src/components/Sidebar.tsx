import { Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UploadDropzone } from "./UploadDropzone";
import { FileList, type CVFile } from "./FileList";

interface SidebarProps {
  files: CVFile[];
  selectedFileId: string | null;
  onFilesAdded: (files: File[]) => void;
  onSelectFile: (id: string) => void;
  onRemoveFile: (id: string) => void;
  onProcessAll: () => void;
  onClearAll: () => void;
  onExportAll: () => void;
  isProcessing: boolean;
}

export function Sidebar({
  files,
  selectedFileId,
  onFilesAdded,
  onSelectFile,
  onRemoveFile,
  onProcessAll,
  onClearAll,
  onExportAll,
  isProcessing,
}: SidebarProps) {
  const doneCount = files.filter(f => f.status === "done").length;

  return (
    <aside className="w-72 bg-card border border-border rounded-lg flex flex-col max-h-[calc(100vh-200px)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Files
        </h2>
        <Badge variant="outline" className="text-[9px] px-2 py-0.5 border-primary/30 text-primary">
          {files.length}
        </Badge>
      </div>

      <UploadDropzone onFilesAdded={onFilesAdded} />

      <FileList
        files={files}
        selectedFileId={selectedFileId}
        onSelectFile={onSelectFile}
        onRemoveFile={onRemoveFile}
      />

      <div className="p-3 border-t border-border flex gap-2">
        <Button
          className="flex-1 text-[10px] uppercase tracking-wider"
          onClick={onProcessAll}
          disabled={files.length === 0 || isProcessing}
          data-testid="button-process-all"
        >
          {isProcessing ? "Processing..." : "Process All"}
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={onExportAll}
          disabled={doneCount === 0}
          title="Export All"
          data-testid="button-export-all"
        >
          <Download className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={onClearAll}
          disabled={files.length === 0}
          title="Clear All"
          data-testid="button-clear-all"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </aside>
  );
}
