Feature: Checking Login functionality of the Orange HRM
Scenario: Checking Login functionality with the valid login credentials
Given user is on Login page
When user enters username in the username textfield
When user enters password in the password textfield
When user clicks on the Login button
Then user is on Homepage