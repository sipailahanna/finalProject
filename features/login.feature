Feature: Verify oz.by login/registration popup

  Background:
    Given I am on the landing page
    And I open login popup

  Scenario: As a user, I have two options for login to the oz.by: by phone and email
    Then I should see next options for login
      | options |
      | email   |
      | phone   |

  Scenario: As a user, I try to log in with invalid credentials
    When I click on "email" link
    And I enter next credentials:
      | email    | invalidLogin            |
      | password | invalidPassword         |
    Then I should see error message saying "Введите корректный адрес электронной почты"
    When I enter next credentials:
      | email    | blizniova.an@gmail.com  |
      | password | invalidPassword         |
    Then I should see error message saying "Неверный пароль."

  Scenario: As a new user, I want to open a registration form
    And I click on "iAmANewUser" link
    Then I land on registration form