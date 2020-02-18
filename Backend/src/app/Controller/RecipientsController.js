import * as Yup from 'yup';
import Recipients from '../Models/recipient';

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
            return res.status(err.status).json({ error: err.message });
        }
    }

    async index(req, res) {
        try {
            const response = await Recipients.findAll();

            return res.send(response);
        } catch (err) {
            return res.status(400).json({ Error: 'Create Recipient Fails' });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            const recipient = await Recipients.findByPk(id);

            return res.send(recipient);
        } catch (err) {
            return res.status(400).send(err.message);
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
            return res.status(err.status).send(err.message);
        }
    }
}

export default new RecipientsController();
