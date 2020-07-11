const express = require('express');
const socketIo = require('socket.io');

const app = express();

const server = app.listen(8000);

const io = socketIo(server);

let currentPrice = 5;
let connectedClients = 0;
const history = [];

io.on('connection', socket => {
  console.log('someone connected to the server!');
  connectedClients++;
  console.log('We have ' + connectedClients + ' connected right now!');

  // emits an event to just this one socket
  socket.emit('details', { currentPrice, history });

  // this emits an event to all connected sockets
  io.emit('new user', { name: 'Bob Smith' });

  // this emits an event to all sockets except this one
  socket.broadcast.emit('new user arrived', { newUser: 'Bob II' });

  socket.on('make new bid', bid => {
    currentPrice = bid;
    
    const obj = {
      amount: bid,
      timestamp: new Date()
    };
    history.push(obj);
    io.emit('new bid received', obj);
  });

  socket.on('disconnect', () => {
    console.log('Bummer, someone left!');
    connectedClients--;
    console.log('We have ' + connectedClients + ' left.');
  });
});