import api from "../../../src/services/api";

/* =========================================
   Register User
========================================= */

export const registerUser = async (userData) => {
    try {

        const { data } = await api.post(
            "/auth/register",
            userData
        );

        return data;

    } catch (error) {

        throw (
            error.response?.data || {
                success: false,
                message: "Registration failed."
            }
        );

    }
};

/* =========================================
   Login User
========================================= */

export const loginUser = async (credentials) => {
    try {

        const { data } = await api.post(
            "/auth/login",
            credentials
        );

        return data;

    } catch (error) {

        throw (
            error.response?.data || {
                success: false,
                message: "Login failed."
            }
        );

    }
};

/* =========================================
   Get Current User
========================================= */

export const getProfile = async () => {
    try {

        const { data } = await api.get(
            "/auth/profile"
        );

        return data;

    } catch (error) {

        throw (
            error.response?.data || {
                success: false,
                message: "Unable to fetch profile."
            }
        );

    }
};

/* =========================================
   Logout User
========================================= */

export const logoutUser = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

};