<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US12599.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280.feature");
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
formatter.feature({
  "comments": [
    {
      "line": 1,
<<<<<<< HEAD
      "value": "#User Story 12599 - Register as Tea Growers"
    }
  ],
  "line": 4,
  "name": "User Story 12599 - Register as Tea Grower",
  "description": "",
  "id": "user-story-12599---register-as-tea-grower",
=======
      "value": "#User Story 13280 - Back Office Process for Registration"
    }
  ],
  "line": 4,
  "name": "User Story 13280 - Back Office Process for Registration",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
<<<<<<< HEAD
      "name": "@US12599"
=======
      "name": "@US13280"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario1"
    }
  ],
  "line": 8,
<<<<<<< HEAD
  "name": "Application to Register as tea_grower",
  "description": "",
  "id": "user-story-12599---register-as-tea-grower;application-to-register-as-tea-grower",
=======
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
<<<<<<< HEAD
      "name": "@Registration_as_tea_grower"
=======
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
<<<<<<< HEAD
  "name": "I Click on Tea Grower Icon",
=======
  "name": "I Click on Agro Processing Enterprise",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 21,
<<<<<<< HEAD
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
=======
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 22,
<<<<<<< HEAD
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
=======
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
<<<<<<< HEAD
  "name": "I Select Applicant Education Level \"\u003cEducation_Level\u003e\"",
=======
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Enterprise Address \"\u003cEnterprise_Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Upload National Identity cards of all shareholders \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Location Plan \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Copy of SMEDA Certificate \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Upload Copy of Utility Bill \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 45,
<<<<<<< HEAD
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
=======
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 46,
<<<<<<< HEAD
  "name": "I Click on Add Tea Plantation",
=======
  "name": "I Verify Success message for adding Additional Document Name",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 47,
<<<<<<< HEAD
  "name": "I Verify Display of Particulars for Registration of Tea Plantation Table",
=======
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 48,
<<<<<<< HEAD
  "name": "I Input License No \"\u003cLicense\u003e\"",
=======
  "name": "I Verify for Document Upload Success Message",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 49,
<<<<<<< HEAD
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Select Type of Owner \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 53,
=======
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 54,
=======
  "line": 50,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 55,
=======
  "line": 51,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 56,
=======
  "line": 52,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 57,
=======
  "line": 53,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 58,
=======
  "line": 54,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 59,
=======
  "line": 55,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 60,
=======
  "line": 56,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 61,
=======
  "line": 57,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 62,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
=======
  "line": 58,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Click on Proceed to Payment",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 63,
<<<<<<< HEAD
=======
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 67,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "#    Finance"
    }
  ],
  "line": 69,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I Select Payment Mode \"\u003cPayment_Mode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Input Amount of payment \"\u003cAmount_To_Pay\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I Click on Add Payment",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "#    PWO"
    }
  ],
  "line": 85,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input WPO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Search for Application Ref Number",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.examples({
<<<<<<< HEAD
  "line": 68,
  "name": "",
  "description": "",
  "id": "user-story-12599---register-as-tea-grower;application-to-register-as-tea-grower;",
=======
  "line": 96,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "Password",
        "FUsername",
        "PwoUsername",
        "Payment_Mode",
        "Amount_To_Pay",
        "Co_Name",
        "Rep_by",
        "BRN",
        "Cert_No",
        "Act",
        "Off_Add",
        "Enterprise_Address",
        "Status_Applicant",
        "Year_dur",
<<<<<<< HEAD
        "Marital_Status",
        "Relationship",
        "Family_Surname",
        "Family_Other_Names",
        "Gender",
        "DOB",
        "Occupation",
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
=======
        "Prod_man",
        "No_person",
        "Actual_ann_turnover",
        "Status_business",
        "Years_operation",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method"
      ],
<<<<<<< HEAD
      "line": 69,
      "id": "user-story-12599---register-as-tea-grower;application-to-register-as-tea-grower;;1"
