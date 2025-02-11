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

export const init = async () => {
    const logger = pino;
    let seeded = false;

    await AppDataSource.initialize().then(async () => {
        const hasUsers = await AppDataSource.createQueryBuilder()
            .select("users")
            .from(Users, "users")
            .getOne();

        if (hasUsers) { 
            seeded = true;
            logger().info("Database already has data, skipping seeding");       
            return;
        }
    }).catch(error => pino().info(error));

    if(!seeded){
        const users = usergen(10);

        let initUsers: Users[] = [];
        await Promise.all(users.map(async (user) => {
            initUsers.push(await AppDataSource.manager.save(Users, user));
        }));

        const catalog = cataloggen(50);
        
        let initCatalog: Catalog[] = [];
        await Promise.all(catalog.map(async (cat) => {
            initCatalog.push(await AppDataSource.manager.save(Catalog, cat));
        }));

        const addresses = addressgen(initUsers);
        
        let initAddresses: Address[] = [];
        await Promise.all(addresses.map(async (address) => {
            initAddresses.push(await AppDataSource.manager.save(Address, address));
        }));

        const orders = ordergen(initUsers, initAddresses, catalog)

        await Promise.all(orders.map(async (order) => {
            await AppDataSource.manager.save(Orders, order);
        }));

        logger().info("Seeding complete");
    }
};

init();