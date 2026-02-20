import { test, expect } from '@playwright/test';

/**
 * 20 passing tests for report validation (passedTests list).
 */
const EXAMPLE_URL = 'https://example.com';

test.describe('Pass suite (20 tests)', () => {
  test('pass 1: page has title', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/Example Domain/);
  });
  test('pass 2: heading visible', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  });
  test('pass 3: body visible', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('body')).toBeVisible();
  });
  test('pass 4: link present', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('a[href*="iana.org"]').first()).toBeVisible();
  });
  test('pass 5: status 200', async ({ request }) => {
    const res = await request.get(EXAMPLE_URL);
    expect(res.status()).toBe(200);
  });
  test('pass 6: ok response', async ({ request }) => {
    const res = await request.get(EXAMPLE_URL);
    expect(res.ok()).toBeTruthy();
  });
  test('pass 7: contains Example', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('body')).toContainText('Example');
  });
  test('pass 8: contains Domain', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('body')).toContainText('Domain');
  });
  test('pass 9: URL matches', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveURL(/example\.com/);
  });
  test('pass 10: document loaded', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/./);
  });
  test('pass 11: more information link', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    const link = page.getByRole('link', { name: /more information/i });
    await expect(link).toBeVisible();
  });
  test('pass 12: h1 exists', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('h1')).toHaveCount(1);
  });
  test('pass 13: paragraph exists', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('p')).toHaveCount(1);
  });
  test('pass 14: response ok', async ({ request }) => {
    expect((await request.get(EXAMPLE_URL)).ok()).toBeTruthy();
  });
  test('pass 15: body has text', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('body')).not.toHaveText('');
  });
  test('pass 16: title length', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
  test('pass 17: html element', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('html')).toBeVisible();
  });
  test('pass 18: head exists', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('head')).toHaveCount(1);
  });
  test('pass 19: status ok', async ({ request }) => {
    const r = await request.get(EXAMPLE_URL);
    expect(r.ok()).toBe(true);
  });
  test('pass 20: final pass', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/Example Domain/);
  });
});
