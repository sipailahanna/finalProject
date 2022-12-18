Feature: Verify filter functionality

  Background:
    Given I am on the landing page

  Scenario: As a user, I should be able to filter books by rating
    When I search for "Пудра"
    And I filter by rating with value 5
    And I open the 1st book card
    Then I should see that results have 5 rating

  Scenario: As a user, I want all my search results to be in stock
    When I search for "Пудра"
    Then I should see checkbox "На складе" is selected
    And I should see checkbox "В наличии у поставщика" is selected
