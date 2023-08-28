import { Request, Response, NextFunction, RequestHandler } from 'express'
import { Client } from '../models/client/client.model.ts'
import { issueTokens } from '../middlewares/auth.middleware.ts'
import { emailSender, resetAccountPassword } from '../utils/sendmail.util.ts'
import crypto from 'crypto'

export const enternewPassword: RequestHandler = async (req: Request, res: Response) => {

	try {
		// Can also be used to change password from profile
		const email = req.body.email;
		const password = req.body.password
		await Client.findOneAndUpdate({
			email: email
		}, {
			password: password
		}
		)
		res.json({ status: 200, message: 'Account Password Changed' })
	} catch (error) {
		res.json({ status: 500, message: 'Account Password Could not be Changed' })
	}
}
export const resetPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	const email = req.body.email;
	const client = await Client.findOne({
		email: email
	})
	if (client == null || client == undefined)
		return res.json({ status: 404, message: "Account does not exist" })
	const token = crypto.randomBytes(32).toString("hex")
	const role = 'client'
	resetAccountPassword(email, token, role)
	next()
}
export const verifyAccount: RequestHandler = async (req: Request, res: Response) => {
	try {
		await Client.findOneAndUpdate({
			email: req.body.email,
		}, {
			verifiedAccount: true
		}, {
			new: true
		})
		res.json({ status: 200, message: 'Account successfully verified' })
	} catch (error) {
		res.json({ status: 500, message: 'Account could not be verified' })
	}
}
export const sendverificationEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	const token = crypto.randomBytes(32).toString("hex")
	const role = 'client'
	const email = req.body.email
	emailSender(email, token, role)
	next()
}
export const login = async (req: Request, res: Response) => {
	// check existance by email
	const exists = await Client.exists({
		email: req.body.email
	})
	// email exists
	//console.log('Email exists? ', exists)
	if (exists == null || exists == undefined) {
		return res.json({ status: 404, message: "Account does not exists" })
	}
	let client;
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

	const tokens = issueTokens(client)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined && client !== null) {
		// pending
		//client.password = ''
		return res.json({ status: 200, accessToken: accessToken, refreshToken: refreshToken, client });
	}
	// Wont execute
	else
		return res.json({ status: 500, message: 'Server Error' });
}
export const signup: RequestHandler = async (req, res) => {

	// check existance by email
	const exists = await Client.exists({
		email: req.body.email
	})
	// email exists
	//console.log('Email exists? ', exists)
	if (exists != null || exists != undefined) {
		return res.json({ status: 409, message: "Email already exists!" })
	}
	let result;
	try {
		result = await Client.create(req.body);
	} catch (error) {
		console.log('Client account could not be created', error)
		// res.json({ status: 200, message:"Therapist Account created" , result});
	}
	if (result != null || result != undefined)
		res.json({ status: 200, message: "Client Account created", result });
}
export const renewTokens: RequestHandler = (req: Request, res: Response) => {
	const client = req.body.user // req.user.user
	const tokens = issueTokens(client)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}