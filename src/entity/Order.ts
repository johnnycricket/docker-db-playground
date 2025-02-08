import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { User } from "./User";
import { Address } from "./Address";
import { Order_Status } from "./Order_Status";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: UUID

    @OneToOne(() => User, user => user.id)
    user_id: UUID

    @OneToOne(() => Address, address => address.id)
    address_id: UUID

    @Column({ type: 'jsonb', array: true, default: () => "'[]'", nullable: false })
    products: Array<{ product_id: UUID, quantity: number }>

    @Column()
    total: number

    @OneToOne(() => Order_Status, order_status => order_status.status)
    status: string
}