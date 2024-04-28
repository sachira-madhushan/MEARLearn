import express from 'express';
import { getUser, loginUser, registerUser } from '../controllers/userController.js';
import protect from './../middlewares/authMiddleware.js';
const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/getUser",protect,getUser);

export default router