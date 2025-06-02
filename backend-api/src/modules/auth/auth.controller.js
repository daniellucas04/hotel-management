import { AuthService } from './auth.service.js';

export const login = async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
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
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(401).json({ error: error.message });
  }
};

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
};