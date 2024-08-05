$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US12199.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 12199 - List of Type of Fee and Fine"
    },
    {
      "line": 2,
      "value": "# As an Back Office User"
    },
    {
      "line": 3,
      "value": "# I want to Access the List of Fees and fines"
    },
    {
      "line": 4,
      "value": "# So that I can view, Edit and Add fees and fines"
    }
  ],
  "line": 8,
  "name": "View, Edit, Add fees and fines",
  "description": "",
  "id": "view,-edit,-add-fees-and-fines",
  "keyword": "Feature",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@US12199"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 35,
      "value": "#Scenario2 - 12873 - TC 2-Search"
    }
  ],
  "line": 37,
  "name": "Searching of Fees and fines",
  "description": "",
  "id": "view,-edit,-add-fees-and-fines;searching-of-fees-and-fines",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Searching_list_of_fees_and_fines"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I Input Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Manage Farmers Details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Input Type of Fee \"\u003cFee_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Verify Type of Fee search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input Fee Code \"\u003cFee_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify Fee Code search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Input Amount \"\u003cAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify Amount search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Input Year \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Verify Year search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Input Currency \"\u003cCurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Verify Currency search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "view,-edit,-add-fees-and-fines;searching-of-fees-and-fines;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "Password",
        "Fee_Type",
        "Fee_Code",
        "Amount",
        "Year",
        "Currency"
      ],
      "line": 64,
      "id": "view,-edit,-add-fees-and-fines;searching-of-fees-and-fines;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Admin1",
        "Admin@123",
        "AA-Fertiliser",
        "AAFSS2",
        "10000",
        "10 Year",
        "AA-Rs"
      ],
      "line": 65,
      "id": "view,-edit,-add-fees-and-fines;searching-of-fees-and-fines;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Searching of Fees and fines",
  "description": "",
  "id": "view,-edit,-add-fees-and-fines;searching-of-fees-and-fines;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 36,
      "name": "@Searching_list_of_fees_and_fines"
    },
    {
      "line": 7,
      "name": "@US12199"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I Input Username \"Suraj_Admin1\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Manage Farmers Details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Input Type of Fee \"AA-Fertiliser\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Verify Type of Fee search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Input Fee Code \"AAFSS2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify Fee Code search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Input Amount \"10000\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify Amount search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Input Year \"10 Year\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Verify Year search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Input Currency \"AA-Rs\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Verify Currency search Bar is working properly",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Click on Manage Fee and Fine",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Verify Successful Sign Out",
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
  "duration": 22350186600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Admin1",
      "offset": 18
    },
    {
      "val": "Admin@123",
      "offset": 46
    }
  ],
  "location": "Steps.iInputUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 212322500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1229665800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 65777100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFarmersDetails()"
});
formatter.result({
  "duration": 91044300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 1237287200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AA-Fertiliser",
      "offset": 21
    }
  ],
  "location": "Steps.iInputTypeOfFee(String)"
});
formatter.result({
  "duration": 3118011000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTypeOfFeeSearchBarIsWorkingProperly()"
});
formatter.result({
  "duration": 3050546300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 969998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAFSS2",
      "offset": 18
    }
  ],
  "location": "Steps.iInputFeeCode(String)"
});
formatter.result({
  "duration": 3085671000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyFeeCodeSearchBarIsWorkingProperly()"
});
formatter.result({
  "duration": 3053633600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 2622058800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 16
    }
  ],
  "location": "Steps.iInputAmount(String)"
});
formatter.result({
  "duration": 3113491900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyAmountSearchBarIsWorkingProperly()"
});
formatter.result({
  "duration": 3050137200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 4591762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 Year",
      "offset": 14
    }
  ],
  "location": "Steps.iInputYear(String)"
});
formatter.result({
  "duration": 3113310200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyYearSearchBarIsWorkingProperly()"
});
formatter.result({
  "duration": 3056075400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 1352784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AA-Rs",
      "offset": 18
    }
  ],
  "location": "Steps.iInputCurrency(String)"
});
formatter.result({
  "duration": 3097674800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyCurrencySearchBarIsWorkingProperly()"
});
formatter.result({
  "duration": 3059054200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageFeeAndFine()"
});
formatter.result({
  "duration": 623764800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4482263500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 53523800,
  "status": "passed"
});
formatter.after({
  "duration": 1091401400,
  "status": "passed"
});
formatter.after({
  "duration": 90833100,
  "status": "passed"
});
});