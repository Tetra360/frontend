import { Tab, type TabData } from "@/components/ui/ChildTabs";
import { useState } from "react";

/**
 * Tab2コンポーネント
 * 2番目のタブの専用画面を表示
 */
function Tab2() {
  const [activeTab, setActiveTab] = useState("subtab1");

  // Tab2内で使用する3つのサブタブ
  const tabs: TabData[] = [
    { value: "subtab1", label: "Sub Tab 1" },
    { value: "subtab2", label: "Sub Tab 2" },
    { value: "subtab3", label: "Sub Tab 3" },
    { value: "subtab4", label: "Sub Tab 4" },
    { value: "subtab5", label: "Sub Tab 5" },
    { value: "subtab6", label: "Sub Tab 6" },
    { value: "subtab7", label: "Sub Tab 7" },
    { value: "subtab8", label: "Sub Tab 8" },
    { value: "subtab9", label: "Sub Tab 9" },
    { value: "subtab10", label: "Sub Tab 10" },
    { value: "subtab11", label: "Sub Tab 11" },
    { value: "subtab12", label: "Sub Tab 12" },
    { value: "subtab13", label: "Sub Tab 13" },
    { value: "subtab14", label: "Sub Tab 14" },
    { value: "subtab15", label: "Sub Tab 15" },
    { value: "subtab16", label: "Sub Tab 16" },
    { value: "subtab17", label: "Sub Tab 17" },
    { value: "subtab18", label: "Sub Tab 18" },
    { value: "subtab19", label: "Sub Tab 19" },
    { value: "subtab20", label: "Sub Tab 20" },
  ];

  return (
    <div className="px-8 py-4">
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export { Tab2 };
