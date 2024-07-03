import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes/routes";

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
