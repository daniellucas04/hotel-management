import jwt from 'jsonwebtoken';
import { AuthService } from './auth.service.js';

const SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
<<<<<<< HEAD

    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 8, // 8 horas
    });

    res.status(200).json({
      message: result.message,
      user: result.user,
=======
    console.log('Login successful, setting cookies:', result.token, result.user);

    res.cookie('jwt', result.token, {
      httpOnly: true,
      secure: false, //testando para localmente
      sameSite: 'strict',
      maxAge: 8 * 60 * 60 * 1000,
    });

    res.cookie('user', JSON.stringify(result.user), {
      httpOnly: false,
      secure: false, //testando para localmente
      sameSite: 'strict',
      maxAge: 8 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: 'Login realizado com sucesso',
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(401).json({ error: error.message });
  }
};

<<<<<<< HEAD
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
=======
export const verify = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    res.status(401).json({ error: 'Não autorizado' });
  }
};

export const logout = async (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.clearCookie('user', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logout realizado com sucesso' });
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
};