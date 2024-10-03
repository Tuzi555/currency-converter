import styled from 'styled-components';

export function ArrowsIcon() {
    return (
        <Svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
            />
        </Svg>
    );
}

const Svg = styled.svg`
    color: #b45309;
    display: block;
    margin: auto;
`;
