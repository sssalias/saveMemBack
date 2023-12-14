import sequelize from "./index.js"
import {DataTypes} from "sequelize";

export const User = sequelize.define(
    'Users',
    {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patronymic: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'users',
    }
)