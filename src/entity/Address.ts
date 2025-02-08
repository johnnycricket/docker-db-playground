import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { User } from "./User";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: UUID
    
    @OneToOne(() => User, user => user.id)
    user_id: UUID

    @Column()
    street: string

    @Column()
    city: string

    @Column()
    state: string

    @Column()
    zip: string
}