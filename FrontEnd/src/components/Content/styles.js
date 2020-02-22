import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    margin: 20px 10px;
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

        td,
        th {
            text-align: left;
            padding: 16px;
        }

        td {
            color: ${colors.greyMedium};
        }

        tr {
            background: ${colors.write};
            border-radius: 4px;
        }

        tr:hover {
            background: #eee;
        }
    }
`;
