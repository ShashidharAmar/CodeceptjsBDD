Feature: : Checking Add customrs

    Scenario: Add customer
        Given User is in loginpage
        When User enter username and password
        When Click on login button
        When Validate home page title
        Then Click on catelog and select product
        Then Click on addNew and select product info
        Then Fill the mondatory fields and click on save
        Then Guess the Sccessfulmessage

