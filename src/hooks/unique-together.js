const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function uniqueTogether (hook) {
    if (
      !options.service.length ||
      !options.field.length ||
      !options.together.length
    ) return Promise.resolve(hook);
    
    const query = {};
    query[options.field] = hook.data[options.field];
    if (typeof options.together === 'string') {
      query[options.together] = hook.data[options.together];
    } else {
      options.together.forEach((t) => {
        query[t] = hook.data[t];
      });
    }

    return hook.app.service(options.service).find({ query }).then((bills) => {
      if (bills.total) {
        throw new errors.Unprocessable(
          `Field ${options.field} has to be unique within ${options.together}.`
        );
      }
    });
  };
};
