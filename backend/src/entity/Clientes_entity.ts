import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";


@Entity()
export class clientes {

    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    @MinLength(5)
    @IsNotEmpty()
    nombre: string;

    @Column()
    @IsNotEmpty()
    telefono: string;

}