=======
      "line": 97,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    },
    {
      "cells": [
        "Chrome",
        "Yavishta",
        "Admin@123",
<<<<<<< HEAD
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
=======
        "FINANCE",
        "PWO",
        "Cash",
        "850",
        "ABC Agro Co Ltd",
        "Mr John Brown",
        "C123456789",
        "XLPR852",
        "Full Time",
        "The Main Road, Grand Port",
        "Royal Road, Port Louis",
        "Company",
        "1",
        "Tomato, Pepper",
        "50",
        "10000000",
        "Existing",
        "5",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Counter"
      ],
<<<<<<< HEAD
      "line": 70,
      "id": "user-story-12599---register-as-tea-grower;application-to-register-as-tea-grower;;2"
=======
      "line": 98,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ],
  "keyword": "Examples"
});
formatter.before({
<<<<<<< HEAD
  "duration": 143100,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Application to Register as tea_grower",
  "description": "",
  "id": "user-story-12599---register-as-tea-grower;application-to-register-as-tea-grower;;2",
=======
  "duration": 107300,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
<<<<<<< HEAD
      "line": 7,
      "name": "@Registration_as_tea_grower"
    },
    {
      "line": 3,
      "name": "@US12599"
=======
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Input Registered User\u0027s Username \"Yavishta\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
<<<<<<< HEAD
  "name": "I Click on Tea Grower Icon",
=======
  "name": "I Click on Agro Processing Enterprise",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 21,
<<<<<<< HEAD
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
=======
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 22,
<<<<<<< HEAD
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Applicant Education Level \"Tertiary\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Input Other Occupation \"Manager\"",
=======
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 28,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select No of years for Registration membership \"2\"",
=======
  "line": 24,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"XLPR852\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 36,
  "name": "I Input Family Surname \"Keen\"",
=======
  "line": 27,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 37,
  "name": "I Input Family Other Names \"Dafne\"",
=======
  "line": 28,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 40,
  "name": "I Input Family Occupation \"Actress\"",
=======
  "line": 30,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"Company\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 45,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Click on Add Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input License No \"Tea Grower\"",
  "matchedColumns": [
    17
=======
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 49,
  "name": "I Input Total Extent of plot (In Arpent) \"2.7\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Select Type of Owner \"Tenant\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 53,
=======
  "line": 35,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Upload National Identity cards of all shareholders \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Location Plan \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Copy of SMEDA Certificate \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Upload Copy of Utility Bill \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Upload Additional Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 49,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 54,
=======
  "line": 50,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 55,
=======
  "line": 51,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 56,
=======
  "line": 52,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 57,
=======
  "line": 53,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 58,
=======
  "line": 54,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 59,
=======
  "line": 55,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 60,
=======
  "line": 56,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 61,
=======
  "line": 57,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 62,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    28
  ],
=======
  "line": 58,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Click on Proceed to Payment",
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "keyword": "And "
});
formatter.step({
  "line": 63,
<<<<<<< HEAD
=======
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 67,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "#    Finance"
    }
  ],
  "line": 69,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I Select Payment Mode \"Cash\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Input Amount of payment \"850\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I Click on Add Payment",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "#    PWO"
    }
  ],
  "line": 85,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input WPO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Search for Application Ref Number",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 4193789400,
=======
  "duration": 4515364100,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yavishta",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 60
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 526561800,
=======
  "duration": 191699400,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1880198300,
=======
  "duration": 1204544700,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 106570000,
=======
  "duration": 53230700,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 538960100,
=======
  "duration": 402768800,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 27972000,
=======
  "duration": 28097600,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 26566200,
=======
  "duration": 24527300,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 29609700,
=======
  "duration": 15144500,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 276568000,
=======
  "duration": 201833500,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 26826000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTeaGrowerIcon()"
});
formatter.result({
  "duration": 2441206500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 84916700,
=======
  "duration": 31003200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 2474305000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 54894700,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2712737100,
=======
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 71129000,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Port Louis",
      "offset": 29
=======
      "val": "Mr John Brown",
      "offset": 24
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1217734400,
=======
  "duration": 78776400,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Tertiary",
      "offset": 36
    }
  ],
  "location": "Steps.iSelectApplicantEducationLevel(String)"
});
formatter.result({
  "duration": 3706433400,
=======
      "val": "C123456789",
      "offset": 70
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRNForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 70703000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 72
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNoForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 88815200,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 188633000,
=======
  "duration": 52819600,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 120364900,
=======
  "duration": 83308900,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Royal Road, Port Louis",
      "offset": 28
    }
  ],
  "location": "Steps.iInputEnterpriseAddress(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 30555083700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //span[@class\u003d\u0027ui-button-icon-left ui-icon ui-c pi pi-download\u0027] (tried for 30 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iUploadPhotograph(Steps.java:1352)\r\n\tat ✽.And I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"(features/US12599.feature:27)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //span[@class\u003d\u0027ui-button-icon-left ui-icon ui-c pi pi-download\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LT5-ALIN\u0027, ip: \u0027130.1.19.186\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iUploadPhotograph(Steps.java:1352)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
=======
  "duration": 97083900,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "2",
      "offset": 50
=======
      "val": "1",
      "offset": 52
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembership(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 2135665700,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 2181787000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 61
    }
  ],
  "location": "Steps.iSelectStatusOfApplicantForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 48632200,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 9160096600,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "status": "skipped"
