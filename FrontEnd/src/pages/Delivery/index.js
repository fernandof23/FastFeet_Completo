import React, { useEffect } from 'react';

// import { Container } from './styles';
import Header from '~/components/Header';
import Container from '~/components/Container';
import Content from '~/components/Content';

export default function Delivery() {
    useEffect(() => {
        document.title = 'Entregas';
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>Teste</h1>
                </Content>
            </Container>
        </>
    );
}
