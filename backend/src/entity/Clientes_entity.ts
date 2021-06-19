import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";


@Entity()
export class clientes {

    constructor(nombre, telefono) {
        this.nombreClient = nombre;
        this.telefono = telefono;
    }

    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    @MinLength(5)
    @IsNotEmpty()
    nombreClient: string;

    @Column()
    @IsNotEmpty()
    telefono: string;

}
