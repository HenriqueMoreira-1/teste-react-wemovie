import { IProduct } from "./product";

export type IProductCardProps = { product: IProduct; className?: string };

export type IProductListProps = {
    className?: string;
    products: IProduct[];
};
