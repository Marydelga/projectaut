import {Before, After} from "@cucumber/cucumber"
import{chromium, Browser, Page} from "@playwright/test"
import { pageFixture } from "./PageFixture";


let browser: Browser;

Before(async function (){
    browser= await  chromium.launch({ headless: false});
       const  page= await browser.newPage();
           pageFixture.page = page
           pageFixture.page.goto("https://storefront:5I77Y7A@stg.elpalaciodehierro.com");
});
After(async function () {
    await   pageFixture.page.close();
    await browser.close();
})