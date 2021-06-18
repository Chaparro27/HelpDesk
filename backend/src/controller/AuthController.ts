import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";

import { usuarios } from "../entity/User_entity";


class AuthController {


    async login(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);

        const { username, pass } = req.body;

        if(!(username && pass)) return res.status(400).json({ message: 'Username and Password are required!'});
        
        let user: usuarios; 

        try {
            user = await userRepository.findOneOrFail({ username: username });
        } catch (e) {
            return res.status(404).json({ message: 'Nor result'});
        }

        if(!user.checkPassword(pass)) return res.status(400).json({ message: 'Password incorrect' })
        
        return res.send(user);
    }
    
    async isfirst(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);

        const { username, pass } = req.body;

        if(!(username && pass)) return res.status(400).json({ message: 'Username and Password are required!'});
        
        let user: usuarios; 

        try {
            user = await userRepository.findOneOrFail({ username: username });
        } catch (e) {
            return res.status(404).json({ message: 'Nor result'});
        }

        if(user.isFirst) { 
            user.isFirst = false;
            user.pass = pass;
            
            const errors = await validate(user);
        
            if(errors.length > 0) return res.status(400).json(errors);
    
            try {
                await userRepository.save(user);
            } catch (e) {
                return res.status(409).json({ message: 'User already in use' });
            }
    
            return res.send(user);
        } else {
            return res.status(404).json({ message: 'Nor result'});
        }
    }
}

export default AuthController;