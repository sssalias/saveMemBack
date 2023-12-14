import sequelize from "./index.js"
import {DataTypes} from "sequelize";

export const Photo = sequelize.define(
    'Photos',
    {
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)