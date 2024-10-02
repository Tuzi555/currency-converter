import styled from 'styled-components';
import { CurrencyTable } from './components/currency-table';
import { ExchangeForm } from './components/exchange-form';
import { getExchangeRates } from './queries/exchange-rate';
import { useQuery } from '@tanstack/react-query';
import { ErrorMessage } from './components/error-page';

export function App() {
    const { status, data, error } = useQuery({
        queryKey: ['rates'],
        queryFn: getExchangeRates,
    });

    if (status === 'pending') {
        return null;
    }

    if (status === 'error') {
        return (
            <Main>
                <ErrorMessage error={error} />
            </Main>
        );
    }
    return (
        <Main>
            <ExchangeForm exchangeRates={data.exchangeRates} />
            <CurrencyTable exchangeRatesData={data} />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;

    @media only screen and (max-width: 40rem) {
        gap: 0.625rem;
        padding: 0;
    }
`;
