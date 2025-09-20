import { useState } from "react";
import { Header } from "@/components/header/Header";
import { Tab1 } from "@/components/body/Tab1";
import { Tab2 } from "@/components/body/Tab2";
import { TabNotFound } from "@/components/body/TabNotFound";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  // タブの内容をレンダリングする関数
  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <Tab1 />;
      case "tab2":
        return <Tab2 />;
      default:
        return <TabNotFound />;
    }
  };

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderTabContent()}
    </>
  );
}

export default App;
