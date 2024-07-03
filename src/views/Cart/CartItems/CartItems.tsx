import { formatPriceToBRL } from "../../../utils/formatPriceToBRL";
import { ICartItemsTableProps } from "../../../types/cartItems";
import TrashIcon from "../../../assets/trash-icon.svg";
import { Card } from "../../../components/Card/Card.styled";
import { Button, ButtonPrimary } from "../../../components/Button/Button.styled";
import { InputStepper } from "../../../components/InputStepper/InputStepper.styled";

export default function StyledCartItems({
    className,
    products,
    totalOrderPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
    changeProductQuantity,
    removeProductFromCart,
    handleCompleteOrder,
}: ICartItemsTableProps) {
    return (
        <Card className={className}>
            <div className="cartItem__container">
                <div className="cardItem_headerDesktop">
                    <p>Produto</p>
                    <p>Qtd</p>
                    <p>Subtotal</p>
                    <p></p>
                </div>
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
                                    className="cartItem__removeButton"
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
                                <Button
                                    className="cartItem__removeButtonDesktop"
                                    onClick={() =>
                                        removeProductFromCart(product.id)
                                    }
                                >
                                    <img src={TrashIcon} alt="Trash icon" />
                                </Button>
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
