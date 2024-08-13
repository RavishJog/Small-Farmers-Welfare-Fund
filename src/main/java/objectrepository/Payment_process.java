package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Payment_process {
    private static WebElement element = null;

    //Objects
    //Object for Payment Shopping Cart
    private static By btn_Payment_shopping_cart = By.xpath("//div[contains(@id, 'shoppingCart')]");
    public static WebElement Payment_shopping_cart(WebDriver driver) {
        element = driver.findElement(btn_Payment_shopping_cart);
        return element;
    }

    //Object for Search Bar for Reference Number
    private static By txt_Search_reference_number = By.xpath("(//input[@role='textbox'])[1]");
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

    //Object for Display of Payment Gateway
    private static By lbl_Payment_gateway_display = By.xpath("//span[contains(.,'Card number')]");
    public static WebElement Payment_gateway_display(WebDriver driver) {
        element = driver.findElement(lbl_Payment_gateway_display);
        return element;
    }

    //Object for Payment Gateway - Card Number
    private static By txt_Card_number = By.xpath("//input[@id='cardNumber']");
    public static WebElement Card_number(WebDriver driver) {
        element = driver.findElement(txt_Card_number);
        return element;
    }

    //Object for Payment Gateway - Expiry Month
    private static By txt_Expiry_month = By.xpath("//select[contains(@id,'expiryMonth')]");
    public static WebElement Expiry_month(WebDriver driver) {
        element = driver.findElement(txt_Expiry_month);
        return element;
    }

    //Object for Payment Gateway - Expiry Year
    private static By txt_Expiry_year = By.xpath("//select[contains(@id,'expiryYear')]");
    public static WebElement Expiry_year(WebDriver driver) {
        element = driver.findElement(txt_Expiry_year);
        return element;
    }

    //Object for Cardholder name
    private static By txt_Cardholder_name = By.xpath("//input[@id='cardHolderName']");
    public static WebElement Cardholder_name(WebDriver driver) {
        element = driver.findElement(txt_Cardholder_name);
        return element;
    }

    //Object for Payment Gateway - Security Code
    private static By txt_Security_code = By.xpath("//input[@id='csc']");
    public static WebElement Security_code(WebDriver driver) {
        element = driver.findElement(txt_Security_code);
        return element;
    }

    //Object for Pay Now Button
    private static By btn_Pay_now = By.xpath("(//button[contains(.,'Pay now')])[1]");
    public static WebElement Pay_now(WebDriver driver) {
        element = driver.findElement(btn_Pay_now);
        return element;
    }

    //Object for Payment Status - Paid
    private static By lbl_Payment_status_paid_last_application_ref = By.xpath("(//label[contains(.,'Paid')])[1]");
    public static WebElement Payment_status_paid_last_application_ref(WebDriver driver) {
        element = driver.findElement(lbl_Payment_status_paid_last_application_ref);
        return element;
    }



}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }

