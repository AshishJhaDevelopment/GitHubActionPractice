/**
 * Cucumber hooks – run before/after scenarios.
 * Require after step-definitions: --require tests/cucumber/step-definitions.js --require tests/cucumber/hooks.js
 */

const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');

// Default step timeout (ms) – important for CI so steps don't hang
setDefaultTimeout(10000);

BeforeAll(function () {
  // e.g. check CI env
  const isCI = process.env.CI === 'true' || process.env.CI === '1';
  if (isCI) {
    console.log('Cucumber running in CI mode');
  }
});

AfterAll(function () {
  // global cleanup
});

Before(function () {
  // before each scenario – reset shared state if needed
  this.startTime = Date.now();
});

After(function () {
  // after each scenario – e.g. log duration
  const duration = Date.now() - (this.startTime || 0);
  if (process.env.CI) {
    // In CI you might attach duration to report
  }
});
