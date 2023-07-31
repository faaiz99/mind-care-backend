const express = require("express");
require("dotenv").config();
require("./src/config/db.config").connect();
const { PORT } = process.env;
const baseUrl = '/api/v1'

// API Docs //

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc')
const options = {
	definition: {
		info: {
			title: "Mind Care",
			version: "v1",
			description:
				"Mind Care API Documentation",
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

const swaggerSpec = swaggerJsdoc(options);

// Router //

const therapistRouter = require('./src/routes/therapist/therapist.route')
const clientRouter = require('./src/routes/client/client.route')
const adminRouter = require('./src/routes/admin/admin.route')

const bodyParser = require("body-parser");

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




