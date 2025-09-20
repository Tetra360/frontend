import { Tab } from "@/components/ui/tab";
import reactLogo from "@/assets/react.svg";

/**
 * タブナビゲーションコンポーネント
 * GitHub風のタブデザインで、横スクロール機能付き
 */

// タブのデータ配列
// value: タブの識別子（一意である必要がある）
// label: タブに表示されるテキスト
const tabs = [
  { value: "tab1", label: "tab1" },
  { value: "tab2", label: "tab2" },
  { value: "tab3", label: "tab3" },
  { value: "tab4", label: "tab4" },
  { value: "tab5", label: "tab5" },
  { value: "tab6", label: "tab6" },
  { value: "tab7", label: "tab7" },
  { value: "tab8", label: "tab8" },
  { value: "tab9", label: "tab9" },
  { value: "tab10", label: "tab10" },
  { value: "tab11", label: "tab11" },
  { value: "tab12", label: "tab12" },
  { value: "tab13", label: "tab13" },
  { value: "tab14", label: "tab14" },
  { value: "tab15", label: "tab15" },
  { value: "tab16", label: "tab16" },
  { value: "tab17", label: "tab17" },
  { value: "tab18", label: "tab18" },
  { value: "tab19", label: "tab19" },
  { value: "tab20", label: "tab20" },
];

// コンポーネントのProps（プロパティ）の型定義
interface HeaderProps {
  activeTab: string; // 現在選択されているタブのvalue
  onTabChange: (tab: string) => void; // タブがクリックされた時に呼ばれる関数
}

/**
 * ヘッダータブコンポーネント
 * @param activeTab - 現在アクティブなタブのvalue
 * @param onTabChange - タブクリック時のコールバック関数
 */
function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    // headerのコンテナ（黒背景）
    <div className="bg-black">
      {/* タイトルのコンテナ */}
      <div className="px-4 py-2 flex items-center">
        {/* リアクトロゴ */}
        <img
          src={reactLogo}
          className="h-12 p-2 transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-cyan-400/50 animate-spin"
          style={{ animationDuration: "20s" }}
          alt="React logo"
        />
        {/* タイトル */}
        <h1 className="text-white text-bold text-3xl">
          React + Vite + TailwindCSS + Electron
        </h1>
      </div>
      {/* タブコンポーネント */}
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

export { Header };
