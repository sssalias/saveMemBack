import UserService from "../services/UserService.js";
import {generateToken} from "../helpers/jwt.js";
// import {generateHash} from "../helpers/bcrypt.js";
import bcrypt from "bcrypt";
import {checkHashes, generateHash} from "../helpers/bcrypt.js";


export default new class {
    async create(req, res) {
        const data = req.body
        data.password = await generateHash(data.password.toString())
        const user = await UserService.createUser(data)
        if (user.dataValues) {
            console.log(user.dataValues)
            const token = generateToken({user: user.dataValues})
            return res.status(200).json({user: user, token: token})
        }
        return res.status(400).json({error: user})
    }
    async login(req, res) {
        const data = req.body
        const user = await UserService.loginUser(data)
        // console.log(user)
        // console.log(user.dataValues)

        if (user !== null && user !== undefined) {
            const token = generateToken({user: user.dataValues})
            return res.status(200).json({user: user, token: token})
        }
        return res.status(400).json({error: user})
    }
}