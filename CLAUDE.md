# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project for "整理のミカタ" (Estate Organization Service) that provides estate organization, cleanup, and valuation services. The project uses Vite as the build tool and integrates with MicroCMS for blog content management.

## Architecture

### Frontend Structure
- **Static HTML Pages**: Traditional multi-page website (`index.html`, `about.html`, `services.html`, `contact.html`, `faq.html`, `blog.html`, `blog-detail.html`)
- **Styling**: Traditional CSS (`css/style.css`) with modern CSS features
- **JavaScript**: Vanilla ES6+ modules in `js/` directory for page-specific functionality
- **Content Management**: MicroCMS integration for blog functionality

### Key Technologies
- **Build Tool**: Vite with multiple entry points for different HTML pages
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (ES6+)
- **CMS**: MicroCMS for blog content (microcms-js-sdk)
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
- **HTML files**: Root directory - each page is a separate HTML file
- **JavaScript**: `js/` directory with page-specific modules (`main.js`, `index.js`, `blog.js`, `blog-detail.js`)
- **CSS**: Single stylesheet at `css/style.css`
- **Images**: Static assets in `images/` directory
- **Tests**: Playwright tests in `tests/` directory

### Content Management
- Blog content fetched from MicroCMS via JavaScript modules
- Environment variables required: `VITE_MICROCMS_SERVICE_DOMAIN`, `VITE_MICROCMS_API_KEY`
- Blog functionality implemented in `js/blog.js` and `js/blog-detail.js`
- No server-side rendering - content loaded client-side via fetch API

### Build Configuration
- Multi-page setup via Vite `rollupOptions.input` with entries for each HTML page
- Each HTML page can have its own JavaScript entry point
- Static assets served from root-level directories (`images/`, `css/`)
- Development server runs on port 8080 with IPv6 support

### Business Context
- Estate organization service focusing on cleanup and valuation
- Integrated buying/valuation service as part of cleanup work (not standalone buying service)
- International sales network including Philippines for items difficult to sell domestically
- Services include estate organization, cleanup, waste removal, and integrated valuation

### Testing Setup
- Playwright configured for cross-browser testing (Chrome, Firefox, Safari)
- Test server automatically starts on `http://localhost:8080`
- Tests located in `tests/` directory

## MCP Server Integration

The project includes MCP server configurations in the `mcp-servers/` directory with various utilities including filesystem, fetch, git, and memory servers. These are development tools and not part of the main application.