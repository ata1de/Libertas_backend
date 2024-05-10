import { prisma } from "../../../prisma/client";
import { User } from "../types/UserType";

export class CreateUserUseCase {
    async create({name, email}: User) {
        // verificar se o usuário ja existe
        const UserAlreadyExist = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (UserAlreadyExist) {
            throw console.error("Usuário já existe");
            
        }

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user
    }
}    