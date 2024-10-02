import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid var(--border-gray);
    border-radius: 0.75rem;
    padding: 0 2rem;
    width: 640px;
    box-sizing: border-box;

    h1,
    h2 {
        margin: 0.5rem 0;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        width: 80%;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;
