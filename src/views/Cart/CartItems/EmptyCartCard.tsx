import { ButtonPrimary } from "../../ui/Button/Button.styled";
import EmptyCart from "../../../assets/empty-cart.svg";
import { Card } from "../../ui/Card/Card.styled";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/paths";

type EmptyCartCard = { className?: string };

export default function StyledEmptyCartCard({ className }: EmptyCartCard) {
    const navigate = useNavigate();

    return (
        <Card className={className}>
            <h1 className="emptyCart__heading">
                Parece que não há nada por aqui :(
            </h1>
            <img
                src={EmptyCart}
                alt="Empty cart image indicating page refresh"
                className="emptyCart__image"
            />
            <ButtonPrimary
                onClick={() => navigate(Paths.HOME)}
                className="emptyCart__button"
            >
                Voltar
            </ButtonPrimary>
        </Card>
    );
}
