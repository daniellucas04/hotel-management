import express from 'express';
import { AuthService } from './auth.service.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;
