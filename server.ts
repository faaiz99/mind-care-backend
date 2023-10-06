import { httpServer } from './src/app.js'
const { PORT } = process.env;

import { Server } from 'socket.io'
import { socketOptionsCors } from './src/configs/socket/config.ts'
//import { httpServer } from '../../app.ts';


const io = new Server(httpServer, socketOptionsCors);

interface IUserDetails  {
	socketId:string,
	userId:string
}

let onlineUsers:Array<IUserDetails> = []

io.on("connection", (socket) => {
	//console.log(socket.id)
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
		onlineUsers = onlineUsers.filter ((user)=> user.socketId !==socket.id)
		io.emit("getOnlineUsers", onlineUsers)
	})

	socket.on("addNewUser", (userId)=>{
		console.log(userId)
		!onlineUsers.some(user => user.userId === userId) &&
		onlineUsers.push({
			userId,
			socketId:socket.id
		})
		io.emit("getOnlineUsers", onlineUsers)
	})

	socket.on("sendMessage", (message)=>{
		const user = onlineUsers.find((user)=> user.userId === message.recipentId)
		if(user)
			io.to(user.socketId).emit("getMessage", message)
	})

	socket.on("test", (test)=>{
		console.log(test)
		io.to(test.socketId).emit("getMessage", test)
	})


	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

io.listen(8081)

httpServer.listen(PORT, () => {
	console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
});

