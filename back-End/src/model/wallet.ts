import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    idWallet: number;
    @Column({type: 'varchar', length: 255})
    nameWallet: string;
    @Column()
    user: string
    @Column({default :0})
    transaction: number
    @Column({default :0})
    money: number
}