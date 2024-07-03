import styled from "styled-components";
import StyledMyCart from "./MyCart";

export const MyCart = styled(StyledMyCart)`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${({ theme }) => theme.size.sm};
    color: ${({ theme }) => theme.color.white};
    text-align: right;
    text-decoration: none;

    & small {
        font-size: ${({ theme }) => theme.size.xs};
        color: ${({ theme }) => theme.color.gray[300]};
    }

    & .myCart__itemCount {
        display: flex;
        flex-direction: column;

        .myCart__text {
            display: none;
        }
    }

    @media (min-width: 768px) {
        & .myCart__itemCount {
            .myCart__text {
                display: inline;
            }
        }
    }
`;
