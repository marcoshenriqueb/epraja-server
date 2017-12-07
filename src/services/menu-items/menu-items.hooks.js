const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');

const restrict = [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ];

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ ...restrict ],
    get: [ ...restrict ],
    create: [],
    update: [ ...restrict ],
    patch: [ ...restrict ],
    remove: [ ...restrict ]
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
