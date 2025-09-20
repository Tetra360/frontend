import { useState } from "react";
import { Header } from "@/components/header/header";
import { Tab1 } from "@/components/body/tab1";
import { Tab2 } from "@/components/body/tab2";
import { TabNotFound } from "@/components/body/tab-not-found";

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
