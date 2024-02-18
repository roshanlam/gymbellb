import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IDecoded {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IDecoded;
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IDecoded;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
