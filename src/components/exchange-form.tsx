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
                <div className="input-container">
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
                <div className="input-container">
                    <label htmlFor="currency">Currency</label>
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
                    {convertedAmount.inputAmount.toLocaleString('cs-CZ', {
                        style: 'decimal',
                    })}{' '}
                    CZK ={' '}
                    {convertedAmount.convertedAmount.toLocaleString('cs-CZ', {
                        style: 'decimal',
                    })}{' '}
                    {convertedAmount.currency}
                </h2>
            ) : (
                <h2>Fill in the form to see the results.</h2>
            )}
        </StyledContainer>
    );
}

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    font-weight: 500;
    gap: 1rem;

    label {
        margin-bottom: 0.25rem;
        color: var(--text-muted);
    }

    select,
    input,
    button {
        border-color: var(--border-gray);
        border-style: solid;
        border-width: 1px;
        border-radius: 0.325rem;
        box-sizing: border-box;
        font-size: 1rem;
        padding: 0 0.5rem;
        height: 2rem;
    }

    button {
        color: #fafaf9;
        background-color: #44403c;
        border: 0px;
        font-weight: bold;
        transition: 0.3s;
        align-self: end;
    }

    button:hover {
        background-color: #78716c;
    }

    .input-container {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 48rem) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;
