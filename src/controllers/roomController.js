const { createRoomModel, getAllRoomModel } = require('@models/roomModel');
exports.createRoomController = (request, response) => {
  const params = request.body.users;
  if (params) {
    createRoomModel(params, (results) => {
      response.json(results);
    });
  } else {
    response.json({
      status: 400,
      description: `Request isn't enough. Check users`,
    });
  }
};
exports.getAllRoomController = (request, response) => {
  const { user } = request.query;
  getAllRoomModel(user, (results) => {
    response.json(results);
  });
};
