import { useNavigate } from "react-router-dom";


import { Paths } from "../../routes/paths";
import { CartItemsTableMobile } from "../../views/Cart/CartItems/CartItemsTableMobile.styled";
import { EmptyCartCard } from "../../views/Cart/CartItems/EmptyCartCard.styled";
import { useCartProducts } from "../../providers/CartProductsProvider";

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

    const handleCompleteOrder = () => {
        clearCart();
        navigate(Paths.PURCHASE_COMPLETE);
    };

    if (!selectedProducts.length) { 
        return <EmptyCartCard />;
     }

    if (selectedProducts.length) {
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
    }
}
