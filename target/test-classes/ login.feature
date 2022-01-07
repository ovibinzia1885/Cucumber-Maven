Feature: Login to an e-commerce website

  Scenario Outline: Verify users can login to portal with valid credentials
    Given User visits e-commerce website
    When User enters valid "<email>" and valid "<password>"
    Then User can logged in successfully

    Examples:
    |email|password|
    |testuser412@grr.la|2t8zmqzL|

#  Scenario Outline: Verify users can not login to portal with valid credentials
#    Given User visits e-commerce website
#    When User enters invalid "<email>" and invalid "<password>"
#    Then User can not logged in successfully
#
#    Examples:
#      |email|password|
#      |testuser412@grr|2t8zmqzL|