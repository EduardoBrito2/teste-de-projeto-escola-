import { Router } from "express";
import controller from "../controllers/Professor_has_DisciplinaControllers";
const routes = Router();
routes.post('/', controller.create);
routes.get('/', controller.list);
routes.delete('/', controller.delete);
routes.put('/', controller.update);
export default routes;