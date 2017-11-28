const path = require('path');
const fs = require('fs');
var mkdirp = require('mkdirp');

module.exports = function (options = {}) {
  return function fileUpload (hook) {
    if(hook.method === 'patch' && hook.type === 'before' && hook.id && hook.params.files[options.fieldName]) {
      const file = hook.params.files[options.fieldName];
      const publicPath = options.path.replace(':id', hook.id) || '';
      const pathName = path.join(__dirname, '../../public', publicPath);
      const fileName = `${+ new Date()}${path.extname(file.name)}`;
      
      const mv = () => {
        file.mv(path.join(pathName, fileName), function(err) {
          if (err) Promise.reject(err);
        });
      };

      if (!fs.existsSync(pathName)){
        mkdirp(pathName, function(err) {
          if (err) Promise.reject(err);
          mv();
        });
      } else {
        mv();
      }
      
      hook.data[options.fieldName] = path.join(publicPath, fileName);
    }
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
