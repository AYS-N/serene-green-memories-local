# Playwright Workflow Guidelines

## 必須作業手順

1. **開発サーバー起動**
   - `npm run dev` でローカルサーバーを起動
   - 常にバックグラウンドで実行

2. **Playwright画面確認**
   - すべてのCSSやHTML変更前後で画面確認
   - `browser_navigate` → 対象URLに移動
   - `browser_take_screenshot` → 変更前の状態を記録
   - `browser_snapshot` → 要素の詳細な状態確認

3. **変更作業**
   - CSS/HTML修正を実行
   - Playwrightで修正後の画面を確認
   - 複数の画面サイズでテスト（デスクトップ、タブレット、モバイル）

4. **レスポンシブテスト**
   - `browser_resize` で異なる画面サイズをテスト
   - デスクトップ: 1920x1080
   - タブレット: 768x1024  
   - モバイル: 375x667

5. **確認項目**
   - レイアウトの正確性
   - ボタンやリンクの動作
   - テキストの読みやすさ
   - 要素の配置とスペーシング

## 画面サイズテストパターン
```javascript
// デスクトップ
await page.setViewportSize({ width: 1920, height: 1080 });

// タブレット
await page.setViewportSize({ width: 768, height: 1024 });

// モバイル
await page.setViewportSize({ width: 375, height: 667 });
```

この手順を必ず守り、視覚的な確認を怠らないこと。