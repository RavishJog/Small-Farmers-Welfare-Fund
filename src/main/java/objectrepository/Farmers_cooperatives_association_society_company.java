package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Farmers_cooperatives_association_society_company {

    private static WebElement element = null;

    //Object for Button for Farmer's Cooperatives Association, Society or Company
    private static By btn_Farmers_coo_ass_soc_com = By.xpath("//p[contains(.,'Cooperatives Association')]");

    public static WebElement Farmers_coo_ass_soc_com(WebDriver driver) {
        element = driver.findElement(btn_Farmers_coo_ass_soc_com);
        return element;
    }

    //Object for Label of REGISTRATION FOR FARMERS' COOPERATIVE ASSOCIATION, SOCIETY AND COMPANY
    private static By lbl_Registration_for_farmers = By.xpath("//h5[contains(.,'REGISTRATION FOR FARMERS')]");

    public static WebElement Registration_for_farmers(WebDriver driver) {
        element = driver.findElement(lbl_Registration_for_farmers);
        return element;
    }

    //Object for Associate/Society/Company Name
    private static By txt_Associate_society_company_name = By.xpath("//input[@placeholder='Associate/Society/Company Name']");

    public static WebElement Associate_society_company_name(WebDriver driver) {
        element = driver.findElement(txt_Associate_society_company_name);
        return element;
    }

    //Object for Represented by
    private static By txt_Represented_by = By.xpath("//input[@placeholder='Represented by']");

    public static WebElement Represented_by(WebDriver driver) {
        element = driver.findElement(txt_Represented_by);
        return element;
    }

    //Object for BRN
    private static By txt_BRN = By.xpath("//input[@placeholder='Business Registration No.(BRN)']");

    public static WebElement BRN(WebDriver driver) {
        element = driver.findElement(txt_BRN);
        return element;
    }

    //Object for Certificate of Incorporation No
    private static By txt_Certificate_of_incorporation = By.xpath("//input[@placeholder='Certificate of Incorporation No.']");

    public static WebElement Certificate_of_incorporation(WebDriver driver) {
        element = driver.findElement(txt_Certificate_of_incorporation);
        return element;
    }

    //Object for Activity - Part Time
    private static By btn_Part_time = By.xpath("//label[contains(.,'Part Time')]");

    public static WebElement Part_time(WebDriver driver) {
        element = driver.findElement(btn_Part_time);
        return element;
    }

    //Object for Activity - Full Time
    private static By btn_Full_time = By.xpath("//label[contains(.,'Full Time')]");

    public static WebElement Full_time(WebDriver driver) {
        element = driver.findElement(btn_Full_time);
        return element;
    }

    //Object for Office Phone Number
    private static By txt_Office_phone_num = By.xpath("//input[@placeholder='Office']");

    public static WebElement Office_phone_num(WebDriver driver) {
        element = driver.findElement(txt_Office_phone_num);
        return element;
    }

    //Object for Mobile Phone Number
    private static By txt_Mobile_phone_num = By.xpath("//input[@placeholder='Mobile']");

    public static WebElement Mobile_phone_num(WebDriver driver) {
        element = driver.findElement(txt_Mobile_phone_num);
        return element;
    }

    //Object for Office Address
    private static By txt_Office_address = By.xpath("//input[@placeholder='Office Address']");

    public static WebElement Office_address(WebDriver driver) {
        element = driver.findElement(txt_Office_address);
        return element;
    }

    //Object for Status of Applicant - Sole trader
    private static By btn_Sole_trader = By.xpath("//label[contains(.,'Sole trader')]");

    public static WebElement Sole_trader(WebDriver driver) {
        element = driver.findElement(btn_Sole_trader);
        return element;
    }

    //Object for Status of Applicant - Company
    private static By btn_Company = By.xpath("(//label[contains(.,'Company')])[2]");

    public static WebElement Company(WebDriver driver) {
        element = driver.findElement(btn_Company);
        return element;
    }

    //Object for Status of Applicant - Société/Partnership
    private static By btn_Societe_Partnership = By.xpath("//label[contains(.,'Société/Partnership')]");

    public static WebElement Societe_Partnership(WebDriver driver) {
        element = driver.findElement(btn_Societe_Partnership);
        return element;
    }

    //Object for Status of Applicant - Cooperative society
    private static By btn_Cooperative_society = By.xpath("//label[contains(.,'Cooperative society')]");

    public static WebElement Cooperative_society(WebDriver driver) {
        element = driver.findElement(btn_Cooperative_society);
        return element;
    }

    //Object for Status of Applicant - Association
    private static By btn_Association = By.xpath("//label[contains(.,'Association')]");

    public static WebElement Association(WebDriver driver) {
        element = driver.findElement(btn_Association);
        return element;
    }

    //Object for Registration Membership - Select option
    private static By opt_Select_one = By.xpath("//label[contains(.,'Select One')]");

    public static WebElement Select_one(WebDriver driver) {
        element = driver.findElement(opt_Select_one);
        return element;
    }

    //Object for Registration Membership - 1 Year
    private static By opt_One_Year = By.xpath("//li[contains(.,'1 year')]");

    public static WebElement One_Year(WebDriver driver) {
        element = driver.findElement(opt_One_Year);
        return element;
    }

    //Object for Registration Membership - 2 Year
    private static By opt_Two_Years = By.xpath("//li[contains(.,'2 year')]");

    public static WebElement Two_Years(WebDriver driver) {
        element = driver.findElement(opt_Two_Years);
        return element;
    }

    //Object for List of Products manufactured
    private static By txt_List_products_manufactured = By.xpath("//input[contains(@id, 'productsmanu_input')]");

    public static WebElement List_products_manufactured(WebDriver driver) {
        element = driver.findElement(txt_List_products_manufactured);
        return element;
    }

    //Object for No. of persons employed
    private static By txt_Number_persons_employed = By.xpath("//input[@placeholder='No. of persons employed']");

    public static WebElement Number_persons_employed(WebDriver driver) {
        element = driver.findElement(txt_Number_persons_employed);
        return element;
    }

    //Object for Actual Annual Turnover (Rs)
    private static By txt_Actual_annual_turnover = By.xpath("//input[@placeholder='Actual Annual Turnover (Rs)']");

    public static WebElement Actual_annual_turnover(WebDriver driver) {
        element = driver.findElement(txt_Actual_annual_turnover);
        return element;
    }

    //Object for Status of business - New
    private static By btn_Status_new = By.xpath("//label[contains(.,'New')]");

    public static WebElement Status_new(WebDriver driver) {
        element = driver.findElement(btn_Status_new);
        return element;
    }

    //Object for Status of business - Existing
    private static By btn_Status_Existing = By.xpath("//label[contains(.,'Existing')]");

    public static WebElement Status_Existing(WebDriver driver) {
        element = driver.findElement(btn_Status_Existing);
        return element;
    }

    //Object for No. of years of operation
    private static By txt_Number_of_years_operation = By.xpath("//input[@placeholder='No. of years of operation']");

    public static WebElement Number_of_years_operation(WebDriver driver) {
        element = driver.findElement(txt_Number_of_years_operation);
        return element;
    }

    //Object for Save and Continue
    private static By btn_Save_and_continue = By.xpath("//span[contains(text(),'Save and Continue')]");

    public static WebElement Save_and_continue(WebDriver driver) {
        element = driver.findElement(btn_Save_and_continue);
        return element;
    }

    //Object for Upload Required Documents Page
    private static By lbl_Upload_required_documents = By.xpath("//h6[contains(text(),'Upload Required Documents')]");

    public static WebElement Upload_required_documents(WebDriver driver) {
        element = driver.findElement(lbl_Upload_required_documents);
        return element;
    }

    //Object for Submit Application
    private static By btn_Submit_application = By.xpath("//span[contains(text(),'Submit Application')]");
    public static WebElement Submit_application(WebDriver driver) {
        element = driver.findElement(btn_Submit_application);
        return element;
    }

}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }