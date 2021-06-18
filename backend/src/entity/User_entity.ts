import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcrypt";

@Entity()
export class usuarios {

    constructor(username, pass, name, email) {
        this.username = username;
        this.pass = pass;
        this.name = name;
        this.email = email;
        this.isFirst = true;
    }

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    @MinLength(4)
    username: string;

    @Column()
    @IsNotEmpty()
    pass: string;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    email: string;

    @Column()
    @IsNotEmpty()
    isFirst: boolean;


    hashPassword():void {
        const salt = bcrypt.genSaltSync(10);
        this.pass = bcrypt.hashSync( this.pass, salt );
    }

    checkPassword(contraseña: string): boolean {
        return bcrypt.compareSync(contraseña,this.pass);
    }
}
