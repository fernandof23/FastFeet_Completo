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
}

export default new RecipientsController();
