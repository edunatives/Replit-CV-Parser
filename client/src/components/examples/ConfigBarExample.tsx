import { useState } from "react";
import { ConfigBar } from "../ConfigBar";
import { ThemeProvider } from "../ThemeProvider";
import type { TemplateType } from "../TemplateThumbnails";

export default function ConfigBarExample() {
  const [parserMode, setParserMode] = useState("intelligent");
  const [outputFormat, setOutputFormat] = useState("pdf");
  const [template, setTemplate] = useState<TemplateType>("modern-dark");

  return (
    <ThemeProvider>
      <div className="bg-background p-4">
        <ConfigBar
          parserMode={parserMode}
          onParserModeChange={setParserMode}
          outputFormat={outputFormat}
          onOutputFormatChange={setOutputFormat}
          template={template}
          onTemplateChange={setTemplate}
          processingCount={0}
          totalFiles={3}
        />
      </div>
    </ThemeProvider>
  );
}
