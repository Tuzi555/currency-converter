import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;

    @media only screen and (max-width: 40rem) {
        gap: 0.625rem;
        padding: 0;
    }
`;
