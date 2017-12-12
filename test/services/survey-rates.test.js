const assert = require('assert');
const app = require('../../src/app');

describe('\'surveyRates\' service', () => {
  it('registered the service', () => {
    const service = app.service('survey-rates');

    assert.ok(service, 'Registered the service');
  });
});
