import { ProductCard } from "./ProductCard.styled";
import { ProductListProps } from "../../types/productList";

export default function StyledProductList({
    className,
    products = [],
}: ProductListProps) {
    return (
        <div className={className}>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}
