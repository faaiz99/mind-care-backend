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
	const client = await Client.findOne({
		email: req.body.email,
		password: req.body.password,
	})
	if (client == null || client == undefined)
		return res.json({ status: 404, message: "Account does not exist" })
	const tokens = issueTokens(client)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}
exports.Signup = async (req, res) => {
	console.log(req)
	try {
		const client = await Client.create(req.body);
		res.json({ status: 200, message: "Client Account created" });
	} catch (err) {
		res.json({ status: "error" });
	}
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