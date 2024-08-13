#User Story Sign In
# As an Back Office User
# I want to Sign In
# So that I can access the SFWF Backoffice Portal


@Main_feature
Feature: Login into SFWF Backoffice Portal

#Scenario1
  @Sign_in_correct_credentials
  Scenario Outline: Login into SFWF Backoffice Portal with correct credentials

    Given I am on SFWF Back Office Home Page "<Browser>"
    When I Input Username "<BOUsername>" and Password "<BOPassword>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Sign Out
    And I Verify Successful Sign Out
    Then I click on forget password
    And I Verify Forget Password Page

    Examples:
    |Browser|BOUsername   |BOPassword |
    |Chrome |Suraj_Admin1 |Admin@123|



#Scenario2
  @Sign_in_incorrect_credentials
  Scenario Outline: Login into SFWF Backoffice Portal with incorrect credentials

    Given I am on SFWF Back Office Home Page "<Browser>"
    When I Input Username "<BOUsername>" and Password "<BOPassword>"
    And I Click on Sign In button
    And I Verify Bad Credential Message "<Bad_Credential_Message>"

    Examples:
      |Browser|BOUsername   |BOPassword |Bad_Credential_Message |
      |Chrome |Suraj_Admin1 |Admin@1    |Bad Credential         |
      |Chrome |Suraj_Admi   |Admin@123  |Bad Credential         |

#    Not more test neeeded
