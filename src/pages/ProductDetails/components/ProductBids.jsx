import React from "react";
import ProductBidTableRow from "./ProductBidTableRow";

const ProductBids = ({ bidsData }) => {
    /* Style for table head */
    const tableHeadStyle = "text-[18px] font-medium opacity-80 px-4 py-3";
    // console.log(bidsData)
    return (
        <div className="max-w-400 w-full mx-auto p-20">
            <h2 className="text-[#001931] text-5xl font-bold mb-10">
                Bids For This Product:{" "}
                <span className="bg-linear-to-bl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    {String(bidsData?.length ?? 0).padStart(2, "0")}
                </span>
            </h2>
            <div className="rounded-lg overflow-hidden border border-[#E9E9E9] shadow-sm">
                <div className="overflow-x-auto">
                    <table className="text-[#001931] w-full">
                        <colgroup>
                            <col className="w-[8%]" />
                            <col className="w-[30%]" />
                            <col className="w-[20%]" />
                            <col className="w-[12%]" />
                            <col className="w-[30%]" />
                        </colgroup>
                        <thead className="bg-[#F9FAFB]">
                            <tr className="text-left">
                                <th className={tableHeadStyle}>SL No</th>
                                <th className={tableHeadStyle}>Buyer image</th>
                                <th className={tableHeadStyle}>Buyer Name</th>
                                <th className={tableHeadStyle}>Bid Price</th>
                                <th className={tableHeadStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {bidsData?.map((bidData, index) => (
                                <ProductBidTableRow
                                    key={bidData._id}
                                    bidData={bidData}
                                    index={index}></ProductBidTableRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductBids;
