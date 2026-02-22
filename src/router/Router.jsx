import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllProducts from "../pages/allProducts/AllProducts";
import MyProducts from "../pages/myProducts/MyProducts";
import MyBids from "../pages/myBids/MyBids";
import CreateProduct from "../pages/createProduct/CreateProduct";

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
                element: <MyProducts></MyProducts>,
            },
            {
                path: "my-bids",
                element: <MyBids></MyBids>,
            },
            {
                path: "create-product",
                element: <CreateProduct></CreateProduct>,
            },
        ],
    },
]);

export default router;
