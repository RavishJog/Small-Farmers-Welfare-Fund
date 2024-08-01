package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Home_page {
    private static WebElement element = null;

    //Objects
    //Object for Username
    private static By txt_Username = By.xpath("//input[contains(@id,'username')]");
    public static WebElement Username(WebDriver driver) {
        element = driver.findElement(txt_Username);
        return element;
    }

    //Object for Password
    private static By txt_Password = By.xpath("//input[contains(@id,'password')]");
    public static WebElement Password(WebDriver driver) {
        element = driver.findElement(txt_Password);
        return element;
    }

    //Object for Sign In Button
    private static By btn_Sign_in = By.xpath("//span[contains(.,'Sign In')]");
    public static WebElement Sign_in(WebDriver driver) {
        element = driver.findElement(btn_Sign_in);
        return element;
    }

    //Object for Label 'Sign in to SFWF'
    private static By lbl_Sign_in_to_sfwf = By.xpath("//h1[contains(.,'Sign in to SFWF')]");
    public static WebElement Sign_in_to_sfwf(WebDriver driver) {
        element = driver.findElement(lbl_Sign_in_to_sfwf);
        return element;
    }

    //Object for Message for Bad Credentials
    private static By lbl_Bad_credential_message = By.xpath("//h4[contains(.,'Bad credentials')]");
    public static WebElement Bad_credential_message(WebDriver driver) {
        element = driver.findElement(lbl_Bad_credential_message);
        return element;
    }

    //Object for Forget Password
    private static By btn_Forget_password = By.xpath("//a[contains(.,'Forget Password')]");
    public static WebElement Forget_password(WebDriver driver) {
        element = driver.findElement(btn_Forget_password);
        return element;
    }

    //Object for Forget Password Label
    private static By lbl_Forget_password_label = By.xpath("//h1[contains(.,'Forget Password')]");
    public static WebElement Forget_password_label(WebDriver driver) {
        element = driver.findElement(lbl_Forget_password_label);
        return element;
    }


}


    //Object for About Us
//    private static By XXXX = By.xpath("XXXX");
//    public static WebElement XXXX(WebDriver driver) {
//        element = driver.findElement(XXXX);
//        return element;
//    }