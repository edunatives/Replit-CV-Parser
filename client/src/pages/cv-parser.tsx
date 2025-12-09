import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { ConfigBar } from "@/components/ConfigBar";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import type { CVFile } from "@/components/FileList";
import type { ParsedCV } from "@/components/CVPreview";
import type { TemplateType } from "@/components/TemplateModal";
import { useToast } from "@/hooks/use-toast";

function generateMockCV(fileName: string, id: string): ParsedCV {
  const names = ["Alex Thompson", "Sarah Chen", "Michael Rodriguez", "Emily Watson", "David Kim"];
  const titles = ["Software Engineer", "Product Manager", "Data Scientist", "UX Designer", "DevOps Engineer"];
  const companies = ["Google", "Microsoft", "Apple", "Amazon", "Meta"];
  const universities = ["MIT", "Stanford", "Harvard", "UC Berkeley", "Carnegie Mellon"];
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  
  return {
    id,
    name: randomName,
    title: randomTitle,
    email: `${randomName.toLowerCase().replace(" ", ".")}@email.com`,
    phone: `+1 (555) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
    location: "San Francisco, CA",
    website: `${randomName.toLowerCase().replace(" ", "")}.dev`,
    linkedin: `linkedin.com/in/${randomName.toLowerCase().replace(" ", "")}`,
    github: `github.com/${randomName.toLowerCase().replace(" ", "")}`,
    summary: `Experienced ${randomTitle.toLowerCase()} with 5+ years of experience building innovative solutions. Passionate about technology and continuous learning.`,
    experience: [
      {
        id: `exp1-${id}`,
        company: companies[Math.floor(Math.random() * companies.length)],
        role: `Senior ${randomTitle}`,
        duration: "2021 - Present",
        description: "Led cross-functional teams to deliver high-impact projects. Improved team efficiency by 40% through process optimization.",
      },
      {
        id: `exp2-${id}`,
        company: companies[Math.floor(Math.random() * companies.length)],
        role: randomTitle,
        duration: "2018 - 2021",
        description: "Developed and maintained critical systems. Collaborated with stakeholders to define requirements and deliverables.",
      },
    ],
    education: [
      {
        id: `edu1-${id}`,
        institution: universities[Math.floor(Math.random() * universities.length)],
        degree: "M.S. Computer Science",
        year: "2018",
      },
      {
        id: `edu2-${id}`,
        institution: universities[Math.floor(Math.random() * universities.length)],
        degree: "B.S. Computer Science",
        year: "2016",
      },
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "SQL"].slice(0, 5 + Math.floor(Math.random() * 4)),
  };
}

function generateMockRawText(cv: ParsedCV): string {
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
}

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

  const handleFilesAdded = useCallback((newFiles: File[]) => {
    const cvFiles: CVFile[] = newFiles.map((file, index) => ({
      id: `file-${Date.now()}-${index}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: "pending" as const,
    }));
    
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

      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

      const mockCV = generateMockCV(file.name, file.id);
      const mockRawText = generateMockRawText(mockCV);

      setParsedCVs(prev => new Map(prev).set(file.id, mockCV));
      setRawTexts(prev => new Map(prev).set(file.id, mockRawText));

      setFiles(prev => prev.map(f =>
        f.id === file.id ? { ...f, status: "done" as const } : f
      ));
    }

    setIsProcessing(false);
    toast({
      title: "Processing complete",
      description: `${pendingFiles.length} CV${pendingFiles.length > 1 ? "s" : ""} parsed successfully`,
    });
  }, [files, toast]);

  const handleClearAll = useCallback(() => {
    setFiles([]);
    setParsedCVs(new Map());
    setRawTexts(new Map());
    setSelectedFileId(null);
    toast({ title: "All files cleared" });
  }, [toast]);

  const handleExportAll = useCallback(() => {
    const doneFiles = files.filter(f => f.status === "done");
    toast({
      title: "Export started",
      description: `Preparing ${doneFiles.length} CV${doneFiles.length > 1 ? "s" : ""} for download`,
    });
  }, [files, toast]);

  const handleUpdateCV = useCallback((cv: ParsedCV) => {
    setParsedCVs(prev => new Map(prev).set(cv.id, cv));
    setRawTexts(prev => new Map(prev).set(cv.id, generateMockRawText(cv)));
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
