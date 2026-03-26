import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to={"/home"}
                    className={({ isActive }) =>
                        `font-semibold ${
                            isActive
                                ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                                : "text-black"
                        }`
                    }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/all-products"}
                    className={({ isActive }) =>
                        `font-semibold ${
                            isActive
                                ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                                : "text-black"
                        }`
                    }>
                    All Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/my-products"}
                    className={({ isActive }) =>
                        `font-semibold ${
                            isActive
                                ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                                : "text-black"
                        }`
                    }>
                    My Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/my-bids"}
                    className={({ isActive }) =>
                        `font-semibold ${
                            isActive
                                ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                                : "text-black"
                        }`
                    }>
                    My Bids
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/create-product"}
                    className={({ isActive }) =>
                        `font-semibold ${
                            isActive
                                ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                                : "text-black"
                        }`
                    }>
                    Create Product
                </NavLink>
            </li>
        </>
    );

    return (
        <nav>
            <div className="navbar bg-base-100 shadow-sm px-1 sm:px-5 lg:px-10 xl:px-20 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link
                        to={"/home"}
                        className="text-[32px] font-bold text-[#001931]">
                        Smart
                        <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            Deals
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8">{links}</ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link to={"/auth/login"}>
                        <button className="p-0.5 rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-25 h-11">
                            <div className="bg-white rounded-sm w-full h-full flex justify-center items-center">
                                <span className="font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                    login
                                </span>
                            </div>
                        </button>
                    </Link>
                    <Link to={"/auth/register"}>
                        <button className="text-white font-semibold rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-30 h-11 hidden xl:block">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
