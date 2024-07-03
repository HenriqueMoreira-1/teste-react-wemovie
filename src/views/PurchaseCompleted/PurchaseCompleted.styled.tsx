import styled from "styled-components";
import StyledPurchaseCompleted from "./PurchaseCompleted";

export const PurchaseCompleted = styled(StyledPurchaseCompleted)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    padding: 64px 0;
    width: 100%;

    .purchaseComplete__heading {
        color: ${({ theme }) => theme.color.gray[900]};
        font-size: ${({ theme }) => theme.size.lg};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        text-align: center;

        width: 55%;
    }

    .purchaseComplete__image {
        width: 295px;
        height: 307px;
    }

    .purchaseComplete__button {
        padding-left: 60px;
        padding-right: 60px;

        font-size: ${({ theme }) => theme.size.sm};
    }
`;
