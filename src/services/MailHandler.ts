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
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // true somente para a porta 465
            tls: {
                ciphers:'SSLv3'
            },
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        })
    
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: emailConfig.userEmail,   
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