import {Photo} from "../models/Photo.js";

export default new class {
    async createPhoto(data) {
        try {
            return await Photo.create(data)
        } catch (err) {
            return err
        }
    }
    async getPhotoByUserId(userId) {
        try {
            return await Photo.findAll({where: {userId: userId}})
        } catch (err) {
            return err
        }
    }
}