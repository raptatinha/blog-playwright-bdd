import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, ChromiumBrowser } from '@playwright/test';
import { ICustomWorld } from './custom-world';

declare global {
    var browser: ChromiumBrowser;
}

BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
    });
});

AfterAll(async function () {
    await global.browser.close();
});

Before(async function (this: ICustomWorld) {
    this.context = await global.browser.newContext();
    this.page = await this.context?.newPage();
});

After(async function (this: ICustomWorld) {
    await this.page?.close();
    await this.context?.close();
});