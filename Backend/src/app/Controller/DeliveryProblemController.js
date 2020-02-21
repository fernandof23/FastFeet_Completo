import * as Yup from 'yup';
import Delivery from '../Models/Delivery';
import Deliveryman from '../Models/Deliveryman';
import DeliveryProblem from '../Models/DeliveryProblem';

class DeliveryproblemController {
    async store(req, res) {
        const { id, delivery_id } = req.params;
        const { description } = req.body;

        const schema = Yup.object().shape({
            description: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation Fails' });
        }

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

    async index(req, res) {
        try {
            const problem = await DeliveryProblem.findAll();

            return res.send(problem);
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async show(req, res) {
        const { id, delivery_id } = req.params;

        try {
            const delivery = await Delivery.findByPk(delivery_id);

            if (!delivery || delivery.deliveryman_id !== Number(id)) {
                return res.status(404).json({ error: 'delivery not found' });
            }

            const problem = await DeliveryProblem.findAll({
                where: { delivery_id },
            });

            return res.send(problem);
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    // async delete(req, res) { }
}

export default new DeliveryproblemController();
