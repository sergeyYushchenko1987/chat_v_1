const { getAllMessageModel } = require('@models/messageModel');

exports.getAllMessageController = (request, response) => {
  const { idRoom } = request.query;
  if (idRoom) {
    getAllMessageModel(idRoom, (results) => {
      response.json(results);
    });
  }
};
