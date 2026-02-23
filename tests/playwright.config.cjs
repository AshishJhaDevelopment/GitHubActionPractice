const { devices } = require('@playwright/test');

module.exports = {
  testDir: 'tests',
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  retries: 0,
  workers: 2,
  reporter: [['list']],
  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  timeout: 30_000,
  expect: { timeout: 5_000 },
};
