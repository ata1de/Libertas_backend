import { prisma } from "../../prisma/client"

export interface ClientType {
    name: string,
    email: string,
    phone: string,
    company: string,
    demand: string
}


export class ClientCase {
    async createClient({name, email, phone, company, demand}: ClientType) {
        const client = await prisma.cliente.create({
           data: {
            name,
            email,
            phone,
            company,
            demand

           }
        })

        return client
    }   
}