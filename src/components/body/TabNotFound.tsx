/**
 * TabNotFoundコンポーネント
 * 存在しないタブが選択された場合のフォールバック画面
 */
function TabNotFound() {
  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <h1 className="text-5xl font-bold mb-8">Tab Not Found</h1>
      <p className="text-muted-foreground">
        The selected tab content is not available.
      </p>
    </div>
  );
}

export { TabNotFound };
