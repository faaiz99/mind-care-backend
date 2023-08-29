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
		res.status(200).json({ status: 'success', message: 'Account Password Changed' })
	} catch (error) {
		res.status(409).json({ status: 'failed', message: 'Account Password Could not be Changed' })
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
		res.status(200).json({ status: 'success', message: 'Account successfully verified' })
	} catch (error) {
		res.status(500).json({ status: 'failed', message: 'Account could not be verified' })
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
		return res.status(404).json({ status: 'failed', message: "Account does not exists" })
	}
	let client;
	if (exists) {
		// get therapist details if password is correct
		client = await Client.findOne({
			email: req.body.email,
			password: req.body.password,
		})
		// delete client?.password
		if (client == null || client == undefined)
			return res.status(401).json({ status: 'failed', message: "Incorrect password" })
	}
	// setting password to undefined for security purposes

	const tokens = issueTokens(client)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined && client !== null) {
		// pending
		//client.password = ''
		return res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, client });
	}
	// Wont execute
	else
		return res.status(500).json({ status: 'failed', message: 'Server Error' });
}
export const signup: RequestHandler = async (req: Request, res: Response) => {

	// check existance by email
	const exists = await Client.exists({
		email: req.body.email
	})
	// email exists
	//console.log('Email exists? ', exists)
	if (exists != null || exists != undefined) {
		res.status(409).json({ status: 'success', message: "Email already exists!" })
	}
	let result;
	try {
		result = await Client.create(req.body);
		if (result != null || result != undefined)
		res.status(200).json({ status: 'success', message: "Client Account created", result });
	} catch (error) {
		console.log('Client account could not be created', error)
		res.status(409).json({ status: 'failed', message:"Client Account could not be created" , result});
	}

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