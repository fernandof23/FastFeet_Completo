import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    height: 64px;
    padding: 0 30px;
    background: ${colors.write};
`;
export const Content = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;

        img {
            width: 150px;
            padding-right: 30px;
            border-right: 1px solid #eee;
        }
    }

    aside {
        text-align: right;

        p {
            font-size: 14px;
            color: ${colors.greyMedium};
        }

        button {
            color: ${colors.error};
            border: none;
            background: none;
            font-size: 13px;
            transition: font-size 0.2s;

            &:hover {
                font-size: 14px;
            }
        }
    }
`;
export const Botoes = styled.div`
    margin-left: 30px;

    a {
        font-size: 15px;
        font-weight: bold;
        color: ${colors.greyLow};

        & + a {
            padding-left: 20px;
        }

        transition: color 0.2s;

        &:hover {
            color: ${colors.greyStrong};
        }
    }
`;
