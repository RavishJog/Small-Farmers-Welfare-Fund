$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US12822.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 12822 - Payment Process"
    }
  ],
  "line": 4,
  "name": "Payment for Registration",
  "description": "",
  "id": "payment-for-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US12882"
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
  "name": "Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "payment-for-registration;payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Payment_at_counter_for_Agro-Processing-Enterprise"
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
  "comments": [
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
    }
  ],
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
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "payment-for-registration;payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "Password",
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
      "line": 71,
      "id": "payment-for-registration;payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
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
      "line": 72,
      "id": "payment-for-registration;payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94100,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "payment-for-registration;payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Payment_at_counter_for_Agro-Processing-Enterprise"
    },
    {
      "line": 3,
      "name": "@US12882"
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
  "comments": [
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
    }
  ],
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
    25
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
  "keyword": "Then "
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
  "duration": 2276661900,
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
  "duration": 185380100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1162499600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 52514800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 375088400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 16660300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 23966900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 20741700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 44272700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2091283100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.selectApplicationForPayment()"
});
formatter.result({
  "duration": 2190918200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 617688500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 602875400,
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
  "duration": 5170274200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 100300400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 6572122800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 6911119100,
  "status": "passed"
});
formatter.after({
  "duration": 1202088200,
  "status": "passed"
});
formatter.after({
  "duration": 67974100,
  "status": "passed"
});
});