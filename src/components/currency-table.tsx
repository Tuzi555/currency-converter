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
            <Title>CZK Exchange rates</Title>
            <Table>
                <Caption>
                    Exchange rates according to CNB for today (here will be the
                    current date)
                </Caption>
                <thead>
                    <Tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Rate</th>
                    </Tr>
                </thead>
                <Tbody>
                    {rates.map((r) => (
                        <Tr>
                            <th scope="row">{r.currency}</th>
                            <td>{r.rate}</td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

const TableContainer = styled.div`
    border: 1px solid #e4e4e7;
    border-radius: 0.75rem;
    padding: 0 1rem;
    margin-top: 3rem;
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const Tbody = styled.tbody`
    :last-child {
        border-bottom: none;
    }
`;

const Tr = styled.tr`
    border-bottom: 1px solid #e4e4e7;

    :nth-child(1) {
        text-align: left;
    }
    :nth-child(2) {
        text-align: right;
    }

    th,
    td {
        padding: 0.5rem 0;
    }
`;

const Caption = styled.caption`
    caption-side: bottom;
    padding: 10px;
    color: #a1a1aa;
`;

const Title = styled.h1`
    margin: 0.5rem 0;
`;
