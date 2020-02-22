import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Botoes } from './styles';
import logo from '~/assets/logo.png';

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <div>
                    <Link to="/">
                        <img src={logo} alt="FastFeet" />
                    </Link>
                    <Botoes>
                        <Link to="/">
                            <p>ENCOMENDAS</p>
                        </Link>
                        <Link to="/">
                            <p>ENTREGADORES</p>
                        </Link>
                        <Link to="/">
                            <p>DESTINÁTARIOS</p>
                        </Link>
                        <Link to="/">
                            <p>PROBLEMAS</p>
                        </Link>
                    </Botoes>
                </div>

                <aside>
                    <p>Fernando Santos</p>
                    <button type="button" onClick={() => { }}>
                        Sair do Sistema
                    </button>
                </aside>
            </Content>
        </Wrapper>
    );
}
