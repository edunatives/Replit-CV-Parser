import { ScrollArea } from "@/components/ui/scroll-area";
import type { ParsedCV } from "./CVPreview";

interface JsonViewProps {
  cv: ParsedCV | null;
}

export function JsonView({ cv }: JsonViewProps) {
  if (!cv) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">No data to display</p>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 p-6">
      <pre className="text-xs font-mono text-muted-foreground leading-relaxed">
        {JSON.stringify(cv, null, 2)}
      </pre>
    </ScrollArea>
  );
}
