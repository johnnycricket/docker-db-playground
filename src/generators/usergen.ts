import { faker } from "@faker-js/faker";
import pino from "pino";
import { Users } from "../entity/Users";

export const usergen = (count: number = 5): Users[] => {
    const logger = pino;
    const users: Users[] = [];
    for (let i = 0; i < count; i++) {
        users.push({
            username: faker.internet.username(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });
    }
    return users;
}