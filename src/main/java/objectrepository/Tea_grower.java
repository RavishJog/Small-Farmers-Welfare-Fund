package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Tea_grower {

    private static WebElement element = null;




    //Object for Tea Grower Icon
    private static By lbl_Tea_grower_icon = By.xpath("//p[contains(.,'Tea Grower')]");

    public static WebElement Tea_grower_icon(WebDriver driver) {
        element = driver.findElement(lbl_Tea_grower_icon);
        return element;
    }




    //Object for Page Title for REGISTRATION FOR TEA GROWER
    private static By lbl_Tea_grower_page_title = By.xpath("//h5[contains(.,'REGISTRATION FOR TEA GROWER')]");

    public static WebElement Tea_grower_page_title(WebDriver driver) {
        element = driver.findElement(lbl_Tea_grower_page_title);
        return element;
    }



    //Object for Applicant Title - Select One
    private static By txt_Title_Select_one = By.xpath("//label[contains(@id, 'title_label')]");
    public static WebElement Title_Select_one(WebDriver driver) {
        element = driver.findElement(txt_Title_Select_one);
        return element;
    }

    //Object for Applicant Title - Mr
    private static By txt_Title_Mr = By.xpath("//li[contains(.,'Mr')]");
    public static WebElement Title_Mr(WebDriver driver) {
        element = driver.findElement(txt_Title_Mr);
        return element;
    }

    //Object for Applicant Title - Miss
    private static By txt_Title_Miss = By.xpath("//li[contains(.,'Miss')]");
    public static WebElement Title_Miss(WebDriver driver) {
        element = driver.findElement(txt_Title_Miss);
        return element;
    }

    //Object for Applicant Title - Mrs
    private static By txt_Title_Mrs = By.xpath("//li[contains(.,'Mrs')]");
    public static WebElement Title_Mrs(WebDriver driver) {
        element = driver.findElement(txt_Title_Mrs);
        return element;
    }



    //Object for Education Title - Select One
    private static By txt_Education_Select_one = By.xpath("//label[contains(@id, 'education_tea_label')]");
    public static WebElement Education_Select_one(WebDriver driver) {
        element = driver.findElement(txt_Education_Select_one);
        return element;
    }

    //Object for Education Title - Primary
    private static By txt_Education_primary = By.xpath("//li[contains(.,'Primary')]");
    public static WebElement Education_primary(WebDriver driver) {
        element = driver.findElement(txt_Education_primary);
        return element;
    }

    //Object for Education Title - Secondary
    private static By txt_Education_secondary = By.xpath("//li[contains(.,'Secondary')]");
    public static WebElement Education_secondary(WebDriver driver) {
        element = driver.findElement(txt_Education_secondary);
        return element;
    }

    //Object for Education Title - Tertiary
    private static By txt_Education_tertiary = By.xpath("//li[contains(.,'Tertiary')]");
    public static WebElement Education_tertiary(WebDriver driver) {
        element = driver.findElement(txt_Education_tertiary);
        return element;
    }



    //Object for Particulars for Registration of Tea Plantation Page
    private static By lbl_Particulars_for_Registration_of_Tea_Plantation_page = By.xpath("//h6[contains(.,'Particulars for Registration of Tea Plantation')]");
    public static WebElement Particulars_for_Registration_of_Tea_Plantation_page(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_for_Registration_of_Tea_Plantation_page);
        return element;
    }



    //Object for Add Tea Plantation button
    private static By btn_Add_tea_plantation = By.xpath("//span[contains(.,'Add Tea Plantation')]");
    public static WebElement Add_tea_plantation(WebDriver driver) {
        element = driver.findElement(btn_Add_tea_plantation);
        return element;
    }




    //Object for Particulars of Crop: Sugarcane and Tea Plantation Table
    private static By lbl_Particulars_of_Tea_tab = By.xpath("//span[contains(.,'Particulars for Registration of Tea Plantation')]");
    public static WebElement Particulars_of_tea_tab(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_of_Tea_tab);
        return element;
    }




    //Object for License No
    private static By txt_License_No = By.xpath("//input[contains(@id, 'license_tea')]");
    public static WebElement License_No(WebDriver driver) {
        element = driver.findElement(txt_License_No);
        return element;
    }




    //Object for Owner Type - Select One
    private static By lbl_Select_one_owner_type = By.xpath("//label[contains(@id,'owner_type_tea_label')]");
    public static WebElement Select_one_owner_type_tea(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_owner_type);
        return element;
    }

    //Object for Owner Type - Owner
    private static By lbl_Owner_owner_type = By.xpath("//li[contains(@id,'owner_type_tea_1')]");
    public static WebElement Owner_owner_type_tea(WebDriver driver) {
        element = driver.findElement(lbl_Owner_owner_type);
        return element;
    }

    //Object for Owner Type - Tenant
    private static By lbl_Tenant_owner_type = By.xpath("//li[contains(@id,'owner_type_tea_2')]");
    public static WebElement Tenant_owner_type_tea(WebDriver driver) {
        element = driver.findElement(lbl_Tenant_owner_type);
        return element;
    }
}
//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }