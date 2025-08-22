# Suggested Commands

## Development Commands
```bash
# Start development server (runs on localhost:8080)
npm run dev

# Install dependencies
npm i

# Production build
npm run build

# Development build
npm run build:dev

# Preview production build
npm run preview
```

## Code Quality Commands
```bash
# Run ESLint
npm run lint

# Note: No separate formatting command configured
# Note: No separate type checking command configured
```

## Testing Commands
```bash
# Run Playwright tests
npm run test

# Run tests with browser UI (headed mode)
npm run test:headed

# Run tests with Playwright UI
npm run test:ui
```

## Windows System Commands
Since this is a Windows environment, use these commands:
```cmd
# List directory contents
dir

# Change directory
cd path\to\directory

# Create directory
mkdir directory_name

# Remove file
del filename

# Remove directory
rmdir /s directory_name

# Find files
where filename

# Search in files (use PowerShell or install grep alternative)
findstr "pattern" *.js
```

## Git Commands
```bash
# Standard git commands work in Windows
git status
git add .
git commit -m "message"
git push
git pull
```

## Development Server
- **URL**: http://localhost:8080
- **Port**: 8080 (configured in vite.config.js)
- **Auto-reload**: Enabled for development