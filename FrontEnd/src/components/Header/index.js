import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Botoes } from './styles';
import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();

    const name = useSelector(state => state.user.profile);
    return (
        <Wrapper>
            <Content>
                <div>
                    <Link to="/">
                        <img src={logo} alt="FastFeet" />
                    </Link>
                    <Botoes>
                        <Link to="/delivery">
                            <p>ENCOMENDAS</p>
                        </Link>
                        <Link to="/deliveryman">
                            <p>ENTREGADORES</p>
                        </Link>
                        <Link to="/recipients">
                            <p>DESTINÁTARIOS</p>
                        </Link>
                        <Link to="/problems">
                            <p>PROBLEMAS</p>
                        </Link>
                    </Botoes>
                </div>

                <aside>
                    <p>{name.name}</p>
                    <button type="button" onClick={() => dispatch(signOut())}>
                        Sair do Sistema
                    </button>
                </aside>
            </Content>
        </Wrapper>
    );
}
