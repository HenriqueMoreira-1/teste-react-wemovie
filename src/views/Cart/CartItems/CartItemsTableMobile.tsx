import { formatPriceToBRL } from "../../../utils/formatPriceToBRL";
import { Button, ButtonPrimary } from "../../ui/Button/Button.styled";
import { Card } from "../../ui/Card/Card.styled";
import { CartItemsTableProps } from "../../../types/cartItems";
import TrashIcon from "../../../assets/trash-icon.svg";
import { InputStepper } from "../../ui/InputStepper/InputStepper.styled";

export default function StyledCartItemsTableMobile({
    className,
    products,
    totalOrderPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
    changeProductQuantity,
    removeProductFromCart,
    handleCompleteOrder,
}: CartItemsTableProps) {
    return (
        <Card className={className}>
            <div className="cartItem__container">
                {products.map((product) => (
                    <div
                        className="cartItem__productContainer"
                        key={product.id}
                    >
                        <img
                            src={product.image}
                            alt="Product image"
                            className="cartItem__image"
                        />
                        <div className="cartItem__info">
                            <div className="cartItem__infoTitle">
                                <span className="cartItem__title">
                                    {product.title}
                                </span>
                                <span className="cartItem__price">
                                    {formatPriceToBRL(product.price)}
                                </span>
                                <Button
                                    onClick={() =>
                                        removeProductFromCart(product.id)
                                    }
                                >
                                    <img src={TrashIcon} alt="Trash icon" />
                                </Button>
                            </div>
                            <div className="cartItem__infoPrice">
                                <InputStepper
                                    decrease={() =>
                                        decreaseProductQuantity(product)
                                    }
                                    increase={() =>
                                        increaseProductQuantity(product)
                                    }
                                    onChange={(e) =>
                                        changeProductQuantity(
                                            product,
                                            Number(e.target.value)
                                        )
                                    }
                                    value={product.quantity}
                                />
                                <div className="cartItem__subtotal">
                                    <span className="cartItem__subtotalText">
                                        Subtotal
                                    </span>
                                    <span className="cartItem__price">
                                        {formatPriceToBRL(
                                            product.price * product.quantity
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cardItem__finishOrder">
                <div className="cartItem__totalContainer">
                    <span className="cartItem__total">Total</span>
                    <span className="cartItem__totalPrice">
                        {formatPriceToBRL(totalOrderPrice)}
                    </span>
                </div>
                <ButtonPrimary
                    className="cardItem__finishOrderButton"
                    onClick={handleCompleteOrder}
                >
                    Finalizar pedido
                </ButtonPrimary>
            </div>
        </Card>
    );
}
