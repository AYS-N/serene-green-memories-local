# Codebase Structure

## Root Directory Structure
```
├── src/                    # React/TypeScript source code
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   └── BlogCard.tsx   # Custom components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   │   ├── microcms.ts    # MicroCMS client and types
│   │   └── utils.ts       # General utilities
│   └── vite-env.d.ts      # Vite type definitions
├── js/                    # Traditional JavaScript files
│   ├── blog.js            # Blog page functionality
│   ├── blog-detail.js     # Blog detail page functionality
│   ├── index.js           # Homepage functionality
│   └── main.js            # Main JavaScript
├── css/                   # Traditional CSS
│   └── style.css          # Main stylesheet
├── images/                # Static images
├── tests/                 # Playwright tests
├── public/                # Public assets
├── *.html                 # HTML pages (index, about, services, etc.)
└── config files           # Vite, TypeScript, Tailwind, etc.
```

## Page Structure
- **Static HTML Pages**: index.html, about.html, services.html, contact.html, faq.html
- **Dynamic Pages**: blog.html, blog-detail.html (with MicroCMS integration)
- **Entry Points**: Each HTML page has corresponding JavaScript in js/ directory

## Component Organization
- **UI Components**: Located in src/components/ui/ (shadcn/ui library)
- **Custom Components**: Located in src/components/
- **Hooks**: Custom React hooks in src/hooks/
- **Utilities**: Helper functions in src/lib/

## Asset Organization
- **Static Assets**: images/, css/ directories
- **Public Assets**: public/ directory for Vite
- **Fonts**: Google Fonts (Noto Sans JP, Noto Serif JP) loaded via CDN