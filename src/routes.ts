import { Router } from "express";
import { ServiceController } from "./controller/ServiceController";
const serviceController = new ServiceController()

const routes = Router();

routes.get('/services', serviceController.show);
routes.get('/services/search', serviceController.search)

export { routes };