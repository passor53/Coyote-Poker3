import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
//import { Article } from './articles';

export class Member extends Model {
    public id_members!: number;
    public name!: string;
    public firstname!: string;
    public pseudo!: string;
    public mail!: string;
    public password!: string;
    public address!: string;

}
Member.init({
    id_members: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(39),

    },
    firstname: {
        type: DataTypes.STRING(39),
    },
    pseudo: {
        type: DataTypes.STRING(39),
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
        validate:
            { isEmail: true },
    },
    password: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(200),
    },
    /* article_id: {
         type: DataTypes.INTEGER,
         allowNull: true,
         references: {
             model: Article,
             key: "id",
         }
     }*/
},
    {
        sequelize,
        timestamps: false,
    }

);
//Client.belongsTo(Article, { foreignKey: "article_id", onDelete: 'CASCADE' });
//Article.hasMany(Client, { foreignKey: "article_id" });
