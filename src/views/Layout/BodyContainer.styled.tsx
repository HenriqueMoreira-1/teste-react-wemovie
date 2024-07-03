import styled from "styled-components";

export const BodyContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    margin: 0 16px 16px 16px;

    @media (min-width: 1024px) {
        margin: ${({ theme }) => theme.size.lg} 240px;
    }
`;
