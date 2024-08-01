package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Front_Home_page {
    private static WebElement element = null;

    //Objects
    //Object for Username
    private static By txt_Username = By.xpath("//input[@id='username']");
    public static WebElement Username(WebDriver driver) {
        element = driver.findElement(txt_Username);
        return element;
    }

    //Object for Password
    private static By txt_Password = By.xpath("//input[@id='password']");
    public static WebElement Password(WebDriver driver) {
        element = driver.findElement(txt_Password);
        return element;
    }

    //Object for Sign In Button
    private static By btn_Sign_in_button = By.xpath("//span[contains(.,'Sign In')]");
    public static WebElement Sign_in_button(WebDriver driver) {
        element = driver.findElement(btn_Sign_in_button);
        return element;
    }

    //Object to Check Successful Login
    private static By lbl_Welcome_user = By.xpath("//h3[contains(.,'Welcome')]");
    public static WebElement Welcome_user(WebDriver driver) {
        element = driver.findElement(lbl_Welcome_user);
        return element;
    }

    //Object for Register as Farmer Label
    private static By lbl_Register_as_farmer = By.xpath("//span[contains(.,'Register as Farmer')]");
    public static WebElement Register_as_farmer(WebDriver driver) {
        element = driver.findElement(lbl_Register_as_farmer);
        return element;
    }

    //Object for My Application Page
    private static By lbl_My_application = By.xpath("//h5[contains(.,'My Application')]");
    public static WebElement My_application(WebDriver driver) {
        element = driver.findElement(lbl_My_application);
        return element;
    }

    //Object for Farmer's Card
    private static By lbl_Farmer_card = By.xpath("//a[contains(@href,'applicantlists:farmersCard')]");
    public static WebElement Farmer_card(WebDriver driver) {
        element = driver.findElement(lbl_Farmer_card);
        return element;
    }

    //Object for Programmes
    private static By lbl_Programmes = By.xpath("//a[contains(@href,'applicantlists:programmes')]");
    public static WebElement Programmes(WebDriver driver) {
        element = driver.findElement(lbl_Programmes);
        return element;
    }

    //Object for New Button
    private static By btn_New_registration_application = By.xpath("//span[contains(.,'New')]");
    public static WebElement New_registration_application(WebDriver driver) {
        element = driver.findElement(btn_New_registration_application);
        return element;
    }

    //Object for Registration Type Page
    private static By lbl_Registration_type_page = By.xpath("//h1[contains(.,'Registration Type')]");
    public static WebElement Registration_type_page(WebDriver driver) {
        element = driver.findElement(lbl_Registration_type_page);
        return element;
    }

}

    //Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }
