"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
//import { Article } from './articles';
class Member extends sequelize_1.Model {
}
exports.Member = Member;
Member.init({
    id_members: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(39),
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING(39),
    },
    pseudo: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false
    },
    mail: {
        type: sequelize_1.DataTypes.STRING(120),
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
    },
    password: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING(200),
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
