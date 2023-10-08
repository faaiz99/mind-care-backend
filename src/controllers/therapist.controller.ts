import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as therapistService from '../services/therapist.service.js'
import { IToken } from '../types/ITokens.js'
import { handleError } from '../middlewares/error/middleware.js'

export const changePassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	try {
		const data = therapistService.changePassword(req.body.email, req.body.password)
		res.status(200).json({ status: 'success', message: 'Account Password Changed', data })
	} catch (error) {
		res.status(409).json({ status: 'success', message: 'Account Password cannot be Changed' })
		handleError(error, res, next);
	}
}
export const updateProfile: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await therapistService.updateProfile(req.body)
		res.status(200).json({ status: 'success', message: "Therapist Profile updated", data });
	} catch (error) {
		res.status(409).json({ status: 'failure', message: 'Therapist Profile could not be updated' })
		handleError(error, res, next);
	}
}
export const enterNewPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await therapistService.enterNewPassword(req.body.email, req.body.password)
		res.status(200).json({ status: 'success', message: 'Account Password Changed', data })
	} catch (error) {
		res.status(409).json({ status: 'failure', message: 'Account Password could not be Changed' })
		handleError(error, res, next);
	}
}
export const resetPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	try {
		const data = await therapistService.resetPassword(req.body.email)
		res.status(200).json({ status: 'success', message: "Reset Email Sent", data })
		next()
	} catch (error) {
		res.status(404).json({ status: 'failure', message: "Account does not exist" })
		handleError(error, res, next);
	}

}
export const verifyAccount: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await therapistService.verifyAccount(req.body.email)
		res.status(200).json({ status: 'success', message: 'Account successfully verified', data })

	} catch (error) {
		res.status(500).json({ status: 'failed', message: 'Account could not be verified' })
		handleError(error, res, next);
	}
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendVerificationEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	therapistService.sendVerificationEmail(req.body.email)
	next()
}
export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { accessToken, refreshToken, data }: IToken = await therapistService.login(req.body.email, req.body.password)
		res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, data });

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		if (error.message === 'Incorrect Password')
			res.status(401).json({ status: 'failed', message: "Incorrect password" })
		else if (error.message === 'Account does not exists')
			res.status(404).json({ status: 'failed', message: "Account does not exists" })
		else
			handleError(error, res, next);
	}
}
export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	try {
		const data = await therapistService.signup(req.body)
		res.status(200).json({ status: 'success', message: "Therapist Account created", data });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		if (error.message === 'Email already in database')
			res.status(409).json({ status: 'success', message: "Email already exists!" })
		else if (error.message === 'account could not be created')
			res.status(409).json({ status: 'failed', message: "Therapist Account could not be created" });
		else
			handleError(error, res, next);

	}
}
export const renewTokens: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { accessToken, refreshToken, data } = await therapistService.renewTokens(req.body.user)
		res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken, data });
	} catch (error) {
		res.status(409).json({ status: "fail" });
		handleError(error, res, next);
	}
}


export const about: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await therapistService.aboutTherapist(req.params.id)
		res.status(200).json({ status: 'success', message: "Client Account found", data });

	} catch (error) {
		res.status(409).json({ status: "fail", message: 'Client Account not found' });
		handleError(error, res, next);
	}
}
