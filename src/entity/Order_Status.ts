import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings"

@Entity()
export class Order_Status {
    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    status: string
}