import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
    idUser: number;
@Column({type: 'varchar', length: 255})
    userName: string;
@Column({type: 'varchar', length: 255})
    password: string;
@Column({type: 'varchar', length: 255})
    role: string;
@Column({type: 'varchar', length: 255})
    fullName: string
}