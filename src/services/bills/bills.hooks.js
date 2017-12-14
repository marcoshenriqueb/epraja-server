const uniqueTogether = require('./../../hooks/unique-together');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ uniqueTogether({ field: 'table', together: 'business', service: 'bills' }) ],
    update: [],
    patch: [],
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
