Feature: LoginAdditional
    In order to perform successful login
    As a user
    I want to enter correct username and password

    Background:
        Given user navigates to Facebook website
        When user validates the homepage title
    @prod
    Scenario Outline: In order to verify login to Facebook
        Then user entered "<usernametype>" username and "<passwordtype>" password
        Then user enters countryname and postcode
        |country | code |
        |India | 91|
        |Austalia | 61|
        Then user login is "<loginType>"

Examples:
    | usernametype | passwordtype | loginType |
    | valid  | valid  | successful  |
    | invalid  | invalid  | unsuccessful  |
