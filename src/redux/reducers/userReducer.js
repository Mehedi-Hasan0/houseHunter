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
        default:
            return state
    }
}

export default userReducer;