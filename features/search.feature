Feature: Verify search functionality

  Background:
    Given I am on the landing page

  Scenario Outline: As a user, I should be able to find books by author
    When I search by author with name <author name>
    And I open the 1st book card
    Then I should see the book by <author name>

    Examples:
    | author name |
    | Пушкин      |
    | Гоголь      |
    | Замятин      |

  Scenario: As a user, I should be able to navigate between pages using pagination on search results page
    When I search by author with name "Пушкин"
    Then I should see a pagination is present on the page
    When I navigate to 2 page
    Then I should land on 2 page