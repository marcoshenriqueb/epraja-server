// Initializes the `surveyRates` service on path `/survey-rates`
const createService = require('feathers-mongoose');
const createModel = require('../../models/survey-rates.model');
const hooks = require('./survey-rates.hooks');
const filters = require('./survey-rates.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'survey-rates',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/survey-rates', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('survey-rates');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
