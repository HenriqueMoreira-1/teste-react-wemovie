import EmptyCart from "../../../assets/empty-cart.svg";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/paths";
import { Card } from "../../../components/Card/Card.styled";
import { ButtonPrimary } from "../../../components/Button/Button.styled";

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
