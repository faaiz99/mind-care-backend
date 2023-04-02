const nodemailer = require("nodemailer");
const { user, pass } = process.env
exports.emailSender = async (email, token, role) => {
	let testAccount = await nodemailer.createTestAccount();
	// create reusable transporter object using the default SMTP transport
	var entryPoint;
	if(role == 'therapist')
		entryPoint = 'therapist'
	else
		entryPoint = 'client' 

	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: user,
			pass: pass
		},
	});
	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: 'support@mindcare.com', // sender address
		to: email, // list of receivers
		subject: "Account Verification", // Subject line
		text: "Please clink on the link below to verify your email", // plain text body
		html: `
		<h3>Reset Password</h3>
		<p>
		Please click on the  <a href="http://localhost:8080/api/v1/${entryPoint}/verify/${token}">link</a> to change your password
		</p>`
	});
	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
exports.resetPassword = async (email, token, role) => {
	let testAccount = await nodemailer.createTestAccount();
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: user,
			pass: pass
		},
	});
	var entryPoint;
	if(role == 'therapist')
		entryPoint = 'therapist'
	else
		entryPoint = 'client' 
	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: 'support@mindcare.com', // sender address
		to: email, // list of receivers
		subject: "Reset Password", // Subject line
		text: "Please clink on the link below to change your password", // plain text body
		html: `
  		<h3>Reset Password</h3>
  		<p>
  		Please click on the  <a href="http://localhost:8080/api/v1/${entryPoint}/password/${token}">link</a> to change your password
  		</p>`, // html body
	});
	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}