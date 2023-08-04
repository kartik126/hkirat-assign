import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET = 'SECr3t'; // This should be in an environment variable in a real application

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err: jwt.VerifyErrors | null, user: JwtPayload | undefined) => {
      if (err) {
        return res.sendStatus(403);
      }
      if (user && user.id) {
        req.userId = user.id as string;
        next();
      } else {
        return res.sendStatus(403);
      }
    });
  } else {
    res.sendStatus(401);
  }
};

export { authenticateJwt, SECRET };
