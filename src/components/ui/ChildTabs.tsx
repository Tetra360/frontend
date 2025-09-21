import React from "react";

/**
 * タブのデータ型定義
 */
export interface TabData {
  value: string; // タブの識別子（一意である必要がある）
  label: string; // タブに表示されるテキスト
}

interface TabProps {
  tabs: TabData[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Tab({ tabs, activeTab, onTabChange }: TabProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="max-w-7xl mx-auto">
      {/* タブの横スクロールコンテナ */}
      {/* flex: 子要素を横並びに配置 */}
      {/* overflow-x-auto: 横方向のスクロールを有効化 */}
      {/* scrollbar-hide: スクロールバーを非表示にするカスタムクラス */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={
          {
            scrollbarWidth: "none", // Firefox用のスクロールバー非表示
            msOverflowStyle: "none", // IE/Edge用のスクロールバー非表示
          } as React.CSSProperties
        }
        // マウスホイールイベントハンドラー
        // 縦スクロールを横スクロールに変換
        onWheel={e => {
          e.preventDefault(); // デフォルトの縦スクロールを無効化
          e.currentTarget.scrollLeft += e.deltaY; // 縦スクロール量を横スクロールに変換
        }}
      >
        {/* タブの左側の残りスペースを埋める下線要素 */}
        <div className="border-b border-gray-400 flex-grow px-2"></div>
        {/* タブ配列をmapでループしてボタンを生成 */}
        {tabs.map(tab => (
          <button
            key={tab.value} // Reactのkey属性（一意である必要がある）
            onClick={() => onTabChange(tab.value)} // クリック時に親コンポーネントに通知
            className={`
              px-4 py-2 whitespace-nowrap flex-shrink-0
              ${
                activeTab === tab.value
                  ? "border-gray-400 border-l border-r border-t border-b-0 rounded-t-md text-black font-bold" // アクティブタブのスタイル（下部ボーダーなし、上部角丸）
                  : "border-gray-400 border-b text-gray-400 hover:text-black" // 通常の非アクティブタブのスタイル
              }
                `}
          >
            {/* タブのラベルテキストを表示 */}
            {tab.label}
          </button>
        ))}
        {/* タブの右側の残りスペースを埋める下線要素 */}
        <div className="border-b border-gray-400 flex-grow-9 px-2"></div>
      </div>
    </div>
  );
}

export { Tab };
