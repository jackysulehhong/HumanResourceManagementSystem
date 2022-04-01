import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import path from 'path';
import { Server } from 'socket.io';
import { createServer } from 'http';
import PushNotifications from '@pusher/push-notifications-server';
//https://pawelgrzybek.com/all-you-need-to-know-to-move-from-commonjs-to-ecmascript-modules-esm-in-node-js/
//https://stackoverflow.com/a/68117993
const app = express();
dotenv.config();

//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
//{ limit: '30mb', extended: 'true' }
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use(cors());
//https://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router
app.use('/', routes);
app.get('/', (req, res) => {
  res.send('APP IS RUNNING');
});
//https://stackoverflow.com/a/39819473
//https://stackoverflow.com/a/28279609
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.onl1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1
//https://stackoverflow.com/questions/68915722/option-usefindandmodify-is-not-supported
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    //app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

//https://socket.io/docs/v3/server-initialization/#with-express
//https://stackoverflow.com/a/41741696
const httpServer = createServer(app);
//http://localhost:3000/
//http://localhost:3000
const io = new Server(httpServer, {
  cors: { origin: '*' },
});

let onlineUsers = [];

const addNewUser = (data, socketId) => {
  if (
    !onlineUsers.some((user) => user._id.toString() === data._id.toString())
  ) {
    onlineUsers.push({ ...data, socketId });
    console.log({ ...data, socketId });
    console.log(`${data.email} joined`);
  }
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};
const getUser = (id) => {
  return onlineUsers.find((user) => user._id.toString() === id.toString());
};
/*
io.on('connection', (socket) => {
  //const user = JSON.parse(localStorage.getItem('profile'))?.result;
  socket.on('newUser', (data) => {
    addNewUser(data, socket.id);
  });
  socket.on('listUser', () => {
    console.log('userList');
    // console.log(onlineUsers[0].leaveCount);
    onlineUsers.forEach((user) => {
      console.log(user.email, user._id);
    });
  });
  socket.on('sendNoti', ({ sender, recipient, content }) => {
    const receiver = getUser(recipient);
    if (receiver) {
      io.to(receiver.socketId).emit('newNotification', { sender, content });
    }
  });
  socket.on('disconnect', () => {
    removeUser(socket.id);
    console.log('user disconnected');
  });
});

*/
//let onlineUsers = [];
io.on('connection', (socket) => {
  //const user = JSON.parse(localStorage.getItem('profile'))?.result;
  socket.on('newUser', (data) => {
    socket.join(data._id.toString());
    //console.log('new', socket.rooms);
    //console.log(io.of('/').adapter.rooms.get(data._id.toString()));
    //if (!onlineUsers[data._id]) onlineUsers[data._id] = data;
  });
  socket.on('listUser', () => {
    //console.log('kist', socket.rooms);
  });
  socket.on('sendNoti', ({ sender, recipient, content }) => {
    // const receiver = getUser(recipient);
    io.to(recipient).emit('newNotification', { sender, content });
  });
  socket.on('disconnecting', () => {
    // console.log('disg', socket.rooms);
    // console.log('user disconnected');
  });
  socket.on('disconnect', () => {
    // console.log('user disconnected');
    // console.log('dis', socket.rooms);
  });
});

//https://stackoverflow.com/questions/65712319/getting-port-already-in-use-error-when-adding-socket-io-to-express-app-happe
httpServer.listen(PORT);

const beamsClient = new PushNotifications({
  instanceId: '0b883b28-92f8-4afc-9f97-ffebaa950fc8',
  secretKey: '76966C8AB6BF904848B930A5FD014278FC6893192DC0BFE735614F0D56E33641',
});

/* 
beamsClient
  .publishToInterests(['hello'], {
    web: {
      notification: {
        title: 'Hello',
        body: 'Hello, world!',
        deep_link: 'http://localhost:3000',
      },
    },
  })
  .then((publishResponse) => {
    console.log('Just published:', publishResponse.publishId);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
*/
//https://stackoverflow.com/a/62438729
export { io, getUser, beamsClient };
//export { io };
