import { Router } from "express";
const router = Router();

import { welcome } from "../controllers/welcome.cotrollers";
import { auth } from "../middlewares/auth";

router.route("/").get(auth, welcome);
router.route("/api").get(auth, welcome);

export default router;
