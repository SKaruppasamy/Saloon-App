import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('merchants')
export class MerchantEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({})
    Name?: string;

    @Column({})
    OwnerName?: string;

    @Column({})
    Email?: string;

    @Column("double")
    MobileNo?: number;

    @Column("double")
    LandlineNo?: string;

    @Column({})
    NoofSeats?: number;

    @Column({})
    NoofEmployees?: number;

    @Column({})
    Status?: boolean;

    @Column({})
    Address?: string;

    @Column({})
    Place?: string;

    @Column({})
    Pincode?: number;

}