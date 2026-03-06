Feature: E2E Cucumber example
  Run from playwright-e2e-tests directory only (so step definitions use the same Cucumber as the CLI):
    npx cucumber-js tests/cucumber/example.feature --require tests/cucumber/step-definitions.js
  Or: npm run test:cucumber

  Scenario: Simple math
    Given I have the number 2
    And I add 3
    Then the result should be 5

  Scenario: Example.com page check
    Given I fetch "https://example.com"
    Then the response status should be 200
    And the response body should contain "Example Domain"
