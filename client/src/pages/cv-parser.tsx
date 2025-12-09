import { useState, useCallback, useRef } from "react";
import { Header } from "@/components/Header";
import { ConfigBar } from "@/components/ConfigBar";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import type { CVFile } from "@/components/FileList";
import type { ParsedCV } from "@/components/CVPreview";
import type { TemplateType } from "@/components/TemplateModal";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function CVParserPage() {
  const [files, setFiles] = useState<CVFile[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [parsedCVs, setParsedCVs] = useState<Map<string, ParsedCV>>(new Map());
  const [rawTexts, setRawTexts] = useState<Map<string, string>>(new Map());
  const [parserMode, setParserMode] = useState("intelligent");
  const [outputFormat, setOutputFormat] = useState("pdf");
  const [template, setTemplate] = useState<TemplateType>("modern-dark");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  
  const fileDataRef = useRef<Map<string, File>>(new Map());

  const handleFilesAdded = useCallback((newFiles: File[]) => {
    const cvFiles: CVFile[] = newFiles.map((file, index) => {
      const id = `file-${Date.now()}-${index}`;
      fileDataRef.current.set(id, file);
      return {
        id,
        name: file.name,
        size: file.size,
        type: file.type,
        status: "pending" as const,
      };
    });
    
    setFiles(prev => [...prev, ...cvFiles]);
    if (!selectedFileId && cvFiles.length > 0) {
      setSelectedFileId(cvFiles[0].id);
    }
    
    toast({
      title: `${newFiles.length} file${newFiles.length > 1 ? "s" : ""} added`,
      description: "Click 'Process All' to parse the CVs",
    });
  }, [selectedFileId, toast]);

  const handleSelectFile = useCallback((id: string) => {
    setSelectedFileId(id);
  }, []);

  const handleRemoveFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setParsedCVs(prev => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
    setRawTexts(prev => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
    fileDataRef.current.delete(id);
    if (selectedFileId === id) {
      setSelectedFileId(null);
    }
  }, [selectedFileId]);

  const handleProcessAll = useCallback(async () => {
    const pendingFiles = files.filter(f => f.status === "pending");
    if (pendingFiles.length === 0) {
      toast({ title: "No files to process" });
      return;
    }

    setIsProcessing(true);

    for (const file of pendingFiles) {
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: "processing" as const } : f
      ));

      try {
        const actualFile = fileDataRef.current.get(file.id);
        if (!actualFile) {
          throw new Error("File data not found");
        }

        const formData = new FormData();
        formData.append("file", actualFile);
        formData.append("fileId", file.id);

        const response = await fetch("/api/parse-cv", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to parse CV");
        }

        const { cv, rawText } = await response.json();

        setParsedCVs(prev => new Map(prev).set(file.id, cv));
        setRawTexts(prev => new Map(prev).set(file.id, rawText));

        setFiles(prev => prev.map(f =>
          f.id === file.id ? { ...f, status: "done" as const } : f
        ));
      } catch (error) {
        console.error("Error parsing CV:", error);
        setFiles(prev => prev.map(f =>
          f.id === file.id ? { ...f, status: "pending" as const } : f
        ));
        toast({
          title: "Error parsing file",
          description: file.name,
          variant: "destructive",
        });
      }
    }

    setIsProcessing(false);
    const successCount = files.filter(f => f.status === "done" || parsedCVs.has(f.id)).length;
    toast({
      title: "Processing complete",
      description: `${pendingFiles.length} CV${pendingFiles.length > 1 ? "s" : ""} parsed`,
    });
  }, [files, toast, parsedCVs]);

  const handleClearAll = useCallback(() => {
    setFiles([]);
    setParsedCVs(new Map());
    setRawTexts(new Map());
    setSelectedFileId(null);
    fileDataRef.current.clear();
    toast({ title: "All files cleared" });
  }, [toast]);

  const handleExportAll = useCallback(() => {
    const doneFiles = files.filter(f => f.status === "done");
    toast({
      title: "Export started",
      description: `Preparing ${doneFiles.length} CV${doneFiles.length > 1 ? "s" : ""} for download`,
    });
  }, [files, toast]);

  const generateRawText = (cv: ParsedCV): string => {
    return `${cv.name}
${cv.title}
${cv.email} | ${cv.phone}
${cv.location}

SUMMARY
${cv.summary}

EXPERIENCE
${cv.experience.map(exp => `${exp.role} at ${exp.company}
${exp.duration}
${exp.description}`).join("\n\n")}

EDUCATION
${cv.education.map(edu => `${edu.degree} - ${edu.institution} (${edu.year})`).join("\n")}

SKILLS
${cv.skills.join(", ")}`;
  };

  const handleUpdateCV = useCallback((cv: ParsedCV) => {
    setParsedCVs(prev => new Map(prev).set(cv.id, cv));
    setRawTexts(prev => new Map(prev).set(cv.id, generateRawText(cv)));
  }, []);

  const selectedCV = selectedFileId ? parsedCVs.get(selectedFileId) || null : null;
  const selectedRawText = selectedFileId ? rawTexts.get(selectedFileId) || null : null;
  const processingCount = files.filter(f => f.status === "processing").length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 p-6">
        <div className="max-w-[1500px] mx-auto space-y-4">
          <ConfigBar
            parserMode={parserMode}
            onParserModeChange={setParserMode}
            outputFormat={outputFormat}
            onOutputFormatChange={setOutputFormat}
            template={template}
            onTemplateChange={setTemplate}
            processingCount={processingCount}
            totalFiles={files.length}
          />

          <div className="flex gap-4">
            <Sidebar
              files={files}
              selectedFileId={selectedFileId}
              onFilesAdded={handleFilesAdded}
              onSelectFile={handleSelectFile}
              onRemoveFile={handleRemoveFile}
              onProcessAll={handleProcessAll}
              onClearAll={handleClearAll}
              onExportAll={handleExportAll}
              isProcessing={isProcessing}
            />

            <MainContent
              cv={selectedCV}
              rawText={selectedRawText}
              template={template}
              onUpdateCV={handleUpdateCV}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
