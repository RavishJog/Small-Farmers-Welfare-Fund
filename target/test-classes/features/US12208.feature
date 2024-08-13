#User Story 12208 - Register as small planters

@Main_feature @US12208
Feature: User Story 12208 - Register as small planters

   #Scenario1
  @Registration_as_small_planters
  Scenario Outline: Application to Register as small planters

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
    And I Click on Small Planters Icon
    And I Verify display of REGISTRATION FOR SMALL PLANTERS Page
    And I Select Applicant Title "<Applicant_Title>"
    And I Select Applicant District "<District>"
    And I Select Applicant Level of Education "<Education_Level>"
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
    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page
    And I Click on Add Crop
    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table
    And I Input Organisation Account Number "<Org_acc_no>"
    And I Select Crop Type "<Crop_Type>"
    And I Input Total Extent of plot (In Arpent) "<Land_Extent>"
    And I Select Owner Type "<Owner_Type>"
    And I Input Plot Location "<Plot_Location>"
    And I Save Particulars of Crop
    And I Click on Save and Continue
    And I Verify Display of Particulars for Horticultural Plantations Page
    And I Click on Add Horticultural
    And Verify Display of Particulars for Horticultural Plantations Table
    And I Input Field Location "<Field_Location>"
    And I Select Production System "<Production_System>"
    And I Input Total Extent of plot - Size "<Total_Extent>"
    And I Input Crop grown at time of Registration/ Crop to be grown "<Crop_Grown>"
    And I Select Owner Type for Horticultural Plantation "<Owner_Type>"
    And I Select Plantation Type "<Plantation_Type>"
    And I Input Expected Date of Planting/Seedling "<Date_Plantation_Seedling>"
    And I Save Particulars for Horticultural Plantations
    And I Upload documents for Horticultural Plantations "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Close Horticultural Plantation Documents tab
    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS
    And I Verify Particulars for Horticultural Plantations declared under FPS Table
    And I Input Crop Status and Organisation "<Crop_Status>"
    And I Input Organisation Account Number "<Org_acc_no>"
    And I Save Particulars for Horticultural Plantations declared under FPS
    And I Click on Save and Continue
    And I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS
    And I click on I agree to the Terms and Conditions
    And I Click on Photo checkbox
    And I Select Bank "<Bank_Name>"
    And I Input Bank Branch for Agro-Processing Enterprise "<Bank_Branch>"
    And I Input Personal Bank Account Number Agro-Processing Enterprise "<Bank_Account_No>"
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted for Small Planters Registration
    And I Click on Cancel button not to proceed with another registration
    And I Verify Application Status "<App_status>"
    And I Verify Payment Status "<Payment_Status>"
    Then I Sign Out as Front Registered User


    Examples:
      |Browser|Username |Password |Applicant_Title |District   |Education_Level |Act      |Other_Occupation  |Photo                               |Year_dur |Marital_Status|Relationship|Family_Surname|Family_Other_Names|Gender|DOB   |Occupation |Org_acc_no|Crop_Type|Land_Extent|Owner_Type|Plot_Location|Field_Location |Production_System|Total_Extent |Crop_Grown |Plantation_Type|Date_Plantation_Seedling |Upload_test                        |Crop_Status|Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Suraj    |Admin@123|Mr              |Black River|Tertiary        |Full Time|Manager           |src\test\resources\Photo_upload.jpg |1        |Married       |Spouse      |Sanon         |Kirti             |Female|1Jan94|Air Hostess|0001252563|Cane     |2.5        |Tenant    |Moka         |Port Louis     |Sheltered Farming|600M2        |Pepper     |Interline      |1Aug2030                 |src\test\resources\Upload_Test1.pdf|Harvest    |Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

