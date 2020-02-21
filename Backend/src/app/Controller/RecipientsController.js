import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipients from '../Models/Recipient';

class RecipientsController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.string().required(),
            complement: Yup.string(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            cep: Yup.string()
                .required()
                .min(8),
        });

        if (!(await schema.isValid(req.body)))
            return res.status(401).json({ error: 'Validation Fails' });

        try {
            const response = await Recipients.create(req.body);

            return res.send(response);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async index(req, res) {
        try {
            const { q } = req.query;
            const { page = 1 } = req.query;
            const response = await Recipients.findAll({
                where: q ? { name: { [Op.like]: `%${q}%` } } : {},
                limit: 10,
                offset: (page - 1) * 10,
            });

            return res.send(response);
        } catch (err) {
            return res.status(500).json({ Error: 'Create Recipient Fails' });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            const recipient = await Recipients.findByPk(id);

            if (!recipient)
                return res.status(404).json({ error: 'Recipient not found' });

            return res.send(recipient);
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            street: Yup.string(),
            number: Yup.string(),
            complement: Yup.string(),
            state: Yup.string(),
            city: Yup.string(),
            cep: Yup.string().min(8),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation Fails' });
        }

        try {
            const recipient = await Recipients.findByPk(req.params.id);

            if (!recipient) {
                return res.status(404).json({ error: 'Recipients not found' });
            }

            const response = await recipient.update(req.body);

            return res.send(response);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const recipient = await Recipients.findByPk(req.params.id);

            if (!recipient)
                return res.status(404).json({ error: 'Recipient not found' });

            await recipient.destroy();

            return res.status(200).send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

export default new RecipientsController();
