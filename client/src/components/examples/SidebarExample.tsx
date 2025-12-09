import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { ThemeProvider } from "../ThemeProvider";
import type { CVFile } from "../FileList";

const mockFiles: CVFile[] = [
  { id: "1", name: "John_Smith_Resume.pdf", size: 245760, type: "application/pdf", status: "done" },
  { id: "2", name: "Sarah_Johnson_CV.docx", size: 189440, type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "done" },
  { id: "3", name: "Michael_Brown_Resume.pdf", size: 312320, type: "application/pdf", status: "pending" },
];

export default function SidebarExample() {
  const [files, setFiles] = useState<CVFile[]>(mockFiles);
  const [selectedId, setSelectedId] = useState<string | null>("1");

  return (
    <ThemeProvider>
      <div className="bg-background p-4 h-[500px]">
        <Sidebar
          files={files}
          selectedFileId={selectedId}
          onFilesAdded={(newFiles) => {
            console.log("Files added:", newFiles);
            const cvFiles: CVFile[] = newFiles.map((f, i) => ({
              id: `new-${Date.now()}-${i}`,
              name: f.name,
              size: f.size,
              type: f.type,
              status: "pending" as const,
            }));
            setFiles([...files, ...cvFiles]);
          }}
          onSelectFile={setSelectedId}
          onRemoveFile={(id) => setFiles(files.filter(f => f.id !== id))}
          onProcessAll={() => console.log("Process all clicked")}
          onClearAll={() => setFiles([])}
          onExportAll={() => console.log("Export all clicked")}
          isProcessing={false}
        />
      </div>
    </ThemeProvider>
  );
}
