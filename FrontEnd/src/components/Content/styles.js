import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    margin: 20px 10px;
    background: ${colors.write};
    padding: 20px;
    border-radius: 4px;

    table {
        width: 100%;
        border-collapse: collapse;

        table,
        th {
            font-size: 16px;
            color: ${colors.greyMedium};
        }

        table,
        th:first-child {
            column-width: 300px;
        }

        td,
        th {
            text-align: left;
            padding: 16px;
        }

        td {
            color: ${colors.greyMedium};
        }

        tr + tr {
            border-top: 1px solid #eee;
        }

        tr:hover {
            background: #eee;
        }
    }
`;
