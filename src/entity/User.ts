import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    username: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    password: string

    @Column()
    email: string
}
