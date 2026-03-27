import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllProducts from "../pages/allProducts/AllProducts";
import MyProducts from "../pages/myProducts/MyProducts";
import MyBids from "../pages/myBids/MyBids";
import CreateProduct from "../pages/createProduct/CreateProduct";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Navigate to={"/home"}></Navigate>,
            },
            {
                path: "home",
                element: <Home></Home>,
            },
            {
                path: "all-products",
                element: <AllProducts></AllProducts>,
            },
            {
                path: "my-products",
                element: (
                    <PrivateRoute>
                        <MyProducts></MyProducts>
                    </PrivateRoute>
                ),
            },
            {
                path: "my-bids",
                element: (
                    <PrivateRoute>
                        <MyBids></MyBids>
                    </PrivateRoute>
                ),
            },
            {
                path: "create-product",
                element: (
                    <PrivateRoute>
                        <CreateProduct></CreateProduct>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
