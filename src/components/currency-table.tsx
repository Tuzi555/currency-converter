import styled from 'styled-components';
import { StyledContainer } from './ui/styled-container';
import { ExchangeRatesData } from '../types/exchange-rates-data';

export function CurrencyTable({
    exchangeRatesData,
}: {
    exchangeRatesData: ExchangeRatesData;
}) {
    return (
        <StyledContainer>
            <h1>CZK Exchange rates</h1>
            <Table>
                <caption>
                    Latest exchange rates according to CNB (
                    {exchangeRatesData.date})
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {exchangeRatesData.exchangeRates.map((r) => (
                        <tr key={r.currency} data-testid="exchange-rate-row">
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

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    tbody {
        :last-child {
            border-bottom: none;
        }

        tr:nth-of-type(even) {
            background-color: #e7e5e4;
        }
    }

    tr {
        border-bottom: 1px solid var(--border-gray);
        text-align: right;
        padding: 0 0.5rem;

        :nth-child(1) {
            text-align: left;
        }

        th {
            color: var(--text-muted);
        }

        th,
        td {
            padding: 0.5rem 1rem;
        }
    }

    caption {
        caption-side: bottom;
        padding: 1rem;
        color: var(--text-muted);
    }
`;
