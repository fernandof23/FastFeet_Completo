import Delivery from '../Models/Delivery';
import Recipient from '../Models/Recipient';

class DeliverymanAcessController {
    // async store(req, res) { }

    async index(req, res) {
        const { id } = req.params;

        try {
            const delivery = await Delivery.findAll({
                where: {
                    deliveryman_id: id,
                    canceled_at: null,
                    end_date: null,
                },
                include: [
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
                ],
            });

            return res.send(delivery);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    // async show(req, res) { }

    // async update(req, res) { }

    // async delete(req, res) { }
}

export default new DeliverymanAcessController();
