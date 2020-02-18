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

            return res.send({ id, name, email, createdAt });
        } catch (err) {
            return res.status(err.status).send(err);
        }
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            oldPassword: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation Fails' });
        }

        try {
            const { email, oldPassword } = req.body;

            const user = await User.findByPk(req.userId);

            if (user.email !== email) {
                const emailExist = User.findOne({
                    where: { email },
                });
                if (emailExist)
                    return res
                        .status(401)
                        .json({ Error: 'Email already in use' });
            }

            if (oldPassword && !(await user.checkPassword(oldPassword))) {
                return res.status(401).json({ error: 'Password Incorrect' });
            }

            const response = await user.update(req.body);

            return res.send(response);
        } catch (err) {
            return res.status(401).json({ error: 'Update Failured' });
        }
    }
}

export default new UserController();
