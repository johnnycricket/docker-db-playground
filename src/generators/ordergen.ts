import { faker } from "@faker-js/faker";
import { Users } from "../entity/Users";
import { Address } from "../entity/Address";
import { Catalog } from "../entity/Catalog";
export interface products_ordered {
    product_id: number;
    quantity: number;
}

export interface order {
    user_id: number;
    address_id: number;
    products: products_ordered[];
    status: number;
    total: number;
    updated_at: Date;
}

const thingsordered = (catalog: Catalog[]): { products: products_ordered[] } => {
    const lineItems: { products: products_ordered[] } = {
        products: []
    }
    const to_order = faker.number.int({min: 1, max: 6})
    for(let i = 0; i < to_order; i++) {
        const product = catalog[faker.number.int({min: 0, max: catalog.length - 1})];
        lineItems.products.push({
            product_id: product.id,
            quantity: faker.number.int({min: 1, max: product.inventory_count})
        });
    }

    return lineItems;
}

export const ordergen = (users: Users[], addresses: Address[], catalog: Catalog[]): order[] => {
    const orders: order[] = [];
    users.forEach(user => {
        const list = thingsordered(catalog);
        const addressid = addresses.filter(address => address.user_id === user.id);
        orders.push({
            user_id: user.id,
            address_id: addressid[0].id || 0,
            products: list.products,
            status: faker.number.int({min: 0, max: 3}),
            updated_at: new Date(),
            total: faker.number.int({min: 1, max: 1000})
        });
    });
    return orders;
};