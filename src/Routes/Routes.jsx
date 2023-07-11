import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import AllProducts from "../AllProducts/AllProducts";


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
    ]
}
])

export default router;