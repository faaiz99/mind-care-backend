const express = require("express");
require ("dotenv").config();
require("./src/config/db").connect();
const {PORT} = process.env;
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

const therapistRouter = require('./src/routes/therapist')
const clientRouter = require('./src/routes/client')
const adminRouter = require('./src/routes/admin')
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${baseUrl}/api-docs`, swaggerUi.serve);
app.get(`${baseUrl}/api-docs`, swaggerUi.setup(swaggerSpec));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
  });

app.get(`${baseUrl}`, (req, res) => {
	res.send('Admin Login')
})

app.use(`${baseUrl}/client`, clientRouter)
app.use(`${baseUrl}/therapist`, therapistRouter)
app.use(`${baseUrl}/admin`, adminRouter)

app.listen(PORT, () => {
	console.log(`Mind Care Backend on port ${PORT}`)
})


