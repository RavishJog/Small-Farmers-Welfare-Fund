$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Sign_in_backoffice.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story Sign In"
    },
    {
      "line": 2,
      "value": "# As an Back Office User"
    },
    {
      "line": 3,
      "value": "# I want to Sign In"
    },
    {
      "line": 4,
      "value": "# So that I can access the SFWF Backoffice Portal"
    }
  ],
  "line": 8,
  "name": "Login into SFWF Backoffice Portal",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#Scenario1"
    }
  ],
  "line": 12,
  "name": "Login into SFWF Backoffice Portal with correct credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sign_in_correct_credentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Input Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on forget password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Verify Forget Password Page",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "Password"
      ],
      "line": 24,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Admin1",
        "Admin@123"
      ],
      "line": 25,
      "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 181900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login into SFWF Backoffice Portal with correct credentials",
  "description": "",
  "id": "login-into-sfwf-backoffice-portal;login-into-sfwf-backoffice-portal-with-correct-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Main_feature"
    },
    {
      "line": 11,
      "name": "@Sign_in_correct_credentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Input Username \"Suraj_Admin1\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on forget password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Verify Forget Password Page",
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
  "duration": 4478373700,
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
  "duration": 448065499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1476495999,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 110839999,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4356790700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 128146199,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnForgetPassword()"
});
formatter.result({
  "duration": 3281770499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForgetPasswordPage()"
});
formatter.result({
  "duration": 17331299,
  "status": "passed"
});
formatter.after({
  "duration": 11916306799,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LT5-ALIN\u0027, ip: \u0027130.1.19.186\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d127.0.6533.99 (f31af5097d90ef5ae5bd7b8700199bc6189ba34d-refs/branch-heads/6533@{#1910}), userDataDir\u003dC:\\Users\\ALI~1.NAU\\AppData\\Local\\Temp\\scoped_dir11672_975179490}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53622}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d127.0.6533.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 2897502b577d3c56396215960fdda16f\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:533)\r\n\tat stepdefinition.Steps.setup(Steps.java:79)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.RuntimeException: Process refused to die after 10 seconds, and couldn\u0027t taskkill it: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:133)\r\n\tat org.openqa.selenium.os.ProcessUtils.killProcess(ProcessUtils.java:81)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.destroyHarder(UnixProcess.java:246)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.access$200(UnixProcess.java:200)\r\n\tat org.openqa.selenium.os.UnixProcess.destroy(UnixProcess.java:126)\r\n\tat org.openqa.selenium.os.CommandLine.destroy(CommandLine.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:221)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\t... 52 more\r\nCaused by: org.openqa.selenium.os.ProcessUtils$ProcessStillAliveException: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.waitForProcessDeath(ProcessUtils.java:67)\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:129)\r\n\t... 60 more\r\nCaused by: java.lang.InterruptedException\r\n\tat java.lang.ProcessImpl.waitFor(ProcessImpl.java:523)\r\n\tat org.openqa.selenium.os.ProcessUtils$ProcessWaiter.run(ProcessUtils.java:154)\r\n\tat java.lang.Thread.run(Thread.java:750)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3032901,
  "status": "passed"
});
});