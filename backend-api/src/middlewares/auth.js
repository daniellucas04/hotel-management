export const authenticate = (req, res, next) => {
<<<<<<< HEAD
  const token = req.cookies.token;

=======
  let token = null;

  // Check for token in Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  // Fallback to cookie if Authorization header is not present
  if (!token && req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

<<<<<<< HEAD
=======
  // Verify the token
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }

<<<<<<< HEAD
=======
    // Attach user data to request
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
    req.user = {
      id: decoded.userId,
      name: decoded.name,
      login: decoded.login,
    };

    return next();
  });
};