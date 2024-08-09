#User Story 12822 - Payment Process

@Main_feature @US12882/12808
Feature: Payment for Registration

   #Scenario1
  @Payment_at_counter_for_Agro-Processing-Enterprise
  Scenario Outline: Payment at counter for Registration as Agro-Processing Enterprise-Application form

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
    And I Click on Agro Processing Enterprise
    And I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page
    And I Input Associate/Society/Company Name "<Co_Name>"
    And I Input Represented by "<Rep_by>"
    And I Input Business Registration No(BRN) for Agro-Processing Enterprise "<BRN>"
    And I Input Certificate of Incorporation No for Agro-Processing Enterprise "<Cert_No>"
    And I Select Activity "<Act>"
    And I Input Office Address "<Off_Add>"
    And I Input Enterprise Address "<Enterprise_Address>"
    And I Select Duration Year for Registration membership "<Year_dur>"
    And I Input List of Products manufactured "<Prod_man>"
    And I Select Status of Applicant for Agro-Processing Enterprise "<Status_Applicant>"
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Upload Business Registration Card "<Upload_test>"
    And I Upload Certificate of Incorporation "<Upload_test>"
    And I Upload List of Directors/ Associates "<Upload_test>"
    And I Upload Board Resolution of Enterprise for appointment of representative(s) "<Upload_test>"
    And I Upload National Identity card of representative "<Upload_test>"
    And I Upload National Identity cards of all shareholders "<Upload_test>"
    And I Upload Location Plan "<Upload_test>"
    And I Upload Copy of SMEDA Certificate "<Upload_test>"
    And I Upload Copy of Utility Bill "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Add Additional Document
    And I Input Additional Document Name "<Additional_Doc_Name>"
    And I Verify Success message for adding Additional Document Name
    And I Upload Additional Document "<Upload_test>"
    And I Verify for Document Upload Success Message
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
    And I Copy Application Number
    And I Click on Shopping Cart for payment
    And Select Application for payment
    And I Click on Proceed to Payment
    And I Click on Payment Icon
    And I Select Payment Method "<Payment_method>"
    And I Click on Final Proceed to Payment
    And I Verify Message to proceed to Post Office for Payment
    Then I Sign Out as Front Registered User


    Examples:
      |Browser|Username |Password |Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Suraj    |Admin@123|ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

       #Scenario2
  @Payment_at_counter_for_Farmers_Cooperative_Association
  Scenario Outline: Payment at counter for Registration for Farmers’ Cooperative Association, Society or Company


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
    And I Click on Farmers Cooperatives Association, Society or Company
    And I Verify display of Registration of Farmers page
    And I Input Associate/Society/Company Name "<Co_Name>"
    And I Input Represented by "<Rep_by>"
    And I Input Business Registration No.(BRN) "<BRN>"
    And I Input Certificate of Incorporation No "<Cert_No>"
    And I Select Activity "<Act>"
    And I Input Office Phone Number "<Off_Num>"
    And I Input Mobile Phone Number "<Mob_Num>"
    And I Input Office Address "<Off_Add>"
    And I Select Status of Applicant "<Status_Applicant>"
    And I Select Duration Year for Registration membership "<Year_dur>"
    And I Input List of Products manufactured "<Prod_man>"
    And I Input No. of persons employed "<No_person>"
    And I Input Actual Annual Turnover (Rs) "<Actual_ann_turnover>"
    And I Select Status of business "<Status_business>"
    And I Input No. of years of operation "<Years_operation>"
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Upload Business Registration Card "<Upload_test>"
    And I Upload Certificate of Incorporation "<Upload_test>"
    And I Upload List of Directors/ Associates "<Upload_test>"
    And I Upload Board Resolution of Enterprise for appointment of representative(s) "<Upload_test>"
    And I Upload National Identity card of representative "<Upload_test>"
    And I Upload National Identity cards of all shareholders "<Upload_test>"
    And I Upload Location Plan "<Upload_test>"
    And I Upload Copy of SMEDA Certificate "<Upload_test>"
    And I Upload Copy of Utility Bill "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Add Additional Document
    And I Input Additional Document Name "<Additional_Doc_Name>"
    And I Verify Success message for adding Additional Document Name
    And I Upload Additional Document "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Save and Continue
    And I Verify Terms and Conditions Page
    And I click on I agree to the Terms and Conditions
    And I Select Bank "<Bank_Name>"
    And I Input Bank Branch "<Bank_Branch>"
    And I Input Personal Bank Account Number"<Bank_Account_No>"
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted
    And I Verify Application Status "<App_status>"
    And I Verify Payment Status "<Payment_Status>"
    And I Copy Application Number
    And I Click on Shopping Cart for payment
    And Select Application for payment
    And I Click on Proceed to Payment
    And I Click on Payment Icon
    And I Select Payment Method "<Payment_method>"
    And I Click on Final Proceed to Payment
    And I Verify Message to proceed to Post Office for Payment
    Then I Sign Out as Front Registered User

    Examples:
      |Browser|Username |Password |Co_Name        |Rep_by       |BRN        |Off_Num|Mob_Num  |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Suraj    |Admin@123|ABC Agro Co Ltd|Mr John Brown|C123456789 |2126666|58967896 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

