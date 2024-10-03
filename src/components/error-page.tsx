import { FallbackProps } from 'react-error-boundary';
import { StyledContainer } from './ui/styled-container';
import { Main } from './ui/main';

export function ErrorPage({ error }: FallbackProps) {
    return (
        <Main>
            <StyledContainer $isError>
                <h1>Oops.... something went wrong.</h1>
                <h2>{error?.message ?? 'Unknown error occured'}</h2>
            </StyledContainer>
        </Main>
    );
}
