import { Locator, Page } from "@playwright/test";
import config from "../playwright.config";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl(appUrl: string = "") {
        await this.page.goto(config.use?.baseURL! + "/" + appUrl, { waitUntil: "domcontentloaded" });
    }

    async enterTxt(element: Locator, text: string) {
        await element.fill(text);
    }

    async type(element: Locator, text: string) {
        await element.type(text, { delay: 250 });
    }

    async clickOnElement(element: Locator) {
        await element.click();
    }

    async clickOnElementWithDelay(element: Locator, delay: number) {
        await element.click({ delay: delay });
    }

    async getText(element: Locator) {
        return await element.textContent();
    }

    async hoverOnElement(element: string) {
        return await this.page.hover(element);
    }

    async hoverOnElementByLocator(element: Locator) {
        return await element.hover();
    }
}