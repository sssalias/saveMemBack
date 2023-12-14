import UserService from "../services/UserService.js";
import {generateToken} from "../helpers/jwt.js";

export default new class {
    async create(req, res) {
        const user = await UserService.createUser(req.body)
        if (user.dataValues) {
            console.log(user.dataValues)
            const token = generateToken({user: user.dataValues})
            return res.status(200).json({user: user, token: token})
        }
        return res.status(400).json({error: user})
    }
    async login(req, res) {
        const user = await UserService.loginUser(req.body)        // console.log(user)
        // console.log(user.dataValues)

        if (user !== null) {
            console.log('asfasf')
            const token = generateToken({user: user.dataValues})
            return res.status(200).json({user: user, token: token})
        }
        return res.status(400).json({error: user})
    }
}