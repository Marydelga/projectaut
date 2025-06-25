import{Given, When, Then} from "@cucumber/cucumber";
import{chromium, Page, Browser, expect} from "@playwright/test";

let browser: Browser;
let page: Page;


  Given('User navigates to the application', async function () {
           // Write code here that turns the phrase above into concrete actions
     browser= await  chromium.launch({ headless: false});
       page= await browser.newPage();
       await page.goto("https://storefront:5I77Y7A@stg.elpalaciodehierro.com");
         });



         Given('user click on the login icon', async function () {
           // Write code here that turns the phrase above into concrete actions
            await page.locator("getByRole('link', { name: 'Iniciar sesión' })").click();
         });



         Given('user enter the username as {string}', async function (username) {
            await page.locator("#dwfrm_profile_login_email").type(username);
         });



         Given('user enter the password as {string}', async function (password) {
                await page.locator("#dwfrm_profile_login_password").type(password);
         });


         When('User click on the login button', async function () {
                await page.locator(".m-checkout-login-btn").click();
         });

 

         Then('Login should be success', async function () {
         
            const text=  await page.locator(".b-account_login-link_text").textContent();
            console.log("Username: "+text);
            await browser.close();
         });



         When('Login should fail', async function () {
          const failureMessage= await page.locator("b-login_tabs-error");
          await expect(failureMessage).toBeVisible();
          await browser.close();
         });




         Given('User navigates to the application', async function () {
           // Write code here that turns the phrase above into concrete actions

         });



         Given('user click on the login icon', async function () {
           // Write code here that turns the phrase above into concrete actions

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