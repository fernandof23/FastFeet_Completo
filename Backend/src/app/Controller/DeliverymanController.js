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
                attributes: ['id', 'name', 'email', 'avatar_id'],
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
                attributes: ['id', 'name', 'email', 'avatar_id'],
            });

            return res.send(deliveryman);
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }
}

export default new Deliveryman();
