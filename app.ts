
import dotenv from 'dotenv'
import express from "express"
import { Application } from 'express'
import bodyParser from "body-parser"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";
import { connect } from './src/config/db.config.ts'
import { therapistRouter } from "./src/routes/therapist/therapist.route.ts"
import { adminRouter } from './src/routes/admin/admin.route.ts'
import { clientRouter } from './src/routes/client/client.route.ts'
import { options } from './src/utils/swagger.util.ts'
import { corsPolicy } from "./src/utils/cors.util.ts";
import { Server} from 'socket.io'



// import compression from 'compression'

dotenv.config()

// Database Connection //
connect()

const { PORT } = process.env;
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
app.get(`${baseUrl}`, (req, res):void => {
	res.send('Mind Care API')
})



export const server = app.listen(PORT, () => {
	console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
})

const io = new Server(server)
io.on('connection', function (socket) {
	socket.emit('greeting-from-server', {
		greeting: 'Hello Client'
	});
	socket.on('greeting-from-client', function (message) {
		console.log(message);
	});
  });

export default  app