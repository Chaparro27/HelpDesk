import {Router} from "express";
import TicketsController from "../controller/TicketConroller";

const router = Router();
const ticketsController = new TicketsController();

router.get('/', ticketsController.all);
router.get('/:id', ticketsController.one);
router.post('/create', ticketsController.create);
router.put('/update/:id', ticketsController.update);
router.delete('/remove/:id', ticketsController.remove);

export default router;