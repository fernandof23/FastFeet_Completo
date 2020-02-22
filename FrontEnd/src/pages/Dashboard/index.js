import React, { useEffect } from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import logo from '~/assets/logo.png';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'FastFeet';
    }, []);
    return (
        <>
            <Header />
            <Container>
                <img src={logo} alt="FastFeet" />
            </Container>
        </>
    );
}
