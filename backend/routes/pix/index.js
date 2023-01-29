import { Router } from "express";
import { sendPix } from "../../controllers/pix.js";
import { verifyToken } from "../../middlewares/authGuard.js";

const router = Router();

router.post("/send", sendPix);

export default router;
