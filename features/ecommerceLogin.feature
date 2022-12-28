Feature: Login commerce page

  Scenario: Sccessful login with valid credantials

    Given User is in loginpage
    When User enter username and password
    When Click on login button
    When Validate home page title
