Feature: : Checking Add customrs

    Scenario: Add customer
        Given User is in loginpage
        When User enter username and password
        When Click on login button
        When Validate home page title
        When Click on customer and select customer
        Then Click on Add new
        Then Fill the form and click on save button
        When Check the Sccessful message
