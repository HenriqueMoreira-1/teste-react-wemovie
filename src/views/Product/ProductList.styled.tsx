import styled from "styled-components";
import StyledProductList from "./ProductList";

export const ProductList = styled(StyledProductList)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.size.md};

    width: 100%;
`;
