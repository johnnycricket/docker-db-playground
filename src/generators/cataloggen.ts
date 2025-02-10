import { faker } from "@faker-js/faker";
import { Catalog } from "../entity/Catalog";

export const cataloggen = (count: number = 10): Catalog[] => {
    const catalogs: Catalog[] = [];
    for (let i = 0; i < count; i++) {
        catalogs.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.number.int({min: 1, max: 200}),
            status: faker.number.int({min: 0, max: 3}),
            inventory_count: faker.number.int({min: 0, max: 10000}),
            updated_at: faker.date.recent({refDate: new Date().toISOString()})
        });
    }
    return catalogs;
}