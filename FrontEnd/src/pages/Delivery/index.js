import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Container } from './styles';
import Header from '~/components/Header';
import Container from '~/components/Container';
import Content from '~/components/Content';
import HeaderContent from '~/components/HeaderContent';

import { loadDeliveryRequest } from '~/store/modules/delivery/actions';

export default function Delivery() {
    const [delivery, setDelivery] = useState([]);

    const deliveryState = useSelector(state => state.delivery.delivery);

    useEffect(() => {
        document.title = 'Entregas';
    }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDeliveryRequest());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <HeaderContent>
                        <h1>Gerenciando encomentas</h1>
                        <div>
                            <h1>teste</h1>
                        </div>
                    </HeaderContent>
                    <h1>Teste</h1>
                </Content>
            </Container>
        </>
    );
}
