import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";

@Entity()
export class Permisos {

    constructor( permiso ) {
        this.permisoid = +permiso;
    }

    @PrimaryGeneratedColumn()
    permisoid: number;

    @Column()
    @MinLength(4)
    @IsNotEmpty()
    nombre: string;
}
