import { Router } from "express";
import { createUser, login, getUser } from "../../controllers/auth.js";

const router = Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/get/:id", getUser);

export default router;
