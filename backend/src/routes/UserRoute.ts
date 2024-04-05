import express from "express"

import UserController from "../controllers/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/",   UserController.createCurrentUser)
router.put("/",  validateMyUserRequest, UserController.updateCurrentUser)
export default router;