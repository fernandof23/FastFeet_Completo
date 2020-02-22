import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { loadDeliverySucess, deliveryFailured } from './actions';

export function* loadDelivery({ payload }) {
    const { delivery, page } = payload;

    try {
        const searchDelivery = delivery ? `&q=${delivery}` : '';
        const pageFilter = page ? `?page=${page}` : `?page=1`;

        const response = yield call(
            api.get,
            `delivery/${pageFilter}${searchDelivery}`
        );

        yield put(loadDeliverySucess(response.data));
    } catch (err) {
        toast.error('Falha ao carregar Entregas');

        yield put(deliveryFailured());
    }
}

export default all([
    takeLatest('@delivery/LOAD_DELIVERY_REQUEST', loadDelivery),
]);
