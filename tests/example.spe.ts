import { test, expect } from '@playwright/test';

test.describe('Example E2E tests', () => {
  test('homepage has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('homepage has heading', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: 'Example Domain' });
    await expect(heading).toBeVisible();
  });

  test('can follow link', async ({ page }) => {
    await page.goto('/');
    // Use href-based locator for stability (example.com link text can vary)
    await page.locator('a[href*="iana.org"]').first().click();
    await expect(page).toHaveURL(/iana\.org/);
  });
});
