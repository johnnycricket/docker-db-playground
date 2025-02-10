import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product_Status } from "./Product_Status"

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @OneToOne(() => Product_Status, product_status => product_status.id)
    status: number

    @Column()
    inventory_count: number

    @Column({ nullable: true })
    updated_at: Date
}