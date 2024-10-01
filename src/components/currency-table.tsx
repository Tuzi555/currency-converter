import styled from 'styled-components';
import { Currency } from '../types/currency';

export function CurrencyTable() {
    const rates: Currency[] = [
        { currency: 'AUD', rate: 23.282 },
        { currency: 'EUR', rate: 25.101 },
        { currency: 'DKK', rate: 4.34 },
    ];

    return (
        <TableContainer>
            <h1>CZK Exchange rates</h1>
            <Table>
                <caption>
                    Exchange rates according to CNB for today (here will be the
                    current date)
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map((r) => (
                        <tr>
                            <td>{r.currency}</td>
                            <td>{r.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    );
}

const borderColor = '#a1a1aa';

const TableContainer = styled.div`
    border: 1px solid ${borderColor};
    border-radius: 0.75rem;
    padding: 0 1rem;
    margin-top: 3rem;
    width: 640px;

    h1 {
        margin: 0.5rem 0;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        width: 80%;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    tbody :last-child {
        border-bottom: none;
    }

    tr {
        border-bottom: 1px solid ${borderColor};

        :nth-child(1) {
            text-align: left;
        }
        :nth-child(2) {
            text-align: right;
        }

        th {
            color: #71717a;
        }

        th,
        td {
            padding: 0.5rem 0;
        }
    }

    caption {
        caption-side: bottom;
        padding: 10px;
        color: #52525b;
    }
`;
