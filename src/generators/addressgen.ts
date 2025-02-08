import { faker } from "@faker-js/faker";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { user } from "./usergen";

export interface address {
    id?: UUID;
    user_id: UUID;
    street: string;
    city: string;
    state: string;
    zip: string;
};

export const addressgen = (users: user[]): address[] => {
    const addresses: address[] = [];
    users.forEach(user => {
        addresses.push({
            user_id: user.id,
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zip: faker.location.zipCode()
        });
    });
    return addresses;
}
