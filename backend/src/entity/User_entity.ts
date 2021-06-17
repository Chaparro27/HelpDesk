import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcrypt";
import { Permisos } from "./Permission_entity";

@Entity()
@Unique(['email'])
export class usuarios {

    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.tipousaurio = 1;
    }

    @PrimaryGeneratedColumn()
    usuarioid: number;

    @Column()
    @MinLength(4)
    nombre: string;

    @Column()
    @IsNotEmpty()
    email: string;

    @Column()
    @MinLength(3)
    @IsNotEmpty()
    contraseña: string;

    @Column()
    @IsNotEmpty()
    tipousaurio: number;

    @ManyToMany(() => Permisos, { cascade: true})
    @JoinTable()
    permisos: Permisos[];   

    hashPassword():void {
        const salt = bcrypt.genSaltSync(10);
        this.contraseña = bcrypt.hashSync( this.contraseña, salt );
    }

    checkPassword(contraseña: string): boolean {
        return bcrypt.compareSync(contraseña,this.contraseña);
    }
}
