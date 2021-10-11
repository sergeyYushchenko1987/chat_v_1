module.exports = {
  user: {
    create:
      'INSERT INTO users (id_user, name, email, password) VALUES(NULL, ?, ?, ?)',
    getAll: 'SELECT * FROM users',
    getItem: 'SELECT * FROM users WHERE email = ?',
  },
  message: {
    getAll:
      'SELECT m.id_message, m.message, u.name, m.date,m.time FROM messages m LEFT JOIN users u ON m.id_user=u.id_user LEFT JOIN rooms r ON m.id_room=r.id_room WHERE r.id = ?',
    add: 'INSERT INTO messages (id_message, message, id_room, id_user,date, time) VALUES(null,?,?,?,?,?)',
    getRoomId: 'SELECT id_room FROM rooms WHERE id = ? ',
    getItem:
      'SELECT m.id_message, m.message, u.name, m.date,m.time FROM messages m LEFT JOIN users u ON m.id_user=u.id_user LEFT JOIN rooms r ON m.id_room=r.id_room WHERE m.id_message = ?',
  },
  room: {
    create: 'INSERT INTO rooms (id_room, name, id) VALUES(NULL, ?, ?)',
    addUsers: 'INSERT INTO users_rooms (id_user, id_room) VALUES(?, ?)',
    getAll:
      'SELECT r.name, r.id FROM rooms r LEFT JOIN users_rooms ur ON r.id_room=ur.id_room LEFT JOIN users u ON u.id_user = ur.id_user WHERE  ur.id_user=?',
  },
};
