$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US12208.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 12208 - Register as small planters"
    }
  ],
  "line": 4,
  "name": "Register as small planters",
  "description": "",
  "id": "register-as-small-planters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US12208"
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
  "name": "Application to Register as small planters",
  "description": "",
  "id": "register-as-small-planters;application-to-register-as-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Registration_as_small_planters"
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
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Select Family relationship \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "register-as-small-planters;application-to-register-as-small-planters;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "Password",
        "Applicant_Title",
        "District",
        "Education_Level",
        "Act",
        "Other_Occupation",
        "Photo",
        "Year_dur",
        "Marital_Status",
        "Relationship",
        "Family_Surname",
        "Family_Other_Names",
        "Gender",
        "DOB",
        "Occupation",
        "Org_acc_no",
        "Crop_Type",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
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
      "line": 66,
      "id": "register-as-small-planters;application-to-register-as-small-planters;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "Mr",
        "Black River",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "1",
        "Married",
        "Spouse",
        "Sanon",
        "Kirti",
        "Female",
        "1Jan94",
        "Air Hostess",
        "0001252563",
        "Cane",
        "2.5",
        "Tenant",
        "Moka",
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
      "line": 67,
      "id": "register-as-small-planters;application-to-register-as-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 146800,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Application to Register as small planters",
  "description": "",
  "id": "register-as-small-planters;application-to-register-as-small-planters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US12208"
    },
    {
      "line": 7,
      "name": "@Registration_as_small_planters"
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
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select Applicant Title \"Mr\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
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
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Select Family relationship \"Spouse\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Save Particulars of Crop",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 62,
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
  "duration": 3349736500,
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
  "duration": 689514300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 442037500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1124242000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 429579400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 29884000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 26892500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 25355900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 120138500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 72161400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 2263466800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 72266400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 26
    }
  ],
  "location": "Steps.iSelectApplicantTitle(String)"
});
formatter.result({
  "duration": 2658070100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black River",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 1132191800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3654270200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 189103900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 69529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 23584765400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1036156900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 5694750700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1627820700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9184003700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 57661900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3114303800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3069819600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectFamilyRelationship(String)"
});
formatter.result({
  "duration": 2668468600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanon",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 71968100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kirti",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 63366900,
  "status": "passed"
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
  "duration": 1615041600,
  "status": "passed"
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
  "duration": 5931044500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Air Hostess",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 86240000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 77108700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 60543100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 59068600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9163048300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 57062200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3097016200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationTable()"
});
formatter.result({
  "duration": 3097800900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "duration": 55846100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cane",
      "offset": 20
    }
  ],
  "location": "Steps.iSelectCropType(String)"
});
formatter.result({
  "duration": 1648259100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "duration": 78790400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectOwnerType(String)"
});
formatter.result({
  "duration": 1699134200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "duration": 86248200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfCrop()"
});
formatter.result({
  "duration": 63197200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9156288200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7008739900,
  "status": "passed"
});
formatter.after({
  "duration": 1516247800,
  "status": "passed"
});
formatter.after({
  "duration": 163145700,
  "status": "passed"
});
});