import { ISelectedProduct } from "./cartProductsProvider";

export type ICartItemsTableProps = {
    className?: string;
    products: ISelectedProduct[];
    totalOrderPrice: number;
    increaseProductQuantity: (product: ISelectedProduct) => void;
    decreaseProductQuantity: (product: ISelectedProduct) => void;
    changeProductQuantity: (product: ISelectedProduct, quantity: number) => void;
    removeProductFromCart: (productId: number) => void;
    handleCompleteOrder: () => void;
};
