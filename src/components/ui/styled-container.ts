import styled from 'styled-components';

export const StyledContainer = styled.div<{ $isError?: boolean }>`
    border: 1px solid
        ${(props) => (props.$isError ? '#7f1d1d' : 'var(--border-gray)')};
    border-radius: 0.75rem;
    padding: 0 2rem;
    width: 40rem;
    box-sizing: border-box;

    ${(props) => (props.$isError ? 'background-color: #fca5a5' : '')};
    ${(props) => (props.$isError ? 'color: #450a0a' : '')};

    h1,
    h2 {
        margin: 0.5rem 0;
        text-align: center;
    }

    @media only screen and (max-width: 48rem) {
        width: 80%;
    }

    @media only screen and (max-width: 40rem) {
        width: 100%;
    }
`;
