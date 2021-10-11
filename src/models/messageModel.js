const { executeQuery } = require('@servers/mysql/service');
const { formatDate, formatTime } = require('@models/service');

exports.getAllMessageModel = (idRoom, callbackResults) => {
  executeQuery([idRoom.toString()], 'message', 'getAll', (results) => {
    if (results.length) {
      callbackResults(results);
    } else {
      callbackResults({
        status: 204,
        description: 'Request have been done. List is empty',
      });
    }
  });
};
exports.addMessageModel = (params, callbackResults) => {
  const date = formatDate();
  const time = formatTime();
  const { body, room, user } = params;
  executeQuery([room], 'message', 'getRoomId', (results) => {
    const idRoom = results[0].id_room;
    executeQuery(
      [body, idRoom, user, date, time],
      'message',
      'add',
      (results) => {
        executeQuery([results.insertId], 'message', 'getItem', (results) => {
          callbackResults(results);
        });
      }
    );
  });
};
