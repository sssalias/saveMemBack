import {User} from "../models/User.js"

export default new class {
    async createUser(data) {
        try {
            return await User.create(data)
        } catch (err) {
            return err
        }
    }
    async loginUser(data) {
        try {
            const user = await User.findOne({where: {email: data.email}})
            if (user.dataValues.password === data.password) {
                return user
            }
        } catch (err) {
            return err
        }
    }
}