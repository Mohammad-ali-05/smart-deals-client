import React from "react";
import MyBidsRow from "./MyBidsRow";

const MyBidsTable = ({myBids, deleteBids, setDeleteBids}) => {
    /* Style for table head */
    const tableHeadStyle = "text-[18px] font-medium opacity-80 px-4 py-3";
    return (
        <div className="rounded-lg overflow-hidden border border-[#E9E9E9] shadow-sm max-w-400 w-full mx-auto">
            <div className="overflow-x-auto">
                <table className="text-[#001931] w-full">
                    <colgroup>
                        <col className="w-[8.33%]" />
                        <col className="w-[20.14%]" />
                        <col className="w-[20.83%]" />
                        <col className="w-[12.5%]" />
                        <col className="w-[10.42%]" />
                        <col className="w-[27.78%]" />
                    </colgroup>
                    <thead className="bg-[#F9FAFB]">
                        <tr className="text-left">
                            <th className={tableHeadStyle}>SL No</th>
                            <th className={tableHeadStyle}>Product</th>
                            <th className={tableHeadStyle}>Seller Info</th>
                            <th className={tableHeadStyle}>Bid Price</th>
                            <th className={tableHeadStyle}>Status</th>
                            <th className={tableHeadStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {myBids?.map((bidData, index) => (
                            <MyBidsRow
                                key={bidData._id}
                                bidData={bidData}
                                deleteBids={deleteBids}
                                setDeleteBids={setDeleteBids}
                                index={index}></MyBidsRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBidsTable;
