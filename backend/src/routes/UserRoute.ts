import express from "express"

import MyUserController from "../controllers/UserController";
import UserController from "../controllers/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, UserController.createCurrentUser)
router.put("/", jwtCheck,jwtParse, MyUserController.updateCurrentUser)
export default router;