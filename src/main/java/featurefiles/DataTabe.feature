Feature: Checking Login functionality of the Orange HRM
  Scenario: Checking Login functionality with the valid login credentials
    Given user is on a Login page
    When user enters username and password
    | username | password |
    | ad      | admin    |
    | ab     | adm       |
    | Admin   | admin123 |
    When user clicks on the OrangeHRM Login button
    Then user is on the Homepage