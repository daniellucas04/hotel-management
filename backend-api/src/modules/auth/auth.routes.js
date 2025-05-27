import express from 'express';
import { login } from './auth.controller.js';

const router = express.Router();

router.post('/login', login);
// Se quiser, adiciona outras rotas, como logout ou refresh

export default router;
