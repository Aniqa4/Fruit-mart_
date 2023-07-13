import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import AllProducts from "../AllProducts/AllProducts";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Cart/Cart";


const router = createBrowserRouter([{
    path: "*",
    element:<ErrorPage></ErrorPage>
},
{
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/all-products",
            element: <AllProducts></AllProducts>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
        {
            path: "/cart",
            element: <Cart></Cart>
        },
    ]
}
])

export default router;