#User Story 12199 - List of Type of Fee and Fine
# As an Back Office User
# I want to Access the List of Fees and fines
# So that I can view, Edit and Add fees and fines


@Main_feature @US12199
Feature: User Story 12199 - List of Type of Fee and Fine

  #Scenario1 - 12598 - TC 1-Sorting
  @Sorting_list_of_fees_and_fines
  Scenario Outline: Sorting of Fees and fines

    Given I am on SFWF Back Office Home Page "<Browser>"
    When I Input Username "<BOUsername>" and Password "<BOPassword>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I click on Manage Farmers Details
    And I Click on Manage Fee and Fine
    And I Click on Type of Fees
    And I Verify Ascending order of Type of Fees
    And I Click on Type of Fees
    And I Verify Descending order of Type of Fees
    And I Click on Fee Code
    And I Verify Ascending order of Fee Code
    And I Click on Fee Code
    And I Verify Descending order of Fee Code
    And I Sign Out
    And I Verify Successful Sign Out

    Examples:
      |Browser|BOUsername     |BOPassword |
      |Chrome |Suraj_Admin1   |Admin@123  |

      #Scenario2 - 12873 - TC 2-Search
  @Searching_list_of_fees_and_fines
  Scenario Outline: Searching of Fees and fines

    Given I am on SFWF Back Office Home Page "<Browser>"
    When I Input Username "<BOUsername>" and Password "<BOPassword>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I click on Manage Farmers Details
    And I Click on Manage Fee and Fine
    And I Input Type of Fee "<Fee_Type>"
    And I Verify Type of Fee search Bar is working properly
    And I Click on Manage Fee and Fine
    And I Input Fee Code "<Fee_Code>"
    And I Verify Fee Code search Bar is working properly
    And I Click on Manage Fee and Fine
    And I Input Amount "<Amount>"
    And I Verify Amount search Bar is working properly
    And I Click on Manage Fee and Fine
    And I Input Year "<Year>"
    And I Verify Year search Bar is working properly
    And I Click on Manage Fee and Fine
    And I Input Currency "<Currency>"
    And I Verify Currency search Bar is working properly
    And I Click on Manage Fee and Fine
    And I Sign Out
    And I Verify Successful Sign Out

    Examples:
      |Browser|BOUsername     |BOPassword |Fee_Type     |Fee_Code   |Amount |Year    |Currency |
      |Chrome |Suraj_Admin1   |Admin@123  |AA-Fertiliser|AAFSS2     |10000  |10 Year  |AA-Rs   |


#Scenario4 - 13204 - TC 4-Verify the content of Type of fee and fine
  @View_list_of_fees_and_fines
  Scenario Outline: View List of Fees and fines

    Given I am on SFWF Back Office Home Page "<Browser>"
    When I Input Username "<BOUsername>" and Password "<BOPassword>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I click on Manage Farmers Details
    And I Click on Manage Fee and Fine
    And I Verify Label of Page Manage Fee and Fine
    And I Verify Type of fees sorting is clickable
    And I Verify Fee Code sorting is clickable
    And I Verify Amount sorting is clickable
    And I Verify Currency sorting is clickable
    And I Verify Activate Deactivate sorting is clickable
    And I Verify View label
    And I Verify Edit Label
    And I Sign Out
    And I Verify Successful Sign Out

    Examples:
      |Browser|BOUsername     |BOPassword |
      |Chrome |Suraj_Admin1   |Admin@123  |




