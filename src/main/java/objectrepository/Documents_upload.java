package objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Documents_upload {

    private static WebElement element = null;

    //Object for Upload for Business Registration Card (ID)
    private static By btn_Business_Registration_card_upload = By.xpath("//input[contains(@id, 'fileUploader0_input')]");
    public static WebElement Business_Registration_card_upload(WebDriver driver) {
        element = driver.findElement(btn_Business_Registration_card_upload);
        return element;
    }

    //Object for upload Certificate of Incorporation
    private static By btn_Certificate_of_incorporation_upload = By.xpath("//input[contains(@id, 'fileUploader1_input')]");
    public static WebElement Certificate_of_incorporation_upload(WebDriver driver) {
        element = driver.findElement(btn_Certificate_of_incorporation_upload);
        return element;
    }

    //Object for upload List of Directors/ Associates
    private static By btn_List_of_directors_upload = By.xpath("//input[contains(@id, 'fileUploader2_input')]");
    public static WebElement List_of_directors_upload(WebDriver driver) {
        element = driver.findElement(btn_List_of_directors_upload);
        return element;
    }

    //Object for upload Board Resolution of Enterprise for appointment of representative(s)
    private static By btn_Board_resolution_of_enterprise_upload = By.xpath("//input[contains(@id, 'fileUploader3_input')]");
    public static WebElement Board_resolution_of_enterprise_upload(WebDriver driver) {
        element = driver.findElement(btn_Board_resolution_of_enterprise_upload);
        return element;
    }

    //Object for upload National Identity card of representative
    private static By Btn_National_identity_card_Representative_upload = By.xpath("//input[contains(@id, 'fileUploader4_input')]");
    public static WebElement National_identity_card_Representative_upload(WebDriver driver) {
        element = driver.findElement(Btn_National_identity_card_Representative_upload);
        return element;
    }

    //Object for upload National Identity cards of all shareholders
    private static By Btn_National_identity_card_Shareholders_upload = By.xpath("//input[contains(@id, 'fileUploader5_input')]");
    public static WebElement National_identity_card_Shareholders_upload(WebDriver driver) {
        element = driver.findElement(Btn_National_identity_card_Shareholders_upload);
        return element;
    }

    //Object for upload Location Plan
    private static By btn_Location_plan_upload = By.xpath("//input[contains(@id, 'fileUploader6_input')]");
    public static WebElement Location_plan_upload(WebDriver driver) {
        element = driver.findElement(btn_Location_plan_upload);
        return element;
    }

    //Object for upload Copy of SMEDA Certificate
    private static By btn_SMEDA_certificate_upload = By.xpath("//input[contains(@id, 'fileUploader7_input')]");
    public static WebElement SMEDA_certificate_upload(WebDriver driver) {
        element = driver.findElement(btn_SMEDA_certificate_upload);
        return element;
    }

    //Object for upload Copy of Utility Bill
    private static By btn_Utility_bill_upload = By.xpath("//input[contains(@id, 'fileUploader8_input')]");
    public static WebElement Utility_bill_upload(WebDriver driver) {
        element = driver.findElement(btn_Utility_bill_upload);
        return element;
    }

    //Object for upload Button 1 Documents for Particulars for Horticultural Plantations
    private static By btn_Button_upload_horticultural_plantation = By.xpath("//button[contains(@id, 'horticulturalTb1:0:horti_uploadBtn')]");
    public static WebElement Button_upload_horticultural_plantation(WebDriver driver) {
        element = driver.findElement(btn_Button_upload_horticultural_plantation);
        return element;
    }

    //Object for upload Documents for Particulars for Horticultural Plantations
    private static By btn_Document_upload_horticultural_plantation = By.xpath("//input[contains(@id, 'fileUploadeSite0_input')]");
    public static WebElement Document_upload_horticultural_plantation(WebDriver driver) {
        element = driver.findElement(btn_Document_upload_horticultural_plantation);
        return element;
    }

    //Object for button to add upload for additional documents
    private static By btn_Add_additional_documents = By.xpath("//button[contains(@id, 'adddoc')]");
    public static WebElement Add_additional_documents(WebDriver driver) {
        element = driver.findElement(btn_Add_additional_documents);
        return element;
    }

    //Object for Additional Document Details
    private static By txt_Document_details = By.xpath("//input[contains(@placeholder,'Document Details')]");
    public static WebElement Document_details(WebDriver driver) {
        element = driver.findElement(txt_Document_details);
        return element;
    }

    //Object for Save Add Additional Documents
    private static By btn_Save_additional_documents = By.xpath("(//span[contains(.,'Save')])[2]");
    public static WebElement Save_additional_documents(WebDriver driver) {
        element = driver.findElement(btn_Save_additional_documents);
        return element;
    }

    //Object for Close Add Additional Documents
    private static By btn_Close_additional_documents = By.xpath("(//span[contains(.,'Close')])");
    public static WebElement Close_additional_documents(WebDriver driver) {
        element = driver.findElement(btn_Close_additional_documents);
        return element;
    }

    //Object for upload for additional documents
    private static By btn_Additional_document_upload = By.xpath("//input[contains(@id, 'fileUploader9_input')]");
    public static WebElement Additional_document_upload(WebDriver driver) {
        element = driver.findElement(btn_Additional_document_upload);
        return element;
    }

    //Object for Message for Successful Upload
    private static By txt_Document_upload_success_message = By.xpath("(//span[contains(.,'has been uploaded.')])");
    public static WebElement Document_upload_success_message(WebDriver driver) {
        element = driver.findElement(txt_Document_upload_success_message);
        return element;
    }

    //Object for Close Button for Horticultural Plantations Documents tab
    private static By btn_Close_hoticultural_document_tab = By.xpath("(//span[@class='ui-icon ui-icon-closethick'])[2]");
    public static WebElement Close_hoticultural_document_tab(WebDriver driver) {
        element = driver.findElement(btn_Close_hoticultural_document_tab);
        return element;
    }




    //Object for Success Message for Additional Document Name
    private static By txt_Adding_doc_name_success_message = By.xpath("(//span[contains(.,'New document added:')])");
    public static WebElement Adding_doc_name_success_message(WebDriver driver) {
        element = driver.findElement(txt_Adding_doc_name_success_message);
        return element;
    }

    //Object for Photo
    private static By btn_Photo_upload = By.xpath("//input[@type='file']");
    public static WebElement Photo_upload(WebDriver driver) {
        element = driver.findElement(btn_Photo_upload);
        return element;
    }

    //Object for Upload Button
    private static By btn_Upload_button = By.xpath("//span[contains(.,'Upload')]");
    public static WebElement Upload_button(WebDriver driver) {
        element = driver.findElement(btn_Upload_button);
        return element;
    }

    //Object for Photo Upload Success Message
    private static By txt_Photo_upload_success_message = By.xpath("(//span[contains(text (),'has been uploaded.')])[2]");
    public static WebElement Photo_upload_success_message(WebDriver driver) {
        element = driver.findElement(txt_Photo_upload_success_message);
        return element;
    }

}


//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }



