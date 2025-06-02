import express from 'express';
import { login, logout, verify } from './auth.controller.js';
import { authenticate } from '../../middlewares/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/verify', authenticate, verify);
router.post('/logout', logout)

export default router;