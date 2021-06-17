import {Router} from "express";
import AuthController from "../controller/AuthController";

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/isfirst', authController.isfirst);

export default router