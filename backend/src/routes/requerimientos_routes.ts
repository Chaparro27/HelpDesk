import {Router} from "express";
import RequerimientosController from "../controller/RequerimientosController";

const router = Router();
const requerimientosController = new RequerimientosController(); router

router.get('/', requerimientosController.all);
router.get('/:id', requerimientosController.one);
router.post('/create', requerimientosController.create);
router.put('/update/:id', requerimientosController.update);
router.delete('/remove/:id', requerimientosController.remove);

export default router;