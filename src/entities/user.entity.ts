import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({})
    firstName?: string;

    @Column({})
    lastName?: string;

    @Column({})
    email?: string;

    @Column("double")
    mobile?: number;

    @Column('text')
    gender?: string

    @Column()
    address?: string

}