import { Request, Response } from "express"
import connection from "../db/connection"


export const getAdmins = (req: Request, res: Response) =>{

    connection.query('SELECT * FROM admin', (error, data) =>{
        if(error) throw error;

        res.json(data)
    })
}

export const getAdmin = (req: Request, res: Response) =>{
    const { id } = req.params;
    connection.query('SELECT * FROM admin WHERE usuario = ?',id,(error, data)=>{
        if(error) throw error;

        res.json(data)
    })
}


export const deleteAdmin = (req: Request, res: Response) =>{
    const { id } = req.params;
    connection.query('DELETE FROM admin WHERE usuario = ?', id, (error, data)=>{
        if(error)throw error;
        res.json({
            msg: 'ADMIN ELIMINADO'
        })
    })
}


export const postAdmin = (req: Request, res: Response) =>{
    const { body } = req;
    connection.query('INSERT INTO admin set ?', [body], (error,data)=>{
        if(error) throw error;
        res.json({
            msg: "Admin agregado con exitoso"
        })
    })
    
}


export const putAdmin = (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    connection.query('UPDATE admin set ? WHERE usuario = ?', [body, id], (error, data)=>{
        if(error) throw error;
        res.json({
            msg: "Persona actualizada correctamente"
        })
    })    
}