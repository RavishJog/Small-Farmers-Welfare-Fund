package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Agro_Processing_Enterprise {

    private static WebElement element = null;

    //Object for Button for Agro-Processing Enterprise
    private static By btn_Agro_processing_enterprise = By.xpath("//p[contains(.,'Agro- Processing Enterprise')]");
    public static WebElement Agro_processing_enterprise(WebDriver driver) {
        element = driver.findElement(btn_Agro_processing_enterprise);
        return element;
    }

    //Object for REGISTRATION FOR AGRO-PROCESSING ENTERPRISE page
    private static By lbl_Registration_for_agro_processing_enterprise = By.xpath("//h5[contains(.,'REGISTRATION FOR AGRO-PROCESSING ENTERPRISE')]");
    public static WebElement Registration_for_agro_processing_enterprise(WebDriver driver) {
        element = driver.findElement(lbl_Registration_for_agro_processing_enterprise);
        return element;
    }
}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }