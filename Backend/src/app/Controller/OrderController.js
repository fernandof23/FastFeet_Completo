import * as Yup from 'yup';
import Order from '../Models/Order';
import Deliveryman from '../Models/Deliveryman';
import Recipient from '../Models/Recipient';
import File from '../Models/File';
import CreateDelivery from '../jobs/CreateDelivery';
import Mail from '../../lib/mail';

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
            const { deliveryman_id, recipient_id } = req.body;
            const order = await Order.create(req.body);

            const deliveryman = await Deliveryman.findOne({
                where: { id: deliveryman_id },
            });

            const recipient = await Recipient.findOne({
                where: { id: recipient_id },
            });

            await Mail.sendMail({
                to: `${deliveryman.name}<${deliveryman.email}>`,
                subject: 'Produto disponivel para Entrega!',
                template: 'createDelivery',
                context: {
                    deliverymanName: deliveryman.name,
                    recipientName: recipient.name,
                    address: recipient.street,
                    number: recipient.number,
                    city: recipient.city,
                    state: recipient.state,
                    cep: recipient.cep,
                    product: order.product,
                },
            });

            return res.send(order);
        } catch (err) {
            return res.status(500).json({ error: 'Fail in create delivery' });
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
            return res.status(500).json({ error: 'Fail to update DB' });
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
            return res.status(500).json({ error: 'Fail to acess DB' });
        }
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            recipient_id: Yup.number(),
            deliveryman_id: Yup.number(),
            product: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation Fails' });
        }

        try {
            const { id } = req.params;
            const delivery = await Order.findByPk(id);

            if (!delivery) {
                return res.status(404).json({ error: 'Delivery not found' });
            }

            const response = await delivery.update(req.body);

            return res.send(response);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const delivery = await Order.findByPk(id);

            if (!delivery) {
                return res.status(404).json({ error: 'Order not found' });
            }

            await delivery.destroy();

            return res.send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

export default new OrderController();
