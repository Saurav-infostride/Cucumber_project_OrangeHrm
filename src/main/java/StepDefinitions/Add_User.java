package StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.lang.RandomStringUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.Select;

import static StepDefinitions.Login.driver;

public class Add_User {
    static String userName = RandomStringUtils.randomAlphabetic(8);
    @When("^user is logging successfully and goto homepage page$")
    public void user_is_logging_successfully_and_goto_homepage_page()
    {
        driver.findElement(By.id("txtUsername")).sendKeys("Admin");
        driver.findElement(By.id("txtPassword")).sendKeys("Qedge123!@#");
        driver.findElement(By.id("btnLogin")).submit();
        Assert.assertEquals(driver.getCurrentUrl(), "http://orangehrm.qedgetech.com/symfony/web/index.php/dashboard");
    }

    @And("^user is click on Admin button$")
    public void user_is_click_on_Admin_button()
    {
        driver.findElement(By.id("menu_admin_viewAdminModule")).click();
    }

    @And("^user is click on Add button$")
    public void user_is_click_on_Add_button()
    {
        driver.findElement(By.id("btnAdd")).click();
    }

    @And("^user selects the User Role$")
    public void user_selects_the_User_Role()
    {
        Select dropdown1 = new Select(driver.findElement(By.name("systemUser[userType]")));
        dropdown1.selectByVisibleText("Admin");
    }

    @And("^user selects the Employee Name$")
    public void user_selects_the_Employee_Name()
    {
        driver.findElement(By.name("systemUser[employeeName][empName]")).sendKeys("Anil KAMSU");
    }

    @And("^user enters username in the username text field$")
    public void user_enters_username_in_the_username_text_field()
    {
        driver.findElement(By.name("systemUser[userName]")).sendKeys(userName);
    }

    @And("^user selects the Status$")
    public void user_selects_the_Status()
    {
        Select dropdown2 = new Select(driver.findElement(By.name("systemUser[status]")));
        dropdown2.selectByVisibleText("Enabled");
    }

    @And("^user enters Password in the password text field$")
    public void user_enters_Password_in_the_password_text_field()
    {
        driver.findElement(By.name("systemUser[password]")).sendKeys("#Saurav@1232*");
    }

    @And("user enters Confirm Password in the confirm password text field")
    public void user_enters_Confirm_Password_in_the_confirm_password_text_field()
    {
        driver.findElement(By.name("systemUser[confirmPassword]")).sendKeys("#Saurav@1232*");
    }

    @And("^user clicks on the SAVE button$")
    public void user_clicks_on_the_SAVE_button()
    {
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("window.scrollBy(0,350)", "");

        driver.findElement(By.name("btnSave")).click();
    }

    @Then("^user successfully added the user$")
    public void user_successfully_added_the_user()
    {
        Assert.assertEquals(driver.getCurrentUrl(), "http://orangehrm.qedgetech.com/symfony/web/index.php/admin/viewSystemUsers");
        driver.close();
    }
}