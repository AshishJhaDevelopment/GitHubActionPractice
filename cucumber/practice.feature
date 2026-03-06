@smoke @practice
Feature: Cucumber practice – tags, multiple scenarios
  Run: npx cucumber-js tests/cucumber/practice.feature --require tests/cucumber/step-definitions.js --require tests/cucumber/hooks.js
  Filter by tag: npx cucumber-js --tags "@smoke" ...
  Exclude failing: --tags "not @fail"   (default in npm run test:cucumber:practice)
  Exclude network: --tags "not @network" (practice script excludes both @fail and @network so it passes in restricted env)
  Run only fail:  npm run test:cucumber:fail  (expect exit 1)
  Full run (with HTTP): npx cucumber-js tests/cucumber/practice.feature ... (no tag filter)

  Scenario: Addition
    Given I have the number 10
    When I add 5
    Then the result should be 15

  Scenario: Another addition
    Given I have the number 0
    And I add 0
    Then the result should be 0

  @ci @network
  Scenario: HTTP in CI (optional – can skip locally)
    Given I fetch "https://example.com"
    Then the response status should be 200
    And the response body should contain "Example Domain"

  Scenario Outline: Parameterized math
    Given I have the number <a>
    When I add <b>
    Then the result should be <sum>
    Examples:
      | a | b | sum |
      | 1 | 2 | 3   |
      | 2 | 3 | 5   |

  @edge
  Scenario: Boundary – zero and negative
    Given I have the number -5
    When I add 5
    Then the result should be 0

  @edge
  Scenario: Slow step (timeout edge)
    Given I wait 300 milliseconds
    Given I have the number 1
    When I add 1
    Then the result should be 2

  @edge
  Scenario Outline: Boundary values in outline
    Given I have the number <x>
    When I add 0
    Then the result should be <x>
    Examples:
      | x  |
      | 0  |
      | -1 |

  @fail
  Scenario: Intentionally failing (run with --tags "not @fail" to exclude)
    When I force a failure
