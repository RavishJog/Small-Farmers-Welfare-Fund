package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Fees_and_fines {

    private static WebElement element = null;

    //Objects
    //Object for Menu of Manage Farmers Details
    private static By lbl_Manage_farmers_details = By.xpath("//span[contains(text(),\"Manage Farmers' Details\")]");
    public static WebElement Manage_farmers_details(WebDriver driver) {
        element = driver.findElement(lbl_Manage_farmers_details);
        return element;
    }

    //Object for Manage Fee and Fine
    private static By lbl_Manage_fee_and_fine = By.xpath("//span[contains(text(),'Manage Fee and Fine')]");
    public static WebElement Manage_fee_and_fine(WebDriver driver) {
        element = driver.findElement(lbl_Manage_fee_and_fine);
        return element;
    }

    //Object for Page Lable Manage Fee and Fine
    private static By lbl_Manage_fees_and_fine = By.xpath("(//span[contains(.,'Manage Fee and Fine')])[2]");
    public static WebElement Manage_fees_and_fine(WebDriver driver) {
        element = driver.findElement(lbl_Manage_fees_and_fine);
        return element;
    }

    //Object for Label of Type of Fees
    private static By lbl_Type_of_fees_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Type of fees')])[1]");
    public static WebElement Type_of_fees_label(WebDriver driver) {
        element = driver.findElement(lbl_Type_of_fees_label);
        return element;
    }

    //Object for Label of Fee Code
    private static By lbl_Fee_code_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Fee Code')])[1]");
    public static WebElement Fee_code_label(WebDriver driver) {
        element = driver.findElement(lbl_Fee_code_label);
        return element;
    }

    //Object for Label of Amount
    private static By lbl_Amount_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Amount')])[1]");
    public static WebElement Amount_label(WebDriver driver) {
        element = driver.findElement(lbl_Amount_label);
        return element;
    }

    //Object for Label of Year
    private static By lbl_Year_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Year')])[1]");
    public static WebElement Year_label(WebDriver driver) {
        element = driver.findElement(lbl_Year_label);
        return element;
    }

    //Object for Label of Currency
    private static By lbl_Currency_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Currency')])[1]");
    public static WebElement Currency_label(WebDriver driver) {
        element = driver.findElement(lbl_Currency_label);
        return element;
    }

    //Object for Label of Activate/Deactivate
    private static By lbl_Activate_deactivate_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Activate/ Deactivate')])[1]");
    public static WebElement Activate_deactivate_label(WebDriver driver) {
        element = driver.findElement(lbl_Activate_deactivate_label);
        return element;
    }

    //Object for View Label
    private static By lbl_View_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'View')])[1]");
    public static WebElement View_label(WebDriver driver) {
        element = driver.findElement(lbl_View_label);
        return element;
    }

    //Object for Edit Label
    private static By lbl_Edit_label = By.xpath("(//span[@class='ui-column-title'][contains(.,'Edit')])[1]");
    public static WebElement Edit_label(WebDriver driver) {
        element = driver.findElement(lbl_Edit_label);
        return element;
    }
    //Object for AA-Fertiliser Subsidy Scheme - Type of Fee
    private static By txt_First_Type_of_fees = By.xpath("//td[contains(.,'Type of feesAA-Fertiliser Subsidy Scheme')]");
    public static WebElement First_Type_of_fees(WebDriver driver) {
        element = driver.findElement(txt_First_Type_of_fees);
        return element;
    }

    //Object for ZZ-Fertiliser Subsidy Scheme - Type of Fee
    private static By txt_Last_Type_of_fees = By.xpath("//td[@role='gridcell'][contains(.,'Type of feesZZ-Fertiliser Subsidy Scheme')]");
    public static WebElement Last_Type_of_fees(WebDriver driver) {
        element = driver.findElement(txt_Last_Type_of_fees);
        return element;
    }

    //Object for AAFSS2 - Fee Code
    private static By txt_First_Type_of_fee_code = By.xpath("//td[@role='gridcell'][contains(.,'Fee CodeAAFSS2')]");
    public static WebElement First_Type_of_fee_code(WebDriver driver) {
        element = driver.findElement(txt_First_Type_of_fee_code);
        return element;
    }

    //Object for zz-FSS2 - Fee Code
    private static By txt_Last_Type_of_fee_code = By.xpath("//td[@role='gridcell'][contains(.,'Fee Codezz-FSS2')]");
    public static WebElement Last_Type_of_fee_code(WebDriver driver) {
        element = driver.findElement(txt_Last_Type_of_fee_code);
        return element;
    }

    //Object for 1 Year - Year
    private static By txt_First_Number_of_years = By.xpath("(//td[@role='gridcell'][contains(.,'Year1 Year')])[1]");
    public static WebElement First_Number_of_years(WebDriver driver) {
        element = driver.findElement(txt_First_Number_of_years);
        return element;
    }

    //Object for AA-Rs - Currency
    private static By txt_First_Type_of_currency = By.xpath("//td[@role='gridcell'][contains(.,'CurrencyAA-Rs')]");
    public static WebElement First_Type_of_currency(WebDriver driver) {
        element = driver.findElement(txt_First_Type_of_currency);
        return element;
    }

    //Object for Search Bar of Type of fees
    private static By fld_Type_of_fees_searchbar = By.xpath("//input[contains(@id,'dta:typeFeeId:filter')]");
    public static WebElement Type_of_fees_searchbar(WebDriver driver) {
        element = driver.findElement(fld_Type_of_fees_searchbar);
        return element;
    }

    //Object for Search Bar of Fee Code
    private static By fld_Fee_code_searchbar = By.xpath("//input[contains(@id,'dta:feeCodeId:filter')]");
    public static WebElement Fee_code_searchbar(WebDriver driver) {
        element = driver.findElement(fld_Fee_code_searchbar);
        return element;
    }

    //Object for Search Bar of Amount
    private static By fld_Amount_searchbar = By.xpath("//input[contains(@id,'dta:amountId:filter')]");
    public static WebElement Amount_searchbar(WebDriver driver) {
        element = driver.findElement(fld_Amount_searchbar);
        return element;
    }

    //Object for Search Bar of Year
    private static By fld_Year_searchbar = By.xpath("//input[contains(@id,'dta:yearId:filter')]");
    public static WebElement Year_searchbar(WebDriver driver) {
        element = driver.findElement(fld_Year_searchbar);
        return element;
    }

    //Object for Search Bar of Currency
    private static By fld_Currency_searchbar = By.xpath("//input[contains(@id,'dta:currencyId:filter')]");
    public static WebElement Currency_searchbar(WebDriver driver) {
        element = driver.findElement(fld_Currency_searchbar);
        return element;
    }

    //Object for 10,000 Amount
    private static By txt_Ten_thousand_amount = By.xpath("//td[@role='gridcell'][contains(.,'Amount10000')]");
    public static WebElement Ten_thousand_amount(WebDriver driver) {
        element = driver.findElement(txt_Ten_thousand_amount);
        return element;
    }

    //Object for 10 Year
    private static By txt_Ten_year = By.xpath("//td[@role='gridcell'][contains(.,'Year10 Year')]");
    public static WebElement Ten_year(WebDriver driver) {
        element = driver.findElement(txt_Ten_year);
        return element;
    }




}

    //Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }
