import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    idTransaction: number;
    @Column()
    wallet: number;
    @Column()
    category: number;
    @Column()
    type: string
}