=======
  "duration": 96239400,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Spouse",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectFamilyRelationship(String)"
});
formatter.result({
  "status": "skipped"
=======
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 1680047100,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddTeaPlantation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantationTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tea Grower",
      "offset": 20
    }
  ],
  "location": "Steps.iInputLicenseNo(String)"
});
formatter.result({
  "status": "skipped"
=======
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 2771558800,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "2.7",
      "offset": 42
=======
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 1130411200,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Tenant",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectTypeOfOwner(String)"
});
formatter.result({
  "status": "skipped"
=======
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 1131001900,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 1150617100,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 54
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardsOfAllShareholders(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 1138167100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 24
    }
  ],
  "location": "Steps.iUploadLocationPlan(String)"
});
formatter.result({
  "duration": 2180328900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 36
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificate(String)"
});
formatter.result({
  "duration": 2222482800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 31
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBill(String)"
});
formatter.result({
  "duration": 2746835900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 34171600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3110833000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1630214200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 26146600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
});
formatter.result({
  "duration": 3281828100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 25985600,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 9145578800,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 67039100,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 76827200,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 4366180300,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 1153497200,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 1142001500,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 3584568600,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 10092400000,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 56055900,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 278100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 68050700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2628032700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.selectApplicationForPayment()"
});
formatter.result({
  "duration": 2218582800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 605848500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 596517900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5167470000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2180722700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8086059100,
  "status": "passed"
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
});
formatter.after({
  "duration": 14774090500,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LT5-ALIN\u0027, ip: \u0027130.1.19.186\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d127.0.6533.119 (bdef6783a05f0b3f885591e7d2c7b2aec1a89dea-refs/branch-heads/6533@{#1999}), userDataDir\u003dC:\\Users\\ALI~1.NAU\\AppData\\Local\\Temp\\scoped_dir11016_576635691}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57391}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d127.0.6533.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: d478eec8af539e22fdd39e9aaf997f56\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:533)\r\n\tat stepdefinition.Steps.setup(Steps.java:79)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.RuntimeException: Process refused to die after 10 seconds, and couldn\u0027t taskkill it: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:133)\r\n\tat org.openqa.selenium.os.ProcessUtils.killProcess(ProcessUtils.java:81)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.destroyHarder(UnixProcess.java:246)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.access$200(UnixProcess.java:200)\r\n\tat org.openqa.selenium.os.UnixProcess.destroy(UnixProcess.java:126)\r\n\tat org.openqa.selenium.os.CommandLine.destroy(CommandLine.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:221)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\t... 52 more\r\nCaused by: org.openqa.selenium.os.ProcessUtils$ProcessStillAliveException: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.waitForProcessDeath(ProcessUtils.java:67)\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:129)\r\n\t... 60 more\r\nCaused by: java.lang.InterruptedException\r\n\tat java.lang.ProcessImpl.waitFor(ProcessImpl.java:523)\r\n\tat org.openqa.selenium.os.ProcessUtils$ProcessWaiter.run(ProcessUtils.java:154)\r\n\tat java.lang.Thread.run(Thread.java:750)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2469400,
=======
  "duration": 8367441100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 2005026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FINANCE",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 49
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 190453600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 513763400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 61692000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 72612500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1573074100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1576914100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 89587700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash",
      "offset": 23
    }
  ],
  "location": "Steps.iSelectPaymentMode(String)"
});
formatter.result({
  "duration": 5186712700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "850",
      "offset": 27
    }
  ],
  "location": "Steps.iInputAmountOfPayment(String)"
});
formatter.result({
  "duration": 99279100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddPayment()"
});
formatter.result({
  "duration": 42845900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 18710746000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 51815000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4342690300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 40813100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 2128364500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 349245900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 623882000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 94428200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 134368600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1556852600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumber()"
});
formatter.result({
  "duration": 2135445000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@type\u003d\u0027checkbox\u0027])[7]\"}\n  (Session info: chrome\u003d127.0.6533.100)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027130.1.19.132\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d127.0.6533.119 (bdef6783a05f0b3f885591e7d2c7b2aec1a89dea-refs/branch-heads/6533@{#1999}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir18844_181897080}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51787}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d127.0.6533.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 05ff3981eff51b2619f0fa1c5ae8da28\n*** Element info: {Using\u003dxpath, value\u003d(//input[@type\u003d\u0027checkbox\u0027])[7]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Payment_process.Select_last_application(Payment_process.java:28)\r\n\tat stepdefinition.Steps.iSearchForApplicationRefNumber(Steps.java:2062)\r\n\tat ✽.And I Search for Application Ref Number(features/US13280.feature:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1086633100,
  "status": "passed"
});
formatter.after({
  "duration": 197400,
>>>>>>> fe70c59b61021e9ab1a272e8f1612ac1c2ebcd02
  "status": "passed"
});
});