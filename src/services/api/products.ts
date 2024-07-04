import {
    useQuery,
    QueryOptions,
    DefinedUseQueryResult,
} from "@tanstack/react-query";
import { IProduct } from "../../types/product";

const listProducts = async (): Promise<IProduct[]> => {
    const resp = await fetch(`${process.env.APPLICATION_URL}/products`).then((resp) =>
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
