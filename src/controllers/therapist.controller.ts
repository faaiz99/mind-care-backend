import { Request, Response, NextFunction, RequestHandler } from 'express'
import { Therapist } from '../models/therapist/therapist.model.ts'
import { issueTokens } from '../middlewares/auth.middleware.ts'
import { emailSender, resetAccountPassword } from '../utils/sendmail.util.ts'

import crypto from 'crypto'

export const changePassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const email = req.body.email;
	const password = req.body.password
	let data;
	try {
		data = await Therapist.findOneAndUpdate({
			email: email
		}, {
			password: password
		})
	} catch (error) {
		console.log('Therapist Account Password could not be changed', error)
		next(error)
	}
	res.status(200).json({ status: 'success', message: 'Account Password Changed', data:data})
}
export const updateProfile: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	//A therapist profile already exists
	const newProfile = req.body
	const filter = req.body.email;
	let data
	try {
		data = await Therapist.findOneAndUpdate(filter, newProfile, {
			returnOriginal: false
		})
	} catch (error) {
		console.log('Therapist Profile could not be updated', error)
		next(error)
		//res.status(500).json({ status: 'failed'message: 'Therapist Profile could not be updated', error })
	}
	if (data != null || data != undefined) {
		res.status(200).json({ status: 'success', message: "Therapist Profile updated", data:data });
	}
	// Wont execute 99%
	else
		res.status(500).json({ status: 'failed', message: 'Server Error' });
}
export const enternewPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const email = req.body.email;
	const password = req.body.password
	try {
		await Therapist.findOneAndUpdate({
			email: email
		}, {
			password: password
		}
		)
		res.status(200).json({ status: 'success', message: 'Account Password Changed' })
	} catch (error) {
		next(error)
	}
}
export const resetPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const email = req.body.email;
	const therapist = await Therapist.findOne({
		email: email
	})
	if (therapist == null || therapist == undefined)
		res.json({ status: 404, message: "Account does not exist" })
	const token = crypto.randomBytes(32).toString("hex")
	const role = 'therapist'
	resetAccountPassword(email, token, role)
	next()
}
export const verifyAccount: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		await Therapist.findOneAndUpdate({
			email: req.body.email,
		}, {
			verifiedAccount: true
		}, {
			new: true
		})
		res.status(200).json({ status: 'success', message: 'Account successfully verified' })
	} catch (error) {
		next(error)
	}
}
export const sendverificationEmail: RequestHandler = async (req: Request, res: Response): Promise<void> => {
	const token = crypto.randomBytes(32).toString("hex")
	const role = 'therapist'
	const email = req.body.email
	const emailPreview = emailSender(email, token, role)
	res.status(200).json({ status: 'success', message: 'Email Verification Sent', emailPreview })

}
export const login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
	// check existance by email
	const exists = await Therapist.exists({
		email: req.body.email
	})

	// email exists
	//console.log('Email exists? ', exists)
	if (exists == null || exists == undefined) {
		res.json({ status: 404, message: "Account does not exists" })
	}
	let therapist;
	if (exists) {
		// get therapist details if password is correct
		therapist = await Therapist.findOne({
			email: req.body.email,
			password: req.body.password,
		})
		// yet to be fixed 
		//delete therapist?.password
		if (therapist == null || therapist == undefined)
			res.json({ status: 401, message: "Incorrect password" })
	}
	const tokens = issueTokens(therapist)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, therapist });
	}
}
export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	// check existance by email
	const exists = await Therapist.exists({
		email: req.body.email
	})
	// email exists
	//console.log('Email exists? ', exists)
	if (exists != null || exists != undefined) {
		res.status(409).json({ status: 'success', message: "Email already exists!" })
	}
	let data;
	try {
		data = await Therapist.create(req.body);
	} catch (error) {
		console.log('Therapist Account could not be created', error)
		next(error)
	}
	if (data != null || data != undefined)
		res.status(200).json({ status: 'success', message: "Therapist Account created", data: data });
}
export const renewTokens: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const therapist = req.body.user
	const tokens = issueTokens(therapist)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		next()
}

export const getTherapists: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await Therapist.find({})
		res.status(200).json({ status: 'success', message: "Therapists Found", data: data })
	} catch (error) {
		console.log(error)
		next(error)
	}
}

export const getTherapistById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await Therapist.find({ _id: req.params.id })
		res.status(200).json({ status: 'success', message: "Therapists Found", data: data })
	} catch (error) {
		console.log(error)
		next(error)
	}
}