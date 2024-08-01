package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Back_office_main_page {
    private static WebElement element = null;

    //Objects
    //Object for Username
    private static By txt_Username = By.xpath("//input[contains(@id,'username')]");
    public static WebElement Username(WebDriver driver) {
        element = driver.findElement(txt_Username);
        return element;
    }

//Object for Welcome Profile
    private static By txt_Welcome_profile = By.xpath("//h3[contains(.,'Welcome')]");
    public static WebElement Welcome_profile(WebDriver driver) {
        element = driver.findElement(txt_Welcome_profile);
        return element;
    }

    //Object for Sign Out
    private static By btn_Sign_out = By.xpath("(//span[contains(.,'Sign Out')])[1]");
    public static WebElement Sign_out(WebDriver driver) {
        element = driver.findElement(btn_Sign_out);
        return element;
    }

    //Object for Confirmation YES
    private static By Txt_Confirmation_yes = By.xpath("//i[contains(@class,'pi pi-check')]");
    public static WebElement Confirmation_yes(WebDriver driver) {
        element = driver.findElement(Txt_Confirmation_yes);
        return element;
    }

    //Object for Confirmation NO
    private static By Txt_Confirmation_no = By.xpath("//span[contains(@class,'ui-button-icon-left ui-icon ui-c pi pi-times')]");
    public static WebElement Confirmation_no(WebDriver driver) {
        element = driver.findElement(Txt_Confirmation_no);
        return element;
    }




}


//Object for About Us
//    private static By XXXX = By.xpath("XXXX");
//    public static WebElement XXXX(WebDriver driver) {
//        element = driver.findElement(XXXX);
//        return element;
//    }

