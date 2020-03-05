import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;

    div {
        display: flex;
        align-items: center;

        background: ${colors.write};

        border: none;
        height: 36px;
        border: 1px solid #eee;
        border-radius: 4px;
        margin-left: 16px;
        padding: 0 10px;

        input {
            border: none;
            &::placeholder {
                color: ${colors.greyLow};
            }
        }
    }
`;
