import{Given, When, Then} from "@cucumber/cucumber";
import{chromium, Page, Browser, expect} from "@playwright/test";
import { pageFixture } from "../../hooks/PageFixture";

let browser: Browser;
let page: Page;


  Given('User navigates to the application', async function () {
    
      await pageFixture.page.goto("https://storefront:5I77Y7A@stg.elpalaciodehierro.com");
         });



         Given('user click on the login link', async function () {
           // Write code here that turns the phrase above into concrete actions
            await pageFixture.page.locator("getByRole('link', { name: 'Iniciar sesión' })").click();
            await pageFixture.page.waitForTimeout(5000);
            
         });



         Given('user enter the username as {string}', async function (username) {
            await pageFixture.page.locator("#dwfrm_profile_login_email").type(username);
             await pageFixture.page.waitForTimeout(5000);
         });



         Given('user enter the password as {string}', async function (password) {
                await pageFixture.page.locator("#dwfrm_profile_login_password").type(password);
                 await pageFixture.page.waitForTimeout(5000);
         });


         When('User click on the login button', async function () {
                await pageFixture.page.locator(".m-checkout-login-btn").click();
         });

 

         Then('Login should be success', async function () {
         
            const text=  await pageFixture.page.locator(".b-account_login-link_text").textContent();
            console.log("Username: "+text);
           
         });



         When('Login should fail', async function () {
          const failureMessage= await pageFixture.page.locator("b-login_tabs-error");
          await expect(failureMessage).toBeVisible();
        
         });



         Given('User hover on login icon', async function () {
           // Write code here that turns the phrase above into concrete actions

         });



         Given('user click on mi cuenta', async function () {
           // Write code here that turns the phrase above into concrete actions

         });



         Given('user click on address button', async function () {
           // Write code here that turns the phrase above into concrete actions

         });



         When('user click on delete button', async function () {
           // Write code here that turns the phrase above into concrete actions

         });


         Then('address should be deleted', async function () {
           // Write code here that turns the phrase above into concrete actions

         });