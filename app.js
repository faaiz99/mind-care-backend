require("dotenv").config();
require("./src/config/db").connect();
const therapistRouter = require('./src/routes/therapist')
const clientRouter = require('./src/routes/client')
const adminRouter = require('./src/routes/admin')
const bodyParser = require("body-parser");
const express = require("express");
const { API_PORT, PORT, JWT_SECRET } = process.env;
const baseUrl = '/api/v1'
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var User = require("./src/models/user");



app.get(`${baseUrl}`, (req, res) => {
	res.send('Hello World!')
})

app.get(`${baseUrl}/login`,(req,res)=>{
	res.send('Login!')
})

// app.get("/dashboard", auth, (req, res) => {
// 	console.log("i've reached dashboard ");
// 	// console.log("user: ", req.user);
// 	console.log("username:  ", req.body.username);
// 	// console.log(req.body.Authorization);
// 	console.log("req body: ", req.body);
// 	const username = User.find({ name: req.body.name }).exec();
// 	res.setHeader("Content-Type", "application/json");
//   });

// app.post("/signup", async (req, res) => {
// 	console.log(req.body);
// 	try {
// 	//   const user = await User.create(req.body);
// 	  res.json({ status: "ok" });
// 	} catch (err) {
// 	  res.json({ status: "error" });
// 	}
//   });

// app.post("/login", async (req, res) => {
// 	console.log("login body: ", req.body);
// 	console.log("req body: ", req.body);
// 	if (req.body) {
// 	  console.log("if user: ", req.body);
// 	  const token = jwt.sign(
// 		{
// 		  name: req.firstName,
// 		  email: req.email,
// 		},
// 		process.env.ACCESS_TOKEN_SECRET
// 	  );
// 	  return res.json({ status: "ok", token: token, firstName: firstName });
// 	} else {
// 	  return res.json({ status: "error", token: false });
// 	}
//   });

  

// app.post(`${baseUrl}/login`,(req,res)=>{

// 	// auth user

// 	const user = {name:'hello'}

// 	const accessToken = jwt.sign(user, JWT_SECRET)
// 	res.json({accessToken:accessToken})
// })

app.use(`${baseUrl}/client`,clientRouter)
app.use(`${baseUrl}/therapist`, therapistRouter)
app.use(`${baseUrl}/admin`, adminRouter)

app.listen(PORT, () => {
	console.log(`Mind Care Backend on port ${PORT}`)
})


