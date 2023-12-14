import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import path from 'node:path'
// models import
import sequelize from "./models/index.js"
import {User} from "./models/User.js"
import {Photo} from "./models/Photo.js"
import {Quote} from "./models/Quote.js";

import userRouter from './routers/userRouter.js'
import photoRouter from "./routers/photoRouter.js"
import quoteRouter from "./routers/quoteRouter.js";

dotenv.config()

const PORT = 3070 ?? process.env.PORT

const app = express()

app.use(cors())

// settings
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// media
app.use('/photos', express.static(path.join(process.cwd(), 'media')))


// usage routers
app.use('/user', userRouter)
app.use('/photo', photoRouter)
app.use('/quote', quoteRouter)

const runServer = async () => {
    // await sequelize.sync({force: true})
    app.listen(PORT, () => {
        console.log(`Server has been started on http://127.0.0.1:${PORT}/`)
    })
}

runServer()
