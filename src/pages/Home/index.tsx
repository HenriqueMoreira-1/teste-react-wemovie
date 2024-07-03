import { ProductsProvider } from "../../services/api/products";
import { ProductList } from "../../views/Product/ProductList.styled";

export default function Home() {
    const { data: products } = ProductsProvider.List();

    return <ProductList products={products} />;
}
