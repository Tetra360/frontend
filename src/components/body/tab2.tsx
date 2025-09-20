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
  ];

  return (
    <div className="p-12">
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export { Tab2 };
