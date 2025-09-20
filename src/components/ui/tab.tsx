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
        className="flex overflow-x-auto scrollbar-hide px-4"
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
        {/* タブ配列をmapでループしてボタンを生成 */}
        {tabs.map(tab => (
          <button
            key={tab.value} // Reactのkey属性（一意である必要がある）
            onClick={() => onTabChange(tab.value)} // クリック時に親コンポーネントに通知
            className={`
                px-4 py-2 border-b-2 whitespace-nowrap flex-shrink-0
                ${
                  activeTab === tab.value
                    ? "border-orange-500 text-gray-200 font-bold" // アクティブタブのスタイル
                    : "border-black text-gray-400 hover:text-gray-200" // 通常の非アクティブタブのスタイル
                }
            `}
          >
            {/* タブのラベルテキストを表示 */}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export { Tab };
