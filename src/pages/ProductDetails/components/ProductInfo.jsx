import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import MakeBidModal from "./MakeBidModal";

const ProductInfo = ({ productData, setNewBidPlaced, newBidPlaced }) => {
    const MakeBidModalRef = useRef(null);
    const {
        _id,
        title,
        price_min,
        price_max,
        email,
        category,
        created_at,
        image,
        status,
        location,
        seller_image,
        seller_name,
        condition,
        usage,
        description,
        seller_contact,
    } = productData;

    /* Replacing +88 with "" from number if there is any*/
    const contactNumber = seller_contact.replace("+88", "");

    /* Formatting date to local string mm/dd/yyyy */
    const postedAt = new Date(created_at).toLocaleDateString("en-US");

    const handleMakeBidModal = () => {
        MakeBidModalRef.current.showModal();
    };

    return (
        <div>
            <div className="flex justify-center items-center gap-10 max-w-400 w-full mx-auto p-20">
                <div className="grid grid-cols-1 gap-7.5 max-w-150 w-full">
                    <div className="bg-[#D9D9D9] rounded-lg aspect-6/5 w-full">
                        <img
                            className="rounded-lg object-center object-cover h-full w-full"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-2xl text-[#001931] font-semibold">
                            Product Description
                        </h3>
                        <dl className="text-[#001931] font-semibold flex justify-between items-center border-b border-[#444444] py-3 my-6">
                            <div className="flex items-center gap-2">
                                <dt className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                    Condition :
                                </dt>
                                <dd> {condition}</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                    Usage Time :
                                </dt>
                                <dd>{usage}</dd>
                            </div>
                        </dl>
                        <p className="text-[#969A9D] font-medium">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 max-w-200 w-full">
                    <div className="flex flex-col gap-4">
                        <Link
                            to={"/all-products"}
                            className="text-[#001931] text-xl font-medium flex gap-3 items-center">
                            <FaArrowLeft />
                            <p>Back to Products</p>
                        </Link>
                        <h2 className="text-[#001931] text-5xl font-bold">
                            {title}
                        </h2>
                        <div className="bg-linear-to-bl from-[#632EE3]/15 to-[#9F62F2]/15 rounded-full py-1.5 px-2.5 w-fit">
                            <p className="bg-linear-to-bl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                {category}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                        <p className="text-[#4CAF50] text-[28px] font-bold">{`$${price_min} - ${price_max}`}</p>
                        <p className="text-[#001931]">Price starts from</p>
                    </div>
                    <div className="text-[#001931] bg-white rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-6">
                            Product Details
                        </h3>
                        <dl>
                            <div className="flex items-center gap-1.5 mb-2">
                                <dt className="font-semibold">Product ID:</dt>
                                <dd>{_id}</dd>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <dt className="font-semibold">Posted:</dt>
                                <dd>{postedAt}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-6">
                            Seller Information
                        </h3>
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="rounded-full bg-[#D9D9D9] w-14 h-14">
                                    <img
                                        src={seller_image}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="text-[#001931]">
                                    <p className="font-semibold mb-2">
                                        {seller_name}
                                    </p>
                                    <p className="text-sm opacity-80">
                                        {email}
                                    </p>
                                </div>
                            </div>
                            <dl className="flex flex-col gap-3">
                                <div className="flex items-center gap-1.5">
                                    <dt className="font-semibold">Location:</dt>
                                    <dd>{location}</dd>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <dt className="font-semibold">Contact:</dt>
                                    <dd>{contactNumber}</dd>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <dt className="font-semibold">Status:</dt>
                                    <dd className="text-xs bg-[#FFC107] rounded-full py-1.5 px-2.5">
                                        {status}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <button
                        onClick={handleMakeBidModal}
                        className="text-white text-xl font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-sm h-15">
                        I want to Buy This Product
                    </button>
                </div>
            </div>
            <MakeBidModal MakeBidModalRef={MakeBidModalRef} setNewBidPlaced={setNewBidPlaced} newBidPlaced={newBidPlaced} _id={_id} price_min={price_min} price_max={price_max}></MakeBidModal>
        </div>
    );
};

export default ProductInfo;
