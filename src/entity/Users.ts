import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn(
    'identity', {
        generatedIdentity: 'ALWAYS'
    })
    id?: number

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
