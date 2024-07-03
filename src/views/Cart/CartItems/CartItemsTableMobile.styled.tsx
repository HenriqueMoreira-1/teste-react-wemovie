import styled from "styled-components";
import StyledCartItemsTableMobile from "./CartItemsTableMobile";

export const CartItemsTableMobile = styled(StyledCartItemsTableMobile)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${({ theme }) => theme.size.md};
    width: 100%;
    height: 90vh;

    .cartItem__container {
        border-bottom: solid 1px ${({ theme }) => theme.color.gray[300]};
        margin-bottom: 21px;
    }

    .cartItem__productContainer {
        display: flex;
        gap: 16px;
        padding-bottom: 21px;

        .cartItem__image {
            width: 64px;
            height: 82px;
        }

        .cartItem__price {
            color: ${({ theme }) => theme.color.gray[900]};
            font-weight: ${({ theme }) => theme.fontWeight.bold};
            font-size: ${({ theme }) => theme.size.md};
        }

        .cartItem__info {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 16px;

            .cartItem__infoTitle {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;
                gap: 16px;

                .cartItem__title {
                    color: ${({ theme }) => theme.color.gray[900]};
                    font-weight: ${({ theme }) => theme.fontWeight.bold};
                    font-size: ${({ theme }) => theme.size.sm};

                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }

            .cartItem__infoPrice {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .cartItem__subtotal {
                    display: flex;
                    flex-direction: column;

                    .cartItem__subtotalText {
                        color: ${({ theme }) => theme.color.gray[300]};
                        font-weight: ${({ theme }) => theme.fontWeight.bold};
                        font-size: ${({ theme }) => theme.size.xs};
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    .cardItem__finishOrder {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .cartItem__totalContainer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;

            .cartItem__total {
                color: ${({ theme }) => theme.color.gray[300]};
                font-weight: ${({ theme }) => theme.fontWeight.bold};
                font-size: ${({ theme }) => theme.size.sm};
                text-transform: uppercase;
            }

            .cartItem__totalPrice {
                color: ${({ theme }) => theme.color.gray[900]};
                font-weight: ${({ theme }) => theme.fontWeight.bold};
                font-size: ${({ theme }) => theme.size.xl};
            }
        }

        .cardItem__finishOrderButton {
            width: 100%;

            font-size: ${({ theme }) => theme.size.sm};
        }
    }
`;
