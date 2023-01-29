import { Router } from "express";
import { changeCardOptions } from "../../controllers/card.js";

const router = Router();

router.put("/", changeCardOptions);

export default router;
