import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";

import {clientes} from "../entity/Clientes_entity";
// import {Permisos} from "../entity/Permission_entity";

class ClientesController {

    async all(req: Request, res: Response) {
        const clientesRepository = getRepository(clientes);
        let users = await clientesRepository.find();
        return res.send(users);
    }

    async one(req: Request, res: Response) {
        const {id} = req.params;
        
        const clientesRepository = getRepository(clientes);

        try {
            const user = await clientesRepository.findOneOrFail(id);
            return res.send(user);
        } catch (e) {
            return res.status(404).json({ message: 'Nor result'});
        }
    }
    
    async create(req: Request, res: Response){
        const clientesRepository = getRepository(clientes);

        const {nombreClient, telefono} = req.body;
        const client = new clientes(nombreClient, telefono);

        try {
            await clientesRepository.save(client);
            
            return res.status(201).json(clientes);
        } catch (e) {
            return res.status(409).json({ message: 'Error 404'});
        }

    }

    async update(req: Request, res: Response) {
        const clientesRepository = getRepository(clientes);

        const {id} = req.params;
        const {nombreClient, telefono} = req.body;

        let cliente: clientes; 

        try {
            cliente = await clientesRepository.findOneOrFail(id);
            cliente.nombreClient = nombreClient;
            cliente.telefono = telefono;

        } catch (e) {
            return res.status(404).json({ message: 'Not found result' });
        }


        try {
            await clientesRepository.save(cliente);
        } catch (e) {
            return res.status(409).json({ message: 'User already in use' });
        }

        return res.status(201).json({ message: 'Client update' })
    }

    async remove(req: Request, res: Response) {
        const clientesRepository = getRepository(clientes);
        const {id} = req.params;
        let cliente: clientes;
        try {
            cliente = await clientesRepository.findOneOrFail(id);
            await clientesRepository.remove(cliente);
        } catch (e) {
            return res.status(404).json({ message: 'Not found result'});
        }

        return res.status(201).json({ message: 'Client deleted' });
    }

}

export default ClientesController;