import OrderCompleted from "../../assets/order-completed.svg";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/paths";
import { Card } from "../../components/Card/Card.styled";
import { ButtonPrimary } from "../../components/Button/Button.styled";
import { IPurchaseCompleted } from "./IPurchaseCompleted";

export default function StyledPurchaseCompleted({
    className,
}: IPurchaseCompleted) {
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
