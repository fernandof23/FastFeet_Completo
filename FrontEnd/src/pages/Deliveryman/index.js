import React, { useEffect } from 'react';

// import { Container } from './styles';
import Header from '~/components/Header';

export default function Deliveryman() {
    useEffect(() => {
        document.title = 'Entregadores';
    }, []);

    return (
        <>
            <Header />
            <h1>Deliveryman</h1>
        </>
    );
}
