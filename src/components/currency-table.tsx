import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getExchangeRates } from '../queries/exchange-rate';

export function CurrencyTable() {
    const ratesQuery = useQuery({
        queryKey: ['rates'],
        queryFn: getExchangeRates,
    });

    if (!ratesQuery.data) {
        return null;
    }

    return (
        <StyledContainer>
            <h1>CZK Exchange rates</h1>
            <Table>
                <caption>
                    Latest exchange rates according to CNB (
                    {ratesQuery.data.date})
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {ratesQuery.data.exchangeRates.map((r) => (
                        <tr key={r.currency}>
                            <td>{r.currency}</td>
                            <td>{r.amount}</td>
                            <td>{r.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </StyledContainer>
    );
}

const borderColor = '#d4d4d8';
const mutedTextColor = '#71717a';

const StyledContainer = styled.div`
    border: 1px solid ${borderColor};
    border-radius: 0.75rem;
    padding: 0 2rem;
    margin: 2rem 0;
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

    tbody {
        :last-child {
            border-bottom: none;
        }

        tr:nth-of-type(even) {
            background-color: #e4e4e7;
        }
    }

    tr {
        border-bottom: 1px solid ${borderColor};
        text-align: right;
        padding: 0 0.5rem;

        :nth-child(1) {
            text-align: left;
        }

        th {
            color: ${mutedTextColor};
        }

        th,
        td {
            padding: 0.5rem 1rem;
        }
    }

    caption {
        caption-side: bottom;
        padding: 1rem;
        color: ${mutedTextColor};
    }
`;
