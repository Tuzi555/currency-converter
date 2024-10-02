import { useState } from 'react';
import { ExchangeRate } from '../types/exchange-rate';
import { StyledContainer } from './ui/styled-container';
import styled from 'styled-components';

type ConvertedAmount = {
    inputAmount: number;
    currency: string;
    convertedAmount: number;
};

export function ExchangeForm({
    exchangeRates,
}: {
    exchangeRates: ExchangeRate[];
}) {
    const [convertedAmount, setConvertedAmount] = useState<
        ConvertedAmount | undefined
    >(undefined);

    console.log(convertedAmount);

    function handleConversion(e: React.FormEvent<HTMLFormElement>) {
        const form = e.target as HTMLFormElement;
        if (form.reportValidity()) {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const inputAmount = formData.get('amount');
            const currency = formData.get('currency');
            const exchangeRate = exchangeRates.find(
                (r) => r.currency === currency
            );
            if (!inputAmount)
                throw new Error(
                    'Unreachable exception: amount was null on form submit'
                );
            if (!currency)
                throw new Error(
                    'Unreachable exception: currency was null on form submit'
                );
            if (!exchangeRate)
                throw new Error(
                    'Unreachable exception: currency not found in available currencies'
                );

            const inputAmountNumber = parseFloat(inputAmount.toString());

            setConvertedAmount({
                inputAmount: inputAmountNumber,
                currency: currency.toString(),
                convertedAmount:
                    (inputAmountNumber / exchangeRate?.rate) *
                    exchangeRate?.amount,
            });
        }
    }

    return (
        <StyledContainer>
            <h1>CZK Converter</h1>
            <StyledForm onSubmit={handleConversion}>
                <div>
                    <label htmlFor="amount">CZK amount</label>
                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        step="any"
                        min={0}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="currency">CZK amount</label>
                    <select id="currency" name="currency">
                        {exchangeRates.map((r) => (
                            <option key={r.currency} value={r.currency}>
                                {r.currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Convert</button>
            </StyledForm>
            {convertedAmount ? (
                <h2>
                    {convertedAmount.inputAmount} CZK ={' '}
                    {convertedAmount.convertedAmount.toFixed(2)}{' '}
                    {convertedAmount.currency}
                </h2>
            ) : (
                <h2>Fill in the form to see results.</h2>
            )}
        </StyledContainer>
    );
}

const StyledForm = styled.form`
    display: grid;
`;
