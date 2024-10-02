import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid var(--border-gray);
    border-radius: 0.75rem;
    padding: 0 2rem;
    width: 40rem;
    box-sizing: border-box;

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
