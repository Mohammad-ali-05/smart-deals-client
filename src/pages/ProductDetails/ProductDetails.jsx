import React from "react";
import ProductInfo from "./components/ProductInfo";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
    const productData = useLoaderData();
    return (
        <section className="bg-[#E9E9E9]">
            {/* Product info */}
            <ProductInfo productData={productData}></ProductInfo>
            {/* bids for this product */}
            <div className="max-w-400 w-full mx-auto p-20"></div>
        </section>
    );
};

export default ProductDetails;
