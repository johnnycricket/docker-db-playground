import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings"
import { Product_Status } from "./Product_Status"

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @OneToOne(() => Product_Status, product_status => product_status.status)
    status: string

    @Column()
    inventory_count: number

    @Column({ nullable: true })
    updated_at: Date
}