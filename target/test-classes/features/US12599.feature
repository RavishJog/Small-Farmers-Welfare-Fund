#User Story 12599 - Register as Tea Growers

@Main_feature @US12599
Feature: User Story 12599 - Register as Tea Grower

   #Scenario1
  @Registration_as_tea_grower
  Scenario Outline: Application to Register as tea_grower

    Given I am on SFWF Front Office Home Page "<Browser>"
    When I Input Registered User's Username "<Username>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Click on New Button to apply for Registration
    And I Verify display of Registration Type Page
    And I Click on Tea Grower Icon
    And I Verify display of REGISTRATION FOR TEA GROWERS Page
    And I Select an Applicant Title "<Applicant_Title>"
    And I Select Applicant District "<District>"
    And I Select Applicant Education Level "<Education_Level>"
    And I Select Agricultural Activity "<Act>"
    And I Input Other Occupation "<Other_Occupation>"
    And I Upload Photograph "<Photo>"
    And I Verify for Photo upload success message
    And I Select No of years for Registration membership "<Year_dur>"
    And I Select Marital Status "<Marital_Status>"
    And I Click on Save and Continue
    And I Verify Display of Particulars of Family Beneficiaries Page
    And I Click on Add Family and Beneficiaries
    And Verify Display of Particulars of Family Beneficiaries input table
    And I Select Family relationship "<Relationship>"
    And I Input Family Surname "<Family_Surname>"
    And I Input Family Other Names "<Family_Other_Names>"
    And I Select Family Gender "<Gender>"
    And I Input Family Date of Birth "<DOB>"
    And I Input Family Occupation "<Occupation>"
    And I Click on Beneficiary of life Insurance Scheme
    And I Click on Beneficiary of Accident Insurance Scheme
    And I Save Particulars of Family and Beneficiaries
    And I Click on Save and Continue
    And I Verify Display of Particulars for Registration of Tea Plantation
    And I Click on Add Tea Plantation
    And I Verify Display of Particulars for Registration of Tea Plantation Table
    And I Input License No "<License>"
    And I Input Total Extent of plot (In Arpent) "<Land_Extent>"
    And I Select Type of Owner "<Owner_Type>"
    And I Input Plot Location "<Plot_Location>"
    And I Save Particulars of Crop
    And I Click on Save and Continue
    And I Verify Terms and Conditions Page
    And I click on I agree to the Terms and Conditions
    And I Select Bank "<Bank_Name>"
    And I Input Bank Branch for Agro-Processing Enterprise "<Bank_Branch>"
    And I Input Personal Bank Account Number Agro-Processing Enterprise "<Bank_Account_No>"
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted
    And I Verify Application Status "<App_status>"
    And I Verify Payment Status "<Payment_Status>"
    Then I Sign Out as Front Registered User




    Examples:
      |Browser|Username |Password |Applicant_Title |District   |Education_Level |Act      |Other_Occupation  |Photo                               |Year_dur |Marital_Status|Relationship|Family_Surname|Family_Other_Names|Gender|DOB   |Occupation |License|Land_Extent|Owner_Type|Plot_Location|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Yavishta    |Admin@123|Mrs              |Port Louis|Tertiary        |Full Time|Manager           |src\test\resources\Photo_upload.jpg |2        |Married       |Spouse      |Keen         |Dafne            |Female|1Jan94|Actress|Tea Grower|2.7        |Tenant    |Moka        |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

