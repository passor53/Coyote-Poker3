import { Sequelize } from 'sequelize';

require('dotenv').config();

export const sequelize = new Sequelize((process.env.DBNAME || ""), (process.env.DBUSER || ""), (process.env.DBPASSWORD || ""), {
    host: 'localhost',
    dialect: 'mysql'
});