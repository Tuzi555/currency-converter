import { StyledContainer } from './ui/styled-container';

export function ErrorMessage({ error }: { error?: Error | null }) {
    return (
        <StyledContainer $isError>
            <h1>Oops.... something went wrong.</h1>
            <h2>{error?.message ?? 'Unknown error occured'}</h2>
        </StyledContainer>
    );
}
