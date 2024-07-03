import { Link } from "react-router-dom";
import { MyCart } from "../Cart/MyCart/MyCart.styled";
import { StyledNavbarContainer } from "./NavbarContainer.styled";
import { Paths } from "../../routes/paths";

type NavbarProps = {
    className?: string;
};

export default function StyledNavbar({ className }: NavbarProps) {
    return (
        <div className={className}>
            <StyledNavbarContainer>
                <Link to={Paths.HOME}>
                    <h2 className="navbar__logo">WeMovies</h2>
                </Link>
                <MyCart />
            </StyledNavbarContainer>
        </div>
    );
}
