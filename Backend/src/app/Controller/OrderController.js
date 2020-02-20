import * as Yup from 'yup';
import Order from '../Models/Order';

class OrderController {
    async store(req, res) {
        const schema = Yup.object().shape({
            recipient_id: Yup.number().required(),
            deliveryman_id: Yup.number().required(),
            product: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation Fails' });
        }

        try {
            const order = await Order.create(req.body);

            return res.send(order);
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }
}

export default new OrderController();
