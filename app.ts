
import dotenv from 'dotenv'
import express from "express"
import bodyParser from "body-parser"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";
import { Application } from 'express'
import { connect } from './src/config/db.config.ts'
import { therapistRouter } from "./src/routes/therapist/therapist.route.ts"
import { adminRouter } from './src/routes/admin/admin.route.ts'
import { clientRouter } from './src/routes/client/client.route.ts'
import { options } from './src/utils/swagger.util.ts'
import { corsPolicy } from "./src/utils/cors.util.ts";
import { Server } from 'socket.io'
import { socketOptionsCors } from './src/config/socket.config.ts'
import { createServer } from "http";

// import compression from 'compression'

dotenv.config()

// Database Connection //
connect()

const { PORT } = process.env;
const { CHAT } = process.env
const baseUrl: string = '/api/v1'
const app: Application = express();
const swaggerSpec = swaggerJSDoc(options);

// app.use(compression)

// API Documentation Setup //
app.use(`${baseUrl}/docs`, swaggerUi.serve);
app.get(`${baseUrl}/docs`, swaggerUi.setup(swaggerSpec));

// Router //
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Policy //
app.use(corsPolicy);

// Entry Points for Users //
app.use(`${baseUrl}/client`, clientRouter)
app.use(`${baseUrl}/therapist`, therapistRouter)
app.use(`${baseUrl}/admin`, adminRouter)

// Main Endpoint //
app.get(`${baseUrl}`, (req, res): void => {
	res.send('Mind Care API')
})


// Export Server for Unit Tests

export const server = app.listen(PORT, () => {
	console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
})

// Socket IO Setup 

const httpServer = createServer(app);
const io = new Server(httpServer, socketOptionsCors);

io.on("connection", (socket) => {
	// previous chat
	console.log("We are live and connected");
	console.log(socket.id);
	socket.emit('message', 'Hello World')
	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
	socket.on('chatmessage', msg => {
		//const message = new Mesg()
		console.log('here')
		io.emit('message', msg)
	})
});

httpServer.listen(CHAT, () => {
	console.log(`Chat on port ${CHAT}`);
});

export default app