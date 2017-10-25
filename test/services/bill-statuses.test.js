const assert = require('assert');
const app = require('../../src/app');

describe('\'billStatuses\' service', () => {
  it('registered the service', () => {
    const service = app.service('bill-statuses');

    assert.ok(service, 'Registered the service');
  });
});
