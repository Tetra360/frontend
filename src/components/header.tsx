import React from "react";

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
  // スクロール状態を管理するためのref
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = React.useState(false);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [visibleLastIndex, setVisibleLastIndex] = React.useState(-1);

  // スクロール可能かどうかとスクロール位置をチェック
  const checkScrollState = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // スクロール可能かどうかをチェック
    const canScroll = container.scrollWidth > container.clientWidth;
    setIsScrollable(canScroll);

    // 右端にいるかどうかをチェック
    const atEnd =
      container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
    setIsAtEnd(atEnd);

    // 現在表示されている最後の要素のインデックスを計算
    if (canScroll && !atEnd) {
      const containerRect = container.getBoundingClientRect();
      const containerRight = containerRect.right;

      // 各タブボタンの位置をチェック
      const buttons = container.querySelectorAll("button");
      let lastVisibleIndex = -1;

      buttons.forEach((button, index) => {
        const buttonRect = button.getBoundingClientRect();
        // ボタンの左端がコンテナの右端より左にある場合、表示されている
        // 右端の判定を少し余裕を持たせる（5pxのマージン）
        if (buttonRect.left < containerRight - 5) {
          lastVisibleIndex = index;
        }
      });

      setVisibleLastIndex(lastVisibleIndex);
    } else {
      setVisibleLastIndex(-1);
    }
  }, []);

  // スクロールイベントハンドラー
  const handleScroll = React.useCallback(() => {
    checkScrollState();
  }, [checkScrollState]);

  // コンポーネントマウント時とリサイズ時にスクロール状態をチェック
  React.useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, [checkScrollState]);

  return (
    // 外側のコンテナ（黒背景）
    <div className="bg-black">
      {/* 最大幅制限と中央寄せのコンテナ */}
      {/* max-w-7xl: 最大幅を7xl（約80rem）に制限 */}
      {/* mx-auto: 左右のマージンを自動にして中央寄せ */}
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
          // スクロールイベントハンドラー
          onScroll={handleScroll}
        >
          {/* タブ配列をmapでループしてボタンを生成 */}
          {tabs.map((tab, index) => {
            // 現在表示されている最後の要素かどうかを判定
            const isVisibleLastTab = index === visibleLastIndex;
            // スクロール可能で右端にいない場合、表示されている最後の要素を暗くする
            const shouldDimVisibleLastTab =
              isScrollable && !isAtEnd && isVisibleLastTab;

            return (
              <button
                key={tab.value} // Reactのkey属性（一意である必要がある）
                onClick={() => onTabChange(tab.value)} // クリック時に親コンポーネントに通知
                className={`
                            px-4 py-2 border-b-2 whitespace-nowrap flex-shrink-0
                            ${
                              activeTab === tab.value
                                ? "border-orange-500 text-gray-200 font-bold" // アクティブタブのスタイル
                                : shouldDimVisibleLastTab
                                  ? "border-black text-gray-500" // 表示されている最後の要素を暗くする（スクロール可能で右端にいない場合）
                                  : "border-black text-gray-200" // 通常の非アクティブタブのスタイル
                            }
                        `}
                // Tailwind CSSクラスの説明:
                // px-4: 左右のパディング（padding-left, padding-right）
                // py-2: 上下のパディング（padding-top, padding-bottom）
                // border-b-2: 下側に2pxのボーダー
                // whitespace-nowrap: テキストの改行を禁止
                // flex-shrink-0: フレックスアイテムが縮小されないようにする
                // border-orange-500: オレンジ色のボーダー（アクティブ時）
                // text-gray-200: 薄いグレーのテキスト色
                // text-gray-500: より暗いグレーのテキスト色（表示されている最後の要素用）
                // font-bold: 太字フォント（アクティブ時）
              >
                {/* タブのラベルテキストを表示 */}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Header };
