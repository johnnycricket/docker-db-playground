import { faker } from "@faker-js/faker";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

export interface user {
    id?: UUID;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export const usergen = (count: number = 5): user[] => {
    const users: user[] = [];
    for (let i = 0; i < count; i++) {
        users.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: faker.internet.username(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });
    }
    return users;
}