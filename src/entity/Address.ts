import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Users } from "./Users";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id?: number
    
    @OneToOne(() => Users, user => user.id)
    user_id: number

    @Column()
    street: string

    @Column()
    city: string

    @Column()
    state: string

    @Column()
    zip: string
}