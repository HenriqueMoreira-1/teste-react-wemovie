import { Product } from "./product";

export type ProductCardProps = { product: Product; className?: string };

export type ProductListProps = {
    className?: string;
    products: Product[];
};
