import styled from 'styled-components';
import { CurrencyTable } from './components/currency-table';

export function App() {
    return (
        <Main>
            <CurrencyTable />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    justify-content: center;
`;
