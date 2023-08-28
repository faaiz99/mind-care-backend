import nodemailer from 'nodemailer'
const { user, pass, API_URL } = process.env
export const emailSender = async (email:string, token:string, role:string) => {
	let testAccount = await nodemailer.createTestAccount();
	// create reusable transporter object using the default SMTP transport
	let entryPoint;
	if (role == 'therapist')
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
		Please click on the  <a href="${API_URL}/${entryPoint}/verify/${token}">link</a> to change your password
		</p>`
	});
	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	const emailPreview = nodemailer.getTestMessageUrl(info)
	return emailPreview
}
export const resetAccountPassword = async (email:string, token:string, role:string) => {
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
	let entryPoint;
	if (role == 'therapist')
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
  		Please click on the  <a href="${API_URL}/${entryPoint}/password/${token}">link</a> to change your password
  		</p>`, // html body
	});
	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}