import React from 'react';
import { useSelector } from 'react-redux';

import Logo from '~/assets/logo.png';

// import { Container } from './styles';

export default function SignIn() {
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() { }
    return (
        <>
            <img src={Logo} alt="GymPoint" />
            <form onSubmit={handleSubmit}>
                <p>SEU E-MAIL</p>
                <input
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>SUA SENHA</p>
                <input
                    name="password"
                    type="password"
                    placeholder="*********"
                />

                <button type="submit">
                    {loading ? 'Aguarde ...' : 'Entrar no Sistema'}
                </button>
            </form>
        </>
    );
}
