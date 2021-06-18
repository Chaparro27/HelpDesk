import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";

import {tickets} from "../entity/Ticket_entity";
// import {Permisos} from "../entity/Permission_entity";

class TicketsController {

    async all(req: Request, res: Response) {

        const ticketsRepository = getRepository(tickets);
        let ticket = await ticketsRepository.find();
        return res.send(ticket);
    }

    async one(req: Request, res: Response) {
        const {id} = req.params;
        
        const ticketsRepository = getRepository(tickets);

        try {
            const ticket = await ticketsRepository.findOneOrFail(id);
            return res.send(ticket);
        } catch (e) {
            return res.status(404).json({ message: 'Nor result'});
        }
    }
    
    async create(req: Request, res: Response){
        const ticketsRepository = getRepository(tickets);

        const {nombre, fecha, tipoTicket, status,  descripcion} = req.body;
        const ticket = new tickets(nombre, fecha, tipoTicket, status, descripcion);

        try {
            await ticketsRepository.save(ticket);
            
            return res.status(201).json(ticket);
        } catch (e) {
            return res.status(404).json({ message: 'Error 404'});
        }

    }

    async update(req: Request, res: Response) {
        const ticketsRepository = getRepository(tickets);

        const {id} = req.params;
        const {nombre, fecha, tipoTicket, status, descripcion} = req.body;

        let ticket: tickets; 

        try {
            ticket = await ticketsRepository.findOneOrFail(id);
            ticket.nombre = nombre;
            ticket.fecha = fecha;
            ticket.tipoTicket = tipoTicket;
            ticket.status = status;
            ticket.descripcion = descripcion;
        } catch (e) {
            return res.status(404).json({ message: 'Not found result' });
        }


        try {
            await ticketsRepository.save(ticket);
        } catch (e) {
            return res.status(409).json({ message: 'User already in use' });
        }

        return res.status(201).json({ message: 'User update' })
    }

    async remove(req: Request, res: Response) {
        const ticketsRepository = getRepository(tickets);
        const {id} = req.params;

        let ticket: tickets; 

        try {
            ticket = await ticketsRepository.findOneOrFail(id);
            await ticketsRepository.remove(ticket);
        } catch (e) {
            return res.status(404).json({ message: 'Not found result'});
        }

        return res.status(201).json({ message: 'Client deleted' });
    }

}

export default TicketsController;