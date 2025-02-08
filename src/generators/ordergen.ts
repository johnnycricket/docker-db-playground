import { faker } from "@faker-js/faker";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { user } from "./usergen";
import { address } from "./addressgen";
import { catalog } from "./cataloggen";

export interface products_ordered {
    product_id: UUID;
    quantity: number;
}

export interface order {
    user_id: UUID;
    address_id: UUID;
    products: products_ordered[];
    status: string;
    total: number;
    updated_at: Date;
}

const thingsordered = (catalog: catalog[]): products_ordered[] => {
    const products: products_ordered[] = [];
    const to_order = faker.number.int({min: 1, max: 6})
    for(let i = 0; i < to_order; i++) {
        const product = catalog[faker.number.int({min: 0, max: catalog.length - 1})];
        products.push({
            product_id: product.id,
            quantity: faker.number.int({min: 1, max: product.inventory_count})
        });
    }

    return products;
}

export const ordergen = (users: user[], addresses: address[], catalog: catalog[]): order[] => {
    const orders: order[] = [];
    users.forEach(user => {
        addresses.forEach(address => {
            orders.push({
                user_id: user.id,
                address_id: address.id,
                products: thingsordered(catalog),
                status: 'pending',
                updated_at: new Date(),
                total: faker.number.int({min: 1, max: 1000})
            });
        });
    });
    return orders;
};