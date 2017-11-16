const assert = require('assert');
const app = require('../../src/app');

describe('\'menuItemStatuses\' service', () => {
  it('registered the service', () => {
    const service = app.service('menu-item-statuses');

    assert.ok(service, 'Registered the service');
  });
});
