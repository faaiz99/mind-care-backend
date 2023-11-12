const { PORT } = process.env;
import { httpServer } from "./src/app.js";
// import { app } from "./src/app.js";
// import { print } from "./src/utils/displayRoute.util.js";

//app._router.stack.forEach(print.bind(null, []))

// Socket IO Setup
import { Server } from "socket.io";
import { socketOptionsCors } from "./src/configs/socket/config.js";
import { IUserDetails, IMessage, IChatSession } from "./src/types/IChat.js";
import {
  createMessage,
  createChat,
} from "./src/services/teletherapy.service.js";

const io = new Server(httpServer, socketOptionsCors);

let onlineUsers: Array<IUserDetails> = [];
const chatSessions: Array<IChatSession> = [];

io.on("connection", async (socket) => {
  socket.on("disconnect", () => {
    socket.emit("callEnded");
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);
    //createMessage(chatSessions)
  });

  socket.on("addNewUser", async ({ userId, role }) => {
    if (!onlineUsers.some((user) => user.userId === userId)) {
      onlineUsers.push({
        userId,
        socketId: socket.id,
        role, // Store the user's role
      });
    }
    io.emit("getOnlineUsers", onlineUsers);
    // Check if there are at least two online users to create a chat session
    if (onlineUsers.length >= 2) {
      const clientUser = onlineUsers.find((user) => user.role === "client");
      const therapistUser = onlineUsers.find(
        (user) => user.role === "therapist",
      );

      if (clientUser && therapistUser) {
        const response = await createChat(onlineUsers);
        console.log("Response get Add User", response);
        // Create a single chat session with the same session ID for both users
        const sessionId = response?._id.toString();
        // Check if the chat session already exists
        let chatSession = chatSessions.find(
          (session) => session.sessionId === sessionId,
        );

        if (!chatSession) {
          // If the chat session doesn't exist, create it
          chatSession = {
            sessionId: response?._id.toString(),
            messages: [],
          };
          chatSessions.push(chatSession);
        }

        // Send chat history to the newly connected users
        socket.emit("chatHistory", chatSession.messages);
        io.to(therapistUser.socketId).emit("chatHistory", chatSession.messages);
      }
    }
  });

  socket.on("sendMessage", async (message) => {
    const sender: IUserDetails | undefined = onlineUsers.find(
      (user) => user.socketId === socket.id,
    );

    if (sender) {
      const recipient = onlineUsers.find(
        (user) => user.userId === message.recipientId,
      );
      const response = await createChat(onlineUsers);
      console.log("Response send Message", response);
      // Create a single chat session with the same session ID for both users
      const Id = response?._id.toString();

      if (recipient && recipient.socketId) {
        const newMessage = {
          sessionId: Id,
          senderId: sender.userId,
          senderRole: sender.role,
          recipientId: recipient.userId,
          recipientRole: recipient.role,
          content: {
            text: message.text,
            timestamp: new Date().toISOString(),
          },
        };

        // Send the message only to the recipient
        io.to(recipient.socketId).emit("messageReceived", newMessage);
        //const response =
        const response = await createChat(onlineUsers);
        const sessionId = response?._id.toString();

        const chatSession = chatSessions.find(
          (session) => session.sessionId === sessionId,
        );
        if (chatSession) {
          chatSession.messages.push(newMessage as IMessage);
        } else {
          // Create a new chat session if it doesn't exist
          chatSessions.push({
            sessionId,
            messages: [newMessage as IMessage],
          });
        }
        createMessage(chatSession as IChatSession);
      }
    }
  });

  socket.on("callUser", (data) => {
    const { userToCall, signalData, sessionId } = data;
    io.to(userToCall).emit("callUser", {
      signal: signalData,
      from: socket.id,
      sessionId,
    });
  });

  socket.on("answerCall", (data) => {
    const { to, signalData, sessionId } = data;
    io.to(to).emit("callAccepted", {
      signal: signalData,
      from: socket.id,
      sessionId,
    });
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
