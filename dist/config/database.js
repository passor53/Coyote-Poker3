"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
require('dotenv').config();
exports.sequelize = new sequelize_1.Sequelize((process.env.DBNAME || ""), (process.env.DBUSER || ""), (process.env.DBPASSWORD || ""), {
    host: 'localhost',
    dialect: 'mysql'
});
