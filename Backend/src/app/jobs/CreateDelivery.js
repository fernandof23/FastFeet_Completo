import Mail from '../../lib/mail';

class CreateDelivery {
    get key() {
        return 'CreateDelivery';
    }

    async handle({ data }) {
        const { deliveryman, recipient, delivery } = data;

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
                product: delivery.product,
            },
        });
    }
}

export default new CreateDelivery();
