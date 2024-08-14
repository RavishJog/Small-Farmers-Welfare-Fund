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
import io.github.bonigarcia.wdm.WebDriverManager;
import objectrepository.*;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static java.lang.Thread.sleep;
import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;

public class Steps extends Utility {

    protected static WebDriver driver;

    private String Application_reference_number;

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
    public void iInputUsernameAndPassword(String BOUsername, String BOPassword) throws Throwable {
        Home_page.Username(driver).sendKeys(BOUsername);
        Home_page.Password(driver).sendKeys(BOPassword);
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
        sleep(2000);
        Back_office_main_page.Sign_out(driver).click();
        sleep(2000);
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
        tearDown();
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
        sleep(3000);
        Fees_and_fines.Type_of_fees_label(driver).click();
    }

    @And("^I Verify Ascending order of Type of Fees$")
    public void iVerifyAscendingOrderOfTypeOfFees() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fees(driver);
        } catch (Exception e) {
            System.out.println("Ascending Order is not working properly");
            Assert.fail("Ascending Order is not working properly");
        }

    }

    @And("^I Click on Fee Code$")
    public void iClickOnFeeCode() throws InterruptedException {
        sleep(3000);
        Fees_and_fines.Fee_code_label(driver).click();
    }

    @And("^I Verify Ascending order of Fee Code$")
    public void iVerifyAscendingOrderOfFeeCode() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fee_code(driver);
        } catch (Exception e) {
            System.out.println("Ascending Order is not working properly");
            Assert.fail("Ascending Order is not working properly");
        }
    }


    @And("^I Verify Descending order of Type of Fees$")
    public void iVerifyDescendingOrderOfTypeOfFees() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.Last_Type_of_fees(driver);
        } catch (Exception e) {
            System.out.println("Descending Order is not working properly");
            Assert.fail("Descending Order is not working properly");
        }
    }

    @And("^I Verify Descending order of Fee Code$")
    public void iVerifyDescendingOrderOfFeeCode() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.Last_Type_of_fee_code(driver);
        } catch (Exception e) {
            System.out.println("Descending Order is not working properly");
            Assert.fail("Descending Order is not working properly");
        }
    }

    @And("^I Input Type of Fee \"([^\"]*)\"$")
    public void iInputTypeOfFee(String Fee_Type) throws Throwable {
        sleep(3000);
        Fees_and_fines.Type_of_fees_searchbar(driver).sendKeys(Fee_Type);
    }

    @And("^I Verify Type of Fee search Bar is working properly$")
    public void iVerifyTypeOfFeeSearchBarIsWorkingProperly() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fees(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Fee Code \"([^\"]*)\"$")
    public void iInputFeeCode(String Fee_Code) throws Throwable {
        sleep(3000);
        Fees_and_fines.Fee_code_searchbar(driver).sendKeys(Fee_Code);
    }

    @And("^I Verify Fee Code search Bar is working properly$")
    public void iVerifyFeeCodeSearchBarIsWorkingProperly() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.First_Type_of_fee_code(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Amount \"([^\"]*)\"$")
    public void iInputAmount(String Amount) throws Throwable {
        sleep(3000);
        Fees_and_fines.Amount_searchbar(driver).sendKeys(Amount);
    }

    @And("^I Verify Amount search Bar is working properly$")
    public void iVerifyAmountSearchBarIsWorkingProperly() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.Ten_thousand_amount(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Year \"([^\"]*)\"$")
    public void iInputYear(String Year) throws Throwable {
        sleep(3000);
        Fees_and_fines.Year_searchbar(driver).sendKeys(Year);
    }

    @And("^I Verify Year search Bar is working properly$")
    public void iVerifyYearSearchBarIsWorkingProperly() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.Ten_year(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }

    @And("^I Input Currency \"([^\"]*)\"$")
    public void iInputCurrency(String Currency) throws Throwable {
        sleep(3000);
        Fees_and_fines.Currency_searchbar(driver).sendKeys(Currency);
    }

    @And("^I Verify Currency search Bar is working properly$")
    public void iVerifyCurrencySearchBarIsWorkingProperly() throws InterruptedException {
        sleep(3000);
        try {
            Fees_and_fines.First_Type_of_currency(driver);
        } catch (Exception e) {
            System.out.println("Search Bar is not working properly");
            Assert.fail("Search Bar is not working properly");
        }
    }


    @Then("^I click on forget password$")
    public void iClickOnForgetPassword() throws InterruptedException {
        sleep(3000);
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
    public void iVerifyDisplayOfFarmersCardLink() {
        try {
            Front_Home_page.Farmer_card(driver);
        } catch (Exception e) {
            System.out.println("Farmers Card link did not appear");
            Assert.fail("Farmers Card link did not appear");
        }
    }


    @And("^I Verify Programmes link$")
    public void iVerifyProgrammesLink() {
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
        sleep(2000);
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
            System.out.println("Option is not valid");
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
        } else if (Status_Applicant.equals("Cooperative society")) {
            try {
                Farmers_cooperatives_association_society_company.Cooperative_society(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Association")) {
            try {
                Farmers_cooperatives_association_society_company.Association(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else {
            System.out.println("Radio Button is functioning properly");
        }
    }

    @And("^I Select Duration Year for Registration membership \"([^\"]*)\"$")
    public void iSelectDurationYearForRegistrationMembership(String Year_dur) throws Throwable {
        Farmers_cooperatives_association_society_company.Select_one(driver).click();
        sleep(1000);
        if (Year_dur.equals("1")) {
            try {
                Farmers_cooperatives_association_society_company.One_Year(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Year_dur.equals("2")) {
            try {
                Farmers_cooperatives_association_society_company.Two_Years(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else {
            System.out.println("Radio Button is functioning properly");
        }
        sleep(1000);
    }

    @And("^I Input List of Products manufactured \"([^\"]*)\"$")
    public void iInputListOfProductsManufactured(String Prod_man) throws Throwable {
        sleep(1000);
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Front_Home_page.Welcome_user(driver));
        sleep(1000);
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
        } else if (Status_business.equals("Existing")) {
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
        sleep(6000);
        WebDriverWait wait = new WebDriverWait(driver, 10); // 10 seconds timeout
        WebElement element = wait.until(ExpectedConditions.elementToBeClickable(Farmers_cooperatives_association_society_company.Save_and_continue(driver)));
        element.click();
        sleep(3000);
    }

    @And("^I Verify Upload Required Documents Page is displayed$")
    public void iVerifyUploadRequiredDocumentsPageIsDisplayed() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Farmers_cooperatives_association_society_company.Upload_required_documents(driver));
//        WebDriverWait w = new WebDriverWait(driver, 5);
//        w.until(ExpectedConditions.visibilityOf(Farmers_cooperatives_association_society_company.Upload_required_documents(driver)));
//        Thread.sleep(1000);
        WebDriverWait w = new WebDriverWait(driver, 30);
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
        String filePath = new File(Upload_test).getAbsolutePath();
        Documents_upload.Business_Registration_card_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
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
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.Certificate_of_incorporation_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[2]")));

    }

    @And("^I Upload List of Directors/ Associates \"([^\"]*)\"$")
    public void iUploadListOfDirectorsAssociates(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.List_of_directors_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[3]")));
    }

    @And("^I Upload Board Resolution of Enterprise for appointment of representative\\(s\\) \"([^\"]*)\"$")
    public void iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.Board_resolution_of_enterprise_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[4]")));
    }

    @And("^I Upload National Identity card of representative \"([^\"]*)\"$")
    public void iUploadNationalIdentityCardOfRepresentative(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.National_identity_card_Representative_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[5]")));
    }

    @And("^I Upload National Identity cards of all shareholders \"([^\"]*)\"$")
    public void iUploadNationalIdentityCardsOfAllShareholders(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.National_identity_card_Shareholders_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[6]")));
    }

    @And("^I Upload Location Plan \"([^\"]*)\"$")
    public void iUploadLocationPlan(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.Location_plan_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[7]")));
    }

    @And("^I Upload Copy of SMEDA Certificate \"([^\"]*)\"$")
    public void iUploadCopyOfSMEDACertificate(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.SMEDA_certificate_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[8]")));
    }

    @And("^I Upload Copy of Utility Bill \"([^\"]*)\"$")
    public void iUploadCopyOfUtilityBill(String Upload_test) throws Throwable {
        String filePath = new File(Upload_test).getAbsolutePath();

        Documents_upload.Utility_bill_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
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
        sleep(1000);
        if (Bank_Name.equals("ABC Banking")) {
            try {
                Terms_and_Condition.Select_one(driver).click();
                sleep(1500);
                Terms_and_Condition.ABC_Banking_Corporation(driver).click();
            } catch (Exception e) {
                System.out.println("Bank Selection is not working");
                Assert.fail("Bank Selection is not working");
            }
        } else {
            System.out.println("Bank Selection is functioning properly");
        }
        sleep(1000);
        takeScreenShot(scenario);
    }

    @And("^I Input Bank Branch \"([^\"]*)\"$")
    public void iInputBankBranch(String Bank_Branch) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Branch_label(driver));
        sleep(1000);
        Terms_and_Condition.Bank_Branch(driver).sendKeys(Bank_Branch);
    }

    @And("^I Input Personal Bank Account Number\"([^\"]*)\"$")
    public void iInputPersonalBankAccountNumber(String Bank_Account_No) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Personal_Bank_Account_Number_label(driver));
        sleep(1000);
        Terms_and_Condition.Bank_account_number(driver).sendKeys(Bank_Account_No);
    }


    @And("^I Click on Add Additional Document$")
    public void iClickOnAddAdditionalDocument() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Farmers_cooperatives_association_society_company.Save_and_continue(driver));
        sleep(1500);
        Documents_upload.Add_additional_documents(driver).click();
        sleep(1500);
    }

    @And("^I Input Additional Document Name \"([^\"]*)\"$")
    public void iInputAdditionalDocumentName(String Additional_Doc_Name) throws Throwable {
        Documents_upload.Document_details(driver).sendKeys(Additional_Doc_Name);
        Documents_upload.Save_additional_documents(driver).click();
        sleep(1500);
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
        String filePath = new File(Upload_test).getAbsolutePath();
        Documents_upload.Additional_document_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[10]")));

    }


    @And("^I Verify Success message for application submitted$")
    public void iVerifySuccessMessageForApplicationSubmitted() throws InterruptedException {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(text(),'My Application')]")));
        sleep(2000);
        try {
            My_application.Success_message_submit_application(driver);
        } catch (Exception e) {
            System.out.println("Success message did not appear");
        }
        sleep(8000);
    }

    @And("^I Click on Submit Application \"([^\"]*)\"$")
    public void iClickOnSubmitApplication(String Confirmation) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Farmers_cooperatives_association_society_company.Submit_application(driver));
        sleep(1000);
        Farmers_cooperatives_association_society_company.Submit_application(driver).click();
        sleep(2000);
        if (Confirmation.equals("Yes")) {
            Terms_and_Condition.Yes_submit_app(driver).click();
        } else if (Confirmation.equals("No")) {
            Terms_and_Condition.No_submit_app(driver).click();
        } else {
            System.out.println("Confirmation did not appear");
        }


    }

    @And("^I Click on Agro Processing Enterprise$")
    public void iClickOnAgroProcessingEnterprise() throws InterruptedException {
        Agro_Processing_Enterprise.Agro_processing_enterprise(driver).click();
        sleep(2000);
    }

    @And("^I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page$")
    public void iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage() {
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(.,'REGISTRATION FOR AGRO-PROCESSING ENTERPRISE')]")));

        try {
            Agro_Processing_Enterprise.Registration_for_agro_processing_enterprise(driver);
        } catch (Exception e) {
            System.out.println("REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page did not appear");
            Assert.fail("REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page page did not appear");
        }
    }

    @And("^I Input Enterprise Address \"([^\"]*)\"$")
    public void iInputEnterpriseAddress(String Enterprise_Address) throws Throwable {
        Agro_Processing_Enterprise.Enterprise_address(driver).sendKeys(Enterprise_Address);
    }


    @And("^I Input Business Registration No\\(BRN\\) for Agro-Processing Enterprise \"([^\"]*)\"$")
    public void iInputBusinessRegistrationNoBRNForAgroProcessingEnterprise(String BRN) throws Throwable {
        Agro_Processing_Enterprise.BRN(driver).sendKeys(BRN);
    }

    @And("^I Input Certificate of Incorporation No for Agro-Processing Enterprise \"([^\"]*)\"$")
    public void iInputCertificateOfIncorporationNoForAgroProcessingEnterprise(String Cert_No) throws Throwable {
        Agro_Processing_Enterprise.Certificate_of_incorporation(driver).sendKeys(Cert_No);
    }

    @And("^I Select Status of Applicant for Agro-Processing Enterprise \"([^\"]*)\"$")
    public void iSelectStatusOfApplicantForAgroProcessingEnterprise(String Status_Applicant) throws Throwable {
        if (Status_Applicant.equals("Sole Trader")) {
            try {
                Agro_Processing_Enterprise.Sole_trader(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Company")) {
            try {
                Agro_Processing_Enterprise.Company(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Société/Partnership")) {
            try {
                Agro_Processing_Enterprise.Societe_Partnership(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Cooperative society")) {
            try {
                Agro_Processing_Enterprise.Cooperative_society(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else if (Status_Applicant.equals("Association")) {
            try {
                Agro_Processing_Enterprise.Association(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button is not working");
                Assert.fail("Radio Button is not working");
            }
        } else {
            System.out.println("Radio Button is functioning properly");
        }
    }

    @And("^I Input Bank Branch for Agro-Processing Enterprise \"([^\"]*)\"$")
    public void iInputBankBranchForAgroProcessingEnterprise(String Bank_Branch) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Branch_label(driver));
        sleep(1000);
        Terms_and_Condition.Bank_Branch(driver).sendKeys(Bank_Branch);
    }

    @And("^I Input Personal Bank Account Number Agro-Processing Enterprise \"([^\"]*)\"$")
    public void iInputPersonalBankAccountNumberAgroProcessingEnterprise(String Bank_Account_No) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Terms_and_Condition.Personal_Bank_Account_Number_label(driver));
        sleep(1000);
        Terms_and_Condition.Bank_account_number(driver).sendKeys(Bank_Account_No);
    }

    @And("^I Verify Application Status \"([^\"]*)\"$")
    public void iVerifyApplicationStatus(String App_status) throws Throwable {
        if (App_status.equals("Submitted")) {
            try {
                Front_Home_page.Application_status_submitted(driver);
            } catch (Exception e) {
                System.out.println("Status did not appear");
            }
        } else if (App_status.equals("Draft")) {
            try {
                Front_Home_page.Application_status_draft(driver);
            } catch (Exception e) {
                System.out.println("Status did not appear");
            }
        } else if (App_status.equals("Under Query")) {
            try {
                Front_Home_page.Application_status_underquery(driver);
            } catch (Exception e) {
                System.out.println("Status did not appear");
            }
        } else {
            System.out.println("Status is not valid");
        }
    }

    @And("^I Verify Payment Status \"([^\"]*)\"$")
    public void iVerifyPaymentStatus(String Payment_Status) throws Throwable {
        if (Payment_Status.equals("Submitted")) {
            try {
                Front_Home_page.Application_status_submitted(driver);
            } catch (Exception e) {
                System.out.println("Status did not appear");
            }
        } else if (Payment_Status.equals("Draft")) {
            try {
                Front_Home_page.Application_status_draft(driver);
            } catch (Exception e) {
                System.out.println("Status did not appear");
            }
        } else if (Payment_Status.equals("Under Query")) {
            try {
                Front_Home_page.Application_status_underquery(driver);
            } catch (Exception e) {
                System.out.println("Status did not appear");
            }
        } else {
            System.out.println("Status is not valid");
        }
    }

    @Then("^I Sign Out as Front Registered User$")
    public void iSignOutAsFrontRegisteredUser() throws InterruptedException {
        Front_Home_page.Welcome_user(driver).click();
        sleep(2000);
        Front_Home_page.Sign_out(driver).click();
        sleep(2000);
//        WebDriverWait w = new WebDriverWait(driver, 10);
//        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(.,'Log Out')]\")));
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Front_Home_page.Yes_sign_out(driver)));
        Front_Home_page.Yes_sign_out(driver).click();
        sleep(2000);
        tearDown();
    }

    @And("^I Click on Shopping Cart for payment$")
    public void iClickOnShoppingCartForPayment() throws InterruptedException {
        Payment_process.Payment_shopping_cart(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(.,'Payment Process')]")));
//        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Front_Home_page.Welcome_user(driver));
        sleep(2000);
    }

    @And("^I Copy Application Number$")
    public void iCopyApplicationNumber() {
        Front_Home_page.Search_reference_number(driver);
        Application_reference_number = Front_Home_page.Search_reference_number(driver).getText();
        System.out.println("Text from source element: " + Application_reference_number);

    }

    @And("^Select Application for payment$")
    public void selectApplicationForPayment() throws InterruptedException {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Payment_process.Search_reference_number(driver)));
        Payment_process.Search_reference_number(driver).sendKeys(Application_reference_number);
        sleep(2000);
        Payment_process.Select_last_application(driver).click();

    }

    @And("^I Click on Proceed to Payment$")
    public void iClickOnProceedToPayment() {
        Payment_process.Proceed_to_payment(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 5);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[contains(.,'Voucher Number')])[1]")));
    }

    @And("^I Click on Payment Icon$")
    public void iClickOnPaymentIcon() {
        Payment_process.Pay(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 5);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//label[contains(.,'Payment Method')]")));
    }

    @And("^I Select Payment Method \"([^\"]*)\"$")
    public void iSelectPaymentMethod(String Payment_method) throws Throwable {
        Payment_process.Select_payment(driver).click();
        sleep(2000);
        if (Payment_method.equals("Credit")) {
            try {
                Payment_process.Credit_card(driver).click();
            } catch (Exception e) {
                System.out.println("Credit Card did not appear");
            }
        } else if (Payment_method.equals("Debit")) {
            try {
                Payment_process.Debit_card(driver).click();
            } catch (Exception e) {
                System.out.println("Debit Card did not appear");
            }
        } else if (Payment_method.equals("Counter")) {
            try {
                Payment_process.Counter(driver).click();
            } catch (Exception e) {
                System.out.println("Counter did not appear");
            }
        } else {
            System.out.println("Payment Method is not valid");
        }
        sleep(3000);
    }


    @And("^I Click on Final Proceed to Payment$")
    public void iClickOnFinalProceedToPayment() throws InterruptedException {
        WebDriverWait ww = new WebDriverWait(driver, 5);
        ww.until(ExpectedConditions.visibilityOf(Payment_process.Proceed_to_payment(driver)));
        Payment_process.Proceed_to_payment(driver).click();
        sleep(2000);
    }

    @And("^I Verify Message to proceed to Post Office for Payment$")
    public void iVerifyMessageToProceedToPostOfficeForPayment() throws InterruptedException {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(text(),'My Application')]")));
        try {
            Payment_process.Proceed_to_post_office_payment(driver);
        } catch (Exception e) {
            System.out.println("Message did not appear");
            Assert.fail("Message did not appear");
        }
        sleep(8000);

    }

    @And("^I Click on Small Planters Icon$")
    public void iClickOnSmallPlantersIcon() throws InterruptedException {
        Small_planters.Small_planters(driver).click();
        sleep(2000);
    }

    @And("^I Verify display of REGISTRATION FOR SMALL PLANTERS Page$")
    public void iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage() {
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(.,'REGISTRATION FOR SMALL PLANTERS')]")));

        try {
            Small_planters.Small_planters_page_title(driver);
        } catch (Exception e) {
            System.out.println("REGISTRATION FOR SMALL PLANTERS Page did not appear");
            Assert.fail("REGISTRATION FOR SMALL PLANTERS Page Page page did not appear");
        }
    }


    @And("^I Select Applicant Title \"([^\"]*)\"$")
    public void iSelectApplicantTitle(String Applicant_Title) throws Throwable {
        sleep(1500);
        if (Applicant_Title.equals("Mr")){
            try {
                Small_planters.Title_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Could not Select One");
                Assert.fail("Could not Select One");
            }
            sleep(1000);
            Small_planters.Title_Mr(driver).click();
            System.out.println("Mr is working");


        }else if (Applicant_Title.equals("Mrs")){
            try {
                Small_planters.Title_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Could not Select One");
                Assert.fail("Could not Select One");
            }
            sleep(1000);
            Small_planters.Title_Mrs(driver).click();
            System.out.println("Mrs is working");

        }else if (Applicant_Title.equals("Miss")){
            try {
                Small_planters.Title_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Could not Select One");
                Assert.fail("Could not Select One");
            }
            sleep(1000);
            Small_planters.Title_Miss(driver).click();
            System.out.println("Miss is working");

        }
        else {
            System.out.println("Option is Not Valid");
        }
    }

    @And("^I Select Applicant District \"([^\"]*)\"$")
    public void iSelectApplicantDistrict(String District) throws Throwable {
        if (District.equals("Black River")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Black_river(driver).click();

        }else if (District.equals("Flacq")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Flacq(driver).click();

        }else if (District.equals("Grand Port")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Grand_port(driver).click();

        }else if (District.equals("Moka")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Moka(driver).click();

        }else if (District.equals("Pamplemousses")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Pamplemousses(driver).click();

        }else if (District.equals("Port Louis")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Port_louis(driver).click();

        }else if (District.equals("Plaine Wilhems")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Plaine_wilhems(driver).click();

        }else if (District.equals("Riviere Du Rempart")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Riviere_du_rempart(driver).click();

        }else if (District.equals("Savannes")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Savannes(driver).click();

        }else if (District.equals("Rodrigues")){
            System.out.println("District Select is working");
            Small_planters.District_Select_one(driver).click();
            sleep(1000);
            Small_planters.Rodrigues(driver).click();

        }
        else {
            System.out.println("Option is Not Valid");
            Assert.fail("Option is Not Valid");
        }
    }

    @And("^I Select Applicant Level of Education \"([^\"]*)\"$")
    public void iSelectApplicantLevelOfEducation(String Education_Level) throws Throwable {
        sleep(1500);
        if (Education_Level.equals("Primary")){
            Small_planters.Education_Select_one(driver).click();
            sleep(2000);
            Small_planters.Education_primary(driver).click();
            System.out.println("Education Level is working");

        }else if (Education_Level.equals("Secondary")){
            Small_planters.Education_Select_one(driver).click();
            sleep(2000);
            Small_planters.Education_secondary(driver).click();
            System.out.println("Education Level is working");


        }else if (Education_Level.equals("Tertiary")){
            Small_planters.Education_Select_one(driver).click();
            sleep(2000);
            Small_planters.Education_tertiary(driver).click();
            System.out.println("Education Level is working");

        }else {
            System.out.println("Option is Not Valid");
            Assert.fail("Option is Not Valid");
        }
    }

    @And("^I Select Agricultural Activity \"([^\"]*)\"$")
    public void iSelectAgriculturalActivity(String Act) throws Throwable {
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
            System.out.println("Option is not valid");
        }
    }

    @And("^I Input Other Occupation \"([^\"]*)\"$")
    public void iInputOtherOccupation(String Other_Occupation) throws Throwable {
        Small_planters.Other_occupation(driver).sendKeys(Other_Occupation);
    }

    @And("^I Upload Photograph \"([^\"]*)\"$")
    public void iUploadPhotograph(String Photo) throws Throwable {
        String filePath = new File(Photo).getAbsolutePath();
        Documents_upload.Photo_upload(driver).sendKeys(filePath);
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(text(),'Upload')]")));
        Documents_upload.Upload_button(driver).click();
        WebDriverWait ww = new WebDriverWait(driver, 10);
        WebElement element2 = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download']")));
    }

    @And("^I Select Marital Status \"([^\"]*)\"$")
    public void iSelectMaritalStatus(String Marital_Status) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Small_planters.Single(driver));
        sleep(1500);
        if (Marital_Status.equals("Sinlge")) {
            try {
                Small_planters.Single(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button for Marital_Status is not working");
                Assert.fail("Radio Button for Marital_Status is not working");
            }
        } else if (Marital_Status.equals("Married")) {
            try {
                Small_planters.Married(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button for Married is not working");
                Assert.fail("Radio Button for Married is not working");
            }
        } else if (Marital_Status.equals("Divorced")) {
            try {
                Small_planters.Divorced(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button for Divorced is not working");
                Assert.fail("Radio Button for Divorced is not working");
            }
        } else if (Marital_Status.equals("Widow")) {
            try {
                Small_planters.Widow(driver).click();
            } catch (Exception e) {
                System.out.println("Radio Button for Widow is not working");
                Assert.fail("Radio Button for Widow is not working");
            }
        }else {
            System.out.println("Option is not valid");
        }
    }

    @And("^I Verify for Photo upload success message$")
    public void iVerifyForPhotoUploadSuccessMessage() throws InterruptedException {
        sleep(1000);
        try {
            Documents_upload.Photo_upload_success_message(driver);
        } catch (Exception e) {
            System.out.println("Photo Upload Success Message did not appear");
            Assert.fail("Photo Upload Success Message did not appear");
        }
    }


    @And("^I Select No of years for Registration membership \"([^\"]*)\"$")
    public void iSelectNoOfYearsForRegistrationMembership(String Year_dur) throws Throwable {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Small_planters.Single(driver));
        sleep(1500);
        Farmers_cooperatives_association_society_company.Select_one(driver).click();
        sleep(2000);
        if (Year_dur.equals("1")) {
            Farmers_cooperatives_association_society_company.One_Year(driver).click();
            System.out.println("Radio Button is working correctly");
        } else if (Year_dur.equals("2")) {
            Farmers_cooperatives_association_society_company.Two_Years(driver).click();
            System.out.println("Radio Button is working correctly");
        } else {
            System.out.println("Radio Button is not functioning properly");
        }
        sleep(2000);
    }

    @And("^I Verify Display of Particulars of Family Beneficiaries Page$")
    public void iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage() {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h6[contains(.,'Particulars of Family and Beneficiaries')]")));
        try {
            Small_planters.Particulars_family_ben_page(driver);
        } catch (Exception e) {
            System.out.println("Particulars of Family Beneficiaries Page did not appear");
            Assert.fail("Particulars of Family Beneficiaries Page did not appear");
        }
    }

    @And("^I Click on Add Family and Beneficiaries$")
    public void iClickOnAddFamilyAndBeneficiaries() throws InterruptedException {
        sleep(1500);
        try {
            Small_planters.Add_family_and_beneficiaries(driver);
        } catch (Exception e){
            Assert.fail("Add Family and Beneficiaries is not clicakble");
        }
        sleep(1500);
        Small_planters.Add_family_and_beneficiaries(driver).click();

    }

    @And("^Verify Display of Particulars of Family Beneficiaries input table$")
    public void verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable() throws InterruptedException {
        sleep(3000);
//        driver.switchTo().frame("//div[contains(@id, 'dlgfamily')]");  // Switch to the frame with the specified name or ID

        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Small_planters.Particulars_family_ben_tab(driver)));
        try {
            Small_planters.Particulars_family_ben_tab(driver);
        } catch (Exception e) {
            System.out.println("Particulars of Family Beneficiaries Tab did not appear");
            Assert.fail("Particulars of Family Beneficiaries Tab did not appear");
        }
    }

    @And("^I Select Family relationship \"([^\"]*)\"$")
    public void iSelectFamilyRelationship(String Relationship) throws Throwable {
        sleep(1500);
        if (Relationship.equals("Spouse")){
            try {
                Small_planters.Family_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Family - Could not Select One");
                Assert.fail("Family - Could not Select One");
            }
            sleep(1000);
            Small_planters.Family_spouse(driver).click();
            System.out.println("Spouse option is working");


        }else if (Relationship.equals("Child 1")){
            try {
                Small_planters.Family_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Family - Could not Select One");
                Assert.fail("Family - Could not Select One");
            }
            sleep(1000);
            Small_planters.Family_child_one(driver).click();
            System.out.println("Child 1 is working");

        }else if (Relationship.equals("Child 2")){
            try {
                Small_planters.Family_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Family - Could not Select One");
                Assert.fail("Family - Could not Select One");
            }
            sleep(1000);
            Small_planters.Family_child_two(driver).click();
            System.out.println("Child 2 is working");

        }else if (Relationship.equals("Child 3")){
            try {
                Small_planters.Family_Select_one(driver).click();
            } catch (Exception e) {
                System.out.println("Family - Could not Select One");
                Assert.fail("Family - Could not Select One");
            }
            sleep(1000);
            Small_planters.Family_child_three(driver).click();
            System.out.println("Child 3 is working");

        }
        else {
            System.out.println("Family Option is Not Valid");
        }
    }

    @And("^I Input Family Surname \"([^\"]*)\"$")
    public void iInputFamilySurname(String Family_Surname) throws Throwable {
        Small_planters.Family_surname(driver).sendKeys(Family_Surname);
    }

    @And("^I Input Family Other Names \"([^\"]*)\"$")
    public void iInputFamilyOtherNames(String Family_Other_Names) throws Throwable {
        Small_planters.Family_other_names(driver).sendKeys(Family_Other_Names);
    }

    @And("^I Select Family Gender \"([^\"]*)\"$")
    public void iSelectFamilyGender(String Gender) throws Throwable {
        Small_planters.Family_gender_select_one(driver).click();
        sleep(1500);
        if (Gender.equals("Male")){
            Small_planters.Family_gender_male(driver).click();
            System.out.println("Gender Male is working fine");
        }else if(Gender.equals("Female")){
            Small_planters.Family_gender_female(driver).click();
            System.out.println("Gender Female is working fine");
        }else{
            System.out.println("Gender option is not valid");
            Assert.fail("Gender option is not valid");
        }
    }

    @And("^I Input Family Date of Birth \"([^\"]*)\"$")
    public void iInputFamilyDateOfBirth(String DOB) throws Throwable {
        if (DOB.equals("1Jan94")){
            Small_planters.Family_date_of_birth(driver).click();
            sleep(1500);
            driver.findElement(By.xpath("(//select[@data-event='change'])[2]")).sendKeys("1994");
            sleep(1500);
            driver.findElement(By.xpath("(//select[@data-event='change'])[1]")).sendKeys("Jan");
            sleep(1500);
            driver.findElement(By.xpath("(//a[@href='#'])[47]")).click();
            sleep(1000);
        }else{
            Assert.fail("Cannot select date");
        }

    }

    @And("^I Input Family Occupation \"([^\"]*)\"$")
    public void iInputFamilyOccupation(String Occupation) throws Throwable {
        Small_planters.Family_occupation(driver).sendKeys(Occupation);
    }

    @And("^I Click on Beneficiary of life Insurance Scheme$")
    public void iClickOnBeneficiaryOfLifeInsuranceScheme() {
        Small_planters.Life_insurance_scheme(driver).click();
    }

    @And("^I Click on Beneficiary of Accident Insurance Scheme$")
    public void iClickOnBeneficiaryOfAccidentInsuranceScheme() {
        Small_planters.Accident_insurance_scheme(driver).click();
    }

    @And("^I Save Particulars of Family and Beneficiaries$")
    public void iSaveParticularsOfFamilyAndBeneficiaries() throws InterruptedException {
        Small_planters.Save_family_ben(driver).click();
    }

    @And("^I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page$")
    public void iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage() {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h6[contains(.,'Particulars of Crop: Sugarcane and Tea Plantation')]")));
        try {
            Small_planters.Particulars_of_crop_page(driver);
        } catch (Exception e) {
            System.out.println("Particulars of Crop: Sugarcane and Tea Plantation Page did not appear");
            Assert.fail("Particulars of Crop: Sugarcane and Tea Plantation Page did not appear");
        }
    }

    @And("^I Click on Add Crop$")
    public void iClickOnAddCrop() throws InterruptedException {
        sleep(1500);
        try {
            Small_planters.Add_crop(driver);
        } catch (Exception e){
            Assert.fail("Add Crop is not clicakble");
        }
        sleep(1500);
        Small_planters.Add_crop(driver).click();
    }

    @And("^I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table$")
    public void iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationTable() throws InterruptedException {
        sleep(3000);
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Small_planters.Particulars_of_crop_tab(driver)));
        try {
            Small_planters.Particulars_of_crop_tab(driver);
        } catch (Exception e) {
            System.out.println("Particulars of Crop Tab did not appear");
            Assert.fail("Particulars of Crop Tab did not appear");
        }
    }

    @And("^I Input Organisation Account Number \"([^\"]*)\"$")
    public void iInputOrganisationAccountNumber(String Org_acc_no) throws Throwable {
        Small_planters.Organisation_acc_no(driver).sendKeys(Org_acc_no);
    }

    @And("^I Select Crop Type \"([^\"]*)\"$")
    public void iSelectCropType(String Crop_Type) throws Throwable {
        Small_planters.Select_one_crop_type(driver).click();
        sleep(1500);
        if (Crop_Type.equals("Cane")){
            Small_planters.Cane_crop_type(driver).click();
            System.out.println("Cane is working fine");
        }else if(Crop_Type.equals("Tea")){
            Small_planters.Tea_crop_type(driver).click();
            System.out.println("Tea is working fine");
        }else{
            System.out.println("Crop Type option is not valid");
            Assert.fail("Crop Type option is not valid");
        }
    }

    @And("^I Input Total Extent of plot \\(In Arpent\\) \"([^\"]*)\"$")
    public void iInputTotalExtentOfPlotInArpent(String Land_Extent) throws Throwable {
        Small_planters.Total_Arpent(driver).sendKeys(Land_Extent);
    }

    @And("^I Select Owner Type \"([^\"]*)\"$")
    public void iSelectOwnerType(String Owner_Type) throws Throwable {
        Small_planters.Select_one_owner_type(driver).click();
        sleep(1500);
        if (Owner_Type.equals("Owner")){
            Small_planters.Owner_owner_type(driver).click();
            System.out.println("Owner is working fine");
        }else if(Owner_Type.equals("Tenant")){
            Small_planters.Tenant_owner_type(driver).click();
            System.out.println("Tenant is working fine");
        }else{
            System.out.println("Owner Type option is not valid");
            Assert.fail("Owner Type option is not valid");
        }
    }

    @And("^I Input Plot Location \"([^\"]*)\"$")
    public void iInputPlotLocation(String Plot_Location) throws Throwable {
        Small_planters.Plot_location(driver).sendKeys(Plot_Location);
    }

    @And("^I Save Particulars of Crop$")
    public void iSaveParticularsOfCrop() throws InterruptedException {
        Small_planters.Save_Particulars_of_crop(driver).click();
        sleep(1000);
    }

    @And("^I Verify Display of Particulars for Horticultural Plantations Page$")
    public void iVerifyDisplayOfParticularsForHorticulturalPlantationsPage() throws InterruptedException {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//h6[contains(.,'Particulars for Horticultural Plantations')])[1]")));
        try {
            Small_planters.Particulars_horticultural_plantations_page(driver);
        } catch (Exception e) {
            System.out.println("Particulars for Horticultural Plantations Page Page did not appear");
            Assert.fail("Particulars for Horticultural Plantations Page Page did not appear");
        }
    }

    @And("^I Click on Add Horticultural$")
    public void iClickOnAddHorticultural() throws InterruptedException {
        sleep(1500);
        try {
            Small_planters.Add_horticultural(driver);
        } catch (Exception e){
            Assert.fail("Add Horticultural is not clicakble");
        }
        sleep(1500);
        Small_planters.Add_horticultural(driver).click();
    }

    @And("^Verify Display of Particulars for Horticultural Plantations Table$")
    public void verifyDisplayOfParticularsForHorticulturalPlantationsTable() throws InterruptedException {
        sleep(3000);
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Small_planters.Particulars_of_horticultural_tab(driver)));
        try {
            Small_planters.Particulars_of_horticultural_tab(driver);
        } catch (Exception e) {
            System.out.println("Particulars for Horticultural Plantations Tab did not appear");
            Assert.fail("Particulars for Horticultural Plantations Tab did not appear");
        }
    }

    @And("^I Select Owner Type for Horticultural Plantation \"([^\"]*)\"$")
    public void iSelectOwnerTypeForHorticulturalPlantation(String Owner_Type) throws Throwable {
        Small_planters.Select_one_owner_type_horticultural(driver).click();
        sleep(1500);
        if (Owner_Type.equals("Owner")){
            Small_planters.Owner_owner_type_horticultural(driver).click();
            System.out.println("Owner is working fine");
        }else if(Owner_Type.equals("Tenant")){
            Small_planters.Tenant_owner_type_horticultural(driver).click();
            System.out.println("Tenant is working fine");
        }else{
            System.out.println("Owner Type for Horticultural Plantation option is not valid");
            Assert.fail("Owner Type for Horticultural Plantation option is not valid");
        }
    }

    @And("^I Input Field Location \"([^\"]*)\"$")
    public void iInputFieldLocation(String Field_Location) throws Throwable {
        Small_planters.Field_location(driver).sendKeys(Field_Location);
    }

    @And("^I Select Production System \"([^\"]*)\"$")
    public void iSelectProductionSystem(String Production_System) throws Throwable {
        Small_planters.Select_one_production_system(driver).click();
        sleep(1500);
        if (Production_System.equals("Open Field")){
            Small_planters.Open_field(driver).click();
            System.out.println("Open Field is working fine");
        }else if(Production_System.equals("Sheltered Farming")){
            Small_planters.Sheltered_farming(driver).click();
            System.out.println("Sheltered Farming is working fine");
        }else if(Production_System.equals("Aquaponics")){
            Small_planters.Aquaponics(driver).click();
            System.out.println("Aquaponics is working fine");
        }else{
            System.out.println("Production System option is not valid");
            Assert.fail("Production System option is not valid");
        }
    }

    @And("^I Input Total Extent of plot - Size \"([^\"]*)\"$")
    public void iInputTotalExtentOfPlotSize(String Total_Extent) throws Throwable {
        Small_planters.Total_extent_plot(driver).sendKeys(Total_Extent);
    }

    @And("^I Input Crop grown at time of Registration/ Crop to be grown \"([^\"]*)\"$")
    public void iInputCropGrownAtTimeOfRegistrationCropToBeGrown(String Crop_Grown) throws Throwable {
        Small_planters.Crop_grown(driver).sendKeys(Crop_Grown);
    }


    @And("^I Select Plantation Type \"([^\"]*)\"$")
    public void iSelectPlantationType(String Plantation_Type) throws Throwable {
        Small_planters.Select_one_plantation_type(driver).click();
        sleep(1500);
        if (Plantation_Type.equals("Interline")){
            Small_planters.Interline_plantation_type(driver).click();
            System.out.println("Owner is working fine");
        }else if(Plantation_Type.equals("Full Stand")){
            Small_planters.Full_stand_plantation_type(driver).click();
            System.out.println("Tenant is working fine");
        }else{
            System.out.println("Plantation Type option is not valid");
            Assert.fail("Plantation Type option is not valid");
        }
    }

    @And("^I Input Expected Date of Planting/Seedling \"([^\"]*)\"$")
    public void iInputExpectedDateOfPlantingSeedling(String Date_Plantation_Seedling) throws Throwable {
        if (Date_Plantation_Seedling.equals("1Aug2030")){
            Small_planters.Input_date_planting_seedling(driver).click();
            sleep(1500);
            Small_planters.Input_year_planting_seedling(driver).sendKeys("2030");
            sleep(1500);
            Small_planters.Input_month_planting_seedling(driver).sendKeys("Aug");
            sleep(1500);
            Small_planters.Input_day_planting_seedling(driver).click();
            sleep(1000);
        }else{
            Assert.fail("Cannot select date");
        }
    }

    @And("^I Save Particulars for Horticultural Plantations$")
    public void iSaveParticularsForHorticulturalPlantations() throws InterruptedException {
        Small_planters.Save_Particulars_of_horticultural_plantations(driver).click();
        sleep(1000);
    }

    @And("^I Upload documents for Horticultural Plantations \"([^\"]*)\"$")
    public void iUploadDocumentsForHorticulturalPlantations(String Upload_test) throws Throwable {
        Documents_upload.Button_upload_horticultural_plantation(driver).click();
        sleep(3000);
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Small_planters.Horticultural_plantation_documents_tab(driver)));
        String filePath = new File(Upload_test).getAbsolutePath();
        Documents_upload.Document_upload_horticultural_plantation(driver).sendKeys(filePath);
        WebDriverWait ww = new WebDriverWait(driver, 30);
        WebElement element1 = ww.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download']")));

    }

    @And("^I Close Horticultural Plantation Documents tab$")
    public void iCloseHorticulturalPlantationDocumentsTab() throws InterruptedException {
        Documents_upload.Close_hoticultural_document_tab(driver).click();
        sleep(1500);
    }

    @And("^I Input Crop Status and Organisation \"([^\"]*)\"$")
    public void iInputCropStatusAndOrganisation(String Crop_Status) throws Throwable {
        WebDriverWait w = new WebDriverWait(driver, 5);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(.,'Particulars for Horticultural Plantations declared under FPS')]")));
        Small_planters.Crop_status(driver).sendKeys(Crop_Status);
    }

    @And("^I Save Particulars for Horticultural Plantations declared under FPS$")
    public void iSaveParticularsForHorticulturalPlantationsDeclaredUnderFPS() {
        Small_planters.Save_Horticultural_plantations_under_FPS(driver).click();
    }

    @And("^I Click on Edit button for Particulars for Horticultural Plantations declared under FPS$")
    public void iClickOnEditButtonForParticularsForHorticulturalPlantationsDeclaredUnderFPS() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Small_planters.Particulars_for_Horticultural_Plantations_declared_under_FPS(driver));
        sleep(8000);
        Small_planters.Edit_Horticultural_plantations_under_FPS(driver).click();
    }

    @And("^I Verify Particulars for Horticultural Plantations declared under FPS Table$")
    public void iVerifyParticularsForHorticulturalPlantationsDeclaredUnderFPSTable() throws InterruptedException {
        sleep(1500);
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Small_planters.Particulars_for_Horticultural_Plantations_declared_under_FPS_table(driver)));

    }

    @And("^I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS$")
    public void iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(false);", Small_planters.Membership_into_sfwf(driver));

        WebDriverWait w = new WebDriverWait(driver, 20);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h6[contains(.,'Membership into Small Farmers Welfare Fund (SFWF)')]")));
        try {
            Small_planters.Membership_into_sfwf(driver);
        } catch (Exception e) {
            System.out.println("Declaration Page for REGISTRATION FOR SMALL PLANTERS did not appear");
            Assert.fail("Declaration Page for REGISTRATION FOR SMALL PLANTERS did not appear");
        }
    }

    @And("^I Click on Photo checkbox$")
    public void iClickOnPhotoCheckbox() {
        Small_planters.Photo_checkbox(driver).click();
    }

    @And("^I Click on Cancel button not to proceed with another registration$")
    public void iClickOnCancelButtonNotToProceedWithAnotherRegistration() throws InterruptedException {
        sleep(2000);
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Terms_and_Condition.Cancel_no_other_registration(driver)));
        Terms_and_Condition.Cancel_no_other_registration(driver).click();
        WebDriverWait ww = new WebDriverWait(driver, 10);
        WebElement element = ww.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(text(),'My Application')]")));

    }

    @And("^I Verify Success message for application submitted for Small Planters Registration$")
    public void iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration() throws InterruptedException {
        sleep(2000);
        try {
            My_application.Success_message_submit_application(driver);
        } catch (Exception e) {
            System.out.println("Success message did not appear");
        }
        sleep(8000);
    }

    @And("^I Verify display of Payment Gateway$")
    public void iVerifyDisplayOfPaymentGateway() {
//        WebDriverWait ww = new WebDriverWait(driver, 30);
//        ww.until(ExpectedConditions.visibilityOf(Payment_process.Payment_gateway_display(driver)));
        WebDriverWait w = new WebDriverWait(driver, 180);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(.,'Card number')]")));
        try {
            Payment_process.Payment_gateway_display(driver);
        } catch (Exception e) {
            System.out.println("Display of Payment Gateway failed");
            Assert.fail("Display of Payment Gateway failed");
        }
    }

    @And("^I Input Card Details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void iInputCardDetails(String Card_Number, String Expiry_Month, String Expiry_Year, String Cardholder_Name, String Security_Code) throws Throwable {
        Payment_process.Card_number(driver).sendKeys(Card_Number);
        Payment_process.Expiry_month(driver).sendKeys(Expiry_Month);
        Payment_process.Expiry_year(driver).sendKeys(Expiry_Year);
        Payment_process.Security_code(driver).sendKeys(Security_Code);
        Payment_process.Cardholder_name(driver).sendKeys(Cardholder_Name);

    }

    @And("^I Click on Pay Now button$")
    public void iClickOnPayNowButton() throws InterruptedException {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Payment_process.Pay_now(driver));
        sleep(1000);
        Payment_process.Pay_now(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 180);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(.,'My Application')]")));

    }

    @And("^I Verify Payment Status is changed to Paid$")
    public void iVerifyPaymentStatusIsChangedToPaid() {
        try {
            Payment_process.Payment_status_paid_last_application_ref(driver);
        } catch (Exception e) {
            System.out.println("Payment status not changed to Paid");
            Assert.fail("Payment status not changed to Paid");
        }
    }

    @And("^I Click on Final Proceed to Online Payment$")
    public void iClickOnFinalProceedToOnlinePayment() throws InterruptedException {
        WebDriverWait ww = new WebDriverWait(driver, 5);
        ww.until(ExpectedConditions.visibilityOf(Payment_process.Proceed_to_payment(driver)));
        Payment_process.Proceed_to_payment(driver).click();
        sleep(30000);
    }

    @And("^I Input Finance Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputFinanceUsernameAndPassword(String FUsername, String Password) throws Throwable {
        Home_page.Username(driver).sendKeys(FUsername);
        Home_page.Password(driver).sendKeys(Password);
    }

    @And("^I Click on Manage Cashier$")
    public void iClickOnManageCashier() {
        Back_office_main_page.Manage_cashier(driver).click();
    }

    @And("^I Verify List of Applications page$")
    public void iVerifyListOfApplicationsPage() throws InterruptedException {
        sleep(1500);
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h6[contains(.,'List of Applications')]")));
        try {
            Back_office_main_page.List_of_applications(driver);
        } catch (Exception e) {
            System.out.println("List of Applications page did not appear");
            Assert.fail("List of Applications page did not appear");
        }
    }

    @And("^I Click on Confirm Processing Fees$")
    public void iClickOnConfirmProcessingFees() throws InterruptedException {
        Back_office_main_page.Confirm_processing_fees(driver).click();
        sleep(1500);
    }

    @And("^I Verify display of Processing Details Frame$")
    public void iVerifyDisplayOfProcessingDetailsFrame() {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Back_office_main_page.Processing_details_frame(driver)));
        try {
            Back_office_main_page.Processing_details_frame(driver);
        } catch (Exception e) {
            System.out.println("Processing Details Frame did not appear");
            Assert.fail("Processing Details Frame did not appear");
        }
    }

    @And("^I Select Payment Mode \"([^\"]*)\"$")
    public void iSelectPaymentMode(String Payment_Mode) throws Throwable {
        Back_office_main_page.Payment_mode_select_one(driver).click();
        sleep(2000);
        if (Payment_Mode.equals("Cash")) {
            try {
                Back_office_main_page.Payment_mode_cash(driver).click();
            } catch (Exception e) {
                System.out.println("Cash Payment did not appear");
                Assert.fail("Cash Payment did not appear");
            }
        } else if (Payment_Mode.equals("Internet Banking")) {
            try {
                Back_office_main_page.Payment_mode_Internet_banking(driver).click();
            } catch (Exception e) {
                System.out.println("Internet Banking did not appear");
                Assert.fail("Internet Banking did not appear");
            }
        } else {
            System.out.println("Payment Method is not valid");
            Assert.fail("Payment Method is not valid");
        }
        sleep(3000);
    }

    @And("^I Input Amount of payment \"([^\"]*)\"$")
    public void iInputAmountOfPayment(String Amount_To_Pay) throws Throwable {
        Back_office_main_page.Amount(driver).sendKeys(Amount_To_Pay);
    }

    @And("^I Click on Add Payment$")
    public void iClickOnAddPayment() throws InterruptedException {
        Back_office_main_page.Add_payment(driver).click();
    }


    @And("^I Click on Save Payment$")
    public void iClickOnSavePayment() throws InterruptedException {
        sleep(1500);
//        WebDriverWait w = new WebDriverWait(driver, 5);
//        w.until(ExpectedConditions.visibilityOf(Back_office_main_page.Save_payment(driver)));
        Back_office_main_page.Save_payment(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 180);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//span[contains(.,'Payment confirmed')])[2]")));
    }

    @And("^I Verify success message for adding payment$")
    public void iVerifySuccessMessageForAddingPayment() throws InterruptedException {
        WebDriverWait w = new WebDriverWait(driver, 5);
        w.until(ExpectedConditions.visibilityOf(Back_office_main_page.Success_message_payment_confirmed(driver)));
        try {
            Back_office_main_page.Success_message_payment_confirmed(driver);
        } catch (Exception e) {
            System.out.println("Success message for adding payment did not appear");
            Assert.fail("Success message for adding payment did not appear");
        }
    }

    @And("^I Input WPO Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputWPOUsernameAndPassword(String PwoUsername, String Password) throws Throwable {
        Home_page.Username(driver).sendKeys(PwoUsername);
        Home_page.Password(driver).sendKeys(Password);
    }

    @And("^I Click on All Applications$")
    public void iClickOnAllApplications() {
        Back_office_main_page.All_applications_click(driver).click();
    }

    @And("^I Verify display of list of registrations page$")
    public void iVerifyDisplayOfListOfRegistrationsPage() throws InterruptedException {
        Thread.sleep(1500);
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h5[contains(.,'List of Registrations')]")));
        try {
            Back_office_main_page.List_of_registrations_page(driver);
        } catch (Exception e) {
            System.out.println("List oof registrations page did not appear");
            Assert.fail("List of registrations page did not appear");
        }
    }

    @And("^I Search for Application Ref Number$")
    public void iSearchForApplicationRefNumber() throws InterruptedException {
        Back_office_main_page.Search_bar_app_num(driver).sendKeys(Application_reference_number);
        Thread.sleep(2000);
        Payment_process.Select_last_application(driver).click();
        Thread.sleep(1500);

    }

    @And("^I Click to view Application$")
    public void iClickToViewApplication() {
        Back_office_main_page.View_last_application(driver).click();
        WebDriverWait w = new WebDriverWait(driver, 30);
        WebElement element = w.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(.,'Action')]")));
    }
}