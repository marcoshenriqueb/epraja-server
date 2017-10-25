const assert = require('assert');
const app = require('../../src/app');

describe('\'menuCategories\' service', () => {
  it('registered the service', () => {
    const service = app.service('menu-categories');

    assert.ok(service, 'Registered the service');
  });
});
