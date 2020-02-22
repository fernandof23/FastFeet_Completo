import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'sessions', { email, password });

        const { token, user } = response.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        yield put(signInSucess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Falha na authenticação');
        yield put(signFailure());
    }
}

export function signOut() {
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('persist/REHYDRATE', setToken),
]);
