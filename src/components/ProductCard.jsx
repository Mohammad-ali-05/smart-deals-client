import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className="bg-white rounded-lg p-4">
            <div className="bg-[#D9D9D9] rounded-lg aspect-video">
                <img
                    src={product.image}
                    alt=""
                    className="rounded-lg object-contain"
                />
            </div>
            <div className="my-4">
                <h3 className="text-[#001931] text-3xl font-medium mb-2">
                    {product.title}
                </h3>
                <p className="text-[22px] font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{`$ ${product.price_min} - ${product.price_max}`}</p>
            </div>
            <Link to={`/product-details/${product._id}`}>
                <button className="p-0.5 rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-full h-11">
                    <div className="bg-white rounded-xs w-full h-full flex justify-center items-center">
                        <span className="font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            View Details
                        </span>
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default ProductCard;
