const { PORT } = process.env;
import { httpServer } from './src/app.js'

// Socket IO Setup 
import { Server } from 'socket.io'
import { socketOptionsCors } from './src/configs/socket/config.js'
import { IUserDetails, IMessage } from './src/types/IChat.js';
import { log } from 'console';

import { createMessage, createChat, getClientChats, getTherapistChats } from './src/services/teletherapy.service.js';

const io = new Server(httpServer, socketOptionsCors);

let onlineUsers: Array<IUserDetails> = [];
const chatSessions: Array<{
  sessionId: string;
  messages: Array<IMessage>
}> = [];

io.on("connection", async (socket) => {
  socket.on("disconnect", () => {
    socket.emit("callEnded");
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);


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
    console.log('length', onlineUsers.length)
  
    // Check if there are at least two online users to create a chat session
    if (onlineUsers.length >= 2) {
      const clientUser = onlineUsers.find((user) => user.role === "client");
      const therapistUser = onlineUsers.find((user) => user.role === "therapist");
  
      if (clientUser && therapistUser) {
        // Create a single chat session with the same session ID for both users
        const sessionId = `${clientUser.userId}-${therapistUser.userId}`;
        
        // Check if the chat session already exists
        let chatSession = chatSessions.find((session) => session.sessionId === sessionId);
  
        if (!chatSession) {
          // If the chat session doesn't exist, create it
          chatSession = {
            sessionId,
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
      (user) => user.socketId === socket.id
    );
  
    if (sender) {
      const recipient = onlineUsers.find(
        (user) => user.userId === message.recipientId
      );
  
      if (recipient && recipient.socketId) {
        const newMessage = {
          senderId: sender.userId,
          senderRole: sender.role,
          text: message.text,
          timestamp: new Date().toISOString(),
        };
  
        // Send the message only to the recipient
        io.to(recipient.socketId).emit("messageReceived", newMessage);
  
        const sessionId = ''
        const chatSession = chatSessions.find((session) => session.sessionId === sessionId);
        if (chatSession) {
          chatSession.messages.push(newMessage as IMessage);
        } else {
          // Create a new chat session if it doesn't exist
          chatSessions.push({
            sessionId,
            messages: [newMessage as IMessage],
          });
        }
        console.log('Chat Session: ', chatSession)
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

  // Helper function to get the chat history for a user based on their role
  async function getChatHistoryForUser(userId: string) {
    const userRole = onlineUsers.find((user) => user.userId === userId)?.role;
    if (userRole === "client") {
      return await getClientChats(userId);
    } else if (userRole === "therapist") {
      return await getTherapistChats(userId);
    }
    return [];
  }
})

/**
 * io.listen(PORT)
 * we use the same httpServer
 * It contains the express app instance. 
 * It also listens to the same port
 */

httpServer.listen(PORT, () => {
  console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
});

