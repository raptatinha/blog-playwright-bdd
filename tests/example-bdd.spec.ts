import { test, expect } from '@playwright/test';

test.describe('Feature: Playwright website', () => {
  test('Scenario: Has Title', async ({ page }) => {
    
    await test.step('Given I am at the playwright website', async () => {
      await page.goto('https://playwright.dev/');
    });

    await test.step('Then the title has the text "Playwright"', async () => {
      await expect(page).toHaveTitle(/Playwrights/); //this line is intentionally failing so we can see the reports
    });
  });
  
  test('Scenario: Get Started Link', async ({ page }) => {
    await test.step('Given I am at the playwright website', async () => {
      await page.goto('https://playwright.dev/');
    });
    
    await test.step('When I click at "Get Started"', async () => {
      await page.getByRole('link', { name: 'Get started' }).click();
    });

    await test.step('Then the URL has the text "intro"', async () => {
      await expect(page).toHaveURL(/.*intro/);
    });
  });

});
  
