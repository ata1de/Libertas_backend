import { prisma } from "../../../prisma/client";

export class ServiceCases {
    async show() {
        // número total de serviços para a logica de pegar 3 serviços aleatoriamente
        const totalCountService = await prisma.services.count();

        // Sempre subtrai 3 para garantir que em todas as ocasiões vai ter pelo menos 3 serviços
        const randomOffset = Math.floor(Math.random() * (totalCountService - 3  ));

        const services = await prisma.services.findMany({
            skip: randomOffset,
            take: 3
        });

        return services;
    }

    async findByName(name:string, page:number, perPage:number) {
        const offset = (page -1) * perPage

        const service = await prisma.services.findMany({
            where: {
                name: {
                    contains: name.toLowerCase()
                }
            }, 
            skip: offset,
            take: perPage
            
        })

        return {
            services: service,
            page,
            perPage
          }

    }
}