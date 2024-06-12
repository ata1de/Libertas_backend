import { Request, Response } from "express";
import MailHandler from "../services/MailHandler";

class MailController {
    sendEmail = async function sendEmail(req: Request, res: Response) {
        try {
            const { name, email, phone, company, demand } = req.body
    
            const emailConfig = {
                userName: name,
                userEmail: email,
                subject: 'Relatório de novo cliente',
                html: `Olá,\n\nAqui estão as informações dos novos clientes registrados no seu site:\n\n\
                        <p>Nome: ${name}</p>\n\
                       <p>Email: ${email}</p>\n\
                       <p>Telefone: ${phone}</p>\n\
                       <p>Empresa: ${company}</p>\n\
                       <p>Demanda: ${demand}</p>\n\
                       --------------------------\n`
            }
    
            const emailResponse = await MailHandler(emailConfig)
    
            if (emailResponse) {
                return res.status(200).json({message: 'Email enviado com sucesso'})
            } else {
                return res.status(400).json({message: 'Erro ao enviar email'})
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: `Erro ao enviar email: ${error}`})
        }
}
}

export default new MailController()