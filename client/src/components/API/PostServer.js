import axios from 'axios';
import serverConfig from './configApi';

export default class PostServer {
  static async getAll(subject) {
    const response = await axios.get(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}`
    );
    return response;
  }

  static async registration(data) {
    const response = await axios.post(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}/user`,
      { data }
    );
    return response;
  }

  static async authorization(data) {
    const response = await axios.put(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}/user/entry`,
      { data }
    );
    return response;
  }

  static async getAllUsers() {
    const response = await axios.get(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}/user/all`
    );
    return response;
  }

  static async createRooms(users) {
    const response = await axios.post(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}/room`,
      { users }
    );
    return response;
  }

  static async getAllRooms(user) {
    const response = await axios.get(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}/room`,
      {
        params: {
          user: user,
        },
      }
    );
    return response;
  }

  static async getAllMessage(chatId) {
    const response = await axios.get(
      `http://${serverConfig.server.hostname}:${serverConfig.server.port}/message`,
      {
        params: {
          idRoom: chatId,
        },
      }
    );
    return response;
  }
}
