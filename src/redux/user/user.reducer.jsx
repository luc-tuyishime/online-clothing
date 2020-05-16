const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_USER':
            console.log('1', payload);
            return {
                ...state,
                currentUser: payload
            }
            break;
    
        default:
            return state;
    }
} 

export default userReducer;