import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    // Set token using interceptor
    useEffect(() => {
        const requestInterceptorId = axiosInstance.interceptors.request.use(
            (config) => {
                const token = user.accessToken;
                if (token) {
                    config.headers.Authorization = `Bearer ${user?.accessToken}`;
                }
                return config;
            },
            (error) => {
                console.log(error);
            },
        );

        const responseInterceptorId = axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                const status = error.status;
                if (status === 401 || status === 403) {
                    logout().then(() => {
                        navigate("/auth/register");
                        toast.error(error.response.data.message);
                    });
                }
            },
        );

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptorId);
            axiosInstance.interceptors.response.eject(responseInterceptorId);
        };
    }, [user, logout, navigate]);

    return axiosInstance;
};

export default useAxiosSecure;
