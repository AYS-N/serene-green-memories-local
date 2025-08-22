# Technology Stack

## Core Technologies
- **Build Tool**: Vite 5.4.1
- **Frontend Framework**: React 18.3.1 with TypeScript 5.5.3
- **Styling**: 
  - Tailwind CSS 3.4.11 (for React components)
  - Traditional CSS (css/style.css for static pages)
- **UI Library**: shadcn/ui components based on Radix UI primitives
- **Content Management**: MicroCMS (microcms-js-sdk 3.2.0)
- **Testing**: Playwright for E2E testing
- **Package Manager**: npm

## Key Dependencies
### React Ecosystem
- React 18.3.1 + React DOM 18.3.1
- React Router DOM 6.26.2
- React Hook Form 7.53.0
- @tanstack/react-query 5.56.2

### UI Components (shadcn/ui + Radix UI)
- Complete shadcn/ui component library
- Radix UI primitives for accessibility
- Lucide React for icons
- Tailwind CSS with animations

### Development Tools
- ESLint for linting
- TypeScript for type safety
- PostCSS + Autoprefixer
- Playwright for testing

### Utilities
- clsx + tailwind-merge for className utilities
- date-fns for date formatting
- zod for schema validation

## Architecture Pattern
- **Multi-page Setup**: Each HTML page has its own entry point
- **Hybrid Approach**: Traditional HTML/CSS + React components
- **Component-based**: Reusable UI components in src/components/
- **Type-safe**: Full TypeScript coverage for React code