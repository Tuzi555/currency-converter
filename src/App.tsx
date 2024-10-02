import styled from 'styled-components';
import { CurrencyTable } from './components/currency-table';
import { ExchangeForm } from './components/exchange-form';
import { getExchangeRates } from './queries/exchange-rate';
import { useQuery } from '@tanstack/react-query';

export function App() {
    const ratesQuery = useQuery({
        queryKey: ['rates'],
        queryFn: getExchangeRates,
    });

    if (!ratesQuery.data) {
        return null;
    }

    return (
        <Main>
            <ExchangeForm exchangeRates={ratesQuery.data.exchangeRates} />
            <CurrencyTable exchangeRatesData={ratesQuery.data} />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;
