const express = require("express");
require ("dotenv").config();
require("./src/config/db").connect();
const {PORT} = process.env;
const baseUrl = '/api/v1'

const therapistRouter = require('./src/routes/therapist')
const clientRouter = require('./src/routes/client')
const adminRouter = require('./src/routes/admin')
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
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


