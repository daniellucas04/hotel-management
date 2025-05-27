import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET;

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica se existe o header Authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  // Espera receber assim: "Bearer token_aqui"
  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Token mal formatado.' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token mal formatado.' });
  }

  // Verifica se o token é válido
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }

    // Se tudo estiver OK, salva os dados do usuário no request
    req.user = {
      id: decoded.userId,
      name: decoded.name,
      login: decoded.login,
    };

    return next();
  });
};
