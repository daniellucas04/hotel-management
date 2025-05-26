import express from 'express';
import { AuthService } from './auth.service.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const result = await AuthService.login(req.body);

    // Configurar o cookie com o token
    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // False em desenvolvimento
      sameSite: 'strict',
      maxAge: 3600000, // 1 hora em milissegundos
    });

    // Retornar apenas message e user, sem o token
    res.status(200).json({
      message: result.message,
      user: result.user,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;