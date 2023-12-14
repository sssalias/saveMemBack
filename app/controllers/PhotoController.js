import PhotoService from "../services/PhotoService.js";
import {getUserId} from "../helpers/jwt.js";
import jwt from "jsonwebtoken";

export default new class {
    async uploadPhoto(req, res) {
        try {
            return res.status(200).json({msg: 'aga'})
        } catch (e) {
            return res.status(400).json({msg: '('})
        }
    }
    async getPhoto(req, res) {
        // const token = req.headers.authorization.split(' ')[1]
        // console.log(jwt.decode(token))
        // console.log(token)
        // const userId = getUserId(token)
        // console.log(userId)
        try {
            const token = req.headers.authorization.split(' ')[1]
            // console.log(token)
            const userId = getUserId(token)
            console.log(userId)
            return res.status(200).json({photos: await PhotoService.getPhotoByUserId(userId)})
        } catch (err) {
            // console.log(err)
            return res.status(400).json({error: err})
        }
    }
}
