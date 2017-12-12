// Initializes the `surveys` service on path `/surveys`
const createService = require('feathers-mongoose');
const createModel = require('../../models/surveys.model');
const hooks = require('./surveys.hooks');
const filters = require('./surveys.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'surveys',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/surveys', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('surveys');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
