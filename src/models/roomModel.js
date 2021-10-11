const { executeQuery } = require('@servers/mysql/service');

exports.createRoomModel = (params, callbackResults) => {
  const idRoom = Date.now();
  let nameRoom = '';
  params.forEach((param) => {
    nameRoom += `/${param.name}/`;
  });
  executeQuery([nameRoom, idRoom], 'room', 'create', (results) => {
    params.forEach((param) => {
      executeQuery(
        [param.id, results.insertId],
        'room',
        'addUsers',
        (results) => {}
      );
    });
    callbackResults({
      status: 201,
      description: 'Request successfull',
    });
  });
};
exports.getAllRoomModel = (user, callbackResults) => {
  executeQuery([user], 'room', 'getAll', (results) => {
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
