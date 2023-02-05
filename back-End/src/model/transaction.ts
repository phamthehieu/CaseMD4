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
    type: string;
    @Column()
<<<<<<< HEAD
    money: string;
=======
    moneyTransaction: number;
    @Column()
    month : number;
    @Column()
    date: number;
>>>>>>> c7484b592ed4aa79677b4bac8cfebf03e89a4c79
}