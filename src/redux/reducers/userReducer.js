const initialState = {
    userDetails: null,
    loginResponse: Number,
    responseMessage: '',
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER_REGISTER":
            return {
                ...state,
                userDetails: payload.user_details,
                loginResponse: payload.success,
                responseMessage: payload.info
            };
        case "USER_LOG_IN":
            return {
                ...state,
                userDetails: payload.user_details,
                loginResponse: payload.success,
                responseMessage: payload.info
            };
        case "USER_LOG_OUT": {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            return {
                userDetails: null,
                loginResponse: 0,
                responseMessage: ""
            }
        }
        case "GET_USER_DETAILS":
            return {
                userDetails: payload
            }
        default:
            return state
    }
}

export default userReducer;