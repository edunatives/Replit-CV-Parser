import { cn } from "@/lib/utils";

export type TabType = "preview" | "raw" | "json";

interface ContentTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "raw", label: "Raw Text" },
  { id: "json", label: "JSON" },
];

export function ContentTabs({ activeTab, onTabChange }: ContentTabsProps) {
  return (
    <div className="flex gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-3 py-1.5 text-[10px] uppercase tracking-widest rounded transition-all",
            activeTab === tab.id
              ? "bg-background text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
          data-testid={`tab-${tab.id}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
