$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13280 - Back Office Process for Registration"
    }
  ],
  "line": 4,
  "name": "User Story 13280 - Back Office Process for Registration",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
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
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
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
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\"",
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
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
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
  "keyword": "And "
});
formatter.step({
  "line": 63,
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
  "line": 96,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
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
        "Prod_man",
        "No_person",
        "Actual_ann_turnover",
        "Status_business",
        "Years_operation",
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
      "line": 97,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
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
      "line": 98,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 107300,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
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
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
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
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
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
  "line": 24,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
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
  "line": 27,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
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
  "line": 30,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
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
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
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
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
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
  "keyword": "And "
});
formatter.step({
  "line": 63,
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
  "duration": 4515364100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 191699400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1204544700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 53230700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 402768800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 28097600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 24527300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15144500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 201833500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
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
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 71129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 78776400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 52819600,
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
  "duration": 83308900,
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
  "duration": 97083900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembership(String)"
});
formatter.result({
  "duration": 2135665700,
  "status": "passed"
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
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9160096600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 96239400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 1680047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 2771558800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 1130411200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 1131001900,
  "status": "passed"
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
  "duration": 1150617100,
  "status": "passed"
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
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9145578800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 67039100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 76827200,
  "status": "passed"
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
  "duration": 4366180300,
  "status": "passed"
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
  "duration": 1153497200,
  "status": "passed"
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
  "duration": 1142001500,
  "status": "passed"
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
  "duration": 3584568600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10092400000,
  "status": "passed"
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
  "duration": 56055900,
  "status": "passed"
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
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
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
  "status": "passed"
});
});