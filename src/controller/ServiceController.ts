import { Request, Response } from "express";
import { ServiceCases } from "../modules/services/ServiceCases";
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

    // GET/services/search?name=
    async search(req: Request, res: Response) {
        const servicesCases = new ServiceCases()
        const  { name } = req.query
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

    // GET/services/all
    async showAll(req: Request, res: Response) {
        const servicesCases = new ServiceCases()


        try {
            const services = await servicesCases.showAll()

            return res.status(200).json(services)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            }
        }

    }

    async createService(req: Request, res: Response) {
        const servicesCases = new ServiceCases()
        const { name, description} = req.body


        try {
            const service = await servicesCases.create({name, description})

            return res.status(200).json(service)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            }
        }

    }

    async deleteService(req: Request, res: Response) {
        const servicesCases = new ServiceCases();
        const {id} = req.params;
    
        // Verificação se id é uma string
        if (typeof id !== 'string') {
          return res.status(400).json({ message: 'ID must be a string' });
        }
    
        try {
          const service = await servicesCases.delete(id);
    
          return res.status(200).send('Service DELETED!');
        } catch (error) {
          if (error instanceof Error) {
            res.status(400).json({ message: error.message });
          }
        }
      }
}
