import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authVerifyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
  
    req.user = user;
    next();
  });
  
};

export { authVerifyMiddleware }; // Exportando com o nome "authVerifyMiddleware"
