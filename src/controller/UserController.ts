import { Request, Response } from "express";
import { CreateUserUseCase } from "../modules/users/useCases/CreateUserUseCase"

export class UserController {
    //POST criar usuário
    async create(req: Request, res: Response) {
        const { name , email} = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = createUserUseCase.create({name, email});

        return res.status(201).json(result)


    }
}