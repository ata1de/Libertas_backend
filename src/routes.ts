import { Request, Response, Router } from "express";
import MailController from "./controller/MailController";
import ServiceController from "./controller/ServiceController";
import ClientController from "./controller/ClientController";

const routes = Router();

routes.get('/services', ServiceController.show);
routes.get('/services/search', ServiceController.search)
routes.get('/services/all', ServiceController.showAll)
routes.get('/clients', ClientController.getAllClient)

routes.post('/', ClientController.create)
routes.post('/services', ServiceController.createService)
routes.post('/email', MailController.sendEmail)

routes.delete('/service/:id', ServiceController.deleteService)

routes.get('/', (req: Request, res:Response) => {
    return res.json('hello world')
})

export { routes };