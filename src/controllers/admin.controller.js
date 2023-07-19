const Admin = require('../models/admin.model')
const issueTokens = require('../middlewares/auth').issueTokens

exports.Login = async (req, res) => {
	const admin = await Admin.findOne({
	  email: req.body.email,
	  password: req.body.password,
	})
	if(admin== null || admin == undefined)
	  return res.json({status:404, message:"Account does not exist"})
	const tokens = issueTokens(admin)
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
	  const admin = await Admin.create(req.body);
	  res.json({ status: 200, message:"admin Account created" });
	} catch (err) {
	  res.json({ status: "error", message:err });
	}
}
exports.renewTokens = (req,res,next)=>{
	const admin = req.user.user
	const tokens = issueTokens(admin)
	const {accessToken, refreshToken} = tokens
	if (tokens != null || tokens != undefined) {
	  return res.json({ status: "OK", accessToken:accessToken, refreshToken:refreshToken });
	}
	else
	  return res.json({ status: "error", user: false });
}