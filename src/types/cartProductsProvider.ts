import { Product } from "./product";

export type SelectedProductsProviderProps = {
    children: React.ReactNode;
};

export type SelectedProduct = Product & { quantity: number };

export type SelectedProductsContext = {
    selectedProducts: SelectedProduct[];
    addProductToCart: (product: SelectedProduct) => void;
    removeProductFromCart: (productId: number) => void;
    increaseProductQuantity: (product: SelectedProduct) => void;
    decreaseProductQuantity: (product: SelectedProduct) => void;
    changeProductQuantity: (product: SelectedProduct, quantity: number) => void;
    clearCart: () => void;
    totalOrderPrice: number;
    totalNumberOfItems: number;
};
