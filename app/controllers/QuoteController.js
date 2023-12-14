import {getUserId} from "../helpers/jwt.js";
import QuoteService from "../services/QuoteService.js";

export default new class {
    async create(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const userId = getUserId(token)
            return res.status(200).json({quote: await QuoteService.createQuote({userId: userId, author: req.body.author, text: req.body.text})})
        } catch (err) {
            return res.status(400).json({error: err})
        }
    }
    async get(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const userId = getUserId(token)
            return res.status(200).json({quotes: await QuoteService.getQuoteByUserId(userId)})
        } catch (err) {
            return res.status(400).json({error: err})
        }
    }
}