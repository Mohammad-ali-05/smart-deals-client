import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const CreateProduct = () => {
    const { user } = useContext(AuthContext);
    const productCategories = [
        "Furniture",
        "Electronics",
        "Sports",
        "Home Appliances",
        "Musical Instruments",
    ];

    const handleCreateProduct = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const category = e.target.elements.category.value;
        const price_min = Number(e.target.elements.price_min.value);
        const price_max =
            Number(e.target.elements.price_max.value) || price_min;
        const condition = e.target.elements.condition.value;
        const usage = e.target.elements.usage.value;
        const productImage = e.target.elements.productImage.value;
        const userName = e.target.elements.userName.value;
        const userEmail = e.target.elements.userEmail.value;
        const userImage = e.target.elements.userImage.value;
        const userContact = e.target.elements.userContact.value;
        const location = e.target.elements.location.value;
        const description = e.target.elements.description.value;
        const currentTime = new Date();
        const status = "pending";

        if (!category) {
            toast.error("Please select a category.", {
                position: "top-center",
            });
            return;
        }

        const newProduct = {
            title: title,
            price_min: price_min,
            price_max: price_max,
            email: userEmail,
            category: category,
            created_at: currentTime,
            image: productImage,
            status: status,
            location: location,
            seller_image: userImage,
            seller_name: userName,
            condition: condition,
            usage: usage,
            description: description,
            seller_contact: userContact,
        };

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged) {
                    e.target.reset();
                }
            });
    };

    return (
        <section className="bg-[#E9E9E9] flex flex-col justify-center items-center p-20">
            <Link
                to={"/all-products"}
                className="text-[#001931] text-xl font-medium flex gap-3 items-center">
                <FaArrowLeft />
                <p>Back to Products</p>
            </Link>
            <h2 className="text-[#001931] text-5xl font-bold mt-4 mb-10">
                Create{" "}
                <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    a Product
                </span>
            </h2>
            <form
                onSubmit={handleCreateProduct}
                className="bg-white rounded-lg drop-shadow-lg max-w-200 w-full p-10">
                <fieldset className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        <div className="flex flex-col w-full">
                            {/* Title */}
                            <label
                                htmlFor="title"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                autoComplete="off"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"e.g. Yamaha Fz Guitar for Sale"}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Category */}
                            <label
                                htmlFor="category"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Category
                            </label>
                            <div className="relative">
                                <select
                                    name="category"
                                    id="category"
                                    className="appearance-none border-2 border-[#E9E9E9] w-full h-10 px-3 rounded-sm"
                                    defaultValue="">
                                    <option value=""> Select Category </option>
                                    {productCategories?.map(
                                        (productCategory, index) => (
                                            <option
                                                key={index}
                                                value={productCategory.toLowerCase()}>
                                                {productCategory}
                                            </option>
                                        ),
                                    )}
                                </select>
                                <div className="absolute top-3 right-3 pointer-events-none">
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Min price */}
                            <label
                                htmlFor="price_min"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Min Price You want to Sale ($)
                            </label>
                            <input
                                type="number"
                                name="price_min"
                                id="price_min"
                                autoComplete="off"
                                step="0.01"
                                min="0"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"e.g. 18.5"}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Max price */}
                            <label
                                htmlFor="price_max"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Max Price You want to Sale ($)
                            </label>
                            <input
                                type="number"
                                name="price_max"
                                id="price_max"
                                autoComplete="off"
                                step="0.01"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"Optional (default = Min Price)"}
                            />
                        </div>
                        <div className="w-full">
                            {/* Product Condition */}
                            <p className="text-sm text-[#001931]/90 font-medium mb-2.5">
                                Product Condition
                            </p>
                            <div className="flex items-center gap-12.5">
                                <label
                                    htmlFor="new"
                                    className="flex justify-center items-center gap-3 text-sm text-[#001931] font-medium">
                                    <input
                                        type="radio"
                                        name="condition"
                                        id="new"
                                        className="appearance-none w-6 h-6 rounded-full border-4 border-gray-300 checked:border-[#632EE3] transition"
                                        value="fresh"
                                        defaultChecked
                                    />
                                    Brand New
                                </label>
                                <label
                                    htmlFor="used"
                                    className="flex justify-center items-center gap-3 text-sm text-[#001931] font-medium">
                                    <input
                                        type="radio"
                                        name="condition"
                                        id="used"
                                        className="appearance-none w-6 h-6 rounded-full border-4 border-gray-300 checked:border-[#632EE3] transition"
                                        value="used"
                                    />
                                    Used
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Product usage */}
                            <label
                                htmlFor="usage"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Product Usage time
                            </label>
                            <input
                                type="text"
                                name="usage"
                                id="usage"
                                autoComplete="off"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"e.g. 1 year 3 month "}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        {/* Product Image */}
                        <label
                            htmlFor="productImage"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Your Product Image URL
                        </label>
                        <input
                            type="url"
                            name="productImage"
                            id="productImage"
                            autoComplete="url"
                            className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                            placeholder={"https://... "}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        <div className="flex flex-col w-full">
                            {/* Seller name */}
                            <label
                                htmlFor="userName"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Seller Name
                            </label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                autoComplete="name"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"e.g. Artisan Roasters"}
                                defaultValue={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Seller Email */}
                            <label
                                htmlFor="userEmail"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Seller Email
                            </label>
                            <input
                                type="email"
                                name="userEmail"
                                id="userEmail"
                                autoComplete="email"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"leli31955@nrlord.com"}
                                defaultValue={user?.email}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Seller Contact */}
                            <label
                                htmlFor="userContact"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Seller Contact
                            </label>
                            <input
                                type="tel"
                                name="userContact"
                                id="userContact"
                                autoComplete="tel"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"e.g. +8801872172134"}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            {/* Product Image */}
                            <label
                                htmlFor="userImage"
                                className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                                Seller Image URL
                            </label>
                            <input
                                type="url"
                                name="userImage"
                                id="userImage"
                                autoComplete="url"
                                className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                                placeholder={"https://... "}
                                defaultValue={user?.photoURL}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        {/* Location */}
                        <label
                            htmlFor="location"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            autoComplete="address-level2"
                            className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                            placeholder={"City, Country"}
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        {/* Product Image */}
                        <label
                            htmlFor="description"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            autoComplete="off"
                            className="border-2 border-[#E9E9E9] w-full pl-3 pt-2 rounded-sm resize-none"
                            placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
                            rows={4}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-sm w-full h-15">
                        Create a Product
                    </button>
                </fieldset>
            </form>
        </section>
    );
};

export default CreateProduct;
