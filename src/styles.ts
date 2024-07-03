import styled from "styled-components";

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;