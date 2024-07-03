import { Link } from "react-router-dom";
import { MyCart } from "../Cart/MyCart/MyCart.styled";
import { StyledNavbarContainer } from "./NavbarContainer.styled";
import { Paths } from "../../routes/paths";
import { INavbarProps } from "./INavbar";

export default function StyledNavbar({ className }: INavbarProps) {
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
