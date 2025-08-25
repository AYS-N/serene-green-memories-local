# Tech Stack (Updated 2025-08-22)

## 整理のミカタ - Technology Stack

### Core Technologies
- **HTML5**: 標準的なセマンティックマークアップ
- **CSS3**: 従来型スタイリング（css/style.css）
- **Vanilla JavaScript (ES6+)**: フレームワークなしのモダンJS
- **Vite**: 高速ビルドツール・開発サーバー

### Content Management
- **MicroCMS**: ヘッドレスCMS（ブログ機能）
- **microcms-js-sdk**: MicroCMS JavaScript SDK

### Development & Testing
- **ESLint**: JavaScript linting
- **Playwright**: E2Eテスト自動化
- **Git**: バージョン管理

### Build & Deployment
- **Vite**: バンドリング・最適化
- **Multi-page configuration**: 各HTMLファイルを個別エントリーポイント
- **Lovable platform**: デプロイメント（想定）

### Dependencies (package.json)
#### Production
```json
{
  "microcms-js-sdk": "^3.2.0"
}
```

#### Development
```json
{
  "@eslint/js": "^9.9.0",
  "@playwright/test": "^1.55.0", 
  "eslint": "^9.9.0",
  "globals": "^15.9.0",
  "vite": "^5.4.1"
}
```

### 重要な技術的特徴
1. **フレームワークフリー**: React/Vue/Angularなし
2. **軽量設計**: 最小限の依存関係
3. **モダンJS**: ES6 modules, async/await, fetch API
4. **静的サイト**: サーバーサイドレンダリングなし
5. **CMS統合**: MicroCMSでコンテンツ管理

### 開発環境要件
- Node.js (package.jsonで管理)
- 環境変数:
  - `VITE_MICROCMS_SERVICE_DOMAIN`
  - `VITE_MICROCMS_API_KEY`

### ビルド出力
- `dist/`: プロダクションビルド
- 各HTMLファイルとアセットが最適化されて出力