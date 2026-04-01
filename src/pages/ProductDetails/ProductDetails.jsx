import React, { useEffect, useState } from "react";
import ProductInfo from "./components/ProductInfo";
import { useLoaderData } from "react-router";
import ProductBids from "./components/ProductBids";

const ProductDetails = () => {
    const productData = useLoaderData();
    const [bidsData, setBidsData] =useState([])
    const [newBidPlaced, setNewBidPlaced] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/bids/by-product/${productData._id}`)
            .then((res) => res.json())
            .then((data) => setBidsData(data));
    }, [productData, newBidPlaced]);

    return (
        <section className="bg-[#E9E9E9]">
            {/* Product info */}
            <ProductInfo productData={productData} setNewBidPlaced={setNewBidPlaced} newBidPlaced={newBidPlaced}></ProductInfo>
            {/* bids for this product */}
            <ProductBids bidsData={bidsData}></ProductBids>
        </section>
    );
};

export default ProductDetails;
