import { Injectable, NestMiddleware } from '@nestjs/common';
import { verify, decode } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).end();
    }

    const [, token] = authHeader.split(' ');

    try {
      // TODO: add JWT_SECRET
      // verify(token, process.env.JWT_SECRET);
      const { role } = decode(token) as { role: string };
      // TODO: get permission in database
      const permission = 'super';
      if ('super' === String(role)) {
        return next();
      }
      return res.status(401).end();
    } catch (err) {
      return res.status(401).end();
    }
  }
}
