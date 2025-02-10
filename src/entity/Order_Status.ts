import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Order_Status {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100, nullable: true })
    status: string
}