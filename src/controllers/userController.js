const validator = require('validator');
const {
  createUserModel,
  entryUserModel,
  getAllUserModel,
} = require('@models/userModel');
const { checkParams } = require('./service');

exports.createUserController = (request, response) => {
  request.body = request.body.data;
  const checkEmpty = checkParams(request.body, 'user', 'create');
  if (checkEmpty) {
    response.json(checkEmpty);
  } else if (
    !validator.isEmail(request.body.email) ||
    !validator.isStrongPassword(request.body.password)
  ) {
    response.json({
      status: 400,
      description: `Email or password is wrong. Check, and try again`,
    });
  } else {
    createUserModel(request.body, (results) => {
      response.json(results);
    });
  }
};
exports.entryUserController = (request, response) => {
  request.body = request.body.data;
  const checkEmpty = checkParams(request.body, 'user', 'entry');
  if (checkEmpty) {
    response.json(checkEmpty);
  } else {
    entryUserModel(request.body, (results) => {
      if (results.state) {
        response.json(results);
      } else {
        response.json(results);
      }
    });
  }
};
exports.getAllUserController = (request, response) => {
  getAllUserModel((results) => {
    response.json(results);
  });
};
