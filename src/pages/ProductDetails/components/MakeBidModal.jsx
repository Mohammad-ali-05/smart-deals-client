import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Swal from "sweetalert2";

const MakeBidModal = ({ MakeBidModalRef, _id, price_min, price_max }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;

    console.log(_id);

    const handleBidFormSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.elements.userName.value;
        const userEmail = e.target.elements.userEmail.value;
        const imageUrl = e.target.elements.imageUrl.value;
        const bidPrice = e.target.elements.bidPrice.value;
        const phoneNumber = e.target.elements.phoneNumber.value;

        const newBid = {
            product: _id,
            buyer_image: imageUrl,
            buyer_name: userName,
            buyer_contact: phoneNumber,
            buyer_email: userEmail,
            bid_price: bidPrice,
            status: "pending",
        };

        fetch("http://localhost:3000/bids", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newBid),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    MakeBidModalRef.current.close();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Bid has been placed",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                }
            });
    };

    /* Handle modal close with  */
    const handleBidModalClose = () => {
        MakeBidModalRef.current.close();
    };

    return (
        <>
            {/* Open the modal using react useRef method */}
            <dialog
                ref={MakeBidModalRef}
                className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-6">
                        Give Seller Your Offered Price
                    </h3>
                    <form onSubmit={handleBidFormSubmit} action="">
                        <fieldset className="flex flex-col">
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1.5 mb-6">
                                    <label
                                        htmlFor="userName"
                                        className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                        Buyer Name
                                    </label>
                                    <input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        autoComplete="username"
                                        value={displayName}
                                        className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                        placeholder={"Your Name"}
                                        readOnly
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="userEmail"
                                        className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                        Buyer Email
                                    </label>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        id="userEmail"
                                        autoComplete="email"
                                        value={email}
                                        className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                        placeholder={"Your Name"}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <label
                                htmlFor="imageUrl"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Buyer image URL
                            </label>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                autoComplete="url"
                                value={photoURL}
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm mb-6"
                                placeholder={"https://...your_img_url"}
                                readOnly
                            />
                            <label
                                htmlFor="bidPrice"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Place your price
                            </label>
                            <input
                                type="number"
                                name="bidPrice"
                                id="bidPrice"
                                autoComplete="off"
                                min={price_min}
                                max={price_max}
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm mb-6"
                                placeholder={"https://...your_img_url"}
                                required
                            />
                            <label
                                htmlFor="phoneNumber"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Contact Info
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                autoComplete="tel"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm mb-6"
                                placeholder={"https://...your_img_url"}
                                required
                            />
                            <div className="flex flex-row-reverse items-center gap-4">
                                {/* Button for submitting form */}
                                <button
                                    type="submit"
                                    className="text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-sm w-29 h-12 my-6">
                                    Submit Bid
                                </button>
                                {/* Button for closing modal */}
                                <button
                                    type="button"
                                    onClick={handleBidModalClose}
                                    className="p-0.5 rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-21.5 h-12">
                                    <div className="bg-white rounded-xs w-full h-full flex justify-center items-center">
                                        <span className="font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                            Cancel
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default MakeBidModal;
