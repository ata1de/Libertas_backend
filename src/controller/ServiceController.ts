import { Request, Response } from "express";
import { ServiceCases } from "../modules/services/serviceCases/ServiceCases";
import { getPaginationParams } from "../helpers/GetPagination";

export class ServiceController {
    async show(req: Request, res: Response) {
        const servicesCases = new ServiceCases()


        try {
            const services = await servicesCases.show()

            return res.status(200).json(services)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            }
        }

    }

    async search(req: Request, res: Response) {
        const servicesCases = new ServiceCases()
        const { name } = req.body
        const [page, perPage ] = getPaginationParams(req.query)  


        try {
            if (typeof name !== 'string') throw new Error ('name params must be of type string')
            const service = await servicesCases.findByName(name, page, perPage)
            return res.status(200).json(service)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            }
        }

    }
}