const { iff } = require('feathers-hooks-common');
const { BadRequest } = require('feathers-errors');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ iff((hook) => {
      return new Promise((resolve) => {
        hook.app.service('bill-statuses').find({}).then((response) => {
          hook.app.service('bills').find({
            query: {
              table: hook.data.table,
              billStatus: {
                $in: response.data.filter(s => s.name === 'Aberta' || s.name === 'Fechada')
                  .map(s => s._id),
              },
            },
          }).then((r) => {
            resolve(!!r.data.length);
          });
        });
      });
    }, () => Promise.reject(new BadRequest('Table already in use.'))) ],
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
