# blog-playwright-bdd

Repositório de exemplo para o artigo [Playwright, BDD, Cucumber & a minha opinião sobre isso](https://testingwithrenata.com/blog/test-automation/playwright/playwright-bdd-cucumber-e-a-minha-opiniao-sobre-isso/)

Por [Renata Andrade](https://www.linkedin.com/in/raptatinha/)

Se você achou útil, considere deixar uma ⭐️ no repositório.
Happy Testing 🎭!

## Dependências

- Playwright v1.33.0
- Cucumber v9.1.2
- ts-node: v10.9.1
- typescript: v5.0.4
- Node v19.8.1
- npm v9.6.5

## Configuração e execução do projeto

Em seu terminal, rode:
1. `git clone https://github.com/raptatinha/blog-playwright-bdd.git`
1. `cd blog-playwright-bdd`
1. `npm i`

Para rodar testes do Cucumber (em /bdd-tests):
1. `npx cucumber-js`

Para rodar testes do playwright com e sem bdd (em /tests):
1. `npx playwright test`

O teste "Has Title" está intencionalmente falhando para que possamos ver o relatório de testes.

Para ver o relatório de testes do Cucumber, abra o arquivo [bdd-tests/reports/cucumber-report.html](bdd-tests/reports/cucumber-report.html) no seu browser.

O relatório do Playwright irá abir automaticamente quando testes falharem.

## Importante

Neste projeto não serão priorizadas as boas práticas de automação de testes já que o objetivo é demonstrar o uso de Playwright com BDD. Foram realizadas as configurações mínimas para a esta demonstração.

## Estudos complementares

- Palestra sobre [Playwright](https://youtube.com/watch?v=eJ6V1de9nHY) do [Stefan Teixeira](https://linkedin.com/in/stefanteixeira/) no [Minas Testing Conference](https://minastestingconference.com.br/) 2022

- Cursos de [Playwright](https://testingwithrenata.com/trainings/) da [Renata Andrade](https://www.linkedin.com/in/raptatinha/)

- Framework que implementa toda configuração do Cucumber [playwright-bdd](https://github.com/vitalets/playwright-bdd)

- Playwright com BDD em [JavaScript](https://dev.to/jankaritech/behavior-driven-development-bdd-using-playwright-n1o)

- Documentação do framework [Cucumber](https://github.com/cucumber/cucumber-js)

- Exemplo de implementação mais robusta e completa: https://github.com/Tallyb/cucumber-playwright/

- Leitura muito interessante sobre [BDD](https://cucumber.io/docs/bdd/) suas vantagens, sua história e algumas curiosidades.

🙌🏽 Valeu galera!