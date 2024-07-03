import { formatPriceToBRL } from "../../../utils/formatPriceToBRL";
import TrashIcon from "../../../assets/trash-icon.svg";
import { CartItemsTableProps } from "../../../types/cartItems";
import { Card } from "../../../components/Card/Card.styled";
import { InputStepper } from "../../../components/InputStepper/InputStepper.styled";
import { Button, ButtonPrimary } from "../../../components/Button/Button.styled";

export default function StyledCartItemsTableDesktop({
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
            <table className="cartItem__table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="cartItem__tableBody">
                    {products.map((product) => (
                        <tr className="cartItem__bodyRow" key={product.id}>
                            <td className="cartItem__product">
                                <img
                                    src={product.image}
                                    alt="Product image"
                                    className="cartItem__image"
                                />
                                <div className="cartItem__productInfo">
                                    <span className="cartItem__title">
                                        {product.title}
                                    </span>
                                    <span className="cartItem__price">
                                        {formatPriceToBRL(product.price)}
                                    </span>
                                </div>
                            </td>
                            <td className="cartItem__quantity">
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
                            </td>
                            <td className="cartItem__subtotal">
                                <span className="cartItem__price">
                                    {formatPriceToBRL(
                                        product.price * product.quantity
                                    )}
                                </span>
                            </td>
                            <td className="cartItem__removeItem">
                                <Button
                                    onClick={() =>
                                        removeProductFromCart(product.id)
                                    }
                                >
                                    <img src={TrashIcon} alt="Trash icon" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cardItem__finishOrder">
                <ButtonPrimary
                    className="cardItem__finishOrderButton"
                    onClick={handleCompleteOrder}
                >
                    Finalizar pedido
                </ButtonPrimary>
                <div className="cartItem__totalContainer">
                    <span className="cartItem__total">Total</span>
                    <span className="cartItem__totalPrice">
                        {formatPriceToBRL(totalOrderPrice)}
                    </span>
                </div>
            </div>
        </Card>
    );
}
