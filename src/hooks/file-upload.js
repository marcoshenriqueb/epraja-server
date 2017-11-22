const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

module.exports = function (options = {}) {
  return function fileUpload (hook) {
    // console.log(hook.app.request);
    if(hook.method === 'patch' && hook.type === 'before' && hook.id && hook.data[options.fieldName]) {
      const form = new formidable.IncomingForm();
      form.uploadDir = path.join(__dirname, '/../uploads/', options.path.replace(':id', hook.id));
      form.keepExtensions = true;

      form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir, + new Date()));
      });

      form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
      });

      form.parse(hook.app.request, function(err, fields) {
        console.log(fields);
      });
    }
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
