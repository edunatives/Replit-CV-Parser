import { useState } from "react";
import { FileList, type CVFile } from "../FileList";
import { ThemeProvider } from "../ThemeProvider";

const mockFiles: CVFile[] = [
  { id: "1", name: "John_Smith_Resume.pdf", size: 245760, type: "application/pdf", status: "done" },
  { id: "2", name: "Sarah_Johnson_CV.docx", size: 189440, type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "processing" },
  { id: "3", name: "Michael_Brown_Resume.pdf", size: 312320, type: "application/pdf", status: "pending" },
  { id: "4", name: "Emily_Davis_CV.doc", size: 156672, type: "application/msword", status: "error" },
];

export default function FileListExample() {
  const [selectedId, setSelectedId] = useState<string | null>("1");
  const [files, setFiles] = useState(mockFiles);

  return (
    <ThemeProvider>
      <div className="bg-card border border-border rounded-lg w-72 h-80 flex flex-col">
        <FileList
          files={files}
          selectedFileId={selectedId}
          onSelectFile={setSelectedId}
          onRemoveFile={(id) => setFiles(files.filter(f => f.id !== id))}
        />
      </div>
    </ThemeProvider>
  );
}
