import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if the page loads without errors
  await expect(page).toHaveTitle(/整理のミカタ/);
});

test('page has basic elements', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Basic smoke test - ensure the page is not blank
  const body = await page.locator('body');
  await expect(body).toBeVisible();
});