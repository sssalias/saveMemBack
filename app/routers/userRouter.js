import {Router} from 'express'
import UserController from '../controllers/UserController.js'


const router = new Router()

router.post('/create', UserController.create)
router.post('/login', UserController.login)

export default router
