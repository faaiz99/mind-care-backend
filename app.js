import express from "express"
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import { connect } from './src/config/db.config.js'

dotenv.config()
connect()
const { PORT } = process.env;
const baseUrl = '/api/v1'



// API Docs //

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";

const options = {
	definition: {
		info: {
			title: "Mind Care",
			version: "v1",
			description:
				"API Documentation",
			contact: {
				name: "Mind Care",
			},
		},
		servers: [
			{
				url: "http://localhost:8080/api/v1/",
			},
		],
	},
	apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

// Router //

import { therapistRouter } from "./src/routes/therapist/therapist.route.js"
import { adminRouter } from './src/routes/admin/admin.route.js'
import { clientRouter} from './src/routes/client/client.route.js'

// const therapistRouter = require('./src/routes/therapist/therapist.route')
// const clientRouter = require('./src/routes/client/client.route')
// const adminRouter = require('./src/routes/admin/admin.route')



const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Documentation Setup //

app.use(`${baseUrl}/api-docs`, swaggerUi.serve);
app.get(`${baseUrl}/api-docs`, swaggerUi.setup(swaggerSpec));

// CORS Policy //
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get(`${baseUrl}`, (req, res) => {
	res.send('Mind Care API')
})

// Entry Points for Users //

app.use(`${baseUrl}/client`, clientRouter)
app.use(`${baseUrl}/therapist`, therapistRouter)
app.use(`${baseUrl}/admin`, adminRouter)

app.listen(PORT, () => {
	console.log(`Mind Care Backend on port ${PORT}`)
})




