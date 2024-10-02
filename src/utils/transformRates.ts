import { ExchangeRate } from '../types/exchange-rate';
import { ExchangeRatesData } from '../types/exchange-rates-data';

export function transformRates(input: string): ExchangeRatesData {
    const lines = input.split(/\r\n|\r|\n/);

    const dateParts = lines[0].match(/^(.*)(?=\s#)/);
    if (!dateParts) {
        throw new Error('could not find date in the input');
    }

    const rates: ExchangeRate[] = lines.slice(2, -1).map((l) => {
        const parts = l.split('|');
        return {
            currency: parts[3],
            amount: parseInt(parts[2]),
            rate: parseFloat(parts[parts.length - 1]),
        };
    });

    return {
        date: dateParts[1],
        exchangeRates: rates.sort((a, b) => {
            if (a.currency < b.currency) return -1;
            if (a.currency > b.currency) return 1;
            return 0;
        }),
    };
}
