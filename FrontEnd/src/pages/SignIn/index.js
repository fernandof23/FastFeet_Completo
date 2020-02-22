import React from 'react';
import { useSelector } from 'react-redux';

import { Form } from '@unform/web';

import Logo from '~/assets/logo.png';

import Input from '~/components/Input';

// import { Container } from './styles';

export default function SignIn() {
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() { }
    return (
        <>
            <img src={Logo} alt="GymPoint" />
            <Form onSubmit={handleSubmit}>
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
