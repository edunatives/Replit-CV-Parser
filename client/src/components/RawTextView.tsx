import { ScrollArea } from "@/components/ui/scroll-area";

interface RawTextViewProps {
  text: string | null;
}

export function RawTextView({ text }: RawTextViewProps) {
  if (!text) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">No content to display</p>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 p-6">
      <pre className="text-xs font-mono whitespace-pre-wrap text-muted-foreground leading-relaxed">
        {text}
      </pre>
    </ScrollArea>
  );
}
