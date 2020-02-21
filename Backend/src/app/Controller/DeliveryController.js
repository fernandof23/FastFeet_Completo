import * as Yup from 'yup';
import { Op } from 'sequelize';
import Delivery from '../Models/Delivery';
import Deliveryman from '../Models/Deliveryman';
import Recipient from '../Models/Recipient';
import File from '../Models/File';
import Queue from '../../lib/Queue';
import CreateDelivery from '../jobs/CreateDelivery';

class DeliveryController {
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
            const delivery = await Delivery.create(req.body);

            const deliveryman = await Deliveryman.findOne({
                where: { id: deliveryman_id },
            });

            const recipient = await Recipient.findOne({
                where: { id: recipient_id },
            });

            await Queue.add(CreateDelivery.key, {
                deliveryman,
                recipient,
                delivery,
            });

            return res.send(delivery);
        } catch (err) {
            return res.status(500).json({ error: 'Fail in create delivery' });
        }
    }

    async index(req, res) {
        const { q } = req.query;
        const { page = 1 } = req.query;

        try {
            const delivery = await Delivery.findAll({
                where: q ? { product: { [Op.like]: `%${q}%` } } : {},
                limit: 10,
                offset: (page - 1) * 10,
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
            const delivery = await Delivery.findOne({
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
            const delivery = await Delivery.findByPk(id);

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
            const delivery = await Delivery.findByPk(id);

            if (!delivery) {
                return res.status(404).json({ error: 'Delivery not found' });
            }

            await delivery.destroy();

            return res.send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

export default new DeliveryController();
