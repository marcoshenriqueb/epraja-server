const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const fileUpload = require('./../../hooks/file-upload');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ commonHooks.disallow('rest', 'socketio') ],
    update: [ authenticate('jwt') ],
    patch: [ fileUpload({ 
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
