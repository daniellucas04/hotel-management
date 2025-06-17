import jwt from 'jsonwebtoken';
import { AuthService } from './auth.service.js';

const SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const result = await AuthService.login(req.body);

    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 8, // 8 horas
    });

    res.status(200).json({
      message: result.message,
      user: result.user,
      token: result.token, 
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    if (!req.cookies.token) {
      return res.status(400).json({ error: 'Nenhum usuário logado.' });
    }

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    res.status(200).json({ message: 'Logout realizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer logout' });
  }
};

export const verifyToken = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  try {
    jwt.verify(token, SECRET);
    res.status(200).json({ message: 'Token válido' });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};