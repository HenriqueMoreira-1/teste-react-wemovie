import { Link } from "react-router-dom";
import ShoppingBag from "../../../assets/shopping-bag.svg";
import { Paths } from "../../../routes/paths";
import { useCartProducts } from "../../../hooks/useCartProducts";

type MyCartProps = {
    className?: string;
};

export default function StyledMyCart({ className }: MyCartProps) {
    const { totalNumberOfItems } = useCartProducts();

    return (
        <Link to={Paths.CART} className={className}>
            <div className="myCart__itemCount">
                <span className="myCart__text">Meu Carrinho</span>
                <small>{totalNumberOfItems} itens</small>
            </div>
            <div>
                <img src={ShoppingBag} alt="Shopping bag icon" />
            </div>
        </Link>
    );
}
