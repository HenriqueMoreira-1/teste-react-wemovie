import styled from "styled-components";
import StyledProductCard from "./ProductCard";

export const ProductCard = styled(StyledProductCard)`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 300px;
    padding: 10px 11px;

    font-weight: ${({ theme }) => theme.fontWeight.bold};

    .productCard__info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: center;

        margin-top: 7px;
        margin-bottom: 8px;

        .productCard__title {
            font-size: ${({ theme }) => theme.size.xs};
            color: ${({ theme }) => theme.color.gray[800]};
        }

        .productCard__price {
            font-size: ${({ theme }) => theme.size.md};
            color: ${({ theme }) => theme.color.gray[900]};
        }
    }

    .productCard_addedItemsCount {
        display: flex;
        align-items: center;
        gap: 4px;

        font-weight: ${({ theme }) => theme.fontWeight.normal};
    }

    button {
        width: 100%;
    }
`;
