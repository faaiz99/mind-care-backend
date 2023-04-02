const Therapist = require('../models/therapist')
const issueTokens = require('../middlewares/auth').issueTokens
const emailSender = require('../utils/sendmail').emailSender
const resetPassword = require('../utils/sendmail').resetPassword
const crypto = require("crypto");


exports.enternewPassword = async (req, res) => {
	var email = req.body.email;
	var password = req.body.password
	const therapist = await Therapist.findOneAndUpdate({
		email: email
	}, {
		password: password
	}
	)
	res.json({ status: 200, message: 'Account Password Changed' })
}
exports.resetPassword = async (req, res, next) => {
	var email = req.body.email;
	const therapist = await Therapist.findOne({
		email: email
	})
	if (therapist == null || therapist == undefined)
		return res.json({ status: 404, message: "Account does not exist" })
	var token = crypto.randomBytes(32).toString("hex")
	var role = 'therapist'
	resetPassword(email, token, role)
	next()
}
exports.verifyAccount = async (req, res) => {
	const therapist = await Therapist.findOneAndUpdate({
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
	var role = 'therapist'
	emailSender(email, token, role)
	next()
}
exports.Login = async (req, res) => {
	const therapist = await Therapist.findOne({
	  email: req.body.email,
	  password: req.body.password,
	})
	if(therapist== null || therapist == undefined)
	  return res.json({status:404, message:"Account does not exist"})
	const tokens = issueTokens(therapist)
	const {accessToken, refreshToken} = tokens
	if (tokens != null || tokens != undefined) {
	  return res.json({ status: "OK", accessToken: accessToken, refreshToken:refreshToken });
	}
	else
	  return res.json({ status: "error", user: false });
  }
exports.Signup = async (req, res) => {
	console.log(req)
	try {
	  const therapist = await Therapist.create(req.body);
	  res.json({ status: 200, message:"Therapist Account created" });
	} catch (err) {
	  res.json({ status: "error", message:err });
	}
}
exports.renewTokens = (req,res,next)=>{
	const therapist = req.user.user
	const tokens = issueTokens(therapist)
	const {accessToken, refreshToken} = tokens
	if (tokens != null || tokens != undefined) {
	  return res.json({ status: "OK", accessToken:accessToken, refreshToken:refreshToken });
	}
	else
	  return res.json({ status: "error", user: false });
}