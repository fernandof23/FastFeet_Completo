import React, { useEffect } from 'react';

// import { Container } from './styles';
import Header from '~/components/Header';

export default function Delivery() {
    useEffect(() => {
        document.title = 'Clientes';
    }, []);

    return (
        <>
            <Header />
            <h1>Teste</h1>
        </>
    );
}
