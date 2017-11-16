// Initializes the `menuItemStatuses` service on path `/menu-item-statuses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/menu-item-statuses.model');
const hooks = require('./menu-item-statuses.hooks');
const filters = require('./menu-item-statuses.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'menu-item-statuses',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menu-item-statuses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('menu-item-statuses');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
