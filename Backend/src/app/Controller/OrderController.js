import * as Yup from 'yup';
import Order from '../Models/Order';
import Deliveryman from '../Models/Deliveryman';
import Recipient from '../Models/Recipient';
import File from '../Models/File';

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

    async index(req, res) {
        try {
            const delivery = await Order.findAll({
                where: {},
                attributes: [
                    'id',
                    'product',
                    'deliveryman_id',
                    'recipient_id',
                    'signature_id',
                    'canceled_at',
                    'start_date',
                    'end_date',
                ],
                include: [
                    {
                        model: Deliveryman,
                        attributes: ['id', 'name', 'email', 'avatar_id'],
                        include: [
                            {
                                model: File,
                                as: 'avatar',
                                attributes: ['id', 'name', 'path', 'url'],
                            },
                        ],
                    },
                    {
                        model: Recipient,
                        attributes: [
                            'id',
                            'name',
                            'street',
                            'number',
                            'complement',
                            'state',
                            'city',
                            'cep',
                        ],
                    },
                    {
                        model: File,
                        as: 'Signature',
                        attributes: ['id', 'name', 'path', 'url'],
                    },
                ],
            });

            return res.send(delivery);
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }

    async show(req, res) {
        const { id } = req.params;

        try {
            const delivery = await Order.findOne({
                where: { id },
                attributes: [
                    'id',
                    'product',
                    'deliveryman_id',
                    'recipient_id',
                    'signature_id',
                    'canceled_at',
                    'start_date',
                    'end_date',
                ],
                include: [
                    {
                        model: Deliveryman,
                        attributes: ['id', 'name', 'email', 'avatar_id'],
                        include: [
                            {
                                model: File,
                                as: 'avatar',
                                attributes: ['id', 'name', 'path', 'url'],
                            },
                        ],
                    },
                    {
                        model: Recipient,
                        attributes: [
                            'id',
                            'name',
                            'street',
                            'number',
                            'complement',
                            'state',
                            'city',
                            'cep',
                        ],
                    },
                    {
                        model: File,
                        as: 'Signature',
                        attributes: ['id', 'name', 'path', 'url'],
                    },
                ],
            });

            return res.send(delivery);
        } catch (err) {
            return res.status(500).json({ Error: 'Error to show Delivery' });
        }
    }
}

export default new OrderController();
