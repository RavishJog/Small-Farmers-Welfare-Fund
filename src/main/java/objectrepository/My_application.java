package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class My_application {
    private static WebElement element = null;

    //Object for Success message for submit application
    private static By lbl_Success_message_submit_application = By.xpath("(//span[contains(.,'Your Registration was successfully submitted')])[2]");
    public static WebElement Success_message_submit_application(WebDriver driver) {
        element = driver.findElement(lbl_Success_message_submit_application);
        return element;
    }


}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }