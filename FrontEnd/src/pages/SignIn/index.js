import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { signInRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo.png';

import Input from '~/components/Input';

// import { Container } from './styles';

export default function SignIn() {
    const loading = useSelector(state => state.auth.loading);
    const formRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Login';
    }, {});

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Insira um e-mail Valido')
                    .required('e-mail obrigatório'),
                password: Yup.string().required('Insira a senha'),
            });

            await schema.validate(data, { abortEarly: false });

            const { email, password } = data;
            dispatch(signInRequest(email, password));

            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    }
    return (
        <>
            <img src={Logo} alt="fastFeet" />

            <Form ref={formRef} onSubmit={handleSubmit}>
                <p>SEU E-MAIL</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>SUA SENHA</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="*********"
                />

                <button type="submit">
                    {loading ? 'Aguarde ...' : 'Entrar no Sistema'}
                </button>
            </Form>
        </>
    );
}
