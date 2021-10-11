const validator = require('validator');
const md5 = require('md5');
const { executeQuery } = require('@servers/mysql/service');

exports.createUserModel = (params, callbackResults) => {
  const { name, email, password } = params;
  executeQuery([email], 'user', 'getItem', (results) => {
    if (results.length === 0) {
      executeQuery([name, email, md5(password)], 'user', 'create', () =>
        callbackResults({
          status: 201,
          description: "Request is right. User was added. Let's try to entry",
        })
      );
    } else {
      callbackResults({
        status: 400,
        description: 'Request is wrong. Such user name have already existed',
      });
    }
  });
};
exports.entryUserModel = (params, callbackResults) => {
  const { email, password } = params;
  executeQuery([email], 'user', 'getItem', (results) => {
    if (results.length !== 0) {
      const [item] = results;
      if (validator.equals(md5(password), item.password)) {
        callbackResults({
          state: true,
          status: 301,
          user: results[0].id_user,
          name: results[0].name,
          description: 'Request is right. You can take a part in chat.',
        });
      } else {
        callbackResults({
          state: false,
          status: 400,
          description: 'Request is wrong. Check personal data',
        });
      }
    }
  });
};
exports.getAllUserModel = (callbackResults) => {
  executeQuery([], 'user', 'getAll', (results) => {
    if (results.length) {
      callbackResults(results);
    } else {
      callbackResults({
        status: 204,
        description: 'You are the first user!',
      });
    }
  });
};
