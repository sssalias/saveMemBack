import {Sequelize} from "sequelize"
import path from 'node:path'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'models', 'db.sqlite3')
})

export default sequelize
