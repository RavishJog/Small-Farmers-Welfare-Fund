package stepdefinition;

import com.cucumber.listener.Reporter;
import commonmethods.Utility;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import io.github.bonigarcia.wdm.WebDriverManager;
import javassist.bytecode.stackmap.BasicBlock;
import objectrepository.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;


import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.function.Function;

import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;

public class Steps extends Utility {

    protected static WebDriver driver;

    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    public Scenario scenario;

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }

    @After
    public void tearDown(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            // calling Sceenshot function
            takeScreenShot(scenario);
        }
        try {
            driver.quit();
        } catch (Exception e) {
            System.out.println(String.valueOf(e));
        }
    }

    @After
    public static void setup() {

        Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", System.getProperty("user.os"));
        Reporter.setTestRunnerOutput("Sample test runner output message");

        driver.quit();
    }


    @Given("^I am on SFWF Back Office Home Page \"([^\"]*)\"$")
    public void iAmOnSFWFBackOfficeHomePage(String Browser) throws Throwable {
        if (Browser.equals("Chrome")) {
            setUp();
            driver.get("http://130.1.16.176:18080/sfwfback/");
            driver.manage().window().maximize();
        } else if (Browser.equals("Edge")) {
            setUp();
            driver.get("http://130.1.16.176:18080/sfwfback/");
            driver.manage().window().maximize();
        } else {
            System.out.println("No browser found");
        }
    }

    @When("^I Input Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputUsernameAndPassword(String Username, String Password) throws Throwable {
        Home_page.Username(driver).sendKeys(Username);
        Home_page.Password(driver).sendKeys(Password);
    }

    @And("^I Click on Sign In button$")
    public void iClickOnSignInButton() {
        Home_page.Sign_in(driver).click();
    }

    @And("^I Verify Successful Login$")
    public void IVerifySuccessfulLogin() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Back_office_main_page.Welcome_profile(driver)));
        try {
            Back_office_main_page.Welcome_profile(driver);
        } catch (Exception e) {
            System.out.println("Welcome message did not appear");
            Assert.fail("Welcome message did not appear");
        }
    }

    @And("^I Sign Out$")
    public void iSignOut() throws InterruptedException {
        Back_office_main_page.Welcome_profile(driver).click();
        Thread.sleep(2000);
        Back_office_main_page.Sign_out(driver).click();
        Thread.sleep(2000);
        Back_office_main_page.Confirmation_yes(driver).click();
    }

    @And("^I Verify Successful Sign Out$")
    public void iVerifySuccessfulSignOut() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Home_page.Sign_in_to_sfwf(driver)));
        try {
            Home_page.Sign_in_to_sfwf(driver);
        } catch (Exception e) {
            System.out.println("Sign in to SFWF Label did not appear");
            Assert.fail("Sign in to SFWF Label did not appear");
        }
    }

    @And("^I Verify Bad Credential Message \"([^\"]*)\"$")
    public void iVerifyBadCredentialMessage(String Bad_Credential_Message) throws Throwable {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Home_page.Bad_credential_message(driver)));
