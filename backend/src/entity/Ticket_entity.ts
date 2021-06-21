import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";
import { clientes } from "./Clientes_entity";
import { usuarios } from "./User_entity";


@Entity()
export class tickets {

    constructor(nombre, fecha, tipoTicket, status, descripcion,idCliente, idUsuario) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.tipoTicket = tipoTicket;
        this.status = status;
        this.descripcion = descripcion;
        this.clientes = idCliente;
        this.usuarios = idUsuario
    }

    @PrimaryGeneratedColumn()
    idTicket: number;

    @Column()
    @MinLength(5)
    @IsNotEmpty()
    nombre: string;

    @Column()
    @IsNotEmpty()
    fecha: Date;

    @Column()
    @IsNotEmpty()
    tipoTicket: string;

    @Column()
    @IsNotEmpty()
    status: boolean;

    @Column()
    @IsNotEmpty()
    descripcion: string;

    @ManyToOne(() => clientes, { cascade: true})
    @JoinTable()
    clientes: clientes[];   

    @ManyToOne(() => usuarios, { cascade: true})
    @JoinTable()
    usuarios: usuarios[];   
}
