import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
//import { Article } from './articles';

export class Session extends Model {
    public id_sessions!: number;
    public session_name!: string;
    public session_type!: string;
    public session_date!: Date;
    public session_players_number!: number;
    public session_score!: number;
    public session_members_score!: number;
    public session_reservation!: boolean;

}
Session.init({
    id_sessions: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    session_name: {
        type: DataTypes.STRING(39),
    },
    session_type: {
        type: DataTypes.STRING(39),
    },
    session_date: {
        type: DataTypes.DATEONLY,
    },
    session_players_number: {
        type: DataTypes.SMALLINT,
    },
    session_score: {
        type: DataTypes.INTEGER,
    },
    session_members_score: {
        type: DataTypes.INTEGER,
    },
    session_reservation: {
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
