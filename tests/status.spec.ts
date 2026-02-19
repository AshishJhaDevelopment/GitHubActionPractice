import { test, expect } from '@playwright/test';

/**
 * Example tests that could validate a backend health/status endpoint
 * or a simple public API. Replace baseURL in config or env for your app.
 */
test.describe('Status / health checks', () => {
  test('example domain responds', async ({ request }) => {
    const response = await request.get('https://example.com');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test('response contains expected text', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toContainText('Example Domain');
  });
});
