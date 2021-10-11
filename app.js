require('module-alias/register');
const express = require('express');
const config = require('config');
const http = require('http');
const PORT = config.get('const.port');
const userRoute = require('@routes/userRoute');
const roomRoute = require('@routes/roomRoute');
const messageRoute = require('@routes/messageRoute');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/user', userRoute);
app.use('/room', roomRoute);
app.use('/message', messageRoute);
const httpServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});
const { handler } = require('@sockets/handler');
io.on('connection', (socket) => {
  handler(io, socket);
});

app.get('/', (request, response) => {
  response.send('Server work');
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening port - ${PORT}`);
});
