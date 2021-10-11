const { addMessageModel } = require('@models/messageModel');

exports.handler = (io, socket) => {
  socket.on('join', (msg) => {
    socket.join(msg);
  });
  socket.on('message', (msg) => {
    addMessageModel(msg, (results) => {
      io.in(msg.room).emit('message', results[0]);
    });
  });
};
