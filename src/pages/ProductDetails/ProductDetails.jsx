import React, { useEffect, useState } from "react";
import ProductInfo from "./components/ProductInfo";
import { useLoaderData } from "react-router";
import ProductBids from "./components/ProductBids";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { user } = useAuth()
    const [bidsData, setBidsData] = useState([]);
    const [newBidPlaced, setNewBidPlaced] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/bids/by-product/${productData._id}`, {
                headers: {
                    authentication: `Bearer ${user.accessToken}`,
                },
            })
            .then((data) => setBidsData(data.data))
            .catch((error) => console.log(error));
    }, [productData, newBidPlaced, user]);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/bids/by-product/${productData._id}`, {
    //         // headers for JWT token
    //         headers: {
    //             authentication: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //         /* // headers for firebase token
    //         headers: {
    //             authentication: `Bearer ${user.accessToken}`,
    //         }, */
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setBidsData(data));
    // }, [productData, newBidPlaced, user]);

    return (
        <section className="bg-[#E9E9E9]">
            {/* Product info */}
            <ProductInfo
                productData={productData}
                setNewBidPlaced={setNewBidPlaced}
                newBidPlaced={newBidPlaced}></ProductInfo>
            {/* bids for this product */}
            <ProductBids bidsData={bidsData}></ProductBids>
        </section>
    );
};

export default ProductDetails;
