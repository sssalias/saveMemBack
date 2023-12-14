import {Quote} from "../models/Quote.js";

export default new class {
    async createQuote(data) {
        try {
            return await Quote.create(data)
        } catch (err) {
            return err
        }
    }

    async getQuoteByUserId(userId) {
        try {
            console.log(await Quote.findAll({where: {userId: 1}}))
            return await Quote.findAll({where: {userId: userId}})
        } catch (err) {
            return err
        }
    }
}