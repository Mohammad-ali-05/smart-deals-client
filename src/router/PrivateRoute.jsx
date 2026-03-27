import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [navigate, user]);

    if (!user) return null;

    return <>{children}</>;
};

export default PrivateRoute;
