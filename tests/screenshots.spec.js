import { test, expect } from '@playwright/test';
import { mkdir } from 'fs/promises';

const OUT_DIR = '.playwright-mcp';

test.beforeAll(async () => {
  await mkdir(OUT_DIR, { recursive: true });
});

async function capture(page, path, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  // 文字描画やフォント読み込みの安定化待ち
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT_DIR}/${path}`, fullPage: true, animations: 'disabled' });
}

test('capture: homepage', async ({ page }) => {
  await capture(page, 'homepage-current.png', '/');
});

test('capture: services', async ({ page }) => {
  await capture(page, 'services-current.png', '/services.html');
});

test('capture: about', async ({ page }) => {
  await capture(page, 'about-current.png', '/about.html');
});

test('capture: blog list', async ({ page }) => {
  await capture(page, 'blog-current.png', '/blog.html');
});

test('capture: blog detail (sample1)', async ({ page }) => {
  await capture(page, 'blog-detail-sample1-current.png', '/blog-detail.html?id=sample1');
});

test('capture: contact', async ({ page }) => {
  await capture(page, 'contact-current.png', '/contact.html');
});

