import { createContext, useState } from "react";
import {
    ISelectedProduct,
    ISelectedProductsContext,
    ISelectedProductsProviderProps,
} from "../types/cartProductsProvider";

export const CartProductsContext =
    createContext<ISelectedProductsContext | null>(null);

export default function SelectedProductsProvider({
    children,
}: ISelectedProductsProviderProps) {
    const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>(
        []
    );

    const addProductToCart = (product: ISelectedProduct) => {
        const productAlreadySelected = selectedProducts.find(
            (selectedProduct) => selectedProduct.id === product.id
        );

        if (!productAlreadySelected) {
            setSelectedProducts([
                ...selectedProducts,
                { ...product, quantity: 1 },
            ]);
        }
    };

    const removeProductFromCart = (productId: number) => {
        const productToRemoveIndex = selectedProducts.findIndex(
            (selectedProduct) => selectedProduct.id === productId
        );

        if (productToRemoveIndex >= 0) {
            const newSelectedProducts = [...selectedProducts];

            newSelectedProducts.splice(productToRemoveIndex, 1);

            setSelectedProducts(newSelectedProducts);
        }
    };

    const increaseProductQuantity = (product: ISelectedProduct) => {
        const productAlreadySelectedIndex = selectedProducts.findIndex(
            (selectedProduct) => selectedProduct.id === product.id
        );

        if (productAlreadySelectedIndex >= 0) {
            const newSelectedProducts = [...selectedProducts];

            newSelectedProducts[productAlreadySelectedIndex].quantity += 1;

            setSelectedProducts(newSelectedProducts);
        }
    };

    const decreaseProductQuantity = (product: ISelectedProduct) => {
        const productAlreadySelectedIndex = selectedProducts.findIndex(
            (selectedProduct) => selectedProduct.id === product.id
        );

        if (productAlreadySelectedIndex >= 0) {
            const newSelectedProducts = [...selectedProducts];

            if (newSelectedProducts[productAlreadySelectedIndex].quantity > 1) {
                newSelectedProducts[productAlreadySelectedIndex].quantity -= 1;
                setSelectedProducts(newSelectedProducts);
            }
        }
    };

    const changeProductQuantity = (
        product: ISelectedProduct,
        quantity: number
    ) => {
        const productAlreadySelectedIndex = selectedProducts.findIndex(
            (selectedProduct) => selectedProduct.id === product.id
        );

        if (productAlreadySelectedIndex >= 0) {
            const newSelectedProducts = [...selectedProducts];

            newSelectedProducts[productAlreadySelectedIndex].quantity =
                quantity;

            setSelectedProducts(newSelectedProducts);
        }
    };

    const clearCart = () => {
        setSelectedProducts([]);
    };

    const totalOrderPrice = selectedProducts.reduce(
        (accumulator, currentProduct) =>
            accumulator + currentProduct.price * currentProduct.quantity,
        0
    );

    const totalNumberOfItems = selectedProducts.reduce(
        (accumulator, currentProduct) => accumulator + currentProduct.quantity,
        0
    );

    return (
        <CartProductsContext.Provider
            value={{
                selectedProducts,
                addProductToCart,
                removeProductFromCart,
                increaseProductQuantity,
                decreaseProductQuantity,
                changeProductQuantity,
                clearCart,
                totalOrderPrice,
                totalNumberOfItems,
            }}
        >
            {children}
        </CartProductsContext.Provider>
    );
}
