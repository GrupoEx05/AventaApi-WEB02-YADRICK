import "reflect-metadata"
import { DataSource } from "typeorm"
import { Producto } from './entity/Producto';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "utn123**",
    database: "dbLab1",
    synchronize: true,
    logging: false,
    entities: [Producto],
    migrations: [],
    subscribers: [],
})
