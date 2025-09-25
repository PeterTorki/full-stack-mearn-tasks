import express from 'express';
import { signin, signup } from './auth.controller.js';
import { validate } from '../../middleware/validations.middleware.js';
import { comparePassword, hashPassword } from '../../middleware/hashPass.middleware.js';
import { checkEmail, loginEmail } from '../../middleware/checkEmail.middleware.js';

export const authRouter = express.Router()

authRouter.post("/signup", validate("auth"), hashPassword(), checkEmail(),signup);
authRouter.post("/login", loginEmail(), comparePassword(), validate("user"), signin);