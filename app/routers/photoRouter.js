import { Router } from "express"
import PhotoController from "../controllers/PhotoController.js";
import multer from 'multer'
import path from "node:path";
import {getUserId} from "../helpers/jwt.js";
import PhotoService from "../services/PhotoService.js";

import {authMiddleware} from "../middleware/authMiddleware.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/')
    },
    filename: async function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)
        const filepath = file.fieldname + '-' + uniqueSuffix + ext
        cb(null, filepath)
        const token = req.headers.authorization.split(' ')[1]
        const userId = getUserId(token)
        const photo = await PhotoService.createPhoto({userId, path: path.join(process.cwd(), filepath)})
        console.log(photo)
    }
})

const upload = multer({storage: storage})

const router = new Router()


router.post('/upload', authMiddleware, upload.any(), PhotoController.uploadPhoto)
router.get('/get', authMiddleware, PhotoController.getPhoto)

export default router