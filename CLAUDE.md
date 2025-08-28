# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a traditional multi-page website project for "整理のミカタ" (Estate Organization Service) built with vanilla JavaScript, HTML, and CSS. The project uses Vite as the build tool and integrates with MicroCMS for blog content management.

## Architecture

### Frontend Structure
- **Static HTML Pages**: Traditional multi-page website (`index.html`, `about.html`, `services.html`, etc.)
- **JavaScript**: Vanilla JavaScript modules in `js/` directory for interactive functionality
- **Styling**: Traditional CSS (`css/style.css`) 
- **Content Management**: MicroCMS integration for blog functionality via `microcms-js-sdk`

### Key Technologies
- **Build Tool**: Vite with multiple entry points for different HTML pages
- **JavaScript**: Vanilla ES6+ modules (no framework)
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
- Static HTML pages and assets in root directory
- JavaScript modules in `js/` directory
- Styling in `css/` directory  
- Images in `images/` directory
- Tests in `tests/` directory

### Content Management
- Blog content fetched from MicroCMS via `microcms-js-sdk`
- Environment variables required: `VITE_MICROCMS_SERVICE_DOMAIN`, `VITE_MICROCMS_API_KEY`
- Blog integration handled by `js/blog.js` and `js/blog-detail.js`

### Build Configuration
- Multi-page setup via Vite `rollupOptions.input` with entries: main, about, services, contact, faq, blog, blogDetail, mainJs
- Each HTML page has its own JavaScript entry point in `js/` directory
- Static assets served from `images/` and `css/` directories
- Base path configured for Lovable deployment: `/serene-green-memories-local/`

### Testing Setup
- Playwright configured for cross-browser testing (Chrome, Firefox, Safari)
- Test server automatically starts on `http://localhost:8080`
- Tests located in `tests/` directory

### JavaScript Architecture
- `js/main.js`: Core functionality including mobile menu, testimonial slider, FAQ accordion, contact form
- `js/index.js`: Entry point for main page
- `js/blog.js`: Blog listing page functionality
- `js/blog-detail.js`: Individual blog post functionality

## Git Workflow

### Automatic Push Policy
- **IMPORTANT**: After completing any code changes, always commit and push to GitHub automatically
- Use descriptive commit messages that explain the changes and their purpose
- Follow the established commit message format with Claude Code attribution

## Environment Setup
- Environment variables stored in `.env` file (not committed to git)
- Required variables: `VITE_MICROCMS_SERVICE_DOMAIN`, `VITE_MICROCMS_API_KEY`
- Development server runs on `http://localhost:8080` (configured in Playwright and Vite)

## Project Notes
- Despite README.md mentioning React/TypeScript/Tailwind, this project actually uses vanilla JavaScript, HTML, and CSS
- The README.md appears to be a template from Lovable platform and doesn't accurately reflect the current tech stack