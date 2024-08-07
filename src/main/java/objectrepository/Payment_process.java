package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Payment_process {
    private static WebElement element = null;

    //Objects
    //Object for Payment Shopping Cart
    private static By btn_Payment_shopping_cart = By.xpath("//i[@class='pi pi-shopping-cart']");
    public static WebElement Payment_shopping_cart(WebDriver driver) {
        element = driver.findElement(btn_Payment_shopping_cart);
        return element;
    }

    //Object for Search Bar for Reference Number
    private static By txt_Search_reference_number = By.xpath("//input[contains(@id,'j_idt70:pendingpaymentid:j_idt83:filter')]");
    public static WebElement Search_reference_number(WebDriver driver) {
        element = driver.findElement(txt_Search_reference_number);
        return element;
    }

    //Object for Checkbox for Latest Application for payment
    private static By btn_Select_last_application = By.xpath("(//input[@type='checkbox'])[7]");
    public static WebElement Select_last_application(WebDriver driver) {
        element = driver.findElement(btn_Select_last_application);
        return element;
    }

    //Object for Button Proceed to Payment
    private static By btn_Proceed_to_payment = By.xpath("//span[@class='ui-button-text ui-c'][contains(.,'Proceed to Payment')]");
    public static WebElement Proceed_to_payment(WebDriver driver) {
        element = driver.findElement(btn_Proceed_to_payment);
        return element;
    }

    //Object for Button Final Proceed to Payment
    private static By btn_Proceed_to_payment_final = By.xpath("(//span[contains(.,'Proceed to Payment')])[2]");
    public static WebElement Proceed_to_payment_final(WebDriver driver) {
        element = driver.findElement(btn_Proceed_to_payment_final);
        return element;
    }

    //Object for Payment Icon
    private static By btn_Pay = By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-credit-card']");
    public static WebElement Pay(WebDriver driver) {
        element = driver.findElement(btn_Pay);
        return element;
    }

    //Object for Payment-Select One
    private static By txt_Select_payment = By.xpath("//label[contains(.,'Select payment')]");
    public static WebElement Select_payment(WebDriver driver) {
        element = driver.findElement(txt_Select_payment);
        return element;
    }

    //Object for Credit Card
    private static By txt_Credit_card = By.xpath("//li[contains(@data-label,'Credit Card')]");
    public static WebElement Credit_card(WebDriver driver) {
        element = driver.findElement(txt_Credit_card);
        return element;
    }

    //Object for Debit Card
    private static By txt_Debit_card = By.xpath("//li[contains(@data-label,'Debit Card')]");
    public static WebElement Debit_card(WebDriver driver) {
        element = driver.findElement(txt_Debit_card);
        return element;
    }

    //Object for Counter
    private static By txt_Counter = By.xpath("//li[contains(@data-label,'Counter')]");
    public static WebElement Counter(WebDriver driver) {
        element = driver.findElement(txt_Counter);
        return element;
    }

    //Object for Success Message to proceed to Post Office for Payment
    private static By txt_Proceed_to_post_office_payment = By.xpath("(//span[contains(.,'Kindly effect your payment at any SFWF Center or Post Office')])[2]");
    public static WebElement Proceed_to_post_office_payment(WebDriver driver) {
        element = driver.findElement(txt_Proceed_to_post_office_payment);
        return element;
    }

}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }

