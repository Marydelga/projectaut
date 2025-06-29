Feature: User authenticated

Background:
Given User navigates to the application
And User click on the login link

Scenario: Login should be success
And user enter the username as "<username>"
And user enter the password as "<password>"
When User click on the login button
Then Login should be success


Scenario: Login should fail
And user enter the username as "<username>"
And user enter the password as "<password>"
When User click on the login button
But Login should fail

Scenario: delete address should be success
And User hover on login icon
And user click on mi cuenta
And user click on address button
When user click on delete button
Then address should be deleted

Examples:


| username                     | password   |
|marianty.delgado@globant.com  | Formula8792|
|marianty.delgado@globant.com  |  Formula92 |