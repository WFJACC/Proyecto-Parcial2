import { Request, Response } from "express"
import connection from "../db/connection"


export const getMunicipios = (req: Request, res: Response) =>{

    connection.query('SELECT * FROM municipio', (error, data) =>{
        if(error) throw error;
        res.json(data)
    })
}

export const getMunicipio = (req: Request, res: Response) =>{
    const { id } = req.params;
    connection.query('SELECT * FROM municipio WHERE idMunicipio = ?',id,(error, data)=>{
        if(error) throw error;

        res.json(data)
    })
}

export const deleteMunicipio = (req: Request, res: Response) =>{
    const { id } = req.params;
    connection.query('DELETE FROM municipio WHERE idMunicipio = ?', id, (error, data)=>{
        if(error)throw error;
        res.json({
            msg: 'MUNICIPIO ELIMINADO'
        })
    })
}


export const postMunicipio = (req: Request, res: Response) =>{
    const { body } = req;
    connection.query('INSERT INTO municipio set ?', [body], (error,data)=>{
        if(error) throw error;
        res.json({
            msg: "Admin agregado con exitoso"
        })
    })
    
}


export const putMunicipio = (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    connection.query('UPDATE municipio set ? WHERE idMunicipio = ?', [body, id], (error, data)=>{
        if(error) throw error;
        res.json({
            msg: "Municipio actualizado correctamente"
        })
    })
}