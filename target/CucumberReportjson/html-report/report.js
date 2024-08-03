$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US12200.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 12200 - Register as Farmers’ Cooperative Association, Society or Company-Application form"
    }
  ],
  "line": 5,
  "name": "Register as Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "register-as-farmers’-cooperative-association,-society-or-company",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Main_feature"
    },
    {
      "line": 4,
      "name": "@US12200"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario1"
    }
  ],
  "line": 9,
  "name": "Register as Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "register-as-farmers’-cooperative-association,-society-or-company;register-as-farmers’-cooperative-association,-society-or-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Register_as_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Business Registration No.(BRN) \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Input Certificate of Incorporation No \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Office Phone Number \"\u003cOff_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Input Mobile Phone Number \"\u003cMob_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Input No. of persons employed \"\u003cNo_person\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Input Actual Annual Turnover (Rs) \"\u003cActual_ann_turnover\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Select Status of business \"\u003cStatus_business\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Input No. of years of operation \"\u003cYears_operation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Upload National Identity cards of all shareholders \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Upload Location Plan \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Upload Copy of SMEDA Certificate \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Upload Copy of Utility Bill \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Input Bank Branch \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Input Personal Bank Account Number\"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "register-as-farmers’-cooperative-association,-society-or-company;register-as-farmers’-cooperative-association,-society-or-company;",
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
        "Off_Num",
        "Mob_Num",
        "Off_Add",
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
        "Confirmation"
      ],
      "line": 71,
      "id": "register-as-farmers’-cooperative-association,-society-or-company;register-as-farmers’-cooperative-association,-society-or-company;;1"
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
        "2025599",
        "58964587",
        "The Main Road, Grand Port",
        "Company",
        "1",
        "Tomato, Pepper",
        "50",
        "10000000",
        "Existing",
        "5",
        "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes"
      ],
      "line": 72,
      "id": "register-as-farmers’-cooperative-association,-society-or-company;register-as-farmers’-cooperative-association,-society-or-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 110600,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Register as Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "register-as-farmers’-cooperative-association,-society-or-company;register-as-farmers’-cooperative-association,-society-or-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Main_feature"
    },
    {
      "line": 4,
      "name": "@US12200"
    },
    {
      "line": 8,
      "name": "@Register_as_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Business Registration No.(BRN) \"C123456789\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Input Certificate of Incorporation No \"XLPR852\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Office Phone Number \"2025599\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Input Mobile Phone Number \"58964587\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant \"Company\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Input No. of persons employed \"50\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Input Actual Annual Turnover (Rs) \"10000000\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Select Status of business \"Existing\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Input No. of years of operation \"5\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Business Registration Card \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Certificate of Incorporation \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Upload List of Directors/ Associates \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Upload National Identity card of representative \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Upload National Identity cards of all shareholders \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Upload Location Plan \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Upload Copy of SMEDA Certificate \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Upload Copy of Utility Bill \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Upload Additional Document \"C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Input Bank Branch \"Port Louis\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Input Personal Bank Account Number\"0001252563636\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Verify Success message for application submitted",
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
  "duration": 4714357500,
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
  "duration": 216095400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4731441500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 95129200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 569424300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 27417000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 24944700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15405900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 487382600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 15696500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFarmersCooperativesAssociationSocietyOrCompany()"
});
formatter.result({
  "duration": 2597185400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 58178500,
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
  "duration": 158616900,
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
  "duration": 91880500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 40
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRN(String)"
});
formatter.result({
  "duration": 67724200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 41
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNo(String)"
});
formatter.result({
  "duration": 71258700,
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
  "duration": 63306800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025599",
      "offset": 29
    }
  ],
  "location": "Steps.iInputOfficePhoneNumber(String)"
});
formatter.result({
  "duration": 85766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58964587",
      "offset": 29
    }
  ],
  "location": "Steps.iInputMobilePhoneNumber(String)"
});
formatter.result({
  "duration": 85238400,
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
  "duration": 69232100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectStatusOfApplicant(String)"
});
formatter.result({
  "duration": 57789800,
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
  "duration": 2169239200,
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
  "duration": 2199150000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "Steps.iInputNoOfPersonsEmployed(String)"
});
formatter.result({
  "duration": 69374400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000000",
      "offset": 37
    }
  ],
  "location": "Steps.iInputActualAnnualTurnoverRs(String)"
});
formatter.result({
  "duration": 79000800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectStatusOfBusiness(String)"
});
formatter.result({
  "duration": 51775900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "Steps.iInputNoOfYearsOfOperation(String)"
});
formatter.result({
  "duration": 77482600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 4167047700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 132314300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 4915581900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 2763698500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 3912832300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 1725657400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 2246323400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 54
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardsOfAllShareholders(String)"
});
formatter.result({
  "duration": 3846365400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 24
    }
  ],
  "location": "Steps.iUploadLocationPlan(String)"
});
formatter.result({
  "duration": 2811608400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 36
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificate(String)"
});
formatter.result({
  "duration": 1189310500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 31
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBill(String)"
});
formatter.result({
  "duration": 1182840000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 31486300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3173112000,
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
  "duration": 1719271900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 32582500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\suraj.joggessur\\Desktop\\SFWF\\SFWF\\Upload_Test1.pdf",
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
});
formatter.result({
  "duration": 1186120900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 21651700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 4199691500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 120922000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 169844800,
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
  "duration": 4364956100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 21
    }
  ],
  "location": "Steps.iInputBankBranch(String)"
});
formatter.result({
  "duration": 1191054800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 37
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumber(String)"
});
formatter.result({
  "duration": 1162859400,
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
  "duration": 4086324700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 53833400,
  "status": "passed"
});
formatter.after({
  "duration": 1966420300,
  "status": "passed"
});
formatter.after({
  "duration": 123400,
  "status": "passed"
});
});