import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { LocatorValue } from "../utility/locators/locators";

export class LoginPage extends BasePage {
    readonly emailField: Locator;

    constructor(page: Page) {
        super(page);

        this.emailField = page.locator(LocatorValue.loginPage.emailTxtField);
    }

    async fillUserNameAndPassword(username: string, password: string) {
        await this.enterTxt(this.emailField, username);
    }
}