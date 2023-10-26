"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAdmin = exports.postAdmin = exports.deleteAdmin = exports.getAdmin = exports.getAdmins = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getAdmins = (req, res) => {
    connection_1.default.query('SELECT * FROM admin', (error, data) => {
        if (error)
            throw error;
        res.json(data);
    });
};
exports.getAdmins = getAdmins;
const getAdmin = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM admin WHERE usuario = ?', id, (error, data) => {
        if (error)
            throw error;
        res.json(data);
    });
};
exports.getAdmin = getAdmin;
const deleteAdmin = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM admin WHERE usuario = ?', id, (error, data) => {
        if (error)
            throw error;
        res.json({
            msg: 'ADMIN ELIMINADO'
        });
    });
};
exports.deleteAdmin = deleteAdmin;
const postAdmin = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO admin set ?', [body], (error, data) => {
        if (error)
            throw error;
        res.json({
            msg: "Admin agregado con exitoso"
        });
    });
};
exports.postAdmin = postAdmin;
const putAdmin = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE admin set ? WHERE usuario = ?', [body, id], (error, data) => {
        if (error)
            throw error;
        res.json({
            msg: "Persona actualizada correctamente"
        });
    });
};
exports.putAdmin = putAdmin;
