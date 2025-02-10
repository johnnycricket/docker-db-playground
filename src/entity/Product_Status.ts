import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product_Status {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100, nullable: true })
    status: string
}