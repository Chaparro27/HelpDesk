import {Router} from "express";
import TicketsController from "../controller/TicketsController";

const router = Router();
const ticketsController = new TicketsController();

router.get('/', ticketsController.all);
router.get('/:id', ticketsController.one);
// router.get('/all', ticketsController.getTicketandClient);
router.post('/create', ticketsController.create);
router.put('/update/:id', ticketsController.update);
router.delete('/remove/:id', ticketsController.remove);

export default router;