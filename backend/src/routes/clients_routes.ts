import {Router} from "express";
import ClientesController from "../controller/ClientesController";

const router = Router();
const clientesController = new ClientesController();

router.get('/', clientesController.all);
router.get('/:id', clientesController.one);
router.post('/create', clientesController.create);
router.put('/update/:id', clientesController.update);
router.delete('/remove/:id', clientesController.remove);

export default router;