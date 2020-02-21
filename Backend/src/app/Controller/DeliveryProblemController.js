import Delivery from '../Models/Delivery';
import Deliveryman from '../Models/Deliveryman';
import DeliveryProblem from '../Models/DeliveryProblem';

class DeliveryproblemController {
    async store(req, res) {
        const { id, delivery_id } = req.params;
        const { description } = req.body;

        try {
            const delivery = await Delivery.findByPk(delivery_id);

            if (!delivery || delivery.deliveryman_id !== Number(id)) {
                return res.status(404).json({ error: 'delivery not found' });
            }

            const problem = await DeliveryProblem.create({
                description,
                delivery_id,
            });

            return res.send(problem);
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    // async index(req, res) { }

    // async show(req, res) { }

    // async update(req, res) { }

    // async delete(req, res) { }
}

export default new DeliveryproblemController();
