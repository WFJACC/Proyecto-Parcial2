"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticket_routes_1 = __importDefault(require("../routes/ticket.routes"));
const admin_routes_1 = __importDefault(require("../routes/admin.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto: ', this.port);
        });
    }
    middlewares() {
        //Parseo del body
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    conectarDB() {
        connection_1.default.connect((error) => {
            if (error)
                throw error;
            console.log('Conectado a la base de datos');
        });
    }
    routes() {
        this.app.use('/api/tickets', ticket_routes_1.default);
        this.app.use('/api/admins', admin_routes_1.default);
    }
}
exports.default = Server;
