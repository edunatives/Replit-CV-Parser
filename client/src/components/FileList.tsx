import { FileText, X, Loader2, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export type FileStatus = "pending" | "processing" | "done" | "error";

export interface CVFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: FileStatus;
}

interface FileListProps {
  files: CVFile[];
  selectedFileId: string | null;
  onSelectFile: (id: string) => void;
  onRemoveFile: (id: string) => void;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileExtension(name: string): string {
  return name.split(".").pop()?.toUpperCase() || "FILE";
}

function StatusIndicator({ status }: { status: FileStatus }) {
  switch (status) {
    case "pending":
      return <div className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0" />;
    case "processing":
      return <Loader2 className="w-3 h-3 text-yellow-500 animate-spin flex-shrink-0" />;
    case "done":
      return <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />;
    case "error":
      return <AlertCircle className="w-3 h-3 text-destructive flex-shrink-0" />;
  }
}

export function FileList({ files, selectedFileId, onSelectFile, onRemoveFile }: FileListProps) {
  if (files.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <FileText className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">No files uploaded</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-2">
      {files.map((file) => (
        <div
          key={file.id}
          className={`
            group flex items-center gap-3 p-3 rounded-md cursor-pointer
            transition-all duration-200 mb-1
            ${selectedFileId === file.id 
              ? "bg-primary/10 border-l-[3px] border-l-primary" 
              : "hover:bg-muted/50"
            }
            ${file.status === "processing" ? "opacity-70" : ""}
          `}
          onClick={() => onSelectFile(file.id)}
          data-testid={`file-item-${file.id}`}
        >
          <div className="w-8 h-8 rounded-md bg-background flex items-center justify-center flex-shrink-0">
            <span className="text-[9px] font-semibold text-primary">
              {getFileExtension(file.name)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">{file.name}</p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span>{formatFileSize(file.size)}</span>
              <span className="capitalize">{file.status}</span>
            </div>
          </div>
          <StatusIndicator status={file.status} />
          <Button
            size="icon"
            variant="ghost"
            className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFile(file.id);
            }}
            data-testid={`button-remove-file-${file.id}`}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      ))}
    </div>
  );
}
