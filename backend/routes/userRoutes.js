import express from 'express';
import { registerUser, loginUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser); // Registration endpoint
userRouter.post('/login',loginUser);    // Login endpoint
userRouter.post('/admin/login',adminLogin); // Admin login endpoint

export default userRouter;