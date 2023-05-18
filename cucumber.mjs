export default {
  format: ['html:bdd-tests/reports/cucumber-report.html'],
  parallel: 2,
  paths: ['bdd-tests/features/**/*.feature'],
  require: ['bdd-tests/step-definition/**/*.ts','bdd-tests/support/**/*.ts'],
  requireModule: ['ts-node/register'],
}