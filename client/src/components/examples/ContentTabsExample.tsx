import { useState } from "react";
import { ContentTabs, type TabType } from "../ContentTabs";
import { ThemeProvider } from "../ThemeProvider";

export default function ContentTabsExample() {
  const [activeTab, setActiveTab] = useState<TabType>("preview");

  return (
    <ThemeProvider>
      <div className="bg-card border border-border rounded-lg p-4">
        <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </ThemeProvider>
  );
}
