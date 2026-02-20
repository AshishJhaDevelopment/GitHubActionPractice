import { test, expect } from '@playwright/test';

/**
 * 25 failing tests for report validation (failedTests list).
 */
const EXAMPLE_URL = 'https://example.com';

test.describe('Fail suite (25 tests)', () => {
  test('fail 1: wrong title', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/Wrong Title That Does Not Exist/);
  });
  test('fail 2: wrong heading', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.getByRole('heading', { name: 'Nonexistent Heading' })).toBeVisible();
  });
  test('fail 3: expect false', async () => {
    expect(1).toBe(2);
  });
  test('fail 4: wrong URL', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveURL(/wrong-url\.com/);
  });
  test('fail 5: status 404', async ({ request }) => {
    const res = await request.get(EXAMPLE_URL);
    expect(res.status()).toBe(404);
  });
  test('fail 6: body contains wrong text', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('body')).toContainText('ThisTextIsNotOnThePage');
  });
  test('fail 7: wrong count', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('h1')).toHaveCount(99);
  });
  test('fail 8: link not present', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.getByRole('link', { name: 'NoSuchLink' })).toBeVisible();
  });
  test('fail 9: expect true to be false', async () => {
    expect(true).toBe(false);
  });
  test('fail 10: string mismatch', async () => {
    expect('hello').toBe('world');
  });
  test('fail 11: number mismatch', async () => {
    expect(42).toBe(0);
  });
  test('fail 12: visible when hidden', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('#id-that-does-not-exist')).toBeVisible();
  });
  test('fail 13: wrong status', async ({ request }) => {
    const r = await request.get(EXAMPLE_URL);
    expect(r.status()).toBe(500);
  });
  test('fail 14: not ok', async ({ request }) => {
    const r = await request.get(EXAMPLE_URL);
    expect(r.ok()).toBe(false);
  });
  test('fail 15: empty title', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle('');
  });
  test('fail 16: wrong regex', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('body')).toContainText(/NeverMatches/);
  });
  test('fail 17: array length', async () => {
    expect([1, 2, 3].length).toBe(10);
  });
  test('fail 18: null check', async () => {
    expect(null).toBeTruthy();
  });
  test('fail 19: timeout visible', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('.never-appears')).toBeVisible({ timeout: 100 });
  });
  test('fail 20: wrong content', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.getByRole('heading')).toHaveText('Wrong');
  });
  test('fail 21: strict count', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('a')).toHaveCount(0);
  });
  test('fail 22: boolean fail', async () => {
    expect(false).toBe(true);
  });
  test('fail 23: deep equality', async () => {
    expect({ a: 1 }).toEqual({ a: 2 });
  });
  test('fail 24: greater than', async () => {
    expect(1).toBeGreaterThan(100);
  });
  test('fail 25: final fail', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/Invalid/);
  });
});
