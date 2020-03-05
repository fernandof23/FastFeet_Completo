import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdAdd, MdSearch } from 'react-icons/md';

import Header from '~/components/Header';
import Container from '~/components/Container';
import Content from '~/components/Content';
import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';

import { loadDeliveryRequest } from '~/store/modules/delivery/actions';

// import { Container } from './styles';

export default function Delivery() {
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
                <h1>Gerenciando Encomendas</h1>
                <HeaderContent>
                    <div>
                        <MdSearch size={20} color="#999" />
                        <input
                            type="search"
                            name="search"
                            placeholder="Buscar por Encomendas"
                        />
                    </div>

                    <Button>
                        <MdAdd size={20} color="#fff" fontWeight="bold" />
                        CADASTRAR
                    </Button>
                </HeaderContent>
                <Content>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Destinatário</th>
                            <th>Entregador</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>#01</td>
                                <td>Fernando Santos</td>
                                <td>Bruno Rosa</td>
                                <td>Capelinha </td>
                                <td>Minas Gerais</td>
                                <td>Entregue</td>
                                <td>...</td>
                            </tr>
                        </tbody>

                        <div>
                            <td>#01</td>
                            <td>Fernando</td>
                        </div>
                    </table>
                </Content>
            </Container>
        </>
    );
}
