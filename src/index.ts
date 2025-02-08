import { AppDataSource } from "./data-source"
import { Address } from "./entity/Address";
import { Catalog } from "./entity/Catalog";
import { Order } from "./entity/Order";
import { User } from "./entity/User"
import { addressgen } from "./generators/addressgen";
import { cataloggen } from "./generators/cataloggen";
import { ordergen } from "./generators/ordergen";
import { usergen } from "./generators/usergen";
import { pino } from 'pino';

export const init = () => {
    AppDataSource.initialize().then(async () => {
        const logger = pino;
        const hasUsers = await AppDataSource.createQueryBuilder()
            .select("user")
            .from(User, "user")
            .getOne();

        if (hasUsers) { 
            pino().info("Database already has data, skipping seeding");       
            return;
        }

        const users = usergen(10);
        const catalog = cataloggen(50);
        const addresses = addressgen(users);
        const orders = ordergen(users, addresses, catalog)

        await AppDataSource.manager.save(User, users);
        await AppDataSource.manager.save(Address, addresses);
        await AppDataSource.manager.save(Catalog, catalog);
        await AppDataSource.manager.save(Order, orders);
        pino().info("Seeding complete");
    }).catch(error => pino().info(error));
};

init();