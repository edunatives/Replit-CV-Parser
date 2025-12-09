import { useCallback, useState } from "react";
import { Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UploadDropzoneProps {
  onFilesAdded: (files: File[]) => void;
}

export function UploadDropzone({ onFilesAdded }: UploadDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === "application/pdf" || 
                file.name.endsWith(".docx") ||
                file.name.endsWith(".doc")
    );
    if (files.length > 0) {
      onFilesAdded(files);
    }
  }, [onFilesAdded]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onFilesAdded(files);
    }
    e.target.value = "";
  }, [onFilesAdded]);

  return (
    <div className="p-4 border-b border-border">
      <label
        className={`
          flex flex-col items-center justify-center gap-2 p-6
          border-2 border-dashed rounded-lg cursor-pointer
          transition-all duration-200
          ${isDragOver 
            ? "border-primary bg-primary/5" 
            : "border-border hover:border-primary/50"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        data-testid="dropzone-upload"
      >
        <Upload className={`w-6 h-6 ${isDragOver ? "text-primary" : "text-muted-foreground"}`} />
        <div className="text-center">
          <p className="text-xs font-medium">Drop files or click to upload</p>
          <p className="text-[10px] text-muted-foreground mt-1">
            Batch processing supported
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <Badge variant="secondary" className="text-[9px] px-2 py-0.5">PDF</Badge>
          <Badge variant="secondary" className="text-[9px] px-2 py-0.5">DOCX</Badge>
          <Badge variant="secondary" className="text-[9px] px-2 py-0.5">DOC</Badge>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          multiple
          onChange={handleFileInput}
          data-testid="input-file-upload"
        />
      </label>
    </div>
  );
}
