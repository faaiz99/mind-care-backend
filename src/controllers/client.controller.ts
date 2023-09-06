
import { Request, Response, NextFunction, RequestHandler } from 'express'
import { Token } from '../Types/Tokens.js'
import * as clientService from '../services/client.service.ts'

export const enternewPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await clientService.enternewPassword(req.body.email, req.body.password)
		res.status(200).json({ status: 'success', message: 'Account Password Changed', data })
	} catch (error) {
		res.status(409).json({ status: 'failed', message: 'Account Password Could not be Changed' })
		next(error)
	}
}
export const resetPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction) :Promise<void>=> {
	try {
		const data = await clientService.resetPassword(req.body.email)
		res.status(200).json({ status: 'success', message: 'Account Password Updated', data })
	} catch (error) {
		res.status(404).json({ status: 'failure', message: "Account does not exist" })
		next(error)
	}
	next()
}
export const verifyAccount: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await clientService.verifyAccount(req.body.email)
		res.status(200).json({ status: 'success', message: 'Account successfully verified', data })

	} catch (error) {
		res.status(500).json({ status: 'failed', message: 'Account could not be verified' })
		next(error)
	}

}
export const sendverificationEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	clientService.sendverificationEmail(req.body.email)
	next()
}
export const login = async (req: Request, res: Response, next: NextFunction):Promise<void> => {

	try {
		const { accessToken, refreshToken, data }: Token = await clientService.login(req.body.email, req.body.password)
		res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, data });

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		if (error.message === 'Incorrect Password')
			res.status(401).json({ status: 'failed', message: "Incorrect password" })
		else if (error.message === 'Account does not exists')
			res.status(404).json({ status: 'failed', message: "Account does not exists" })
		else
			next(error)

	}
}
export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {

	try {
		const data = await clientService.signup(req.body)
		res.status(200).json({ status: 'success', message: "Client Account created", data });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {

		if (error.message === 'email already in database')
			res.status(409).json({ status: 'success', message: "Email already exists!" })
		else if (error.message === 'account could not be created')
			res.status(409).json({ status: 'failed', message: "Client Account could not be created" });
		else
			next(error)

	}
}
export const renewToken: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const { accessToken, refreshToken, data } = await clientService.renewTokens(req.body.user)
		res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken, data });
	} catch (error) {
		res.status(409).json({ status: "fail" });
		next(error)
	}
}

export const about: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await clientService.aboutClient(req.params.id)
		res.status(200).json({ status: 'success', message: "Client Account found", data });

	} catch (error) {
		res.status(409).json({ status: "fail", message: 'Client Account not found' });
		next(error)
	}
}


