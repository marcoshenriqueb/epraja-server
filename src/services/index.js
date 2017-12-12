const users = require('./users/users.service.js');
const businesses = require('./businesses/businesses.service.js');
const menuCategories = require('./menu-categories/menu-categories.service.js');
const menuItems = require('./menu-items/menu-items.service.js');
const billStatuses = require('./bill-statuses/bill-statuses.service.js');
const bills = require('./bills/bills.service.js');
const menuItemStatuses = require('./menu-item-statuses/menu-item-statuses.service.js');
const surveys = require('./surveys/surveys.service.js');
const surveyRates = require('./survey-rates/survey-rates.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(businesses);
  app.configure(menuCategories);
  app.configure(menuItems);
  app.configure(billStatuses);
  app.configure(bills);
  app.configure(menuItemStatuses);
  app.configure(surveys);
  app.configure(surveyRates);
};
