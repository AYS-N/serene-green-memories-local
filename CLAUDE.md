# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a hybrid website project for "整理のミカタ" (Estate Organization Service) that combines traditional static HTML pages with modern React/TypeScript components. The project uses Vite as the build tool and integrates with MicroCMS for blog content management.

## Architecture

### Frontend Structure
- **Static HTML Pages**: Traditional multi-page website (`index.html`, `about.html`, `services.html`, etc.)
- **React Components**: Modern UI components in `src/components/` using shadcn/ui library
- **Styling**: Combination of traditional CSS (`css/style.css`) and Tailwind CSS for React components
- **Content Management**: MicroCMS integration for blog functionality

### Key Technologies
- **Build Tool**: Vite with multiple entry points for different HTML pages
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components (Radix UI primitives)
- **Styling**: Tailwind CSS + traditional CSS
- **CMS**: MicroCMS for blog content
- **Testing**: Playwright for E2E testing
- **Deployment**: Lovable platform

## Common Development Commands

```bash
# Development server (runs on localhost:8080)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Linting
npm run lint

# Testing
npm run test              # Run Playwright tests
npm run test:headed       # Run tests with browser UI
npm run test:ui          # Run tests with Playwright UI

# Preview production build
npm run preview

# Install dependencies
npm i
```

## Development Guidelines

### File Organization
- Static assets and traditional pages in root directory
- React components in `src/components/`
- Utility functions in `src/lib/`
- Custom hooks in `src/hooks/`
- Component aliases use `@/` prefix (resolves to `./src`)

### Content Management
- Blog content fetched from MicroCMS via `src/lib/microcms.ts`
- Environment variables required: `VITE_MICROCMS_SERVICE_DOMAIN`, `VITE_MICROCMS_API_KEY`
- Blog components: `BlogCard.tsx` for article display
- Blog pages use vanilla JavaScript for MicroCMS integration (see `js/blog.js`, `js/blog-detail.js`)

### Build Configuration
- Multi-page setup via Vite `rollupOptions.input` with entries: main, about, services, contact, faq, blog, blogDetail
- Each HTML page has its own JavaScript entry point in `js/` directory
- Static assets served from `images/` and `css/` directories
- Hybrid architecture combines traditional JavaScript (in `js/` directory) with React components

### Testing Setup
- Playwright configured for cross-browser testing (Chrome, Firefox, Safari)
- Test server automatically starts on `http://localhost:8080`
- Tests located in `tests/` directory

## MCP Server Integration

The project includes MCP server configurations in the `mcp-servers/` directory with various utilities including filesystem, fetch, git, and memory servers. These are development tools and not part of the main application.