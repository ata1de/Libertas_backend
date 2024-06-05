import { Request, Response } from "express";
import { ClientCase } from "../modules/cliente/ClienteCase";


export class ClientController {
    async create(req: Request ,res: Response) {
        const clientCase = new ClientCase()
        const { name, email, demand, phone, company } = req.body

        try {
            const client = await clientCase.createClient({name, email, demand, phone, company})

            return res.status(200).json(client)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            }
        }
    }

    async getAllClient(req: Request, res: Response) {
        const clientCase = new ClientCase()

        try {
            const client = await clientCase.getAllClient()

            return res.status(200).json(client)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            }
        }
    }   
}