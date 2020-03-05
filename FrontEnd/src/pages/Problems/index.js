import React, { useEffect } from 'react';

// import { Container } from './styles';
import Header from '~/components/Header';

export default function Problems() {
    useEffect(() => {
        document.title = 'Problemas';
    }, []);
    return (
        <>
            <Header />
            <h1>Problem</h1>
        </>
    );
}
