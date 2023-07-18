import axios from "axios";
import { toast } from "react-hot-toast";
import api, { API } from "../../../backend";

export const registerNewUser = (formData) => async (dispatch) => {

    console.log(formData);
    let user = {
        name: formData.name,
        role: formData.role,
        emailId: formData.emailId,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
    };
    try {
        const response = await axios.post(`${API}auth/register`, user, {
            headers: { "Content-Type": "application/json" },
        });

        console.log(response);
        const responseData = response?.data;
        let accessToken = localStorage.getItem("accessToken");
        let refreshToken = localStorage.getItem("refreshToken");
        if (responseData?.success === 1) {
            console.log(refreshToken);
            toast.success(responseData.info);
            if (!accessToken) {
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(responseData?.accessToken)
                );
            } else if (accessToken) {
                accessToken = responseData?.accessToken;
                localStorage.setItem("accessToken", JSON.stringify(accessToken));
            }
            if (!refreshToken) {
                localStorage.setItem(
                    "refreshToken",
                    JSON.stringify(responseData?.refreshToken)
                );
            } else if (refreshToken) {
                refreshToken = responseData?.refreshToken;
                console.log(refreshToken);
                localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            }

        }
        dispatch({
            type: "USER_REGISTER",
            payload: responseData
        })
    } catch (error) {
        console.log(error);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        toast.error("Network error try again later!");
    }
}

export const userLogOut = () => async (dispatch) => {
    const response = await api.post("/auth/logout");
    console.log(response)
    dispatch({ type: "USER_LOG_OUT" })
}