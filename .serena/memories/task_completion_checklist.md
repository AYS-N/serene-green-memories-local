# Task Completion Checklist

## When a Task is Completed

### Code Quality Checks
1. **Run Linting**: 
   ```bash
   npm run lint
   ```
   - Fix any ESLint errors or warnings
   - Ensure code follows project conventions

### Testing
2. **Run Tests**:
   ```bash
   npm run test
   ```
   - Ensure all Playwright tests pass
   - For UI changes, consider running `npm run test:headed` to visually verify
   - Add new tests if new features were added

### Build Verification
3. **Test Build Process**:
   ```bash
   npm run build
   ```
   - Ensure production build completes without errors
   - Check for any build warnings

4. **Preview Build** (optional):
   ```bash
   npm run preview
   ```
   - Test the built application locally

### Manual Testing
5. **Development Server Testing**:
   ```bash
   npm run dev
   ```
   - Visit http://localhost:8080
   - Test affected pages manually
   - Verify responsive design if UI changes were made
   - Test both static pages and React components

### Cross-browser Considerations
6. **Multi-browser Testing** (if significant changes):
   - Playwright tests cover Chrome, Firefox, and Safari
   - Pay attention to test results across all browsers

### Specific Checks by Change Type
- **Blog Changes**: Test MicroCMS integration, check blog.html and blog-detail.html
- **Component Changes**: Test in development mode and ensure Tailwind classes work
- **Static Page Changes**: Verify traditional CSS styling still works
- **JavaScript Changes**: Check both traditional JS (js/) and React components

### Environment Variables
7. **Check Environment**:
   - Ensure .env file contains required MicroCMS variables if blog functionality was modified
   - VITE_MICROCMS_SERVICE_DOMAIN
   - VITE_MICROCMS_API_KEY

## Notes
- No separate type checking command configured, types are checked during build
- No separate formatting command configured, rely on editor formatting
- Focus on both traditional HTML/CSS and React components due to hybrid nature