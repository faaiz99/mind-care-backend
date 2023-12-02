const { PORT } = process.env;
import { httpServer } from "./src/app.js";
// import { app } from "./src/app.js";
// import { print } from "./src/utils/displayRoute.util.js";

// app._router.stack.forEach(print.bind(null, []))

// Socket IO Setup
import { Server } from "socket.io";
import { socketOptionsCors } from "./src/configs/socket/config.js";
import { IUserDetails, IMessage } from "./src/types/ITeletherapy.js";
const io = new Server(httpServer, socketOptionsCors);

const onlineUsers: Array<IUserDetails> = [];
const messages: Array<string> = [];

io.on("connection", async (socket) => {
  console.log("new user connected", socket.id);

  socket.on("addUser", async (user: IUserDetails) => {
    onlineUsers.push({ ...user, socketId: socket.id });
    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("send-message", (message: IMessage) => {
    messages.push(message.message);
    io.emit("get-message", message);
  });
});

/**
 * io.listen(PORT)
 * we use the same httpServer
 * It contains the express app instance.
 * It also listens to the same port
 */
httpServer.listen(PORT, () => {
  console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`);
});
