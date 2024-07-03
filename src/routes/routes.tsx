import React from "react";
import { Paths } from "./paths";

const Home = React.lazy(() => import("../pages/Home"));
const Cart = React.lazy(() => import("../pages/Cart"));
const PurchaseComplete = React.lazy(() => import("../pages/PurchaseComplete"));

const routes = [
    { path: Paths.HOME, element: <Home /> },
    { path: Paths.CART, element: <Cart /> },
    { path: Paths.PURCHASE_COMPLETE, element: <PurchaseComplete /> },
];

export default routes;
