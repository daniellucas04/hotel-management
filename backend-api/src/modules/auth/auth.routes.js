import express from 'express';
<<<<<<< HEAD
import { login, logout, verifyToken } from './auth.controller.js';
=======
import { login, logout, verify } from './auth.controller.js';
import { authenticate } from '../../middlewares/auth.js';
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4

const router = express.Router();

router.post('/login', login);
<<<<<<< HEAD
router.post('/logout', logout);
router.get('/verify', verifyToken);
=======
router.get('/verify', authenticate, verify);
router.post('/logout', logout)
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4

export default router;