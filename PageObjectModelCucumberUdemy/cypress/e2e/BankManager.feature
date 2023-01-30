Feature: BankManager

    I want to login as Bank Manager
    I want to add customer
    I want to open account

    Background: Navigate
        Given I navigate to the website
        When I click on Bank Manager Login Button

    Scenario: Login as Bank Manager


        Then Verify Bank Manager home page title

    Scenario: Add customer

        When I click on Add Customer Button
        When I enter customer details
            | firstName | lastName | postCode |
            | AnyFirst  | AnyLast  | 100010   |
        When I click Add Customer Button
        Then I validate alert text
            | alertMessage                                   |
            | Customer added successfully with customer id : |

    Scenario: Open Account

        When I click on Add Customer Button
        When I enter customer details
            | firstName | lastName | postCode |
            | AnyFirst  | AnyLast  | 100010   |
        When I click Add Customer Button
        Then I validate alert text
            | alertMessage                                   |
            | Customer added successfully with customer id : |
        When I click on Open Account Button
        When I select customer details
            | custToSelect     | currency |
            | AnyFirst AnyLast | Rupee    |

        When I click on Process Button
        Then I validate alert text
            | alertMessage                                       |
            | Account created successfully with account Number : |
