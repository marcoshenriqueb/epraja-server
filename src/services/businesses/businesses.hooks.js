const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const fileUpload = require('./../../hooks/file-upload');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ commonHooks.disallow('rest', 'socketio') ],
    update: [ commonHooks.disallow('rest', 'socketio') ],
    patch: [ authenticate('jwt'), fileUpload({ 
      path: 'businesses/:id/picture',
      fieldName: 'picture'
    }) ],
    remove: [ authenticate('jwt') ]
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
