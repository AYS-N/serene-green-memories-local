# ミカタ（遺品整理サービス）Webサイト

静的マルチページ（MPA）構成のマーケティングサイトです。Vite を用いて開発・ビルドし、ブログのみ MicroCMS と連携しています。GitHub Pages へ自動デプロイされます。

## 主な機能

- トップ・サービス・会社情報・FAQ・お問い合わせなどの静的ページ（`index.html`、`services.html`、`about.html`、`faq.html`、`contact.html`）
- ブログ一覧／詳細（`blog.html`、`blog-detail.html`）
  - MicroCMS から記事を取得
  - カテゴリ絞り込み・ページネーション
  - 環境変数が未設定の場合はサンプルデータにフォールバック
- UI 挙動（`js/main.js`）
  - スマホナビ、FAQ アコーディオン、簡易見積りウィザード など

## 技術スタック

- HTML5 / CSS3 / Vanilla JavaScript (ES6+)
- Vite（マルチページ入力でビルド）
- MicroCMS（ブログ用）
- Playwright（E2E テスト）
- ESLint

補足:
- リポジトリに `tailwind.config.ts` はありますが、現状 Tailwind は未使用です。
- `microcms-js-sdk` が依存に含まれていますが、現状は `fetch` による API 呼び出しで実装しています。

## 必要要件

- Node.js 18 以上
- npm

## セットアップ

```sh
npm i
```

MicroCMS を使用する場合は、リポジトリルートに `.env` を作成し、以下を設定してください。

```dotenv
VITE_MICROCMS_SERVICE_DOMAIN=your-service-domain
VITE_MICROCMS_API_KEY=your-api-key
```

セキュリティ上、`.env` は Git にコミットしないことを推奨します（必要に応じて `.gitignore` に追加）。既にコミット済みのキーがある場合は、必ずキーのローテーションを行ってください。

## 開発（ローカル）

```sh
npm run dev
```

開発サーバ: http://localhost:8080

Vite のベースパスは GitHub Pages 用に `vite.config.js` で `base: '/serene-green-memories-local/'` に設定されています。リポジトリ名を変更する場合は、`base` も合わせて更新してください。

## ビルドとプレビュー

```sh
npm run build      # dist/ に出力
npm run preview    # ビルド結果のローカルプレビュー
```

## テスト

Playwright による E2E テストを用意しています。

```sh
npm run test         # ヘッドレス
npm run test:headed  # ブラウザ表示あり
npm run test:ui      # Playwright UI
```

設定: `playwright.config.js`（テスト時に開発サーバを起動し、`http://localhost:8080` に接続）

## デプロイ（GitHub Pages）

- `main` ブランチへの push をトリガに、GitHub Actions（`.github/workflows/deploy.yml`）でビルド・デプロイされます。
- 出力ディレクトリは `dist/` です。
- カスタムドメインを使う場合は、GitHub Pages の設定で CNAME を構成してください（必要に応じてリポジトリの `base` 設定も見直してください）。

## ディレクトリ構成（抜粋）

```
.
├── index.html              # トップページ
├── about.html              # 会社情報
├── services.html           # サービス
├── contact.html            # お問い合わせ
├── faq.html                # FAQ
├── blog.html               # ブログ一覧（MicroCMS）
├── blog-detail.html        # ブログ詳細（MicroCMS）
├── css/
│   └── style.css           # サイトのスタイル
├── js/
│   ├── main.js             # ナビ/FAQ/簡易見積りなどの UI
│   ├── index.js            # トップの最新ブログプレビュー
│   ├── blog.js             # 一覧取得・ページネーション
│   └── blog-detail.js      # 記事詳細・関連記事・カテゴリ
├── images/                 # 画像アセット
├── tests/
│   └── example.spec.js     # E2E サンプル
├── vite.config.js          # Vite 設定（base, multi-input）
├── playwright.config.js    # Playwright 設定
└── package.json
```

## MicroCMS について

- 必要な環境変数
  - `VITE_MICROCMS_SERVICE_DOMAIN`
  - `VITE_MICROCMS_API_KEY`
- 環境変数が未設定・無効の場合、ブログはサンプルデータ表示にフォールバックします（ローカル開発を止めず検証可能）。

## Lint / コードスタイル

```sh
npm run lint
```

## 補足ドキュメント

開発メモや方針は `.serena/memories/` 配下に整理されています。

---

不明点や改善要望があれば Issue / PR を作成してください。
