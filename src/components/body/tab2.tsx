/**
 * Tab2コンポーネント
 * 2番目のタブの専用画面を表示
 */
function Tab2() {
  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <h1 className="text-5xl font-bold mb-8 text-orange-500">Tab 2 Content</h1>

      <div className="p-8 bg-card rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Tab 2!</h2>
        <p className="text-muted-foreground mb-6">
          This is the content for the second tab. You can add any components or
          features here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-sm text-muted-foreground">
              Add your first feature description here.
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-sm text-muted-foreground">
              Add your second feature description here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Tab2 };
