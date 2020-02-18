import * as Yup from 'yup';
import User from '../Models/user';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ Error: ' Validation Fails' });
        }

        try {
            const emailExist = await User.findOne({
                where: { email: req.body.email },
            });

            if (emailExist) {
                return res.status(400).json({ error: 'User already exist' });
            }

            const response = await User.create(req.body);

            const { id, name, email, createdAt } = response;

            return res.json({ id, name, email, createdAt });
        } catch (err) {
            return res.status(err.status).send(err);
        }
    }
}

export default new UserController();
