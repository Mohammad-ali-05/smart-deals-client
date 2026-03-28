import React, { use } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ productPromise }) => {
    const products = use(productPromise);
    return (
        <div className="max-w-400 w-full grid grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard product={product} key={product._id}></ProductCard>
            ))}
        </div>
    );
};

export default ProductGrid;
