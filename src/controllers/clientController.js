const Client = require('../models/client')
const issueTokens = require('../middlewares/auth').issueTokens
const emailSender = require('../utils/sendmail').emailSender
const resetPassword = require('../utils/sendmail').resetPassword
const crypto = require("crypto");

exports.enternewPassword = async (req, res) => {

	// Can also be used to change password from profile
	var email = req.body.email;
	var password = req.body.password
	const client = await Client.findOneAndUpdate({
		email: email
	}, {
		password: password
	}
	)
	res.json({ status: 200, message: 'Account Password Changed' })
}
exports.resetPassword = async (req, res, next) => {
	var email = req.body.email;
	const client = await Client.findOne({
		email: email
	})
	if (client == null || client == undefined)
		return res.json({ status: 404, message: "Account does not exist" })
	var token = crypto.randomBytes(32).toString("hex")
	var role = 'client'
	resetPassword(email, token, role)
	next()
}
exports.verifyAccount = async (req, res) => {
	const client = await Client.findOneAndUpdate({
		email: req.body.email,
	}, {
		verifiedAccount: true
	}, {
		new: true
	})
	res.json({ status: 200, message: 'Account successfully verified' })
}
exports.sendverificationEmail = async (req, res, next) => {
	var token = crypto.randomBytes(32).toString("hex")
	var role = 'client'
	emailSender(email, token, role)
	next()
}
exports.Login = async (req, res) => {
	// check existance by email
	var exists = await Client.exists({
		email: req.body.email
	})

	// email exists
	//console.log('Email exists? ', exists)
	if (exists == null || exists == undefined) {
		return res.json({ status: 404, message: "Account does not exists" })
	}
	var client;
	if (exists) {
		// get therapist details if password is correct
		client = await Client.findOne({
			email: req.body.email,
			password: req.body.password,
		})
		if (client == null || client == undefined)
			return res.json({ status: 401, message: "Incorrect password" })
	}
	// setting password to undefined for security purposes
	client.password = undefined
	const tokens = issueTokens(client)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: 200, accessToken: accessToken, refreshToken: refreshToken, client });
	}
	// Wont execute
	else
		return res.json({ status: 500, message: 'Server Error' });
}
exports.Signup = async (req, res) => {
	const client = req.body
	// check existance by email
	var exists = await Client.exists({
		email: req.body.email
	})
	// email exists
	//console.log('Email exists? ', exists)
	if (exists != null || exists != undefined) {
		return res.json({ status: 409, message: "Email already exists!" })
	}
	var result;
	try {
		result = await Client.create(req.body);
	} catch (error) {
		console.log('Client account could not be created', error)
		// res.json({ status: 200, message:"Therapist Account created" , result});
	}
	if (result != null || result != undefined)
		res.json({ status: 200, message: "Client Account created", result });
}
exports.renewTokens = (req, res, next) => {
	const client = req.user.user
	const tokens = issueTokens(client)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}