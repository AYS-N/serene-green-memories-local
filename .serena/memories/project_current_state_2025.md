# Project Current State (Updated 2025-08-22)

## Project: 整理のミカタ (Estate Organization Service)

### Current Architecture Status
**完全に従来型の静的Webサイトプロジェクト**

プロジェクトは以前の記録とは異なり、現在はReactやTypeScriptを使用していない純粋な静的HTMLサイトです。

### 技術スタック (実際の状態)
- **フロントエンド**: 純粋なHTML + CSS + JavaScript
- **ビルドツール**: Vite (マルチページ設定)
- **スタイリング**: 従来のCSS (`css/style.css`)
- **CMS統合**: MicroCMS (ブログ機能用)
- **テスト**: Playwright

### ディレクトリ構造
```
serene-green-memories-local/
├── css/              # スタイルシート
├── images/           # 画像アセット
├── js/               # JavaScriptファイル
│   ├── blog.js
│   ├── blog-detail.js
│   ├── index.js
│   └── main.js
├── tests/            # Playwrightテスト
├── *.html            # 各ページのHTMLファイル
└── 設定ファイル群
```

### 重要な変更点
1. **src/ディレクトリが存在しない** - Reactコンポーネントなし
2. **dependencies**にはmicrocms-js-sdkのみ
3. **shadcn/ui、Tailwind CSS、TypeScript等は使用されていない**
4. **純粋な従来型のマルチページWebサイト**

### ページ構成
- index.html (メイン)
- about.html (会社概要)
- services.html (サービス)
- contact.html (お問い合わせ)
- faq.html (よくある質問)
- blog.html (ブログ一覧)
- blog-detail.html (ブログ詳細)

### 開発コマンド
- `npm run dev` - 開発サーバー (localhost:8080)
- `npm run build` - プロダクションビルド
- `npm run build:dev` - 開発ビルド
- `npm run lint` - ESLint
- `npm run test` - Playwrightテスト

### MicroCMS統合
- ブログ機能でMicroCMSを使用
- `js/blog.js`と`js/blog-detail.js`でAPI連携
- 環境変数: `VITE_MICROCMS_SERVICE_DOMAIN`, `VITE_MICROCMS_API_KEY`

### Git状態
- ブランチ: main
- 最新コミット: BookOff LP分析に基づく改善
- リポジトリ: クリーン状態