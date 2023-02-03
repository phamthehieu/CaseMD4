import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    idWallet: number;
    @Column({type: 'varchar', length: 255})
    nameWallet: string;
    @Column()
    user: string
    @Column()
    transaction: number
    @Column()
    money: number
}