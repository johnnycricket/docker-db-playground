import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Address } from "./entity/Address"
import { Orders } from "./entity/Orders"
import { Order_Status } from "./entity/Order_Status"
import { Catalog } from "./entity/Catalog"
import { Product_Status } from "./entity/Product_Status"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "user",
    password: "password",
    database: "mockdb",
    synchronize: true,
    logging: true,
    entities: [Users, Address, Orders, Order_Status, Catalog, Product_Status],
    migrations: [],
    subscribers: [],
})
