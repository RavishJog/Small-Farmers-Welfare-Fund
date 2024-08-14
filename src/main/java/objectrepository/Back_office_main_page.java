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

    //Object for Finance - Manage Cashier - Click
    private static By lbl_Manage_cashier = By.xpath("(//a[contains(.,'Click')])[2]");
    public static WebElement Manage_cashier(WebDriver driver) {
        element = driver.findElement(lbl_Manage_cashier);
        return element;
    }

    //Object for List of Applications
    private static By lbl_List_of_applications = By.xpath("//h6[contains(.,'List of Applications')]");
    public static WebElement List_of_applications(WebDriver driver) {
        element = driver.findElement(lbl_List_of_applications);
        return element;
    }

    //Object for Confirm Processing Fees
    private static By btn_Confirm_processing_fees = By.xpath("//span[contains(.,'Confirm Processing Fees')]");
    public static WebElement Confirm_processing_fees(WebDriver driver) {
        element = driver.findElement(btn_Confirm_processing_fees);
        return element;
    }

    //Object for Processing Details Frame
    private static By lbl_Processing_details_frame = By.xpath("//span[contains(.,'Payment Details')]");
    public static WebElement Processing_details_frame(WebDriver driver) {
        element = driver.findElement(lbl_Processing_details_frame);
        return element;
    }

    //Object for Payment Mode - Select One
    private static By lbl_Payment_mode_select_one = By.xpath("//label[contains(.,'Select One')]");
    public static WebElement Payment_mode_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Payment_mode_select_one);
        return element;
    }

    //Object for Payment Mode - Cash
    private static By lbl_Payment_mode_cash = By.xpath("//li[contains(.,'Cash payment')]");
    public static WebElement Payment_mode_cash(WebDriver driver) {
        element = driver.findElement(lbl_Payment_mode_cash);
        return element;
    }

    //Object for Payment Mode - Internet Banking
    private static By lbl_Payment_mode_Internet_banking = By.xpath("//li[contains(.,'Internet Banking and Mobile Application(Juice/Blink)')]");
    public static WebElement Payment_mode_Internet_banking(WebDriver driver) {
        element = driver.findElement(lbl_Payment_mode_Internet_banking);
        return element;
    }

    //Object for Amount
    private static By txt_Amount = By.xpath("//input[@placeholder='Amount']");
    public static WebElement Amount(WebDriver driver) {
        element = driver.findElement(txt_Amount);
        return element;
    }

    //Object for Add Payment
    private static By btn_Add_payment = By.xpath("//span[@class='ui-button-text ui-c'][contains(.,'Add Payment')]");
    public static WebElement Add_payment(WebDriver driver) {
        element = driver.findElement(btn_Add_payment);
        return element;
    }

    //Object for Save Payment
    private static By btn_Save_payment = By.xpath("//span[@class='ui-button-text ui-c'][contains(.,'Save Payment')]");
    public static WebElement Save_payment(WebDriver driver) {
        element = driver.findElement(btn_Save_payment);
        return element;
    }

    //Object for Success Message of confirmed payment
    private static By lbl_Success_message_payment_confirmed = By.xpath("(//span[contains(.,'Payment confirmed')])[2]");
    public static WebElement Success_message_payment_confirmed(WebDriver driver) {
        element = driver.findElement(lbl_Success_message_payment_confirmed);
        return element;
    }

    //Object for All Applications - Click button
    private static By btn_All_applications_click = By.xpath("//a[contains(.,'Click')]");
    public static WebElement All_applications_click(WebDriver driver) {
        element = driver.findElement(btn_All_applications_click);
        return element;
    }

    //Object for List of Registrations Page
    private static By lbl_List_of_registrations_page = By.xpath("//h5[contains(.,'List of Registrations')]");
    public static WebElement List_of_registrations_page(WebDriver driver) {
        element = driver.findElement(lbl_List_of_registrations_page);
        return element;
    }

    //Object for Search Bar for Application Ref number
    private static By txt_Search_bar_app_num = By.xpath("(//input[@role='textbox'])[1]");
    public static WebElement Search_bar_app_num(WebDriver driver) {
        element = driver.findElement(txt_Search_bar_app_num);
        return element;
    }

    //Object for Button to view last application
    private static By btn_View_last_application = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-eye'])[1]");
    public static WebElement View_last_application(WebDriver driver) {
        element = driver.findElement(btn_View_last_application);
        return element;
    }

    //Object for Action Button for Back Office Users
    private static By btn_Action_back_office_users = By.xpath("//span[contains(.,'Action')]");
    public static WebElement Action_back_office_users(WebDriver driver) {
        element = driver.findElement(btn_Action_back_office_users);
        return element;
    }

}

    //Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }


