# Code Style and Conventions

## TypeScript Configuration
- **Strict Mode**: Disabled (strict: false)
- **Unused Variables**: Warnings disabled (noUnusedLocals/Parameters: false)
- **Implicit Any**: Allowed (noImplicitAny: false)
- **Target**: ES2020
- **Module**: ESNext with bundler resolution
- **JSX**: react-jsx

## Naming Conventions
- **Files**: kebab-case for HTML files, PascalCase for React components
- **Components**: PascalCase (e.g., BlogCard.tsx)
- **Hooks**: camelCase with 'use' prefix (e.g., use-mobile.tsx)
- **Utilities**: camelCase (e.g., utils.ts)
- **Types**: PascalCase (e.g., BlogCardProps, Blog)

## File Organization Patterns
- **React Components**: src/components/ (PascalCase.tsx)
- **UI Components**: src/components/ui/ (kebab-case.tsx)
- **Hooks**: src/hooks/ (use-*.tsx or use-*.ts)
- **Utilities**: src/lib/ (*.ts)
- **Types**: Defined in same file as component or in lib files

## Import/Export Conventions
- **Path Aliases**: Use "@/" for src/ directory imports
- **Default Exports**: Used for React components
- **Named Exports**: Used for utilities and hooks

## Styling Conventions
- **React Components**: Use Tailwind CSS classes
- **Traditional Pages**: Use traditional CSS in css/style.css
- **Class Utilities**: Use cn() utility from lib/utils.ts for conditional classes
- **Component Composition**: Follow shadcn/ui patterns

## MicroCMS Integration
- **Types**: Define TypeScript interfaces for CMS content
- **Client**: Use centralized client in lib/microcms.ts
- **Functions**: Export specific functions for different content types

## Language Support
- **Primary Language**: Japanese (ja)
- **HTML Lang**: Set to "ja" in all HTML files
- **Font Support**: Noto Sans JP and Noto Serif JP for Japanese text