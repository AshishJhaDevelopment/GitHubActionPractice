// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Example E2E (JS)', () => {
  test('homepage has title', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('homepage has heading', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  });
});
