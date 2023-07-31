import { Admin } from '../models/admin/admin.model.js'

import { issueTokens } from '../middlewares/auth.middleware.js'

export const login = async (req, res) => {
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
export const signup = async (req, res) => {
	console.log(req)
	try {
		const admin = await Admin.create(req.body);
		res.json({ status: 200, message: "admin Account created" });
	} catch (err) {
		res.json({ status: "error", message: err });
	}
}
export const renewTokens = (req, res, next) => {
	const admin = req.user.user
	const tokens = issueTokens(admin)
	const { accessToken, refreshToken } = tokens
	if (tokens != null || tokens != undefined) {
		return res.json({ status: "OK", accessToken: accessToken, refreshToken: refreshToken });
	}
	else
		return res.json({ status: "error", user: false });
}