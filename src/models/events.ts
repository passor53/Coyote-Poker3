import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
//import { Article } from './articles';

export class Event extends Model {
    public id_events!: number;
    public event_name!: string;
    public event_type!: string;
    public event_premise!: string;
    public event_date!: Date;
    public event_price!: number;
    public event_reservation!: boolean;

}
Event.init({
    id_events: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    event_name: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: false,
    },
    event_type: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
    },
    event_premise: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: false,
    },
    event_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false,
    },
    event_price: {
        type: DataTypes.DECIMAL(5, 2),
    },
    event_reservation: {
        type: DataTypes.BOOLEAN,
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
