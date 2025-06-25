Feature: User authenticated delete address

Background:
Given User navigates to the application
And User click on the login icon

Scenario: Login should be success
And user enter the username as "marianty.delgado@globant.com"
And user enter the password as "Formula8792"
When User click on the login button
Then Login should be success


Scenario: login shouldn't be success
And user enter the username as "marianty.delgado@globant.com"
And user enter the password as "Formula92"
When User click on the login button
But Login should fail

Scenario: delete address should be success
And User hover on login icon
And user click on mi cuenta
And user click on address button
When user click on delete button
Then address should be deleted

