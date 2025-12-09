import { useState } from "react";
import { TemplateThumbnails, type TemplateType } from "../TemplateThumbnails";
import { ThemeProvider } from "../ThemeProvider";

export default function TemplateThumbnailsExample() {
  const [selected, setSelected] = useState<TemplateType>("modern-dark");

  return (
    <ThemeProvider>
      <div className="bg-card border border-border rounded-lg p-4">
        <TemplateThumbnails selected={selected} onSelect={setSelected} />
      </div>
    </ThemeProvider>
  );
}
