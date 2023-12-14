import {Router} from 'express'
import QuoteController from "../controllers/QuoteController.js";


const router = new Router()

router.post('/create', QuoteController.create)
router.get('/get', QuoteController.get)

export default router
