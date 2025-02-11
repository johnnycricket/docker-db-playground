import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Address } from "./Address";
import { Order_Status } from "./Order_Status";
import { products_ordered } from "../generators/ordergen";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
    })
    id?: number

    @OneToOne(() => Users, user => user.id)
    @Column()
    user_id: number

    @OneToOne(() => Address, address => address.id)
    @Column()
    address_id: number

    @Column({ type: 'jsonb', nullable: false })
    products: products_ordered[];

    @Column()
    total: number

    @OneToOne(() => Order_Status, order_status => order_status.id)
    @Column()
    status: number
}