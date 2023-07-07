import { Router } from "express";
import { Register, login } from "../controllers/userController";

const router = Router();

router.post("/register", Register);

router.post("/login", login);

export { router as userRouter };
