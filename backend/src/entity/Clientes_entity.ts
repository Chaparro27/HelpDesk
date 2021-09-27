import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";


@Entity()
export class clientes {

    constructor(nombre, correo, fecha) {
        this.nombreClient = nombre;
        this.correo = correo;
        this.fecha = fecha;
    }

    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    @MinLength(5)
    @IsNotEmpty()
    nombreClient: string;

    @Column()
    @IsNotEmpty()
    correo: string;

    @Column()
    @IsNotEmpty()
    fecha: Date;

}
