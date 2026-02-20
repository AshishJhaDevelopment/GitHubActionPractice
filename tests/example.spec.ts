import { test, expect } from '@playwright/test';

const EXAMPLE_URL = 'https://example.com';

test.describe('Example E2E tests', () => {
  test('homepage has title', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('homepage has heading', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    const heading = page.getByRole('heading', { name: 'Example Domain' });
    await expect(heading).toBeVisible();
  });

  test('can follow link', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await page.locator('a[href*="iana.org"]').first().click();
    await expect(page).toHaveURL(/iana\.org/);
  });
});
