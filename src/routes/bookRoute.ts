import { Router } from 'express'
import { createBooks, viewBooks } from '../controllers/bookController'
import { rbacMiddleware } from '../middleware/rbacMiddlware'
import { UserRole } from '../models/userModel'
import { authMiddlware } from '../middleware/authMiddleware'

const router = Router()


router.post("/",authMiddlware,rbacMiddleware([UserRole.CREATOR]),createBooks)


router.get("/",authMiddlware,rbacMiddleware([UserRole.VIEWER,UserRole.VIEW_ALL]),viewBooks)


export {router as BookRouter}

