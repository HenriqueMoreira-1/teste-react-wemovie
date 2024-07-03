import { SelectedProduct } from "../providers/CartProductsProvider";

export type CartItemsTableProps = {
    className?: string;
    products: SelectedProduct[];
    totalOrderPrice: number;
    increaseProductQuantity: (product: SelectedProduct) => void;
    decreaseProductQuantity: (product: SelectedProduct) => void;
    changeProductQuantity: (product: SelectedProduct, quantity: number) => void;
    removeProductFromCart: (productId: number) => void;
    handleCompleteOrder: () => void;
};
