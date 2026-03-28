import React from "react";
import bgHeroLeft from "../../../assets/bg-hero-left.png";
import bgHeroRight from "../../../assets/bg-hero-right.png";
import { FiSearch } from "react-icons/fi";

const SearchSection = () => {
    return (
        <section className="relative flex justify-center items-center bg-linear-to-br from-[#FFE6FD] to-[#E0F8F5] py-17.5">
            <img
                src={bgHeroLeft}
                alt="Hero image left"
                className="absolute left-0 bottom-0"
            />
            <div>
                <h1 className="text-[#001931] text-7xl font-bold text-center opacity-90">
                    Deal your{" "}
                    <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Products
                    </span>
                    <br />
                    In a{" "}
                    <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Smart
                    </span>{" "}
                    way !
                </h1>
                <p className="text-[#627382] text-xl text-center mt-4">
                    SmartDeals helps you sell, resell, and shop from trusted
                    local sellers — all in one place!
                </p>
                <fieldset className="flex justify-center items-center my-8">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="text-sm text-[#627382] bg-white rounded-l-full focus:outline-[#9F62F2] h-12 max-w-125 w-full pl-4"
                        placeholder="search For Products, Categories..."
                    />
                    <button
                        type="button"
                        className="text-xl text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-r-full py-3.5 px-3">
                        <FiSearch />
                    </button>
                </fieldset>
                <div className="flex justify-center items-center flex-row gap-4 mb-5.5">
                    <button className="text-white text-center font-semibold rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] h-12.5 px-4">
                        Watch All Products
                    </button>
                    <button className="p-0.5 rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] h-12.5">
                        <div className="bg-white rounded-xs w-full h-full flex justify-center items-center px-4">
                            <span className="font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Post an Product
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <img
                src={bgHeroRight}
                alt="Hero image right"
                className="absolute right-0 bottom-0"
            />
        </section>
    );
};

export default SearchSection;
