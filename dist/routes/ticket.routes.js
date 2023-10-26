"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
const router = (0, express_1.Router)();
//Rutas del Ticket
router.get('/', ticket_controller_1.getTickets);
router.get('/:id', ticket_controller_1.getTicket);
router.delete('/:id', ticket_controller_1.deleteTicket);
router.post('/', ticket_controller_1.postTicket);
router.put('/:id', ticket_controller_1.putTicket);
exports.default = router;
