import styled from 'styled-components';
import { Spinner } from './ui/spinner';

export function LoadingPage() {
    return (
        <StyledDiv>
            <Spinner />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
`;
