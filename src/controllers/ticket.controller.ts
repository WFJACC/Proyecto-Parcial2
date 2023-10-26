import { Request, Response } from "express"

export const getTickets = (req: Request, res: Response) =>{
    res.json({
        msg: "getTickets"
    })
}


export const getTicket = (req: Request, res: Response) =>{
    const { id } = req.params;
    res.json({
        msg: "getTicket",
        id: id
    })
}


export const deleteTicket = (req: Request, res: Response) =>{
    const { id } = req.params;
    res.json({
        msg: "deleteTicket",
        id: id
    })
}


export const postTicket = (req: Request, res: Response) =>{
    const { body } = req;
    res.json({
        msg: "postTicket",
        body: body
    })
}


export const putTicket = (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "putTicket",
        body: body,
        id: id
    })
}
