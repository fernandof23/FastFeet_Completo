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
                background: ${colors.primary};
                color: ${colors.write};
                width: 100px;
                padding: 5px;
                border-radius: 15px;
                font-weight: bold;
            }
        }



        tr {
            border-bottom:20px solid #f5f5f5;
            background: ${colors.write};
            color: ${colors.greyMedium};

        }

        tr:hover {
            background: #eee;
        }

        td:nth-child(7){
            width:10px;
            text-align:right;
        }
    }
`;
