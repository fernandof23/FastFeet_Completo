import Mail from '../../lib/mail';

class Cancellation {
    get key() {
        return 'cancellation';
    }

    async handle({ data }) {
        const { deliveryman, delivery } = data;

        await Mail.sendMail({
            to: `${deliveryman.name}<${deliveryman.email}`,
            subject: 'Entrega Cancelada',
            template: 'cancellation',
            context: {
                deliverymanName: deliveryman.name,
                id: delivery.id,
                name: delivery.product,
            },
        });
    }
}

export default new Cancellation();
