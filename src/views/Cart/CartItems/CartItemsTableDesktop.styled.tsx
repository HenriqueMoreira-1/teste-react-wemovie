import styled from "styled-components";
import StyledCartItemsTable from "./CartItemsTableDesktop";

export const CartItemsTableDesktop = styled(StyledCartItemsTable)`
    padding: ${({ theme }) => theme.size.xl};
    width: 100%;

    .cartItem__table {
        width: 100%;
        margin-bottom: 21px;
        border-bottom: solid 1px ${({ theme }) => theme.color.gray[300]};
    }

    .cartItem__tableBody:before {
        content: "-";
        display: block;
        line-height: 21px;
        color: transparent;
    }

    th {
        color: ${({ theme }) => theme.color.gray[300]};
        font-size: ${({ theme }) => theme.size.sm};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        text-transform: uppercase;
        text-align: left;
    }

    .cartItem__price {
        color: ${({ theme }) => theme.color.gray[900]};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: ${({ theme }) => theme.size.md};
    }

    .cartItem__bodyRow > td {
        padding-bottom: 21px;
    }

    .cartItem__product {
        display: flex;
        align-items: center;
        gap: 52px;
        /* width: 40%; */

        .cartItem__image {
            width: 89px;
            height: 114px;
        }

        .cartItem__productInfo {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .cartItem__title {
                color: ${({ theme }) => theme.color.gray[900]};
                font-weight: ${({ theme }) => theme.fontWeight.bold};
                font-size: ${({ theme }) => theme.size.sm};
            }
        }
    }

    .cartItem__quantity {
        width: 20%;
        margin-right: 52px;
    }

    .cartItem__subtotal {
        width: 30%;
    }

    .cartItem__removeItem {
        width: 20px;
    }

    .cardItem__finishOrder {
        display: flex;
        justify-content: space-between;

        .cardItem__finishOrderButton {
            padding-left: 60px;
            padding-right: 60px;

            font-size: ${({ theme }) => theme.size.sm};
        }

        .cartItem__totalContainer {
            display: flex;
            align-items: center;
            gap: 20px;

            .cartItem__total {
                color: ${({ theme }) => theme.color.gray[300]};
                font-weight: ${({ theme }) => theme.fontWeight.bold};
                text-transform: uppercase;
                font-size: ${({ theme }) => theme.size.sm};
            }

            .cartItem__totalPrice {
                color: ${({ theme }) => theme.color.gray[900]};
                font-weight: ${({ theme }) => theme.fontWeight.bold};
                font-size: ${({ theme }) => theme.size.xl};
            }
        }
    }
`;
