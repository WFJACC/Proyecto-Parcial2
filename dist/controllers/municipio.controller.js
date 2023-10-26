"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putMunicipio = exports.postMunicipio = exports.deleteMunicipio = exports.getMunicipio = exports.getMunicipios = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getMunicipios = (req, res) => {
    connection_1.default.query('SELECT * FROM municipio', (error, data) => {
        if (error)
            throw error;
        res.json(data);
    });
};
exports.getMunicipios = getMunicipios;
const getMunicipio = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM municipio WHERE idMunicipio = ?', id, (error, data) => {
        if (error)
            throw error;
        res.json(data);
    });
};
exports.getMunicipio = getMunicipio;
const deleteMunicipio = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM municipio WHERE idMunicipio = ?', id, (error, data) => {
        if (error)
            throw error;
        res.json({
            msg: 'MUNICIPIO ELIMINADO'
        });
    });
};
exports.deleteMunicipio = deleteMunicipio;
const postMunicipio = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO municipio set ?', [body], (error, data) => {
        if (error)
            throw error;
        res.json({
            msg: "Admin agregado con exitoso"
        });
    });
};
exports.postMunicipio = postMunicipio;
const putMunicipio = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE municipio set ? WHERE idMunicipio = ?', [body, id], (error, data) => {
        if (error)
            throw error;
        res.json({
            msg: "Municipio actualizado correctamente"
        });
    });
};
exports.putMunicipio = putMunicipio;
