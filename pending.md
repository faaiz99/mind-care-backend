// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let onlineUsers = [];

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('addUser', ({ userId, role }) => {
        if (!onlineUsers.some((user) => user.userId === userId)) {
            onlineUsers.push({ userId, socketId: socket.id, role });
        }

        io.emit('onlineUsers', onlineUsers);
    });

    socket.on('sendMessage', (message) => {
        const recipientSocketId = onlineUsers.find(user => user.userId === message.recipientId)?.socketId;
        if (recipientSocketId) {
            io.to(recipientSocketId).emit('receiveMessage', message);
        }
    });

    socket.on('disconnect', () => {
        onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
        io.emit('onlineUsers', onlineUsers);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});