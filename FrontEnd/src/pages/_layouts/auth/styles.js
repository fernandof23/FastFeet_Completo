import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    height: 100%;
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    text-align: center;
    background: ${colors.write};
    width: 100%;
    max-width: 360px;
    border-radius: 4px;
    padding: 20px 30px;

    @media (max-width: 500px) {
        padding: 30px;
        max-width: 350px;
    }

    img {
        width: 280px;
        margin-top: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        margin: 40px auto;

        p {
            align-self: flex-start;
            margin-bottom: 8px;
            margin-top: 20px;
            font-weight: bold;
            color: ${colors.textColor};
        }

        span {
            font-size: 10px;
            margin-top: 5px;
            align-self: flex-start;

            color: ${colors.error};
        }

        input {
            border: 1px solid #eee;
            height: 45px;
            padding: 0 15px;
            border-radius: 4px;
        }

        button {
            border: none;
            background: ${colors.primary};
            height: 45px;
            margin-top: 15px;
            border-radius: 4px;
            color: #fff;
            font-weight: bold;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, colors.primary)};
            }
        }
    }
`;
