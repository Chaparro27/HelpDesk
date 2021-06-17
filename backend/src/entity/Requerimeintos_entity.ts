import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";
import { tickets } from "./Ticket_entity";


@Entity()
export class requerimientos {

    constructor(nombre, comentario, fecha) {
        this.nombre = nombre;
        this.comentario = comentario;
        this.fecha = fecha;
    }

    @PrimaryGeneratedColumn()
    idRequerimiento: number;

    @Column()
    @MinLength(5)
    @IsNotEmpty()
    nombre: string;

    @Column()
    @IsNotEmpty()
    comentario: string;

    @Column()
    @IsNotEmpty()
    fecha: Date;

    @ManyToOne(() => tickets, { cascade: true})
    @JoinTable()
    tickets: tickets[];   
}
