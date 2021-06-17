import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { usuarios } from "../entity/User_entity";



class AuthController {


    async login(req: Request, res: Response) {
        const userRepository = getRepository(usuarios);
        
        const {email, contraseña} = req.body;
        
        if(!(email && contraseña)) return res.status(400).json({ message: 'Username and Password are required!'});
        
        let user: usuarios;

        try{
            user = await userRepository.findOneOrFail({ where:{email}, relations:["permisos"]});
            if(!user.checkPassword(contraseña)) return res.status(400).json({ message: 'Password incorrect' })  
        }
        catch(e){
            return res.status(400).json(e);
        }
        return res.send(user);
    };


}

export default AuthController;