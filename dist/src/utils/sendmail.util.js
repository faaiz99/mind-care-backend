import nodemailer from 'nodemailer';
const { user, pass, API_URL } = process.env;
export const emailSender = async (email, token, role) => {
    //const testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let entryPoint;
    if (role == 'therapist')
        entryPoint = 'therapist';
    else
        entryPoint = 'client';
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: user,
            pass: pass
        },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'support@mindcare.com',
        to: email,
        subject: "Account Verification",
        text: "Please clink on the link below to verify your email",
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
    const emailPreview = nodemailer.getTestMessageUrl(info);
    return emailPreview;
};
export const resetAccountPassword = async (email, token, role) => {
    //const testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: user,
            pass: pass
        },
    });
    let entryPoint;
    if (role == 'therapist')
        entryPoint = 'therapist';
    else
        entryPoint = 'client';
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'support@mindcare.com',
        to: email,
        subject: "Reset Password",
        text: "Please clink on the link below to change your password",
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
};
//# sourceMappingURL=sendmail.util.js.map