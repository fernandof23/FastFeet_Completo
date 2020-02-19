import * as Yup from 'yup';
import Delivery from '../Models/deliveryman';

class Deliveryman {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body)))
            return res.status(401).json({ error: 'Validation Fails' });

        try {
            const { email } = req.body;

            const deliverymanExist = await Delivery.findOne({
                where: { email },
            });

            if (deliverymanExist) {
                return res
                    .status(401)
                    .json({ error: 'DeliveryMan alreay exist' });
            }

            const deliveryman = await Delivery.create(req.body);

            return res.send(deliveryman);
        } catch (err) {
            return res.status(400).send(err.message);
        }
    }

    async index(req, res) {
        try {
            const deliveryman = await Delivery.findAll({
                where: {},
            });

            return res.send(deliveryman);
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }

    async show(req, res) {
        try {
            const deliveryman = await Delivery.findAll({
                where: { id: req.params.id },
            });

            return res.send(deliveryman);
        } catch (err) {
            return res.status(err.status).send(err.error);
        }
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            avatar_id: Yup.number(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation Fails' });
        }

        try {
            const { email } = req.body;
            const deliveryman = await Delivery.findOne({
                where: { id: req.params.id },
            });

            if (!deliveryman) {
                return res.status(404).json({ Error: 'Deliveryman not found' });
            }

            if (email && deliveryman.email !== email) {
                const emailAlready = await Delivery.findAll({
                    where: { email: deliveryman.email },
                });
                if (emailAlready) {
                    return res
                        .status(400)
                        .json({ error: 'Email already exists' });
                }
            }

            const response = await deliveryman.update(req.body);

            return res.send(response);
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const deliveryman = await Delivery.findOne({ where: { id } });

            if (!deliveryman)
                return res.status(404).json({ error: 'Deliveryman not found' });

            await deliveryman.destroy();

            return res.send();
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }
}

export default new Deliveryman();
