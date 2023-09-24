import { After, AfterStep, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import config from "../playwright.config";

let page: Page;
let context: BrowserContext;
let browser: Browser;

setDefaultTimeout(60000)

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false, args: ["--start-maximized"] });
        context = await browser.newContext({ viewport: null });
        page = await context.newPage();

        await page.goto(config.use?.baseURL!, { timeout: 10000, waitUntil: "domcontentloaded" })
    } catch (error) {
        throw new Error(`Unable to load page ${error}`);
    }

    return page;
});

AfterStep(async function (scenario) {
    const options = {
        path: `reports/screenshots/${scenario.pickle.name}.png`,
        fullPage: true
    }

    if (scenario.result.status === Status.FAILED) {
        this.attach(await page.screenshot(options), 'image/png');
    }
})

After(async function () {
    await browser.close();
});

export { page, browser, context }