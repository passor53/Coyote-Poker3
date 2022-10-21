"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
//import { Article } from './articles';
class Session extends sequelize_1.Model {
}
exports.Session = Session;
Session.init({
    id_sessions: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    session_name: {
        type: sequelize_1.DataTypes.STRING(39),
    },
    session_type: {
        type: sequelize_1.DataTypes.STRING(39),
    },
    session_date: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    session_players_number: {
        type: sequelize_1.DataTypes.SMALLINT,
    },
    session_score: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    session_members_score: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    session_reservation: {
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
