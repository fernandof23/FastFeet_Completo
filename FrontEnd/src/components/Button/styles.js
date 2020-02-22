import styled from 'styled-components';
import colors from '~/styles/colors';

export const Button = styled.button`
    border: 0;
    background: ${props =>
        props.background ? props.background : colors.primary};

    border-radius: ${props =>
        props.borderRadius ? props.borderRadius : '4px'};

    width: ${props => (props.width ? props.width : '142px')};

    height: ${props => (props.height ? props.height : '36px')};

    color: ${props => (props.color ? props.color : colors.write)};

    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};

    display: flex;

    align-items: center;

    justify-content: space-around;

    padding: 0 13px;
`;
