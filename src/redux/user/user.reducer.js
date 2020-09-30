import { UserActionsTypes } from "./user.types.js";

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UserActionsTypes.SET_CURRENT_USER:
            console.log("1", payload);
            return {
                ...state,
                currentUser: payload
            };

        default:
            return state;
    }
};

export default userReducer;
