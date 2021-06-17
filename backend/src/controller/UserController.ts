import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";

import {usuarios} from "../entity/User_entity";
import {Permisos} from "../entity/Permission_entity";

class UserController {

    async all(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);
        let users = await userRepository.find({ relations: ["permisos"] });
        return res.send(users);
    }

    async one(req: Request, res: Response) {
        const {id} = req.params;
        
        const userRepository = getRepository(usuarios);

        try {
            const user = await userRepository.findOneOrFail(id, { relations: ["permisos"] });
            return res.send(user);
        } catch (e) {
            return res.status(404).json({ message: 'Nor result'});
        }
    }

    async create(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);

        const {nombre, email, contraseña, permisos} = req.body;

        const user = new usuarios(nombre, email, contraseña);

        user.permisos = permisos.map( e => new Permisos(e.permisoid));
        user.hashPassword();

        const errors = await validate(user);
        if (errors.length > 0) return res.status(400).json(errors);
        
        try {
            await userRepository.save(user);
            
            return res.status(201).json(user);
        } catch (e) {
            return res.status(409).json({ message: 'User already exist'});
        }
    }

    async update(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);

        const {id} = req.params;
        const {nombre, email, contraseña, permisos} = req.body;

        let user: usuarios; 

        try {
            user = await userRepository.findOneOrFail(id, {relations:["permisos"]});
            user.nombre = nombre;
            user.email = email;
            user.contraseña = contraseña;
            user.permisos = permisos.map( e => new Permisos(e.permisoid));
        } catch (e) {
            return res.status(404).json({ message: 'Not found result' });
        }
        if(contraseña < 30) user.hashPassword();
        
        const errors = await validate(user);
        
        if(errors.length > 0) return res.status(400).json(errors);

        try {
            await userRepository.save(user);
        } catch (e) {
            return res.status(409).json({ message: 'User already in use' });
        }

        return res.status(201).json({ message: 'User update' })
    }

    async remove(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);
        const {id} = req.params;
        let user: usuarios;
        try {
            user = await userRepository.findOneOrFail(id, { relations: ["permisos"]});
            await userRepository.remove(user);
        } catch (e) {
            return res.status(404).json({ message: 'Not found result'});
        }

        return res.status(201).json({ message: 'User deleted' });
    }

}

export default UserController