import { Router } from "express";
import { getTickets, getTicket, deleteTicket, postTicket, putTicket } from "../controllers/ticket.controller";

const router = Router();

//Rutas del Ticket
router.get('/', getTickets)
router.get('/:id', getTicket)
router.delete('/:id', deleteTicket)
router.post('/', postTicket)
router.put('/:id', putTicket)


export default router;