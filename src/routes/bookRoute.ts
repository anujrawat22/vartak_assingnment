import { Router } from 'express'
import { createBooks } from '../controllers/bookController'
import { rbacMiddleware } from '../middleware/rbacMiddlware'
import { UserRole } from '../models/userModel'
import { authMiddlware } from '../middleware/authMiddleware'

const router = Router()


router.post("/",authMiddlware,rbacMiddleware([UserRole.CREATOR]),createBooks)





export {router as BookRouter}

