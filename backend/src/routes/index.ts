import {Router} from "express";
import auth from "./auth_routes";
import user from "./user_routes";
import client from "./clients_routes";
import requerimientos from "./requerimientos_routes";
import { tickets } from "../entity/Ticket_entity";


const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/clients', client);
routes.use('/tickets', tickets);
routes.use('/requerimientos', tickets);

export default routes;