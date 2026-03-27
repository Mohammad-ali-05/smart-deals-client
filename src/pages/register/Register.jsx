import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
    const { googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL,
                };

                /* Create user in the database */
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("After user login", data);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section className="bg-[#E9E9E9] w-full h-[calc(100vh-80px)] flex justify-center items-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-123 w-full">
                {/* Page header and login redirection */}
                <div className="mb-6">
                    <h2 className="text-[#001931] text-3xl font-semibold text-center mb-2">
                        Register Now!
                    </h2>
                    <p className="text-[#001931] text-center">
                        Already have an account?{" "}
                        <Link to={"/auth/login"}>
                            <span className="font-medium bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hover:">
                                Login Now
                            </span>
                        </Link>
                    </p>
                </div>
                {/* Registration form */}
                <form>
                    <fieldset className="flex flex-col">
                        <label
                            htmlFor="userName"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Name
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            autoComplete="username"
                            className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm mb-4"
                            placeholder={"Mohammad Ali"}
                        />
                        <label
                            htmlFor="email"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm mb-4"
                            placeholder={"example@gmail.com"}
                        />
                        <label
                            htmlFor="imageUrl"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Image-URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            autoComplete="url"
                            className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm mb-4"
                            placeholder={"https://example.png "}
                        />
                        <label
                            htmlFor="password"
                            className="text-sm text-[#001931] font-medium mb-1.5 opacity-90">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="new-password"
                            className="border-2 border-[#E9E9E9] w-full h-10 pl-3 rounded-sm"
                            placeholder={"*************"}
                        />
                        <button className="text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-sm w-full h-12 my-6">
                            Register
                        </button>
                    </fieldset>
                </form>
                {/* aesthetic alternative register indicator */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#E9E9E9] w-full h-0.5"></div>
                    <p className="text-[#001931] font-semibold">OR</p>
                    <div className="bg-[#E9E9E9] w-full h-0.5"></div>
                </div>
                {/* Google */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5] w-full h-12">
                    <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path
                                fill="#34a853"
                                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path
                                fill="#4285f4"
                                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path
                                fill="#fbbc02"
                                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path
                                fill="#ea4335"
                                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>
                    Login with Google
                </button>
            </div>
        </section>
    );
};

export default Register;
