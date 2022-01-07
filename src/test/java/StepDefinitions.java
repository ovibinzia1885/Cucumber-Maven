import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.login;

import java.util.concurrent.TimeUnit;

public class StepDefinitions {
    public WebDriver driver;
    WebDriverWait wait;
    @Given("User visits e-commerce website")
    public void user_visits_e_commerce_website() {
        System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver.exe");
        ChromeOptions ops = new ChromeOptions();
        ops.addArguments("--headed"); //uncomment if you want to run in headless mode
        driver = new ChromeDriver(ops);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com");


    }
    @When("^User enters valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
    public void user_enters_valid_credentials(String email,String password) throws InterruptedException {
        wait=new WebDriverWait(driver,40);
        login login=new login(driver);
        login.doLogin(email,password);

    }
    @Then("User can logged in successfully")
    public void user_can_logged_in_successfully() {
        wait=new WebDriverWait(driver,40);
        WebElement lblUserName=driver.findElement(By.xpath("//span[contains(text(),'Test User')]"));
        Assert.assertEquals(lblUserName.getText(),"Test User");
    }
    @After
    public void closeBrowser(){
        driver.quit();
    }



}