//        Thread.sleep(3000);
        if (Bad_Credential_Message.equals("Bad Credential")) {
            try {
                Home_page.Bad_credential_message(driver);
            } catch (Exception e) {
                System.out.println("Bad Credential message did not appear");
                Assert.fail("Bad Credential message did not appear");
            }
        } else {
            System.out.println("Bad Credential message Displayed Correctly");
        }
    }


    @And("^I click on Manage Farmers Details$")
    public void iClickOnManageFarmersDetails() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Fees_and_fines.Manage_farmers_details(driver)));
        Fees_and_fines.Manage_farmers_details(driver).click();
    }

    @And("^I Click on Manage Fee and Fine$")
    public void iClickOnManageFeeAndFine() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Fees_and_fines.Manage_fee_and_fine(driver)));
        Fees_and_fines.Manage_fee_and_fine(driver).click();
    }


    @And("^I Verify Label of Page Manage Fee and Fine$")
    public void iVerifyLabelOfPageManageFeeAndFine() throws InterruptedException {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Fees_and_fines.Manage_fees_and_fine(driver)));
        try {
            Fees_and_fines.Manage_fees_and_fine(driver);
        } catch (Exception e) {
            System.out.println("Label of page did not appear");
            Assert.fail("Label of page did not appear");
        }
    }

    @And("^I Verify Type of fees sorting is clickable$")
    public void iVerifyTypeOfFeesSortingIsClickable() {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement interactableElement = Fees_and_fines.Type_of_fees_label(driver);
        wait.until(ExpectedConditions.elementToBeClickable(interactableElement));
    }

    @And("^I Verify Fee Code sorting is clickable$")
    public void iVerifyFeeCodeSortingIsClickable() {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement interactableElement = Fees_and_fines.Fee_code_label(driver);
        wait.until(ExpectedConditions.elementToBeClickable(interactableElement));

    }

    @And("^I Verify Amount sorting is clickable$")
    public void iVerifyAmountSortingIsClickable() {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement interactableElement = Fees_and_fines.Amount_label(driver);
        wait.until(ExpectedConditions.elementToBeClickable(interactableElement));

    }

    @And("^I Verify Currency sorting is clickable$")
    public void iVerifyCurrencySortingIsClickable() {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement interactableElement = Fees_and_fines.Currency_label(driver);
        wait.until(ExpectedConditions.elementToBeClickable(interactableElement));
    }

    @And("^I Verify Activate Deactivate sorting is clickable$")
    public void iVerifyActivateDeactivateSortingIsClickable() {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement interactableElement = Fees_and_fines.Activate_deactivate_label(driver);
        wait.until(ExpectedConditions.elementToBeClickable(interactableElement));
    }

    @And("^I Verify View label$")
    public void iVerifyViewLabel() {
        try {
            Fees_and_fines.View_label(driver);
        } catch (Exception e) {
            System.out.println("View Label did not appear");
            Assert.fail("View Label did not appear");
        }
    }

    @And("^I Verify Edit Label$")
    public void iVerifyEditLabel() {
        try {
            Fees_and_fines.Edit_label(driver);
        } catch (Exception e) {
            System.out.println("Edit Label did not appear");
            Assert.fail("Edit of page did not appear");
        }
    }

    @And("^I Click on Type of Fees$")
    public void iClickOnTypeOfFees() throws InterruptedException {
        Thread.sleep(3000);
        Fees_and_fines.Type_of_fees_label(driver).click();
    }

    @And("^I Verify Ascending order of Type of Fees$")
    public void iVerifyAscendingOrderOfTypeOfFees() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fees(driver);
        } catch (Exception e) {
            System.out.println("Ascending Order is not working properly");
            Assert.fail("Ascending Order is not working properly");
        }

    }

    @And("^I Click on Fee Code$")
    public void iClickOnFeeCode() throws InterruptedException {
        Thread.sleep(3000);
        Fees_and_fines.Fee_code_label(driver).click();
    }

    @And("^I Verify Ascending order of Fee Code$")
    public void iVerifyAscendingOrderOfFeeCode() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fee_code(driver);
        } catch (Exception e) {
            System.out.println("Ascending Order is not working properly");
            Assert.fail("Ascending Order is not working properly");
        }
    }


    @And("^I Verify Descending order of Type of Fees$")
    public void iVerifyDescendingOrderOfTypeOfFees() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.Last_Type_of_fees(driver);
        } catch (Exception e) {
            System.out.println("Descending Order is not working properly");
            Assert.fail("Descending Order is not working properly");
        }
    }

    @And("^I Verify Descending order of Fee Code$")
    public void iVerifyDescendingOrderOfFeeCode() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.Last_Type_of_fee_code(driver);
        } catch (Exception e) {
            System.out.println("Descending Order is not working properly");
            Assert.fail("Descending Order is not working properly");
        }
    }

    @And("^I Input Type of Fee \"([^\"]*)\"$")
    public void iInputTypeOfFee(String Fee_Type) throws Throwable {
        Thread.sleep(3000);
        Fees_and_fines.Type_of_fees_searchbar(driver).sendKeys(Fee_Type);
    }

    @And("^I Verify Type of Fee search Bar is working properly$")
    public void iVerifyTypeOfFeeSearchBarIsWorkingProperly() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fees(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Fee Code \"([^\"]*)\"$")
    public void iInputFeeCode(String Fee_Code) throws Throwable {
        Thread.sleep(3000);
        Fees_and_fines.Fee_code_searchbar(driver).sendKeys(Fee_Code);
    }

    @And("^I Verify Fee Code search Bar is working properly$")
    public void iVerifyFeeCodeSearchBarIsWorkingProperly() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fee_code(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Amount \"([^\"]*)\"$")
    public void iInputAmount(String Amount) throws Throwable {
        Thread.sleep(3000);
        Fees_and_fines.Amount_searchbar(driver).sendKeys(Amount);
    }

    @And("^I Verify Amount search Bar is working properly$")
    public void iVerifyAmountSearchBarIsWorkingProperly() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.Ten_thousand_amount(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Year \"([^\"]*)\"$")
    public void iInputYear(String Year) throws Throwable {
        Thread.sleep(3000);
        Fees_and_fines.Year_searchbar(driver).sendKeys(Year);
    }

    @And("^I Verify Year search Bar is working properly$")
    public void iVerifyYearSearchBarIsWorkingProperly() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.Ten_year(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Currency \"([^\"]*)\"$")
    public void iInputCurrency(String Currency) throws Throwable {
        Thread.sleep(3000);
        Fees_and_fines.Currency_searchbar(driver).sendKeys(Currency);
    }

    @And("^I Verify Currency search Bar is working properly$")
    public void iVerifyCurrencySearchBarIsWorkingProperly() throws InterruptedException {
        Thread.sleep(3000);
        try {
            Fees_and_fines.First_Type_of_currency(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }


    @Then("^I click on forget password$")
    public void iClickOnForgetPassword() throws InterruptedException {
        Thread.sleep(3000);
        Home_page.Forget_password(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Home_page.Forget_password_label(driver)));

    }

    @And("^I Verify Forget Password Page$")
    public void iVerifyForgetPasswordPage() {

        try {
            Home_page.Forget_password_label(driver);
        } catch (Exception e) {
            System.out.println("Forget Password Page did not load");
            Assert.fail("Forget Password Page did not load");
        }
    }

    @Given("^I am on SFWF Front Office Home Page \"([^\"]*)\"$")
    public void iAmOnSFWFFrontOfficeHomePage(String Browser) throws Throwable {
        if (Browser.equals("Chrome")) {
            setUp();

            driver.get("http://130.1.16.175:18080/sfwffront/pages/login.xhtml");
            driver.manage().window().maximize();
        } else if (Browser.equals("Edge")) {
            setUp();
            driver.get("http://130.1.16.175:18080/sfwffront/pages/login.xhtml");
            driver.manage().window().maximize();
        } else {
            System.out.println("No browser found");
        }
    }

    @When("^I Input Registered User's Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputRegisteredUserSUsernameAndPassword(String Username, String Password) throws Throwable {
        Front_Home_page.Username(driver).sendKeys(Username);
        Front_Home_page.Password(driver).sendKeys(Password);
    }

    @And("^I Verify Applicant's Successful Login$")
    public void iVerifyApplicantSSuccessfulLogin() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Front_Home_page.Welcome_user(driver)));
    }

    @And("^I Click on Register as Farmer$")
    public void iClickOnRegisterAsFarmer() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Front_Home_page.Register_as_farmer(driver)));
        Front_Home_page.Register_as_farmer(driver).click();
    }

    @And("^I Verify that User is directed to My Application Page$")
    public void iVerifyThatUserIsDirectedToMyApplicationPage() {
        try {
            Front_Home_page.My_application(driver);
        } catch (Exception e) {
            System.out.println("My Application Page did not appear");
            Assert.fail("My Application Page did not appear");
        }
    }

        @And("^I Verify display of Farmers Card link$")
        public void iVerifyDisplayOfFarmersCardLink () {
            try {
                Front_Home_page.Farmer_card(driver);
            } catch (Exception e) {
                System.out.println("Farmers Card link did not appear");
                Assert.fail("Farmers Card link did not appear");
            }
        }


        @And("^I Verify Programmes link$")
        public void iVerifyProgrammesLink () {
            try {
                Front_Home_page.Programmes(driver);
            } catch (Exception e) {
                System.out.println("Programmes link did not appear");
                Assert.fail("Programmes link did not appear");
            }
        }

    @And("^I Click on New Button to apply for Registration$")
    public void iClickOnNewButtonToApplyForRegistration() {
        Front_Home_page.New_registration_application(driver).click();
    }

    @And("^I Verify display of Registration Type Page$")
    public void iVerifyDisplayOfRegistrationTypePage() {
        try {
            Front_Home_page.Registration_type_page(driver);
        } catch (Exception e) {
            System.out.println("Registration Type Page did not appear");
            Assert.fail("Registration Type Page did not appear");
        }
    }

    @And("^I Click on Farmers Cooperatives Association, Society or Company$")
    public void iClickOnFarmersCooperativesAssociationSocietyOrCompany() throws InterruptedException {
        Farmers_cooperatives_association_society_company.Farmers_coo_ass_soc_com(driver).click();
        Thread.sleep(2000);
    }

    @And("^I Verify display of Registration of Farmers page$")
    public void iVerifyDisplayOfRegistrationOfFarmersPage() {
        try {
            Farmers_cooperatives_association_society_company.Registration_for_farmers(driver);
        } catch (Exception e) {
            System.out.println("Registration of Farmers page did not appear");
            Assert.fail("Registration of Farmers page did not appear");
        }
    }

    @And("^I Input Associate/Society/Company Name \"([^\"]*)\"$")
    public void iInputAssociateSocietyCompanyName(String Co_Name) throws Throwable {
        Farmers_cooperatives_association_society_company.Associate_society_company_name(driver).sendKeys(Co_Name);
    }

    @And("^I Input Represented by \"([^\"]*)\"$")
    public void iInputRepresentedBy(String Rep_by) throws Throwable {
        Farmers_cooperatives_association_society_company.Represented_by(driver).sendKeys(Rep_by);
    }

    @And("^I Input Business Registration No\\.\\(BRN\\) \"([^\"]*)\"$")
    public void iInputBusinessRegistrationNoBRN(String BRN) throws Throwable {
        Farmers_cooperatives_association_society_company.BRN(driver).sendKeys(BRN);
    }

    @And("^I Input Certificate of Incorporation No \"([^\"]*)\"$")
    public void iInputCertificateOfIncorporationNo(String Cert_No) throws Throwable {
        Farmers_cooperatives_association_society_company.Certificate_of_incorporation(driver).sendKeys(Cert_No);
    }

    @And("^I Select Activity \"([^\"]*)\"$")
    public void iSelectActivity(String Act) throws Throwable {
        if (Act.equals("Part Time")) {
            try {
                Farmers_cooperatives_association_society_company.Part_time(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button for Part Time is not working");
                Assert.fail("Radio Button for Part Time is not working");
            }
        } else if (Act.equals("Full Time")) {
            try {
                Farmers_cooperatives_association_society_company.Full_time(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button for Full Time is not working");
                Assert.fail("Radio Button for Full Time is not working");
            }
        } else {
            System.out.println("Radio Button is functioning properly");
        }

    }

    @And("^I Input Office Phone Number \"([^\"]*)\"$")
    public void iInputOfficePhoneNumber(String Off_Num) throws Throwable {
        Farmers_cooperatives_association_society_company.Office_phone_num(driver).sendKeys(Off_Num);
    }

    @And("^I Input Mobile Phone Number \"([^\"]*)\"$")
    public void iInputMobilePhoneNumber(String Mob_Num) throws Throwable {
        Farmers_cooperatives_association_society_company.Mobile_phone_num(driver).sendKeys(Mob_Num);
    }

    @And("^I Input Office Address \"([^\"]*)\"$")
    public void iInputOfficeAddress(String Off_Add) throws Throwable {
        Farmers_cooperatives_association_society_company.Office_address(driver).sendKeys(Off_Add);
    }

    @And("^I Select Status of Applicant \"([^\"]*)\"$")
    public void iSelectStatusOfApplicant(String Status_Applicant) throws Throwable {
        if (Status_Applicant.equals("Sole Trader")) {
            try {
                Farmers_cooperatives_association_society_company.Sole_trader(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Company")) {
            try {
                Farmers_cooperatives_association_society_company.Company(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Société/Partnership")) {
            try {
                Farmers_cooperatives_association_society_company.Societe_Partnership(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        }  else if (Status_Applicant.equals("Cooperative society")) {
            try {
                Farmers_cooperatives_association_society_company.Cooperative_society(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        }  else if (Status_Applicant.equals("Association")) {
            try {
                Farmers_cooperatives_association_society_company.Association(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        }  else {
            System.out.println("Radio Button is functioning properly");
        }
    }

    @And("^I Select Duration Year for Registration membership \"([^\"]*)\"$")
    public void iSelectDurationYearForRegistrationMembership(String Year_dur) throws Throwable {
        Farmers_cooperatives_association_society_company.Select_one(driver).click();
        Thread.sleep(1000);
        if (Year_dur.equals("1")) {
            try {
                Farmers_cooperatives_association_society_company.One_Year(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        }  else if (Year_dur.equals("2")) {
            try {
                Farmers_cooperatives_association_society_company.Two_Years(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else {
            System.out.println("Radio Button is functioning properly");
        }
        Thread.sleep(1000);
    }

    @And("^I Input List of Products manufactured \"([^\"]*)\"$")
    public void iInputListOfProductsManufactured(String Prod_man) throws Throwable {
        Thread.sleep(1000);
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Farmers_cooperatives_association_society_company.Registration_for_farmers(driver));
        Thread.sleep(1000);
        Farmers_cooperatives_association_society_company.List_products_manufactured(driver).sendKeys(Prod_man);
    }

    @And("^I Input No\\. of persons employed \"([^\"]*)\"$")
    public void iInputNoOfPersonsEmployed(String No_person) throws Throwable {
        Farmers_cooperatives_association_society_company.Number_persons_employed(driver).sendKeys(No_person);
    }

    @And("^I Input Actual Annual Turnover \\(Rs\\) \"([^\"]*)\"$")
    public void iInputActualAnnualTurnoverRs(String Actual_ann_turnover) throws Throwable {
        Farmers_cooperatives_association_society_company.Actual_annual_turnover(driver).sendKeys(Actual_ann_turnover);
    }

    @And("^I Select Status of business \"([^\"]*)\"$")
    public void iSelectStatusOfBusiness(String Status_business) throws Throwable {
        if (Status_business.equals("New")) {
            try {
                Farmers_cooperatives_association_society_company.Status_new(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        }  else if (Status_business.equals("Existing")) {
            try {
                Farmers_cooperatives_association_society_company.Status_Existing(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else {
            System.out.println("Radio Button is functioning properly");
        }
    }

    @And("^I Input No\\. of years of operation \"([^\"]*)\"$")
    public void iInputNoOfYearsOfOperation(String Years_operation) throws Throwable {
        Farmers_cooperatives_association_society_company.Number_of_years_operation(driver).sendKeys(Years_operation);
    }

    @And("^I Click on Save and Continue$")
    public void iClickOnSaveAndContinue() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Farmers_cooperatives_association_society_company.Save_and_continue(driver));
        Thread.sleep(1000);
        Farmers_cooperatives_association_society_company.Save_and_continue(driver).click();
        Thread.sleep(3000);
    }

    @And("^I Verify Upload Required Documents Page is displayed$")
    public void iVerifyUploadRequiredDocumentsPageIsDisplayed() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Farmers_cooperatives_association_society_company.Upload_required_documents(driver));
//        WebDriverWait w = new WebDriverWait(driver, 5);
//        w.until(ExpectedConditions.visibilityOf(Farmers_cooperatives_association_society_company.Upload_required_documents(driver)));
//        Thread.sleep(1000);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h6[contains(text(),'Upload Required Documents')]")));
        try {
            Farmers_cooperatives_association_society_company.Upload_required_documents(driver);
        } catch (Exception e) {
            System.out.println("Upload Required Documents did not appear");
            Assert.fail("Upload Required Documents did not appear");
        }

    }

    @And("^I Upload Business Registration Card \"([^\"]*)\"$")
    public void iUploadBusinessRegistrationCard(String Upload_test) throws Throwable {
        Documents_upload.Business_Registration_card_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[1]")));


    }

    @And("^I Verify for Document Upload Success Message$")
    public void iVerifyForDocumentUploadSuccessMessage() {

        try {
            Documents_upload.Document_upload_success_message(driver);
        } catch (Exception e) {
            System.out.println("Document Upload Success Message did not appear");
            Assert.fail("Document Upload Success Message did not appear");
        }
    }

    @And("^I Upload Certificate of Incorporation \"([^\"]*)\"$")
    public void iUploadCertificateOfIncorporation(String Upload_test) throws Throwable {
        Documents_upload.Certificate_of_incorporation_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[2]")));

    }

    @And("^I Upload List of Directors/ Associates \"([^\"]*)\"$")
    public void iUploadListOfDirectorsAssociates(String Upload_test) throws Throwable {
        Documents_upload.List_of_directors_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[3]")));
    }

    @And("^I Upload Board Resolution of Enterprise for appointment of representative\\(s\\) \"([^\"]*)\"$")
    public void iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String Upload_test) throws Throwable {
        Documents_upload.Board_resolution_of_enterprise_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[4]")));
    }

    @And("^I Upload National Identity card of representative \"([^\"]*)\"$")
    public void iUploadNationalIdentityCardOfRepresentative(String Upload_test) throws Throwable {
        Documents_upload.National_identity_card_Representative_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[5]")));
    }

    @And("^I Upload National Identity cards of all shareholders \"([^\"]*)\"$")
    public void iUploadNationalIdentityCardsOfAllShareholders(String Upload_test) throws Throwable {
        Documents_upload.National_identity_card_Shareholders_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[6]")));
    }

    @And("^I Upload Location Plan \"([^\"]*)\"$")
    public void iUploadLocationPlan(String Upload_test) throws Throwable {
        Documents_upload.Location_plan_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[7]")));
    }

    @And("^I Upload Copy of SMEDA Certificate \"([^\"]*)\"$")
    public void iUploadCopyOfSMEDACertificate(String Upload_test) throws Throwable {
        Documents_upload.SMEDA_certificate_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[8]")));
    }

    @And("^I Upload Copy of Utility Bill \"([^\"]*)\"$")
    public void iUploadCopyOfUtilityBill(String Upload_test) throws Throwable {
        Documents_upload.Utility_bill_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[9]")));
    }



    @And("^I Verify Terms and Conditions Page$")
    public void iVerifyTermsAndConditionsPage() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Terms_and_condition(driver));

        WebDriverWait w = new WebDriverWait(driver, 20);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h6[contains(.,'Terms and Conditions')]")));
    }

    @And("^I click on I agree to the Terms and Conditions$")
    public void iClickOnIAgreeToTheTermsAndConditions() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Agree_termsandcondition(driver));
        Terms_and_Condition.Agree_termsandcondition(driver).click();
    }

    @And("^I Select Bank \"([^\"]*)\"$")
    public void iSelectBank(String Bank_Name) throws Throwable {
        WebDriverWait w = new WebDriverWait(driver, 20);
        w.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("(//div[contains(.,'Personal Bank Account Number:')])[15]")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Personal_Bank_Account_Number_label(driver));
        Thread.sleep(1000);
        if (Bank_Name.equals("ABC Banking")) {
            try {
                Terms_and_Condition.Select_one(driver).click();
                Thread.sleep(1500);
                Terms_and_Condition.ABC_Banking_Corporation(driver).click();
            } catch (Exception e) {
                System.out.println("Bank Selection is not working");
                Assert.fail("Bank Selection is not working");
            }
        } else {
            System.out.println("Bank Selection is functioning properly");
        }
        Thread.sleep(1000);
        takeScreenShot(scenario);
    }

    @And("^I Input Bank Branch \"([^\"]*)\"$")
    public void iInputBankBranch(String Bank_Branch) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Branch_label(driver));
        Thread.sleep(1000);
        Terms_and_Condition.Bank_Branch(driver).sendKeys(Bank_Branch);
    }

    @And("^I Input Personal Bank Account Number\"([^\"]*)\"$")
    public void iInputPersonalBankAccountNumber(String Bank_Account_No) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Personal_Bank_Account_Number_label(driver));
        Thread.sleep(1000);
        Terms_and_Condition.Bank_account_number(driver).sendKeys(Bank_Account_No);
    }


    @And("^I Click on Add Additional Document$")
    public void iClickOnAddAdditionalDocument() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Farmers_cooperatives_association_society_company.Save_and_continue(driver));
        Thread.sleep(1500);
        Documents_upload.Add_additional_documents(driver).click();
        Thread.sleep(1500);
    }

    @And("^I Input Additional Document Name \"([^\"]*)\"$")
    public void iInputAdditionalDocumentName(String Additional_Doc_Name) throws Throwable {
        Documents_upload.Document_details(driver).sendKeys(Additional_Doc_Name);
        Documents_upload.Save_additional_documents(driver).click();
        Thread.sleep(1500);
    }

    @And("^I Verify Success message for adding Additional Document Name$")
    public void iVerifySuccessMessageForAddingAdditionalDocumentName() {
        try {
            Documents_upload.Adding_doc_name_success_message(driver);
        } catch (Exception e) {
            System.out.println("Success Message did not appear");
            Assert.fail("Success Message did not appear");
        }
    }

    @And("^I Upload Additional Document \"([^\"]*)\"$")
    public void iUploadAdditionalDocument(String Upload_test) throws Throwable {
        Documents_upload.Additional_document_upload(driver).sendKeys(Upload_test);
        WebDriverWait w = new WebDriverWait(driver, 1000);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[10]")));

    }


    @And("^I Verify Success message for application submitted$")
    public void iVerifySuccessMessageForApplicationSubmitted() {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(text(),'My Application')]")));
        try {
            My_application.Success_message_submit_application(driver);
        } catch (Exception e){
            System.out.println("Success message did not appear");
        }

    }

    @And("^I Click on Submit Application \"([^\"]*)\"$")
    public void iClickOnSubmitApplication(String Confirmation) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Farmers_cooperatives_association_society_company.Submit_application(driver));
        Thread.sleep(1000);
        Farmers_cooperatives_association_society_company.Submit_application(driver).click();
        Thread.sleep(2000);
        if (Confirmation.equals("Yes")){
            Terms_and_Condition.Yes_submit_app(driver).click();
        } else {
            if (Confirmation.equals("No")){
                Terms_and_Condition.Yes_submit_app(driver).click();
            } else {
                System.out.println("Confirmation did not appear");
            }
        }

    }

    @And("^I Click on Agro Processing Enterprise$")
    public void iClickOnAgroProcessingEnterprise() throws InterruptedException {
        Agro_Processing_Enterprise.Agro_processing_enterprise(driver).click();
        Thread.sleep(2000);
    }

    @And("^I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page$")
    public void iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage() {
        try {
            Agro_Processing_Enterprise.Registration_for_agro_processing_enterprise(driver);
        } catch (Exception e) {
            System.out.println("REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page did not appear");
            Assert.fail("REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page page did not appear");
        }
    }
}


