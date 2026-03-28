import React, { Suspense } from "react";
import ProductGrid from "../../../components/ProductGrid";

const latestProductPromise = fetch(
    "http://localhost:3000/latest-products",
).then((res) => res.json());

const RecentProducts = () => {
    return (
        <section className="bg-[#E9E9E9] flex flex-col justify-center items-center gap-10 py-20">
            <h2 className="text-5xl font-bold text-[#001931] text-center">
                Recent{" "}
                <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Products
                </span>
            </h2>
            <Suspense>
                <ProductGrid
                    productPromise={latestProductPromise}></ProductGrid>
            </Suspense>
            <button className="text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-sm h-12 w-36.25">
                Show All
            </button>
        </section>
    );
};

export default RecentProducts;
