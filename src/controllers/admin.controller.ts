import { Request, Response, NextFunction, RequestHandler } from 'express'

import { Admin } from '../models/admin/admin.model.js'

import { issueTokens } from '../middlewares/auth.middleware.js'

export const login:RequestHandler = async (req:Request, res:Response) => {
	const admin = await Admin.findOne({
		email: req.body.email,
		password: req.body.password,
	})
	if (admin == null || admin == undefined)
		return res.json({ status: 404, message: "Account does not exist" })
	const tokens = issueTokens(admin)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}
export const signup:RequestHandler  = async (req:Request, res:Response) => {
	console.log(req)
	try {
		const admin = await Admin.create(req.body);
		res.json({ status: 200, message: "admin Account created" });
	} catch (err) {
		res.json({ status: "error", message: err });
	}
}
export const renewTokens:RequestHandler  = (req:Request, res:Response, next:NextFunction) => {
	const admin = req // req.user
	const tokens = issueTokens(admin)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}