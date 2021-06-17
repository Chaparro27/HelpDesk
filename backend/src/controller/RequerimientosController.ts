import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";

import {requerimientos} from "../entity/Requerimientos_entity";
// import {Permisos} from "../entity/Permission_entity";

class RequerimientosController {

    async all(req: Request, res: Response) {
        const requerimientosRepository = getRepository(requerimientos);
        let requerimiento = await requerimientosRepository.find({ relations: ["permisos"] });
        return res.send(requerimiento);
    }

    async one(req: Request, res: Response) {
        const {id} = req.params;
        
        const requerimientosRepository = getRepository(requerimientos);

        try {
            const requerimientos = await requerimientosRepository.findOneOrFail(id, { relations: ["permisos"] });
            return res.send(requerimientos);
        } catch (e) {
            return res.status(404).json({ message: 'Nor result'});
        }
    }

    async create(req: Request, res: Response){
        const requerimientosRepository = getRepository(requerimientos);

        const {nombre, comentario, fecha} = req.body;
        const requerimiento = new requerimientos(nombre, comentario, fecha);

        try {
            await requerimientosRepository.save(requerimiento);
            
            return res.status(201).json(requerimientos);
        } catch (e) {
            return res.status(409).json({ message: 'Error 404'});
        }

    }

    async update(req: Request, res: Response) {
        const requerimientosRepository = getRepository(requerimientos);

        const {id} = req.params;
        const {nombre, comentario, fecha} = req.body;

        let requerimiento: requerimientos; 

        try {
            requerimiento = await requerimientosRepository.findOneOrFail(id);
            requerimiento.nombre = nombre;
            requerimiento.comentario = fecha;
            requerimiento.fecha = fecha;

        } catch (e) {
            return res.status(404).json({ message: 'Not found result' });
        }


        try {
            await requerimientosRepository.save(requerimiento);
        } catch (e) {
            return res.status(409).json({ message: 'User already in use' });
        }

        return res.status(201).json({ message: 'User update' })
    }

    async remove(req: Request, res: Response) {
        const requerimientosRepository = getRepository(requerimientos);
        const {id} = req.params;
        let requerimiento: requerimientos;
        try {
            requerimiento = await requerimientosRepository.findOneOrFail(id);
            await requerimientosRepository.remove(requerimiento);
        } catch (e) {
            return res.status(404).json({ message: 'Not found result'});
        }

        return res.status(201).json({ message: 'Requerimiento deleted' });
    }

}

export default RequerimientosController