module.exports = function () {
  return function createBusiness (hook) {
    const businessService = hook.app.service('businesses');
    if (hook.data.business) {
      return businessService.create(hook.data.business).then((b) => {
        hook.data = Object.assign({}, hook.data, { business: b._id });
      });
    }

    return Promise.resolve(hook);
  };
};
