import styled from "styled-components";
import StyledCartItems from "./CartItems";

export const CartItems = styled(StyledCartItems)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${({ theme }) => theme.size.md};
    width: 100%;

    .cartItem__container {
        border-bottom: solid 1px ${({ theme }) => theme.color.gray[300]};
        margin-bottom: 21px;
    }

    .cardItem_headerDesktop {
        display: none;
        padding-bottom: 21px;

        p {
            color: ${({ theme }) => theme.color.gray[300]};
            font-size: ${({ theme }) => theme.size.sm};
            font-weight: ${({ theme }) => theme.fontWeight.bold};
            text-transform: uppercase;
        }

        @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 21px;
        }
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
            justify-content: space-between;
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

                    @media (min-width: 768px) { 
                        .cartItem__subtotalText {
                            display: none;
                        }
                    }
                }

                .cartItem__removeButtonDesktop {
                    display: none;
                }

                @media (min-width: 768px) {
                    width: 90%;
                    justify-content: space-between;

                    .cartItem__removeButtonDesktop {
                        display: flex;
                    }
                }
            }

            @media (min-width: 768px) {
                flex-direction: row;
                justify-content: start;

                .cartItem__infoTitle {
                    flex-direction: column;
                    width: 26%;
                    align-items: flex-start;
                    justify-content: center;
                }

                .cartItem__removeButton {
                    display: none;
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
            justify-content: space-between;
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

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;

            .cartItem__totalContainer {
                order: 2;
            }

            .cardItem__finishOrderButton {
                width: auto;
                padding-left: 60px;
                padding-right: 60px;
            }
        }
    }
`;
