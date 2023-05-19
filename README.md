# blog-playwright-bdd

 🇧🇷 Para Português, [clique aqui](./README.br.md).

Example for the article [Playwright, BDD, Cucumber & my opinion about it](https://testingwithrenata.com/blog/test-automation/playwright/playwright-bdd-cucumber-e-a-minha-opiniao-sobre-isso/)

By [Renata Andrade](https://www.linkedin.com/in/raptatinha/)

If you find it useful, consider leaving a ⭐️ for this repo.
Happy Testing 🎭!

## Dependecies

- Playwright v1.33.0
- Cucumber v9.1.2
- ts-node: v10.9.1
- typescript: v5.0.4
- Node v19.8.1
- npm v9.6.5

## Setup and Run

On your terminal, run:
1. `git clone https://github.com/raptatinha/blog-playwright-bdd.git`
1. `cd blog-playwright-bdd`
1. `npm i`

To run the Cucumber tests (under /bdd-tests):
1. `npx cucumber-js`

To run the playwright with and without bdd testes (under /tests):
1. `npx playwright test`

The test "Has Title" is intentionally failing so we can see the reports.

To see the Cucumber report, open the file [bdd-tests/reports/cucumber-report.html](bdd-tests/reports/cucumber-report.html) on your browser.

The Playwright report will open automatically on failures.

## Important

For this project, coding good practices were not prioritizes since the main goal is to demo the usage of Playwright and BDD. Only the minimun setup was implemented for this demo.

## More

- Talk about [Playwright](https://youtube.com/watch?v=eJ6V1de9nHY) by [Stefan Teixeira](https://linkedin.com/in/stefanteixeira/) for [Minas Testing Conference](https://minastestingconference.com.br/) 2022

- The [Playwright trainings](https://testingwithrenata.com/trainings/) by [Renata Andrade](https://www.linkedin.com/in/raptatinha/)

- Framework with all the setup [playwright-bdd](https://github.com/vitalets/playwright-bdd)

- Playwright with BDD in [JavaScript](https://dev.to/jankaritech/behavior-driven-development-bdd-using-playwright-n1o)

- Framework docs [Cucumber](https://github.com/cucumber/cucumber-js)

- More robust implementation: https://github.com/Tallyb/cucumber-playwright/

- Nice reading about [BDD](https://cucumber.io/docs/bdd/)

🙌🏽 Kudos everyone!