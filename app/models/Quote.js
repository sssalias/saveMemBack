import sequelize from "./index.js"
import {DataTypes} from "sequelize";

export const Quote = sequelize.define(
    'Quotes',
    {
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: 'quotes',
    }
)