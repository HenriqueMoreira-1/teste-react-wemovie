import styled from "styled-components";
import StyledNavbar from "./Navbar";

export const Navbar = styled(StyledNavbar)`
    background-color: ${({ theme }) => theme.color.gray[900]};
    padding: 18px 8px;

    .navbar__logo {
        font-size: ${({ theme }) => theme.size.lg};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.white};
    }

    @media (min-width: 768px) {
        padding: 18px 0px;
    }
`;
