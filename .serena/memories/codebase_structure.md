# Codebase Structure (Updated 2025-08-22)

## 整理のミカタ - Static Website Architecture

### ディレクトリ構造
```
serene-green-memories-local/
├── css/                    # スタイルシート
│   └── style.css          # メインスタイル
├── images/                 # 画像アセット
├── js/                     # JavaScript modules
│   ├── blog.js            # ブログ一覧機能
│   ├── blog-detail.js     # ブログ詳細機能  
│   ├── index.js           # メインページ機能
│   └── main.js            # 共通機能
├── tests/                  # Playwright E2Eテスト
├── .claude/               # Claude Code設定
├── .playwright-mcp/       # Playwright MCP設定
├── .serena/              # Serenaメモリ
└── HTML Pages:
    ├── index.html         # トップページ
    ├── about.html         # 会社概要
    ├── services.html      # サービス紹介
    ├── contact.html       # お問い合わせ
    ├── faq.html          # よくある質問
    ├── blog.html         # ブログ一覧
    └── blog-detail.html  # ブログ詳細
```

### アーキテクチャの特徴
1. **マルチページ静的サイト** - 各HTMLファイルが独立したページ
2. **Viteによるビルド** - モダンなビルドツールで最適化
3. **MicroCMS統合** - ブログコンテンツ管理
4. **従来型JavaScript** - ES6 modulesを使用した軽量な実装

### ビルド設定 (vite.config.js)
```javascript
rollupOptions: {
  input: {
    main: 'index.html',
    about: 'about.html', 
    services: 'services.html',
    contact: 'contact.html',
    faq: 'faq.html',
    blog: 'blog.html',
    blogDetail: 'blog-detail.html',
    mainJs: 'js/main.js'
  }
}
```

### JavaScript Module構成
- **main.js**: 共通機能（ナビゲーション、フォーム処理等）
- **index.js**: トップページ固有機能
- **blog.js**: MicroCMSからブログ一覧取得・表示
- **blog-detail.js**: ブログ詳細ページ機能

### 重要な設計原則
1. **シンプルさ重視** - 複雑なフレームワークを避けた軽量実装
2. **SEO最適化** - 静的HTMLによる検索エンジン最適化
3. **高速ロード** - 最小限のJavaScriptとCSS
4. **保守性** - 明確な責任分離とモジュール化