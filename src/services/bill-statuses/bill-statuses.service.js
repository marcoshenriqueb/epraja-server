// Initializes the `billStatuses` service on path `/bill-statuses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/bill-statuses.model');
const hooks = require('./bill-statuses.hooks');
const filters = require('./bill-statuses.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'bill-statuses',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bill-statuses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('bill-statuses');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
