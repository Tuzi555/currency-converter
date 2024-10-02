export function convertAmount(
    inputAmount: number,
    rate: number,
    exchangeAmount: number
) {
    return (inputAmount / rate) * exchangeAmount;
}
