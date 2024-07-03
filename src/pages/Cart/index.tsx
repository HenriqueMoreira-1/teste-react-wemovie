import { useNavigate } from "react-router-dom";

import useScreenSize from "../../hooks/useScreenSize";
import { useCartProducts } from "../../hooks/useCartProducts";

import { Paths } from "../../routes/paths";
import { CartItemsTableDesktop } from "../../views/Cart/CartItems/CartItemsTableDesktop.styled";
import { CartItemsTableMobile } from "../../views/Cart/CartItems/CartItemsTableMobile.styled";
import { EmptyCartCard } from "../../views/Cart/CartItems/EmptyCartCard.styled";

export default function Cart() {
    const {
        selectedProducts,
        totalOrderPrice,
        increaseProductQuantity,
        decreaseProductQuantity,
        changeProductQuantity,
        removeProductFromCart,
        clearCart,
    } = useCartProducts();
    const navigate = useNavigate();
    const { screenSize, breakpoints } = useScreenSize();

    const handleCompleteOrder = () => {
        clearCart();
        navigate(Paths.PURCHASE_COMPLETE);
    };

    if (selectedProducts.length) {
        if (screenSize.width > breakpoints.sm) {
            return (
                <CartItemsTableDesktop
                    products={selectedProducts}
                    totalOrderPrice={totalOrderPrice}
                    increaseProductQuantity={increaseProductQuantity}
                    decreaseProductQuantity={decreaseProductQuantity}
                    changeProductQuantity={changeProductQuantity}
                    removeProductFromCart={removeProductFromCart}
                    handleCompleteOrder={handleCompleteOrder}
                />
            );
        }

        return (
            <CartItemsTableMobile
                products={selectedProducts}
                totalOrderPrice={totalOrderPrice}
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
                changeProductQuantity={changeProductQuantity}
                removeProductFromCart={removeProductFromCart}
                handleCompleteOrder={handleCompleteOrder}
            />
        );
    } else {
        return <EmptyCartCard />;
    }
}
