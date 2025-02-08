import { faker } from "@faker-js/faker";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

export interface catalog {
    id?: UUID
    name: string;
    description: string;
    price: number;
    status: string;
    inventory_count: number;
    updated_at: Date;
};

export const cataloggen = (count: number = 10): catalog[] => {
    const catalogs: catalog[] = [];
    for (let i = 0; i < count; i++) {
        catalogs.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.number.int(),
            status: faker.commerce.productMaterial(),
            inventory_count: faker.number.int(),
            updated_at: faker.date.recent({refDate: new Date().toISOString()})
        });
    }
    return catalogs;
}