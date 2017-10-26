const assert = require('assert');
const app = require('../../src/app');

describe('\'businesses\' service', () => {
  it('registered the service', () => {
    const service = app.service('businesses');

    assert.ok(service, 'Registered the service');
  });
});
