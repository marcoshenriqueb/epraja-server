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
    query[options.together] = hook.data[options.together];
    hook.app.service(options.service).find({ query }).then((bills) => {
      if (bills.total) {
        throw new errors.Unprocessable(
          `Field ${options.field} has to be unique within ${options.together}.`
        );
      }
    });

    return Promise.resolve(hook);
  };
};
