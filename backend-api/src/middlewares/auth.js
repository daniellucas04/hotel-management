import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.JWT_SECRET; 

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }

    req.user = {
      id: decoded.userId,
      name: decoded.name,
      login: decoded.login,
    };

    return next();
  });
};