import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
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
