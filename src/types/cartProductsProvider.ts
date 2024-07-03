import { IProduct } from "./product";

export type ISelectedProductsProviderProps = {
    children: React.ReactNode;
};

export type ISelectedProduct = IProduct & { quantity: number };

export type ISelectedProductsContext = {
    selectedProducts: ISelectedProduct[];
    addProductToCart: (product: ISelectedProduct) => void;
    removeProductFromCart: (productId: number) => void;
    increaseProductQuantity: (product: ISelectedProduct) => void;
    decreaseProductQuantity: (product: ISelectedProduct) => void;
    changeProductQuantity: (product: ISelectedProduct, quantity: number) => void;
    clearCart: () => void;
    totalOrderPrice: number;
    totalNumberOfItems: number;
};
