import express from 'express';
import routerTickets from '../routes/ticket.routes';
import routerAdmin from '../routes/admin.routes';
import connection from '../db/connection';
import cors from 'cors';

class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicacion corriendo por el puerto: ', this.port)
        })
    }

    middlewares(){
        
        
        //Parseo del body
        this.app.use(express.json())

        //Cors
        this.app.use(cors());
    }


    conectarDB(){
        connection.connect((error)=>{
            if(error) throw error;
            console.log('Conectado a la base de datos')
        })
    }

    routes(){
        this.app.use('/api/tickets', routerTickets)
        this.app.use('/api/admins', routerAdmin)
    }
}

export default Server