import React from "react";

const ProductBidTableRow = ({ bidData, index }) => {
    const { buyer_image, buyer_name, bid_price } = bidData;
    return (
        <tr className="border border-[#E9E9E9]">
            <td className="font-medium p-4">{index + 1}</td>
            <td className="p-4">
                <div className="w-15 h-10 bg-[#D9D9D9]">
                    <img
                        className="object-cover object-center w-full h-full"
                        src={buyer_image}
                        alt=""
                    />
                </div>
            </td>
            <td className="font-medium p-4">{buyer_name}</td>
            <td className="font-medium p-4">{`$${bid_price}`}</td>
            <td className="font-medium p-4">
                <div className="flex gap-2">
                    <button className="font-medium text-[#4CAF50] border border-[#4CAF50] rounded-sm px-1.5 py-2">
                        Accept Offer
                    </button>
                    <button className="font-medium text-[#FF3D00] border border-[#FF3D00] rounded-sm px-1.5 py-2">
                        Reject offer
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ProductBidTableRow;
