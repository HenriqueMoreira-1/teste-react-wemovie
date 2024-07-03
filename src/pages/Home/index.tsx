import { ProductList } from "../../components/Product/ProductList.styled";
import { ProductsProvider } from "../../services/api/products";

export default function Home() {
    const { data: products } = ProductsProvider.List();

    return <ProductList products={products} />;
}
