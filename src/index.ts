import { AppDataSource } from "./data-source"
import { Address } from "./entity/Address";
import { Catalog } from "./entity/Catalog";
import { Orders } from "./entity/Orders";
import { Users } from "./entity/Users"
import { addressgen } from "./generators/addressgen";
import { cataloggen } from "./generators/cataloggen";
import { ordergen } from "./generators/ordergen";
import { usergen } from "./generators/usergen";
import { pino } from 'pino';

export const init = () => {
    AppDataSource.initialize().then(async () => {
        const logger = pino;
        const hasUsers = await AppDataSource.createQueryBuilder()
            .select("users")
            .from(Users, "users")
            .getOne();

        if (hasUsers) { 
            logger().info("Database already has data, skipping seeding");       
            return;
        }

        const users = usergen(10);
        const catalog = cataloggen(50);
        const addresses = addressgen(users);
        const orders = ordergen(users, addresses, catalog)

        users.forEach(async (user) => {
            await AppDataSource.manager.save(Users, user);
        });

        addresses.forEach(async (address) => {
            await AppDataSource.manager.save(Address, addresses);
        });

        catalog.forEach(async (cat) => {
            await AppDataSource.manager.save(Catalog, cat);
        });

        orders.forEach(async (order) => {
            await AppDataSource.manager.save(Orders, order);
        });

        logger().info("Seeding complete");
    }).catch(error => pino().info(error));
};

init();