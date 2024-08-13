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
  "comments": [
    {
      "line": 10,
      "value": "#    Given I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\""
    },
    {
      "line": 11,
      "value": "#    When I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\""
    },
    {
      "line": 12,
      "value": "#    And I Click on Sign In button"
    },
    {
      "line": 13,
      "value": "#    And I Verify Applicant\u0027s Successful Login"
    },
    {
      "line": 14,
      "value": "#    And I Click on Register as Farmer"
    },
    {
      "line": 15,
      "value": "#    And I Verify that User is directed to My Application Page"
    },
    {
      "line": 16,
      "value": "#    And I Verify display of Farmers Card link"
    },
    {
      "line": 17,
      "value": "#    And I Verify Programmes link"
    },
    {
      "line": 18,
      "value": "#    And I Click on New Button to apply for Registration"
    },
    {
      "line": 19,
      "value": "#    And I Verify display of Registration Type Page"
    },
    {
      "line": 20,
      "value": "#    And I Click on Agro Processing Enterprise"
    },
    {
      "line": 21,
      "value": "#    And I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page"
    },
    {
      "line": 22,
      "value": "#    And I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\""
    },
    {
      "line": 23,
      "value": "#    And I Input Represented by \"\u003cRep_by\u003e\""
    },
    {
      "line": 24,
      "value": "#    And I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\""
    },
    {
      "line": 25,
      "value": "#    And I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\""
    },
    {
      "line": 26,
      "value": "#    And I Select Activity \"\u003cAct\u003e\""
    },
    {
      "line": 27,
      "value": "#    And I Input Office Address \"\u003cOff_Add\u003e\""
    },
    {
      "line": 28,
      "value": "#    And I Input Enterprise Address \"\u003cEnterprise_Address\u003e\""
    },
    {
      "line": 29,
      "value": "#    And I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\""
    },
    {
      "line": 30,
      "value": "#    And I Input List of Products manufactured \"\u003cProd_man\u003e\""
    },
    {
      "line": 31,
      "value": "#    And I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\""
    },
    {
      "line": 32,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 33,
      "value": "#    And I Verify Upload Required Documents Page is displayed"
    },
    {
      "line": 34,
      "value": "#    And I Upload Business Registration Card \"\u003cUpload_test\u003e\""
    },
    {
      "line": 35,
      "value": "#    And I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\""
    },
    {
      "line": 36,
      "value": "#    And I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\""
    },
    {
      "line": 37,
      "value": "#    And I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\""
    },
    {
      "line": 38,
      "value": "#    And I Upload National Identity card of representative \"\u003cUpload_test\u003e\""
    },
    {
      "line": 39,
      "value": "#    And I Upload National Identity cards of all shareholders \"\u003cUpload_test\u003e\""
    },
    {
      "line": 40,
      "value": "#    And I Upload Location Plan \"\u003cUpload_test\u003e\""
    },
    {
      "line": 41,
      "value": "#    And I Upload Copy of SMEDA Certificate \"\u003cUpload_test\u003e\""
    },
    {
      "line": 42,
      "value": "#    And I Upload Copy of Utility Bill \"\u003cUpload_test\u003e\""
    },
    {
      "line": 43,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 44,
      "value": "#    And I Click on Add Additional Document"
    },
    {
      "line": 45,
      "value": "#    And I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\""
    },
    {
      "line": 46,
      "value": "#    And I Verify Success message for adding Additional Document Name"
    },
    {
      "line": 47,
      "value": "#    And I Upload Additional Document \"\u003cUpload_test\u003e\""
    },
    {
      "line": 48,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 49,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 50,
      "value": "#    And I Verify Terms and Conditions Page"
    },
    {
      "line": 51,
      "value": "#    And I click on I agree to the Terms and Conditions"
    },
    {
      "line": 52,
      "value": "#    And I Select Bank \"\u003cBank_Name\u003e\""
    },
    {
      "line": 53,
      "value": "#    And I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\""
    },
    {
      "line": 54,
      "value": "#    And I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\""
    },
    {
      "line": 55,
      "value": "#    And I Click on Submit Application \"\u003cConfirmation\u003e\""
    },
    {
      "line": 56,
      "value": "#    And I Verify Success message for application submitted"
    },
    {
      "line": 57,
      "value": "#    And I Verify Application Status \"\u003cApp_status\u003e\""
    },
    {
      "line": 58,
      "value": "#    And I Verify Payment Status \"\u003cPayment_Status\u003e\""
    },
    {
      "line": 59,
      "value": "#    And I Copy Application Number"
    },
    {
      "line": 60,
      "value": "#    And I Click on Shopping Cart for payment"
    },
    {
      "line": 61,
      "value": "#    And Select Application for payment"
    },
    {
      "line": 62,
      "value": "#    And I Click on Proceed to Payment"
    },
    {
      "line": 63,
      "value": "#    And I Click on Payment Icon"
    },
    {
      "line": 64,
      "value": "#    And I Select Payment Method \"\u003cPayment_method\u003e\""
    },
    {
      "line": 65,
      "value": "#    And I Click on Final Proceed to Payment"
    },
    {
      "line": 66,
      "value": "#    And I Verify Message to proceed to Post Office for Payment"
    },
    {
      "line": 67,
      "value": "#    And I Sign Out as Front Registered User"
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
formatter.examples({
  "line": 84,
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
      "line": 85,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
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
      "line": 86,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 108700,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
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
  "comments": [
    {
      "line": 10,
      "value": "#    Given I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\""
    },
    {
      "line": 11,
      "value": "#    When I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\""
    },
    {
      "line": 12,
      "value": "#    And I Click on Sign In button"
    },
    {
      "line": 13,
      "value": "#    And I Verify Applicant\u0027s Successful Login"
    },
    {
      "line": 14,
      "value": "#    And I Click on Register as Farmer"
    },
    {
      "line": 15,
      "value": "#    And I Verify that User is directed to My Application Page"
    },
    {
      "line": 16,
      "value": "#    And I Verify display of Farmers Card link"
    },
    {
      "line": 17,
      "value": "#    And I Verify Programmes link"
    },
    {
      "line": 18,
      "value": "#    And I Click on New Button to apply for Registration"
    },
    {
      "line": 19,
      "value": "#    And I Verify display of Registration Type Page"
    },
    {
      "line": 20,
      "value": "#    And I Click on Agro Processing Enterprise"
    },
    {
      "line": 21,
      "value": "#    And I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page"
    },
    {
      "line": 22,
      "value": "#    And I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\""
    },
    {
      "line": 23,
      "value": "#    And I Input Represented by \"\u003cRep_by\u003e\""
    },
    {
      "line": 24,
      "value": "#    And I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\""
    },
    {
      "line": 25,
      "value": "#    And I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\""
    },
    {
      "line": 26,
      "value": "#    And I Select Activity \"\u003cAct\u003e\""
    },
    {
      "line": 27,
      "value": "#    And I Input Office Address \"\u003cOff_Add\u003e\""
    },
    {
      "line": 28,
      "value": "#    And I Input Enterprise Address \"\u003cEnterprise_Address\u003e\""
    },
    {
      "line": 29,
      "value": "#    And I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\""
    },
    {
      "line": 30,
      "value": "#    And I Input List of Products manufactured \"\u003cProd_man\u003e\""
    },
    {
      "line": 31,
      "value": "#    And I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\""
    },
    {
      "line": 32,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 33,
      "value": "#    And I Verify Upload Required Documents Page is displayed"
    },
    {
      "line": 34,
      "value": "#    And I Upload Business Registration Card \"\u003cUpload_test\u003e\""
    },
    {
      "line": 35,
      "value": "#    And I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\""
    },
    {
      "line": 36,
      "value": "#    And I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\""
    },
    {
      "line": 37,
      "value": "#    And I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\""
    },
    {
      "line": 38,
      "value": "#    And I Upload National Identity card of representative \"\u003cUpload_test\u003e\""
    },
    {
      "line": 39,
      "value": "#    And I Upload National Identity cards of all shareholders \"\u003cUpload_test\u003e\""
    },
    {
      "line": 40,
      "value": "#    And I Upload Location Plan \"\u003cUpload_test\u003e\""
    },
    {
      "line": 41,
      "value": "#    And I Upload Copy of SMEDA Certificate \"\u003cUpload_test\u003e\""
    },
    {
      "line": 42,
      "value": "#    And I Upload Copy of Utility Bill \"\u003cUpload_test\u003e\""
    },
    {
      "line": 43,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 44,
      "value": "#    And I Click on Add Additional Document"
    },
    {
      "line": 45,
      "value": "#    And I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\""
    },
    {
      "line": 46,
      "value": "#    And I Verify Success message for adding Additional Document Name"
    },
    {
      "line": 47,
      "value": "#    And I Upload Additional Document \"\u003cUpload_test\u003e\""
    },
    {
      "line": 48,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 49,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 50,
      "value": "#    And I Verify Terms and Conditions Page"
    },
    {
      "line": 51,
      "value": "#    And I click on I agree to the Terms and Conditions"
    },
    {
      "line": 52,
      "value": "#    And I Select Bank \"\u003cBank_Name\u003e\""
    },
    {
      "line": 53,
      "value": "#    And I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\""
    },
    {
      "line": 54,
      "value": "#    And I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\""
    },
    {
      "line": 55,
      "value": "#    And I Click on Submit Application \"\u003cConfirmation\u003e\""
    },
    {
      "line": 56,
      "value": "#    And I Verify Success message for application submitted"
    },
    {
      "line": 57,
      "value": "#    And I Verify Application Status \"\u003cApp_status\u003e\""
    },
    {
      "line": 58,
      "value": "#    And I Verify Payment Status \"\u003cPayment_Status\u003e\""
    },
    {
      "line": 59,
      "value": "#    And I Copy Application Number"
    },
    {
      "line": 60,
      "value": "#    And I Click on Shopping Cart for payment"
    },
    {
      "line": 61,
      "value": "#    And Select Application for payment"
    },
    {
      "line": 62,
      "value": "#    And I Click on Proceed to Payment"
    },
    {
      "line": 63,
      "value": "#    And I Click on Payment Icon"
    },
    {
      "line": 64,
      "value": "#    And I Select Payment Method \"\u003cPayment_method\u003e\""
    },
    {
      "line": 65,
      "value": "#    And I Click on Final Proceed to Payment"
    },
    {
      "line": 66,
      "value": "#    And I Verify Message to proceed to Post Office for Payment"
    },
    {
      "line": 67,
      "value": "#    And I Sign Out as Front Registered User"
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
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I Input Amount of payment \"850\"",
  "matchedColumns": [
    5
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
  "duration": 8708667000,
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
  "duration": 186684700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1399938400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 64033600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 55547100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1551918500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1572861000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 51680000,
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
  "duration": 5136737700,
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
  "duration": 110402000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddPayment()"
});
formatter.result({
  "duration": 47145700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1605177200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 7094953900,
  "status": "passed"
});
formatter.after({
  "duration": 1481298500,
  "status": "passed"
});
formatter.after({
  "duration": 103900,
  "status": "passed"
});
});