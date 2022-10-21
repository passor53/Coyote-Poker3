"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
require('dotenv').config();
exports.sequelize = new sequelize_1.Sequelize((process.env.DBNAME || "coyote_poker"), (process.env.DBUSER || "root"), (process.env.DBPASSWORD || ""), {
    host: 'localhost',
    dialect: 'mysql'
});
