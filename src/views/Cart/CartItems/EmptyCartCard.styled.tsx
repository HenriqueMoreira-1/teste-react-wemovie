import styled from "styled-components";
import StyledEmptyCartCard from "./EmptyCartCard";

export const EmptyCartCard = styled(StyledEmptyCartCard)`
    padding: 64px 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .emptyCart__heading {
        color: ${({ theme }) => theme.color.gray[900]};
        font-size: ${({ theme }) => theme.size.lg};
        text-align: center;
        width: 55%;
    }

    .emptyCart__image {
        width: 447px;
        height: 265px;
    }

    .emptyCart__button {
        padding-left: 60px;
        padding-right: 60px;

        font-size: ${({ theme }) => theme.size.sm};
    }
`;
