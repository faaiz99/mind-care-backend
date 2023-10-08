import { httpServer } from './src/app.js';
const { PORT } = process.env;
import { Server } from 'socket.io';
import { socketOptionsCors } from './src/configs/socket/config.js';
const io = new Server(httpServer, socketOptionsCors);
let onlineUsers = [];
io.on("connection", (socket) => {
    //console.log(socket.id)
    socket.emit("me", socket.id);
    socket.on("users", onlineUsers => {
        console.log('helo');
        console.log(onlineUsers);
    });
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
        onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
        io.emit("getOnlineUsers", onlineUsers);
    });
    socket.on("addNewUser", (userId) => {
        console.log(userId);
        !onlineUsers.some(user => user.userId === userId) &&
            onlineUsers.push({
                userId,
                socketId: socket.id
            });
        io.emit("getOnlineUsers", onlineUsers);
    });
    socket.on("sendMessage", (message) => {
        const user = onlineUsers.find((user) => user.userId === message.recipentId);
        if (user)
            io.to(user.socketId).emit("getMessage", message);
    });
    socket.on("test", (test) => {
        console.log(test);
        io.to(test.socketId).emit("getMessage", test);
    });
    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
    });
    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
    });
});
//io.listen(PORT) since we import httoServer and it contains the express app instance. It also listens to the same port
httpServer.listen(PORT, () => {
    console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`);
});
//# sourceMappingURL=server.js.map