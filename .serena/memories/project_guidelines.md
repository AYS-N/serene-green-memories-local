# Project Guidelines and Design Patterns

## Architecture Guidelines

### Hybrid Development Approach
- **Static Pages**: Use traditional HTML/CSS for service pages (index, about, services, etc.)
- **Dynamic Components**: Use React/TypeScript for interactive elements and blog functionality
- **Build Strategy**: Vite handles both traditional and modern JavaScript bundling

### Component Design Patterns
- **shadcn/ui**: Follow established patterns from shadcn/ui library
- **Composition**: Prefer component composition over complex prop drilling
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Responsive**: Mobile-first approach with Tailwind CSS

### State Management
- **Local State**: React useState for component-level state
- **Server State**: @tanstack/react-query for API data management
- **Forms**: React Hook Form with Zod validation

## Content Management Patterns
- **MicroCMS Integration**: Use centralized client in lib/microcms.ts
- **Type Safety**: Define TypeScript interfaces for all CMS content
- **Error Handling**: Implement proper error boundaries for CMS failures

## Development Patterns

### File Naming
- **Components**: PascalCase.tsx (e.g., BlogCard.tsx)
- **Utilities**: camelCase.ts (e.g., utils.ts)
- **Hooks**: use-*.tsx pattern (e.g., use-mobile.tsx)
- **Pages**: kebab-case.html (e.g., blog-detail.html)

### Import Organization
- **React imports first**
- **Third-party libraries**
- **Internal components**
- **Utilities and types**

### Styling Patterns
- **Utility-first**: Use Tailwind CSS for React components
- **Traditional CSS**: Maintain existing CSS for static pages
- **Conditional Styling**: Use cn() utility for dynamic classes
- **Responsive Design**: Mobile-first breakpoints

## Quality Guidelines
- **TypeScript**: Use TypeScript for all React code, but strict mode is disabled
- **Testing**: Write Playwright tests for critical user journeys
- **Performance**: Optimize for Japanese market (consider network conditions)
- **SEO**: Maintain proper meta tags and semantic HTML

## Japanese Localization
- **Language**: All content in Japanese
- **Typography**: Use Noto fonts for proper Japanese rendering
- **Cultural Considerations**: Follow Japanese web design conventions
- **Accessibility**: Ensure screen reader compatibility with Japanese content

## Environment Considerations
- **Windows Development**: Project is optimized for Windows development environment
- **Git**: Standard Git workflow with proper commit messages
- **Dependencies**: Keep dependencies up to date, especially security patches