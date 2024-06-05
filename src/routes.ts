import { Request, Response, Router } from "express";
import { ServiceController } from "./controller/ServiceController";
import { ClientController } from "./controller/ClientController";
const serviceController = new ServiceController()
const clientController = new ClientController()

const routes = Router();

routes.get('/services', serviceController.show);
routes.get('/services/search', serviceController.search)
routes.get('/services/all', serviceController.showAll)
routes.get('/clients', clientController.getAllClient)

routes.post('/', clientController.create)
routes.post('/services', serviceController.createService)


routes.delete('/service/:id', serviceController.deleteService)

routes.get('/', (req: Request, res:Response) => {
    return res.json('hello word')
})

export { routes };