Feature: Timeblocks

Simple utility to create a list of time entries

Scenario: Start and stop tracking a timeblock
	Given I start a timeblock at 10:00
	And I end a timeblock at 12:30
	When viewing the duration
	Then the duration should be 02:30