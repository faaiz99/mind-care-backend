const Therapist = require('../models/therapist.model')
const issueTokens = require('../middlewares/auth').issueTokens
const emailSender = require('../utils/sendmail').emailSender
const resetPassword = require('../utils/sendmail').resetPassword
const crypto = require("crypto");


exports.changePassword = async (req, res, next) => {
	console.log('fn changePassword')
	var email = req.body.email;
	var password = req.body.password
	var result;
	try {
		result = await Therapist.findOneAndUpdate({
			email: email
		}, {
			password: password
		})
	} catch (error) {
		console.log('Therapist Account Password could not be changed', error)
		next(error)
	}
	res.json({ status: 200, message: 'Account Password Changed', result })
}

exports.updateProfile = async (req, res, next) => {
	//A therapist profile already exists
	var newProfile = req.body
	var filter = req.body.email;
	var result
	try {
		result = await Therapist.findOneAndUpdate(filter, newProfile, {
			returnOriginal: false
		})
	} catch (error) {
		console.log('Therapist Profile could not be updated', error)
		next(error)
		//res.json({ status: 500, message: 'Therapist Profile could not be updated', error })
	}
	if (result != null || result != undefined) {
		return res.json({ status: 200, message: "Therapist Profile updated", result });
	}
	// Wont execute 99%
	else
		return res.json({ status: 500, message: 'Server Error' });
}
exports.enternewPassword = async (req, res, next) => {
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
exports.verifyAccount = async (req, res, next) => {
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
	var emailPreview = emailSender(email, token, role)
	res.json({ status: 200, message: 'Email Verification Sent', emailPreview })
	//next()
}
exports.Login = async (req, res, next) => {
	// check existance by email
	var exists = await Therapist.exists({
		email: req.body.email
	})

	// email exists
	//console.log('Email exists? ', exists)
	if (exists == null || exists == undefined) {
		return res.json({ status: 404, message: "Account does not exists" })
	}
	var therapist;
	if (exists) {
		// get therapist details if password is correct
		therapist = await Therapist.findOne({
			email: req.body.email,
			password: req.body.password,
		})
		if (therapist == null || therapist == undefined)
			return res.json({ status: 401, message: "Incorrect password" })
	}
	const tokens = issueTokens(therapist)
	therapist.password = undefined
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: 200, accessToken: accessToken, refreshToken: refreshToken, therapist });
	}
	// Wont execute
	else
		return res.json({ status: 500, message: 'Server Error' });
}
exports.Signup = async (req, res, next) => {
	const therapist = req.body
	// check existance by email
	var exists = await Therapist.exists({
		email: req.body.email
	})
	// email exists
	//console.log('Email exists? ', exists)
	if (exists != null || exists != undefined) {
		return res.json({ status: 409, message: "Email already exists!" })
	}
	var result;
	try {
		result = await Therapist.create(req.body);
	} catch (error) {
		console.log('Therapist Account could not be created', error)
		// res.json({ status: 200, message:"Therapist Account created" , result});
		next(error)
	}
	if (result != null || result != undefined)
		res.json({ status: 200, message: "Therapist Account created", result });
}
exports.renewTokens = (req, res, next) => {
	const therapist = req.user.user
	const tokens = issueTokens(therapist)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}