import styled from 'styled-components';
import { DancingDots } from './ui/dancing-dots';

export function LoadingPage() {
    return (
        <StyledDiv>
            <DancingDots />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
`;
