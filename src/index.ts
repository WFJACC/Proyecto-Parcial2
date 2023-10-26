import dotenv from "dotenv";
import Server from "./models/server";

//Configuramos dot.env
dotenv.config();

const server = new Server();

server.listen();