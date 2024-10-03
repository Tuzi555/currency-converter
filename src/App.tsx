import { CurrencyTable } from './components/currency-table';
import { ExchangeForm } from './components/exchange-form';
import { getExchangeRates } from './queries/exchange-rate';
import { useQuery } from '@tanstack/react-query';
import { LoadingPage } from './components/loading-page';
import { Main } from './components/ui/main';

export function App() {
    const { status, data, error } = useQuery({
        queryKey: ['rates'],
        queryFn: getExchangeRates,
    });

    if (status === 'pending') {
        return <LoadingPage />;
    }

    if (status === 'error') {
        throw error;
    }
    return (
        <Main>
            <ExchangeForm exchangeRates={data.exchangeRates} />
            <CurrencyTable exchangeRatesData={data} />
        </Main>
    );
}
