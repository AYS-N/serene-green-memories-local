# Project Guidelines (Updated 2025-08-22)

## 整理のミカタ - Development Guidelines

### Code Style & Conventions
1. **HTML**: セマンティックHTML5を使用
   - 適切なheading hierarchy (h1, h2, h3...)
   - ARIA属性でアクセシビリティ向上
   - meta tags for SEO optimization

2. **CSS**: 
   - BEM methodologyまたは明確なクラス命名
   - mobile-first responsive design
   - css/style.cssに統一

3. **JavaScript**:
   - ES6+ features (const/let, arrow functions, async/await)
   - Module system for code organization
   - 適切なエラーハンドリング
   - API呼び出しにはfetch API使用

### File Organization
```
HTML files: ルートディレクトリ
CSS: css/style.css
JavaScript: js/[page-name].js
Images: images/
Tests: tests/
```

### MicroCMS Integration Best Practices
1. **Error Handling**: API呼び出しは適切なtry-catch
2. **Loading States**: ユーザーにロード状態を表示
3. **環境変数**: VITEプリフィックス必須
4. **Content Validation**: CMS データの存在チェック

### Development Workflow
1. **Local Development**: `npm run dev` (localhost:8080)
2. **Testing**: 機能追加後はPlaywrightテスト実行
3. **Linting**: コミット前に `npm run lint`
4. **Build Check**: デプロイ前に `npm run build` で確認

### Performance Guidelines
1. **Image Optimization**: 適切なフォーマット・サイズ
2. **Lazy Loading**: 画像の遅延読み込み
3. **Minification**: Viteビルドで自動最適化
4. **Caching**: 静的アセットの適切なキャッシュ設定

### SEO Best Practices
1. **Meta Tags**: 各ページに適切なtitle, description
2. **Structured Data**: JSON-LD for rich snippets
3. **Open Graph**: SNSシェア用メタデータ
4. **Sitemap**: 検索エンジン向けサイトマップ

### Accessibility Standards
1. **WCAG 2.1 AA準拠**を目標
2. **キーボードナビゲーション**対応
3. **スクリーンリーダー**対応
4. **色コントラスト**の確保

### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge (最新2バージョン)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: 基本機能は全ブラウザで動作

### Security Considerations
1. **Content Security Policy** (CSP) 設定
2. **XSS対策**: ユーザー入力の適切なエスケープ
3. **HTTPS**: 本番環境では必須
4. **API Keys**: 環境変数で管理、クライアントサイド露出注意