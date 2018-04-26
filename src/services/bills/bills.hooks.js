const commonHooks = require('feathers-hooks-common');
const uniqueTogether = require('./../../hooks/unique-together');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ uniqueTogether({ field: 'table', together: ['business', 'billStatus'], service: 'bills' }) ],
    update: [],
    patch: [ (hook) => {
      if (!Object.keys(hook.data).includes('menuItems.$.itemStatus')) return Promise.resolve(hook);
      
      return hook.app.service('menu-item-statuses').get(hook.data['menuItems.$.itemStatus'], {})
      .then((data) => {
        if (data.name === 'Encaminhado') {
          hook.data = Object.assign({}, hook.data, { 'menuItems.$.forwardedAt': Date.now() });
        } else if (data.name === 'Entregue') {
          hook.data = Object.assign({}, hook.data, { 'menuItems.$.deliveredAt': Date.now() });
        }

        return hook;
      });
    } ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
