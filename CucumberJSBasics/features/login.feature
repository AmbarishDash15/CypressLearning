Feature: Login
    In order to perform successful login
    As a user
    I want to enter correct username and password

    Background:
        Given user navigates to Facebook website
        When user validates the homepage title
    @smoke
    Scenario: In order to verify login to Facebook as Valid User
        Then user entered "valid" username
        Then user entered "valid" password
        Then user should "be" successfully logged in
    @regression
    Scenario: In order to verify login to Facebook as Invalid User

        Then user entered "invalid" username
        Then user entered "invalid" password
        Then user should "not" successfully logged in