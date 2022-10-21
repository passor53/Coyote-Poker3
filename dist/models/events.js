"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
//import { Article } from './articles';
class Event extends sequelize_1.Model {
}
exports.Event = Event;
Event.init({
    id_events: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    event_name: {
        type: sequelize_1.DataTypes.STRING(70),
        allowNull: false,
        unique: false,
    },
    event_type: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: false,
    },
    event_premise: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: false,
    },
    event_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        unique: false,
    },
    event_price: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
    },
    event_reservation: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    /* article_id: {
         type: DataTypes.INTEGER,
         allowNull: true,
         references: {
             model: Article,
             key: "id",
         }
     }*/
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
//Client.belongsTo(Article, { foreignKey: "article_id", onDelete: 'CASCADE' });
//Article.hasMany(Client, { foreignKey: "article_id" });
