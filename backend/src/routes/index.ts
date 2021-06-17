import {Router} from "express";
import auth from "./auth_routes";
import user from "./user_routes";

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);

export default routes;