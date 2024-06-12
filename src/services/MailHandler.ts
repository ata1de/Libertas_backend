import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function  MailHandler(emailConfig: {
    userName: string,
    userEmail: string,
    subject: string,
    html: string,
})  {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
    
        await transporter.sendMail({
            from: emailConfig.userEmail,
            to: emailConfig.userName,
            subject: emailConfig.subject,
            html: emailConfig.html
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }

    
}

export default MailHandler