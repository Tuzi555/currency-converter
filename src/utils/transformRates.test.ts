import { ExchangeRatesData } from '../types/exchange-rates-data';
import { expect, test } from 'vitest';
import { transformRates } from './transformRates';

test('should correctly transform exchange rates data', () => {
    const input = `02 Oct 2024 #192
Country|Currency|Amount|Code|Rate
Bulgaria|lev|1|BGN|12.941
Brazil|real|1|BRL|4.219
Canada|dollar|1|CAD|16.955
Australia|dollar|1|AUD|15.772
`;
    const result = transformRates(input);

    // Expected structure of transformed data
    const expected: ExchangeRatesData = {
        date: '02 Oct 2024',
        exchangeRates: [
            { currency: 'AUD', amount: 1, rate: 15.772 },
            { currency: 'BRL', amount: 1, rate: 4.219 },
            { currency: 'BGN', amount: 1, rate: 12.941 },
            { currency: 'CAD', amount: 1, rate: 16.955 },
        ].sort((a, b) => (a.currency < b.currency ? -1 : 1)),
    };

    expect(result).toEqual(expected);
});

test('should throw an error if the date is missing', () => {
    const invalidInput = `Country|Currency|Amount|Code|Rate
        USA|dollar|1|USD|22.867`;

    expect(() => transformRates(invalidInput)).toThrowError(
        'could not find date in the input'
    );
});
