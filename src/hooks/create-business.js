module.exports = function () {
  return function createBusiness (hook) {
    const businessService = hook.app.service('businesses');
    if (hook.data.businessName) {
      return businessService.create({ name: hook.data.businessName }).then((b) => {
        hook.data = Object.assign({}, hook.data, { business: b._id });
        delete hook.data.businessService;
      });
    }

    return Promise.resolve(hook);
  };
};
