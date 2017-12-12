const assert = require('assert');
const app = require('../../src/app');

describe('\'surveys\' service', () => {
  it('registered the service', () => {
    const service = app.service('surveys');

    assert.ok(service, 'Registered the service');
  });
});
