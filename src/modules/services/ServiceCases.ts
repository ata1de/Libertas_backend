import { prisma } from "../../prisma/client";

export class ServiceCases {
    async show() {
        // número total de serviços para a logica de pegar 3 serviços aleatoriamente
        const totalCountService = await prisma.service.count();

        // Sempre subtrai 3 para garantir que em todas as ocasiões vai ter pelo menos 3 serviços
        const randomOffset = Math.floor(Math.random() * (totalCountService - 3  ));

        const services = await prisma.service.findMany({
            skip: randomOffset,
            take: 3
        });

        return services;
    }

    async findByName(name:string, page:number, perPage:number) {
        const offset = (page -1) * perPage

        const trimmedName = name.trim() // Tira possiveis espaços no inicio ou no fim da palavra

        const services = await prisma.service.findMany({
            where: {
                name: {
                    contains: trimmedName,
                    mode: 'insensitive', // Adiciona insensibilidade a maiúsculas e minúsculas
                }
            }, 
            skip: offset,
            take: perPage
            
        })

        return {
            services: services,
            page,
            perPage,
            name: name
          }

    }
}