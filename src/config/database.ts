import { Sequelize } from 'sequelize';

require('dotenv').config();

export const sequelize = new Sequelize((process.env.DBNAME || "coyote_poker"), (process.env.DBUSER || "root"), (process.env.DBPASSWORD || ""), {
    host: 'localhost',
    dialect: 'mysql'
});