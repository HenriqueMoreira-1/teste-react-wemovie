import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import Layout from "./views/Layout";

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: routes,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
