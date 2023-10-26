"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTicket = exports.postTicket = exports.deleteTicket = exports.getTicket = exports.getTickets = void 0;
const getTickets = (req, res) => {
    res.json({
        msg: "getTickets"
    });
};
exports.getTickets = getTickets;
const getTicket = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getTicket",
        id: id
    });
};
exports.getTicket = getTicket;
const deleteTicket = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteTicket",
        id: id
    });
};
exports.deleteTicket = deleteTicket;
const postTicket = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postTicket",
        body: body
    });
};
exports.postTicket = postTicket;
const putTicket = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "putTicket",
        body: body,
        id: id
    });
};
exports.putTicket = putTicket;
