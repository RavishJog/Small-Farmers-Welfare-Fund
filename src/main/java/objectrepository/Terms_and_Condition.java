package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Terms_and_Condition {
    private static WebElement element = null;


    //Object for Terms and Conditions Page
    private static By lbl_Terms_and_condition = By.xpath("//h6[contains(.,'Terms and Conditions')]");
    public static WebElement Terms_and_condition(WebDriver driver) {
        WebElement element = driver.findElement(lbl_Terms_and_condition);
        return element;
    }

    //Object for I agree to the Terms and Conditions
    private static By btn_Agree_termsandcondition = By.xpath("//span[contains(.,'I agree to the Terms and Conditions')]");
    public static WebElement Agree_termsandcondition(WebDriver driver) {
        element = driver.findElement(btn_Agree_termsandcondition);
        return element;
    }

    //Object for Bank - Select One
    private static By txt_Select_one = By.xpath("//label[contains(.,'Select One')]");
    public static WebElement Select_one(WebDriver driver) {
        element = driver.findElement(txt_Select_one);
        return element;
    }

    //Object for Bank - ABC Banking Corporation Ltd
    private static By txt_ABC_Banking_Corporation = By.xpath("//li[contains(.,'ABC Banking Corporation Ltd')]");
    public static WebElement ABC_Banking_Corporation(WebDriver driver) {
        element = driver.findElement(txt_ABC_Banking_Corporation);
        return element;
    }

    //Object for Bank - Branch
    private static By txt_Bank_Branch = By.xpath("//input[contains(@id,'registration_branch')]");
    public static WebElement Bank_Branch(WebDriver driver) {
        element = driver.findElement(txt_Bank_Branch);
        return element;
    }

    //Object for Bank - Personal Bank Account Number
    private static By txt_Bank_account_number = By.xpath("//input[contains(@id,'registration_bankAccountNo')]");
    public static WebElement Bank_account_number(WebDriver driver) {
        element = driver.findElement(txt_Bank_account_number);
        return element;
    }

    //Object for Label of Bank
    private static By lbl_Bank_label = By.xpath("//label[contains(.,'Bank:')]");
    public static WebElement Bank_label(WebDriver driver) {
        element = driver.findElement(lbl_Bank_label);
        return element;
    }

    //Object for Label of Branch
    private static By lbl_Branch_label = By.xpath("//label[contains(.,'Branch:')]");
    public static WebElement Branch_label(WebDriver driver) {
        element = driver.findElement(lbl_Branch_label);
        return element;
    }

    //Object for Label of Personal Bank Account Number
    private static By lbl_Personal_Bank_Account_Number_label = By.xpath("//label[contains(.,'Personal Bank Account Number:')]");
    public static WebElement Personal_Bank_Account_Number_label(WebDriver driver) {
        element = driver.findElement(lbl_Personal_Bank_Account_Number_label);
        return element;
    }

    //Object for Yes Submit Application
    private static By btn_Yes_submit_app = By.xpath("(//span[contains(.,'Yes')])[2]");
    public static WebElement Yes_submit_app(WebDriver driver) {
        element = driver.findElement(btn_Yes_submit_app);
        return element;
    }

    //Object for No Submit Application
    private static By btn_No_submit_app = By.xpath("(//span[contains(.,'No')])[2]");
    public static WebElement No_submit_app(WebDriver driver) {
        element = driver.findElement(btn_No_submit_app);
        return element;
    }

    //Object for Cancel Button not to proceed with another registration
    private static By btn_Cancel_no_other_registration = By.xpath("//span[contains(.,'Cancel')]");
    public static WebElement Cancel_no_other_registration(WebDriver driver) {
        element = driver.findElement(btn_Cancel_no_other_registration);
        return element;
    }

}


//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }

