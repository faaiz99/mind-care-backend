require("dotenv").config();
require("./src/config/db").connect();
const therapistRouter = require('./src/routes/therapist')
const clientRouter = require('./src/routes/client')
const adminRouter = require('./src/routes/admin')
const bodyParser = require("body-parser");
const express = require("express");
const {PORT} = process.env;
const baseUrl = '/api/v1'
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`${baseUrl}`, (req, res) => {
	res.send('Admin Login')
})

app.use(`${baseUrl}/client`, clientRouter)
app.use(`${baseUrl}/therapist`, therapistRouter)
app.use(`${baseUrl}/admin`, adminRouter)

app.listen(PORT, () => {
	console.log(`Mind Care Backend on port ${PORT}`)
})


