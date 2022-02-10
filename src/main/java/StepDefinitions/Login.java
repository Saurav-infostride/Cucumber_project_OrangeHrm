package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Login {
    static WebDriver driver;
    @Given("^user is on Login page$")
    public void user_is_on_Login_page()
    {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
        driver.manage().window().maximize();
        driver.get("http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login");
    }

    @When("^user enters username in the username textfield$")
    public void user_enters_username_in_the_username_textfield()
    {
        driver.findElement(By.id("txtUsername")).sendKeys("Admin");
    }

    @When("^user enters password in the password textfield$")
    public void user_enters_password_in_the_password_textfield()
    {
        driver.findElement(By.id("txtPassword")).sendKeys("Qedge123!@#");
    }

    @When("^user clicks on the Login button$")
    public void user_clicks_on_the_Login_button()
    {
        driver.findElement(By.id("btnLogin")).submit();
    }

    @Then("^user is on Homepage$")
    public void user_is_on_Homepage()
    {
        Assert.assertEquals(driver.getTitle(), "OrangeHRM");
        driver.close();
    }
}