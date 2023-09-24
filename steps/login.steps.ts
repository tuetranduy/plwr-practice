import { Given } from "@cucumber/cucumber";
import { LoginPage } from "../page_objects/logInPage";
import { page } from "./hooks";
import { Constant } from "../utility/constants/constant";

Given("Valid login credentials", async () => {
    const loginPage = new LoginPage(page);

    await loginPage.fillUserNameAndPassword(Constant.USERNAME, Constant.PASSWORD);
})
