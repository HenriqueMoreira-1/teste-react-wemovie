import {
    useQuery,
    QueryOptions,
    DefinedUseQueryResult,
} from "@tanstack/react-query";
import { Product } from "../../types/product";

const listProducts = async (): Promise<Product[]> => {
    const resp = await fetch("http://localhost:3000/products").then((resp) =>
        resp.json()
    );

    return resp;
};

export const ProductsProvider = {
    List: (options?: QueryOptions) =>
        useQuery({
            queryKey: ["listProducts"],
            queryFn: listProducts,
            ...options,
        }) as DefinedUseQueryResult<Product[]>,
};
