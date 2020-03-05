import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
    margin: 20px 10px;
    padding: 20px;
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
            padding: 16px;
        }

        tr {
            background: ${colors.write};
            color: ${colors.greyMedium};
            border-radius: 4px;
        }

        tr:hover {
            background: #eee;
        }
    }
`;
