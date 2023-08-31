import { Request, Response, RequestHandler, NextFunction } from 'express'

import { renewTokenService, loginService, signupService, aboutAdmin } from '../services/admin.service.ts'


export const index: RequestHandler = async (req:Request, res:Response)=>{
	res.status(200).json({status:"success", message:"Admin Home"})
}

export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { accessToken, refreshToken, data } = await loginService(req.body.email, req.body.password)
		res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken, data });
	} catch (error) {
		next(error)
		res.status(409).json({ status: "fail" });
	}
}
export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data= await signupService(req.body)
		res.status(200).json({ status: 'success', message: "Admin Account created", data });
	} catch (error) {
		next(error)
		res.status(409).json({ status: "error", message: error });
	}
}
export const renewToken: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { accessToken, refreshToken, data } = await renewTokenService(req.body.user)
		res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken, data });
	} catch (error) {
		next(error)
		res.status(409).json({ status: "fail" });
	}
}

export const about: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await aboutAdmin(req.params.id)
		res.status(200).json({ status: 'success', message: "Admin Account found", data });

	} catch (error) {
		next(error)
		res.status(409).json({ status: "fail", message: 'Admin Account not found' });

	}
}