import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../Models/User';
import auth from '../../config/auth';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation Fails' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(400).json({ error: 'Invalid Password' });
        }

        const { id, name, createdAt } = user;

        return res.json({
            user: { id, email, name, createdAt },
            token: jwt.sign({ id: user.id }, auth.secret, {
                expiresIn: auth.expiresIn,
            }),
        });
    }
}

export default new SessionController();
