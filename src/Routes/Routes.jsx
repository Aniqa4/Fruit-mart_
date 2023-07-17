import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import AllProducts from "../AllProducts/AllProducts";
import Cart from "../Cart/Cart";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import UserInfo from "../UserInfo/UserInfo";
import AddProducts from "../Dashboard/AddProducts";
import Checkout from "../Cart/Checkout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


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
            path: "/cart",
            element: <Cart></Cart>
        },
        {
            path: "/cart/checkout",
            element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
        },
        {
            path: "/sign-in",
            element: <SignIn></SignIn>
        },
        {
            path: "/sign-up",
            element: <SignUp></SignUp>
        },
        {
            path: "/user-info",
            element: <UserInfo></UserInfo>
        },
        {
            path: "/user-info/add-products",
            element: <AddProducts></AddProducts>
        },
    ]
}
])

export default router;