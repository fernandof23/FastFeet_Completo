/* eslint-disable prettier/prettier */
import { Op } from 'sequelize/';
import * as Yup from 'yup'
import {
    startOfDay,
    endOfDay,
    setSeconds,
    setMinutes,
    setHours,
    parseISO,
    isBefore,
    isAfter
} from 'date-fns'

import Delivery from '../Models/Delivery';
import Recipient from '../Models/Recipient';

class DeliverymanAcessController {


    async index(req, res) {
        const { id } = req.params;
        const { finish = null } = req.query;



        try {
            const delivery = await Delivery.findAll({
                where: {
                    deliveryman_id: id,
                    canceled_at: null,
                    end_date: finish
                        ? {
                            [Op.not]: null,
                        }
                        : null,
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



    async update(req, res) {


        const schema = Yup.object().shape({
            start_date: Yup.date(),
            end_date: Yup.date(),
            signature_id: Yup.number()
        })



        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation Fails" })
        }

        try {

            const { start_date, end_date } = req.body
            const { id, delivery_id } = req.params



            const startDate = parseISO(start_date)
            const endDate = parseISO(end_date)

            const delivery = await Delivery.findByPk(delivery_id)



            if (!delivery || (delivery.deliveryman_id !== Number(id))) {
                return res.status(404).json({ error: 'delivery not found' })
            }




            if (isBefore(startDate, new Date())) {
                return res.status(400).json({ error: "Past Date are not permitted" })
            }

            if (isBefore(endDate, startDate)) {
                return res.status(400).json({ error: 'Delivery date must be after the withdral date' })
            }


            const startTimeWork = setSeconds(setMinutes(setHours(startDate, 8), 0), 0)
            const finishTimeWork = setSeconds(setMinutes(setHours(startDate, 18), 0), 0)



            if (isBefore(startDate, startTimeWork) || isAfter(startDate, finishTimeWork)) {
                return res.status(401).json({ error: "You can only pick up deliveries between 08:00am and 06:00pm " })
            }



            const deliveryiesStart = await Delivery.findAll({
                where: {
                    start_date: {
                        [Op.between]: [startOfDay(new Date()), endOfDay(new Date())]
                    }, deliveryman_id: id
                }
            })

            if (!delivery.start_date && deliveryiesStart.length >= 5) {
                return res.status(401).json({ error: "You can pick up only 5 deliveries per day" })
            }

            const response = await delivery.update(req.body)


            return res.send(response)



        } catch (err) { return res.status(500).send(err.message) }

    }


}

export default new DeliverymanAcessController();
