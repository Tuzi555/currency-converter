import { ExchangeRatesData } from '../types/exchange-rates-data';
import { transformRates } from '../utils/transformRates';

export async function getExchangeRates(): Promise<ExchangeRatesData> {
    const res = await fetch(
        `${import.meta.env.VITE_CNB_RATES_SERVER}/cnb-exchange-rates`
    );
    const transformedData = transformRates(await res.text());
    return transformedData;
}
