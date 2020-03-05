import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    margin: 30px auto;
    max-width: ${props => (props.maxWight ? props.maxWight : '1200px')};

    span {
        font-size: 10px;
        color: ${colors.primary};
        margin-top: 0px;
    }

    h1 {
        font-size: 24px;
        color: ${colors.greyStrong};
    }
`;
