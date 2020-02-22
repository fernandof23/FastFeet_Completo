import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 24px;
        color: ${colors.greyStrong};
    }

    div {
        display: flex;

        aside {
            display: flex;
            align-items: center;
            border: 1px solid #eee;
            background: ${colors.write};
            border-radius: 4px;
            margin-left: 16px;
            padding: 0 10px;

            input {
                border: none;
                height: 36px;

                &::placeholder {
                    color: ${colors.greyLow};
                }
            }
        }
    }
`;
