import React from "react";
import { toast } from "react-toastify";

const MyBidsRow = ({ bidData, index, deleteBids, setDeleteBids }) => {
    const { _id, buyer_image, buyer_name, bid_price, status } = bidData;

    const handleDeleteBid = (bidId) => {
        fetch(`http://localhost:3000/bids/${bidId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result?.deletedCount) {
                    toast.success("Bid has been deleted.")
                    setDeleteBids(!deleteBids)
                }
            });
    };

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
            <td>
                <span
                    className={`text-xs ${status === "pending" ? "bg-[#FFC107]" : status === "confirmed" ? "bg-green-400" : ""}  rounded-full py-1.5 px-2.5`}>
                    {status}
                </span>
            </td>
            <td className="font-medium p-4">
                <button
                    onClick={() => handleDeleteBid(_id)}
                    className="font-medium text-[#FF3D00] text-sm border border-[#FF3D00] rounded-sm px-2 py-1.5">
                    Remove bid
                </button>
            </td>
        </tr>
    );
};

export default MyBidsRow;
