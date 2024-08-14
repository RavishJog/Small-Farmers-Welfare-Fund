package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Small_planters {
    private static WebElement element = null;

//Object for Small Planters Icon
    private static By btn_Small_planters = By.xpath("//p[contains(.,'Small Planters')]");
    public static WebElement Small_planters(WebDriver driver) {
        element = driver.findElement(btn_Small_planters);
        return element;
    }

    //Object for Page Title for REGISTRATION FOR SMALL PLANTERS
    private static By lbl_Small_planters_page_title = By.xpath("//h5[contains(.,'REGISTRATION FOR SMALL PLANTERS')]");
    public static WebElement Small_planters_page_title(WebDriver driver) {
        element = driver.findElement(lbl_Small_planters_page_title);
        return element;
    }

    //Object for Applicant Title - Select One
    private static By txt_Title_Select_one = By.xpath("//label[contains(@id, 'title_label')]");
    public static WebElement Title_Select_one(WebDriver driver) {
        element = driver.findElement(txt_Title_Select_one);
        return element;
    }

    //Object for Applicant Title - Mr
    private static By txt_Title_Mr = By.xpath("//li[contains(@id, 'title_1')]");
    public static WebElement Title_Mr(WebDriver driver) {
        element = driver.findElement(txt_Title_Mr);
        return element;
    }

    //Object for Applicant Title - Mrs
    private static By txt_Title_Mrs = By.xpath("//li[contains(@id, 'title_2')]");
    public static WebElement Title_Mrs(WebDriver driver) {
        element = driver.findElement(txt_Title_Mrs);
        return element;
    }

    //Object for Applicant Title - Miss
    private static By txt_Title_Miss = By.xpath("//li[contains(@id, 'title_3')]");
    public static WebElement Title_Miss(WebDriver driver) {
        element = driver.findElement(txt_Title_Miss);
        return element;
    }

    //Object for Select One - District
    private static By lbl_District_Select_one = By.xpath("//label[contains(@id, 'district_label')]");
    public static WebElement District_Select_one(WebDriver driver) {
        element = driver.findElement(lbl_District_Select_one);
        return element;
    }

    //Object for Black River - District
    private static By lbl_Black_river = By.xpath("//li[contains(@id, 'district_1')]");
    public static WebElement Black_river(WebDriver driver) {
        element = driver.findElement(lbl_Black_river);
        return element;
    }

    //Object for Flacq - District
    private static By lbl_Flacq = By.xpath("//li[contains(@id, 'district_2')]");
    public static WebElement Flacq(WebDriver driver) {
        element = driver.findElement(lbl_Flacq);
        return element;
    }

    //Object for Grand Port - District
    private static By lbl_Grand_port = By.xpath("//li[contains(@id, 'district_3')]");
    public static WebElement Grand_port(WebDriver driver) {
        element = driver.findElement(lbl_Grand_port);
        return element;
    }

    //Object for Moka - District
    private static By lbl_Moka = By.xpath("//li[contains(@id, 'district_4')]");
    public static WebElement Moka(WebDriver driver) {
        element = driver.findElement(lbl_Moka);
        return element;
    }

    //Object for Pamplemousses - District
    private static By lbl_Pamplemousses = By.xpath("//li[contains(@id, 'district_5')]");
    public static WebElement Pamplemousses(WebDriver driver) {
        element = driver.findElement(lbl_Pamplemousses);
        return element;
    }

    //Object for Port Louis - District
    private static By lbl_Port_louis = By.xpath("//li[contains(@id, 'district_6')]");
    public static WebElement Port_louis(WebDriver driver) {
        element = driver.findElement(lbl_Port_louis);
        return element;
    }

    //Object for Plaine Wilhems - District
    private static By lbl_Plaine_wilhems = By.xpath("//li[contains(@id, 'district_7')]");
    public static WebElement Plaine_wilhems(WebDriver driver) {
        element = driver.findElement(lbl_Plaine_wilhems);
        return element;
    }

    //Object for Riviere Du Rempart - District
    private static By lbl_Riviere_du_rempart = By.xpath("//li[contains(@id, 'district_8')]");
    public static WebElement Riviere_du_rempart(WebDriver driver) {
        element = driver.findElement(lbl_Riviere_du_rempart);
        return element;
    }

    //Object for Savannes - District
    private static By lbl_Savannes = By.xpath("//li[contains(@id, 'district_9')]");
    public static WebElement Savannes(WebDriver driver) {
        element = driver.findElement(lbl_Savannes);
        return element;
    }

    //Object for Rodrigues - District
    private static By lbl_Rodrigues = By.xpath("//li[contains(@id, 'district_10')]");
    public static WebElement Rodrigues(WebDriver driver) {
        element = driver.findElement(lbl_Rodrigues);
        return element;
    }

    //Object for Education Title - Select One
    private static By txt_Education_Select_one = By.xpath("//label[contains(@id, 'education_label')]");
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

    //Object for Other Occupation
    private static By txt_Other_occupation = By.xpath("//input[contains(@id, 'occupation')]");
    public static WebElement Other_occupation(WebDriver driver) {
        element = driver.findElement(txt_Other_occupation);
        return element;
    }

    //Object for Marital Status - Single
    private static By btn_Single = By.xpath("//label[contains(.,'Single')]");
    public static WebElement Single(WebDriver driver) {
        element = driver.findElement(btn_Single);
        return element;
    }

    //Object for Marital Status - Married
    private static By btn_Married = By.xpath("//label[contains(.,'Married')]");
    public static WebElement Married(WebDriver driver) {
        element = driver.findElement(btn_Married);
        return element;
    }

    //Object for Marital Status - Divorced
    private static By btn_Divorced = By.xpath("//label[contains(.,'Divorced')]");
    public static WebElement Divorced(WebDriver driver) {
        element = driver.findElement(btn_Divorced);
        return element;
    }

    //Object for Marital Status - Widow
    private static By btn_Widow = By.xpath("//label[contains(.,'Widow')]");
    public static WebElement Widow(WebDriver driver) {
        element = driver.findElement(btn_Widow);
        return element;
    }

    //Object for Particulars of Family and Beneficiaries Page
    private static By lbl_Particulars_family_ben_page = By.xpath("//h6[contains(.,'Particulars of Family and Beneficiaries')]");
    public static WebElement Particulars_family_ben_page(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_family_ben_page);
        return element;
    }

    //Object for Add Family and Beneficiaries button
    private static By btn_Add_family_and_beneficiaries = By.xpath("//span[contains(.,'Add Family and Beneficiaries')]");
    public static WebElement Add_family_and_beneficiaries(WebDriver driver) {
        element = driver.findElement(btn_Add_family_and_beneficiaries);
        return element;
    }

    //Object for Particulars of Family and Beneficiaries Tab
    private static By lbl_Particulars_family_ben_tab = By.xpath("//span[contains(.,'Particulars of Family and Beneficiaries')]");
    public static WebElement Particulars_family_ben_tab(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_family_ben_tab);
        return element;
    }

    //Object for Family Relationship - Select One
    private static By txt_Family_Select_one = By.xpath("//label[contains(.,'Select One')]");
    public static WebElement Family_Select_one(WebDriver driver) {
        element = driver.findElement(txt_Family_Select_one);
        return element;
    }

    //Object for Family Relationship - Spouse
    private static By txt_Family_spouse = By.xpath("//li[contains(.,'Spouse')]");
    public static WebElement Family_spouse(WebDriver driver) {
        element = driver.findElement(txt_Family_spouse);
        return element;
    }

    //Object for Family Relationship - Child 1
    private static By txt_Family_child_one = By.xpath("//li[contains(@id, 'family_2')]");
    public static WebElement Family_child_one(WebDriver driver) {
        element = driver.findElement(txt_Family_child_one);
        return element;
    }

    //Object for Family Relationship - Child 2
    private static By txt_Family_child_two = By.xpath("//li[contains(@id, 'family_3')]");
    public static WebElement Family_child_two(WebDriver driver) {
        element = driver.findElement(txt_Family_child_two);
        return element;
    }

    //Object for Family Relationship - Child 3
    private static By txt_Family_child_three = By.xpath("//li[contains(@id, 'family_4')]");
    public static WebElement Family_child_three(WebDriver driver) {
        element = driver.findElement(txt_Family_child_three);
        return element;
    }

    //Object for Family Surname
    private static By txt_Family_surname = By.xpath("//input[contains(@id,'surnamedlg')]");
    public static WebElement Family_surname(WebDriver driver) {
        element = driver.findElement(txt_Family_surname);
        return element;
    }

    //Object for Family Other Name
    private static By txt_Family_other_names = By.xpath("//input[contains(@id,'othernamedlg')]");
    public static WebElement Family_other_names(WebDriver driver) {
        element = driver.findElement(txt_Family_other_names);
        return element;
    }

    //Object for Family Gender - Select One
    private static By lbl_Family_gender_select_one = By.xpath("//label[contains(@id,'genderdlg_label')]");
    public static WebElement Family_gender_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Family_gender_select_one);
        return element;
    }

    //Object for Family Gender - Male
    private static By lbl_Family_gender_male = By.xpath("//li[contains(@id,'genderdlg_1')]");
    public static WebElement Family_gender_male(WebDriver driver) {
        element = driver.findElement(lbl_Family_gender_male);
        return element;
    }

    //Object for Family Gender - Female
    private static By lbl_Family_gender_female = By.xpath("//li[contains(@id,'genderdlg_2')]");
    public static WebElement Family_gender_female(WebDriver driver) {
        element = driver.findElement(lbl_Family_gender_female);
        return element;
    }

    //Object for Family Occupation
    private static By txt_Family_occupation = By.xpath("//input[contains(@name,'occupationdlg')]");
    public static WebElement Family_occupation(WebDriver driver) {
        element = driver.findElement(txt_Family_occupation);
        return element;
    }

    //Object for Family Date of Birth
    private static By txt_Family_date_of_birth = By.xpath("//input[contains(@id,'date_of_birth')]");
    public static WebElement Family_date_of_birth(WebDriver driver) {
        element = driver.findElement(txt_Family_date_of_birth);
        return element;
    }

    //Object for Family Beneficiary of life Insurance Scheme
    private static By btn_Life_insurance_scheme = By.xpath("//div[contains(@id,'lifeInsuranceScheme')]");
    public static WebElement Life_insurance_scheme(WebDriver driver) {
        element = driver.findElement(btn_Life_insurance_scheme);
        return element;
    }

    //Object for Beneficiary of Accident Insurance Scheme
    private static By btn_Accident_insurance_scheme = By.xpath("//div[contains(@id,'accidentInsuranceScheme')]");
    public static WebElement Accident_insurance_scheme(WebDriver driver) {
        element = driver.findElement(btn_Accident_insurance_scheme);
        return element;
    }

    //Object for Family Beneficiaries Save Button
    private static By btn_Save_family_ben = By.xpath("(//span[contains(.,'Save')])[1]");
    public static WebElement Save_family_ben(WebDriver driver) {
        element = driver.findElement(btn_Save_family_ben);
        return element;
    }

    //Object for Particulars of Crop: Sugarcane and Tea Plantation Page
    private static By lbl_Particulars_of_crop_page = By.xpath("//h6[contains(.,'Particulars of Crop: Sugarcane and Tea Plantation')]");
    public static WebElement Particulars_of_crop_page(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_of_crop_page);
        return element;
    }

    //Object for Add Crop button
    private static By btn_Add_crop = By.xpath("//span[contains(.,'Add Crop')]");
    public static WebElement Add_crop(WebDriver driver) {
        element = driver.findElement(btn_Add_crop);
        return element;
    }

    //Object for Particulars of Crop: Sugarcane and Tea Plantation Table
    private static By lbl_Particulars_of_crop_tab = By.xpath("//span[contains(.,'Particulars of Crop: Sugarcane and Tea Plantation')]");
    public static WebElement Particulars_of_crop_tab(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_of_crop_tab);
        return element;
    }

