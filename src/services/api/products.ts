import {
    useQuery,
    QueryOptions,
    DefinedUseQueryResult,
} from "@tanstack/react-query";
import { IProduct } from "../../types/product";

const listProducts = async (): Promise<IProduct[]> => {
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
        }) as DefinedUseQueryResult<IProduct[]>,
};
