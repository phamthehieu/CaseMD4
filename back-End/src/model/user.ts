import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
    idUser: number;
@Column({type: 'varchar', length: 255})
    userName: string;
@Column({type: 'varchar', length: 255})
    password: string;
@Column({type: 'varchar', length: 255, default: "user"})
    role: string;
@Column({type: 'varchar', length: 255, default: "name"})
    fullName: string
@Column({type: 'varchar', length: 255, default: "open"})
    status: string;
}