//Object for XXX
    private static By txt_Organisation_acc_no = By.xpath("//input[contains(@id,'org')]");
    public static WebElement Organisation_acc_no(WebDriver driver) {
        element = driver.findElement(txt_Organisation_acc_no);
        return element;
    }

    //Object for Crop Type - Select One
    private static By lbl_Select_one_crop_type = By.xpath("//label[contains(@id,'crop_Type_label')]");
    public static WebElement Select_one_crop_type(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_crop_type);
        return element;
    }

    //Object for Crop Type - Cane
    private static By lbl_Cane_crop_type = By.xpath("//li[contains(@id,'crop_Type_1')]");
    public static WebElement Cane_crop_type(WebDriver driver) {
        element = driver.findElement(lbl_Cane_crop_type);
        return element;
    }

    //Object for Crop Type - Tea
    private static By lbl_Tea_crop_type = By.xpath("//li[contains(@id,'crop_Type_2')]");
    public static WebElement Tea_crop_type(WebDriver driver) {
        element = driver.findElement(lbl_Tea_crop_type);
        return element;
    }

    //Object for Total Extent of plot (In Arpent):
    private static By txt_Total_Arpent = By.xpath("//input[contains(@id,'totalExtentPlot')]");
    public static WebElement Total_Arpent(WebDriver driver) {
        element = driver.findElement(txt_Total_Arpent);
        return element;
    }

    //Object for Owner Type - Select One
    private static By lbl_Select_one_owner_type = By.xpath("//label[contains(@id,'owner_type_label')]");
    public static WebElement Select_one_owner_type(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_owner_type);
        return element;
    }

    //Object for Owner Type - Owner
    private static By lbl_Owner_owner_type = By.xpath("//li[contains(@id,'owner_type_1')]");
    public static WebElement Owner_owner_type(WebDriver driver) {
        element = driver.findElement(lbl_Owner_owner_type);
        return element;
    }

    //Object for Owner Type - Tenant
    private static By lbl_Tenant_owner_type = By.xpath("//li[contains(@id,'owner_type_2')]");
    public static WebElement Tenant_owner_type(WebDriver driver) {
        element = driver.findElement(lbl_Tenant_owner_type);
        return element;
    }

    //Object for Plot Location
    private static By txt_Plot_location = By.xpath("//input[contains(@id,'plotLocation')]");
    public static WebElement Plot_location(WebDriver driver) {
        element = driver.findElement(txt_Plot_location);
        return element;
    }

    //Object for Save Button for Particulars of Crop
    private static By btn_Save_Particulars_of_crop = By.xpath("(//span[contains(.,'Save')])[2]");
    public static WebElement Save_Particulars_of_crop(WebDriver driver) {
        element = driver.findElement(btn_Save_Particulars_of_crop);
        return element;
    }



}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }
