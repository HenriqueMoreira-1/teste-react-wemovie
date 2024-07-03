import { Card } from "../ui/Card/Card.styled";
import OrderCompleted from "../../assets/order-completed.svg";
import { ButtonPrimary } from "../ui/Button/Button.styled";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/paths";

type PurchaseCompleted = { className?: string };

export default function StyledPurchaseCompleted({
    className,
}: PurchaseCompleted) {
    const navigate = useNavigate();

    return (
        <Card className={className}>
            <h1 className="purchaseComplete__heading">
                Compra realizada com sucesso!
            </h1>
            <img
                className="purchaseComplete__image"
                src={OrderCompleted}
                alt="Order completed image"
            />
            <ButtonPrimary
                onClick={() => navigate(Paths.HOME)}
                className="purchaseComplete__button"
            >
                Voltar
            </ButtonPrimary>
        </Card>
    );
}
