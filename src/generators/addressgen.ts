import { faker } from "@faker-js/faker";
import { Users } from "../entity/Users";
import { Address } from "../entity/Address";

export const addressgen = (users: Users[]): Address[] => {
    const addresses: Address[] = [];
    users.forEach(user => {
        addresses.push({
            user_id: user.id,
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zip: faker.location.zipCode(),
            created_at: faker.date.recent()
        });
    });
    return addresses;
}
