import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    margin: 10px 5px;
    padding: 0px;
    border-radius: 4px;

    table {
        width: 100%;
        border-collapse: collapse;

        th {
            font-size: 16px;
            color: ${colors.greyMedium};
        }

        td,
        th {
            text-align: left;
            padding: 20px 20px 20px;

            > div {
                display: flex;
                align-items: baseline;
                justify-content: center;
                background: #dff0df;
                color: #2ca42b;
                padding: 5px;
                width: 120px;
                border-radius: 15px;
                font-weight: bold;
                font-size: 14px;
            }
        }

        tr {
            border-bottom: 20px solid #f5f5f5;
            background: ${colors.write};
            color: ${colors.greyMedium};
        }

        tr:hover {
            background: #eee;
        }

        td:nth-child(7) {
            width: 10px;
            text-align: right;
        }
    }
`;
