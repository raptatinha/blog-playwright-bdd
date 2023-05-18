import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Given('I am at the playwright website', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto('https://playwright.dev/');
});
  
When('I click at "Get Started"', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.getByRole('link', { name: 'Get started' }).click();
});
  
Then('the title has the text "Playwright"', async function (this: ICustomWorld) {
    const page = this.page!;
    await expect(page).toHaveTitle(/Playwrights/);//this line is intentionaly failing so we can see the reports
});

Then('the URL has the text "intro"', async function (this: ICustomWorld) {
    const page = this.page!;
    await expect(page).toHaveURL(/.*intro/);
});