import { DataSource } from "typeorm";

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user_besp',
    password: 'admin',
    database: 'besp03',
    migrations: ['typeorm/migrations/*.ts'],
});