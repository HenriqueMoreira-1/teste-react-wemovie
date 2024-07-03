import { useContext } from "react";
import { CartProductsContext } from "../providers/CartProductsProvider";

export const useCartProducts = () => {
    const context = useContext(CartProductsContext);

    if (!context) {
        throw new Error(
            "useCartProducts must be used within a CartProductsContext"
        );
    }

    return context;
};
