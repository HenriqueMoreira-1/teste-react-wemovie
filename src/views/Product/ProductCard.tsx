import { formatPriceToBRL } from "../../utils/formatPriceToBRL";
import { IProductCardProps } from "../../types/productList";
import ShoppingCart from "../../assets/shopping-cart.svg";
import { Card } from "../../components/Card/Card.styled";
import { ButtonPrimary, ButtonSuccess } from "../../components/Button/Button.styled";
import { useCartProducts } from "../../hooks/useCartProducts";

export default function StyledProductCard({
    product,
    className,
}: IProductCardProps) {
    const { selectedProducts, addProductToCart } = useCartProducts();

    const quantityOfProductInCart =
        selectedProducts.find(
            (selectedProduct) => selectedProduct.id === product.id
        )?.quantity || 0;
    const isProductInCart = !!selectedProducts.find(
        (selectedProduct) => selectedProduct.id === product.id
    );
    const newProduct = { ...product, quantity: 1 };

    return (
        <Card>
            <div className={className}>
                <img
                    src={product.image}
                    alt={product.title}
                    height={188}
                    width={147}
                />
                <div className="productCard__info">
                    <h5 className="productCard__title">{product.title}</h5>
                    <span className="productCard__price">
                        {formatPriceToBRL(product.price)}
                    </span>
                </div>

                {isProductInCart ? (
                    <ButtonSuccess onClick={() => addProductToCart(newProduct)}>
                        <div className="productCard_addedItemsCount">
                            <img
                                src={ShoppingCart}
                                alt="Cart icon"
                                width={14}
                                height={14}
                            />
                            <span>{quantityOfProductInCart}</span>
                        </div>
                        Item adicionado
                    </ButtonSuccess>
                ) : (
                    <ButtonPrimary onClick={() => addProductToCart(newProduct)}>
                        <div className="productCard_addedItemsCount">
                            <img
                                src={ShoppingCart}
                                alt="Cart icon"
                                width={14}
                                height={14}
                            />
                            <span>{quantityOfProductInCart}</span>
                        </div>
                        Adicionar ao carrinho
                    </ButtonPrimary>
                )}
            </div>
        </Card>
    );
}
