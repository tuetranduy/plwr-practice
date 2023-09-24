@login

Feature: Verify login functionality

	Scenario: Check login with valid credentials
		Given Valid login credentials
		When User click Login
		Then User should login successfully and redirect to Dashboard screen