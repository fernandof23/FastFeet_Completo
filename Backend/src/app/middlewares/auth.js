import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import auth from '../../config/auth';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token not Found' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, auth.secret);
        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token Invalid' });
    }
};
