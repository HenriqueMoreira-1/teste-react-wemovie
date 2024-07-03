import { ProductCard } from "./ProductCard.styled";
import { IProductListProps } from "../../types/productList";

export default function StyledProductList({
    className,
    products = [],
}: IProductListProps) {
    return (
        <div className={className}>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}
