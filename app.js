import express from "express"
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";

import { connect } from './src/config/db.config.js'
import { therapistRouter } from "./src/routes/therapist/therapist.route.js"
import { adminRouter } from './src/routes/admin/admin.route.js'
import { clientRouter } from './src/routes/client/client.route.js'
import { options } from './src/utils/swagger.util.js'
import { corsPolicy } from "./src/utils/cors.util.js";

dotenv.config()

// Database Connection //
connect()

const { PORT } = process.env;
const baseUrl = '/api/v1'
const app = express();
const swaggerSpec = swaggerJSDoc(options);

// API Documentation Setup //
app.use(`${baseUrl}/api-docs`, swaggerUi.serve);
app.get(`${baseUrl}/api-docs`, swaggerUi.setup(swaggerSpec));

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
app.get(`${baseUrl}`, (req, res) => {
	res.send('Mind Care API')
})

app.listen(PORT, () => {
	console.log(`Mind Care Backend on port ${PORT}`)
})




